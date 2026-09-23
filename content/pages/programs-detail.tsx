import Link from "next/link";
import { Brain, Calculator, Lightbulb, Puzzle, Sparkles } from "lucide-react";
import { Ph } from "@/components/ui";
import type { CardItem, FaqItem } from "@/components/sections";

/*
 * Compass, Cognitive Skill Workshops, Founders' Bootcamp. Copy: eduRealm content strategist draft.
 * DRAFT = finished copy. FRAMEWORK = needs owner sign-off (marked in the page). No AI language.
 */

/* ---------------- Compass ---------------- */

/** DRAFT (durations FRAMEWORK: 3 × 45 min over 2–3 weeks). */
export const COMPASS_SESSIONS: CardItem[] = [
  {
    title: "1 · Assessment",
    body: "The student completes two structured assessments under a counsellor’s guidance: one measuring aptitudes, one measuring interests and working style. No right or wrong answers — this isn’t a test to pass.",
    meta: "Student · 45 minutes",
  },
  {
    title: "2 · Interpretation",
    body: "The counsellor walks the student through the results one-on-one, translating scores into plain language and connecting them to real fields and pathways, not a single “correct” career.",
    meta: "Student · 45 minutes",
  },
  {
    title: "3 · Report review",
    body: "Student and parent review the written report together with the counsellor, with room for questions and a discussion of next steps — subjects to focus on, extracurriculars worth exploring, or further research the family can do together.",
    meta: "Student and parent · 45 minutes",
  },
];

/** FRAMEWORK — category is correct; the specific licensed instruments still need naming. */
export const COMPASS_INSTRUMENTS = (
  <>
    Compass uses one validated aptitude inventory (measuring reasoning strengths across verbal, numerical, and spatial
    domains) and one validated interest inventory (measuring alignment with broad career clusters).{" "}
    <Ph>Name the specific licensed instruments once selected.</Ph>
  </>
);

/** DRAFT */
export const COMPASS_REPORT = [
  "A one-page plain-language summary of the student’s aptitude and interest profile.",
  "Three to five career directions worth exploring, with a short note on why each one surfaced.",
  "A short list of subjects or extracurriculars that align with the profile.",
  "No single “you should become X” recommendation — the report is a starting point for a conversation, not a verdict.",
];

/** DRAFT — clearly fictional, for illustration only. */
export const SAMPLE_REPORT = [
  { label: "Student", value: "[Sample Student], Grade 10" },
  { label: "Aptitude profile", value: "Strong numerical and spatial reasoning; moderate verbal reasoning." },
  { label: "Interest profile", value: "Highest alignment with Investigative and Realistic career clusters; moderate alignment with Enterprising." },
  {
    label: "Directions worth exploring",
    value:
      "Engineering disciplines, applied sciences, design and architecture-adjacent fields. Each surfaced from the combination of strong spatial reasoning and investigative interest — not from either alone.",
  },
  {
    label: "Discussion notes",
    value:
      "Consider whether the student has had exposure to any of these fields directly (a workshop, a relative’s work, a school project) — direct exposure often matters more than the assessment alone in narrowing interest further.",
  },
];
export const SAMPLE_NOTE = "This is a sample report for illustration. Real reports are personalised to the individual student’s results.";

export const COMPASS_FAQ: FaqItem[] = [
  { id: "fail", q: "Can my child fail Compass?", a: "No. There are no right or wrong answers — this isn’t a test to pass." },
  { id: "recommend", q: "Will you recommend a college or institute?", a: "No. No recommended institutes. No commissions." },
  { id: "screen", q: "Is it done on a computer?", a: "Not a quiz. Not software. A trained counsellor working through real assessments with your child." },
  { id: "format", q: "Online or on campus?", a: "Either. Tell us your preference when you enquire." },
];

/* ---------------- Cognitive Skill Workshops ---------------- */

/** DRAFT */
export const SKILLS: CardItem[] = [
  { icon: Calculator, title: "Quantitative reasoning", body: "Working through numerical problems by logic, not memorised formulas." },
  { icon: Sparkles, title: "Emotional intelligence", body: "Recognising and managing emotional responses, in yourself and in group situations." },
  { icon: Puzzle, title: "Problem-solving", body: "Breaking an unfamiliar problem into steps, without knowing the answer in advance." },
  {
    icon: Brain,
    title: "Multiple intelligences",
    body: "Recognising that “smart” looks different across people, and working with your own strengths rather than against them.",
  },
];

/** FRAMEWORK — suggested structure. */
export const WORKSHOP_FORMATS: CardItem[] = [
  {
    title: "Half-day",
    body: "Two skill areas, roughly 90 minutes each, with a short break between.",
    meta: <>Students · <Ph>grades</Ph> · Batch <Ph>number</Ph></>,
  },
  {
    title: "Full-day",
    body: "All four skill areas, roughly 75 minutes each, with a longer midday break and a closing group reflection.",
    meta: <>Students · <Ph>grades</Ph> · Batch <Ph>number</Ph></>,
  },
];

/** DRAFT */
export const WORKSHOP_BOOKING =
  "Tell us your grade level and preferred skill-area focus when you enquire — we’ll confirm a half-day or full-day format based on your schedule and group size.";

export const WORKSHOP_RELATED = (
  <>
    The same reasoning-first idea runs through the{" "}
    <Link href="/zeo" className="font-medium text-navy underline underline-offset-4">
      ZEO Olympiad
    </Link>
    : an exam that tests judgement, not memory.
  </>
);

/* ---------------- Founders' Bootcamp ---------------- */

export const BUILD: CardItem[] = [
  { icon: Lightbulb, title: "Market research", body: "Talk to real potential users and test whether the problem actually exists." },
  { icon: Calculator, title: "A basic plan", body: "Costs, pricing, and how the idea could sustain itself — in simple numbers." },
  { icon: Sparkles, title: "A pitch", body: "A short, honest presentation of the idea, the evidence, and the next step." },
];

/** Length is FRAMEWORK (5 days, from the programs compare table). */
export const BOOTCAMP_FACTS = [
  { label: "Who", value: "Students, grades 9–12" },
  { label: "Format", value: "Summer camp" },
  { label: "Length", value: "5 days" },
  { label: "Batch size", value: <Ph>number</Ph> },
  { label: "Dates & location", value: <Ph>dates, location</Ph> },
  { label: "Fee", value: <Ph>fee</Ph> },
];

/** DRAFT */
export const BOOTCAMP_NOT =
  "Not a finished company. Not an investment pitch to real investors. Not a promise of funding, a job, or a guaranteed outcome. It’s a structured week of learning how founders actually think — students leave with a plan and a pitch, not a business.";

/** DRAFT — role description; names once confirmed. */
export const MENTORS = (
  <>
    Each bootcamp cohort is supported by two to three mentors with real early-stage business or entrepreneurship
    experience, who work directly with small student teams through the week rather than lecturing at the front of a room.{" "}
    <Ph>Mentor names and bios once confirmed.</Ph>
  </>
);

/** DRAFT */
export const PITCH_DAY =
  "The bootcamp closes with each team presenting a five-minute pitch to a small panel — mentors, and where possible, an outside guest with relevant experience. Feedback is constructive and specific, not scored competitively; the point is the practice of pitching, not a winner.";

/** FRAMEWORK — standard camp safety draft; confirm against the actual venue and staffing plan. */
export const SUPERVISION = [
  "One adult supervisor for every 12 students at all times.",
  "A collected emergency contact for every participant before the camp begins.",
  "A clear code of conduct shared with students and parents in advance.",
  "No student leaves the venue during program hours without a parent or guardian collecting them in person.",
];
