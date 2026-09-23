"use client";

/**
 * The ONLY module that creates ScrollTriggers. Keep it that way so the effect count
 * stays auditable during QA (design draft §7).
 *
 * Budgets:
 *   GSAP effects (site-wide): #3 goal counters (home) · #4 fine-print scrub (/programs/informed-choice)
 *   Parallax (max 2 per page, 0.8–1.2 speed): home commitment collage · /zeo ghost words · /impact map
 *   (#1 hero scrub and #2 pillar draw were retired with the split-hero redesign.)
 *   Never anything here on /programs/mind-before-marks.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
function init() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

/** Pin + parallax only run on wide screens with motion allowed. */
export const DESKTOP_MOTION =
  "(min-width: 900px) and (prefers-reduced-motion: no-preference)";
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

type Cleanup = () => void;

function assertNotStrictPage(el: Element) {
  if (el.closest('[data-motion="strict"]')) {
    throw new Error("motion/scroll: scroll effects are banned on Mind Before Marks.");
  }
}

/* ------------------------------------------------------------------ */
/* #3 — Target counters. Counts toward a stated GOAL, never an outcome. */
/* ------------------------------------------------------------------ */

export function registerCounters(root: HTMLElement): Cleanup {
  init();
  assertNotStrictPage(root);
  const els = root.querySelectorAll<HTMLElement>("[data-count-to]");
  const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
  const mm = gsap.matchMedia();

  mm.add(MOTION_OK, () => {
    const state = Array.from(els, () => ({ v: 0 }));
    els.forEach((el) => (el.textContent = "0"));
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top 80%",
      once: true,
      onEnter: () => {
        els.forEach((el, i) => {
          const to = Number(el.dataset.countTo);
          gsap.to(state[i], {
            v: to,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => (el.textContent = fmt(state[i].v)),
          });
        });
      },
    });
    return () => {
      st.kill();
      els.forEach((el) => (el.textContent = fmt(Number(el.dataset.countTo))));
    };
  });

  return () => mm.revert();
}

/* ------------------------------------------------------------------ */
/* #4 — /programs/informed-choice fine-print scrub                     */
/* ------------------------------------------------------------------ */

export function registerFinePrint(root: HTMLElement): Cleanup {
  init();
  assertNotStrictPage(root);
  const clauses = gsap.utils.toArray<HTMLElement>("[data-clause]", root);
  const mm = gsap.matchMedia();

  mm.add(MOTION_OK, () => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });
    clauses.forEach((clause, i) => {
      const wipe = clause.querySelector("[data-wipe]");
      const note = clause.querySelector("[data-note]");
      tl.fromTo(wipe, { scaleX: 0 }, { scaleX: 1, duration: 1 }, i * 1.2).fromTo(
        note,
        { autoAlpha: 0, x: 16 },
        { autoAlpha: 1, x: 0, duration: 0.6 },
        i * 1.2 + 0.4,
      );
    });
    const st = ScrollTrigger.create({
      trigger: root,
      start: "top 65%",
      end: "bottom 55%",
      scrub: true,
      animation: tl,
    });
    return () => {
      st.kill();
      tl.revert();
    };
  });

  return () => mm.revert();
}

/* ------------------------------------------------------------------ */
/* Parallax — translateY only, speed 0.8–1.2, desktop + motion only    */
/* ------------------------------------------------------------------ */

export function registerParallax(layer: HTMLElement, speed: number): Cleanup {
  init();
  assertNotStrictPage(layer);
  if (speed < 0.8 || speed > 1.2) {
    throw new Error(`motion/scroll: parallax speed ${speed} is outside 0.8–1.2.`);
  }
  const section = (layer.closest("[data-parallax-section]") as HTMLElement) ?? layer.parentElement!;
  const mm = gsap.matchMedia();

  mm.add(DESKTOP_MOTION, () => {
    // Over the section's pass through the viewport (viewport + section height),
    // a layer at speed s drifts (1 - s) × that distance relative to the page.
    const drift = () => (1 - speed) * (window.innerHeight + section.offsetHeight);
    const tween = gsap.fromTo(
      layer,
      { y: () => -drift() / 2 },
      {
        y: () => drift() / 2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
    // will-change only while within ~200px of the viewport.
    const hint = ScrollTrigger.create({
      trigger: section,
      start: "top bottom+=200",
      end: "bottom top-=200",
      onToggle: (self) => (layer.style.willChange = self.isActive ? "transform" : ""),
    });
    return () => {
      hint.kill();
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(layer, { clearProps: "transform,willChange" });
    };
  });

  return () => mm.revert();
}

/** QA helper: how many ScrollTriggers are live on this page. */
export function liveTriggerCount() {
  init();
  return ScrollTrigger.getAll().length;
}

/** QA helper (dev only): force a frame — useful when rAF is throttled in a background tab. */
export function forceFrame() {
  init();
  ScrollTrigger.update();
  gsap.ticker.tick();
}
