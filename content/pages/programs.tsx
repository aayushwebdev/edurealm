import Link from "next/link";
import { Ph } from "@/components/ui";
import type { FaqItem, Step } from "@/components/sections";

/*
 * /programs hub. Copy: eduRealm content strategist draft.
 * DRAFT = finished copy. FRAMEWORK = needs owner sign-off on numbers (marked in the page).
 */

const L = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
  <Link href={`/programs/${slug}`} className="font-medium text-navy underline-offset-4 hover:underline">
    {children}
  </Link>
);

/** DRAFT */
export const FIT = [
  {
    who: "If you're a student",
    items: [
      <><L slug="compass">Compass</L> — career direction</>,
      <><L slug="cognitive-skills">Cognitive Skill Workshops</L> — reasoning and EQ</>,
      <><L slug="founders-bootcamp">Founders&rsquo; Bootcamp</L> — turning an idea into a plan</>,
    ],
  },
  {
    who: "If you're a parent",
    items: [
      <><L slug="mind-before-marks">Mind Before Marks</L> — pressure and wellbeing</>,
      <><L slug="informed-choice">Informed Choice</L> — coaching-fee decisions</>,
      <><L slug="compass">Compass</L> — alongside your child</>,
    ],
  },
  {
    who: "If you're a school",
    items: [
      <><L slug="mind-before-marks">Mind Before Marks</L> and <L slug="informed-choice">Informed Choice</L> — as full-school programs</>,
      <><L slug="cognitive-skills">Cognitive Skill Workshops</L> — as a batch add-on</>,
      <><L slug="founders-bootcamp">Founders&rsquo; Bootcamp</L> — as a summer offering</>,
    ],
  },
];

/** FRAMEWORK — suggested defaults, confirm before publishing. */
export const COMPARE = {
  head: ["Program", "Audience", "Format", "Suggested duration", "Delivery"],
  rows: [
    ["Mind Before Marks", "Students, parents, teachers", "On-campus", "Half-day per track", "In person"],
    ["Informed Choice", "Parents", "On-campus or online", "90 minutes", "In person or online"],
    ["Compass", "Students (9–12)", "On-campus or online", "3 × 45-min sessions, over 2–3 weeks", "In person or online"],
    ["Cognitive Skill Workshops", "Students", "On-campus", "Half-day or full-day", "In person"],
    ["Founders' Bootcamp", "Students (9–12)", "Summer camp", "5 days", "In person"],
  ],
};

/** DRAFT */
export const BOOKING: Step[] = [
  { title: "Enquire", body: "Tell us your school, grade levels, and which program you're interested in." },
  { title: "We confirm format and quote", body: "We'll follow up within two business days with a proposed format, timing, and cost." },
  { title: "Session delivered", body: "We handle materials and facilitation — you provide the space and the students." },
];

export const PROMISE = ["We take no commission from any institute.", "We never guarantee a rank."];

export const FAQ: FaqItem[] = [
  { id: "cost", q: "What does a session cost?", a: <>Depends on the program and format. See the program page or ask us for a school quote. <Ph>session pricing</Ph></> },
  {
    id: "format",
    q: "Online or on campus?",
    a: "Mind Before Marks and Cognitive Skill Workshops are delivered on-campus only — both rely on in-room group dynamics that don't translate well online. Informed Choice and Compass are available either way; tell us your preference when you enquire.",
  },
  {
    id: "size",
    q: "How many students per session?",
    // FRAMEWORK — confirm the real ratio with your facilitators.
    a: "We recommend a maximum of 25 students per facilitator for group sessions, and smaller breakout groups of 6–8 for any discussion-based activity.",
  },
  { id: "structure", q: "How is a school session structured?", a: "See the full breakdown on each program page." },
];
