type PainCard = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

const cards: PainCard[] = [
  {
    title: "A mind that won't quiet",
    text: "Racing thoughts at 3am. Worry about things that haven't happened. The hum of anxiety that never fully turns off.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        className="h-[18px] w-[18px]"
      >
        <path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.5 1 6 2.5" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
  {
    title: "Emotional heaviness",
    text: "You're functioning. You're showing up. But somewhere underneath, something feels heavy, and you can't quite name it.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        className="h-[18px] w-[18px]"
      >
        <path d="M6 7h12l-1.5 11a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 7Z" />
        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      </svg>
    ),
  },
  {
    title: "A sense of stuck",
    text: "The same patterns keep showing up. You've read the books and tried the tools, but the shift you're looking for hasn't come.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        className="h-[18px] w-[18px]"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-3 6-3-6 3 1z" />
      </svg>
    ),
  },
  {
    title: "Disconnection from self",
    text: "The part of you that used to feel grounded, present, alive has gone quiet. You want her back.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        className="h-[18px] w-[18px]"
      >
        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
        <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
      </svg>
    ),
  },
];

export default function PainSection() {
  return (
    <section
      id="what-youre-carrying"
      className="relative overflow-hidden bg-white px-[clamp(20px,4vw,48px)] py-10 pb-18 sm:pt-16 sm:pb-30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-[250px] h-[500px] w-[500px] -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(21,173,213,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[1280px]">
        <header className="mb-10 max-w-[680px] sm:mb-16">
          <span className="scroll-fade mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-cyan before:block before:h-px before:w-7 before:bg-cyan before:content-['']">
            What You&apos;re Carrying
          </span>
          <h2 className="scroll-fade mb-4 font-display text-[clamp(32px,4.5vw,60px)] font-normal leading-[1.08] tracking-[-0.01em] text-navy">
            You don&apos;t need to{" "}
            <em className="italic text-pink">have it all together</em>
            <br />
            to begin.
          </h2>
          <p className="scroll-fade max-w-[580px] font-body text-[clamp(15.5px,1.2vw,18px)] font-normal leading-[1.65] text-ink-soft">
            So much of what we carry stays quiet beneath the surface of busy
            days, polite answers, and the version of ourselves we show the
            world. Vaultage is a place to set it down.
          </p>
        </header>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,420px)] lg:gap-6">
          {/* Left Column - First 2 cards */}
          <div className="grid gap-4 lg:grid-rows-[1fr_1fr]">
            {cards.slice(0, 2).map((card, index) => (
              <article
                key={card.title}
                className="scroll-fade group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cyan/15 bg-white p-6 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(21,173,213,0.32)] hover:border-cyan/40"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(21,173,213,0.3), transparent)",
                  }}
                />
                <div className="mb-[22px] flex h-9 w-9 items-center justify-center rounded-[10px] bg-cyan/10 text-cyan shadow-sm">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2.5 font-display text-[19px] font-normal leading-[1.25] tracking-[-0.005em] text-navy sm:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm font-normal leading-[1.75] text-ink-soft">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Middle Column - Last 2 cards */}
          <div className="grid gap-4 lg:grid-rows-[1fr_1fr]">
            {cards.slice(2, 4).map((card, index) => (
              <article
                key={card.title}
                className="scroll-fade group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cyan/15 bg-white p-6 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(21,173,213,0.32)] hover:border-cyan/40"
                style={{ transitionDelay: `${(index + 2) * 80}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute top-0 left-0 h-px w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, rgba(21,173,213,0.3), transparent)",
                  }}
                />
                <div className="mb-[22px] flex h-9 w-9 items-center justify-center rounded-[10px] bg-cyan/10 text-cyan shadow-sm">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2.5 font-display text-[19px] font-normal leading-[1.25] tracking-[-0.005em] text-navy sm:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm font-normal leading-[1.75] text-ink-soft">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column - CTA */}
          <div className="scroll-fade row-span-1 lg:row-span-2 flex h-full flex-col justify-between rounded-[32px] border border-cyan/15 bg-gradient-to-br from-cyan/5 to-pink/6 p-8 shadow-[0_18px_50px_-24px_rgba(21,173,213,0.35)] lg:p-10">
            <div className="flex flex-col gap-7">
              <p className="font-display text-[clamp(22px,2.2vw,32px)] font-normal italic leading-[1.1] text-navy">
                Whatever you&apos;re carrying, you don&apos;t have to carry it alone.
              </p>
              <p className="font-body text-[15px] font-normal leading-[1.8] text-ink-soft">
                Sessions are intimate by design, a quiet conversation in a safe
                space with someone trained to hold what you bring.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded bg-pink px-7 py-[15px] font-body text-sm font-bold uppercase tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-px hover:bg-pink-deep hover:shadow-cta-hover"
            >
              Book a Free Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
