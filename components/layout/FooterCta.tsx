"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, HeartHandshake, School, Trophy, type LucideIcon } from "lucide-react";
import { BOOK_HREF } from "@/content/site";
import { Container } from "@/components/ui";

/**
 * "Ready to start?" card above the footer. Shown only on pages that don't already end with their
 * own call to action (ZEO, Impact, the program pages, etc. have one), so it never doubles up.
 */
const SHOW_ON = ["/", "/about", "/partner"];

/* Floating tiles around the call-to-action card (decorative) */
const TILES: { icon: LucideIcon; className: string; delay: string }[] = [
  { icon: GraduationCap, className: "top-8 left-[7%] -rotate-6", delay: "0s" },
  { icon: Trophy, className: "top-10 right-[8%] rotate-6", delay: "1.2s" },
  { icon: HeartHandshake, className: "bottom-10 left-[4%] rotate-3", delay: "0.6s" },
  { icon: School, className: "right-[5%] bottom-12 -rotate-3", delay: "1.8s" },
];

export function FooterCta() {
  const path = (usePathname() || "/").replace(/\/$/, "") || "/";
  if (!SHOW_ON.includes(path)) return null;
  return (
    <Container className="pt-6 md:pt-10">
      <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-gradient-to-br from-brand via-brand-600 to-navy px-6 py-14 text-center text-white shadow-[0_30px_60px_-30px_rgb(14_143_204_/_0.7)] md:px-16 md:py-16">
        <div aria-hidden="true" className="hero-rings pointer-events-none absolute inset-0 -z-10 opacity-60" />
        {TILES.map((t) => (
          <span
            key={t.className}
            aria-hidden="true"
            className={`float-tile absolute hidden h-14 w-14 place-items-center rounded-2xl bg-white text-brand-600 shadow-[0_12px_30px_-10px_rgb(3_38_58_/_0.45)] md:grid ${t.className}`}
            style={{ animationDelay: t.delay }}
          >
            <t.icon size={24} />
          </span>
        ))}
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-micro font-medium ring-1 ring-white/30 backdrop-blur">
          We work for the student.
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl text-d2 text-white">
          Ready to <em>start</em>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-body text-white/85">
          Honest guidance, safer campuses, and real opportunity for students across India. Tell us what you need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={BOOK_HREF}
            className="group/cta inline-flex min-h-11 items-center gap-3 rounded-full bg-navy-950 py-1.5 pr-6 pl-1.5 text-small font-medium text-white shadow-[0_10px_24px_-10px_rgb(3_38_58_/_0.8)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-white">
              <Image src="/brand/edu-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
            </span>
            Book A Session
          </Link>
          <Link
            href="/partner"
            className="inline-flex min-h-11 items-center rounded-full px-6 text-small font-medium text-white ring-1 ring-white/50 transition-colors duration-200 hover:bg-white/10"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </Container>
  );
}
