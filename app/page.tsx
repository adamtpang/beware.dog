import { DogMark } from "@/components/DogMark";
import { DogMascot } from "@/components/DogMascot";
import { Waitlist } from "@/components/Waitlist";
import {
  CONTACT_EMAIL,
  FOUNDING_PRICE,
  FOUNDING_SPOTS,
  PAYMENT_LINK,
  STANDARD_PRICE,
} from "@/lib/constants";

/* ---- small inline icons ------------------------------------------------- */

function IconHook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 4V3a2 2 0 0 0-2-2 2 2 0 0 0-2 2v9a4 4 0 1 1-8 0" />
      <circle cx="19" cy="4" r="2" />
      <path d="M6.5 17.5 3 21" />
    </svg>
  );
}

function IconVoice({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="6" x2="8" y2="18" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="16" y1="7" x2="16" y2="17" />
      <line x1="20" y1="10" x2="20" y2="14" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.4" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-allclear/30 bg-allclear/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-allclear">
      <span className="status-dot h-2 w-2 rounded-full bg-allclear" />
      {label}
    </span>
  );
}

/* ---- content ------------------------------------------------------------ */

const FEARS = [
  {
    icon: IconHook,
    kicker: "Phishing and fake invoices",
    title: "The email that is not who it says it is",
    body: "It looks like your bank, your supplier, or you. It asks someone to click a link, pay an invoice, or hand over a password. One wrong click and they are inside. The dog sniffs these out and pulls them before anyone in your office ever clicks.",
  },
  {
    icon: IconVoice,
    kicker: "Voice-spoof social engineering",
    title: "The voice that sounds exactly like you",
    body: "AI can now clone a voice from a few seconds of audio. The scammer calls your bookkeeper sounding just like you and asks them to move money today. The dog knows your real patterns and flags the fake before the wire ever goes out.",
  },
  {
    icon: IconLock,
    kicker: "Ransomware",
    title: "The morning every file is locked",
    body: "You show up, nothing opens, and a stranger wants a ransom to give your own business back. The dog watches your files and cloud around the clock and catches it while it is still one machine, not your whole company.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "We put the dog on watch",
    body: "We connect beware.dog to your email, phone lines, and cloud storage in about thirty minutes. Nothing for your team to install. No new hardware to buy.",
  },
  {
    n: "02",
    title: "It watches everything, day and night",
    body: "Every message, every login, every file change gets checked against the tricks scammers actually use. Your team keeps working. Nobody has to become a security expert.",
  },
  {
    n: "03",
    title: "It barks, then a human steps in",
    body: "The moment something looks wrong you get a plain-English alert, and a real person helps you shut it down. No jargon, no panic, just handled.",
  },
];

const INCLUDED = [
  "24/7 monitoring of your email, phone lines, and cloud files",
  "A real human response the moment a threat shows up",
  "Plain-English alerts with zero jargon",
  "A one-page monthly report on what we caught",
  "Onboarding in about thirty minutes, no new hardware",
  "A direct line to the founder, not a ticket queue",
  "Cancel anytime, no lock-in",
];

