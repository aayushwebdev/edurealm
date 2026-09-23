import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { CtaCard } from "@/components/CtaCard";
import { ProgramFilter } from "@/components/forms/ProgramFilter";
import { Reveal } from "@/components/motion/Reveal";
import { CheckList, CompareTable, FaqBlock, PageSection, StepFlow } from "@/components/sections";
import { Button, Container, IconBadge, PageHero } from "@/components/ui";
import { BOOKING, COMPARE, FAQ, FIT, PROMISE } from "@/content/pages/programs";
import { BOOK_HREF } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs & sessions",
  description: "Mind Before Marks · Informed Choice · Compass · Cognitive Skill Workshops · Founders' Bootcamp.",
};

export default function ProgramsHub() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/programs", label: "Programs" }]}
        tag="Five programs"
        title={
          <>
            Programs &amp; <em>sessions</em>
          </>
        }
        lead="Filter by audience — students, parents, schools. Filter by format — on-campus, online, camp."
      />
      <Container className="pb-16 md:pb-24">
        <Reveal>
          <ProgramFilter />
        </Reveal>
      </Container>

      {/* Which program fits? */}
      <PageSection id="fit" tone="paper" tag="Start here" title={<>Which program <em>fits</em>?</>}>
        <ul className="grid gap-5 md:grid-cols-3">
          {FIT.map((f, i) => (
            <Reveal as="li" key={f.who} index={i} className="rounded-card border border-rule bg-cream p-7">
              <h3 className="text-d5 font-medium">{f.who}</h3>
              <div className="mt-5 border-t border-rule pt-5">
                <CheckList items={f.items} />
              </div>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      {/* Compare at a glance */}
      <PageSection id="compare" tag="Compare" title={<>At a <em>glance</em></>} confirm="suggested durations and delivery">
        <CompareTable caption="Programs compared by audience, format, duration and delivery" head={COMPARE.head} rows={COMPARE.rows} />
      </PageSection>

      {/* How booking works */}
      <PageSection id="booking" tone="brand" tag="How booking works" title={<>From enquiry to <em>session</em></>}>
        <StepFlow steps={BOOKING} />
      </PageSection>

      {/* Our promise */}
      <section aria-label="Our promise" className="bg-cream pb-16 md:pb-24">
        <Container>
          <Reveal className="on-dark grid gap-6 rounded-card bg-navy p-8 text-white md:grid-cols-2 md:p-10">
            {PROMISE.map((p) => (
              <p key={p} className="flex items-center gap-4 text-d5 font-medium text-white">
                <IconBadge tone="light">
                  <ShieldCheck size={20} aria-hidden="true" />
                </IconBadge>
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <FaqBlock id="programs-faq" items={FAQ} />
      <CtaCard title={<>Book a <em>session</em></>} href={BOOK_HREF} label="Book a session" />

      {/* Persistent "Book a session" */}
      <div className="pointer-events-none sticky bottom-5 z-40 flex justify-center px-4 pb-5">
        <Button href={BOOK_HREF} className="pointer-events-auto shadow-[var(--shadow-float)]">
          Book a session
        </Button>
      </div>
    </>
  );
}
