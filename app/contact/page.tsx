import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact beware.dog",
  description: "Contact Adam Pangelinan about a free lookalike-domain scan, The Watch, billing, or privacy.",
  alternates: { canonical: "https://beware.dog/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Contact</p>
      <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">Talk to the person doing the watching.</h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ash">
        Adam Pangelinan handles free lookalike-domain scan requests, service questions, billing support, security reports, and privacy requests for beware.dog. A useful first message names the business domain and the question, but never includes a password, payment credential, or private account access.
      </p>
      <a href={`mailto:${CONTACT_EMAIL}?subject=beware.dog%20request`} className="mt-8 inline-flex rounded-xl bg-brass px-5 py-3 font-bold text-night">
        Email {CONTACT_EMAIL}
      </a>
      <p className="mt-6 text-sm leading-relaxed text-ash-dim">
        No employee drill is run from a website request alone. The customer must agree to the participants, scenario, timing rules, and escalation process before a live drill begins.
      </p>
    </main>
  );
}
