import type { ReactNode } from "react";
import type { Photo } from "@/content/photos";
import { Reveal } from "@/components/motion/Reveal";
import { Tag, cx } from "./primitives";

/**
 * Inner-page hero: centred tag, heading and lead on a clean light gradient, with soft brand glows,
 * a faded dot texture, and a curved arc along the bottom edge.
 * `tone="mist"` is the calm variant (Mind Before Marks): softer sky tones, no gold, no drifting glows.
 * `photo` and `crumbs` are accepted for compatibility but not shown in this layout.
 */
export function PageHero({
  tag,
  title,
  lead,
  children,
  tone = "cream",
  noGold,
  aside,
}: {
  tag?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  photo?: Photo;
  crumbs?: { href: string; label: string }[];
  /** "cream" (default) = brand gradient; "mist" = calm variant. */
  tone?: "cream" | "mist";
  /** Mind Before Marks: no gold anywhere. */
  noGold?: boolean;
  /** Extra content under the lead (e.g. helpline card). */
  aside?: ReactNode;
}) {
  const calm = tone === "mist";

  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-b from-paper via-brand-tint/70 to-paper px-4 pt-28 pb-20 text-center md:pt-36 md:pb-24">
      {/* Soft glows */}
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute -top-40 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full blur-3xl",
          calm ? "bg-brand/10" : "hero-blob bg-brand/20",
        )}
      />
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute -top-32 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl",
          calm ? "bg-brand-100/60" : "hero-blob-2 bg-brand-100",
        )}
      />
      {/* Fine dot texture, faded out towards the edges */}
      <div aria-hidden="true" className="page-hero-dots pointer-events-none absolute inset-0 -z-10" />
      {/* Curved arc along the bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-48 w-[160%] -translate-x-1/2 translate-y-1/2 rounded-[100%] bg-gradient-to-b from-brand-100/90 via-brand-tint/60 via-20% to-paper to-40% md:h-56 md:w-[130%]"
      />

      <Reveal className="relative mx-auto flex max-w-4xl flex-col items-center">
        {tag && <Tag noGold={noGold || calm}>{tag}</Tag>}
        <h1 className="mt-5 text-[2.25rem] leading-[1.06] tracking-[-0.02em] text-navy md:text-[3.25rem]">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lead text-graphite">{lead}</p>}
        {children}
        {aside && <div className="mt-10 w-full max-w-xl text-left">{aside}</div>}
      </Reveal>
    </header>
  );
}
