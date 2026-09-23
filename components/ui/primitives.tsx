import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HELPLINES } from "@/content/site";

export function cx(...c: unknown[]) {
  return c.filter((v): v is string => typeof v === "string" && v.length > 0).join(" ");
}

/* ---------------- Layout ---------------- */

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[1200px] px-4 md:px-8", className)}>{children}</div>;
}

export type Tone = "cream" | "paper" | "mist" | "tint" | "brand" | "navy" | "charcoal" | "deep";

const TONES: Record<Tone, string> = {
  cream: "bg-cream",
  paper: "bg-paper",
  mist: "bg-mist",
  tint: "bg-brand-tint",
  brand: "on-brand bg-brand bg-gradient-to-br from-brand to-brand-600",
  navy: "on-dark bg-navy text-white/80",
  charcoal: "on-dark bg-charcoal text-white/80",
  deep: "on-dark bg-navy-950 text-white/80",
};

export const isDark = (t: Tone) => t === "navy" || t === "charcoal" || t === "deep";

export function Section({
  tone = "cream",
  className,
  children,
  id,
  labelledBy,
  ...rest
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
} & Record<`data-${string}`, string>) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx("relative scroll-mt-24 py-16 md:py-28", TONES[tone], className)}
      {...rest}
    >
      {children}
    </section>
  );
}

/* ---------------- Type ---------------- */

/** Pill section tag with a gold dot — "● About us". */
export function Tag({
  children,
  dark,
  brand,
  className,
  noGold,
}: {
  children: ReactNode;
  dark?: boolean;
  /** On a bright #19A7E6 surface. */
  brand?: boolean;
  className?: string;
  noGold?: boolean;
}) {
  return (
    <p
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-micro font-medium",
        brand
          ? "border-white/60 bg-white/35 text-brand-ink backdrop-blur"
          : dark
            ? "border-white/15 bg-white/5 text-white/85"
            : "border-rule bg-paper text-navy",
        className,
      )}
    >
      <span aria-hidden="true" className={cx("h-2 w-2 rounded-full", brand ? "bg-brand-ink" : noGold ? "bg-brand" : "bg-gold")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  tag,
  title,
  lead,
  id,
  dark,
  center,
  action,
  noGold,
  brand,
  className,
}: {
  tag?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  dark?: boolean;
  brand?: boolean;
  center?: boolean;
  action?: ReactNode;
  noGold?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex flex-col gap-6",
        action && "md:flex-row md:items-end md:justify-between",
        center && "items-center text-center",
        className,
      )}
    >
      <div className={cx("max-w-3xl", center && "mx-auto")}>
        {tag && (
          <Tag dark={dark} brand={brand} noGold={noGold}>
            {tag}
          </Tag>
        )}
        <h2 id={id} className="mt-5 text-d3 md:text-d2">
          {title}
        </h2>
        {lead && <p className={cx("mt-5 text-lead", dark ? "text-white/75" : brand ? "text-brand-ink/85" : "text-graphite")}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/* ---------------- Buttons ---------------- */

type BtnVariant = "primary" | "dark" | "outline" | "outlineLight" | "light" | "link" | "linkLight";

const BTN: Record<BtnVariant, string> = {
  primary: "bg-gold text-navy hover:bg-[#f2c64f] pl-6 pr-1.5",
  dark: "bg-navy text-white hover:bg-navy-800 pl-6 pr-1.5",
  light: "bg-white text-navy hover:bg-cream pl-6 pr-1.5",
  outline: "border border-navy/20 text-navy hover:border-navy hover:bg-white px-6",
  outlineLight: "border border-white/30 text-white hover:border-white hover:bg-white/10 px-6",
  link: "px-0 text-navy underline-offset-4 hover:underline",
  linkLight: "px-0 text-white underline-offset-4 hover:underline",
};

const CIRCLE: Partial<Record<BtnVariant, string>> = {
  primary: "bg-navy text-gold",
  dark: "bg-gold text-navy",
  light: "bg-navy text-white",
};

/** Pill button. Filled variants carry the Finovate-style arrow circle. */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  className?: string;
  external?: boolean;
}) {
  const circle = CIRCLE[variant];
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className={cx(
        "group/btn inline-flex min-h-12 items-center justify-center gap-3 rounded-full text-small font-medium transition-colors duration-150",
        BTN[variant],
        className,
      )}
    >
      {children}
      {circle ? (
        <span
          aria-hidden="true"
          className={cx("grid h-9 w-9 place-items-center rounded-full transition-transform duration-150 group-hover/btn:-rotate-45", circle)}
        >
          <ArrowRight size={16} strokeWidth={2} />
        </span>
      ) : (
        <ArrowRight aria-hidden="true" size={16} className="transition-transform duration-150 group-hover/btn:translate-x-0.5" />
      )}
    </Link>
  );
}

export function ButtonRow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mt-8 flex flex-wrap items-center gap-3", className)}>{children}</div>;
}

/** Round arrow affordance for clickable cards. */
export function CardArrow({ dark }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-150",
        dark
          ? "border-white/25 text-white group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
          : "border-navy/15 text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-white",
      )}
    >
      <ArrowUpRight size={18} />
    </span>
  );
}

/* ---------------- Cards ---------------- */

type CardVariant = "paper" | "cream" | "dark" | "highlight" | "outlineHighlight" | "glass";

