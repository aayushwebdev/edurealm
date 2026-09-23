import type { Metadata } from "next";
import { FileWarning, ListChecks, Presentation, ShieldCheck } from "lucide-react";
import { CtaCard } from "@/components/CtaCard";
import { ChecklistGate } from "@/components/forms/ChecklistGate";
import { FinePrintScrub } from "@/components/informed-choice/FinePrintScrub";
import { Reveal } from "@/components/motion/Reveal";
import { FaqBlock, PageSection, StepFlow } from "@/components/sections";
import { BEFORE_YOU_SIGN, FAQ, QUESTIONS, SEMINAR, TACTICS } from "@/content/pages/informed-choice";
import { Button, ButtonRow, Confirm, Container, IconBadge, PageHero, Ph, ReviewBanner, Section, SectionHeading } from "@/components/ui";
import { PHOTOS } from "@/content/photos";
import { BOOK_HREF } from "@/content/site";

export const metadata: Metadata = {
  title: "Informed Choice",
  description: "The tactics coaching institutes use. Named plainly. We name no institute. We take no commission from any of them.",
};

/* LEGAL REVIEW REQUIRED before publish. See edurealm-legal-sourcing.md. */
/* Motion: GSAP #4 only (fine-print scrub). No parallax. */


export default function InformedChoice() {
  return (
    <>
      <ReviewBanner>Legal review required before publish — see edurealm-legal-sourcing.md</ReviewBanner>
      <PageHero
        crumbs={[
          { href: "/programs", label: "Programs" },
          { href: "/programs/informed-choice", label: "Informed Choice" },
        ]}
        tag="Coaching Tactics Awareness"
        title={
          <>
            The tactics coaching institutes use. Named <em>plainly</em>.
          </>
        }
        lead={
          <>
            Inflated rank claims. Non-refundable fee traps. &ldquo;Dummy school&rdquo; enrolments. We name no institute. We
            take no commission from any of them.
          </>
        }
        photo={PHOTOS.coaching}
      >
        <ButtonRow>
          <Button href="#checklist">Get the free checklist</Button>
          <Button href={BOOK_HREF} variant="outline">
            Book a parent seminar
          </Button>
        </ButtonRow>
      </PageHero>

      <Section tone="paper" labelledBy="cover-title">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <SectionHeading tag="What we cover" id="cover-title" title={<>What we <em>cover</em></>} />
          </Reveal>
          <Reveal index={1}>
            <p className="text-lead text-graphite">
              How results are advertised versus how they&rsquo;re calculated. What a refund clause must say before you sign.
              What &ldquo;dummy school&rdquo; enrolment does to a board record. How to ask for the total-enrolled-to-selected
              ratio, not the headline number.
            </p>
          </Reveal>
        </Container>
      </Section>

      <PageSection id="tactics" tag="The tactics" title={<>The tactics, <em>named</em></>} lead="We name the tactic. Never the institute.">
        <ul className="grid gap-5 lg:grid-cols-3">
          {TACTICS.map((t, i) => (
            <Reveal as="li" key={t.name} index={i} className="flex flex-col rounded-card border border-rule bg-paper p-7">
              <h3 className="text-d5 font-medium">{t.name}</h3>
              <dl className="mt-5 flex-1 space-y-4 text-small">
                <div>
                  <dt className="font-medium text-navy">What it looks like</dt>
                  <dd className="mt-1 text-graphite">{t.looks}</dd>
                </div>
                <div>
                  <dt className="font-medium text-navy">Why it matters</dt>
                  <dd className="mt-1 text-graphite">{t.matters}</dd>
                </div>
              </dl>
              <p className="mt-6 rounded-2xl bg-cream p-4 text-small text-navy">
                <span className="block text-micro font-semibold">Ask</span>
                {t.ask}
              </p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6">
          <Ph>source link per tactic — from legal sourcing</Ph>
        </p>
      </PageSection>

      <Section tone="paper" labelledBy="fineprint-title">
        <Container>
          <Reveal>
            <SectionHeading
              center
              tag="Sample contract"
              id="fineprint-title"
              title={
                <>
                  The fine print, <em>decoded</em>
                </>
              }
              lead="A clause-by-clause walkthrough of a sample contract, in plain language."
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-5xl">
            <FinePrintScrub />
          </div>
        </Container>
      </Section>

      <Container className="grid gap-5 py-16 md:py-24 lg:grid-cols-3">
        <Reveal className="rounded-card border border-rule bg-paper p-8 lg:col-span-2">
          <IconBadge tone="navy">
            <ListChecks size={20} aria-hidden="true" />
          </IconBadge>
          <h2 className="mt-6 text-d4">The twelve questions</h2>
          <ol className="mt-6 space-y-3">
            {QUESTIONS.map((q, i) => (
              <li key={q} className="flex gap-4 rounded-2xl bg-cream p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy font-mono text-micro text-white">{i + 1}</span>
                <span className="self-center text-navy">{q}</span>
              </li>
            ))}
          </ol>
          <Confirm note="questions 4–12 need the legal-sourcing pass" />
        </Reveal>

        <div className="grid gap-5">
          <Reveal index={1} id="checklist" className="scroll-mt-28 rounded-card bg-gold p-8 text-navy">
            <IconBadge tone="navy">
              <FileWarning size={20} aria-hidden="true" />
            </IconBadge>
            <h2 className="mt-6 text-d4">Get the checklist</h2>
            <p className="mt-2 text-small">The 12 Questions Checklist, as a PDF. Email only.</p>
            <div className="mt-6">
              <ChecklistGate />
            </div>
          </Reveal>
          <Reveal index={2} className="rounded-card border border-rule bg-paper p-8">
            <IconBadge tone="mist">
              <ShieldCheck size={20} aria-hidden="true" />
            </IconBadge>
            <h2 className="mt-6 text-d5 font-medium">Our disclosure</h2>
            <p className="mt-3 text-small text-graphite">
              No commission from any institute. No institute named on this page. Every claim links to a regulator notice,
              court order, or published report.
            </p>
            <p className="mt-3">
              <Ph>source links per claim — from legal sourcing</Ph>
            </p>
          </Reveal>
        </div>
      </Container>

      <PageSection id="before-you-sign" tone="brand" tag="Before you sign" title={<>Five checks before you <em>sign</em></>}>
        <StepFlow steps={BEFORE_YOU_SIGN} />
      </PageSection>

      <PageSection id="seminar" tag="Parent seminar" title={<>Book a parent <em>seminar</em></>} confirm="90-minute duration">
        <Reveal className="grid gap-6 rounded-card border border-rule bg-paper p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
          <IconBadge tone="navy">
            <Presentation size={20} aria-hidden="true" />
          </IconBadge>
          <dl className="grid gap-4 sm:grid-cols-4">
            {SEMINAR.map((r) => (
              <div key={r.label}>
                <dt className="text-micro text-gray">{r.label}</dt>
                <dd className="mt-1 font-medium text-navy">{r.value}</dd>
              </div>
            ))}
          </dl>
          <Button href={BOOK_HREF} variant="dark">
            Book a parent seminar
          </Button>
        </Reveal>
      </PageSection>

      <FaqBlock id="ic-faq" items={FAQ} />

      <CtaCard
        title={
          <>
            Before you pay a coaching <em>fee</em>.
          </>
        }
        href="#checklist"
        label="Get the free checklist"
        secondary={{ href: BOOK_HREF, label: "Book a parent seminar" }}
      />
    </>
  );
}
