import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  Eye,
  GraduationCap,
  Handshake,
  HeartPulse,
  Lightbulb,
  Globe,
  Newspaper,
  Play,
  Quote,
  School,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Container, IconBadge, PageHero, Ph, PhotoCard, PhotoFrame, Section, SectionHeading, Tag, cx } from "@/components/ui";
import { CARD_PHOTOS, type CardPhoto } from "@/content/cardPhotos";
import { PHOTOS } from "@/content/photos";

const INTRO =
  "An educational organization built on a simple promise: make learning modern, keep guidance honest, and protect the well-being of every student.";

export const metadata: Metadata = {
  title: "About Us",
  description: INTRO,
};

const VALUES: { icon: LucideIcon; title: string; body: string; photo: CardPhoto }[] = [
  { icon: HeartPulse, title: "Empathy & Life-First Guidance", body: "A student’s mental and physical health is always more important than any exam score.", photo: CARD_PHOTOS.motherDaughter },
  {
    icon: ShieldCheck,
    title: "Honesty & Transparency",
    body: "We do not sell false dreams, fake results, or unnecessary courses. We tell parents and institutions the truth.",
    photo: CARD_PHOTOS.twoWomenTalk,
  },
  { icon: Globe, title: "Inclusivity", body: "Talent exists everywhere. We actively bring our best tools to small towns, villages, and tribal belts.", photo: CARD_PHOTOS.slateSchool },
  {
    icon: Lightbulb,
    title: "Real-World Relevance",
    body: "We teach skills that actually matter in life and work, like clear thinking, emotional balance, and problem-solving.",
    photo: CARD_PHOTOS.indiaMap,
  },
  { icon: Handshake, title: "Collaboration", body: "Lasting change happens when schools, businesses, and communities work hand-in-hand.", photo: CARD_PHOTOS.underTree },
];

const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: GraduationCap, title: "Students", body: "Receive honest counseling, life skills, and scholarship opportunities." },
  { icon: School, title: "Institutions", body: "Receive modern curricula, teacher training, and industry connections." },
  { icon: Briefcase, title: "Industry Partners", body: "Provide sponsorship, mentorship, and real-world project experience." },
  { icon: Users, title: "Communities", body: "Gain access to free workshops, local language resources, and suicide prevention support." },
  { icon: Newspaper, title: "Educational Media", body: "Spreads helpful news, guidance, and research to the public for free." },
];

/* Bento layout for the five values on desktop: two wide cards, then three. */
const VALUE_SPAN = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

/** Decorative circle diagram for the ecosystem; the numbered list beside it carries the content. */
function EcosystemCircle() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 100 100" className="eco-ring absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgb(255 255 255 / 0.25)" strokeWidth="0.4" strokeDasharray="1.6 1.6" />
      </svg>
      <div className="absolute inset-[27%] rounded-full shadow-[0_0_80px_rgb(25_167_230_/_0.45)]">
        <Image src="/brand/edurealm-badge.webp" alt="" fill sizes="16rem" className="object-contain" />
      </div>
      {PILLARS.map((p, i) => {
        const a = ((-90 + i * 72) * Math.PI) / 180;
        return (
          <div
            key={p.title}
            className="absolute flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
            style={{ left: `${50 + 38 * Math.cos(a)}%`, top: `${50 + 38 * Math.sin(a)}%` }}
          >
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-navy-950 text-gold shadow-[0_0_0_6px_rgb(5_60_89)]">
              <p.icon size={22} />
            </span>
            <span className="text-micro font-medium text-white">{p.title}</span>
          </div>
        );
      })}
    </div>
  );
}

