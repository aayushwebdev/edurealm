import type { Metadata } from "next";
import { CtaCard } from "@/components/CtaCard";
import { Detail, DetailStack } from "@/components/Detail";
import { Reveal } from "@/components/motion/Reveal";
import { CardGrid, PageSection } from "@/components/sections";
import { Button, ButtonRow, PageHero, Ph } from "@/components/ui";
import { SKILLS, WORKSHOP_BOOKING, WORKSHOP_FORMATS, WORKSHOP_RELATED } from "@/content/pages/programs-detail";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "Cognitive Skill Workshops",
  description: "Quantitative reasoning. Emotional intelligence. Problem-solving. Multiple intelligences.",
};

const BOOK = "/contact?role=school&topic=workshop#form";

/* Motion: base reveal only. */
export default function CognitiveSkills() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/programs", label: "Programs" },
          { href: "/programs/cognitive-skills", label: "Cognitive Skill Workshops" },
        ]}
        tag="Reasoning · EQ · Problem-solving"
        title={
          <>
            Cognitive Skill <em>Workshops</em>
          </>
        }
        lead="Quantitative reasoning. Emotional intelligence. Problem-solving. Multiple intelligences."
        photo={PHOTOS.studyPair}
      >
        <ButtonRow>
          <Button href={BOOK}>Book a workshop</Button>
        </ButtonRow>
      </PageHero>

      <PageSection id="skills" tone="paper" tag="What we build" title={<>Four skill <em>areas</em></>}>
        <CardGrid items={SKILLS} cols={4} />
      </PageSection>

      <PageSection id="formats" tone="brand" tag="Formats" title={<>Half-day or <em>full-day</em></>} confirm="suggested structure">
        <CardGrid items={WORKSHOP_FORMATS} cols={2} />
      </PageSection>

      <DetailStack>
        <Detail index={0} title="Sample module">
          <Ph block>one worked example</Ph>
        </Detail>
        <Detail index={1} title="Related: ZEO Olympiad">
          <p>{WORKSHOP_RELATED}</p>
        </Detail>
      </DetailStack>

      <PageSection id="book" tone="paper" tag="For schools" title={<>How schools <em>book</em></>}>
        <Reveal className="max-w-3xl rounded-card border border-rule bg-cream p-8 text-lead text-graphite">
          <p>{WORKSHOP_BOOKING}</p>
        </Reveal>
      </PageSection>

      <CtaCard title={<>Book a <em>workshop</em></>} href={BOOK} label="Book a workshop" />
    </>
  );
}
