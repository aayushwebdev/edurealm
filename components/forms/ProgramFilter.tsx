"use client";

import { useState } from "react";
import { PROGRAMS, type Audience, type Format } from "@/content/site";
import { ProgramCard } from "@/components/ProgramCard";
import { cx } from "@/components/ui/primitives";

const AUDIENCES: { v: Audience | "all"; l: string }[] = [
  { v: "all", l: "Everyone" },
  { v: "students", l: "Students" },
  { v: "parents", l: "Parents" },
  { v: "schools", l: "Schools" },
];
const FORMATS: { v: Format | "all"; l: string }[] = [
  { v: "all", l: "Any format" },
  { v: "on-campus", l: "On-campus" },
  { v: "online", l: "Online" },
  { v: "camp", l: "Camp" },
];

/* Pill filters: 150ms active-state transition, color + border only — no motion. */
function Pills<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { v: T; l: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <legend className="sr-only">{legend}</legend>
      <span aria-hidden="true" className="w-20 shrink-0 text-micro font-medium text-gray">
        {legend}
      </span>
      <div className="flex flex-wrap gap-1 rounded-full bg-paper p-1 ring-1 ring-rule">
        {options.map((o) => (
          <button
            key={o.v}
            type="button"
            aria-pressed={value === o.v}
            onClick={() => onChange(o.v)}
            className={cx(
              "min-h-10 rounded-full px-4 text-small transition-colors duration-150",
              value === o.v ? "bg-navy text-white" : "text-navy hover:bg-cream",
            )}
          >
            {o.l}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ProgramFilter() {
  const [aud, setAud] = useState<Audience | "all">("all");
  const [fmt, setFmt] = useState<Format | "all">("all");
  const list = PROGRAMS.filter(
    (p) => (aud === "all" || p.audience.includes(aud)) && (fmt === "all" || p.format.includes(fmt)),
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <Pills legend="Audience" options={AUDIENCES} value={aud} onChange={setAud} />
        <Pills legend="Format" options={FORMATS} value={fmt} onChange={setFmt} />
      </div>
      <p className="sr-only" aria-live="polite">
        {list.length} program{list.length === 1 ? "" : "s"} shown
      </p>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.slug}>
            <ProgramCard program={p} headingLevel={2} />
          </li>
        ))}
        {list.length === 0 && (
          <li className="rounded-card border border-dashed border-navy/20 p-8 text-graphite md:col-span-2 lg:col-span-3">
            No program matches both filters. Try &ldquo;Any format&rdquo;.
          </li>
        )}
      </ul>
    </div>
  );
}
