"use client";

import type { ReactNode } from "react";
import { registerParallax } from "@/motion/scroll";
import { useScrollEffect } from "@/motion/useScrollEffect";

/**
 * A decorative background layer. Must sit inside an element marked
 * `data-parallax-section`. Never put paragraph text in here.
 */
export function ParallaxLayer({
  speed,
  className,
  children,
}: {
  speed: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useScrollEffect<HTMLDivElement>((el) => registerParallax(el, speed));
  return (
    <div ref={ref} aria-hidden="true" className={className}>
      {children}
    </div>
  );
}
