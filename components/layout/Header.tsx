"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BOOK_HREF, CALM_PATH, NAV } from "@/content/site";
import { cx } from "@/components/ui/primitives";
import { Mark } from "./Mark";

export { Mark };

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  // Keep the calm (no-gold) flag in sync on client-side navigation.
  useEffect(() => {
    const d = document.documentElement;
    if (pathname.startsWith(CALM_PATH)) d.dataset.calm = "";
    else delete d.dataset.calm;
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Floating pill nav */}
      {/* Same container as the homepage hero text, so the bar's edges line up with it */}
      <div className="mx-auto max-w-[1440px] px-3 pt-3 md:px-8 lg:px-12">
        <div
          className={cx(
            "flex h-14 w-full items-center justify-between gap-6 rounded-full border bg-paper/95 pr-2 pl-5 backdrop-blur transition-shadow duration-200",
            scrolled ? "border-rule shadow-[var(--shadow-float)]" : "border-transparent",
          )}
        >
          <Link href="/" className="flex shrink-0 items-center" aria-label="eduRealm home">
            <Image src="/brand/edurealm-logo.png" alt="eduRealm: Scientia, Nexus, Crescendum" width={1188} height={342} priority className="h-9 w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5 rounded-full bg-cream p-1 text-[0.8125rem]">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={isActive(n.href) ? "page" : undefined}
                    className={cx(
                      "block rounded-full px-2.5 py-1.5 whitespace-nowrap transition-colors duration-150",
                      isActive(n.href) ? "bg-navy text-white" : "text-navy hover:bg-paper",
                    )}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={BOOK_HREF}
              className="hidden min-h-10 items-center whitespace-nowrap rounded-full bg-gold px-5 text-small font-medium text-navy transition-colors duration-150 hover:bg-[#f2c64f] sm:inline-flex"
            >
              Book A Session
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full bg-navy text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="fixed inset-x-3 top-[4.5rem] bottom-3 overflow-y-auto rounded-card bg-navy p-6 text-white xl:hidden"
      >
        <ul className="flex flex-col">
          {[...NAV, { href: "/impact", label: "Impact" }, { href: "/resources", label: "Free resources" }, { href: "/contact", label: "Contact" }].map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={cx("block border-b border-white/10 py-4 text-d5", isActive(n.href) && "text-gold")}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={BOOK_HREF}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-small font-medium text-navy"
        >
          Book A Session
        </Link>
      </nav>
    </header>
  );
}
