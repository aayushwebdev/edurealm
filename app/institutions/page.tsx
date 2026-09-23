import type { Metadata } from "next";
import { Detail, DetailStack } from "@/components/Detail";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { InstitutionCards } from "@/components/home/Sections";
import { Reveal } from "@/components/motion/Reveal";
import { CardGrid, FaqBlock, PageSection, StepFlow } from "@/components/sections";
import { DELIVER, FAQ, NEP, PROCESS } from "@/content/pages/institutions";
import { Button, ButtonRow, Confirm, Container, PageHero, Ph, PhotoFrame, Tag } from "@/components/ui";
import { PHOTOS } from "@/content/photos";

export const metadata: Metadata = {
  title: "For schools & colleges",
  description: "NEP-aligned curricula, teacher certification, custom study modules, and industry partnerships.",
};

const NEEDS = [
  { q: "Curriculum feels outdated?", a: "NEP-aligned, built for thinking over memorising." },
  { q: "Teachers need better tools?", a: "Certification in modern methods and early burnout recognition." },
  { q: "Study material falls flat?", a: "Custom modules for your subjects and grades." },
  { q: "No path to industry?", a: "We connect you to corporate partners for placements and funding." },
];

/* Motion: base reveal, 100ms two-column offsets. */
export default function Institutions() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/institutions", label: "For schools & colleges" }]}
        tag="For principals and trustees"
        title={
          <>
            For schools &amp; <em>colleges</em>
          </>
        }
        photo={PHOTOS.classroomKids}
      >
        <ButtonRow>
          <Button href="#proposal">Request a proposal</Button>
        </ButtonRow>
      </PageHero>

      <Container className="pt-16 md:pt-24">
        <InstitutionCards items={NEEDS} headingLevel={2} />
      </Container>

      <PageSection id="deliver" tone="paper" tag="What we deliver" title={<>What we <em>deliver</em></>}>
        <CardGrid items={DELIVER} cols={4} />
      </PageSection>

      <PageSection id="process" tone="brand" tag="How we work" title={<>How we work with your <em>school</em></>}>
        <StepFlow steps={PROCESS} />
      </PageSection>

      <PageSection id="nep" tone="navy" tag="NEP alignment" title={<>NEP alignment, <em>explained</em></>}>
        <Reveal className="grid gap-6 text-lead text-white/80 lg:grid-cols-2">
          {NEP.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        <Confirm note="fact-check NEP claims against your curriculum" />
      </PageSection>

      <DetailStack>
        <Detail index={0} title="An engagement, across a term">
          <Ph block>timeline to add</Ph>
        </Detail>
        <Detail index={1} title="Facilitator certification">
          <Ph block>detail to add</Ph>
        </Detail>
        <Detail index={2} title="Pricing model">
          <p>A written scope and quote, tailored to what you actually need — not a fixed package.</p>
          <Ph>published fee scale, once set</Ph>
        </Detail>
        <Detail index={3} title="Case study">
          <Ph block>to add once available</Ph>
        </Detail>
      </DetailStack>

      <FaqBlock id="inst-faq" items={FAQ} />

      <section id="proposal" aria-labelledby="proposal-title" className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <div className="grid overflow-hidden rounded-[32px] border border-rule bg-paper lg:grid-cols-[1fr_1.3fr]">
            <PhotoFrame photo={PHOTOS.classroomWide} decorative sizes="(min-width: 1024px) 40vw, 100vw" className="min-h-64 rounded-none" />
            <Reveal className="p-8 md:p-12">
              <Tag>School name, board, strength, city, need</Tag>
              <h2 id="proposal-title" className="mt-5 text-d3">
                Request a <em>proposal</em>
              </h2>
              <div className="mt-8">
                <ProposalForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
