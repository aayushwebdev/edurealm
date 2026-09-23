"use client";

import { registerFinePrint } from "@/motion/scroll";
import { useScrollEffect } from "@/motion/useScrollEffect";

/*
 * GSAP #4 — fine-print scrub. INVENTED sample contract text only. Never a real institute's document,
 * never a real institute's name. LEGAL REVIEW REQUIRED before publish.
 * Under reduced motion every clause renders highlighted with its note visible (no scrub).
 */
const CLAUSES = [
  {
    n: "4.1",
    text: "Results: “1,000+ selections” are declared across all programmes, centres and course durations offered by the Institute.",
    note: "A headline number with no denominator. Ask how many students were enrolled to produce it, and in which course.",
  },
  {
    n: "7.2",
    text: "Fees once paid are non-refundable and non-transferable under any circumstances, including withdrawal before the commencement of classes.",
    note: "No refund, even if classes never start. Before you sign, ask what part is refundable, and by what date.",
  },
  {
    n: "9.3",
    text: "For board registration the student shall be enrolled in an associated school. Regular attendance at the associated school is not required.",
    note: "This is a “dummy school” enrolment. Check your board’s attendance rules — a shortfall can affect eligibility to sit board exams.",
  },
  {
    n: "11.1",
    text: "The Institute reserves the right to change faculty, batch timings and study centre without prior notice to the student or guardian.",
    note: "You agree in advance to changes you can’t object to. Ask what happens to your fee if the batch you paid for changes.",
  },
];

export function FinePrintScrub() {
  const ref = useScrollEffect<HTMLOListElement>(registerFinePrint);

  return (
    <figure className="overflow-hidden rounded-card border border-rule bg-paper shadow-[var(--shadow-float)]">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-rule bg-cream px-6 py-4 text-micro">
        <span className="font-medium text-navy">Sample enrolment agreement</span>
        <span className="rounded-full bg-navy px-3 py-1 font-mono text-[0.6875rem] tracking-wider text-white uppercase">Sample · invented text</span>
      </figcaption>
      <ol ref={ref} className="divide-y divide-rule">
        {CLAUSES.map((c) => (
          <li key={c.n} data-clause className="grid gap-5 px-6 py-7 md:grid-cols-[1.2fr_1fr] md:gap-10 md:px-8">
            <p className="text-small leading-relaxed text-navy" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              <span className="mr-2 font-mono text-micro text-gray">§{c.n}</span>
              <span className="relative">
                {/* Gold as a fill behind navy text — never gold text on light */}
                <span data-wipe aria-hidden="true" className="absolute -inset-x-1 inset-y-0 origin-left rounded-sm bg-gold/40" />
                <span className="relative">{c.text}</span>
              </span>
            </p>
            <p data-note className="rounded-2xl bg-cream p-4 text-small text-graphite">
              <span className="mb-1 block text-micro font-semibold text-navy">In plain language</span>
              {c.note}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
