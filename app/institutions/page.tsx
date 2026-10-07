import type { Metadata } from "next";
import {
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  Layers,
  MessagesSquare,
  Mic,
  Presentation,
  Puzzle,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button, ButtonRow, Container, IconBadge, PageHero, PhotoFrame, Section, SectionHeading, Tag, cx } from "@/components/ui";
import { PHOTOS } from "@/content/photos";
import { HELPLINES } from "@/content/site";

const INTRO =
  "Supporting schools, colleges, and online institutions with updated academic designs, teacher training, and on-campus student protection programs.";

export const metadata: Metadata = {
  title: "Institutional Solutions",
  description: INTRO,
};

const CONSULT = "/contact?role=school&topic=consultation#form";
const CAMPUS_DRIVE = "/contact?role=school&topic=campus-drive#form";
const INDUSTRY = "/contact?role=school&topic=industry#form";

const DRIVES: { label: string; title: string; icon: LucideIcon; format: string; impact: string; dark?: boolean }[] = [
  {
    label: "Drive 1",
    title: "On-Campus Suicide Prevention & Parent Sensitivity Drives",
    icon: HeartHandshake,
    format: "In-person school assemblies and parent-teacher seminars.",
    impact:
      "Helps your school community recognize mental health warning signs early, builds constructive communication between teachers and parents, and creates a safe campus environment.",
    dark: true,
  },
  {
    label: "Drive 2",
    title: "Ethical Education & Anti-Coaching Awareness Orientations",
    icon: ShieldAlert,
    format: "Orientation sessions for parents of classes 8 to 12.",
    impact:
      "Protects your school's students from abandoning regular schooling for misleading coaching setups, while helping parents plan realistic academic roadmaps.",
  },
];

const DELIVER: { icon: LucideIcon; text: string }[] = [
  { icon: Layers, text: "Custom syllabus architectures and step-by-step lesson plans." },
  { icon: BookOpen, text: "High-quality study books, practice worksheets, and digital classroom modules." },
  { icon: Puzzle, text: "Activity-based learning models that move away from pure memorization." },
];

const TRAINING: { icon: LucideIcon; text: string }[] = [
  { icon: Presentation, text: "Modern interactive teaching techniques and classroom management." },
  { icon: Stethoscope, text: "Identifying emotional distress, academic burnout, and learning difficulties in students." },
  { icon: MessagesSquare, text: "Constructive parent communication and student counseling skills." },
];

const INDUSTRY_FEATURES: { icon: LucideIcon; text: string }[] = [
  { icon: Mic, text: "Corporate guest lecture series and career day events." },
  { icon: Briefcase, text: "Student internship and practical project tie-ups." },
  { icon: Building2, text: "CSR sponsorship opportunities for campus infrastructure upgrades." },
];

