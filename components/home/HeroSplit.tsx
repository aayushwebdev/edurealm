"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Pause, Play } from "lucide-react";
import { PHOTOS, type Photo } from "@/content/photos";
import { BOOK_SCHOOL_HREF } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button, Container, PhotoCollage, Stamp, Tag, cx } from "@/components/ui";

/*
 * Homepage hero — auto-playing carousel of the three hero states.
 * The badge carries the tagline "We work for the student."; the headline is the active state's headline.
 *
 * Auto-advance is driven by the active tab's progress-bar animation (7s). WCAG 2.2.2:
 *   pauses on hover over the tab row, on keyboard focus inside the hero, when the browser tab is
 *   hidden, and via a visible pause button. Under prefers-reduced-motion it never auto-advances.
 * State A's photos show no identifiable child's face (safe-messaging rule).
 */

const INTERVAL_MS = 7000;

type Seg = { t: string; em?: boolean };

const STATES: {
  tab: string;
  eyebrow: string;
  title: Seg[];
  /** Headline scale — the longest headline runs slightly smaller so all three fit three lines. */
  scale?: number;
  body: string;
  ctas: { label: string; href: string }[];
  photos: [Photo, Photo, Photo];
}[] = [
  {
    tab: "Wellbeing",
    eyebrow: "1 of 3 · Suicide Prevention & Student Wellbeing",
    title: [{ t: "Suicide prevention. Academic pressure support. On" }, { t: "campus.", em: true }],
    body: "We train schools to spot burnout early, talk to a struggling student the right way, and know exactly when to refer for professional help.",
    ctas: [
      { label: "Book a school session", href: BOOK_SCHOOL_HREF },
      { label: "How it works", href: "/programs/mind-before-marks" },
    ],
    photos: [PHOTOS.wellbeing, PHOTOS.chalkboard, PHOTOS.classroomWide],
  },
  {
    tab: "Coaching tactics",
    eyebrow: "2 of 3 · Coaching Tactics Awareness",
    title: [{ t: "The tactics coaching institutes use on parents. Named" }, { t: "plainly.", em: true }],
    scale: 0.85,
    body: "Inflated rank claims. Non-refundable fee traps. “Dummy school” enrolments that quietly damage a child’s board record. We name the tactics. We take no commission from any coaching provider — ever.",
    ctas: [
      { label: "Get the free checklist", href: "/resources#checklist" },
      { label: "See the program", href: "/programs/informed-choice" },
    ],
    photos: [PHOTOS.coaching, PHOTOS.deskBoys, PHOTOS.studyBoys],
  },
  {
    tab: "Rural access",
    eyebrow: "3 of 3 · Rural & Tier 2/3 Access",
    title: [{ t: "Free scholarships for rural and Tier 2/3 students." }, { t: "First.", em: true }],
    body: "Fully CSR-funded scholarships, digital literacy, and career guidance — delivered directly in the districts most education companies skip.",
    ctas: [
      { label: "Sponsor a student", href: "/partner" },
      { label: "See the districts", href: "/impact" },
    ],
    photos: [PHOTOS.rural, PHOTOS.ruralAerial, PHOTOS.groupSmiling],
  },
];

