#!/usr/bin/env node
// Lookalike domain checker. Deliverable 1 of The Watch (see THE_WATCH.md).
//
// Generates the realistic impersonations of a customer's domain, then checks
// which of them are actually registered. A lookalike registered in the last 90
// days is the strongest early signal that someone is preparing to invoice the
// customer's clients or their bookkeeper.
//
// No dependencies. Node 18+.
//
//   node scripts/lookalike-check.mjs acmetitle.com
//   node scripts/lookalike-check.mjs acmetitle.com --md --out reports/acme.md
//   node scripts/lookalike-check.mjs acmetitle.com --json
//
// Honest limits, documented so nobody oversells this:
//   - Registration is inferred from DNS delegation (NS, then A/MX). A domain
//     that is registered but not delegated will read as available here.
//   - RDAP supplies the registration date for hits. Some registries rate limit
//     or omit it, in which case the date reads as unknown.
//   - A hit is not automatically hostile. Every hit needs human review.

import { Resolver } from "node:dns/promises";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

/* ---- config ------------------------------------------------------------- */

const TLDS = [
  "com", "net", "org", "co", "io", "us", "biz", "info", "online", "site",
  "xyz", "shop", "live", "pro", "email", "group", "services", "company",
  "agency", "cc",
];

// The words a fraudster bolts on when the goal is a payment.
const MONEY_WORDS = [
  "billing", "invoice", "invoices", "pay", "payments", "secure", "support",
  "login", "portal", "accounts", "verify", "wire",
];

// Two level public suffixes we care about, so example.co.uk splits correctly.
const MULTI_TLDS = [
  "co.uk", "org.uk", "com.au", "net.au", "co.nz", "com.br", "co.jp",
  "com.mx", "co.za", "com.sg", "com.ph",
];

const KEYBOARD = {
  q: "wa", w: "qes", e: "wrd", r: "etf", t: "ryg", y: "tuh", u: "yij",
  i: "uok", o: "ipl", p: "ol", a: "qsz", s: "awdx", d: "sefc", f: "drgv",
  g: "fthb", h: "gyjn", j: "hukm", k: "jiln", l: "kop", z: "asx", x: "zsdc",
  c: "xdfv", v: "cfgb", b: "vghn", n: "bhjm", m: "njk",
  0: "9o", 1: "2ql", 2: "13", 3: "24", 4: "35", 5: "46", 6: "57", 7: "68",
  8: "79", 9: "80",
};

// Characters that read as each other at a glance in an inbox.
const HOMOGLYPHS = {
  a: ["e"], b: ["6"], e: ["3", "a"], g: ["q", "9"], i: ["1", "l", "j"],
  l: ["1", "i"], o: ["0"], q: ["g"], s: ["5", "z"], z: ["s", "2"],
  0: ["o"], 1: ["l", "i"], 5: ["s"], 9: ["g"],
};

// Multi character swaps, the classic ones that fool a fast reader.
const PAIR_SWAPS = [
  ["rn", "m"], ["m", "rn"], ["vv", "w"], ["w", "vv"], ["cl", "d"],
  ["d", "cl"], ["nn", "m"],
];

/* ---- domain helpers ----------------------------------------------------- */

function splitDomain(domain) {
  const clean = domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "");

  for (const suffix of MULTI_TLDS) {
    if (clean.endsWith("." + suffix)) {
      return { name: clean.slice(0, -(suffix.length + 1)), tld: suffix };
    }
  }
  const dot = clean.lastIndexOf(".");
  if (dot < 1) throw new Error(`Not a domain: ${domain}`);
  return { name: clean.slice(0, dot), tld: clean.slice(dot + 1) };
}

/* ---- permutation generators --------------------------------------------- */
// Each returns bare names (no TLD). The caller attaches TLDs.

const omission = (n) =>
  [...n].map((_, i) => n.slice(0, i) + n.slice(i + 1));

const duplication = (n) =>
  [...n].map((c, i) => n.slice(0, i) + c + c + n.slice(i + 1));

const transposition = (n) =>
  [...n].slice(0, -1).map(
    (_, i) => n.slice(0, i) + n[i + 1] + n[i] + n.slice(i + 2),
  );

function replacement(n) {
  const out = [];
  for (let i = 0; i < n.length; i++) {
    for (const c of KEYBOARD[n[i]] ?? "") {
      out.push(n.slice(0, i) + c + n.slice(i + 1));
    }
  }
  return out;
}

function insertion(n) {
  const out = [];
  for (let i = 0; i < n.length; i++) {
    for (const c of KEYBOARD[n[i]] ?? "") {
      out.push(n.slice(0, i) + c + n.slice(i) , n.slice(0, i + 1) + c + n.slice(i + 1));
    }
  }
  return out;
}

