/**
 * Copy shared across pages. Source of truth: edurealm-website-content.md.
 * Placeholders are marked with `ph:` so they render as visible "To confirm" chips.
 * Search the project for `ph(` or `<Ph>` to find everything still to fill.
 */

export const LAST_UPDATED = "23 September 2026";

export const HELPLINES = [
  { name: "Tele-MANAS", number: "14416", tel: "14416" },
  { name: "KIRAN", number: "1800-599-0019", tel: "18005990019" },
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/zeo", label: "ZEO Olympiad" },
  { href: "/institutions", label: "For schools" },
  { href: "/partner", label: "Partner" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About us" },
] as const;

/** The strictest-motion, no-gold route (design draft §6). */
export const CALM_PATH = "/programs/mind-before-marks";

export const BOOK_HREF = "/contact?role=parent#form";
export const BOOK_SCHOOL_HREF = "/contact?role=school#form";
export const PARTNER_HREF = "/partner";

export type Audience = "students" | "parents" | "schools";
export type Format = "on-campus" | "online" | "camp";

export const PROGRAMS: {
  slug: string;
  name: string;
  /** The two programs the homepage leads with. */
  flagship?: boolean;
  line: string;
  meta: string;
  audience: Audience[];
  format: Format[];
}[] = [
  {
    slug: "mind-before-marks",
    name: "Mind Before Marks",
    flagship: true,
    line: "Suicide prevention and academic pressure support.",
    meta: "On-campus · Students, parents, teachers.",
    audience: ["students", "parents", "schools"],
    format: ["on-campus"],
  },
  {
    slug: "informed-choice",
    name: "Informed Choice",
    flagship: true,
    line: "What to check before you pay a coaching fee.",
    meta: "On-campus or online · Parents.",
    audience: ["parents"],
    format: ["on-campus", "online"],
  },
  {
    slug: "compass",
    name: "Compass",
    line: "Career discovery with a counsellor. Not a guess.",
    meta: "Three sessions · Students, grades 9–12.",
    audience: ["students"],
    format: ["on-campus"],
  },
  {
    slug: "cognitive-skills",
    name: "Cognitive Skill Workshops",
    line: "Reasoning, EQ, problem-solving.",
    meta: "Half-day or full-day · Students.",
    audience: ["students", "schools"],
    format: ["on-campus"],
  },
  {
    slug: "founders-bootcamp",
    name: "Founders' Bootcamp",
    line: "An idea becomes an early business model.",
    meta: "Summer camp · Students, grades 9–12.",
    audience: ["students"],
    format: ["camp"],
  },
];

export const INSTITUTION_NEEDS = [
  {
    q: "Curriculum feels outdated?",
    a: "We design NEP-aligned curricula built for thinking, not memorising.",
  },
  {
    q: "Teachers need better tools?",
    a: "Certification in modern classroom methods and early burnout recognition.",
  },
  {
    q: "Study material falls flat?",
    a: "Custom modules built for your subjects and grades.",
  },
  {
    q: "No path to industry?",
    a: "We connect your school to corporate partners for placements, internships, and funding.",
  },
];

export const ETHICS_CHARTER = [
  "We take no commission from any institute.",
  "We name no child in a case study without written consent.",
  "We publish our numbers with their denominators.",
  "We never guarantee a rank.",
  "We refuse work that requires us to pressure a child.",
];

export const FUNDING = {
  title: "Not a charity. Not a coaching centre.",
  body: [
    "Schools and companies pay us for curriculum work, training, and CSR delivery.",
    "That revenue funds the scholarships, the rural workshops, and every free parent session we run.",
    "Nobody pays us a commission to recommend them. Ever.",
  ],
};

/**
 * 2030 targets that have a stated number: counted as Goals, never as results.
 * Placeholder round numbers — need final confirmation before publishing (master content §3).
 */
/** Year-one targets (set by the owner, 2026-09). */
export const TARGETS_YEAR_ONE = { districts: 20, scholarships: 100 };

export const TARGETS_2030 = [
  { value: 500, label: "partner schools by 2030" },
  { value: 100000, label: "students reached through pressure-awareness sessions" },
  { value: 1000, label: "fully funded rural scholarships" },
];

export const PILLARS = [
  "Student Development",
  "Institution Development",
  "Industry Partnership",
  "Media & Publishing",
  "Social Impact",
];

export const MEDIA = [
  {
    name: "eduRealm TV",
    line: "Video explainers on education policy and industry practices.",
  },
  {
    name: "The eduRealm Podcast",
    line: "Conversations with child psychologists and ethical educators.",
  },
  {
    name: "Journal & e-magazine",
    line: "Insight for school leaders and policymakers.",
  },
];

/** Brand overview (master content §1). */
export const POSITIONING =
  "An ethical education consultancy that protects students and parents from academic pressure and coaching-industry sales tactics, while building capacity in schools and channeling opportunity into Tier 2, Tier 3, rural and tribal India.";

export const DIFFERENCE =
  "Most education organizations are either fully commercial (selling courses) or fully non-profit (relying on charity). eduRealm uses B2B revenue from schools and companies to fund free, protective work for students and families — and channels that same funding into rural and tribal scholarships.";

export const AUDIENCES = [
  {
    who: "Students & parents",
    kind: "B2C",
    need: "Career direction, academic burnout, fear of coaching scams",
    answer: "Suicide prevention & pressure workshops, coaching-tactics awareness, career counselling",
  },
  {
    who: "Schools & colleges",
    kind: "B2B",
    need: "Outdated curricula, undertrained teachers, NEP alignment",
    answer: "Curriculum design, facilitator training, study materials, industry links",
  },
  {
    who: "CSR & corporates",
    kind: "B2B/B2G",
    need: "Transparent, high-impact ways to deploy CSR education funds",
    answer: "Verified scholarship routing, co-branded Olympiads, measurable reporting",
  },
  {
    who: "NGOs & government",
    kind: "B2G",
    need: "Real educational access in underserved regions",
    answer: "Grassroots literacy drives, joint welfare initiatives, regional bootcamps",
  },
];

/** DRAFT (content strategist) — one line per pillar. */
export const PILLARS_EXPLAINED = [
  { name: "Student Development", body: "Direct programs for students: pressure support, career discovery, cognitive skills, entrepreneurship." },
  { name: "Institution Development", body: "Curriculum, teacher training, and study materials for schools." },
  { name: "Industry Partnership", body: "Connecting schools and students to corporate CSR funding, placements, and internships." },
  { name: "Media & Publishing", body: "Public education through video, audio, and written journalism on the education sector." },
  { name: "Social Impact", body: "Scholarships and grassroots programs in Tier 2, Tier 3, rural and tribal districts." },
];

/** DRAFT (content strategist) — what each ethics-charter vow actually restricts. Order matches ETHICS_CHARTER. */
export const ETHICS_EXPANDED = [
  "We’re never paid by a coaching provider, school vendor, or third party to recommend them. Every recommendation we make is based only on what’s best for the student or school in front of us.",
  "Any student story we publish has explicit, written consent from the family, obtained separately from any program enrolment — consent to participate in a session is never treated as consent to be featured publicly.",
  "A number without context can say anything. Every statistic we publish shows what it’s a fraction of, and when it was last updated.",
  "No program we run promises a specific academic outcome — we promise a process, not a result, because promising a result is exactly the sales tactic Informed Choice exists to warn against.",
  "If a client relationship — a school, a company, a partner — would require us to push a student toward an outcome rather than support their own judgement, we decline that work.",
];

/** DRAFT (content strategist) */
export const CAREERS =
  "We’re a small, growing team. If nothing’s listed below right now, that doesn’t mean we’re not hiring — reach out through the contact page and tell us what you’d bring.";
