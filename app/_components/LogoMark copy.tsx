/**
 * M.O.T.M. Vaultage® brand mark, recreated as inline SVG from the
 * brand guideline (mountain + flame in navy circle with cyan ring).
 * Inline so it loads instantly with no extra request and stays sharp
 * on retina displays. To swap to the official PNG instead, replace
 * with: <Image src="/assets/logo.png" alt="M.O.T.M. Vaultage" width={36} height={36} />
 */
export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="#15ADD5"
        strokeWidth="3"
      />
      {/* Mountain peaks */}
      <path d="M14 44 L24 24 L32 36 L40 20 L50 44 Z" fill="#111F90" />
      {/* Flame */}
      <path
        d="M28 44 C28 38, 32 34, 32 30 C32 34, 36 38, 36 44 Z"
        fill="#EC3A71"
      />
      <path
        d="M30 44 C30 40, 32 38, 32 34 C32 38, 34 40, 34 44 Z"
        fill="#D7DF27"
      />
    </svg>
  );
}
