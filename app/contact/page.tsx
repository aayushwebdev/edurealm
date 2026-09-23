import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Map as MapIcon, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { CompareTable, PageSection } from "@/components/sections";
import { QUICK, ROUTING } from "@/content/pages/contact";
import { HelplineBar, PageHero, Ph, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get in touch",
  description: "One form, routed by role: Parent · School · Company · NGO/Government.",
};

const INFO = [
  { icon: MapPin, label: "Office", value: <Ph>to add</Ph> },
  { icon: Phone, label: "Phone", value: <Ph>to add</Ph> },
  { icon: Mail, label: "Email", value: <Ph>to add</Ph> },
  { icon: MapIcon, label: "Where we work", value: <Ph>states covered</Ph> },
];

/** From the routing table (content/pages/contact.tsx). */
const RESPONSE = [
  { who: "Parents & schools", when: "2 business days" },
  { who: "Companies, NGOs & government", when: "3 business days" },
];

/** DRAFT (content strategist booking flow). */
const NEXT = ["We read your message and route it to the right team.", "We reply with a proposed format, timing, and cost.", "We agree a date — and handle the rest."];

/* Motion: base reveal only. Helplines above the fold, not after the form. */
export default function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/contact", label: "Contact" }]}
        tag="Parent · School · Company · NGO/Government"
        title={
          <>
            Get in <em>touch</em>
          </>
        }
        lead="One form, routed by role: Parent · School · Company · NGO/Government."
        aside={<HelplineBar large />}
      />
      <section id="form" aria-labelledby="form-title" className="scroll-mt-28 px-3 pt-10 pb-16 md:px-6 md:pb-24">
        <Reveal className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[36px] border border-rule bg-paper shadow-[var(--shadow-float)] lg:grid-cols-[1.45fr_1fr]">
          {/* Form */}
          <div className="p-6 sm:p-10 lg:p-14">
            <Tag>Send us a message</Tag>
            <h2 id="form-title" className="mt-5 text-d3 md:text-[2.75rem]">
              How can we <em>help</em>?
            </h2>
            <p className="mt-3 max-w-lg text-body text-graphite">Tell us who you are and what you need. Your message goes straight to the right team.</p>
            <div className="mt-10">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          {/* Side card */}
          <aside className="on-brand relative overflow-hidden bg-gradient-to-br from-brand to-brand-600 p-6 sm:p-10 lg:p-12">
            <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="dot-texture-light pointer-events-none absolute right-0 bottom-0 h-1/2 w-2/3 opacity-60" />
            <div className="relative flex h-full flex-col gap-8">
              <div>
                <Tag brand>Contact details</Tag>
                <h2 className="mt-5 text-d4">Talk to eduRealm</h2>
              </div>

              <ul className="grid gap-3">
                {INFO.map((r) => (
                  <li key={r.label} className="flex items-center gap-4 rounded-2xl bg-white/30 p-4 backdrop-blur">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-600">
                      <r.icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-micro font-medium tracking-wide uppercase opacity-75">{r.label}</p>
                      <div className="mt-0.5 text-small font-medium">{r.value}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-white p-5 text-navy">
                <p className="text-small font-medium">Typical response time</p>
                <dl className="mt-3 divide-y divide-rule">
                  {RESPONSE.map((r) => (
                    <div key={r.who} className="flex items-center justify-between gap-4 py-2.5 text-small">
                      <dt className="text-graphite">{r.who}</dt>
                      <dd className="shrink-0 rounded-full bg-brand-tint px-3 py-1 font-medium">{r.when}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="text-small font-medium">What happens next</p>
                <ol className="mt-3 space-y-3">
                  {NEXT.map((n, i) => (
                    <li key={n} className="flex gap-3 text-small">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-ink font-mono text-micro text-white">{i + 1}</span>
                      <span className="pt-1">{n}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </aside>
        </Reveal>
      </section>
      <PageSection id="routing" tone="paper" tag="Who to contact for what" title={<>One form, routed by <em>role</em></>}>
        <CompareTable caption="What to write to us about, by role" head={ROUTING.head} rows={ROUTING.rows} />
      </PageSection>

      <PageSection id="quick" tone="brand" tag="Quick links" title={<>Looking for something <em>specific</em>?</>}>
        <ul className="flex flex-wrap gap-3">
          {QUICK.map((q) => (
            <li key={q.href}>
              <Link
                href={q.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/20 bg-paper px-5 text-small font-medium text-navy hover:border-navy"
              >
                {q.label} <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
