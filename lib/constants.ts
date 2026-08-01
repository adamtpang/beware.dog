// The commercial knobs. The landing renders from these, so the page and the
// offer can never drift apart. See OFFER.md and THE_WATCH.md.

// Stripe payment link for The Watch. Backed by price_1TrEQNFL7C10dNyGjDS6RTVp,
// nickname "beware.dog The Watch - $149/mo". One price for this product, ever.
export const PAYMENT_LINK = "https://buy.stripe.com/bJe3cva78dB35kcc4NaMU0s";

export const FOUNDING_PRICE = 149; // USD / month, founding rate
export const STANDARD_PRICE = 299; // USD / month, standard rate
export const FOUNDING_SPOTS = 25;

export const CONTACT_EMAIL = "hello@beware.dog";

// What the customer actually gets. Kept in sync with THE_WATCH.md by hand.
// Nothing goes in this list that cannot be delivered this month.
export const WATCH_DELIVERABLES = [
  {
    n: "01",
    title: "We watch the register for fakes of you",
    body: "Every week we check the domains built to be mistaken for yours: a dropped letter, a doubled letter, a different ending, your name with the word invoice or billing bolted on. If a new one appears, you hear from us within one business day with what it is and what to do about it.",
  },
  {
    n: "02",
    title: "We drill the people who move your money",
    body: "Once a month we test the handful of people who can send a payment. One fake invoice by email, one payment request by phone. Then a short debrief: who verified, who did not, and the one habit to change. It is coaching, never a gotcha, and you approve the rules before we run anything.",
  },
  {
    n: "03",
    title: "You get one page a month",
    body: "What we watched, what we found, what we tested, and the single thing to fix. Plain English, no jargon, no dashboard to log into. Two minutes to read. Some months it says we found nothing, and that is a good month.",
  },
];

export const INCLUDED = [
  "Weekly lookalike domain scan of your business domain",
  "Alerts within one business day when a new fake appears",
  "One phishing drill and one phone drill a month, on the people who pay",
  "A one page monthly report in plain English",
  "A named human on a direct line, not a ticket queue",
  "Cancel anytime, no contract",
  "Month is free if your report lands late",
];

// Said out loud on the page. The limits are why the promises are believable.
export const NOT_INCLUDED = [
  "We do not read, filter, or sit inside your email",
  "We do not monitor your phone lines or listen to your calls",
  "We do not touch your files, servers, or backups",
  "We do not stop ransomware, and we will tell you to call an MSP for that",
];