/** Splits the headline into words so each can animate in with a stagger. */
function AnimatedTitle({ segs }: { segs: Seg[] }) {
  let i = 0;
  return (
    <>
      {segs.map((s, si) =>
        s.t.split(" ").map((w, wi) => {
          const n = i++;
          const word = (
            <span className="hero-word" style={{ animationDelay: `${n * 55}ms` }}>
              {w}
            </span>
          );
          return (
            <span key={`${si}-${wi}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              {s.em ? <em>{word}</em> : word}
              {" "}
            </span>
          );
        }),
      )}
    </>
  );
}

export function HeroSplit() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false); // user pressed pause
  const [held, setHeld] = useState(false); // hover / focus / hidden tab
  const [reduced, setReduced] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    const onVis = () => setHeld(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const running = !paused && !held && !reduced;
  const next = () => setActive((a) => (a + 1) % STATES.length);

  const onKey = (e: KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    const to = e.key === "Home" ? 0 : e.key === "End" ? STATES.length - 1 : (active + delta + STATES.length) % STATES.length;
    if (delta || e.key === "Home" || e.key === "End") {
      e.preventDefault();
      setActive(to);
      tabs.current[to]?.focus();
    }
  };

  const s = STATES[active];

  return (
    <section
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className="hero-fit relative overflow-hidden bg-cream pt-28 pb-16 md:pt-36 md:pb-24 lg:flex lg:h-[100svh] lg:min-h-[640px] lg:items-center lg:pt-24 lg:pb-8"
      onFocus={(e) => {
        // Hold only for keyboard focus; a mouse click on a tab shouldn't freeze the carousel.
        if ((e.target as HTMLElement).matches(":focus-visible")) setHeld(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(document.hidden);
      }}
      data-running={String(running)}
    >
      <div aria-hidden="true" className="dot-texture pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-70" />
      <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-brand/30 blur-3xl" />
      <div aria-hidden="true" className="hero-blob-2 pointer-events-none absolute -bottom-48 -left-40 h-[26rem] w-[26rem] rounded-full bg-brand/15 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <Tag className="text-small">We work for the student.</Tag>
          </Reveal>

          {/* Active state — key forces the entrance animation to replay on every change.
              Headline and body reserve 3 and 4 lines on desktop so the layout doesn't jump between states. */}
          <div key={active} id="hero-panel" role="tabpanel" aria-labelledby={`hero-tab-${active}`} className="mt-6 lg:mt-4">
            <p className="hero-fade font-mono text-micro tracking-wide text-blue uppercase" style={{ animationDelay: "0ms" }}>
              {s.eyebrow}
            </p>
            <h1 id="hero-title" className="mt-4 text-[2.4rem] leading-[1.06] md:text-[3.4rem] lg:mt-3 lg:min-h-[3.6em] lg:text-[clamp(2.5rem,6.2svh,3.75rem)]">
              <span className="block" style={s.scale ? { fontSize: `${s.scale}em` } : undefined}>
                <AnimatedTitle segs={s.title} />
              </span>
            </h1>
            <p className="hero-fade mt-6 max-w-xl text-lead text-graphite lg:mt-4 lg:min-h-[6.4em]" style={{ animationDelay: "350ms" }}>
              {s.body}
            </p>
            <div className="hero-fade mt-8 flex flex-wrap gap-3 lg:mt-6" style={{ animationDelay: "480ms" }}>
              <Button href={s.ctas[0].href}>{s.ctas[0].label}</Button>
              <Button href={s.ctas[1].href} variant="outline">
                {s.ctas[1].label}
              </Button>
            </div>
          </div>

          {/* Progress tabs + pause control */}
          <div
            className="mt-10 flex items-center gap-3 lg:mt-8"
            onMouseEnter={() => setHeld(true)}
            onMouseLeave={() => setHeld(document.hidden)}
          >
            <div role="tablist" aria-label="What we do" onKeyDown={onKey} className="grid flex-1 grid-cols-3 gap-2">
              {STATES.map((st, i) => (
                <button
                  key={st.tab}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`hero-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="hero-panel"
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="group text-left"
                >
                  <span className="block h-1 overflow-hidden rounded-full bg-navy/15">
                    <span
                      key={active === i ? `run-${active}` : `idle-${i}`}
                      className={cx(
                        "hero-progress block h-full rounded-full bg-brand",
                        active === i ? "is-active" : i < active ? "is-done" : "",
                      )}
                      style={{ animationDuration: `${INTERVAL_MS}ms` }}
                      onAnimationEnd={() => {
                        if (active === i && running) next();
                      }}
                    />
                  </span>
                  <span
                    className={cx(
                      "mt-2 block text-micro font-medium transition-colors duration-150 sm:text-small",
                      active === i ? "text-navy" : "text-gray group-hover:text-navy",
                    )}
                  >
                    {st.tab}
                  </span>
                </button>
              ))}
            </div>
            {!reduced && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                aria-label={paused ? "Play carousel" : "Pause carousel"}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-navy/20 bg-paper text-navy transition-colors duration-150 hover:border-navy"
              >
                {paused ? <Play size={15} /> : <Pause size={15} />}
              </button>
            )}
          </div>
        </div>

        <Reveal index={1}>
          <div key={active} className="collage-in">
            <PhotoCollage
              photos={s.photos}
              priority
              badge={<Stamp id="hero" size={124} />}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
