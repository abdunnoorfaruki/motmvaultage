/**
 * Brand mantra bridge — sits between the hero and social proof.
 * Carries M.O.T.M. Vaultage's three-word brand promise straight
 * from the brand guideline (CONNECT · CULTIVATE · COMMIT).
 *
 * Doubles as the intentional visual transition between the navy
 * hero and the white proof section, gradient-blending navy → indigo.
 */
export default function Bridge() {
  return (
    <div
      className="relative text-white py-7 gutter-x overflow-hidden bg-gradient-to-r from-navy to-indigo-brand max-md:py-6"
      aria-label="Brand promise: Connect, Cultivate, Commit"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-center bridge-gap flex-wrap max-md:gap-[14px]">
        <span
          className="bridge-word-size font-normal tracking-[0.04em] text-white whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Connect
        </span>
        <span
          className="w-2 h-2 rounded-full bg-cyan shrink-0 max-md:w-1.5 max-md:h-1.5"
          aria-hidden="true"
        />
        <span
          className="bridge-word-size font-normal tracking-[0.04em] text-white whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Cultivate
        </span>
        <span
          className="w-2 h-2 rounded-full bg-yellow-brand shrink-0 max-md:w-1.5 max-md:h-1.5"
          aria-hidden="true"
        />
        <span
          className="bridge-word-size font-normal tracking-[0.04em] text-white whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Commit
        </span>
      </div>
    </div>
  );
}
