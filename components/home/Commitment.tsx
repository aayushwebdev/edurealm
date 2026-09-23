"use client";

import { Eye, Target } from "lucide-react";
import { registerCounters } from "@/motion/scroll";
import { useScrollEffect } from "@/motion/useScrollEffect";
import { ParallaxLayer } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { PHOTOS } from "@/content/photos";
import { PILLARS, TARGETS_2030 } from "@/content/site";
import { Button, Container, IconBadge, PhotoPair, Stamp, StatPill, Tag } from "@/components/ui";

/*
 * Vision 2030 in the agency-reference "About" layout.
 * GSAP #3: goal counters (count toward stated targets, always labeled "Goal").
 * Parallax: the photo pair drifts at 0.9× (the homepage's single parallax section).
 */
export function Commitment() {
  const statsRef = useScrollEffect<HTMLDivElement>(registerCounters);

  return (
    <section data-parallax-section aria-labelledby="vision-title" className="relative overflow-hidden bg-paper py-16 md:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <ParallaxLayer speed={0.9} className="order-2 lg:order-1">
            <PhotoPair photos={[PHOTOS.classroomKids, PHOTOS.tableGroup]} badge={<Stamp id="commit" size={116} />} />
          </ParallaxLayer>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Tag>Our commitment</Tag>
              <h2 id="vision-title" className="mt-5 text-d3 md:text-d2">
                By 2030, no student in our districts should have to <em>guess</em>.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Reveal index={1} className="rounded-card bg-cream p-6">
                <IconBadge tone="navy">
                  <Target size={20} aria-hidden="true" />
                </IconBadge>
                <h3 className="mt-5 text-d5 font-medium">Mission</h3>
                <p className="mt-2 text-small text-graphite">Make guidance honest. Make pressure visible. Make opportunity reachable.</p>
              </Reveal>
              <Reveal index={2} className="rounded-card bg-cream p-6">
                <IconBadge tone="navy">
                  <Eye size={20} aria-hidden="true" />
                </IconBadge>
                <h3 className="mt-5 text-d5 font-medium">Vision</h3>
                <p className="mt-2 text-small text-graphite">
                  A child&rsquo;s future decided by ability, not by what a family can afford to spend or who paid for a
                  recommendation.
                </p>
              </Reveal>
            </div>

            <Reveal index={3}>
              <p className="mt-8 text-small font-medium text-navy">Five pillars</p>
              <ol className="mt-3 flex flex-wrap gap-2">
                {PILLARS.map((p, i) => (
                  <li key={p} className="inline-flex items-center gap-2 rounded-full border border-rule bg-cream py-1.5 pr-4 pl-1.5 text-small text-navy">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-navy font-mono text-[0.6875rem] text-white">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ol>
              <Button href="/about#roadmap" variant="dark" className="mt-8">
                Read the full roadmap
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Goal stats row (agency-reference stats strip). Targets only — never achievements. */}
        <div ref={statsRef} className="mt-20 grid gap-10 border-t border-rule pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {TARGETS_2030.map((t, i) => (
            <Reveal key={t.label} index={i}>
              {/* No badge here; "by 2030" keeps these clearly targets, not results. */}
              <StatPill value={t.value} label={t.label.includes("2030") ? t.label : `${t.label} by 2030`} marker={null} countUp />
            </Reveal>
          ))}
          <Reveal index={3}>
            <StatPill value="5 years" label="Every district we enter, we stay for five years." marker={null} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
