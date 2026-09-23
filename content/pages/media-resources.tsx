import Link from "next/link";
import { Ph } from "@/components/ui";

/* /media and /resources. Copy: eduRealm content strategist draft. */

/** DRAFT */
export const TOPICS = [
  {
    channel: "eduRealm TV",
    body: "Short explainers on NEP changes, how to read a school’s academic claims, and practical guidance for parents navigating board-exam years.",
  },
  {
    channel: "The eduRealm Podcast",
    body: "Longer conversations with child psychologists, educators, and policy voices on pressure, burnout, and what “good” education actually looks like.",
  },
  {
    channel: "Journal & e-magazine",
    body: "Longer-form, citation-backed pieces for school leaders and policymakers, on curriculum design, teacher training, and education policy.",
  },
];

/** Derived from the ethics charter. */
export const STANDARDS = [
  "No coaching institute is ever named.",
  "No child is named without written consent.",
  "Every number is published with its denominator.",
  "No sensational statistics about student distress.",
];

/** DRAFT */
export const SUGGEST = (
  <>
    Have a topic you think we should cover? <Ph>email address</Ph> — we read every suggestion, even if we can&rsquo;t
    respond to all of them individually.
  </>
);

const lnk = (href: string, label: string) => (
  <Link href={href} className="font-medium text-navy underline underline-offset-4">
    {label}
  </Link>
);

/** DRAFT */
export const RESOURCE_DETAILS: Record<string, { inside: string; who: string; related: React.ReactNode }> = {
  checklist: {
    inside: "A one-page, print-ready list of every question from the Informed Choice program, formatted to bring to an actual enrolment meeting.",
    who: "Parents",
    related: lnk("/programs/informed-choice", "Informed Choice"),
  },
  "warning-signs": {
    inside: "Five early signs of academic burnout, described plainly, with one suggested next step for each.",
    who: "Parents",
    related: lnk("/programs/mind-before-marks", "Mind Before Marks"),
  },
  nep: {
    inside: "A two-page plain-language summary of what NEP 2020 actually changes, written for a principal or trustee, not a policy specialist.",
    who: "School leaders",
    related: lnk("/institutions", "For schools & colleges"),
  },
  "zeo-samples": {
    inside: "Sample questions in the ZEO style.",
    who: "Students",
    related: lnk("/zeo", "ZEO Olympiad"),
  },
};

/** DRAFT — align exact wording with the final privacy policy once published. */
export const PRIVACY_NOTE =
  "We ask for your email only, to send you the resource and occasionally let you know about relevant new material. We don’t sell or share your email with anyone else. You can unsubscribe from any email at any time.";
