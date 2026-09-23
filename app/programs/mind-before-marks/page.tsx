import type { Metadata } from "next";
import { Detail, DetailStack } from "@/components/Detail";
import { Reveal } from "@/components/motion/Reveal";
import { CardGrid, CheckList, FaqBlock, PageSection, StepFlow } from "@/components/sections";
import { Button, ButtonRow, Confirm, Container, HelplineBar, PageHero, Ph } from "@/components/ui";
import { FAQ, REFERRAL, REFERRAL_NOT, SAFE_MESSAGING, SAFEGUARD_POINTS, SCHOOL_NEEDS, TAKEAWAYS, TRACKS, WHY } from "@/content/pages/mind-before-marks";
import { PHOTOS } from "@/content/photos";
import { BOOK_SCHOOL_HREF } from "@/content/site";

export const metadata: Metadata = {
  title: "Mind Before Marks",
  description:
    "On-campus sessions for students, parents, and teachers on academic pressure, burnout, and suicide prevention.",
};

/*
 * STRICTEST MOTION BUDGET ON THE SITE (design draft §6):
 *   base reveal only · 400ms opacity fades · no parallax · no GSAP scrub · no gold · no stamp · no marquee.
 * `data-motion="strict"` enforces the 400ms/opacity-only reveal in CSS; motion/scroll.ts throws if any
 * scroll effect is registered inside it; html[data-calm] strips gold from the shared chrome.
 * scripts/check-motion.mjs checks this file. Photo: students seen from behind — no identifiable faces.
 * Safe-messaging: preventive and educational language only. No method detail, no sensational framing.
 */
export default function MindBeforeMarks() {
  return (
    <div data-motion="strict">
      <PageHero
        tone="mist"
        noGold
        crumbs={[
          { href: "/programs", label: "Programs" },
          { href: "/programs/mind-before-marks", label: "Mind Before Marks" },
        ]}
        tag="Suicide Prevention & Student Wellbeing"
        title={
          <>
            Recognising a student in crisis. Before it becomes an <em>emergency</em>.
          </>
        }
        lead="On-campus sessions for students, parents, and teachers on academic pressure, burnout, and suicide prevention."
        photo={PHOTOS.wellbeing}
      >
        <ButtonRow>
          <Button href={BOOK_SCHOOL_HREF} variant="dark">
            Book a school session
          </Button>
        </ButtonRow>
      </PageHero>

      {/* Helplines: near the top, not buried. */}
      <Container className="relative z-10 -mt-8 md:-mt-10">
        <Reveal>
          <HelplineBar large />
        </Reveal>
      </Container>

      {/* Why this program exists — no statistics, by rule */}
      <PageSection id="why" tag="Why this exists" title={<>Why this program <em>exists</em></>}>
        <Reveal className="grid gap-6 text-lead text-graphite lg:grid-cols-2">
          {WHY.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
      </PageSection>

      <PageSection id="tracks" tone="paper" tag="Who it's for" title={<>Three <em>tracks</em></>} confirm="duration and ratio">
        <CardGrid items={TRACKS} />
      </PageSection>

      <PageSection id="takeaways" tag="Outcomes" title={<>What participants leave <em>with</em></>}>
        <ul className="grid gap-5 md:grid-cols-3">
          {TAKEAWAYS.map((t, i) => (
            <Reveal as="li" key={t.who} index={i} className="rounded-card border border-rule bg-paper p-7">
              <h3 className="text-d5 font-medium">{t.who}</h3>
              <div className="mt-5">
                <CheckList items={t.items} />
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <DetailStack className="py-16 md:py-24">
        <Detail index={0} title="A session, in brief">
          <Ph block>Hour-by-hour breakdown — format, group size, materials.</Ph>
        </Detail>
        <Detail index={1} title="Who delivers this">
          {/* Real facilitators only. Never fabricate a name or credential. */}
          <Ph block>NAME, CREDENTIAL, REGISTRATION NUMBER — real facilitators only.</Ph>
        </Detail>
        <Reveal as="section" className="rounded-card bg-mist p-8 md:col-span-2 md:p-10">
          <p className="font-mono text-micro text-gray">03</p>
          <h2 className="mt-3 text-d4">What this is not</h2>
          <p className="mt-4 max-w-3xl text-lead text-graphite">
            Educational and preventive. Not therapy. Not diagnosis. Not crisis care. If a child needs clinical support, we
            help the family find it.
          </p>
        </Reveal>
      </DetailStack>

      <PageSection
        id="safeguards"
        tone="paper"
        tag="Safeguards"
        title={<>Our referral <em>pathway</em></>}
        confirm="protocol needs sign-off from a licensed mental health professional"
      >
        <StepFlow steps={REFERRAL} />
        <Reveal className="mt-5 rounded-card bg-mist p-6 text-small text-navy md:p-8">{REFERRAL_NOT}</Reveal>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-card border border-rule bg-paper p-7">
            <h3 className="text-d5 font-medium">Safe-messaging standard</h3>
            <p className="mt-3 text-small text-graphite">{SAFE_MESSAGING}</p>
            <Confirm note="confirm the named standard is accurate" />
          </Reveal>
          <Reveal index={1} className="rounded-card border border-rule bg-paper p-7">
            <h3 className="text-d5 font-medium">Privacy and consent</h3>
            <div className="mt-3">
              <CheckList items={SAFEGUARD_POINTS} />
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection id="schools" tag="For schools" title={<>What we need from your <em>school</em></>} confirm="facilitator ratio">
        <Reveal className="max-w-3xl rounded-card border border-rule bg-paper p-8">
          <CheckList items={SCHOOL_NEEDS} />
        </Reveal>
      </PageSection>

      <FaqBlock id="mbm-faq" items={FAQ} />

      <Container className="pb-16 md:pb-24">
        <Reveal className="rounded-card bg-mist p-8 md:p-10">
          <HelplineBar />
          <ButtonRow>
            <Button href={BOOK_SCHOOL_HREF} variant="dark">
              Book a school session
            </Button>
          </ButtonRow>
        </Reveal>
      </Container>
    </div>
  );
}
