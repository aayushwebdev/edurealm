"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";

/**
 * Scrolling ribbon (agency-reference pattern). CSS-only motion.
 * WCAG 2.2.2: pauses on hover/focus and has a visible pause control; static under reduced motion.
 * The duplicate run exists only to loop seamlessly and is hidden from assistive tech.
 */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const [paused, setPaused] = useState(false);
  const run = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it} className="flex items-center">
          <span className="px-8 text-d5 font-medium whitespace-nowrap text-white md:text-d4">{it}</span>
          <span aria-hidden="true" className="text-d4 text-gold">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={label} className="marquee relative overflow-hidden bg-navy py-6" data-paused={String(paused)}>
      <div className="marquee-track">
        {run(false)}
        {run(true)}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-navy via-navy/90 to-transparent" />
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play scrolling list" : "Pause scrolling list"}
        className="absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-navy-950/80 text-white ring-1 ring-white/20 hover:bg-navy-950"
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </section>
  );
}
