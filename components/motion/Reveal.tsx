"use client";

import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { REVEAL, staggerDelay, useReveal } from "@/motion/useReveal";

type Props = {
  as?: ElementType;
  /** Position within a staggered group. Delays cap at 5 children. */
  index?: number;
  /** Stagger step in ms: 70 default, 100 for two-column offsets and the charter. */
  stagger?: number;
  /** Vertical travel in px. 0 = opacity only (Ethics charter). */
  travel?: number;
  duration?: number;
  className?: string;
  children?: ReactNode;
  id?: string;
  /** Pointer spotlight glow (see components/motion/Spotlight.tsx). */
  spotlight?: boolean;
};

export function Reveal({
  as: Tag = "div",
  index = 0,
  stagger = REVEAL.stagger,
  travel = REVEAL.travel,
  duration = REVEAL.duration,
  className,
  children,
  id,
  spotlight,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const style = {
    "--reveal-delay": `${staggerDelay(index, stagger)}ms`,
    "--reveal-travel": `${travel}px`,
    "--reveal-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <Tag ref={ref} data-reveal="" data-spotlight={spotlight ? "" : undefined} style={style} className={className} id={id}>
      {children}
    </Tag>
  );
}
