import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Languages,
  Lightbulb,
  School,
  Tablet,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FaqBlock } from "@/components/sections";
import { FAQ, FLOW } from "@/content/pages/partner";
import { Button, ButtonRow, Container, IconBadge, PageHero, Ph, PhotoCard, PhotoFrame, Section, SectionHeading, Tag } from "@/components/ui";
import { PHOTOS } from "@/content/photos";
import { CARD_PHOTOS, type CardPhoto } from "@/content/cardPhotos";

const INTRO =
  "Connecting corporate CSR capital, NGO outreach, and government programs with deserving students and under-resourced schools across India.";

export const metadata: Metadata = {
  title: "NGO & CSR Partnerships",
  description: INTRO,
};

const CSR_ENQUIRY = "/contact?role=company&topic=partnership#form";
const OVERVIEW = "/contact?role=company&topic=overview#form";

const OPPORTUNITIES: { icon: LucideIcon; title: string; body: string; photo: CardPhoto }[] = [
  {
    icon: GraduationCap,
    title: "Sponsoring Rural & Tribal Scholarships",
    body: "Directly fund the higher education of verified, high-potential students identified through our ZEO Olympiad talent search.",
    photo: CARD_PHOTOS.lucknowGirl,
  },
  {
    icon: School,
    title: "Adopting Underserved Schools",
    body: "Sponsor modern study materials, curriculum upgrades, and comprehensive teacher training for schools in remote areas.",
    photo: CARD_PHOTOS.banaskantha,
  },
  {
    icon: HeartHandshake,
    title: "Funding Student Mental Health & Suicide Prevention Drives",
    body: "Support free, life-saving parent awareness and student counseling seminars in high-pressure regional hubs.",
    photo: CARD_PHOTOS.girlsListening,
  },
  {
    icon: Tablet,
    title: "Digital & Skill Infrastructure Kits",
    body: "Provide foundational learning kits, tablet devices, and skill workshops to tribal community classrooms.",
    photo: CARD_PHOTOS.boyTablet,
  },
];

const COLLABORATION: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Users, title: "Joint Welfare Drives", body: "Collaborating with local NGOs to conduct community counseling and literacy drives." },
  {
    icon: Landmark,
    title: "Government Program Alignment",
    body: "Partnering on regional educational initiatives and public school teacher development.",
  },
  {
    icon: Languages,
    title: "Localized Language Tools",
    body: "Delivering guidance materials in regional languages so parents can understand them easily.",
  },
];