/* Motion: base reveal only. */
export default function Institutions() {
  return (
    <>
      {/* 1 · Hero */}
      <PageHero
        crumbs={[{ href: "/institutions", label: "Institutional Solutions" }]}
        tag="Institutional Solutions"
        title={
          <>
            Modern Curricula, Empowered Teachers &amp; Safer <em>Campuses</em>
          </>
        }
        lead={INTRO}
      >
        <ButtonRow>
          <Button href={CONSULT} variant="dark">
            Book An Institutional Consultation
          </Button>
        </ButtonRow>
      </PageHero>

      {/* 2 · On-campus safety drives */}
      <Section tone="paper" id="safety-drives" labelledBy="safety-drives-title">
        <Container>
          <Reveal>
            <SectionHeading
              center
              tag="On-campus safety drives for schools"
              id="safety-drives-title"
              title={
                <>
                  Protecting Your Students &amp; Supporting Your <em>Parents</em>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {DRIVES.map((d, i) => (
              <Reveal
                key={d.title}
                index={i}
                className={cx(
                  "relative flex flex-col overflow-hidden rounded-card p-8 md:p-10",
                  d.dark ? "on-dark bg-navy text-white/80" : "border border-brand/25 bg-brand-tint",
                )}
              >
                {d.dark && <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0 opacity-40" />}
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <IconBadge tone={d.dark ? "light" : "brand"}>
                      <d.icon size={22} aria-hidden="true" />
                    </IconBadge>
                    <span
                      className={cx(
                        "rounded-full px-3 py-1 font-mono text-micro tracking-wide uppercase",
                        d.dark ? "bg-white/10 text-white" : "bg-paper text-navy",
                      )}
                    >
                      {d.label}
                    </span>
                  </div>
                  <h3 className={cx("mt-6 text-d4 font-medium", d.dark ? "text-white" : "text-navy")}>{d.title}</h3>
                  <dl className="mt-6 space-y-4">
                    {[
                      { k: "Format", v: d.format, icon: CalendarCheck },
                      { k: "Impact", v: d.impact, icon: ShieldCheck },
                    ].map((row) => (
                      <div key={row.k} className={cx("rounded-2xl p-5", d.dark ? "bg-white/[0.06]" : "bg-paper")}>
                        <dt className={cx("flex items-center gap-2 text-micro font-semibold tracking-wide uppercase", d.dark ? "text-gold" : "text-blue")}>
                          <row.icon size={15} aria-hidden="true" />
                          {row.k}
                        </dt>
                        <dd className={cx("mt-2 text-body", d.dark ? "text-white/85" : "text-graphite")}>{row.v}</dd>
                      </div>
                    ))}
                  </dl>
                  {d.dark && (
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
          <Reveal className="mt-10 flex justify-center">
            <Button href={CAMPUS_DRIVE} variant="dark">
              Schedule a Campus Drive
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Academic curriculum design */}
      <Section tone="tint" id="curriculum" labelledBy="curriculum-title">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Tag>Academic curriculum design</Tag>
            <h2 id="curriculum-title" className="mt-5 text-d3 md:text-d2">
              Modern, Board-Aligned Academic <em>Systems</em>
            </h2>
            <p className="mt-5 max-w-xl text-lead text-graphite">
              We help schools design engaging, practical curricula that satisfy national educational standards while encouraging active
              student thinking.
            </p>
            <PhotoFrame photo={PHOTOS.classroomKids} decorative className="mt-10 aspect-[16/10]" />
          </Reveal>
          <Reveal index={1} className="rounded-card bg-paper p-7 shadow-[var(--shadow-float)] md:p-10">
            <p className="text-micro font-semibold tracking-wide text-blue uppercase">What we deliver</p>
            <ul className="mt-6 space-y-5">
              {DELIVER.map((d) => (
                <li key={d.text} className="flex gap-4">
                  <IconBadge tone="brand">
                    <d.icon size={20} aria-hidden="true" />
                  </IconBadge>
                  <p className="pt-2.5 text-body text-navy">{d.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* 4 · Teacher and facilitator training */}
      <Section tone="cream" id="training" labelledBy="training-title">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Tag>Teacher &amp; facilitator training</Tag>
              <h2 id="training-title" className="mt-5 text-d3 md:text-d2">
                Professional Growth for <em>Educators</em>
              </h2>
            </Reveal>
            <Reveal index={1}>
              <p className="text-lead text-graphite">
                A great school is built on inspired, supported teachers. Our training programs equip your faculty with modern classroom
                tools.
              </p>
            </Reveal>
          </div>
          <p className="mt-12 text-micro font-semibold tracking-wide text-blue uppercase">Training modules</p>
          <ol className="mt-4 grid gap-5 md:grid-cols-3">
            {TRAINING.map((t, i) => (
              <Reveal
                as="li"
                key={t.text}
                index={i}
                className="flex flex-col rounded-card border border-rule bg-paper p-7 transition-[border-color,transform] duration-200 hover:-translate-y-1 hover:border-brand/50 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <IconBadge tone="brand">
                    <t.icon size={22} aria-hidden="true" />
                  </IconBadge>
                  <span className="font-mono text-micro text-gray">Module {i + 1}</span>
                </div>
                <p className="mt-6 text-d5 leading-snug font-medium text-navy">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5 · Industry-academia networking */}
      <Section tone="navy" id="industry" labelledBy="industry-title" className="overflow-hidden">
        <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Tag dark>Industry-academia networking</Tag>
            <h2 id="industry-title" className="mt-5 text-d3 text-white md:text-d2">
              Connecting Your Campus to <em>Industry</em>
            </h2>
            <p className="mt-5 max-w-xl text-lead">
              Give your students a head start by connecting your classrooms directly with active industry players.
            </p>
            <ButtonRow className="mt-9">
              <Button href={INDUSTRY}>Partner Your Institution With Us</Button>
            </ButtonRow>
          </Reveal>
          <ul className="space-y-3">
            {INDUSTRY_FEATURES.map((f, i) => (
              <Reveal
                as="li"
                key={f.text}
                index={i}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-colors duration-200 hover:bg-white/[0.09] md:p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-brand-ink">
                  <f.icon size={22} aria-hidden="true" />
                </span>
                <p className="text-body font-medium text-white">{f.text}</p>
                <CheckCircle2 size={18} aria-hidden="true" className="ml-auto hidden shrink-0 text-brand sm:block" />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
