/** Brand mark: a central point with five pillars — the five pillars of the 2030 roadmap. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      {[0, 72, 144, 216, 288].map((a) => (
        <line
          key={a}
          x1="12"
          y1="12"
          x2={(12 + 10 * Math.sin((a * Math.PI) / 180)).toFixed(2)}
          y2={(12 - 10 * Math.cos((a * Math.PI) / 180)).toFixed(2)}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
