# OFFER: beware.dog

Filled 2026-08-01. This is the real offer. No brackets.

## One-liner

For **the owner of a 5 to 50 person business that moves money by email** (title
company, bookkeeping and accounting firm, agency, clinic) who struggle with
**staff who approve wires and invoices from an inbox and a phone line that can
now both be faked by AI**, **beware.dog** is a **monthly fraud watch service**
that **watches for lookalike domains registered against them, drills their money
handlers on fake emails and cloned voices, and reports what it found in one
page**. Unlike **an IT provider that fixes laptops or a per-seat awareness
platform built for enterprises**, we **watch the specific impersonation attack
that takes their money and put a named human on it, for one flat monthly rate**.

## Buyer

The owner or operator, not an IT manager. There is no IT manager.

- 5 to 50 people
- Money leaves the business on someone's say-so over email or phone
- Typical: title and escrow companies, bookkeepers, CPA and accounting firms,
  small agencies, dental and medical clinics, property managers, law firms
- No security staff, no security budget line, an MSP at best
- Already nervous about AI voice cloning, has read a story about it

## Pain

Their business runs on trust over email and phone, and AI just made both
forgeable for free. A scammer registers a domain one letter off from theirs,
emails the bookkeeper a real looking invoice, then follows up with a phone call
in a cloned voice of the owner to push it through. The money goes out by wire
and does not come back. The owner has no way to know any of this is happening
until the money is gone.

## Cure

The Watch. A monthly service, described in full in THE_WATCH.md:

1. **Lookalike domain watch.** We monitor their domain for newly registered
   lookalikes and typosquats and tell them within one business day when one
   appears.
2. **Monthly drill.** One simulated phishing email and one simulated voice
   clone attempt against the people who actually move money, then a short
   debrief of who bit and what to change.
3. **One page monthly report.** What we watched, what we found, what to fix,
   in plain English an owner can read in two minutes.

## Alternative

What they do instead today:

- **Nothing.** The most common option, and the one we actually compete with.
- **Their MSP or IT guy.** Keeps the laptops running and the backups going. Does
  not register-watch their domain, does not drill their staff on voice clones.
- **Enterprise awareness platforms.** Priced and built per seat for companies
  with a security team to run them. Nobody at a 12 person title company is
  configuring a phishing simulation platform.
- **Cyber insurance.** Pays out after the loss. Does not prevent it, and
  increasingly asks whether you ran training before it pays.

## Proof

Honest state as of 2026-08-01: **zero paying customers, zero pilots completed.**
There is no case study yet and we will not invent one. What we can show a first
buyer today:

- A live lookalike domain scan of their own domain, run before they pay, using
  `scripts/lookalike-check.mjs`. This is the demo and the proof in one.
- The report template they will receive every month (`templates/monthly-report.md`).
- A named human, the founder, on a direct line.

The first buyer is a founding customer and gets the founding rate for life.

## Price

- **$149 per month**, founding rate, locked for life. Standard rate is $299.
- Founding spots capped at 25 because each is watched personally.
- Stripe price: `price_1TrEQNFL7C10dNyGjDS6RTVp`, nickname
  "beware.dog The Watch - $149/mo". One price only.

## Risk reversal

- Cancel anytime, no contract, no lock-in.
- The first lookalike scan is run and shown before any money changes hands.
- If the first monthly report does not land within 7 days of signup, that month
  is free. This is a delivery promise fully inside our control, not a promise
  about what attackers do.

## Grand-slam checks

- [x] Dream outcome is clear and valuable: the wire that would have gone out
      does not go out, and the owner stops feeling blind.
- [x] Perceived likelihood of achievement is high: the lookalike scan produces a
      concrete result on their own domain before they buy.
- [x] Time delay is short: first scan same day, first report inside 7 days.
- [x] Effort and sacrifice are low: they give us a domain and the names of who
      moves money. No install, no hardware, no portal to learn.
- [x] Risk is reversed: cancel anytime, scan shown before purchase, month free
      if the report is late.

## What would falsify this offer

If 20 qualified owners see the live scan of their own domain and none of them
pay $149, the pain is not urgent enough at this price and the offer changes,
not the landing copy.
