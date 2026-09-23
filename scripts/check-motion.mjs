// Motion budget audit (design draft §3, §4, §7). Run: npm run check:motion
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const norm = (p) => p.split("\\").join("/");
const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(tsx?|css)$/.test(f) ? [norm(p)] : [];
  });
const files = ["app", "components", "motion"].flatMap(walk);
const read = (f) => readFileSync(f, "utf8");
const fails = [];

// 1. GSAP / ScrollTrigger live only in motion/scroll.ts
for (const f of files) {
  if (f.endsWith("motion/scroll.ts")) continue;
  if (/from "gsap|ScrollTrigger\.create/.test(read(f))) fails.push(`${f}: GSAP/ScrollTrigger used outside motion/scroll.ts`);
}

// 2. Mind Before Marks: no parallax, no scrub, no gold
const mbm = read("app/programs/mind-before-marks/page.tsx");
if (!mbm.includes('data-motion="strict"')) fails.push('mind-before-marks: missing data-motion="strict" wrapper');
for (const bad of ["ParallaxLayer", "registerParallax", "useScrollEffect", "FinePrint", "Commitment", "countUp", "Stamp", "Marquee", "PhotoCollage"]) {
  if (mbm.includes(bad)) fails.push(`mind-before-marks: contains banned "${bad}"`);
}

if (/-gold|--color-gold|GoalStat/.test(mbm)) fails.push("mind-before-marks: uses gold");

// 3. Parallax speeds within 0.8–1.2; max 2 parallax sections per page
const parallaxComponents = new Set();
for (const f of files) {
  const s = read(f);
  for (const m of s.matchAll(/speed=\{([\d.]+)\}/g)) {
    const v = Number(m[1]);
    if (v < 0.8 || v > 1.2) fails.push(`${f}: parallax speed ${v} outside 0.8–1.2`);
  }
  const name = s.match(/export function (\w+)/)?.[1];
  if (name && s.includes("<ParallaxLayer")) parallaxComponents.add(name);
}
for (const f of files.filter((f) => f.endsWith("page.tsx"))) {
  const s = read(f);
  const n =
    [...parallaxComponents].filter((c) => s.includes(`<${c}`)).length + (s.match(/<ParallaxLayer/g) ?? []).length;
  if (n > 2) fails.push(`${f}: ${n} parallax sections (max 2)`);
  if (n) console.log(`  ${f}: ${n} parallax section(s)`);
}

if (fails.length) {
  console.error("Motion budget check FAILED:\n  " + fails.join("\n  "));
  process.exit(1);
}
console.log("Motion budget check passed.");
