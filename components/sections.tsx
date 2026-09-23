import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { AccordionList } from "@/components/ui/AccordionList";
import { Confirm, Container, IconBadge, Section, SectionHeading, cx, type Tone } from "@/components/ui";

/*
 * Reusable inner-page section patterns. Copy lives in content/pages/*.tsx.
 * Calm-safe: nothing here uses gold, so these are fine on Mind Before Marks.
 */

export type Step = { title: string; body: ReactNode };
export type CardItem = { icon?: LucideIcon; title: string; body: ReactNode; meta?: ReactNode };
export type FaqItem = { id: string; q: string; a: ReactNode };

const dark = (t: Tone) => t === "navy" || t === "charcoal" || t === "deep";

/** Section wrapper: pill tag + headline (with serif accent) + optional lead, then content. */
export function PageSection({
  id,
  tag,
  title,
  lead,
  tone = "tint",
  center,
  confirm,
  children,
}: {
  id: string;
  tag?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  tone?: Tone;
  center?: boolean;
  /** FRAMEWORK copy: shows a dev-only "confirm before publishing" marker with this note. */
  confirm?: string;
  children?: ReactNode;
}) {
  return (
    <Section tone={tone} id={id} labelledBy={`${id}-title`}>
      <Container>
        <Reveal>
          <SectionHeading tag={tag} id={`${id}-title`} title={title} lead={lead} dark={dark(tone)} brand={tone === "brand"} center={center} noGold />
          {confirm && <Confirm note={confirm} />}
        </Reveal>
        {children && <div className="mt-12">{children}</div>}
      </Container>
    </Section>
  );
}

/** Numbered step flow (horizontal on desktop). */
export function StepFlow({ steps, onDark }: { steps: Step[]; onDark?: boolean }) {
  const cols = steps.length === 3 ? "lg:grid-cols-3" : steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={cx("grid gap-4 sm:grid-cols-2", cols)}>
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.title}
          index={i}
          spotlight
          className={cx("flex flex-col rounded-card p-6 md:p-7", onDark ? "bg-white/[0.05] ring-1 ring-white/10" : "border border-rule bg-paper")}
        >
          <span className={cx("grid h-10 w-10 place-items-center rounded-full font-mono text-small font-medium", onDark ? "bg-white text-navy" : "bg-brand text-brand-ink")}>
            {i + 1}
          </span>
          <h3 className={cx("mt-5 text-d5 font-medium", onDark ? "text-white" : "text-navy")}>{s.title}</h3>
          <div className={cx("mt-2 text-small", onDark ? "text-white/75" : "text-graphite")}>{s.body}</div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Icon cards in a grid. */
export function CardGrid({ items, cols = 3, onDark }: { items: CardItem[]; cols?: 2 | 3 | 4; onDark?: boolean }) {
  const c = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <ul className={cx("grid gap-5", c)}>
      {items.map((it, i) => (
        <Reveal
          as="li"
          key={it.title}
          index={i}
          spotlight
          className={cx("flex flex-col rounded-card p-7", onDark ? "bg-white/[0.05] ring-1 ring-white/10" : "border border-rule bg-paper")}
        >
          {it.icon && (
            <IconBadge tone={onDark ? "light" : "brand"}>
              <it.icon size={20} aria-hidden="true" />
            </IconBadge>
          )}
          <h3 className={cx("text-d5 font-medium", it.icon && "mt-6", onDark ? "text-white" : "text-navy")}>{it.title}</h3>
          <div className={cx("mt-3 flex-1 space-y-3 text-small", onDark ? "text-white/75" : "text-graphite")}>{it.body}</div>
          {it.meta && <div className={cx("mt-5 border-t pt-4 text-micro", onDark ? "border-white/10 text-white/60" : "border-rule text-gray")}>{it.meta}</div>}
        </Reveal>
      ))}
    </ul>
  );
}

/** Simple responsive comparison table. Scrolls horizontally inside its card on small screens. */
export function CompareTable({ head, rows, caption }: { head: string[]; rows: ReactNode[][]; caption: string }) {
  return (
    <Reveal className="overflow-x-auto rounded-card border border-rule bg-paper">
      <table className="w-full min-w-[640px] text-left text-small">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-rule bg-cream">
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-4 font-medium text-navy">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-rule last:border-b-0">
              {r.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-5 py-4 font-medium text-navy">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-5 py-4 text-graphite">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

/** Section-level FAQ. */
export function FaqBlock({ id, items, title, tone = "paper" }: { id: string; items: FaqItem[]; title?: ReactNode; tone?: Tone }) {
  return (
    <Section tone={tone} id={id} labelledBy={`${id}-title`}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <Reveal>
          <SectionHeading tag="FAQ" id={`${id}-title`} title={title ?? <>Frequently asked <em>questions</em></>} noGold />
        </Reveal>
        <Reveal index={1}>
          <AccordionList items={items} />
        </Reveal>
      </Container>
    </Section>
  );
}

/** A checked list (e.g. "what participants leave with"). */
export function CheckList({ items, onDark }: { items: ReactNode[]; onDark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((t, i) => (
        <li key={i} className={cx("flex gap-3 text-small", onDark ? "text-white/80" : "text-graphite")}>
          <Check size={18} aria-hidden="true" className={cx("mt-0.5 shrink-0", onDark ? "text-sky" : "text-blue")} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
