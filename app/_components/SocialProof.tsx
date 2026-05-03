import Image from "next/image";
import GoogleIcon from "./GoogleIcon";
import { reviews } from "./reviews";

export default function SocialProof() {
  return (
    <section
      className="bg-white relative section-pad-y  pt-24"
      id="reviews"
      aria-labelledby="proof-headline"
    >
      {/* ===== Section header ===== */}
      <header className="scroll-fade max-w-185 mx-auto mb-14 text-center max-md:mb-9">
        <span
          className="inline-flex items-center justify-center gap-2.5 text-[11px] font-bold tracking-[0.22em] text-pink uppercase mb-5 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-pink after:content-[''] after:block after:w-6 after:h-0.5 after:bg-pink"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Real Words · Real Clients
        </span>
        <h2
          className="text-[clamp(36px,4.5vw,56px)] font-normal font-display leading-[1.1] text-navy mb-5 tracking-[-0.01em]"
          id="proof-headline"
          
        >
          Trusted by those who chose
          <br />
          to <em className="italic text-pink">begin again</em>.
        </h2>
        <p
          className="text-base leading-[1.65] text-ink-soft max-w-140 mx-auto max-md:text-[15px]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Every review below is a verified Google review from a client of
          Angela&apos;s practice. No edits. No paid placements. Just real
          words from real people.
        </p>
      </header>

      {/* ===== Google rating summary ===== */}
      <div
        className="scroll-fade max-w-[520px] mx-auto mb-14 flex items-center gap-6 px-[26px] py-[18px] bg-[#fafbff] border border-navy/[0.12] rounded-md max-md:flex-col max-md:items-start max-md:gap-3 max-md:px-5 max-md:py-4 max-md:mb-9"
        role="group"
        aria-label="Google rating summary"
      >
        <div
          className="flex items-center gap-2.5 text-[13px] font-semibold text-ink tracking-[0.01em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <GoogleIcon className="w-[22px] h-[22px] shrink-0" />
          <span>Verified Google Reviews</span>
        </div>
        <div
          className="w-px h-8 bg-navy/[0.12] shrink-0 max-md:w-full max-md:h-px"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-[3px]">
          <span
            className="text-[22px] text-navy leading-none flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            5.0{" "}
            <span
              className="text-orange-brand text-sm tracking-[0.08em]"
              style={{ fontFamily: "var(--font-body)" }}
              aria-hidden="true"
            >
              ★★★★★
            </span>
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.18em] text-ink-soft uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From every client to date
          </span>
        </div>
      </div>

      {/* ===== Reviews grid =====
          Per the landing-page best-practice video: stack vertically on
          mobile rather than burying proof in a carousel. */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[1200px] mx-auto mb-14 max-md:gap-4 max-md:mb-9"
        role="list"
      >
        {reviews.map((review) => (
          <article
            key={review.name}
            className="review-card scroll-fade bg-white border border-navy/[0.12] rounded-lg p-[30px] px-7 flex flex-col gap-[18px] transition-all duration-[250ms] hover:border-navy/25 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(17,31,144,0.08)] max-md:p-6"
            role="listitem"
          >
            <div
              className="text-orange-brand text-sm tracking-[0.1em]"
              style={{ fontFamily: "var(--font-body)" }}
              aria-label="5 out of 5 stars"
            >
              ★★★★★
            </div>
            <p
              className="text-[19px] leading-[1.45] text-ink font-normal flex-1 max-md:text-[17px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {review.text}
            </p>
            <div className="flex items-center gap-3 pt-[18px] border-t border-navy/[0.12]">
              
               <Image fill className="object-cover w-9.5 h-9.5" src={review.profile} alt={review.name} />
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span
                  className="text-sm font-semibold text-ink"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {review.name}
                </span>
                <span
                  className="text-[11px] font-medium text-ink-soft tracking-[0.02em] flex items-center gap-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <GoogleIcon className="w-[11px] h-[11px]" />
                  Google Review
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ===== Final inline CTA ===== */}
      <div className="scroll-fade text-center pt-8">
        <p
          className="italic text-[22px] text-navy mb-6 max-md:text-[18px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your story could be the next one.
        </p>
        <button
          type="button"
          className="bg-pink text-white border-0 px-[30px] py-4 rounded text-sm font-bold cursor-pointer tracking-[0.04em] uppercase transition-all hover:bg-[#d12a5f] hover:-translate-y-px shadow-[0_8px_24px_rgba(236,58,113,0.25)] hover:shadow-[0_12px_28px_rgba(236,58,113,0.35)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Book Your Free Clarity Call
        </button>
        <br />
        <a
          href="https://share.google/P4LMIOfLYRcfkZbB4"
          className="inline-block mt-5 text-xs font-bold text-pink hover:text-cyan tracking-[0.18em] uppercase border-b-[1.5px] border-pink hover:border-cyan pb-1 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Read all reviews on Google →
        </a>
      </div>
    </section>
  );
}
