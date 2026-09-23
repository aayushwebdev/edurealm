import { ParallaxLayer } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { TARGETS_YEAR_ONE } from "@/content/site";

/*
 * /impact Parallax layer 4: the map backdrop moves at 0.9× behind the static
 * "Planned, not current" label. Deliberately abstract (a dot field, not borders) until
 * real district data exists — swap in a proper district map once targets are confirmed.
 */

function dots() {
  // Deterministic pseudo-random dot field in a soft, roughly diamond-shaped silhouette.
  const out: { x: number; y: number; r: number }[] = [];
  let seed = 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  for (let y = 20; y < 480; y += 16) {
    const half = 200 * Math.sin((Math.PI * (y - 10)) / 480) * (y < 260 ? 1 : 1 - (y - 260) / 420);
    for (let x = 250 - half; x < 250 + half; x += 16) {
      if (rand() > 0.18) out.push({ x: x + (rand() - 0.5) * 4, y, r: 1.6 + rand() * 0.8 });
    }
  }
  return out;
}

export function PlannedCoverageMap() {
  const field = dots();
  return (
    <section data-parallax-section aria-labelledby="coverage-title" className="on-dark relative overflow-hidden bg-navy py-20 text-white/80 md:py-32">
      <ParallaxLayer speed={0.9} className="pointer-events-none absolute inset-0 flex items-center justify-center md:justify-end md:pr-[6%]">
        <svg viewBox="0 0 500 500" className="h-[115%] max-h-[680px] w-auto">
          {field.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="rgb(191 217 236 / 0.35)" />
          ))}
        </svg>
      </ParallaxLayer>

      <Container className="relative">
        <Reveal className="max-w-xl rounded-card border border-white/15 bg-navy-950/80 p-8 backdrop-blur md:p-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-micro font-medium text-navy">
            Planned, not current
          </p>
          <h2 id="coverage-title" className="mt-5 text-d3 md:text-d2">
            Planned <em>coverage</em>
          </h2>
          <p className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[0.6875rem] tracking-wider text-navy uppercase">Goal</span>
            <span className="font-medium text-white">{TARGETS_YEAR_ONE.districts} districts, year one</span>
          </p>
          <p className="mt-4 text-small text-white/70">
            The map behind this card is illustrative only. It becomes a district map once the year-one districts are confirmed.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
