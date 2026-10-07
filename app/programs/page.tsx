import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Calculator,
  CheckCircle2,
  Compass,
  Globe,
  HeartHandshake,
  Languages,
  Map,
  Rocket,
  ScanSearch,
  ShieldAlert,
  Smartphone,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button, ButtonRow, Container, IconBadge, PageHero, PhotoFrame, Section, SectionHeading, Tag, cx } from "@/components/ui";
import { PHOTOS } from "@/content/photos";
import { BOOK_HREF, HELPLINES } from "@/content/site";

const INTRO = "Helping students and parents make smart academic choices without fear, confusion, or destructive pressure.";

export const metadata: Metadata = {
  title: "Student Solutions",
  description: INTRO,
};

const MODULES: {
  label: string;
  title: string;
  icon: LucideIcon;
  cover: string[];
  action: { label: string; href: string };
  more: { label: string; href: string };
  dark?: boolean;
}[] = [
  {
    label: "Module A",
    title: "Parent Awareness & Student Suicide Prevention",
    icon: HeartHandshake,
    cover: [
      "Spotting early signs of severe stress, exam depression, and burnout",
      "Learning how to create a supportive home without grade pressure",
      "Direct access to caring counseling sessions",
    ],
    action: { label: "Book a Counseling Session", href: "/contact?role=parent&topic=counseling#form" },
    more: { label: "About Mind Before Marks", href: "/programs/mind-before-marks" },
    dark: true,
  },
  {
    label: "Module B",
    title: "Exposing Commercial Coaching Tactics",
    icon: ShieldAlert,
    cover: [
      "Revealing bought topper claims, hidden fees, and “dummy school” risks",
      "Learning how to tell marketing hype apart from real education",
      "Choosing healthy career options based on real strengths",
    ],
    action: { label: "Attend an Awareness Session", href: "/contact?role=parent&topic=awareness#form" },
    more: { label: "About Informed Choice", href: "/programs/informed-choice" },
  },
];

const RECEIVE: { icon: LucideIcon; text: string }[] = [
  { icon: ScanSearch, text: "In-depth cognitive and interest mapping." },
  { icon: Users, text: "One-on-one sessions with experienced counselors." },
  { icon: Map, text: "Step-by-step career path roadmaps for classes 8 through 12 and college learners." },
  { icon: Compass, text: "Exploration of emerging modern careers in technology, design, business, and social sectors." },
];

const WORKSHOPS: { icon: LucideIcon; title: string; body: string; href: string }[] = [
  { icon: Calculator, title: "Quantitative Reasoning", body: "Practical math logic, analytical thinking, and everyday number skills.", href: "/programs/cognitive-skills" },
  {
    icon: HeartHandshake,
    title: "Emotional Intelligence (EQ)",
    body: "Self-awareness, managing exam stress, building resilience, and communicating clearly.",
    href: "/programs/cognitive-skills",
  },
  {
    icon: Brain,
    title: "Multiple Intelligences & Problem-Solving",
    body: "Understanding your unique learning style (visual, verbal, logical) and solving real-world challenges.",
    href: "/programs/cognitive-skills",
  },
  {
    icon: Rocket,
    title: "Youth Entrepreneurship & Summer Camps",
    body: "Fun, hands-on bootcamps where young minds turn ideas into working projects.",
    href: "/programs/founders-bootcamp",
  },
];

const RURAL_POINTS: { icon: LucideIcon; label: string }[] = [
  { icon: Languages, label: "Localized language support" },
  { icon: Smartphone, label: "Low-data mobile resources" },
  { icon: Trophy, label: "Full scholarships through ZEO" },
];

