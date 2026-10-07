import type { Metadata } from "next";
import {
  Award,
  BadgeCheck,
  Brain,
  Building2,
  Calculator,
  ClipboardList,
  FileBarChart,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Lightbulb,
  MapPin,
  PenLine,
  Puzzle,
  Rocket,
  School,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button, ButtonRow, Container, IconBadge, PageHero, PhotoFrame, Section, SectionHeading, Tag } from "@/components/ui";
import { PHOTOS } from "@/content/photos";

const INTRO = "A national talent discovery assessment designed to find, nurture, and empower India’s brightest young minds.";

export const metadata: Metadata = {
  title: "ZEO Olympiad",
  description: INTRO,
};

const REGISTER_STUDENT = "/contact?role=parent&topic=zeo#form";
const REGISTER_SCHOOL = "/contact?role=school&topic=zeo#form";

const MEASURES: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Calculator, title: "Quantitative Reasoning", body: "Basic math logic and everyday numerical thinking." },
  { icon: HeartHandshake, title: "Emotional Intelligence (EQ)", body: "Self-awareness, understanding others, and handling pressure calmly." },
  { icon: Brain, title: "Critical Thinking", body: "Analyzing situations, spotting patterns, and making sound judgments." },
  { icon: Puzzle, title: "Practical Problem-Solving", body: "Finding creative, working solutions to everyday real-world challenges." },
  { icon: Sparkles, title: "Multiple Intelligences", body: "Evaluating diverse talents including verbal, visual, and spatial strengths." },
  { icon: Rocket, title: "Entrepreneurial Mindset", body: "Basic initiative, resourcefulness, and practical decision-making." },
];

const ELIGIBILITY: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: GraduationCap, title: "Eligible Grades", body: "Open to school students across specified junior and senior categories." },
  { icon: School, title: "Eligible Schools", body: "All recognized state, central, and private schools across India." },
  {
    icon: MapPin,
    title: "Regional Inclusivity",
    body: "Dedicated testing arrangements and localized support for students from Tier 2, Tier 3, rural, and tribal regions.",
  },
];

const STEPS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: PenLine, title: "Register", body: "Sign up online as an individual student, or enroll through your participating school." },
  { icon: ClipboardList, title: "Take the Assessment", body: "Complete the structured, logic-focused examination." },
  { icon: FileBarChart, title: "Detailed Report Card", body: "Receive a clear breakdown of your cognitive strengths and areas for growth." },
  { icon: Award, title: "State & National Recognition", body: "Stand out among peers across your region and the entire country." },
  {
    icon: HandCoins,
    title: "Mentorship & Scholarships",
    body: "Top performers, especially from underserved backgrounds, are matched with scholarship funds and personal guidance.",
  },
];

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: GraduationCap,
    title: "For Students",
    body: "Earn national recognition, clear self-insight, learning devices (like laptops or tablets for toppers), and scholarship opportunities.",
  },
  { icon: Users, title: "For Parents", body: "Receive an honest, detailed evaluation of your child's real cognitive talents without toxic competition." },
  { icon: Building2, title: "For Schools", body: "Benchmark your students against national standards and access specialized teacher support resources." },
  { icon: BadgeCheck, title: "For CSR Sponsors", body: "Directly identify and sponsor proven, high-potential students who need financial support." },
];

