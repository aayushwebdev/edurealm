"use client";

import { useEffect, type RefObject } from "react";

/**
 * §2 Base scroll-reveal system. Default for every section on every page.
 *   rootMargin '0px 0px -12% 0px' · once · 12px travel · 600ms · ease-out, no overshoot
 * Stagger is applied per-child by <Reveal index>, capped at 5 children.
 */
export const REVEAL = {
  rootMargin: "0px 0px -12% 0px",
  travel: 12,
  duration: 600,
  stagger: 70,
  staggerCap: 5,
} as const;

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer || typeof window === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer?.unobserve(entry.target); // once: true
      }
    },
    { rootMargin: REVEAL.rootMargin },
  );
  return observer;
}

export function staggerDelay(index = 0, stagger: number = REVEAL.stagger) {
  return Math.min(index, REVEAL.staggerCap - 1) * stagger;
}

export function useReveal(ref: RefObject<Element | null>) {
  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    if (!el || !io) return;
    io.observe(el);
    return () => io.unobserve(el);
  }, [ref]);
}