const CARD: Record<CardVariant, string> = {
  paper: "bg-paper border border-rule",
  cream: "bg-cream border border-rule",
  dark: "on-dark bg-white/[0.04] border border-white/10 text-white/80",
  highlight: "bg-gold text-navy border border-gold",
  outlineHighlight: "bg-paper border-2 border-navy",
  glass: "on-dark bg-white/[0.06] border border-white/15 text-white/80 backdrop-blur",
};

export function Card({
  children,
  className,
  variant = "paper",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  as?: "div" | "li" | "article";
}) {
  return <Tag className={cx("rounded-card p-6 md:p-8", CARD[variant], className)}>{children}</Tag>;
}

/** Circular icon badge used on cards. */
export function IconBadge({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "navy" | "light" | "mist" | "brand" }) {
  const t = {
    gold: "bg-gold text-navy",
    navy: "bg-navy text-gold",
    light: "bg-white/10 text-gold",
    mist: "bg-mist text-blue",
    brand: "bg-brand text-brand-ink",
  }[tone];
  return <span className={cx("grid h-12 w-12 shrink-0 place-items-center rounded-full", t)}>{children}</span>;
}

/* ---------------- Honesty primitives ---------------- */

/**
 * A visible "To confirm" marker for anything not yet known.
 * Never replace one of these with a guess. Fill it with the real value, or leave it.
 */
export function Ph({ children, block }: { children: ReactNode; block?: boolean }) {
  const T = block ? "div" : "span";
  return (
    <T className={cx("ph font-mono text-micro", block ? "my-2 block px-4 py-3" : "mx-0.5 inline-block px-2 py-0.5 align-middle leading-normal")} data-placeholder="">
      <span className="ph-label mr-1.5 font-medium uppercase tracking-wide">To confirm</span>
      <span className="ph-text">{children}</span>
    </T>
  );
}

/** A forward-looking figure. Always labeled — "Goal" or "Commitment" — never shown as an achievement. */
export function StatPill({
  value,
  label,
  marker = "Goal",
  countUp,
  dark,
}: {
  value: number | string;
  label: string;
  /** null hides the badge (label must then make the target nature clear, e.g. "by 2030"). */
  marker?: "Goal" | "Commitment" | null;
  countUp?: boolean;
  dark?: boolean;
}) {
  const shown = typeof value === "number" ? value.toLocaleString("en-US") : value;
  return (
    <div className={cx("flex flex-col gap-3 border-l pl-5", dark ? "border-white/15" : "border-navy/15")}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={cx("text-d3 leading-none font-medium whitespace-nowrap tabular-nums tracking-[-0.02em] md:text-[3.25rem]", dark ? "text-white" : "text-navy")}
          {...(countUp && typeof value === "number" ? { "data-count-to": String(value) } : {})}
        >
          {shown}
        </span>
        {marker && (
          <span
            className={cx(
              "rounded-full px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-wider",
              dark ? "bg-gold text-navy" : "bg-navy text-white",
            )}
          >
            {marker}
          </span>
        )}
      </div>
      <p className={cx("max-w-[15rem] text-small", dark ? "text-white/70" : "text-graphite")}>{label}</p>
    </div>
  );
}

export function EmptyState({ title, children, dark }: { title: string; children?: ReactNode; dark?: boolean }) {
  return (
    <div className={cx("h-full rounded-card border border-dashed px-6 py-8", dark ? "border-white/20" : "border-navy/20 bg-paper/60")}>
      <p className={cx("font-mono text-micro uppercase tracking-wider", dark ? "text-white/60" : "text-gray")}>Launching soon</p>
      <p className={cx("mt-3 text-d5 font-medium", dark ? "text-white" : "text-navy")}>{title}</p>
      {children && <div className={cx("mt-2 text-small", dark ? "text-white/70" : "text-graphite")}>{children}</div>}
    </div>
  );
}

/* ---------------- Helplines ---------------- */

export function HelplineBar({ className, large }: { className?: string; large?: boolean }) {
  return (
    <div
      className={cx(
        "flex flex-col gap-3 rounded-card border border-blue/20 bg-paper sm:flex-row sm:items-center sm:justify-between",
        large ? "p-6 md:p-8" : "px-5 py-4",
        className,
      )}
    >
      <p className={cx("font-medium text-navy", large ? "text-d5" : "text-small")}>Need to talk to someone now?</p>
      <p className="flex flex-wrap gap-x-6 gap-y-2 text-small">
        {HELPLINES.map((h) => (
          <a
            key={h.name}
            href={`tel:${h.tel}`}
            className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-navy hover:bg-sky/60"
          >
            <strong className="font-semibold">{h.name}</strong>
            <span className="font-mono">{h.number}</span>
          </a>
        ))}
      </p>
    </div>
  );
}

/** Dev-only review banner for pages with open legal/editorial requirements. */
export function ReviewBanner({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <div role="note" className="bg-charcoal px-4 py-2 text-center font-mono text-micro text-white">
      DEV ONLY · {children}
    </div>
  );
}

/**
 * Dev-only marker for FRAMEWORK copy: real content that still needs owner sign-off on its
 * numbers or policy before launch. Renders nothing in production builds.
 */
export function Confirm({ note = "confirm before publishing" }: { note?: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-charcoal px-3 py-1 font-mono text-[0.6875rem] tracking-wide text-white">
      DEV · FRAMEWORK · {note}
    </span>
  );
}
