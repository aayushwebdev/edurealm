import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  FileBarChart,
  GraduationCap,
  HandCoins,
  Layers,
  Mic,
  Newspaper,
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
  Ph,
  PhotoFrame,
  PhotoPair,
  Section,
  SectionHeading,
  StatPill,
  Tag,
  cx,
} from "@/components/ui";
import { PHOTOS } from "@/content/photos";
import { BOOK_HREF, BOOK_SCHOOL_HREF, ETHICS_CHARTER, FUNDING, INSTITUTION_NEEDS, MEDIA, PROGRAMS, TARGETS_YEAR_ONE } from "@/content/site";

/* ---------------------------------------------------------------- */
/* 6 · For students & parents — navy band of photo program cards     */
/* ---------------------------------------------------------------- */
export function ProgramsBand() {
  return (
    <Section tone="navy" labelledBy="book-title">
      <Container>
        <Reveal>
          <SectionHeading
            dark
            tag="For students & parents"
            id="book-title"
            title={
              <>
                Book a <em>session</em>
              </>
            }
            action={
              <Button href="/programs" variant="outlineLight">
                Browse all programs
              </Button>
            }
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal as="li" key={p.slug} index={i}>
              <ProgramCard program={p} tone="dark" />
            </Reveal>
          ))}
          {/* The one highlighted card in this group (agency / Finovate pattern) */}
          <Reveal as="li" index={4}>
            <div className="flex h-full min-h-[18rem] flex-col justify-between rounded-card bg-gold p-8 text-navy">
              <div>
                <p className="font-mono text-micro tracking-wider uppercase">For students &amp; parents</p>
                <h3 className="mt-4 text-d3">
                  Book a <em>session</em>
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button href={BOOK_HREF} variant="dark">
                  Book a session
                </Button>
                <Link href="/programs" className="inline-flex items-center gap-1.5 text-small font-medium underline-offset-4 hover:underline">
                  Browse all programs <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/* 4 · ZEO — rounded photo banner with overlay card (Nuova feature)   */
/* ---------------------------------------------------------------- */
export function ZeoFeature() {
  const chips = ["Reasoning", "Emotional intelligence", "Rural toppers: scholarship"];
  return (
    <section aria-labelledby="zeo-title" className="bg-cream py-16 md:py-24">
      <Container>
        <Reveal>
          <PhotoFrame photo={PHOTOS.classroomWide} decorative sizes="100vw" imgClassName="object-[center_75%]" className="min-h-[34rem] md:min-h-[38rem]" overlay>
            <div className="absolute inset-x-4 bottom-4 md:inset-x-auto md:bottom-8 md:left-8 md:max-w-xl">
              <div className="on-dark rounded-card bg-navy/95 p-7 text-white/80 backdrop-blur md:p-9">
                <Tag dark>National Talent Search</Tag>
                <h2 id="zeo-title" className="mt-5 text-d3">
                  An exam that tests <em>judgement</em>. Not memory.
                </h2>
                <p className="mt-4">
                  The Zubuntu eduRealm Olympiad measures reasoning and emotional intelligence, not recall. Every rural topper
                  gets a scholarship — fully CSR-funded, from year one.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <li key={c} className="rounded-full border border-white/20 px-3 py-1 text-micro text-white">
                      {c}
                    </li>
                  ))}
                </ul>
                <ButtonRow className="mt-7">
                  <Button href="/zeo">Full details &amp; registration</Button>
                </ButtonRow>
              </div>
            </div>
          </PhotoFrame>
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
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
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
              Career guidance, digital literacy, and study material in Tier 2, Tier 3, rural and tribal districts —
              delivered with NGO and district partners.
            </p>
            <p className="mt-4">Every scholarship goes to a named, verified student. Every sponsor sees exactly where the money went.</p>
          </Reveal>
          <Reveal index={1}>
            <div className="mt-10 grid gap-8">
              <StatPill value={1000} label="fully funded rural scholarships, by 2030" dark />
              <div className="grid gap-8 sm:grid-cols-2">
                <StatPill value={TARGETS_YEAR_ONE.districts} label="districts covered, year one" dark />
                <StatPill value={TARGETS_YEAR_ONE.scholarships} label="scholarships awarded, year one" dark />
              </div>
            </div>
          </Reveal>
          <Reveal index={2}>
            <ButtonRow className="mt-10">
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
const NEED_ICONS: LucideIcon[] = [BookOpen, GraduationCap, Layers, Briefcase];

export function InstitutionCards({ items = INSTITUTION_NEEDS, headingLevel = 3 }: { items?: { q: string; a: string }[]; headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as const;
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((n, i) => {
        const Icon = NEED_ICONS[i];
        const hl = i === 1;
        return (
          <Reveal as="li" key={n.q} index={i % 2} stagger={100}>
            <Card variant={hl ? "outlineHighlight" : "paper"} className="flex h-full flex-col">
              <IconBadge tone={hl ? "gold" : "navy"}>
                <Icon size={20} aria-hidden="true" />
              </IconBadge>
              <H className="mt-6 text-d5 font-medium">{n.q}</H>
              <p className="mt-3 flex-1 text-small text-graphite">{n.a}</p>
              <Link
                href="/institutions"
                className={cx(
                  "mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-small font-medium transition-colors duration-150",
                  hl ? "bg-navy text-white hover:bg-navy-800" : "bg-cream text-navy hover:bg-cream-200",
                )}
              >
                For schools &amp; colleges <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Card>
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
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 bg-paper py-16 md:py-28">
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
        <div className="mt-12">
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
        . <Ph>session pricing</Ph>
      </>
    ),
  },
  {
    id: "who",
    q: "Who runs the mental health sessions?",
    a: (
      <>
        Named on the{" "}
        <Link href="/programs/mind-before-marks" className="font-medium text-navy underline underline-offset-4">
          Mind Before Marks
        </Link>{" "}
        page, with their credentials. <Ph>names to be confirmed</Ph>
      </>
    ),
  },
  { id: "where", q: "Which states do you work in?", a: <Ph>current service geography</Ph> },
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
    <section aria-labelledby="closing-title" className="bg-paper pb-16 md:pb-28">
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
