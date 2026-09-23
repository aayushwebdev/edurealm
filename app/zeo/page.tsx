import type { Metadata } from "next";
import { Detail, DetailStack } from "@/components/Detail";
import { Reveal } from "@/components/motion/Reveal";
import { RoteVsReasoning } from "@/components/zeo/RoteVsReasoning";
import { TimelineStepper } from "@/components/zeo/TimelineStepper";
import { CtaCard } from "@/components/CtaCard";
import { FaqBlock, PageSection } from "@/components/sections";
import { FAQ, PREPARE, RURAL_TOPPER, SCORING, SCORING_NOTE } from "@/content/pages/zeo";
import { Button, ButtonRow, Confirm, Container, PageHero, Ph, Section, Tag } from "@/components/ui";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "ZEO Olympiad",
  description: "The Zubuntu eduRealm Olympiad measures logic, emotional intelligence, and critical thinking. Not recall.",
};

const REGISTER = "/contact?topic=zeo#form";

/* Motion: hero base reveal · Parallax layer (ghost words) on rote-vs-reasoning · timeline line draw. */
export default function ZeoPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/zeo", label: "ZEO Olympiad" }]}
        tag={
          <>
            Registration <Ph>date</Ph>
          </>
        }
        title={
          <>
            An exam that tests <em>judgement</em>. Not memory.
          </>
        }
        lead="The Zubuntu eduRealm Olympiad measures logic, emotional intelligence, and critical thinking. Not recall."
        photo={PHOTOS.classroomWide}
      >
        <ButtonRow>
          <Button href={REGISTER}>Register for ZEO 2026</Button>
        </ButtonRow>
      </PageHero>

      <Section tone="paper" labelledBy="tests-title">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Tag>About ZEO</Tag>
            <h2 id="tests-title" className="mt-5 text-d3 md:text-d2">
              What it tests — and what it <em>doesn&rsquo;t</em>
            </h2>
          </Reveal>
          <Reveal index={1}>
            <p className="text-lead text-graphite">
              Most talent exams reward memorisation. ZEO doesn&rsquo;t. It measures how a student reasons through a new
              problem, reads a situation, and recovers from a wrong first answer. A coaching batch can&rsquo;t prepare you for
              that. That&rsquo;s the point.
            </p>
          </Reveal>
        </Container>
      </Section>

      <RoteVsReasoning />

      <DetailStack>
        <Detail index={0} title="Format">
          <p>
            <Ph>sections, duration, medium</Ph>
          </p>
        </Detail>
        <Detail index={1} title="Eligibility & fee">
          <p>
            <Ph>grade range, criteria, fee</Ph>
          </p>
        </Detail>
        <Detail index={2} title="Scholarships">
          <p>Every rural topper gets one. Fully CSR-funded.</p>
          <p className="text-small">{RURAL_TOPPER}</p>
          <Confirm note="rural topper definition" />
          <p className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-navy px-2.5 py-0.5 font-mono text-[0.6875rem] tracking-wider text-white uppercase">Goal</span>
            <Ph>scholarships, year one</Ph>
          </p>
        </Detail>
        <Detail index={3} title="How it’s scored">
          <ul className="divide-y divide-rule rounded-2xl border border-rule">
            {SCORING.map((sc) => (
              <li key={sc.area} className="flex items-center justify-between gap-4 px-4 py-3 text-small">
                <span className="text-graphite">{sc.area}</span>
                <span className="font-mono font-medium text-navy">{sc.weight}</span>
              </li>
            ))}
          </ul>
          <p className="text-small">{SCORING_NOTE}</p>
          <Confirm note="suggested weighting" />
        </Detail>
        <Detail index={4} title="Timeline" wide>
          <p>Register → Exam → Results → Scholarship.</p>
          <div className="pt-4">
            <TimelineStepper />
          </div>
        </Detail>
        <Detail index={5} title="Zubuntu partnership">
          <p>
            <Ph>one line, once confirmed</Ph>
          </p>
        </Detail>
        <Detail index={6} title="Bulk school registration">
          <p>
            <Ph>process to add</Ph>
          </p>
        </Detail>
      </DetailStack>

      <PageSection id="prepare" tone="brand" tag="How to prepare" title={<>You can&rsquo;t cram this. Here&rsquo;s how to <em>practise</em>.</>}>
        <Reveal className="grid gap-6 text-lead text-brand-ink lg:grid-cols-3">
          {PREPARE.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <p className="mt-8">
          Sample questions: <Ph>link once available</Ph>
        </p>
      </PageSection>

      <FaqBlock id="zeo-faq" items={FAQ} />

      <CtaCard title={<>Register for ZEO <em>2026</em></>} href={REGISTER} label="Register for ZEO 2026" />
    </>
  );
}
