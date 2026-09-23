import { BookOpen, Briefcase, GraduationCap, Layers } from "lucide-react";
import { Ph } from "@/components/ui";
import type { CardItem, FaqItem, Step } from "@/components/sections";

/* /institutions. Copy: eduRealm content strategist draft. */

/** DRAFT */
export const DELIVER: CardItem[] = [
  {
    icon: BookOpen,
    title: "Curriculum design",
    body: "A full curriculum map for your chosen subjects and grades, NEP-aligned, with a term-by-term rollout plan and assessment guidance.",
  },
  {
    icon: GraduationCap,
    title: "Facilitator training",
    body: "A certification program for your teaching staff covering modern classroom methods, early burnout recognition, and empathetic teaching practice, with a completion certificate per teacher.",
  },
  {
    icon: Layers,
    title: "Study material development",
    body: "Custom modules matched to your curriculum, delivered in both print-ready and digital formats.",
  },
  {
    icon: Briefcase,
    title: "Industry–academia networking",
    body: "Introductions to corporate partners for student placements, internships, and potential infrastructure funding, matched to your school’s profile and location.",
  },
];

/** DRAFT */
export const PROCESS: Step[] = [
  { title: "Discovery", body: "A call or visit to understand your current curriculum, staffing, and specific gaps." },
  { title: "Proposal", body: "A written scope and quote, tailored to what you actually need — not a fixed package." },
  { title: "Delivery", body: "Work begins on the agreed timeline, with a named point of contact on our side throughout." },
  {
    title: "Review",
    body: "A structured check-in at the midpoint and end of the engagement, with adjustments made based on what’s actually working in your classrooms.",
  },
];

/** DRAFT — accurate general NEP 2020 content; fact-check against specific curriculum claims before publishing. */
export const NEP = [
  "The National Education Policy 2020 shifts emphasis toward competency-based learning over rote memorisation, holistic and progress-card-style assessment rather than single high-stakes exams, stronger foundational literacy and numeracy in early grades, multilingual instruction where feasible, and earlier exposure to vocational and skills-based learning from the middle-school years onward.",
  "Our curriculum design work is built around these same principles — practical thinking assessed in more than one way, not memorisation tested once a year.",
];

export const FAQ: FaqItem[] = [
  { id: "boards", q: "Which boards do you work with?", a: <Ph>boards supported</Ph> },
  { id: "replace", q: "Do you replace our teachers?", a: "No. We train and support your teachers — they stay in the classroom." },
  { id: "price", q: "How is pricing worked out?", a: "A written scope and quote, tailored to what you actually need — not a fixed package." },
  { id: "case", q: "Do you have a case study?", a: "Not yet. We will publish one only with the school’s written consent." },
];
