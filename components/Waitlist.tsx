"use client";

import { useState } from "react";

type State = "idle" | "loading" | "done" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        setState("done");
        setEmail("");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-allclear/40 bg-allclear/10 px-5 py-4 text-bone">
        <span className="status-dot h-2.5 w-2.5 shrink-0 rounded-full bg-allclear" />
        <p className="text-sm">
          You are on the watchlist. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="wl-email" className="sr-only">
        Email address
      </label>
      <input
        id="wl-email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (state === "error") setState("idle");
        }}
        placeholder="you@yourbusiness.com"
        className="w-full flex-1 rounded-xl border border-line bg-night/60 px-4 py-3.5 text-bone outline-none transition placeholder:text-ash-dim focus:border-brass/70 focus:ring-2 focus:ring-brass/20"
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="shrink-0 rounded-xl bg-brass px-5 py-3.5 font-semibold text-night transition hover:bg-brass-soft disabled:opacity-70"
      >
        {state === "loading" ? "Sending..." : "Send me the watchlist"}
      </button>
      {state === "error" && (
        <p className="text-sm text-ember sm:hidden">
          That did not go through. Check the address and try again.
        </p>
      )}
    </form>
  );
}
