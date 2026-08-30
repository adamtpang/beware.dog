import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, FOUNDING_PRICE, FOUNDING_SPOTS, STANDARD_PRICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About beware.dog",
  description: "Who operates beware.dog, what The Watch includes, and where the service deliberately stops.",
  alternates: { canonical: "https://beware.dog/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">About beware.dog</p>
      <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">A focused fraud watch for small businesses.</h1>
      <div className="mt-8 space-y-6 text-lg leading-relaxed text-ash">
        <p>
          beware.dog is operated by Adam Pangelinan for businesses with 5 to 50 people that move money by email or phone and do not have a dedicated security team. The service focuses on lookalike domains, fake-invoice email, and voice-clone payment requests.
        </p>
        <p>
          The Watch includes a weekly scan for domains built to resemble the customer&apos;s domain, an alert within one business day when a new registration appears, one approved phishing drill and one phone drill each month, and a one-page monthly report reviewed by a named human.
        </p>
        <p>
          The founding offer is ${FOUNDING_PRICE} per month for up to {FOUNDING_SPOTS} customers, with the founding rate locked while the subscription remains active. The listed standard rate after those spots fill is ${STANDARD_PRICE} per month, and the subscription can be canceled without an annual contract.
        </p>
        <p>
          beware.dog does not read customer email, monitor phone calls, touch files or backups, or claim to stop ransomware. Customer approval is required before any drill, and the service is coaching for a payment-verification process rather than a replacement for managed IT, incident response, insurance, or legal advice.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/#offer" className="rounded-xl bg-brass px-5 py-3 font-bold text-night">Start The Watch</Link>
        <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-xl border border-line px-5 py-3 font-semibold text-bone">Email beware.dog</a>
      </div>
    </main>
  );
}
