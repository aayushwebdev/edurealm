import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button, Container } from "@/components/ui";

/** Closing CTA card used by inner pages. */
export function CtaCard({ title, href, label, secondary }: { title: ReactNode; href: string; label: string; secondary?: { href: string; label: string } }) {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <Reveal>
          <div className="on-brand relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand to-brand-600 px-6 py-14 md:flex md:items-center md:justify-between md:px-14 md:py-16">
            <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0" />
            <h2 className="relative text-d3 md:text-d2">{title}</h2>
            <div className="relative mt-8 flex flex-wrap gap-3 md:mt-0">
              <Button href={href} variant="dark">
                {label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="light">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
