import { Ph } from "@/components/ui";
import type { FaqItem, Step } from "@/components/sections";

/*
 * Informed Choice — added sections. ✎ = DRAFT — approve. <Ph> = you supply.
 * LEGAL REVIEW REQUIRED before publish. No institute is ever named, in any framing.
 * Every factual claim must link to a regulator notice, court order, or published report.
 */

/** DRAFT — general consumer-education content, not tied to any named institute. */
export const TACTICS = [
  {
    name: "Inflated rank claims",
    looks: "A results poster showing a headline number of “selections” without showing how many students were actually enrolled that year.",
    matters: "A small number of selections against a huge enrolled batch produces the same headline number as a genuinely strong result — the ratio is what tells you the truth, not the number alone.",
    ask: "“What was your total enrolled batch size for this result year, against this number of selections?”",
  },
  {
    name: "Non-refundable fee traps",
    looks: "A fee structure where withdrawal after a short window forfeits the full amount, regardless of the reason.",
    matters: "Families sometimes need to withdraw a child for health, financial, or academic-fit reasons partway through a program — and discover the refund window closed weeks earlier than they realised.",
    ask: "“What exactly is refundable, and by what specific date — in writing, not verbally?”",
  },
  {
    name: "“Dummy school” enrolment",
    looks: "A coaching program that enrols a student at a school for board-exam eligibility purposes only, with no real classroom attendance expected or required.",
    matters: "This can affect a student’s actual academic record and eligibility for certain board-exam categories — families are often not told clearly what this arrangement means before agreeing to it.",
    ask: "“Will my child be required to attend regular classes at this school, or is this enrolment for exam-eligibility purposes only?”",
  },
];

/** DRAFT */
export const BEFORE_YOU_SIGN: Step[] = [
  { title: "Ask for the ratio", body: "Ask for the total-enrolled-to-selected ratio, not just the headline number." },
  { title: "Get the refund policy in writing", body: "With specific dates, before paying anything." },
  { title: "Confirm the school arrangement", body: "Confirm directly whether this is a “dummy school” enrolment." },
  { title: "Ask who is teaching", body: "Ask who is actually teaching the batch, and their qualifications." },
  { title: "Take it home", body: "Read the paperwork before signing — a program that pressures you to sign on the spot is telling you something." },
];

/**
 * The twelve questions. 1–3 from the master content; 4–12 FRAMEWORK — content ready, still needs
 * the legal-sourcing pass (link each to a regulator notice, court order, or report where applicable).
 */
export const QUESTIONS = [
  "What’s the total enrolled versus the number in your result claim?",
  "Is any part of the fee refundable, and by what date?",
  "Is this a “dummy school” enrolment? What does that mean for board attendance?",
  "Will my child be required to attend regular classes at this school, or is this enrolment for exam-eligibility purposes only?",
  "Who is actually teaching this batch, and what are their qualifications?",
  "Is the fee structure the same for every student, or is there a hidden “scholarship discount” that’s actually the real price?",
  "What happens if my child needs to pause or leave the program mid-year?",
  "Can I see the actual syllabus and schedule before I pay, not just a summary?",
  "Are there any additional mandatory costs beyond the advertised fee — study material, testing fees, uniform, hostel?",
  "What is the batch size, and is it the number I was told during the sales conversation?",
  "Is this institute registered or affiliated with any regulatory or accreditation body, and can I verify that independently?",
  "Can I speak to a current parent whose child is enrolled, without the institute arranging or being present for that conversation?",
];

export const SEMINAR = [
  { label: "Format", value: "On-campus or online" },
  { label: "For", value: "Parents" },
  { label: "Duration", value: "90 minutes" },
  { label: "You leave with", value: "The 12 Questions Checklist" },
];

export const FAQ: FaqItem[] = [
  {
    id: "which",
    q: "Will you tell me which institute is good?",
    a: "No. We name no institute, and we take no commission from any of them. We show you what to check, so you can decide.",
  },
  {
    id: "against",
    q: "Are you against coaching?",
    // ✎ DRAFT — approve (brand stance)
    a: "No. We’re against tactics that hide the facts a parent needs before paying. Any institute should be able to answer every one of the twelve questions.",
  },
  { id: "free", q: "Is the checklist free?", a: "Yes. Email only. No phone number requested." },
  { id: "review", q: "Who checks this content?", a: <Ph>legal review — who reviews, and when</Ph> },
];
