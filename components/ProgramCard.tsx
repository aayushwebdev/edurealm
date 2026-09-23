import Link from "next/link";
import { Brain, Compass, FileSearch, HeartHandshake, Rocket, type LucideIcon } from "lucide-react";
import { PROGRAM_PHOTOS } from "@/content/photos";
import type { PROGRAMS } from "@/content/site";
import { CardArrow, IconBadge, PhotoFrame, cx } from "@/components/ui";

export const PROGRAM_ICONS: Record<string, LucideIcon> = {
  "mind-before-marks": HeartHandshake,
  "informed-choice": FileSearch,
  compass: Compass,
  "cognitive-skills": Brain,
  "founders-bootcamp": Rocket,
};

/** Photo-topped program card (agency + Finovate service-card pattern). */
export function ProgramCard({
  program,
  tone = "paper",
  headingLevel = 3,
}: {
  program: (typeof PROGRAMS)[number];
  /** paper on light bands; dark on navy bands; feature = the highlighted flagship card. */
  tone?: "paper" | "dark" | "feature";
  headingLevel?: 2 | 3;
}) {
  const Icon = PROGRAM_ICONS[program.slug];
  const H = `h${headingLevel}` as const;
  const dark = tone === "dark";
  return (
    <Link
      href={`/programs/${program.slug}`}
      className={cx(
        "group flex h-full flex-col rounded-card p-3 transition-colors duration-150",
        tone === "paper" && "border border-rule bg-paper hover:border-navy/30",
        tone === "dark" && "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]",
        tone === "feature" && "bg-cream ring-2 ring-white/40",
      )}
    >
      <PhotoFrame photo={PROGRAM_PHOTOS[program.slug]} decorative sizes="(min-width: 1024px) 30vw, 90vw" className="aspect-[16/10] rounded-[20px]">
        <span className="absolute top-3 left-3">
          <IconBadge tone={dark ? "gold" : "navy"}>
            <Icon size={20} aria-hidden="true" />
          </IconBadge>
        </span>
        {program.flagship && (
          <span className="absolute top-3 right-3 rounded-full bg-paper/95 px-3 py-1 text-micro font-medium text-navy backdrop-blur">
            Flagship
          </span>
        )}
      </PhotoFrame>
      <div className="flex flex-1 flex-col px-3 pt-5 pb-3">
        <H className={cx("text-d5 font-medium", dark ? "text-white" : "text-navy")}>{program.name}</H>
        <p className={cx("mt-2 text-small", dark ? "text-white/75" : "text-graphite")}>{program.line}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className={cx("text-micro", dark ? "text-white/55" : "text-gray")}>{program.meta}</p>
          <CardArrow dark={dark} />
        </div>
      </div>
    </Link>
  );
}
