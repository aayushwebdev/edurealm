import type { Metadata } from "next";
import { Building2, Landmark } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { CardGrid, CheckList, FaqBlock, PageSection, StepFlow } from "@/components/sections";
import { COMMITMENTS, FAQ, FLOW, NGO_MODELS, OLYMPIAD_GETS, REPORT_INCLUDES, VERIFICATION } from "@/content/pages/partner";
import { Button, ButtonRow, Container, IconBadge, PageHero, Ph, PhotoFrame, Section, Tag } from "@/components/ui";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "Partner with eduRealm",
  description: "CSR, corporate, NGO and government partnerships — verified rural scholarships and district programs.",
};

const ENQUIRY = "/contact?role=company&topic=partnership#form";

/* Motion: base reveal, 100ms two-column offset. */
export default function Partner() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/partner", label: "Partner" }]}
        tag="CSR · NGOs · Government"
        title={
          <>
            Partner with <em>eduRealm</em>
          </>
        }
        photo={PHOTOS.fiveKids}
      >
        <ButtonRow>
          <Button href={ENQUIRY}>Start a partnership enquiry</Button>
        </ButtonRow>
      </PageHero>

      {/* One page, anchor switch between the two partner types */}
      <Container className="pt-16 md:pt-24">
        <nav aria-label="Partner type" className="inline-flex gap-1 rounded-full bg-paper p-1 ring-1 ring-rule">
          <a href="#csr" className="rounded-full px-5 py-2.5 text-small font-medium text-navy transition-colors duration-150 hover:bg-cream">
            CSR &amp; corporates
          </a>
          <a href="#ngo" className="rounded-full px-5 py-2.5 text-small font-medium text-navy transition-colors duration-150 hover:bg-cream">
            NGOs &amp; government
          </a>
        </nav>
      </Container>

      <Container className="grid gap-5 pt-8 pb-16 md:grid-cols-2 md:pb-24">
        <Reveal index={0} stagger={100} id="csr" className="flex scroll-mt-28 flex-col overflow-hidden rounded-card border border-rule bg-paper">
          <PhotoFrame photo={PHOTOS.rural} decorative sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9] rounded-none" />
          <div className="flex flex-1 flex-col p-8">
            <IconBadge tone="navy">
              <Building2 size={20} aria-hidden="true" />
            </IconBadge>
            <h2 className="mt-6 text-d4">CSR &amp; corporates</h2>
            <p className="mt-3 text-graphite">
              Route CSR funds to verified rural scholarships. Co-brand a regional ZEO Olympiad. Get dated, measurable impact
              reporting and compliance documentation.
            </p>
            <Ph block>sample report — once a reporting cycle exists</Ph>
          </div>
        </Reveal>
        <Reveal index={1} stagger={100} id="ngo" className="flex scroll-mt-28 flex-col overflow-hidden rounded-card border border-rule bg-paper">
          <PhotoFrame photo={PHOTOS.tableGroup} decorative sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[16/9] rounded-none" />
          <div className="flex flex-1 flex-col p-8">
            <IconBadge tone="navy">
              <Landmark size={20} aria-hidden="true" />
            </IconBadge>
            <h2 className="mt-6 text-d4">NGOs &amp; government</h2>
            <p className="mt-3 text-graphite">
              Deliver career guidance, digital literacy, and study material in your districts, alongside our team. Joint
              literacy drives and regional bootcamps, in local languages.
            </p>
          </div>
        </Reveal>
      </Container>

      <PageSection id="flow" tone="paper" tag="How it works" title={<>How a contribution <em>flows</em></>}>
        <StepFlow steps={FLOW} />
      </PageSection>

      <PageSection
        id="verification"
        tone="brand"
        tag="Recipient verification"
        title={<>How a recipient is <em>verified</em></>}
        confirm="confirm against operational capacity"
      >
        <StepFlow steps={VERIFICATION} />
      </PageSection>

      <PageSection id="reporting" tone="paper" tag="Reporting" title={<>What reporting <em>includes</em></>}>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-card border border-rule bg-cream p-8">
            <CheckList items={REPORT_INCLUDES} />
          </Reveal>
          <Reveal index={1} className="rounded-card border border-dashed border-navy/20 bg-cream p-8">
            <p className="font-mono text-micro tracking-wider text-gray uppercase">Sample report</p>
            <Ph block>sample report — once a reporting cycle exists</Ph>
          </Reveal>
        </div>
      </PageSection>

      <PageSection id="olympiad" tag="For CSR & corporates" title={<>What a co-branded regional Olympiad sponsor <em>gets</em></>}>
        <Reveal className="max-w-3xl rounded-card border border-rule bg-paper p-8">
          <CheckList items={OLYMPIAD_GETS} />
        </Reveal>
      </PageSection>

      <PageSection id="ngo-models" tone="paper" tag="For NGOs & government" title={<>Engagement <em>models</em></>}>
        <CardGrid items={NGO_MODELS} />
      </PageSection>

      <PageSection id="commitments" tag="Our commitments" title={<>What every partner can <em>expect</em></>}>
        <Reveal className="max-w-3xl rounded-card border border-rule bg-paper p-8">
          <CheckList items={COMMITMENTS} />
        </Reveal>
      </PageSection>

      <FaqBlock id="partner-faq" items={FAQ} />

      <Section tone="navy" labelledBy="shared-title" className="mb-16 md:mb-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Tag dark>Shared</Tag>
            <h2 id="shared-title" className="mt-5 text-d3 md:text-d2">
              Every contribution logs against a named, verified <em>recipient</em>.
            </h2>
            <p className="mt-5 text-white/75">
              Reporting cadence: <Ph>to define</Ph>
            </p>
          </Reveal>
          <Reveal index={1} className="lg:justify-self-end">
            <Button href={ENQUIRY}>Start a partnership enquiry</Button>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