/* Motion: base reveal only, plus a very slow spin on the decorative ecosystem ring (off under reduced motion). */
export default function About() {
  return (
    <>
      {/* 1 · Hero */}
      <PageHero
        crumbs={[{ href: "/about", label: "About Us" }]}
        tag="About eduRealm"
        title={
          <>
            Who We Are &amp; Why We <em>Exist</em>
          </>
        }
        lead={INTRO}
        photo={PHOTOS.fiveKids}
      />

      {/* 2 · Our story */}
      <Section tone="paper" id="story" labelledBy="story-title">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Tag>Our story</Tag>
            <h2 id="story-title" className="mt-5 text-d3 md:text-d2">
              Why We Started <em>eduRealm</em>
            </h2>
            <PhotoFrame photo={PHOTOS.classroomWide} decorative className="mt-10 aspect-[4/3]" imgClassName="object-[center_70%]" />
          </Reveal>
          <Reveal index={1} className="space-y-6">
            <p className="rounded-card bg-cream p-7 text-body text-graphite md:p-8">
              For years, Indian education has been dominated by extreme competition, heavy commercialization, and one-size-fits-all
              coaching factories. Students are often pushed to their limits, while parents spend life savings on promises that rarely
              come true.
            </p>
            <p className="border-l-4 border-brand pl-6 text-lead text-navy md:pl-8">
              We created eduRealm to offer a healthier, smarter way forward. We believe every student deserves to understand their
              unique potential without fear or excessive pressure. By uniting schools, companies, and grassroots communities, we
              provide honest counseling, modern curricula, and dedicated safety nets for young minds across India.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 3 · Mission and vision */}
      <Section tone="tint" id="mission" labelledBy="mission-title">
        <Container>
          <h2 id="mission-title" className="sr-only">
            Mission and Vision
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="on-dark relative overflow-hidden rounded-card bg-navy p-8 text-white/80 md:p-12">
              <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0 opacity-50" />
              <div className="relative">
                <IconBadge>
                  <Target size={22} aria-hidden="true" />
                </IconBadge>
                <h3 className="mt-6 text-d3 text-white">
                  Our <em>Mission</em>
                </h3>
                <p className="mt-4 text-lead">
                  To connect students, schools, industries, and social organizations by delivering practical educational programs,
                  upskilling educators, and ensuring that children from Tier 2, Tier 3, rural, and tribal areas receive equal
                  opportunities to succeed.
                </p>
              </div>
            </Reveal>
            <Reveal index={1} className="rounded-card border border-brand/20 bg-paper p-8 md:p-12">
              <IconBadge tone="brand">
                <Eye size={22} aria-hidden="true" />
              </IconBadge>
              <h3 className="mt-6 text-d3">
                Our <em>Vision</em>
              </h3>
              <p className="mt-4 text-lead text-graphite">
                An educational ecosystem across India where learning brings confidence instead of anxiety, where schools prepare
                students for real life, and where every child has access to honest mentorship regardless of their family background.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4 · Core values */}
      <Section tone="cream" id="values" labelledBy="values-title">
        <Container>
          <Reveal>
            <SectionHeading
              tag="Our core values"
              id="values-title"
              title={
                <>
                  What We Stand <em>For</em>
                </>
              }
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} index={i} className={cx(VALUE_SPAN[i], i === 4 && "md:col-span-2")}>
                <PhotoCard photo={v.photo} icon={v.icon} label={String(i + 1).padStart(2, "0")} title={v.title} body={v.body} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 5 · Ecosystem model */}
      <Section tone="deep" id="ecosystem" labelledBy="ecosystem-title" className="overflow-hidden">
        <div aria-hidden="true" className="hero-blob pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand/25 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              dark
              tag="The ecosystem model"
              id="ecosystem-title"
              title={
                <>
                  How Everything <em>Connects</em>
                </>
              }
              lead="Our 5 pillars work together in a complete circle:"
            />
          </Reveal>
          <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
            <Reveal className="hidden lg:block">
              <EcosystemCircle />
            </Reveal>
            <ol className="space-y-3">
              {PILLARS.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  index={i}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 hover:bg-white/[0.08]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand font-mono text-small font-medium text-brand-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-d5 font-medium text-white">{p.title}</h3>
                    <p className="mt-1 text-body">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* 6 · Leadership message */}
      <Section tone="paper" id="leadership" labelledBy="leadership-title">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <Tag>Leadership message</Tag>
            <h2 id="leadership-title" className="mt-5 text-d3 md:text-d2">
              A Message From Our <em>Leadership</em>
            </h2>
            <figure className="mt-10">
              <Quote size={44} aria-hidden="true" className="text-brand" />
              <blockquote className="mt-4 text-d4 leading-snug font-medium text-navy">
                Our goal is not simply to help students pass exams; it is to help them build meaningful lives. When we protect a
                child&rsquo;s mental well-being and give them honest direction, their natural talent will always shine through.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-small text-graphite">
                <span aria-hidden="true" className="h-px w-10 bg-brand" />
                eduRealm Leadership
              </figcaption>
            </figure>
          </Reveal>
          <Reveal index={1}>
            {/* Video: placeholder poster until the introductory video is supplied */}
            <PhotoFrame photo={PHOTOS.groupSmiling} decorative overlay className="aspect-video">
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-paper/95 text-navy shadow-[var(--shadow-float)]">
                  <Play size={30} className="ml-1" aria-hidden="true" />
                </span>
              </div>
              <p className="absolute bottom-4 left-4 rounded-full bg-navy/80 px-4 py-1.5 text-micro font-medium text-white backdrop-blur">
                Introductory video
              </p>
            </PhotoFrame>
            <p className="mt-5 text-body text-graphite">
              Watch our short introductory video to learn more about our commitment to Indian education.
            </p>
            <Ph>video file or link to add</Ph>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
