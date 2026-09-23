/* /contact. Copy: eduRealm content strategist draft. */

/** DRAFT */
export const ROUTING = {
  head: ["Role", "What to include", "Typical response"],
  rows: [
    ["Parent", "Your city, your child's grade, which program interests you", "2 business days"],
    ["School", "School name, board, strength, city", "2 business days"],
    ["Company / CSR", "Company name, area of interest (scholarships, co-branding, reporting)", "3 business days"],
    ["NGO / Government", "Organisation name, district(s) of operation, proposed engagement type", "3 business days"],
  ],
};

/** Typical response by contact-form role (from the routing table). */
export const RESPONSE_BY_ROLE: Record<string, string> = {
  parent: "2 business days",
  school: "2 business days",
  company: "3 business days",
  ngo: "3 business days",
};

export const QUICK = [
  { href: "/programs", label: "Programs & sessions" },
  { href: "/programs/informed-choice#checklist", label: "The 12 Questions Checklist" },
  { href: "/institutions#proposal", label: "Request a school proposal" },
  { href: "/partner", label: "Partner with us" },
  { href: "/zeo", label: "ZEO Olympiad" },
];