/* ---- page --------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="relative">
      <div className="hazard h-1.5 w-full" />

      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-night/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <a href="#top" className="flex items-center gap-2.5">
            <DogMark className="h-7 w-7 text-brass" />
            <span className="font-display text-lg font-extrabold tracking-tight">
              beware<span className="text-brass">.dog</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block">
              <StatusPill label="On watch" />
            </span>
            <a
              href="#offer"
              className="rounded-lg bg-brass px-4 py-2 text-sm font-semibold text-night transition hover:bg-brass-soft"
            >
              Get protected
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* hero */}
        <section className="relative overflow-hidden">
          <div className="spotlight pointer-events-none absolute inset-0" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-10 gap-y-12 px-5 pb-20 pt-14 lg:grid-cols-2 lg:pb-28 lg:pt-20">
            <div className="relative">
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                Beware of Dog
              </p>
              <h1 className="font-display text-4xl font-black leading-[1.03] sm:text-5xl lg:text-[3.9rem]">
                An AI guard dog that never sleeps on your business.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ash">
                Scam emails, cloned voices, ransomware. beware.dog keeps watch
                over your inbox, your phone lines, and your files around the
                clock. It barks the second something looks wrong, and a real
                person helps you shut it down before it costs you a dime. Built
                for the small shops that cannot afford a security team.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3">
                <a
                  href="#offer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brass px-6 py-4 text-base font-bold text-night shadow-[0_0_40px_-8px_rgba(245,179,1,0.5)] transition hover:bg-brass-soft"
                >
                  Put the dog on watch
                  <span className="transition group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
                <p className="text-sm text-ash-dim">
                  Founding price. Cancel anytime. A human on the other end, not a
                  ticket queue.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <DogMascot className="h-auto w-full" />
            </div>
          </div>

          {/* who it is for */}
          <div className="border-y border-line/70 bg-panel/40">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-5 py-4 text-sm text-ash-dim">
              <span className="font-semibold uppercase tracking-[0.18em] text-ash">
                Built for
              </span>
              {[
                "Dental clinics",
                "Law firms",
                "HVAC crews",
                "Accountants",
                "Any shop too small for a security team",
              ].map((who, i) => (
                <span key={who} className="flex items-center gap-3">
                  {i > 0 && <span className="text-brass/60">&middot;</span>}
                  {who}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* insurance framing */}
        <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
            Insurance you hope you never need
          </p>
          <h2 className="font-display max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Most small businesses do not get hacked because they are important.
            They get hacked because they are easy.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ash">
            One click on one fake invoice can drain an account, freeze every
            file, and end a business that took twenty years to build. You lock
            your front door at night. beware.dog is the dog behind it. The kind
            of protection you pay for and hope you never have to use.
          </p>
        </section>

        {/* fears it kills */}
        <section className="border-t border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              The things that keep you up at night
            </p>
            <h2 className="font-display max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Three ways a small business gets bitten. The dog catches all
              three.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {FEARS.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex flex-col rounded-2xl border border-line bg-panel-2 p-6 transition hover:border-brass/40"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ash-dim">
                      {f.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ash">
                      {f.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* how it works */}
        <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
            How the dog works
          </p>
          <h2 className="font-display max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            On watch in about thirty minutes. No new hardware, no IT degree.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-line bg-panel-2 p-6"
              >
                <span className="font-display text-4xl font-black text-brass/25">
                  {s.n}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ash">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-brass/30 bg-brass/[0.06] p-6">
            <DogMark className="mt-0.5 h-8 w-8 shrink-0 text-brass" />
            <p className="text-[15px] leading-relaxed text-bone">
              <span className="font-semibold">Watched personally, for now.</span>{" "}
              Every account today is monitored by the founder himself. You get a
              direct line and a real name, not a support ticket in a queue. That
              is the promise while we are small, and honestly it is the best part.
            </p>
          </div>
        </section>

        {/* offer */}
        <section id="offer" className="border-t border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  The offer
                </p>
                <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  One flat retainer. Your whole business on watch.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ash">
                  No per-seat pricing, no surprise bills, no year-long contract.
                  One monthly rate covers monitoring, real human response, and a
                  direct line to the person watching your business.
                </p>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ash-dim">
                  Founding spots are limited to {FOUNDING_SPOTS} businesses
                  because each one is watched personally. When they fill, the
                  price goes back to ${STANDARD_PRICE} a month.
                </p>
              </div>

              <div className="rounded-3xl border border-brass/40 bg-panel-2 p-8 shadow-[0_0_60px_-20px_rgba(245,179,1,0.35)]">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-extrabold">
                    The Watch
                  </h3>
                  <span className="rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    Founding rate
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-3">
                  <span className="font-display text-5xl font-black">
                    ${FOUNDING_PRICE}
                  </span>
                  <span className="pb-1 text-ash">/ month</span>
                  <span className="pb-1 text-lg text-ash-dim line-through">
                    ${STANDARD_PRICE}
                  </span>
                </div>
                <p className="mt-1 text-sm text-brass">
                  Founding rate, locked for life.
                </p>

                <ul className="mt-7 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-allclear" />
                      <span className="text-[15px] leading-snug text-bone">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={PAYMENT_LINK}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brass px-6 py-4 text-base font-bold text-night transition hover:bg-brass-soft"
                >
                  Claim a founding spot
                </a>
                <p className="mt-3 text-center text-xs text-ash-dim">
                  Secure checkout by Stripe. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* waitlist */}
        <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <div className="rounded-3xl border border-line bg-panel-2 p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  Not ready yet?
                </p>
                <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Get the scams hitting small businesses this month.
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ash">
                  Drop your email and we will send the handful of scams actually
                  going around right now, in plain English, plus first access
                  when new founding spots open. No noise, no spam, unsubscribe
                  any time.
                </p>
              </div>
              <div>
                <Waitlist />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="border-t border-line/70">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div className="max-w-sm">
              <a href="#top" className="flex items-center gap-2.5">
                <DogMark className="h-7 w-7 text-brass" />
                <span className="font-display text-lg font-extrabold tracking-tight">
                  beware<span className="text-brass">.dog</span>
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-ash">
                The AI guard dog for small business. It watches, it warns, it
                never sleeps.
              </p>
            </div>
            <div className="text-sm text-ash">
              <p className="font-semibold uppercase tracking-[0.18em] text-ash-dim">
                Get in touch
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-block text-bone transition hover:text-brass"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line/70 pt-6 text-xs text-ash-dim sm:flex-row sm:items-center">
            <p>&copy; 2026 beware.dog. On watch.</p>
            <p className="uppercase tracking-[0.2em]">Never sleeps. Never quits.</p>
          </div>
        </div>
        <div className="hazard h-1.5 w-full" />
      </footer>
    </div>
  );
}