/* Motion: base reveal only. */
export default function Partner() {
  return (
    <>
      {/* 1 · Hero */}
      <PageHero
        crumbs={[{ href: "/partner", label: "NGO & CSR" }]}
        tag="NGO & CSR"
        title={
          <>
            Transforming Grassroots Education Through Purposeful <em>Partnerships</em>
          </>
        }
        lead={INTRO}
      >
        <ButtonRow>
          <Button href={CSR_ENQUIRY} variant="dark">
            Discuss a CSR Partnership
          </Button>
        </ButtonRow>
      </PageHero>

      {/* 2 · The grassroots reality */}
      <Section tone="paper" id="reality" labelledBy="reality-title">
        <Container>
          <Reveal>
            <SectionHeading
              center
              tag="The grassroots reality we address"
              id="reality-title"
              title={
                <>
                  Closing the Divide in Rural and Tribal <em>India</em>
                </>
              }
            />
          </Reveal>
          <div className="relative mt-10 grid gap-5 lg:grid-cols-2 lg:gap-8">
            <Reveal className="flex flex-col rounded-card border border-rule bg-cream p-8 md:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-paper px-3 py-1 text-micro font-semibold tracking-wide text-navy uppercase">
                <AlertTriangle size={14} aria-hidden="true" className="text-gold" /> The problem
              </span>
              <p className="mt-6 text-lead text-graphite">
                While metropolitan centers have abundant counseling and modern classrooms, Tier 2, Tier 3, rural, and tribal regions face
                severe shortages of quality guidance, teacher support, and financial aid. Many bright students drop out simply because
                their families lack resources.
              </p>
            </Reveal>
            {/* Arrow linking problem to solution (desktop) */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-brand-ink shadow-[0_0_0_8px_white] lg:grid"
            >
              <ArrowRight size={22} />
            </span>
            <Reveal index={1} className="on-dark relative flex flex-col overflow-hidden rounded-card bg-navy p-8 text-white/80 md:p-10">
              <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0 opacity-40" />
              <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-micro font-semibold tracking-wide text-white uppercase">
                <Lightbulb size={14} aria-hidden="true" className="text-gold" /> Our solution
              </span>
              <p className="relative mt-6 text-lead text-white">
                We bring verified field programs, modern learning resources, mental health drives, and direct scholarships straight to local
                doorsteps.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3 · CSR partnership opportunities */}
      <Section tone="tint" id="csr" labelledBy="csr-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="CSR partnership opportunities"
              id="csr-title"
              title={
                <>
                  Meaningful Ways Your Company Can <em>Help</em>
                </>
              }
              action={
                <Button href={CSR_ENQUIRY} variant="dark">
                  Discuss a CSR Partnership
                </Button>
              }
            />
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OPPORTUNITIES.map((o, i) => (
              <Reveal as="li" key={o.title} index={i}>
                <PhotoCard photo={o.photo} icon={o.icon} label={String(i + 1).padStart(2, "0")} title={o.title} body={o.body} />
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 4 · NGO and government collaboration */}
      <Section tone="cream" id="ngo" labelledBy="ngo-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Tag>NGO &amp; government collaboration</Tag>
            <h2 id="ngo-title" className="mt-5 text-d3 md:text-d2">
              Working Hand-in-Hand With Community <em>Leaders</em>
            </h2>
            <PhotoFrame photo={PHOTOS.ruralAerial} decorative className="mt-10 aspect-[16/10]" />
          </Reveal>
          <ul className="space-y-4">
            {COLLABORATION.map((c, i) => (
              <Reveal as="li" key={c.title} index={i} className="flex gap-5 rounded-card border border-rule bg-paper p-6 md:p-7">
                <IconBadge tone="navy">
                  <c.icon size={22} aria-hidden="true" />
                </IconBadge>
                <div>
                  <h3 className="text-d5 font-medium">{c.title}</h3>
                  <p className="mt-1 text-body text-graphite">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5 · Transparent reporting and verifiable impact */}
      <Section tone="navy" id="reporting" labelledBy="reporting-title" className="overflow-hidden">
        <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal>
              <Tag dark>Transparent reporting &amp; verifiable impact</Tag>
              <h2 id="reporting-title" className="mt-5 text-d3 text-white md:text-d2">
                Honest Metrics You Can <em>Trust</em>
              </h2>
              <p className="mt-5 max-w-xl text-lead">
                Every rupee deployed through our partnership programs is tracked with complete transparency. We provide corporate partners
                with comprehensive impact reports, student progress audits, and compliance documentation.
              </p>
              <ButtonRow className="mt-9">
                <Button href={OVERVIEW}>Download Partnership Overview</Button>
              </ButtonRow>
              <p className="on-dark mt-3">
                <Ph>partnership overview PDF to add</Ph>
              </p>
            </Reveal>
            <Reveal index={1} className="rounded-card border border-white/10 bg-white/[0.05] p-7 md:p-8">
              <p className="flex items-center gap-2 text-micro font-semibold tracking-wide text-gold uppercase">
                <FileCheck2 size={15} aria-hidden="true" /> How a contribution flows
              </p>
              <ol className="mt-6 space-y-5">
                {FLOW.map((f, i) => (
                  <li key={f.title} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand font-mono text-small font-medium text-brand-ink">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-white">{f.title}</p>
                      <p className="mt-1 text-small text-white/75">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* FAQ (kept from the previous page) */}
      <FaqBlock id="partner-faq" items={FAQ} />
    </>
  );
}
