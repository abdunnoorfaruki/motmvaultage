import Image from "next/image";
import LogoMark from "./LogoMark";

/**
 * HERO SECTION
 *
 * Layout: split grid (1.05fr | 1fr) on desktop, stacked on mobile.
 * Left = copy + CTAs + trust strip. Right = hero photo with floating
 * review card and credential tag.
 *
 * The two pseudo-element ambient glows live in .hero-glows (globals.css)
 * because Tailwind has no clean utility for radial-gradient pseudo-elements.
 * Everything else is pure Tailwind utilities.
 */
export default function Hero() {
    return (
      <section className="relative bg-deep overflow-hidden md:max-h-screen">
        {/* Atmospheric gradients */}
        <div
          aria-hidden
          className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(21,173,213,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-[300px] -right-[100px] w-[700px] h-[700px] pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(236,58,113,0.13) 0%, transparent 70%)",
          }}
        />
  
        <Nav />
  
        <div className="relative z-[5]  mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] ">
          {/* LEFT — content */}
          <div className="px-[clamp(20px,4vw,48px)] py-[44px]  flex flex-col justify-center">
            <span className="reveal reveal-2 inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-cyan uppercase mb-7 before:content-[''] before:block before:w-7 before:h-px before:bg-cyan">
              Matters of the Mind · A Mindful Sanctuary
            </span>
  
            {/* <h1 className="reveal reveal-3 font-serif text-[clamp(38px,6vw,84px)] font-light leading-[1.04] tracking-[-0.012em] text-white mb-7">
              A space to slow down,<br className="hidden sm:block" />{" "}
              heal, and{" "}
              <em className="not-italic font-light">
                <span className="italic text-pink">return to yourself.</span>
              </em>
            </h1> */}
  
            <h1
              id="hero-headline"
              className="font-display animate-fade-up mb-5.5 text-[42px] font-normal leading-[1.05] tracking-[-0.01em] text-white md:mb-7 md:text-7xl md:leading-[1.02] [animation-delay:0.22s]"
            >
              Reclaim Your <br /> Peace.
              <br />
              <em
                className="headline-accent italic text-pink font-normal relative after:content-['']
              after:absolute
              after:left-0
              after:bottom-[0.05em]
              after:w-full
              after:h-1
              after:bg-cyan
              after:opacity-35
              after:-skew-x-12 "
              >
                Transform Your <br /> Mind.
              </em>
            </h1>
  
            {/* <p className="reveal reveal-4 text-[clamp(15.5px,1.2vw,18px)] leading-[1.65] text-white/68 max-w-[520px] mb-10 font-light">
              M.O.T.M. Vaultage® is a sanctuary for mindful therapy and personal
              growth — guided by{" "}
              <strong className="text-white/92 font-medium">
                Angela Harper, LCPC
              </strong>
              . A holistic path that honors body, mind, and spirit.
            </p> */}
            <p className="font-body animate-fade-up mb-7.5 max-w-135 text-[15px] font-normal leading-[1.65] text-white/70  md:text-[17px] [animation-delay:0.36s]">
              Anxiety, emotional overwhelm, the quiet weight of feeling stuck —
              you don&apos;t have to keep carrying it alone.{" "}
              <strong className="font-semibold text-white">
                Angela Harper, LCPC
              </strong>{" "}
              guides you through a holistic, evidence-informed path to lasting
              clarity. Body, mind, and spirit.
            </p>
  
            {/* <div className="reveal reveal-5 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 flex-wrap">
              <button
                type="button"
                className="font-sans bg-pink text-white px-7 py-[15px] sm:py-3.5 rounded-full text-sm font-medium tracking-[0.03em] transition-all duration-300 hover:bg-pink-deep hover:-translate-y-px hover:shadow-[0_12px_28px_-10px_rgba(236,58,113,0.55)]"
              >
                Book a Session
              </button>
              <button
                type="button"
                className="font-sans bg-transparent text-white/75 border border-white/25 px-[26px] py-[15px] sm:py-3.5 rounded-full text-sm tracking-[0.03em] transition-all duration-300 hover:border-cyan hover:text-white"
              >
                Explore Services
              </button>
            </div> */}
            {/* CTAs */}
            <div className="animate-fade-up mb-9 flex flex-wrap items-center gap-2.5 md:mb-4 md:gap-3.5 [animation-delay:0.5s]">
              <button
                type="button"
                className="font-body min-w-32.5 flex-1 cursor-pointer rounded border-0 bg-pink px-5.5 py-3.5 text-xs font-bold uppercase tracking-[0.04em] text-white shadow-cta transition-all hover:-translate-y-px hover:bg-pink-deep hover:shadow-cta-hover md:flex-initial md:px-7.5 md:py-4 md:text-sm"
              >
                Book a Free Session
              </button>
              <button
                type="button"
                className="font-body min-w-32.5 flex-1 cursor-pointer rounded border-[1.5px] border-white/30 bg-transparent px-5.5 py-3.5 text-xs font-semibold uppercase tracking-[0.04em] text-white transition-colors hover:border-cyan hover:bg-cyan/10 md:flex-initial md:px-6.5 md:py-[14.5px] md:text-sm"
              >
                How Angela Works
              </button>
            </div>
  
            {/* Trust strip — pre-launch-honest, no fabricated metrics */}
            {/* <div className="reveal reveal-6 mt-9 sm:mt-13 pt-6 sm:pt-8 border-t border-white/10 flex items-center gap-[18px] sm:gap-7 flex-wrap">
              <TrustItem num="LCPC" label="Licensed & Certified" />
              <TrustDivider />
              <TrustItem num="2013" label="Established · Maryland" />
              <TrustDivider />
              <TrustItem num="★★★★★" label="Verified Google Reviews" stars />
            </div> */}
            {/* Trust strip */}
            <div
              className="animate-fade-up flex items-center gap-4.5 border-t border-white/10 pt-6 md:gap-8 md:pt-8 [animation-delay:0.62s]"
              role="group"
              aria-label="Trust indicators"
            >
              <div className="flex min-w-0 flex-col gap-1.5">
                <span className="font-display text-base font-normal leading-none tracking-[0.01em] text-white md:text-[19px]">
                  LCPC
                </span>
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55 md:text-[10px] md:tracking-[0.16em]">
                  Licensed &amp; Certified
                </span>
              </div>
              <div
                className="h-7.5 w-px bg-white/12 md:h-9.5"
                aria-hidden="true"
              />
              <div className="flex min-w-0 flex-col gap-1.5">
                <span className="font-display text-base font-normal leading-none tracking-[0.01em] text-white md:text-[19px]">
                  <span
                    className="text-[15px] leading-none tracking-[0.06em] text-yellow-brand"
                    aria-hidden="true"
                  >
                    ★★★★★
                  </span>
                </span>
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55 md:text-[10px] md:tracking-[0.16em]">
                  5.0 on Google
                </span>
              </div>
              <div
                className="h-7.5 w-px bg-white/12 md:h-9.5"
                aria-hidden="true"
              />
              <div className="flex min-w-0 flex-col gap-1.5">
                <span className="font-display text-base font-normal leading-none tracking-[0.01em] text-white md:text-[19px]">
                  Holistic
                </span>
                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55 md:text-[10px] md:tracking-[0.16em]">
                  Body · Mind · Spirit
                </span>
              </div>
            </div>
          </div>
  
          {/* RIGHT — visual */}
          <div className="relative overflow-hidden bg-[var(--color-bg-deep)] min-h-[380px] lg:min-h-0   reveal reveal-3 order-2 md:order-1 ">
            <div
              aria-hidden
              className="absolute inset-0 z-[3] pointer-events-none lg:bg-[linear-gradient(to_right,var(--color-bg-deeper)_0%,transparent_18%)] bg-[linear-gradient(to_bottom,transparent_60%,var(--color-bg-deeper)_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 z-[3] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(6,15,74,0.55) 100%)",
              }}
            />
            {/* Replace with provided client photo from brand asset folder */}
            <Image
              src="/assets/angela-hero.jpg"
              alt="Angela Harper, LCPC — Founder of M.O.T.M. Vaultage®"
              fill
              priority
              className="object-cover object-[center_30%] saturate-[0.92] contrast-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
  
            <div className="absolute top-4 sm:top-7 right-4 sm:right-7 z-[5] font-sans text-[9px] sm:text-[10px] tracking-[0.18em] text-pink-deep uppercase bg-pink/20 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-[7px] rounded-full border border-pink/25">
              Angela Harper · LCPC
            </div>
  
            {/* Floating Google review — REAL, verbatim */}
            <figure
              aria-label="Client review"
              className="absolute bottom-4 right-4 left-4 sm:left-auto sm:bottom-7 sm:right-7 z-[6] sm:max-w-[500px] bg-[rgba(6,15,74,0.82)]/30 backdrop-blur-lg border border-white/15 rounded-2xl p-4 sm:px-5 sm:py-[18px] mb-4"
            >
              <div
                aria-label="5 out of 5 stars"
                className="text-[11px] text-yellow-brand tracking-[0.12em] mb-2"
              >
                ★★★★★
              </div>
              <p className="font-serif italic text-[13px] sm:text-sm leading-[1.45] text-white font-normal mb-2.5">
                &ldquo;I have been a member of the M.O.T.M. Vaultage family for 5 years. There are not enough words in the human language to capture the transformation my life has experienced and the impact it has made on my outlook on life.rdquo;
              </p>
              <figcaption className="text-[10.5px] text-white/55 tracking-[0.04em] flex items-center gap-2 before:content-[''] before:w-3.5 before:h-px before:bg-white/35">
                DonDiva Woolridge · Google Review
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    );
}

