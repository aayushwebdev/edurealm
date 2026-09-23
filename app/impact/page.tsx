import type { Metadata } from "next";
import { CtaCard } from "@/components/CtaCard";
import { Detail, DetailStack } from "@/components/Detail";
import { PlannedCoverageMap } from "@/components/impact/PlannedCoverageMap";
import { Reveal } from "@/components/motion/Reveal";
import { CompareTable, PageSection } from "@/components/sections";
import { CALENDAR, LOG, MEASURES, MEASURES_NOTE } from "@/content/pages/impact";
import { Button, ButtonRow, PageHero, Ph } from "@/components/ui";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "Impact",
  description: "We're just starting. Here's exactly what that means.",
};

/* Motion: parallax on the coverage map only. Everything else deliberately plain. */
export default function Impact() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/impact", label: "Impact" }]}
        tag="Where we are right now"
        title={
          <>
            We&rsquo;re just starting. Here&rsquo;s exactly what that <em>means</em>.
          </>
        }
        lead="eduRealm just launched. This page updates as our first cohort of schools, sessions, and scholarships completes. An honest empty page beats a padded one."
        photo={PHOTOS.ruralAerial}
      >
        <ButtonRow>
          <Button href="/partner">Sponsor our first cohort</Button>
        </ButtonRow>
      </PageHero>

      <PlannedCoverageMap />

      <DetailStack>
        <Detail index={0} title="Methodology" wide>
          <p>
            Every future number here carries its denominator and a last-updated date. This section explains exactly how each
            figure is counted.
          </p>
        </Detail>
        <Detail index={1} n={2} title="Scholarships">
          <p className="flex items-baseline gap-3">
            <span className="text-d2 font-medium text-navy tabular-nums">0</span>
            <span className="text-graphite">awarded yet.</span>
          </p>
          <p>
            First cohort: <Ph>date</Ph>
          </p>
        </Detail>
        <Detail index={2} n={3} title="Annual report">
          <p>Not published yet.</p>
          <p>
            First edition: <Ph>date</Ph>
          </p>
        </Detail>
      </DetailStack>

      <PageSection
        id="measures"
        tone="brand"
        tag="What we will measure"
        title={<>Every number, with its <em>denominator</em></>}
        confirm="metrics framework needs approval"
      >
        <CompareTable caption="Planned impact measures and their denominators" head={MEASURES.head} rows={MEASURES.rows} />
        <p className="mt-6 text-lead text-brand-ink">{MEASURES_NOTE}</p>
      </PageSection>

      <PageSection id="calendar" tag="Reporting calendar" title={<>When this page <em>changes</em></>} confirm="suggested cadence">
        <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="rounded-card border border-rule bg-paper p-8">
            <dl className="divide-y divide-rule">
              {CALENDAR.map((c) => (
                <div key={c.what} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
                  <dt className="font-medium text-navy">{c.what}</dt>
                  <dd className="text-small text-graphite">{c.when}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal index={1} className="rounded-card bg-navy p-8 text-white/80">
            <p className="text-micro font-medium text-sky">Update log</p>
            <ul className="mt-4 space-y-4">
              {LOG.map((l) => (
                <li key={l.date}>
                  <p className="font-mono text-micro text-white/60">{l.date}</p>
                  <p className="mt-1 text-white">{l.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </PageSection>

      <CtaCard title={<>Sponsor our first <em>cohort</em></>} href="/partner" label="Sponsor our first cohort" />
    </>
  );
}
