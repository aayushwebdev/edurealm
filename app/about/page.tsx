import type { Metadata } from "next";
import { UserRound } from "lucide-react";
import { CtaCard } from "@/components/CtaCard";
import { EthicsCharter, FundingFlow } from "@/components/home/Sections";
import { Reveal } from "@/components/motion/Reveal";
import { Container, PageHero, Ph, Section, SectionHeading, StatPill, Tag } from "@/components/ui";
import { PHOTOS } from "@/content/photos";
import { AUDIENCES, CAREERS, DIFFERENCE, ETHICS_EXPANDED, PILLARS, PILLARS_EXPLAINED, POSITIONING, TARGETS_2030 } from "@/content/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why eduRealm exists",
  description: "Founder's note, team, ethics charter, 2030 roadmap, and how we're funded.",
};

/*
 * Motion: base reveal only.
 * Founder's note: real, first-person, ~200 words. Never fabricated.
 * Charter expansions and roadmap reasoning are required by the content brief but not yet written —
 * they render as placeholders so nobody mistakes a draft for a commitment.
 */
export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/about", label: "About" }]}
        tag="About eduRealm"
        title={
          <>
            Why eduRealm <em>exists</em>
          </>
        }
        lead={POSITIONING}
        photo={PHOTOS.fiveKids}
      />

      {/* Founder's note + team */}
      <Container className="grid gap-5 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-card border border-rule bg-paper p-8 md:p-10">
          <Tag>Founder&rsquo;s note</Tag>
          <Ph block>~200 words, real, first-person. To write once supplied. Never fabricated.</Ph>
        </Reveal>
        <Reveal index={1} className="rounded-card bg-navy p-8 text-white md:p-10">
          <Tag dark>Team</Tag>
          <ul className="mt-6 grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="flex flex-col items-center gap-3 rounded-2xl bg-white/[0.05] p-4 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white/60">
                  <UserRound size={24} aria-hidden="true" />
                </span>
                <span className="on-dark">
                  <Ph>name, credential</Ph>
                </span>
              </li>
            ))}
          </ul>
          <p className="on-dark mt-5 text-small text-white/70">
            <Ph>Names and real credentials. Placeholder until confirmed.</Ph>
          </p>
        </Reveal>
      </Container>

      {/* Who we serve — four audiences (master content §1) */}
      <Section tone="tint" labelledBy="audiences-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Four audiences"
              id="audiences-title"
              title={
                <>
                  Who we <em>serve</em>
                </>
              }
            />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((a, i) => (
              <Reveal as="li" key={a.who} index={i} className="flex flex-col rounded-card border border-rule bg-paper p-7">
                <p className="font-mono text-micro text-gray">{a.kind}</p>
                <h3 className="mt-3 text-d5 font-medium">{a.who}</h3>
                <p className="mt-5 text-micro font-medium text-navy">Core need</p>
                <p className="mt-1 text-small text-graphite">{a.need}</p>
                <p className="mt-5 text-micro font-medium text-navy">Our answer</p>
                <p className="mt-1 text-small text-graphite">{a.answer}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-5 rounded-card bg-navy p-8 text-white/80 md:p-10">
            <p className="text-micro font-medium text-gold">What makes eduRealm different</p>
            <p className="mt-3 max-w-4xl text-lead text-white">{DIFFERENCE}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Our story */}
      <Container className="py-16 md:py-24">
        <Reveal className="rounded-card border border-rule bg-paper p-8 md:p-10">
          <Tag>Our story</Tag>
          <h2 className="mt-5 text-d3">
            How eduRealm <em>began</em>
          </h2>
          <Ph block>founding year and a short, real timeline of milestones</Ph>
        </Reveal>
      </Container>

      {/* Five pillars, explained */}
      <Section tone="paper" id="pillars" labelledBy="pillars-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Five pillars"
              id="pillars-title"
              title={
                <>
                  Five pillars, <em>explained</em>
                </>
              }
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PILLARS_EXPLAINED.map((p, i) => (
              <Reveal as="li" key={p.name} index={i} className="flex flex-col rounded-card border border-rule bg-cream p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy font-mono text-small text-white">{i + 1}</span>
                <h3 className="mt-5 text-d5 font-medium">{p.name}</h3>
                <p className="mt-2 text-small text-graphite">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <EthicsCharter
        id="ethics"
        expanded={ETHICS_EXPANDED}
      />

      <Section tone="tint" id="roadmap" labelledBy="roadmap-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Our 2030 roadmap"
              id="roadmap-title"
              title={
                <>
                  Our 2030 <em>roadmap</em>
                </>
              }
              lead={`Five pillars: ${PILLARS.join(" · ")}.`}
            />
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {TARGETS_2030.map((t, i) => (
              <Reveal key={t.label} index={i}>
                <StatPill value={t.value} label={t.label} />
              </Reveal>
            ))}
            <Reveal index={3}>
              <StatPill value="5 years" label="Every district we enter, we stay for five years." marker="Commitment" />
            </Reveal>
          </div>
          <Reveal>
            {/* DRAFT (content strategist) — explains the logic; final numbers still need confirmation. */}
            <div className="mt-10 max-w-4xl space-y-4 rounded-card border border-rule bg-paper p-8 text-body text-graphite md:p-10">
              <p>The targets on this page aren&rsquo;t arbitrary.</p>
              <p>
                <Ph>500 schools</Ph> reflects what we believe is achievable with steady district-by-district growth over five
                years, not a rapid nationwide rollout that would compromise quality. <Ph>100,000 students</Ph> follows from that
                school count at typical school size. <Ph>1,000 scholarships</Ph> is scaled to what we expect realistic CSR
                partnership funding to support over the same period.
              </p>
              <p>
                Progress against each target is reported on the{" "}
                <Link href="/impact" className="font-medium text-navy underline underline-offset-4">
                  Impact page
                </Link>
                , updated quarterly, with the same denominator standard used everywhere else on this site.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <FundingFlow id="funding" withCta={false} />

      <Container className="grid gap-5 py-16 md:grid-cols-3 md:py-24">
        <Reveal className="rounded-card border border-rule bg-paper p-8">
          <Tag>Governance &amp; registration</Tag>
          <Ph block>legal entity, registration number, and governance</Ph>
        </Reveal>
        <Reveal className="rounded-card border border-rule bg-paper p-8">
          <Tag>Careers</Tag>
          <p className="mt-4 text-small text-graphite">{CAREERS}</p>
          <Ph block>open roles, when listed</Ph>
        </Reveal>
        <Reveal index={1} className="rounded-card border border-rule bg-paper p-8">
          <Tag>Contact</Tag>
          <p className="mt-4 text-graphite">Parents, schools, companies, NGOs and government — one form, routed by role.</p>
        </Reveal>
      </Container>

      <CtaCard title={<>Get in <em>touch</em></>} href="/contact" label="Contact us" />
    </>
  );
}
