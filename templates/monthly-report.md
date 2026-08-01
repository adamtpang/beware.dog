# The Watch: monthly report

<!--
Deliverable 3 of The Watch. See THE_WATCH.md.

Rules for filling this in:
  - One page. If it runs to two, cut it.
  - Plain English. No severity scores, no CVEs, no jargon.
  - "We found nothing" is a real result and a good one. Say it plainly.
  - Never imply we monitor mailboxes, phones, or files. We do not.
  - Every lookalike row must have had human eyes on it before this goes out.
  - No em-dashes.

Generate the lookalike section with:
  node scripts/lookalike-check.mjs CUSTOMER-DOMAIN.com --md
-->

**Business:** {{BUSINESS_NAME}}
**Domain watched:** {{DOMAIN}}
**Period:** {{MONTH}} {{YEAR}}
**Prepared by:** Adam Pangelinan, beware.dog
**Date sent:** {{DATE}}

---

## The short version

{{ONE_PARAGRAPH. What happened this month in three sentences an owner can read
while standing up. Lead with the answer: either "nothing came at you this
month" or "here is the one thing that did".}}

**Status this month:** {{ALL CLEAR | SOMETHING TO LOOK AT | ACT NOW}}

---

## 1. Lookalike domains

We watch for domains registered to look like yours. A new one is the earliest
warning that somebody is preparing to invoice your clients or your bookkeeper
while pretending to be you.

{{PASTE the output of: node scripts/lookalike-check.mjs {{DOMAIN}} --md}}

**What changed since last month:** {{NEW_SINCE_LAST_MONTH, or "nothing new".}}

**What we recommend:** {{One concrete action, or "no action needed this month".
Examples: report the domain to its registrar, register the obvious variant
yourself before somebody else does, warn your clients that invoices only ever
come from {{DOMAIN}}.}}

---

## 2. This month's drill

We test the people who can move money, not the whole company.

| Drill | Who was tested | What happened |
| --- | --- | --- |
| Fake invoice email | {{NAMES_OR_ROLES}} | {{RESULT}} |
| Payment request by phone | {{NAMES_OR_ROLES}} | {{RESULT}} |

**What went well:** {{The person who called back to verify. Name them. This is
coaching, never a gotcha.}}

**What to tighten:** {{The one habit to change. Keep it to one.}}

---

## 3. The one thing to fix this month

> {{THE_SINGLE_ACTION}}

{{Why it matters, in two sentences. If last month's action is still open, say
so here instead of adding a new one.}}

---

## What we watched, and what we did not

We watched: your domain and its lookalikes, and we ran the drills above.

We did not read your email, listen to your calls, or touch your files. That is
by design. If you want mailbox filtering or ransomware protection, you need an
MSP, and we are happy to say so and point you at one.

---

**Questions:** reply to this email or call. You get a person, not a ticket.

**Your rate:** ${{PRICE}} per month, founding rate, locked. Cancel anytime.