function Nav() {
  return (
    <nav className="reveal reveal-1 relative z-20 flex items-center justify-between px-[clamp(20px,4vw,48px)] py-4 sm:py-[22px] bg-white  mx-auto border-b border-white/10">
      <a
        href="#"
        className="font-serif text-[13px] sm:text-[15px] font-normal text-yellow-brand tracking-[0.14em] sm:tracking-[0.16em] uppercase"
      >
        <Image width={120} height={24} alt="MOTM" className="object-contain w-24" src={"/logo.png"} />
        {/* M.O.T.M. <i className="not-italic text-cyan/65 font-light">Vaultage®</i> */}
      </a>
      <ul className="hidden sm:flex gap-8 list-none">
        <li>
          <a
            href="#services"
            className="text-base font-semibold text-black/65 tracking-[0.04em] hover:text-black transition-colors"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-base font-semibold text-black/65 tracking-[0.04em] hover:text-black transition-colors"
          >
            About Angela
          </a>
        </li>
        <li>
          <a
            href="#blog"
            className="text-base font-semibold text-black/65 tracking-[0.04em] hover:text-black transition-colors"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-base font-semibold text-black/65 tracking-[0.04em] hover:text-black transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
      <button className="font-sans text-xs sm:text-base font-semibold text-pink bg-transparent border border-pink/55 px-4 sm:px-[22px] py-2 sm:py-2.5 rounded-full cursor-pointer tracking-[0.04em] transition-all duration-300 hover:bg-pink/15 hover:border-pink">
        Book a Free Session
      </button>
    </nav>
  );
}