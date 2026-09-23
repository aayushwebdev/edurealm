import type { Metadata } from "next";
import { CtaCard } from "@/components/CtaCard";
import { Detail, DetailStack } from "@/components/Detail";
import { Reveal } from "@/components/motion/Reveal";
import { CardGrid, CheckList, PageSection } from "@/components/sections";
import { Button, ButtonRow, Confirm, PageHero, Ph } from "@/components/ui";
import { BOOTCAMP_FACTS, BOOTCAMP_NOT, BUILD, MENTORS, PITCH_DAY, SUPERVISION } from "@/content/pages/programs-detail";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "Founders' Bootcamp",
  description: "An idea becomes an early business model. Market research, a basic plan, a pitch.",
};

const BOOK = "/contact?role=parent&topic=bootcamp#form";

/* Motion: base reveal only. */
export default function FoundersBootcamp() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/programs", label: "Programs" },
          { href: "/programs/founders-bootcamp", label: "Founders' Bootcamp" },
        ]}
        tag="Summer camp · Grades 9–12"
        title={
          <>
            Founders&rsquo; <em>Bootcamp</em>
          </>
        }
        lead="An idea becomes an early business model. Market research, a basic plan, a pitch. Not a finished company."
        photo={PHOTOS.groupSmiling}
      >
        <ButtonRow>
          <Button href={BOOK}>Book a bootcamp seat</Button>
        </ButtonRow>
      </PageHero>

      <PageSection id="build" tone="paper" tag="What students build" title={<>What students <em>build</em></>}>
        <CardGrid items={BUILD} />
      </PageSection>

      <PageSection id="facts" tone="brand" tag="Who, when, where" title={<>The <em>details</em></>} confirm="5-day length">
        <Reveal className="rounded-card border border-rule bg-paper p-8 md:p-10">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BOOTCAMP_FACTS.map((f) => (
              <div key={f.label}>
                <dt className="text-micro text-gray">{f.label}</dt>
                <dd className="mt-1 font-medium text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </PageSection>

      <DetailStack>
        <Detail index={0} title="Day-by-day">
          <Ph block>day-by-day structure</Ph>
        </Detail>
        <Detail index={1} title="Sample module">
          <Ph block>one worked example</Ph>
        </Detail>
        <Detail index={2} title="What it is not">
          <p>{BOOTCAMP_NOT}</p>
        </Detail>
        <Detail index={3} title="Mentors">
          <p>{MENTORS}</p>
        </Detail>
        <Detail index={4} title="Pitch day">
          <p>{PITCH_DAY}</p>
        </Detail>
        <Detail index={5} title="For parents: supervision & safety">
          <CheckList items={SUPERVISION} />
          <Confirm note="confirm against venue and staffing plan" />
        </Detail>
      </DetailStack>

      <CtaCard title={<>Book a bootcamp <em>seat</em></>} href={BOOK} label="Book a bootcamp seat" />
    </>
  );
}
