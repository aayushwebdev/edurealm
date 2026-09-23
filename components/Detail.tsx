import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, cx } from "@/components/ui";

/** A numbered card — "01 Format". The workhorse of inner pages. */
export function Detail({
  title,
  children,
  id,
  index = 0,
  n,
  wide,
}: {
  title: ReactNode;
  children: ReactNode;
  id?: string;
  index?: number;
  /** Display number; defaults to index + 1. */
  n?: number;
  /** Span both columns. */
  wide?: boolean;
}) {
  return (
    <Reveal
      as="section"
      id={id}
      index={index % 2}
      stagger={100}
      spotlight
      className={cx("scroll-mt-28 rounded-card border border-rule bg-paper p-6 md:p-8", wide && "md:col-span-2")}
    >
      <p className="inline-flex rounded-full bg-brand px-2.5 py-0.5 font-mono text-micro font-medium text-brand-ink">
        {String(n ?? index + 1).padStart(2, "0")}
      </p>
      <h2 className="mt-3 text-d5 md:text-d4">{title}</h2>
      <div className="mt-4 space-y-4 text-body">{children}</div>
    </Reveal>
  );
}

export function DetailStack({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Container className={className ?? "py-16 md:py-24"}>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">{children}</div>
    </Container>
  );
}
