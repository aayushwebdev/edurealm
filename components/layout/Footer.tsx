import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { CONTACT, HELPLINES } from "@/content/site";
import { Container } from "@/components/ui";
import { FooterCta } from "./FooterCta";

/*
 * Footer (reference layout): an optional call-to-action card (FooterCta, only on some pages), then a light footer with the logo and
 * helplines, a "Reach out to us" contact card beside the link columns, an oversized faded
 * wordmark, and a bottom bar. Helplines stay visible on every page.
 */

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/programs", label: "Student Hub" },
      { href: "/zeo", label: "ZEO Olympiad" },
      { href: "/media", label: "Media & Events" },
      { href: "/resources", label: "Free resources" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { href: "/institutions", label: "Institutional Services" },
      { href: "/partner", label: "NGO & CSR" },
      { href: "/impact", label: "Impact" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-paper text-small text-graphite">
      <FooterCta />

      <Container className="relative pt-14 md:pt-16">
        {/* Logo + helplines */}
        <div className="flex flex-col gap-5 border-b border-rule pb-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="eduRealm home" className="self-start">
            <Image src="/brand/edurealm-logo.png" alt="eduRealm: Scientia, Nexus, Crescendum" width={1188} height={342} className="h-10 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-small text-navy">Need help now? Free Government of India helplines</span>
            {HELPLINES.map((h) => (
              <a
                key={h.name}
                href={`tel:${h.tel}`}
                className="inline-flex items-center gap-2 rounded-full border border-rule bg-cream px-3 py-1.5 text-micro text-navy transition-colors duration-150 hover:border-navy/30"
              >
                <strong className="font-semibold">{h.name}</strong>
                <span className="font-mono">{h.number}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact card + link columns */}
        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <p className="text-small font-medium text-navy">Reach out to us</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-4 flex max-w-sm items-center gap-3 rounded-2xl border border-brand/20 bg-brand-tint p-4 transition-colors duration-150 hover:border-brand/50"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-brand-ink">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-small font-medium text-navy">Email us</span>
                <span className="block truncate text-micro text-graphite">{CONTACT.email}</span>
              </span>
            </a>
            <div className="mt-3 flex max-w-sm items-start gap-3 rounded-2xl border border-rule p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-navy">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <address className="text-micro text-graphite not-italic">{CONTACT.address}</address>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-small font-medium text-navy">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={`${col.title}-${l.label}`}>
                      <Link href={l.href} className="text-small text-graphite transition-colors duration-150 hover:text-navy">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </Container>

      {/* Oversized faded wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-6 text-center leading-[0.8] font-semibold tracking-[-0.05em] whitespace-nowrap select-none"
        style={{
          fontSize: "clamp(4.5rem, 19vw, 17rem)",
          backgroundImage: "linear-gradient(180deg, rgb(3 38 58 / 0.12) 0%, rgb(3 38 58 / 0) 90%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        eduRealm
      </p>

      {/* Bottom bar */}
      <Container className="flex flex-col gap-3 border-t border-rule py-6 text-micro text-gray sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 eduRealm. All rights reserved.</p>
        <ul className="flex gap-5">
          <li>
            <Link href="/privacy" className="hover:text-navy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-navy">
              Terms of Use
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
