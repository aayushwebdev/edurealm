import { BookHeart, GraduationCap, Users } from "lucide-react";
import { Ph } from "@/components/ui";
import type { CardItem, FaqItem, Step } from "@/components/sections";
import { HELPLINES } from "@/content/site";

/*
 * Mind Before Marks. Copy: eduRealm content strategist draft.
 * FRAMEWORK items (referral pathway, safe-messaging standard, ratios, policy answers) need sign-off
 * from a licensed mental health professional before publishing as official policy — marked in the page.
 * Safe-messaging: preventive, educational language only. No statistics, no method detail.
 */

/** DRAFT */
export const WHY = [
  "Academic pressure builds quietly. A student under strain doesn’t always look distressed — often they look busy, high-achieving, and fine. Schools see this pattern every year and rarely have a structured way to respond to it.",
  "Mind Before Marks gives students a place to name what they’re carrying, gives parents language for supporting rather than adding to the pressure, and gives teachers a clear, practical way to notice a student who’s struggling and know what to do next.",
];

/** Tracks ✓; duration per the programs compare table (FRAMEWORK). */
export const TRACKS: CardItem[] = [
  {
    icon: GraduationCap,
    title: "Students",
    body: "Recognise burnout in yourself. Manage exam-season load. Know who to ask for help.",
    meta: "On-campus · Half-day · Up to 25 per facilitator",
  },
  {
    icon: Users,
    title: "Parents",
    body: "What pressure sounds like at home, even when you’re trying to help. Early warning signs. How to talk after a bad result.",
    meta: "On-campus · Half-day · Up to 25 per facilitator",
  },
  {
    icon: BookHeart,
    title: "Teachers & facilitators",
    body: "Spot a withdrawn student. First-response conversation skills. Clear escalation paths.",
    meta: "On-campus · Half-day · Up to 25 per facilitator",
  },
];

/** DRAFT */
export const TAKEAWAYS = [
  {
    who: "Students",
    items: ["A working vocabulary for describing pressure and burnout.", "At least one concrete strategy they’ve practised in the session."],
  },
  {
    who: "Parents",
    items: [
      "A short list of what early warning signs actually look like at home.",
      "A script for the conversation after a bad result that doesn’t add pressure.",
    ],
  },
  {
    who: "Teachers & facilitators",
    items: [
      "A simple, memorable framework for the first conversation with a withdrawn student.",
      "Clarity on exactly who to escalate to, and how.",
    ],
  },
];

const helplines = HELPLINES.map((h) => `${h.name} (${h.number})`).join(" and ");

/** FRAMEWORK — draft protocol; needs sign-off from a licensed mental health professional. */
export const REFERRAL: Step[] = [
  {
    title: "Flag it privately",
    body: "If a facilitator becomes concerned about a specific student during a session, they flag it privately to the school’s designated point of contact (typically the counsellor or a senior teacher) before the session ends.",
  },
  {
    title: "The school’s safeguarding process",
    body: "The school’s point of contact follows the school’s existing child safeguarding policy to involve the family, consistent with the school’s duty of care.",
  },
  {
    title: "Information on professional support",
    body: `eduRealm provides the family with information on professional support options, including ${helplines}, and, where the school has one, a referral to its counsellor or an external clinician.`,
  },
];

export const REFERRAL_NOT =
  "What we don’t do: diagnose, provide therapy, or intervene directly with a student outside the session without going through the school’s own safeguarding process.";

/** FRAMEWORK — confirm the standard is accurate before publishing it as a claim. */
export const SAFE_MESSAGING =
  "Every session follows WHO-aligned safe messaging guidance on suicide prevention communication, adapted for a school setting.";

export const SAFEGUARD_POINTS = [
  "We name no child in a case study without written consent.",
  "Nothing we publish identifies a student who took part.",
  "If a child needs clinical support, we help the family find it.",
];

/** DRAFT (ratio is FRAMEWORK) */
export const SCHOOL_NEEDS = [
  "A private room for the duration of the session.",
  "One facilitator per 25 students, with smaller breakout capacity available if the room allows.",
  "Parent consent collected at least one week ahead of any parent-facing session.",
  "A designated school point of contact identified before the session, per the referral pathway above.",
];

export const FAQ: FaqItem[] = [
  { id: "therapy", q: "Is this therapy?", a: "No. Educational and preventive. Not therapy. Not diagnosis. Not crisis care." },
  {
    id: "identify",
    q: "Will you identify at-risk students to the school?",
    // FRAMEWORK — draft policy answer, confirm before publishing.
    a: "If a facilitator becomes concerned about a specific student, we raise it privately with the school’s designated point of contact, following the referral pathway above. We don’t diagnose or label a student — we flag a concern and let the school’s own safeguarding process take it from there.",
  },
  {
    id: "confidential",
    q: "Is it confidential?",
    // FRAMEWORK — draft policy answer, confirm before publishing.
    a: "What’s shared in a session stays within the room, with one exception: if a facilitator believes a student may be at risk, our duty of care means we’ll raise that concern with the school, even without the student’s explicit consent for that specific disclosure. We tell every group this upfront, before any session starts.",
  },
  {
    id: "help-now",
    q: "What if someone needs help right now?",
    a: `If a child needs clinical support, we help the family find it. For immediate support, call free: ${HELPLINES.map((h) => `${h.name} ${h.number}`).join(" · ")}.`,
  },
  { id: "who", q: "Who runs the sessions?", a: <>Named facilitators, with their credentials, listed on this page. <Ph>names to be confirmed</Ph></> },
];
