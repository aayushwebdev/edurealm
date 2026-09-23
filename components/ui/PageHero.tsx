import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import type { Photo } from "@/content/photos";
import { Mark } from "@/components/layout/Mark";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Tag, cx } from "./primitives";
import { PhotoFrame } from "./photo";

/**
 * Inner-page hero: a bold rounded panel in the brand colour (#19A7E6) with dark ink text,
 * decorative rings, and a white-framed photo card.
 * `tone="mist"` is the calm variant (Mind Before Marks): soft sky tint, no gold, no rings.
 */
export function PageHero({
  tag,
  title,
  lead,
  children,
  photo,
  crumbs = [],
  tone = "cream",
  noGold,
  aside,
}: {
  tag?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  photo?: Photo;
  crumbs?: { href: string; label: string }[];
  /** "cream" (default) = bold brand panel; "mist" = calm variant. */
  tone?: "cream" | "mist";
  /** Mind Before Marks: no gold anywhere. */
  noGold?: boolean;
  /** Replaces the photo column (e.g. a card). */
  aside?: ReactNode;
}) {
  const calm = tone === "mist";
  const right = photo || aside;

  return (
    <header className="bg-cream px-3 pt-24 pb-4 md:px-6 md:pt-28">
      <div
        className={cx(
          "relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] md:rounded-[44px]",
          calm ? "bg-gradient-to-br from-brand-tint to-brand-100" : "on-brand bg-gradient-to-br from-brand to-brand-600",
        )}
      >
        {!calm && <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0" />}
        {!calm && <div aria-hidden="true" className="dot-texture-light pointer-events-none absolute inset-y-0 left-0 w-1/3 opacity-60" />}

        <Container className={cx("relative grid items-center gap-10 py-14 md:py-20", right && "lg:grid-cols-[1.1fr_1fr] lg:gap-14")}>
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className={cx("flex flex-wrap items-center gap-1.5 text-micro", calm ? "text-navy/70" : "text-brand-ink/75")}>
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.href} className="flex items-center gap-1.5">
                    <ChevronRight size={13} aria-hidden="true" />
                    <Link href={c.href} className="hover:underline">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            {tag && (
              <Tag brand={!calm} noGold={noGold}>
                {tag}
              </Tag>
            )}
            <h1 className="mt-5 text-[2.75rem] leading-[1.04] md:text-d1">{title}</h1>
            {lead && <p className={cx("mt-6 max-w-xl text-lead", calm ? "text-graphite" : "text-brand-ink/85")}>{lead}</p>}
            {children}
          </Reveal>

          {photo && (
            <Reveal index={1} className="relative">
              <div className={cx("rounded-[36px] p-2.5", calm ? "bg-white/70" : "bg-white/35 backdrop-blur")}>
                <PhotoFrame photo={photo} priority sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[5/4] w-full" />
              </div>
            </Reveal>
          )}
          {!photo && aside && <Reveal index={1}>{aside}</Reveal>}
        </Container>

        {/* Text-only variant: a large brand mark fills the empty side */}
        {!right && !calm && (
          <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-[-4rem] hidden -translate-y-1/2 text-white/25 lg:block">
            <Mark className="h-[26rem] w-[26rem]" />
          </div>
        )}
      </div>
    </header>
  );
}
