import type { ReactNode } from "react";
import { Mark } from "@/components/layout/Mark";

/**
 * Circular stamp badge: text set on a circle around the brand mark (agency-reference pattern).
 * The ring turns slowly (CSS, 40s); static under reduced motion. Never used on Mind Before Marks.
 */
export function Stamp({
  id,
  text = "NO COMMISSIONS · STUDENT FIRST · ETHICAL · ",
  size = 132,
  center,
  fontSize = 8,
}: {
  /** Unique per page — names the SVG circle path. */
  id: string;
  text?: string;
  size?: number;
  /** Replaces the default gold brand-mark centre. */
  center?: ReactNode;
  /** Ring text size (viewBox units); raise it for a short phrase so the ring stays evenly filled. */
  fontSize?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative grid place-items-center rounded-full bg-navy text-gold shadow-[var(--shadow-float)] ring-8 ring-cream"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 120 120" className="stamp-ring absolute inset-0 h-full w-full">
        <defs>
          <path id={`stamp-${id}`} d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-white font-mono" style={{ fontSize }}>
          {/* textLength = circumference (2π·44 ≈ 276) so the phrase closes the ring exactly */}
          <textPath href={`#stamp-${id}`} textLength="274" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      {center ?? (
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-navy">
          <Mark className="h-6 w-6" />
        </span>
      )}
    </div>
  );
}