function homoglyph(n) {
  const out = [];
  for (let i = 0; i < n.length; i++) {
    for (const c of HOMOGLYPHS[n[i]] ?? []) {
      out.push(n.slice(0, i) + c + n.slice(i + 1));
    }
  }
  for (const [from, to] of PAIR_SWAPS) {
    let idx = n.indexOf(from);
    while (idx !== -1) {
      out.push(n.slice(0, idx) + to + n.slice(idx + from.length));
      idx = n.indexOf(from, idx + 1);
    }
  }
  return out;
}

function hyphenation(n) {
  const out = [];
  for (let i = 1; i < n.length; i++) {
    out.push(n.slice(0, i) + "-" + n.slice(i));
  }
  // and the reverse: a hyphenated name with the hyphen dropped
  if (n.includes("-")) out.push(n.replaceAll("-", ""));
  return out;
}

function buildCandidates(name, tld, { deep = false } = {}) {
  const seen = new Map(); // domain -> kind

  const add = (domain, kind) => {
    if (!/^[a-z0-9-]+(\.[a-z0-9.-]+)$/.test(domain)) return;
    if (domain.startsWith("-") || domain.includes("--")) return;
    if (!seen.has(domain)) seen.set(domain, kind);
  };

  const sameTld = (names, kind) => names.forEach((n) => add(`${n}.${tld}`, kind));

  sameTld(omission(name), "dropped letter");
  sameTld(duplication(name), "doubled letter");
  sameTld(transposition(name), "swapped letters");
  sameTld(replacement(name), "neighbouring key");
  sameTld(homoglyph(name), "lookalike character");
  sameTld(hyphenation(name), "hyphenation");
  if (deep) sameTld(insertion(name), "inserted letter");

  // same name, other TLDs
  for (const t of TLDS) {
    if (t !== tld) add(`${name}.${t}`, "other TLD");
  }

  // money words, on the original TLD and on .com
  const affixTlds = [...new Set([tld, "com"])];
  for (const w of MONEY_WORDS) {
    for (const t of affixTlds) {
      add(`${name}-${w}.${t}`, "money word");
      add(`${w}-${name}.${t}`, "money word");
    }
  }

  // the missing dot after www, a classic
  add(`www${name}.${tld}`, "missing dot");

  return [...seen].map(([domain, kind]) => ({ domain, kind }));
}

/* ---- registration checks ------------------------------------------------ */

const withTimeout = (promise, ms) =>
  Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);

async function isRegistered(domain, timeoutMs = 4000) {
  const resolver = new Resolver({ timeout: timeoutMs, tries: 1 });
  // NS is the cheapest signal that a domain is delegated, so registered.
  try {
    const ns = await withTimeout(resolver.resolveNs(domain), timeoutMs);
    if (ns?.length) return true;
  } catch (err) {
    // ENODATA means the name exists but has no NS at this level. Keep looking.
    if (err?.code === "ENOTFOUND" || err?.code === "NXDOMAIN") return false;
  }
  for (const method of ["resolve4", "resolveMx"]) {
    try {
      const res = await withTimeout(resolver[method](domain), timeoutMs);
      if (res?.length) return true;
    } catch {
      /* fall through */
    }
  }
  return false;
}

async function rdap(domain, timeoutMs = 6000) {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    const res = await fetch(`https://rdap.org/domain/${domain}`, {
      signal: ctrl.signal,
      headers: { accept: "application/rdap+json" },
    });
    clearTimeout(t);
    if (!res.ok) return {};
    const body = await res.json();
    const reg = body.events?.find((e) => e.eventAction === "registration");
    const registrar = body.entities?.find((e) =>
      e.roles?.includes("registrar"),
    );
    const name = registrar?.vcardArray?.[1]?.find((f) => f[0] === "fn")?.[3];
    return { registered: reg?.eventDate ?? null, registrar: name ?? null };
  } catch {
    return {};
  }
}

async function pool(items, limit, worker) {
  const out = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++;
      out[i] = await worker(items[i], i);
    }
  });
  await Promise.all(runners);
  return out;
}

const daysSince = (iso) =>
  iso ? Math.floor((Date.now() - new Date(iso).getTime()) / 86400000) : null;

/* ---- reporting ---------------------------------------------------------- */

