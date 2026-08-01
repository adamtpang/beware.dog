# The Watch

The smallest sellable version of beware.dog. Defined 2026-08-01.

This is what a customer gets for $149 a month. It is deliverable today with
scripts plus manual review. There is no ML build behind it and the landing page
must never claim there is.

## The rule

We only sell what we can deliver this month. Everything below is either a script
in this repo or an hour of the founder's time. If a capability is not on this
page, it is not in the offer and it does not go on the landing.

## What the customer gets

### 1. Lookalike domain watch

We generate the realistic impersonations of the customer's domain (character
drops, doubles, swaps, keyboard neighbours, homoglyphs, hyphenations, other
TLDs, and money words like `-billing`, `-invoice`, `-pay`, `-secure`) and check
which ones are actually registered.

- **First run:** at signup, and also before signup as the sales demo.
- **Cadence:** weekly automated run, results reviewed by a human.
- **Alert:** if a new lookalike appears, the customer hears from us within one
  business day, with what it is, when it was registered, and what to do.
- **Tool:** `scripts/lookalike-check.mjs` (no dependencies, Node 18+).

A domain registered in the last 90 days that mimics theirs is the single
strongest early signal that someone is preparing to invoice their clients or
their bookkeeper. That is the whole reason this is deliverable number one.

### 2. Monthly drill

One simulated attack per month against the handful of people who actually move
money, not the whole company.

- **The email drill:** one phishing email, sent from a domain we control, in the
  shape of the scams currently hitting their industry (fake invoice, changed
  bank details, urgent request from the owner).
- **The voice drill:** one phone call to the same people, following the voice
  clone script pattern (urgency, secrecy, a payment that must happen today).
  We do not need to clone anyone's voice to test whether staff will move money
  on a phone call alone. We test the procedure, not the audio.
- **The debrief:** who clicked, who called back to verify, who moved. Written
  as coaching, never as a gotcha. The owner gets it, the staff get the lesson.

Rules of engagement are agreed in writing with the owner before the first drill.
We never drill anyone the owner has not authorised.

### 3. One page monthly report

Delivered on the same day each month. One page. Plain English. No jargon, no
severity scores, no dashboard.

- What we watched
- What we found (including "nothing", which is a real and good result)
- What was drilled and what happened
- The one thing to fix this month

Template: `templates/monthly-report.md`.

## What The Watch explicitly does NOT do

Say this out loud to every prospect. It is the reason they will trust the parts
we do say.

- We do not read, filter, or sit inside their email. No mailbox access.
- We do not monitor their phone lines or listen to calls.
- We do not touch endpoints, servers, backups, or files.
- We do not detect or stop ransomware.
- We are not a SOC, an EDR, an MSP, or a replacement for any of them.
- We do not offer 24/7 human response. We offer one business day.

If a customer needs those things, the honest answer is that they need an MSP,
and we can say so.

## Delivery runbook

The whole month is roughly 60 to 90 minutes of work per customer.

### At signup (about 30 minutes)

1. Collect: primary domain, any other domains they own, the names and roles of
   everyone who can move money, written drill authorisation.
2. Run the baseline scan:
   ```bash
   node scripts/lookalike-check.mjs their-domain.com --md --out reports/their-domain-baseline.md
   ```
3. Review every hit by hand. A hit is not automatically hostile: parked domains,
   resellers, and unrelated businesses all show up. Mark each one watch, ignore,
   or act.
4. Send the baseline within 24 hours. This is the first value they receive.

### Weekly (about 10 minutes)

1. Re-run the scan. The script prints what is registered now.
2. Diff against last week. Anything new gets human eyes.
3. New lookalike that plausibly targets them: tell them the same day, in plain
   language, with a recommended action (report to registrar, warn clients,
   pre-emptively register the obvious ones).

### Monthly (about 45 minutes)

1. Run the email drill. Log who clicked.
2. Run the voice drill. Log who verified and who did not.
3. Fill `templates/monthly-report.md`. One page, no more.
4. Send it, then offer a 15 minute call to walk through it.
5. Log the outcome in `EVIDENCE.md`, including months where nothing was found.

## Why this is the right smallest unit

- It is honest. Every line can be delivered by one person with a laptop.
- It produces a visible artifact every single month, so the customer can see
  what they are paying for even when nothing bad happens.
- The lookalike scan doubles as the sales demo, which collapses the sales cycle.
- It scales to roughly 25 customers on one person's time, which is exactly the
  founding cap.

## The path after this

Not promises. Sequence, once The Watch has paying customers.

1. Automate the weekly scan and the diff so it runs unattended.
2. Add client side warning: a page the customer's own clients can check before
   paying an invoice.
3. Partner channel: MSPs and IT shops resell The Watch as the layer they do not
   cover. Insurers are the second channel.
4. Only then, product automation of the drills.
