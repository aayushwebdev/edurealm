import { Ph } from "@/components/ui";
import { LAST_UPDATED } from "@/content/site";

/* /impact. Copy: eduRealm content strategist draft. */

/** FRAMEWORK — needs owner approval before it becomes a public commitment. */
export const MEASURES = {
  head: ["Measure", "Against (denominator)"],
  rows: [
    ["Schools engaged", "Schools targeted for the reporting period"],
    ["Students reached through pressure-awareness sessions", "Total enrolment in partner schools"],
    ["Scholarships awarded", "Verified eligible applicants for that cycle"],
    ["Districts covered", "Districts planned for the year"],
  ],
};
export const MEASURES_NOTE = "Every one of these publishes with its denominator, every time — never a number alone.";

/** FRAMEWORK — suggested cadence. */
export const CALENDAR = [
  { what: "This page", when: "Updated quarterly" },
  { what: "Annual report", when: "Published each year alongside it" },
  { what: "First scholarship cohort", when: <Ph key="c">date</Ph> },
  { what: "First annual report", when: <Ph key="r">date</Ph> },
];

export const LOG = [{ date: LAST_UPDATED, note: "eduRealm launched. No sessions, scholarships, or reports yet." }];