function toMarkdown(target, hits, total, freshDays) {
  const lines = [];
  lines.push(`### Lookalike domain watch: ${target}`);
  lines.push("");
  lines.push(
    `Checked ${total} realistic impersonations of \`${target}\`. ` +
      `${hits.length} are registered.`,
  );
  lines.push("");

  if (!hits.length) {
    lines.push(
      "**Nothing registered against you this cycle.** That is the result we " +
        "want. The watch continues.",
    );
    return lines.join("\n");
  }

  const fresh = hits.filter(
    (h) => h.ageDays !== null && h.ageDays <= freshDays,
  );
  if (fresh.length) {
    lines.push(
      `**${fresh.length} of these were registered in the last ${freshDays} days.** ` +
        "New registrations are the ones that matter. Review these first.",
    );
    lines.push("");
  }

  lines.push("| Domain | Looks like | Registered | Registrar | Age |");
  lines.push("| --- | --- | --- | --- | --- |");
  for (const h of hits) {
    const age =
      h.ageDays === null
        ? "unknown"
        : h.ageDays <= freshDays
          ? `${h.ageDays} days, NEW`
          : `${h.ageDays} days`;
    lines.push(
      `| \`${h.domain}\` | ${h.kind} | ${h.registered?.slice(0, 10) ?? "unknown"} | ${h.registrar ?? "unknown"} | ${age} |`,
    );
  }
  lines.push("");
  lines.push(
    "Every row needs human review before it goes to the customer. Parked " +
      "domains, resellers and unrelated real businesses all show up here.",
  );
  return lines.join("\n");
}

/* ---- cli ---------------------------------------------------------------- */

function parseArgs(argv) {
  const args = { positional: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith("--")) {
        args.flags[key] = next;
        i++;
      } else {
        args.flags[key] = true;
      }
    } else {
      args.positional.push(a);
    }
  }
  return args;
}

const HELP = `
beware.dog lookalike domain checker

  node scripts/lookalike-check.mjs <domain> [options]

Options:
  --md               Print the markdown block for the monthly report
  --json             Print raw JSON
  --out <path>       Write the output to a file
  --deep             Also generate inserted-letter variants (slower)
  --concurrency <n>  Parallel DNS lookups (default 24)
  --fresh <days>     Flag registrations newer than this (default 90)
  --no-rdap          Skip registration dates, DNS only (much faster)
  --help             This message
`;

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));

  if (flags.help || !positional.length) {
    console.log(HELP.trim());
    process.exit(positional.length ? 0 : 1);
  }

  const target = positional[0];
  const { name, tld } = splitDomain(target);
  const clean = `${name}.${tld}`;
  const freshDays = Number(flags.fresh ?? 90);
  const concurrency = Number(flags.concurrency ?? 24);
  const quiet = flags.json || flags.md;

  const candidates = buildCandidates(name, tld, { deep: Boolean(flags.deep) });

  if (!quiet) {
    console.log(`\nbeware.dog lookalike watch`);
    console.log(`target:     ${clean}`);
    console.log(`candidates: ${candidates.length}`);
    console.log(`checking DNS, this takes a moment...\n`);
  }

  const checked = await pool(candidates, concurrency, async (c) => ({
    ...c,
    registered: await isRegistered(c.domain),
  }));

  let hits = checked.filter((c) => c.registered);

  if (!flags["no-rdap"]) {
    if (!quiet) console.log(`resolved ${hits.length} registered, dating them...\n`);
    hits = await pool(hits, 8, async (h) => {
      const info = await rdap(h.domain);
      return {
        ...h,
        registered: info.registered ?? null,
        registrar: info.registrar ?? null,
        ageDays: daysSince(info.registered),
      };
    });
  } else {
    hits = hits.map((h) => ({ ...h, registered: null, registrar: null, ageDays: null }));
  }

  // Newest first, unknown dates last. New registrations are the story.
  hits.sort((a, b) => (a.ageDays ?? 1e9) - (b.ageDays ?? 1e9));

  const payload = {
    target: clean,
    scannedAt: new Date().toISOString(),
    candidatesChecked: candidates.length,
    registeredCount: hits.length,
    freshWindowDays: freshDays,
    hits,
  };

  let output;
  if (flags.json) {
    output = JSON.stringify(payload, null, 2);
  } else if (flags.md) {
    output = toMarkdown(clean, hits, candidates.length, freshDays);
  } else {
    const lines = [];
    lines.push(`registered lookalikes: ${hits.length} of ${candidates.length} checked\n`);
    for (const h of hits) {
      const age =
        h.ageDays === null ? "" : h.ageDays <= freshDays ? `  <-- NEW (${h.ageDays}d)` : `  (${h.ageDays}d)`;
      lines.push(`  ${h.domain.padEnd(34)} ${h.kind.padEnd(22)}${age}`);
    }
    if (!hits.length) lines.push("  nothing registered. good result.");
    output = lines.join("\n");
  }

  if (flags.out) {
    const path = String(flags.out);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, output + "\n", "utf8");
    if (!quiet) console.log(output);
    console.log(`\nwritten to ${path}`);
  } else {
    console.log(output);
  }
}

main().catch((err) => {
  console.error(`error: ${err.message}`);
  process.exit(1);
});
