import { Reveal } from "@/components/motion/Reveal";
import { Ph } from "@/components/ui";

/* Base reveal + a single connecting line drawn via strokeDashoffset on enter (CSS only,
   not part of the GSAP budget). Honors reduced motion via the global rule. */
const STEPS = ["Register", "Exam", "Results", "Scholarship"];

export function TimelineStepper() {
  return (
    <Reveal className="relative">
      <svg className="absolute top-[19px] right-[12%] left-[12%] hidden h-[2px] md:block" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
        <line className="draw-line" x1="0" y1="1" x2="100" y2="1" pathLength={1} stroke="var(--color-gold)" strokeWidth="2" />
      </svg>
      <ol className="relative grid gap-5 md:grid-cols-4 md:gap-3">
        {STEPS.map((s, i) => (
          <li key={s} className="flex items-center gap-4 md:flex-col md:text-center">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-mono text-small text-white ring-4 ring-paper">
              {i + 1}
            </span>
            <div className="md:mt-2">
              <p className="text-d5 font-medium text-navy">{s}</p>
              <p className="mt-1">
                <Ph>date</Ph>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
