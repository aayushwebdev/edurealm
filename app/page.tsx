import { HeroSplit } from "@/components/home/HeroSplit";
import { Commitment } from "@/components/home/Commitment";
import {
  ClosingCta,
  CsrBand,
  EthicsCharter,
  FaqSection,
  FundingFlow,
  InstitutionsWhy,
  MediaSection,
  ProgramsBand,
  RuralBand,
  ZeoFeature,
} from "@/components/home/Sections";
import { Marquee } from "@/components/ui/Marquee";
import { PROGRAMS } from "@/content/site";

/*
 * Homepage — reference-driven layout. Band rhythm:
 *   cream hero → navy marquee → paper commitment → navy programs → cream ZEO → charcoal rural
 *   → cream institutions → navy CSR → cream funding → paper charter → cream media → paper FAQ + CTA.
 * Motion: base reveal everywhere · GSAP #3 goal counters · one parallax (commitment photos)
 *   · CSS-only marquee (pausable), stamp, tab crossfade. All off under reduced motion.
 */
export default function Home() {
  return (
    <>
      <HeroSplit />
      <Marquee label="Our programs" items={PROGRAMS.map((p) => p.name)} />
      <Commitment />
      <ProgramsBand />
      <ZeoFeature />
      <RuralBand />
      <InstitutionsWhy />
      <CsrBand />
      <FundingFlow />
      <EthicsCharter />
      <MediaSection />
      <FaqSection />
      <ClosingCta />
    </>
  );
}
