# EVIDENCE: beware.dog

Numbers only. A zero is data and gets logged as a zero. No gate passes without a
number or a dated receipt.

## Baseline (as of 2026-08-01)

| Metric | Value | Source | As-of |
| --- | --- | --- | --- |
| Revenue (stranger $) | **0** | Stripe | 2026-08-01 |
| MRR | **0** | Stripe | 2026-08-01 |
| Active customers | **0** | Stripe | 2026-08-01 |
| Completed pilots | **0** | none run | 2026-08-01 |
| Free scans delivered | **0** | none requested | 2026-08-01 |
| Waitlist signups (real, non-test) | **0** | Neon `waitlist` table | 2026-08-01 |
| Waitlist rows total | 2 (both are my own test rows) | Neon `waitlist` | 2026-08-01 |
| Weekly active usage | n/a, service is delivered by hand | n/a | 2026-08-01 |
| Time to first value | same day (the free scan) | designed, not yet observed | 2026-08-01 |
| Public posts published | **0** | drafts only, see launch/ | 2026-08-01 |
| Cost / burn attributable | domain $54/yr, Vercel and Neon on free tier | Vercel, Neon | 2026-08-01 |
| Top risk | No buyer has ever been asked to pay. Nothing is falsified yet. | this file | 2026-08-01 |

## Offer receipt

No sale has happened. This table stays empty until a stranger pays.

| Field | Value |
| --- | --- |
| Buyer | |
| Problem | |
| Cure | |
| Price paid | |
| Proof of value | |
| Date | |

## The rail, verified 2026-08-01

Checked directly against the Stripe API and rendered in a browser, not assumed.

| Object | ID | State |
| --- | --- | --- |
| Product | `prod_UqwIQXaHGr8fxC` | active, description corrected to match The Watch |
| Price | `price_1TrEQNFL7C10dNyGjDS6RTVp` | active, $149/mo, nickname "beware.dog The Watch - $149/mo", `keep: true` |
| Payment link | `plink_1TrEQUFL7C10dNyGK2XpjKIu` | active |
| Buy URL | https://buy.stripe.com/bJe3cva78dB35kcc4NaMU0s | renders "Subscribe to beware.dog The Watch (Founding)" |

Prices on this product: exactly 1, active. No duplicates were minted. The
archived price and link from the 2026-07-31 catalog cleanup were reactivated,
not replaced.

Note for Adam: the checkout page title shows **anchormarianas.com** because that
is the Stripe account's public business name. A buyer of beware.dog sees a
different brand at the moment of payment. Worth changing in Stripe branding
settings, but it affects every product on the account, so it is your call.

## Verified results log

| Date | Change | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| 2026-07-26 | Fleet bootstrap created the baseline | n/a | file exists | this file |
| 2026-08-01 | OFFER.md filled for real, no brackets | template | real buyer, pain, cure, alternative, price, risk reversal | OFFER.md |
| 2026-08-01 | The Watch defined as the smallest sellable unit | undefined | 3 deliverables, delivery runbook, explicit non-goals | THE_WATCH.md |
| 2026-08-01 | Built the lookalike domain checker | nothing | working script, 0 deps | scripts/lookalike-check.mjs |
| 2026-08-01 | Verified the checker on a real domain | untested | 117 candidates on beware.dog, 14 registered, dated via RDAP | run log below |
| 2026-08-01 | Verified the checker finds real typosquats | unproven | paypal.com: 59 of 86 candidates registered, every generator category fired | run log below |
| 2026-08-01 | Built the monthly report template | nothing | one page template | templates/monthly-report.md |
| 2026-08-01 | Landing rewritten to state what The Watch actually does | claimed 24/7 email, phone and file monitoring plus ransomware, none of it built | states the 3 real deliverables, price on page, plus an explicit "what we do not do" section | app/page.tsx |
| 2026-08-01 | Stripe rail reactivated and labeled | product, price and link all archived, buy button dead | all 3 active, price labeled, `keep: true` | Stripe API, table above |
| 2026-08-01 | Checkout verified in a browser | unverified | renders "Subscribe to beware.dog The Watch (Founding)", SGD 198.28/mo at 1 USD = 1.3307 SGD | browser check |
| 2026-08-01 | Vercel Analytics wired in code | not installed | `@vercel/analytics` + `<Analytics />` in layout | app/layout.tsx |
| 2026-08-01 | Fleet footer added | none | hub + anchormarianas.com + sellsniper.com | components/FleetFooter.tsx |
| 2026-08-01 | Launch posts drafted | none | LinkedIn + local community, sourced, unsent | launch/LAUNCH_DRAFTS.md |

## Tool run log

```
2026-08-01  node scripts/lookalike-check.mjs beware.dog
            117 candidates checked, 14 registered, all "other TLD" variants.
            RDAP dated 8 of 14. Oldest beware.com (1995), newest beware.biz
            (2025-11-25). No typo variants registered against beware.dog.

2026-08-01  node scripts/lookalike-check.mjs paypal.com --no-rdap
            86 candidates, 59 registered. Confirms every generator category
            finds real registrations: dropped letter, doubled letter, swapped
            letters, neighbouring key, lookalike character, hyphenation.
            This is the control test that the tool actually works.
```

## What would falsify the offer

If 20 qualified owners are shown a live scan of their own domain and none of
them pay $149, the problem is the offer or the price, not the landing copy.
Log every scan delivered and every no.

## Rules

- A gate is not PASS without a number or a dated receipt.
- Self-payments and test charges do not count as stranger revenue.
- After every meaningful ship, add one row to the results log.
- Log zeros. A zero is the most common true number here and hiding it is lying.
