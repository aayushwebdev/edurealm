import type { Metadata } from "next";
import { FileCheck2, FileText, HeartPulse, PenLine, type LucideIcon } from "lucide-react";
import { ChecklistGate } from "@/components/forms/ChecklistGate";
import { Reveal } from "@/components/motion/Reveal";
import { Container, IconBadge, PageHero, Ph, cx } from "@/components/ui";
import { Lock } from "lucide-react";
import { PRIVACY_NOTE, RESOURCE_DETAILS } from "@/content/pages/media-resources";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free resources",
  description: "The 12 Questions Checklist, Warning Signs, NEP Summary for Schools, and ZEO sample papers.",
};

const RESOURCES: { id: string; name: string; line?: string; icon: LucideIcon; available: boolean }[] = [
  { id: "checklist", name: "The 12 Questions Checklist", line: "What to ask before you pay a coaching fee.", icon: FileCheck2, available: true },
  { id: "warning-signs", name: "Warning Signs", line: "A one-pager for parents on early burnout.", icon: HeartPulse, available: true },
  { id: "nep", name: "NEP Summary for Schools", line: "What the policy actually changes.", icon: FileText, available: true },
  { id: "zeo-samples", name: "ZEO Sample Papers", icon: PenLine, available: false },
];

/* Motion: base reveal only. Email gate only — no phone number requested. */
export default function Resources() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/resources", label: "Free resources" }]}
        tag="Email gate only. No phone number requested."
        title={
          <>
            Free <em>resources</em>
          </>
        }
      />
      <Container className="grid gap-5 pb-16 md:grid-cols-2 md:pb-24">
        {RESOURCES.map((r, i) => {
          const featured = i === 0;
          return (
            <Reveal
              key={r.id}
              index={i}
              id={r.id}
              className={cx(
                "flex scroll-mt-28 flex-col rounded-card p-8",
                featured ? "bg-gold text-navy" : "border border-rule bg-paper",
              )}
            >
              <IconBadge tone={featured ? "navy" : "mist"}>
                <r.icon size={20} aria-hidden="true" />
              </IconBadge>
              <h2 className="mt-6 text-d4">{r.name}</h2>
              {r.line && <p className={cx("mt-2", featured ? "text-navy" : "text-graphite")}>{r.line}</p>}
              {!r.available && (
                <p className="mt-2">
                  <Ph>once available</Ph>
                </p>
              )}
              <div className={cx("mt-6 border-t pt-5 text-small", featured ? "border-navy/15" : "border-rule")}>
                <p className="font-medium text-navy">What&rsquo;s inside</p>
                <p className={cx("mt-2", featured ? "text-navy" : "text-graphite")}>{RESOURCE_DETAILS[r.id].inside}</p>
                <p className={cx("mt-4", featured ? "text-navy" : "text-graphite")}>
                  For: {RESOURCE_DETAILS[r.id].who} · Related: {RESOURCE_DETAILS[r.id].related}
                </p>
              </div>
              {r.available && (
                <div className="mt-auto pt-8">
                  <ChecklistGate resource={r.name} cta="Email me the PDF" />
                </div>
              )}
            </Reveal>
          );
        })}
      </Container>

      {/* Privacy note */}
      <Container className="pb-16 md:pb-24">
        <Reveal className="flex flex-col gap-4 rounded-card bg-navy p-8 text-white/80 md:flex-row md:items-center md:p-10">
          <IconBadge tone="light">
            <Lock size={20} aria-hidden="true" />
          </IconBadge>
          <p className="text-body">
            <span className="font-medium text-white">Email only. No phone number requested.</span> {PRIVACY_NOTE}{" "}
            <Link href="/privacy" className="text-white underline underline-offset-4">
              Privacy policy
            </Link>
          </p>
        </Reveal>
      </Container>
    </>
  );
}
