import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { ChecklistGate } from "@/components/forms/ChecklistGate";
import { CheckList, PageSection } from "@/components/sections";
import { STANDARDS, SUGGEST, TOPICS } from "@/content/pages/media-resources";
import { MediaGrid } from "@/components/home/Sections";
import { Reveal } from "@/components/motion/Reveal";
import { Container, IconBadge, PageHero, Ph } from "@/components/ui";

export const metadata: Metadata = {
  title: "eduRealm TV, the Podcast & our Journal",
  description: "Nothing published yet. Here's what's coming.",
};

/* Motion: base reveal only. */
export default function Media() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/media", label: "Media" }]}
        tag="Media"
        title={
          <>
            eduRealm TV, the Podcast &amp; our <em>Journal</em>
          </>
        }
        lead="Nothing published yet. Here’s what’s coming."
      />
      <Container className="pb-4">
        <MediaGrid />
      </Container>

      <PageSection id="topics" tone="brand" tag="Coming up" title={<>What each channel will <em>cover</em></>}>
        <ul className="grid gap-5 md:grid-cols-3">
          {TOPICS.map((t, i) => (
            <Reveal as="li" key={t.channel} index={i} className="rounded-card border border-rule bg-paper p-7">
              <h3 className="text-d5 font-medium">{t.channel}</h3>
              <p className="mt-3 text-small text-graphite">{t.body}</p>
            </Reveal>
          ))}
        </ul>
      </PageSection>

      <PageSection id="standards" tone="paper" tag="Editorial standards" title={<>Editorial <em>standards</em></>}>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-card border border-rule bg-cream p-8">
            <CheckList items={STANDARDS} />
          </Reveal>
          <Reveal index={1} className="rounded-card border border-rule bg-cream p-8">
            <h3 className="text-d5 font-medium">Suggest a topic</h3>
            <p className="mt-2 text-small text-graphite">{SUGGEST}</p>
          </Reveal>
        </div>
      </PageSection>

      <Container className="pt-16 pb-16 md:pb-24">
        <Reveal className="on-dark mt-5 grid items-center gap-8 rounded-card bg-navy p-8 text-white/80 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <IconBadge tone="gold">
              <Bell size={20} aria-hidden="true" />
            </IconBadge>
            <h2 className="mt-6 text-d4">Get notified</h2>
            <p className="mt-2 text-small">
              Launch date: <Ph>once confirmed</Ph>
            </p>
          </div>
          <ChecklistGate resource="Launch news" cta="Get notified" sentLine="We’ll email launch news to" dark />
        </Reveal>
      </Container>
    </>
  );
}
