"use client";

import { Fragment, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { BOOK_SCHOOL_HREF } from "@/content/site";
import { Button, cx } from "@/components/ui";

/*
 * Homepage hero — full-screen photo carousel (100% width and height, no outer margin).
 * Each slide's photo fills the section; the photos carry a soft light fade on the left, which a cream
 * gradient reinforces so the copy stays legible. Exactly one viewport tall on desktop.
 *
 * Motion per slide change: photo crossfades and settles from a slight zoom, headline words rise in,
 * body + CTAs fade up. Auto-advance is driven by the active dot's progress animation (7s).
 * WCAG 2.2.2: pauses on hover over the controls, on keyboard focus inside the hero, when the browser
 * tab is hidden, and via a visible pause button. Under prefers-reduced-motion it never auto-advances.
 */

const INTERVAL_MS = 7000;

type Seg = { t: string; em?: boolean };

const SLIDES: {
  tab: string;
  eyebrow: string;
  title: Seg[];
  body: string;
  ctas: { label: string; href: string }[];
  photo: { src: string; alt: string };
}[] = [
  {
    tab: "Mental Health & Resilience",
    eyebrow: "Mental Health & Resilience",
    title: [{ t: "Strengthen Young Minds: Suicide Prevention &" }, { t: "Awareness", em: true }],
    body: "Equipping parents, students, and educators to navigate modern pressures. Our expert-led workshops tackle the root causes of student distress—from academic anxiety and competitive exams to social media vanity and family dynamics.",
    ctas: [
      { label: "Book a Workshop", href: BOOK_SCHOOL_HREF },
      { label: "View Workshop Details", href: "/programs/mind-before-marks" },
    ],
    photo: { src: "/hero/slide-1.webp", alt: "A student talks openly with a counsellor in a calm, sunlit room" },
  },
  {
    tab: "Beware of Coaching Tactics",
    eyebrow: "Beware of Coaching Tactics",
    title: [{ t: "Education Over Exploitation: Uncovering Coaching" }, { t: "Tactics", em: true }],
    body: "Protect your child from the commercialization of education. Learn directly from neutral, former industry insiders who expose the hidden academic tactics, false promises, teenage validation traps and psychological baits used by modern coaching centers and their faculty.",
    ctas: [
      { label: "Book a School Workshop", href: BOOK_SCHOOL_HREF },
      { label: "Learn the Truth", href: "/programs/informed-choice" },
    ],
    photo: { src: "/hero/slide-2.webp", alt: "A parent and her daughter read through brochures together at a table" },
  },
  {
    tab: "Rural Empowerment",
    eyebrow: "Rural Empowerment",
    title: [{ t: "Empowering Youth in Tier 2, 3 & Rural" }, { t: "Towns", em: true }],
    body: "Bridging the opportunity gap for underprivileged young minds. We provide dedicated mentorship, academic guidance, personality development, and entrepreneurial training to help every student unlock their true potential.",
    ctas: [
      { label: "Partner with us", href: "/partner" },
      { label: "Sponsor a student", href: "/partner#csr" },
    ],
    photo: { src: "/hero/slide-3.webp", alt: "Two students cycle out of a school gate on a sunny rural morning" },
  },
];

/** Splits the headline into words so each can rise in with a stagger. */
function AnimatedTitle({ segs }: { segs: Seg[] }) {
  let i = 0;
  return (
    <>
      {segs.map((s, si) =>
        s.t.split(" ").map((w, wi) => {
          const word = (
            <span className="hero-word" style={{ animationDelay: `${i++ * 55}ms` }}>
              {w}
            </span>
          );
          // The space sits outside the inline-block: a trailing space inside one collapses.
          return (
            <Fragment key={`${si}-${wi}`}>
              <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">{s.em ? <em>{word}</em> : word}</span>{" "}
            </Fragment>
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
  const next = () => setActive((a) => (a + 1) % SLIDES.length);

  const onKey = (e: KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    const to = e.key === "Home" ? 0 : e.key === "End" ? SLIDES.length - 1 : (active + delta + SLIDES.length) % SLIDES.length;
    if (delta || e.key === "Home" || e.key === "End") {
      e.preventDefault();
      setActive(to);
      tabs.current[to]?.focus();
    }
  };

  const s = SLIDES[active];

  return (
    <section
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cream lg:h-[100svh] lg:min-h-[600px]"
      onFocus={(e) => {
        // Hold only for keyboard focus; a mouse click on a control shouldn't freeze the carousel.
        if ((e.target as HTMLElement).matches(":focus-visible")) setHeld(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(document.hidden);
      }}
      data-running={String(running)}
    >
      {/* Photos — full bleed */}
      {SLIDES.map((sl, i) => (
        <div key={sl.photo.src} aria-hidden={active !== i} className={cx("hero-slide absolute inset-0", active === i && "is-active")}>
          <Image
            src={sl.photo.src}
            alt={active === i ? sl.photo.alt : ""}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-[72%_center] lg:object-center"
          />
        </div>
      ))}
      {/* Cream wash from the left keeps the copy legible; on phones it covers the whole photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cream/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-cream lg:via-cream/75 lg:via-40% lg:to-transparent lg:to-65%"
      />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1368px] flex-1 flex-col justify-center px-8 pt-28 pb-10 md:px-11 lg:pt-[5.5rem] lg:pb-6">
        <div className="max-w-[40rem]">
          <p className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-paper/80 p-1 pr-4 text-small text-navy backdrop-blur">
            <span className="rounded-full bg-brand px-3 py-1 text-micro font-medium text-brand-ink">eduRealm</span>
            We work for the student.
          </p>

          {/* Active slide — key replays the entrance animation. Headline and body reserve 3 and 5 lines
              on desktop so the layout doesn't jump between slides. */}
          <div key={active} id="hero-panel" role="tabpanel" aria-labelledby={`hero-tab-${active}`}>
            <p className="hero-fade mt-6 font-mono text-micro tracking-wide text-blue uppercase">{s.eyebrow}</p>
            <h1
              id="hero-title"
              className="mt-3 text-[2.3rem] leading-[1.05] tracking-[-0.025em] text-navy md:text-[3.2rem] lg:min-h-[3.15em] lg:text-[clamp(2.3rem,6svh,3.6rem)]"
            >
              <AnimatedTitle segs={s.title} />
            </h1>
            <p className="hero-fade mt-4 max-w-xl text-body text-graphite lg:min-h-[8em]" style={{ animationDelay: "350ms" }}>
              {s.body}
            </p>
            <div className="hero-fade mt-6 flex flex-wrap gap-3" style={{ animationDelay: "480ms" }}>
              <Button href={s.ctas[0].href} variant="dark">
                {s.ctas[0].label}
              </Button>
              <Button href={s.ctas[1].href} variant="outline" className="bg-paper/70 backdrop-blur">
                {s.ctas[1].label}
              </Button>
            </div>
          </div>

          {/* Slide controls */}
          <div className="mt-6 flex items-center gap-3 lg:mt-[clamp(1rem,3svh,2rem)]" onMouseEnter={() => setHeld(true)} onMouseLeave={() => setHeld(document.hidden)}>
            <div role="tablist" aria-label="Hero slides" onKeyDown={onKey} className="flex items-center gap-2">
              {SLIDES.map((sl, i) => (
                <button
                  key={sl.tab}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`hero-tab-${i}`}
                  aria-selected={active === i}
                  aria-controls="hero-panel"
                  aria-label={sl.tab}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  className="grid h-6 place-items-center"
                >
                  <span
                    className={cx(
                      "block h-1.5 overflow-hidden rounded-full bg-navy/20 transition-[width] duration-500",
                      active === i ? "w-14" : "w-6 hover:bg-navy/35",
                    )}
                  >
                    <span
                      key={active === i ? `run-${active}` : `idle-${i}`}
                      className={cx("hero-progress block h-full rounded-full bg-brand", active === i && "is-active")}
                      style={{ animationDuration: `${INTERVAL_MS}ms` }}
                      onAnimationEnd={() => {
                        if (active === i && running) next();
                      }}
                    />
                  </span>
                </button>
              ))}
            </div>
            <span className="font-mono text-micro text-navy/70">
              {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            {!reduced && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-pressed={paused}
                aria-label={paused ? "Play slides" : "Pause slides"}
                className="grid h-8 w-8 place-items-center rounded-full border border-navy/20 bg-paper/80 text-navy transition-colors duration-150 hover:border-navy"
              >
                {paused ? <Play size={13} /> : <Pause size={13} />}
              </button>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
