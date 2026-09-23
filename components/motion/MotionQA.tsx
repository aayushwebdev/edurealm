"use client";

import { useEffect } from "react";
import { forceFrame, liveTriggerCount } from "@/motion/scroll";

/** Dev only: `window.__motion()` counts live ScrollTriggers; `window.__frame()` forces a GSAP frame. */
export function MotionQA() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const w = window as unknown as { __motion: () => number; __frame: () => void };
    w.__motion = liveTriggerCount;
    w.__frame = forceFrame;
  }, []);
  return null;
}
