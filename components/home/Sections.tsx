import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  Brain,
  Briefcase,
  Calculator,
  FileBarChart,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  Laptop,
  Layers,
  Mic,
  Newspaper,
  Puzzle,
  Rocket,
  Sparkles,
  Trophy,
  Tv,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ProgramCard } from "@/components/ProgramCard";
import { AccordionList } from "@/components/ui/AccordionList";
import {
  Button,
  ButtonRow,
  Card,
  Container,
  EmptyState,
  IconBadge,
  PhotoCard,
  PhotoFrame,
  PhotoPair,
  Section,
  SectionHeading,
  StatPill,
  Tag,
  cx,
} from "@/components/ui";
import { CARD_PHOTOS } from "@/content/cardPhotos";
import { PHOTOS } from "@/content/photos";
import { BOOK_SCHOOL_HREF, ETHICS_CHARTER, FUNDING, INSTITUTION_NEEDS, MEDIA, PROGRAMS, TARGETS_YEAR_ONE } from "@/content/site";

/* ---------------------------------------------------------------- */
/* 6 · For students & parents: light-blue band of photo program cards */
/* ---------------------------------------------------------------- */
export function ProgramsBand() {
  return (
    <Section tone="tint" labelledBy="book-title">
      <Container>
        <Reveal>
          <SectionHeading
            tag="For students & parents"
            id="book-title"
            title={
              <>
                Book a <em>session</em>
              </>
            }
            action={
              <Button href="/programs" variant="outline" className="bg-paper/70">
                Browse all programs
              </Button>
            }
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROGRAMS.map((p, i) => (
            <Reveal as="li" key={p.slug} index={i}>
              <ProgramCard program={p} tone="paper" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 4 · ZEO: light bento showcase (matches the /zeo page content)      */
/* ---------------------------------------------------------------- */
const ZEO_AREAS: { icon: LucideIcon; title: string }[] = [
  { icon: Calculator, title: "Quantitative Reasoning" },
  { icon: HeartHandshake, title: "Emotional Intelligence (EQ)" },
  { icon: Brain, title: "Critical Thinking" },
  { icon: Puzzle, title: "Practical Problem-Solving" },
  { icon: Sparkles, title: "Multiple Intelligences" },
  { icon: Rocket, title: "Entrepreneurial Mindset" },
];
const ZEO_JOURNEY = ["Register", "Take the Assessment", "Detailed Report Card", "State & National Recognition", "Mentorship & Scholarships"];

export function ZeoFeature() {
  return (
    <section aria-labelledby="zeo-title" className="relative isolate overflow-hidden bg-paper py-12 md:py-16">
      {/* Soft glows + faded dot grid */}
      <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand/15 blur-3xl" />
      <div aria-hidden="true" className="hero-blob-2 pointer-events-none absolute -right-40 -bottom-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-gold/15 blur-3xl" />
      <div aria-hidden="true" className="page-hero-dots pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <Container>
        {/* Header */}
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-small font-medium text-navy">
            <Trophy size={15} aria-hidden="true" className="text-gold" /> National Talent Search · ZEO 2026
          </span>
          <h2 id="zeo-title" className="mt-4 text-d3 md:text-d2">
            Zubuntu eduRealm <em>Olympiad</em>
          </h2>
          <p className="mt-3 text-lead text-graphite">
            A national talent discovery assessment designed to find, nurture, and empower India&rsquo;s brightest young minds.{" "}
            <Link href="/zeo" className="font-medium whitespace-nowrap text-navy underline underline-offset-4">
              Full details
            </Link>
          </p>
        </Reveal>

        {/* Bento */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          {/* Feature card */}
          <Reveal className="on-brand relative flex flex-col overflow-hidden rounded-[24px] bg-gradient-to-br from-brand to-brand-600 p-7 md:p-8">
            <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0" />
            <div className="relative flex flex-1 flex-col">
              <p className="font-mono text-micro tracking-wide uppercase opacity-80">What is ZEO?</p>
              <h3 className="mt-4 text-d3 leading-tight">
                Testing Real Intelligence, Not Just <em>Memory</em>
              </h3>
              <p className="mt-4 max-w-lg text-body">
                ZEO evaluates practical reasoning, emotional balance, and everyday problem-solving skills, giving every student a fair and
                equal chance to show their natural intelligence.
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Button href="/contact?role=parent&topic=zeo#form" variant="dark">
                  Register as a Student
                </Button>
                <Button href="/contact?role=school&topic=zeo#form" variant="light">
                  Register Your School
                </Button>
              </div>
            </div>
          </Reveal>

          {/* What ZEO measures + rewards */}
          <div className="flex flex-col gap-5">
            <Reveal index={1} className="rounded-[24px] border border-rule bg-paper p-5 shadow-[var(--shadow-float)]">
              <p className="text-micro font-semibold tracking-wide text-blue uppercase">What ZEO measures</p>
              <ul className="mt-4 grid grid-cols-2 gap-2.5">
                {ZEO_AREAS.map((z) => (
                  <li
                    key={z.title}
                    className="group flex items-center gap-3 rounded-2xl bg-cream p-3 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-brand-tint"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-brand-ink transition-transform duration-200 group-hover:scale-110">
                      <z.icon size={16} aria-hidden="true" />
                    </span>
                    <span className="text-small leading-snug font-medium text-navy">{z.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal index={2} className="flex flex-1 items-center gap-5 rounded-[24px] bg-navy p-5 text-white">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold text-navy">
                <Laptop size={26} aria-hidden="true" />
              </span>
              <div>
                <p className="text-d5 font-medium">Rewards and benefits</p>
                <p className="mt-1 text-small text-white/80">
                  Learning devices like laptops or tablets for toppers, national recognition, and scholarship opportunities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Journey strip */}
        <Reveal className="mt-4 rounded-[24px] border border-rule bg-paper p-4 md:p-5">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {ZEO_JOURNEY.map((step, i) => (
              <li key={step} className="flex items-center gap-3 lg:px-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-tint font-mono text-small font-medium text-navy">
                  {i + 1}
                </span>
                <span className="text-small font-medium text-navy">{step}</span>
                {i < ZEO_JOURNEY.length - 1 && <ArrowRight size={16} aria-hidden="true" className="ml-auto hidden shrink-0 text-brand lg:block" />}
              </li>
            ))}
          </ol>
        </Reveal>

      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 5 · Rural initiatives — charcoal band with photos + goals          */
/* ---------------------------------------------------------------- */
export function RuralBand() {
  return (
    <Section tone="charcoal" labelledBy="rural-title">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PhotoPair photos={[PHOTOS.rural, PHOTOS.ruralAerial]} />
        </Reveal>
        <div>
          <Reveal>
            <Tag dark>What we&rsquo;re building toward</Tag>
            <h2 id="rural-title" className="mt-5 text-d3 md:text-d2">
              This work doesn&rsquo;t fund <em>itself</em>.
            </h2>
            <p className="mt-5 text-lead text-white/80">
              Career guidance, digital literacy, and study material in Tier 2, Tier 3, rural and tribal districts,
              delivered with NGO and district partners.
            </p>
            <p className="mt-4">Every scholarship goes to a named, verified student. Every sponsor sees exactly where the money went.</p>
          </Reveal>
          <Reveal index={1}>
            <div className="mt-7 grid gap-6 sm:grid-cols-3">
              <StatPill value={1000} label="fully funded rural scholarships, by 2030" dark />
              <StatPill value={TARGETS_YEAR_ONE.districts} label="districts covered, year one" dark />
              <StatPill value={TARGETS_YEAR_ONE.scholarships} label="scholarships awarded, year one" dark />
            </div>
          </Reveal>
          <Reveal index={2}>
            <ButtonRow className="mt-7">
              <Button href="/partner">Sponsor a student</Button>
              <Button href="/impact" variant="outlineLight">
                See our approach
              </Button>
            </ButtonRow>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 7 · For institutions — Nuova "Why choose us" icon cards            */
/* ---------------------------------------------------------------- */
const NEED_PHOTOS = [CARD_PHOTOS.chennaiClassroom, CARD_PHOTOS.ruralLesson, CARD_PHOTOS.twoStudying, CARD_PHOTOS.workTogether];
const NEED_ICONS: LucideIcon[] = [BookOpen, GraduationCap, Layers, Briefcase];

export function InstitutionCards({ items = INSTITUTION_NEEDS, headingLevel = 3 }: { items?: { q: string; a: string }[]; headingLevel?: 2 | 3 }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((n, i) => {
        const hl = i === 1;
        return (
          <Reveal as="li" key={n.q} index={i % 2} stagger={100}>
            <PhotoCard
              photo={NEED_PHOTOS[i]}
              icon={NEED_ICONS[i]}
              title={n.q}
              body={<p className="text-small">{n.a}</p>}
              featured={hl}
              headingLevel={headingLevel}
              footer={
                <Link
                  href="/institutions"
                  className={cx(
                    "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full text-small font-medium transition-colors duration-150",
                    hl ? "bg-navy text-white hover:bg-navy-800" : "bg-cream text-navy hover:bg-cream-200",
                  )}
                >
                  For schools &amp; colleges <ArrowRight size={15} aria-hidden="true" />
                </Link>
              }
            />
          </Reveal>
        );
      })}
    </ul>
  );
}

export function InstitutionsWhy() {
  return (
    <Section tone="cream" labelledBy="inst-title">
      <Container>
        <Reveal>
          <SectionHeading
            center
            tag="For institutions"
            id="inst-title"
            title={
              <>
                For principals and <em>trustees</em>
              </>
            }
          />
        </Reveal>
        <div className="mt-14">
          <InstitutionCards />
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 8 · CSR & government — Finovate "Strategic Interventions" band     */
/* ---------------------------------------------------------------- */
const CSR = [
  { icon: HandCoins, text: "Route CSR funds to verified rural scholarships." },
  { icon: Trophy, text: "Co-brand a regional Olympiad." },
  { icon: FileBarChart, text: "Get reporting on where every rupee went." },
  { icon: BookOpenCheck, text: "Run district-level literacy drives with us." },
];

export function CsrBand() {
  return (
    <Section tone="navy" labelledBy="csr-title">
      <Container>
        <Reveal>
          <SectionHeading
            dark
            tag="For CSR & government partners"
            id="csr-title"
            title={
              <>
                For companies and public <em>bodies</em>
              </>
            }
            action={<Button href="/partner">Partner with us</Button>}
          />
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CSR.map((c, i) => (
            <Reveal as="li" key={c.text} index={i}>
              <Card variant="glass" className="h-full">
                <IconBadge tone="light">
                  <c.icon size={20} aria-hidden="true" />
                </IconBadge>
                <p className="mt-8 text-d5 font-medium text-white">{c.text}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 9 · How we're funded — statement + three-step flow                */
/* ---------------------------------------------------------------- */
export function FundingFlow({ id = "funding", withCta = true }: { id?: string; withCta?: boolean }) {
  return (
    <Section tone="cream" id={id} labelledBy={`${id}-title`}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <Tag>How we&rsquo;re funded</Tag>
          <h2 id={`${id}-title`} className="mt-5 text-d3 md:text-d2">
            Not a charity. Not a <em>coaching centre</em>.
          </h2>
          {withCta && (
            <ButtonRow>
              <Button href="/about#ethics" variant="outline">
                Our ethics charter
              </Button>
            </ButtonRow>
          )}
        </Reveal>
        {/* The three sentences, verbatim, as a flow. No stagger — let them land plainly. */}
        <Reveal>
          <ol className="grid gap-3">
            {FUNDING.body.map((line, i) => (
              <li
                key={line}
                className={cx(
                  "flex gap-5 rounded-card p-6 md:p-7",
                  i === 2 ? "bg-navy text-white" : "border border-rule bg-paper text-navy",
                )}
              >
                <span
                  className={cx(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full font-mono text-small",
                    i === 2 ? "bg-gold text-navy" : "bg-cream text-navy",
                  )}
                >
                  {i + 1}
                </span>
                <p className="self-center text-d5 font-medium">{line}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 11 · Ethics charter — calm paper document. Opacity-only reveals.   */
/* ---------------------------------------------------------------- */
export function EthicsCharter({ id = "ethics", expanded }: { id?: string; expanded?: React.ReactNode[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 bg-paper py-12 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal travel={0}>
          <Tag>Ethics charter</Tag>
          <h2 id={`${id}-title`} className="mt-5 text-d3 md:text-d2">
            Ethics <em>charter</em>
          </h2>
        </Reveal>
        <ol className="rounded-card border border-rule bg-cream/60 px-6 md:px-10">
          {ETHICS_CHARTER.map((v, i) => (
            <Reveal as="li" key={v} index={i} stagger={100} travel={0} className="flex gap-5 border-b border-rule py-6 last:border-b-0">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-gold font-mono text-small text-navy">
                {i + 1}
              </span>
              <div className="self-center">
                <p className="text-d5 font-medium text-navy">{v}</p>
                {expanded?.[i] && <div className="mt-2 text-small text-graphite">{expanded[i]}</div>}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* 10 · Media — empty states                                          */
/* ---------------------------------------------------------------- */
const MEDIA_ICONS: LucideIcon[] = [Tv, Mic, Newspaper];

export function MediaGrid() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {MEDIA.map((m, i) => {
        const Icon = MEDIA_ICONS[i];
        return (
          <Reveal as="li" key={m.name} index={i}>
            <div className="flex h-full flex-col rounded-card border border-rule bg-paper p-6 md:p-8">
              <IconBadge tone="navy">
                <Icon size={20} aria-hidden="true" />
              </IconBadge>
              <div className="mt-6 flex-1">
                <EmptyState title={m.name}>{m.line}</EmptyState>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}

export function MediaSection() {
  return (
    <Section tone="cream" labelledBy="media-title">
      <Container>
        <Reveal>
          <SectionHeading
            tag="Media"
            id="media-title"
            title={
              <>
                eduRealm TV, the Podcast, and our <em>Journal</em>
              </>
            }
            lead="Launching soon. Video explainers on education policy. Conversations with child psychologists and ethical educators. Insight for school leaders."
            action={
              <Button href="/media" variant="outline">
                All media
              </Button>
            }
          />
        </Reveal>
        {/* Empty state — nothing published yet. */}
        <div className="mt-10">
          <MediaGrid />
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 12 · FAQ — photo + accordion (Nuova)                               */
/* ---------------------------------------------------------------- */
const FAQ = [
  {
    id: "coaching",
    q: "Are you a coaching institute?",
    a: "No. We don't teach exam content for a fee. We design curricula, train teachers, run awareness programs, and route scholarships. We take no commission from any coaching provider.",
  },
  {
    id: "cost",
    q: "What does a session cost?",
    a: (
      <>
        Depends on the program and format. See the{" "}
        <Link href="/programs" className="font-medium text-navy underline underline-offset-4">
          program page
        </Link>{" "}
        or{" "}
        <Link href={BOOK_SCHOOL_HREF} className="font-medium text-navy underline underline-offset-4">
          ask us for a school quote
        </Link>
        .
      </>
    ),
  },
  {
    id: "who",
    q: "Who runs the mental health sessions?",
    a: (
      <>
        Our facilitators&rsquo; names and credentials are shared with your school before any session is booked.
      </>
    ),
  },
  { id: "where", q: "Which states do you work in?", a: "We are growing district by district. Tell us your city or district when you get in touch, and we will confirm whether we can work with you there." },
  {
    id: "structure",
    q: "How is a school session structured?",
    a: (
      <>
        See the full breakdown on each{" "}
        <Link href="/programs" className="font-medium text-navy underline underline-offset-4">
          program page
        </Link>
        .
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <Section tone="paper" labelledBy="faq-title">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <Reveal>
          <Tag>FAQ</Tag>
          <h2 id="faq-title" className="mt-5 text-d3 md:text-d2">
            Frequently asked <em>questions</em>
          </h2>
          <PhotoFrame photo={PHOTOS.studyPair} decorative sizes="(min-width: 1024px) 40vw, 100vw" className="mt-10 hidden aspect-[4/3] lg:block" />
        </Reveal>
        <Reveal index={1}>
          <AccordionList items={FAQ} defaultOpen="coaching" />
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 13 · Closing CTA — Nuova "Start your journey" card                 */
/* ---------------------------------------------------------------- */
export function ClosingCta() {
  return (
    <section aria-labelledby="closing-title" className="bg-paper pb-12 md:pb-20">
      <Container>
        <Reveal>
          <div className="on-brand relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-600 px-6 py-16 text-center md:px-16 md:py-24">
            <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0" />
            <h2 id="closing-title" className="relative text-d2 md:text-d1">
              Ready to <em>start</em>?
            </h2>
            <div className="relative mt-10 flex flex-wrap justify-center gap-3">
              <Button href={BOOK_SCHOOL_HREF} variant="dark">
                Book a school session
              </Button>
              <Button href="/partner" variant="light">
                Partner with us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
