// app/page.tsx — Next.js 14+ App Router
// Tailwind config additions needed (see tailwind.config.ts at bottom of this file)

import ScrollFadeObserver from "./_components/ScrollFadeObserver";
import PainSection from "./_components/PainSection";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg-deeper)] text-white font-sans antialiased overflow-x-hidden">
      <ScrollFadeObserver />
      <Hero />
      <FlowBridge />
      <PainSection />
    </main>
  );
}


/* ───────────────────────── FLOW BRIDGE ───────────────────────── */
function FlowBridge() {
  return (
    <div className="relative bg-[var(--color-bg-deeper)] px-[clamp(20px,4vw,48px)] max-w-[1280px] mx-auto text-center z-[5]">
      <div className="py-9 sm:py-[48px_0_24px] border-t border-white/10">
        <div
          aria-hidden
          className="w-px h-10 sm:h-14 mx-auto mb-5 animate-[pulseLine_3s_ease-in-out_infinite]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-cyan) 40%, transparent)",
          }}
        />
        <p className="scroll-fade font-serif italic text-[17px] sm:text-[clamp(18px,1.6vw,22px)] font-normal text-white/70">
          If any of this feels familiar…
        </p>
      </div>
    </div>
  );
}

