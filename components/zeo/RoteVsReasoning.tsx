import { BookMarked, Lightbulb } from "lucide-react";
import { ParallaxLayer } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Container, IconBadge, Tag } from "@/components/ui";

/* /zeo parallax: ghost labels at 0.85× behind the two comparison cards (1×). */
export function RoteVsReasoning() {
  return (
    <section data-parallax-section aria-labelledby="rote-title" className="relative overflow-hidden bg-cream py-16 md:py-28">
      <ParallaxLayer
        speed={0.85}
        className="pointer-events-none absolute inset-0 hidden overflow-hidden pt-40 select-none md:grid md:grid-cols-2 md:items-center"
      >
        <span className="text-center text-[clamp(3.5rem,7vw,7rem)] leading-none font-semibold tracking-tight text-navy/[0.06]">MEMORY</span>
        <span className="text-center text-[clamp(3.5rem,7vw,7rem)] leading-none font-semibold tracking-tight text-navy/[0.06]">JUDGEMENT</span>
      </ParallaxLayer>

      <Container className="relative">
        <Reveal className="text-center">
          <Tag>Rote vs. reasoning</Tag>
          <h2 id="rote-title" className="mt-5 text-d3 md:text-d2">
            Rote vs. <em>reasoning</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal index={0}>
            <article className="h-full rounded-card border border-rule bg-paper p-8 md:p-10">
              <IconBadge tone="mist">
                <BookMarked size={20} aria-hidden="true" />
              </IconBadge>
              <p className="mt-8 text-micro font-medium tracking-wider text-gray uppercase">A typical exam question</p>
              <p className="mt-3 text-d4 font-medium text-navy">Rewards a memorised formula, applied fast.</p>
            </article>
          </Reveal>
          <Reveal index={1}>
            <article className="on-dark h-full rounded-card bg-navy p-8 text-white/80 md:p-10">
              <IconBadge tone="gold">
                <Lightbulb size={20} aria-hidden="true" />
              </IconBadge>
              <p className="mt-8 text-micro font-medium tracking-wider text-gold uppercase">A ZEO question</p>
              <p className="mt-3 text-d4 font-medium text-white">
                Gives incomplete information and asks for the best reasoned answer — shown, not just stated.
              </p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