/* Motion: base reveal only. */
export default function ZeoPage() {
  return (
    <>
      {/* 1 · Hero */}
      <PageHero
        crumbs={[{ href: "/zeo", label: "ZEO Olympiad" }]}
        tag="National Talent Search · ZEO 2026"
        title={
          <>
            ZEO: Zubuntu eduRealm <em>Olympiad</em>
          </>
        }
        lead={INTRO}
        photo={PHOTOS.classroomWide}
      >
        <ButtonRow>
          <Button href={REGISTER_STUDENT} variant="dark">
            Register as a Student
          </Button>
          <Button href={REGISTER_SCHOOL} variant="light">
            Register Your School
          </Button>
        </ButtonRow>
      </PageHero>

      {/* 2 · What is ZEO? */}
      <Section tone="paper" id="about-zeo" labelledBy="about-zeo-title">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Tag>What is ZEO?</Tag>
            <h2 id="about-zeo-title" className="mt-5 text-d3 md:text-d2">
              Testing Real Intelligence, Not Just <em>Memory</em>
            </h2>
          </Reveal>
          <Reveal index={1} className="space-y-6">
            <p className="rounded-card bg-cream p-7 text-body text-graphite md:p-8">
              Most traditional tests in India only measure how well a student can memorize textbook facts. The Zubuntu eduRealm
              Olympiad (ZEO) is built differently.
            </p>
            <p className="border-l-4 border-brand pl-6 text-lead text-navy md:pl-8">
              ZEO evaluates practical reasoning, emotional balance, and everyday problem-solving skills. It gives every student, whether
              from a premier private school or a remote rural village, a fair and equal chance to demonstrate their natural
              intelligence.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Core assessment areas */}
      <Section tone="tint" id="measures" labelledBy="measures-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Core assessment areas"
              id="measures-title"
              title={
                <>
                  What ZEO <em>Measures</em>
                </>
              }
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEASURES.map((m, i) => (
              <Reveal
                as="li"
                key={m.title}
                index={i}
                className="group flex flex-col rounded-card border border-brand/15 bg-paper p-7 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand/50 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <IconBadge tone="brand">
                    <m.icon size={22} aria-hidden="true" />
                  </IconBadge>
                  <span className="font-mono text-micro text-gray">Pillar {i + 1}</span>
                </div>
                <h3 className="mt-6 text-d5 font-medium">{m.title}</h3>
                <p className="mt-2 text-body text-graphite">{m.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 4 · Who can participate? */}
      <Section tone="paper" id="eligibility" labelledBy="eligibility-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Tag>Who can participate?</Tag>
            <h2 id="eligibility-title" className="mt-5 text-d3 md:text-d2">
              Eligibility and <em>Participation</em>
            </h2>
            <PhotoFrame photo={PHOTOS.rural} decorative className="mt-10 aspect-[4/3]" />
          </Reveal>
          <ul className="space-y-4">
            {ELIGIBILITY.map((e, i) => (
              <Reveal as="li" key={e.title} index={i} className="flex gap-5 rounded-card border border-rule bg-cream p-6 md:p-7">
                <IconBadge tone="navy">
                  <e.icon size={22} aria-hidden="true" />
                </IconBadge>
                <div>
                  <h3 className="text-d5 font-medium">{e.title}</h3>
                  <p className="mt-1 text-body text-graphite">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5 · The Olympiad journey */}
      <Section tone="deep" id="journey" labelledBy="journey-title" className="overflow-hidden">
        <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              dark
              tag="The Olympiad journey"
              id="journey-title"
              title={
                <>
                  The 5 Simple Steps of <em>ZEO</em>
                </>
              }
            />
          </Reveal>
          <ol className="relative mt-14 grid gap-4 lg:grid-cols-5 lg:gap-5">
            {/* Connector line behind the step numbers (desktop) */}
            <span aria-hidden="true" className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-brand/0 via-brand/60 to-brand/0 lg:block" />
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} index={i} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand text-brand-ink shadow-[0_0_0_8px_rgb(5_60_89)]">
                  <s.icon size={22} aria-hidden="true" />
                </span>
                <div className="flex-1 rounded-card border border-white/10 bg-white/[0.04] p-5 lg:mt-6 lg:w-full">
                  <p className="font-mono text-micro text-gold">Step {i + 1}</p>
                  <h3 className="mt-2 text-d5 font-medium text-white">{s.title}</h3>
                  <p className="mt-2 text-small">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 6 · Rewards and benefits */}
      <Section tone="cream" id="benefits" labelledBy="benefits-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Rewards and benefits"
              id="benefits-title"
              title={
                <>
                  Benefits for Everyone <em>Involved</em>
                </>
              }
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal
                as="li"
                key={b.title}
                index={i}
                className="flex gap-5 rounded-card border border-rule bg-paper p-7 transition-colors duration-200 hover:border-brand/50 md:p-8"
              >
                <IconBadge tone={i === 0 ? "gold" : "brand"}>
                  <b.icon size={22} aria-hidden="true" />
                </IconBadge>
                <div>
                  <h3 className="text-d5 font-medium">{b.title}</h3>
                  <p className="mt-2 text-body text-graphite">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 7 · School coordinator call to action */}
      <section aria-labelledby="school-cta-title" className="bg-cream pb-16 md:pb-28">
        <Container>
          <Reveal>
            <div className="on-brand relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-600 px-6 py-16 md:px-16 md:py-20">
              <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/30 px-3 py-1 text-micro font-medium">
                    <Lightbulb size={14} aria-hidden="true" /> For school coordinators
                  </span>
                  <h2 id="school-cta-title" className="mt-5 text-d2">
                    Bring ZEO to Your <em>School</em>
                  </h2>
                  <p className="mt-4 max-w-xl text-lead">
                    Help your students discover their true cognitive strengths. School coordinators can enroll multiple classes at
                    once through a simple sign-up process.
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <Button href={REGISTER_SCHOOL} variant="dark">
                    Register Your School for ZEO
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