/* Motion: base reveal only. */
export default function StudentSolutions() {
  return (
    <>
      {/* 1 · Hero */}
      <PageHero
        crumbs={[{ href: "/programs", label: "Student Solutions" }]}
        tag="Student Solutions"
        title={
          <>
            Honest Career Direction, Real Life Skills &amp; Mental <em>Peace</em>
          </>
        }
        lead={INTRO}
      >
        <ButtonRow>
          <Button href={BOOK_HREF} variant="dark">
            Book A Session
          </Button>
        </ButtonRow>
      </PageHero>

      {/* 2 · Protection shield */}
      <Section tone="paper" id="protection" labelledBy="protection-title">
        <Container>
          <Reveal>
            <SectionHeading
              center
              tag="The Student & Parent Protection Shield"
              id="protection-title"
              title={
                <>
                  Well-Being and Protection for <em>Families</em>
                </>
              }
              lead="Two critical initiatives dedicated to keeping students safe and families informed."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {MODULES.map((m, i) => (
              <Reveal
                key={m.title}
                index={i}
                className={cx(
                  "relative flex flex-col overflow-hidden rounded-card p-8 md:p-10",
                  m.dark ? "on-dark bg-navy text-white/80" : "border border-brand/25 bg-brand-tint",
                )}
              >
                {m.dark && <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0 opacity-40" />}
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <IconBadge tone={m.dark ? "light" : "brand"}>
                      <m.icon size={22} aria-hidden="true" />
                    </IconBadge>
                    <span
                      className={cx(
                        "rounded-full px-3 py-1 font-mono text-micro tracking-wide uppercase",
                        m.dark ? "bg-white/10 text-white" : "bg-paper text-navy",
                      )}
                    >
                      {m.label}
                    </span>
                  </div>
                  <h3 className={cx("mt-6 text-d4 font-medium", m.dark ? "text-white" : "text-navy")}>{m.title}</h3>
                  <p className={cx("mt-6 text-micro font-semibold tracking-wide uppercase", m.dark ? "text-gold" : "text-blue")}>
                    What we cover
                  </p>
                  <ul className="mt-3 space-y-3">
                    {m.cover.map((c) => (
                      <li key={c} className={cx("flex gap-3 text-body", m.dark ? "text-white/85" : "text-graphite")}>
                        <CheckCircle2 size={20} aria-hidden="true" className={cx("mt-0.5 shrink-0", m.dark ? "text-brand" : "text-brand-600")} />
                        {c}.
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                    <Button href={m.action.href} variant={m.dark ? "primary" : "dark"}>
                      {m.action.label}
                    </Button>
                    <Link
                      href={m.more.href}
                      className={cx("inline-flex items-center gap-1.5 text-small font-medium underline-offset-4 hover:underline", m.dark ? "text-white" : "text-navy")}
                    >
                      {m.more.label} <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                  {m.dark && (
                    <p className="mt-6 border-t border-white/15 pt-4 text-small text-white/75">
                      Need help now? Call free:{" "}
                      {HELPLINES.map((h, hi) => (
                        <span key={h.name}>
                          {hi > 0 && " · "}
                          <a href={`tel:${h.tel}`} className="font-medium text-white underline-offset-4 hover:underline">
                            {h.name} <span className="font-mono">{h.number}</span>
                          </a>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3 · Career guidance */}
      <Section tone="tint" id="career" labelledBy="career-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Tag>Career Guidance &amp; AI Mentorship</Tag>
            <h2 id="career-title" className="mt-5 text-d3 md:text-d2">
              Finding Your True <em>Direction</em>
            </h2>
            <p className="mt-5 max-w-xl text-lead text-graphite">
              Instead of relying on guesswork or generic advice, our modern guidance system evaluates your natural abilities, interests,
              and personality.
            </p>
            <PhotoFrame photo={PHOTOS.chalkboard} decorative className="mt-10 aspect-[16/10]" />
          </Reveal>
          <Reveal index={1} className="rounded-card bg-paper p-7 shadow-[var(--shadow-float)] md:p-10">
            <p className="text-micro font-semibold tracking-wide text-blue uppercase">What you receive</p>
            <ul className="mt-6 space-y-5">
              {RECEIVE.map((r) => (
                <li key={r.text} className="flex gap-4">
                  <IconBadge tone="brand">
                    <r.icon size={20} aria-hidden="true" />
                  </IconBadge>
                  <p className="pt-2.5 text-body text-navy">{r.text}</p>
                </li>
              ))}
            </ul>
            <ButtonRow>
              <Button href="/contact?role=parent&topic=career#form" variant="dark">
                Book A Session
              </Button>
            </ButtonRow>
          </Reveal>
        </Container>
      </Section>

      {/* 4 · Skill-building workshops */}
      <Section tone="cream" id="workshops" labelledBy="workshops-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Practical skill-building workshops"
              id="workshops-title"
              title={
                <>
                  Skills That Matter for <em>Life</em>
                </>
              }
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORKSHOPS.map((w, i) => (
              <Reveal as="li" key={w.title} index={i}>
                <Link
                  href={w.href}
                  className="group flex h-full flex-col rounded-card border border-rule bg-paper p-7 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand/50"
                >
                  <div className="flex items-center justify-between">
                    <IconBadge tone="brand">
                      <w.icon size={22} aria-hidden="true" />
                    </IconBadge>
                    <span className="font-mono text-micro text-gray">Workshop {i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-d5 font-medium text-navy">{w.title}</h3>
                  <p className="mt-2 flex-1 text-small text-graphite">{w.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-small font-medium text-navy">
                    Learn more <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5 · Tier 2, Tier 3 & rural students */}
      <Section tone="navy" id="rural" labelledBy="rural-title" className="overflow-hidden">
        <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Tag dark>Support for Tier 2, Tier 3 &amp; rural students</Tag>
            <h2 id="rural-title" className="mt-5 text-d3 text-white md:text-d2">
              Equal Opportunities for Every Town and <em>Village</em>
            </h2>
            <p className="mt-5 max-w-xl text-lead">
              You do not need to move to a metro city to find quality educational direction. We provide localized language support,
              low-data mobile resources, and direct links to full scholarships through our ZEO Olympiad programs.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {RURAL_POINTS.map((p) => (
                <li key={p.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-small text-white">
                  <p.icon size={16} aria-hidden="true" className="text-brand" />
                  {p.label}
                </li>
              ))}
            </ul>
            <ButtonRow className="mt-9">
              <Button href="/zeo">Explore ZEO Scholarships</Button>
            </ButtonRow>
          </Reveal>
          <Reveal index={1} className="relative">
            <PhotoFrame photo={PHOTOS.rural} decorative className="aspect-[4/3]" />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-paper px-5 py-4 text-navy shadow-[var(--shadow-float)] md:left-8">
              <Globe size={20} aria-hidden="true" className="text-brand-600" />
              <span className="text-small font-medium">Every town and village</span>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
