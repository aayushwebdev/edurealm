import Link from "next/link";
import type { ReactNode } from "react";
import { HELPLINES, PROGRAMS } from "@/content/site";
import { Container, Ph } from "@/components/ui";

/*
 * Footer — reference layout: five link columns, a hairline divider, address + copyright
 * with social icons, and an oversized faded wordmark bleeding off the bottom edge.
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
      { href: "/about#ethics", label: "Ethics charter" },
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
      { href: "/about#ethics", label: "Our ethics charter" },
    ],
  },
];

/* Minimal brand glyphs (the icon library no longer ships brand logos). */
const SOCIAL: { name: string; svg: ReactNode }[] = [
  {
    name: "LinkedIn",
    svg: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />,
  },
  {
    name: "X",
    svg: <path d="M17.7 3H21l-7.2 8.2L22 21h-6.6l-5.2-6.7L4.3 21H1l7.7-8.8L1 3h6.8l4.7 6.2L17.7 3Zm-1.2 16h1.8L6.7 5H4.8l11.7 14Z" />,
  },
  {
    name: "Instagram",
    svg: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.3" cy="6.7" r="1.2" />
      </>
    ),
  },
  {
    name: "Facebook",
    svg: <path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.5V10H7v4h2.5v8h4v-8H17l.6-4h-4.1V8.7c0-.4.3-.7.5-.7Z" />,
  },
];

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-small text-white/75">
      <Container className="relative pt-16 md:pt-20">
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
                <Ph>email</Ph>
              </li>
              <li>
                <Ph>phone</Ph>
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

        {/* Divider + address / copyright / socials */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3 text-body text-white">
            <p>
              <Ph>office address</Ph>
            </p>
            <p>© 2026 eduRealm. All rights reserved.</p>
          </div>
          <ul className="flex gap-3" aria-label="Social media (handles to be confirmed)">
            {SOCIAL.map((s) => (
              <li key={s.name}>
                {/* Not links yet — handles are unconfirmed. Swap the span for <a href> once live. */}
                <span title={`${s.name} — coming soon`} className="grid h-9 w-9 place-items-center rounded-full bg-white text-navy-950">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    {s.svg}
                  </svg>
                  <span className="sr-only">{s.name} (coming soon)</span>
                </span>
              </li>
            ))}
          </ul>
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
