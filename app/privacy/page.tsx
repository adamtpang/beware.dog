import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "beware.dog Privacy",
  description: "How beware.dog handles waitlist emails, service data, analytics, checkout, and deletion requests.",
  alternates: { canonical: "https://beware.dog/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Privacy</p>
      <h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-5xl">Privacy policy</h1>
      <p className="mt-3 text-sm text-ash-dim">Last updated August 30, 2026</p>
      <div className="mt-8 space-y-7 text-base leading-relaxed text-ash">
        <p>
          beware.dog is operated by Adam Pangelinan. The public site collects an email address only when a visitor submits the watchlist form, while paid service delivery requires information the customer deliberately provides during onboarding.
        </p>
        <section>
          <h2 className="font-display text-2xl font-bold text-bone">Waitlist and contact data</h2>
          <p className="mt-2">
            A submitted watchlist email is sent to the beware.dog server and, when the production database is configured, stored in Neon to send the requested fraud updates and founding-spot notices. Messages sent to {CONTACT_EMAIL} are handled by the email providers used by the sender and beware.dog.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-bone">Customer service data</h2>
          <p className="mt-2">
            A customer may provide a business domain, authorized participant names and contact details, payment-verification rules, drill approvals, and resulting verification outcomes. beware.dog uses that information only to run the agreed scans, drills, alerts, reports, support, and billing for that customer.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-bone">Analytics, hosting, and payment</h2>
          <p className="mt-2">
            Vercel hosts the site and provides Web Analytics, receiving ordinary request information such as IP address, browser details, route, and timing data. Stripe hosts subscription checkout and processes payment information under Stripe&apos;s policy; beware.dog does not collect card details in this website.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-bold text-bone">Retention and choices</h2>
          <p className="mt-2">
            Waitlist and customer records are kept while needed to provide the requested communication or service, maintain security and billing records, or meet legal obligations. To unsubscribe, correct information, request deletion, or ask a privacy question, email <a href={`mailto:${CONTACT_EMAIL}`} className="text-brass underline underline-offset-4">{CONTACT_EMAIL}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
