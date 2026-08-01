import { DogMark } from "@/components/DogMark";
import { DogMascot } from "@/components/DogMascot";
import { FleetFooter } from "@/components/FleetFooter";
import { Waitlist } from "@/components/Waitlist";
import {
  CONTACT_EMAIL,
  FOUNDING_PRICE,
  FOUNDING_SPOTS,
  INCLUDED,
  NOT_INCLUDED,
  PAYMENT_LINK,
  STANDARD_PRICE,
  WATCH_DELIVERABLES,
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

function IconGlobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
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

function IconMinus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <path d="M6 12h12" />
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
    icon: IconGlobe,
    kicker: "The setup",
    title: "The domain that is one letter off from yours",
    body: "Before anyone gets scammed, somebody registers a domain built to be mistaken for yours. That is where the fake invoices come from, and it is the earliest warning you will ever get.",
    weDo: "We scan for those registrations every week and tell you within one business day when a new one appears.",
  },
  {
    icon: IconHook,
    kicker: "The hit",
    title: "The email that is not who it says it is",
    body: "It looks like your bank, your supplier, or you. It asks someone in your office to pay an invoice or change the account the money goes to. One approval and it is gone by wire.",
    weDo: "We drill the people who can actually send a payment, once a month, until verifying first is a habit instead of a policy.",
  },
  {
    icon: IconVoice,
    kicker: "The closer",
    title: "The voice that sounds exactly like you",
    body: "AI clones a voice from seconds of audio. The scammer calls your bookkeeper sounding just like you, says it is urgent, says keep it quiet, and asks them to move money today.",
    weDo: "We test whether your team will move money on a phone call alone, then fix the procedure so the answer is always no.",
  },
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
                Someone registers a domain one letter off from yours. They email
                your bookkeeper an invoice that looks real. Then they call in a
                voice that sounds exactly like you. beware.dog watches for that
                setup, drills the people who move your money, and sends you one
                page a month telling you what it found. Built for the businesses
                too small to have a security team.
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
                  ${FOUNDING_PRICE} a month, founding rate. Cancel anytime. A
                  named human, not a ticket queue.
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
                "Title and escrow",
                "Bookkeepers",
                "Accounting firms",
                "Agencies",
                "Clinics",
                "Any business that moves money by email",
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
            One approved invoice can drain an account that took twenty years to
            fill. The wire clears in minutes and it does not come back. You lock
            your front door at night. beware.dog is the dog behind it. The kind
            of protection you pay for and hope you never have to use.
          </p>
        </section>

        {/* the three moves of the scam */}
        <section className="border-t border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
              How the scam actually runs
            </p>
            <h2 className="font-display max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Three moves. We put a dog on the first one, and train your people
              against the other two.
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
                    <p className="mt-4 border-t border-line pt-4 text-[15px] leading-relaxed text-bone">
                      <span className="font-semibold text-brass">
                        What we do:{" "}
                      </span>
                      {f.weDo}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* what The Watch is */}
        <section className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
            What The Watch does
          </p>
          <h2 className="font-display max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Three things, every month, for ${FOUNDING_PRICE}.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ash">
            No install, no hardware, no portal to learn. You give us your domain
            and the names of whoever can send a payment. Setup takes about
            fifteen minutes and it is a conversation, not a configuration.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {WATCH_DELIVERABLES.map((s) => (
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
              <span className="font-semibold">Watched personally.</span>{" "}
              Founding spots are capped at {FOUNDING_SPOTS} because one person
              reviews every result by hand. You get a direct line and a real
              name, not a support ticket in a queue. When the spots fill, the
              rate goes to ${STANDARD_PRICE}.
            </p>
          </div>
        </section>

        {/* honest limits */}
        <section className="border-t border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  What we do not do
                </p>
                <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  The short list of things we will never claim.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ash">
                  Plenty of security companies will sell you everything. We would
                  rather tell you exactly where the dog stops, so you can believe
                  the part where it starts.
                </p>
              </div>
              <ul className="space-y-4 self-center">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconMinus className="mt-0.5 h-5 w-5 shrink-0 text-ash-dim" />
                    <span className="text-[15px] leading-snug text-ash">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* offer */}
        <section id="offer" className="border-t border-line/70">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-brass">
                  The offer
                </p>
                <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  One flat retainer. The dog stays on watch.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ash">
                  No per seat pricing, no surprise bills, no year long contract.
                  One monthly rate covers the weekly scan, the monthly drill, the
                  report, and a direct line to the person doing the watching.
                </p>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ash-dim">
                  Want to see it before you pay? Ask for a free scan of your own
                  domain. We will show you what is already registered against
                  you, and you can decide from there.
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
        <section className="border-t border-line/70 bg-panel/30">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
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
                    Drop your email and we will send the handful of scams
                    actually going around right now, in plain English, plus
                    first access when new founding spots open. No noise, no
                    spam, unsubscribe any time.
                  </p>
                </div>
                <div>
                  <Waitlist />
                </div>
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
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line/70 pt-6 text-xs text-ash-dim sm:flex-row sm:items-center">
            <p>&copy; 2026 beware.dog. On watch.</p>
            <FleetFooter />
          </div>
        </div>
        <div className="hazard h-1.5 w-full" />
      </footer>
    </div>
  );
}
