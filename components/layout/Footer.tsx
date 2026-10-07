import Image from "next/image";
import Link from "next/link";
import { CONTACT, HELPLINES, PROGRAMS } from "@/content/site";
import { Container } from "@/components/ui";

/*
 * Footer — reference layout: five link columns, a hairline divider, address + copyright
 * and an oversized faded wordmark bleeding off the bottom edge.
 * Static, no animation ever. Helplines stay visible (Contact column).
 */

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Programs",
    links: PROGRAMS.map((p) => ({ href: `/programs/${p.slug}`, label: p.name })),
  },
  {
    title: "eduRealm",
    links: [
      { href: "/about", label: "About us" },
      { href: "/impact", label: "Impact" },
      { href: "/media", label: "Media" },
      { href: "/resources", label: "Free resources" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { href: "/institutions", label: "For schools & colleges" },
      { href: "/partner", label: "CSR & corporates" },
      { href: "/partner#ngo", label: "NGOs & government" },
      { href: "/zeo", label: "ZEO Olympiad" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms of use" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-small text-white/75">
      <Container className="relative pt-16 md:pt-20">
        {/* Brand row */}
        <div className="mb-12 flex flex-col gap-5 border-b border-white/15 pb-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="eduRealm home" className="self-start">
            <Image src="/brand/edurealm-logo-white.png" alt="eduRealm: Scientia, Nexus, Crescendum" width={1208} height={348} className="h-14 w-auto" />
          </Link>
          <p className="max-w-sm text-body text-white/75">Ethical education consultancy, India. We work for the student.</p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-body font-medium text-white">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l.label}`}>
                    <Link href={l.href} className="transition-colors duration-150 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 md:col-span-1">
            <p className="text-body font-medium text-white">Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/contact" className="transition-colors duration-150 hover:text-white">
                  Get in touch
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors duration-150 hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            {/* Helplines — always visible */}
            <p className="mt-6 text-micro font-medium tracking-wide text-white uppercase">Need help now? Call free</p>
            <ul className="mt-2 space-y-1.5">
              {HELPLINES.map((h) => (
                <li key={h.name}>
                  <a href={`tel:${h.tel}`} className="text-white underline-offset-4 hover:underline">
                    {h.name} <span className="font-mono">{h.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + address / copyright */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-body text-white md:flex-row md:items-start md:justify-between md:gap-10">
          <address className="max-w-md not-italic">{CONTACT.address}</address>
          <p className="shrink-0">© 2026 eduRealm. All rights reserved.</p>
        </div>
      </Container>

      {/* Oversized faded wordmark, cut off by the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-4 -mb-[0.2em] text-center leading-[0.8] font-semibold tracking-[-0.05em] whitespace-nowrap select-none"
        style={{
          fontSize: "clamp(5rem, 22vw, 21rem)",
          backgroundImage: "linear-gradient(180deg, rgb(255 255 255 / 0.2) 0%, rgb(255 255 255 / 0.02) 85%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        eduRealm
      </p>
    </footer>
  );
}
