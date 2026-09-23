"use client";

import { useEffect } from "react";

/**
 * Pointer spotlight for cards marked `data-spotlight`: one delegated, passive listener that
 * feeds the cursor position into CSS variables (--mx / --my). The glow itself is CSS
 * (globals.css) and is disabled under reduced motion and on Mind Before Marks.
 */
export function Spotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.<HTMLElement>("[data-spotlight]");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return null;
}
