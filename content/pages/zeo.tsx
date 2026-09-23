import { Ph } from "@/components/ui";
import type { FaqItem } from "@/components/sections";

/* /zeo. Copy: eduRealm content strategist draft. FRAMEWORK items are marked in the page. */

/** DRAFT */
export const PREPARE = [
  "You can’t cram for ZEO the way you’d cram for a recall-based exam — that’s the point.",
  "The most useful preparation is practising reasoning under time pressure: working through problems you haven’t seen before, discussing real-world scenarios with incomplete information, and getting comfortable being wrong and adjusting your answer rather than freezing.",
  "Reading widely outside the syllabus helps more here than reviewing a formula sheet.",
];

/** FRAMEWORK — suggested weighting, confirm before publishing. */
export const SCORING = [
  { area: "Reasoning and logic", weight: "40%" },
  { area: "Emotional intelligence and situational judgement", weight: "30%" },
  { area: "Problem-solving under constraints", weight: "30%" },
];
export const SCORING_NOTE = "Partial credit is given for shown reasoning, even when the final answer isn’t correct.";

/** FRAMEWORK — suggested definition, confirm before publishing. */
export const RURAL_TOPPER =
  "A “rural topper” is a top-scoring student enrolled in a government or low-fee private school located in a Tier 2, Tier 3, rural, or tribal district, verified against the student’s school enrolment records at the time of registration.";

export const FAQ: FaqItem[] = [
  { id: "coaching", q: "Do I need coaching to prepare?", a: "No. A coaching batch can’t prepare you for ZEO. That’s the point." },
  { id: "who", q: "Who can take ZEO?", a: <Ph>grade range and eligibility criteria</Ph> },
  { id: "fee", q: "Is there a fee?", a: <Ph>fee</Ph> },
  { id: "rural", q: "Who counts as a rural topper?", a: RURAL_TOPPER },
  { id: "funded", q: "Who pays for the scholarships?", a: "They are fully CSR-funded, from year one." },
  { id: "bulk", q: "Can my school register students together?", a: <Ph>bulk school registration process</Ph> },
];
