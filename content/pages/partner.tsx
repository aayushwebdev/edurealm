import { Ph } from "@/components/ui";
import type { CardItem, FaqItem, Step } from "@/components/sections";
import { Handshake, HandCoins, Share2 } from "lucide-react";

/* /partner. Copy: eduRealm content strategist draft. FRAMEWORK items are marked in the page. */

/** DRAFT */
export const FLOW: Step[] = [
  { title: "Fund committed", body: "A CSR or individual contribution is allocated to a specific scholarship pool or program." },
  { title: "Recipient identified and verified", body: "Against the criteria below." },
  { title: "Funds disbursed", body: "Directly toward the student’s education costs, not as unrestricted cash." },
  { title: "Dated report sent", body: "Confirming who was supported and how the funds were used, on the reporting cadence agreed with the partner." },
];

/** FRAMEWORK — draft, confirm against actual operational capacity. */
export const VERIFICATION: Step[] = [
  { title: "Nominated", body: "A candidate is nominated through a partner school or NGO." },
  { title: "Enrolment and geography checked", body: "eduRealm verifies enrolment status and geography against school records." },
  {
    title: "Hardship confirmed",
    body: "Family income or equivalent hardship criteria are confirmed through documentation appropriate to the region (ration card, income certificate, or NGO caseworker attestation where formal documentation isn’t available).",
  },
  { title: "Final review", body: "A final review is conducted by eduRealm before any funds are disbursed." },
];

/** Derived from the flow and the charter (report contents). */
export const REPORT_INCLUDES = [
  "Who was supported, and how the funds were used.",
  "Every recipient named and verified — shared with the family’s consent.",
  "Every number with its denominator and a date.",
  "Compliance documentation.",
];

/** DRAFT */
export const OLYMPIAD_GETS = [
  "Co-branding on all regional materials for that Olympiad cycle.",
  "A dated impact report naming the scholarships funded through that specific sponsorship.",
  "The option to have a company representative present at the regional results announcement, where logistics allow.",
];

/** DRAFT */
export const NGO_MODELS: CardItem[] = [
  { icon: Handshake, title: "Co-delivery", body: "Your team and ours deliver a program jointly in your existing districts." },
  { icon: HandCoins, title: "Funding partnership", body: "You fund a defined scope of work; we deliver and report against it." },
  {
    icon: Share2,
    title: "Resource-sharing",
    body: "We provide curriculum, training materials, or facilitator training; you handle on-ground delivery through your own network.",
  },
];

export const COMMITMENTS = [
  "We take no commission from any institute.",
  "We publish our numbers with their denominators.",
  "We name no child in a case study without written consent.",
];

export const FAQ: FaqItem[] = [
  { id: "csr", q: "Is this eligible CSR spend?", a: <Ph>CSR eligibility — confirm with your compliance team</Ph> },
  { id: "min", q: "Is there a minimum contribution?", a: <Ph>minimum, if any</Ph> },
  { id: "cash", q: "Does the money go to the student as cash?", a: "No. Funds are disbursed directly toward the student’s education costs, not as unrestricted cash." },
  { id: "report", q: "When do we get reports?", a: <>On the reporting cadence agreed with each partner. <Ph>default cadence</Ph></> },
];
