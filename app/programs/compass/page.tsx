import type { Metadata } from "next";
import { CtaCard } from "@/components/CtaCard";
import { Detail, DetailStack } from "@/components/Detail";
import { Reveal } from "@/components/motion/Reveal";
import { CardGrid, CheckList, FaqBlock, PageSection } from "@/components/sections";
import { Button, ButtonRow, Confirm, PageHero, Ph } from "@/components/ui";
import { COMPASS_FAQ, COMPASS_INSTRUMENTS, COMPASS_REPORT, COMPASS_SESSIONS, SAMPLE_NOTE, SAMPLE_REPORT } from "@/content/pages/programs-detail";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "Compass — Career Discovery",
  description: "Three sessions with a counsellor. One written report.",
};

const BOOK = "/contact?role=parent&topic=compass#form";

/* Motion: base reveal only. No AI language anywhere on this page. */
export default function Compass() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/programs", label: "Programs" },
          { href: "/programs/compass", label: "Compass" },
        ]}
        tag="Career Discovery"
        title={
          <>
            Three sessions with a counsellor. One written <em>report</em>.
          </>
        }
        lead="Not a quiz. Not software. A trained counsellor working through real assessments with your child."
        photo={PHOTOS.chalkboard}
      >
        <ButtonRow>
          <Button href={BOOK}>Book Compass</Button>
        </ButtonRow>
      </PageHero>

      <PageSection id="who" tone="paper" tag="Who it's for" title={<>For students in grades 9–12 — and their <em>parents</em></>}>
        <Reveal className="max-w-3xl text-lead text-graphite">
          <p>Students do the assessments and the interpretation. Parents join for the final report review.</p>
        </Reveal>
      </PageSection>

      <PageSection id="sessions" tone="brand" tag="How it works" title={<>Three <em>sessions</em></>} confirm="45-minute sessions over 2–3 weeks">
        <CardGrid items={COMPASS_SESSIONS} />
      </PageSection>

      <DetailStack>
        <Detail index={0} title="The instruments">
          <p>{COMPASS_INSTRUMENTS}</p>
        </Detail>
        <Detail index={1} title="Who interprets them">
          <Ph block>NAME, CREDENTIAL — real counsellors only.</Ph>
        </Detail>
        <Detail index={2} title="The written report">
          <CheckList items={COMPASS_REPORT} />
        </Detail>
        <Detail index={3} title="What we don’t do">
          <p>No guaranteed outcomes. No recommended institutes. No commissions.</p>
        </Detail>
        <Detail index={4} title="Sample report" wide>
          <div className="rounded-2xl border border-dashed border-navy/25 bg-cream p-6">
            <p className="inline-flex rounded-full bg-navy px-3 py-1 font-mono text-[0.6875rem] tracking-wider text-white uppercase">
              Sample · fictional · for illustration
            </p>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              {SAMPLE_REPORT.map((r) => (
                <div key={r.label} className={r.label.startsWith("Directions") || r.label.startsWith("Discussion") ? "md:col-span-2" : ""}>
                  <dt className="text-micro font-medium text-navy">{r.label}</dt>
                  <dd className="mt-1 text-small text-graphite">{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 border-t border-rule pt-4 text-micro text-gray">{SAMPLE_NOTE}</p>
          </div>
        </Detail>
        <Detail index={5} title="Format & price" wide>
          <p>
            Three 45-minute sessions, over 2–3 weeks · On-campus or online · <Ph>price</Ph>
          </p>
          <Confirm note="suggested duration" />
        </Detail>
      </DetailStack>

      <FaqBlock id="compass-faq" items={COMPASS_FAQ} />
      <CtaCard title={<>Book <em>Compass</em></>} href={BOOK} label="Book Compass" />
    </>
  );
}
