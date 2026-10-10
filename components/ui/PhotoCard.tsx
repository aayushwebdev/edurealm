import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { CardPhoto } from "@/content/cardPhotos";
import { cx } from "./primitives";

/**
 * Idea/feature card with a photo header. The icon badge overlaps the photo's bottom edge.
 * Hover (or keyboard focus on a linked card): the card lifts, the photo zooms slowly, the icon
 * tilts, and a brand bar grows along the bottom. All transitions stop under reduced motion.
 */
export function PhotoCard({
  photo,
  icon: Icon,
  title,
  body,
  label,
  footer,
  href,
  featured,
  headingLevel = 3,
  className,
}: {
  photo: CardPhoto;
  icon?: LucideIcon;
  title: ReactNode;
  body?: ReactNode;
  /** Small chip on the photo, e.g. "Pillar 1". */
  label?: string;
  footer?: ReactNode;
  /** Makes the whole card a link. */
  href?: string;
  /** Highlighted card: navy border and gold icon. */
  featured?: boolean;
  headingLevel?: 2 | 3;
  className?: string;
}) {
  const H = `h${headingLevel}` as const;
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-mist">
        <Image
          src={photo.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] group-focus-visible:scale-[1.07]"
          style={photo.position ? { objectPosition: photo.position } : undefined}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
        {label && (
          <span className="absolute top-3 right-3 rounded-full bg-paper/95 px-3 py-1 font-mono text-micro text-navy backdrop-blur">
            {label}
          </span>
        )}
      </div>
      {Icon && (
        <span
          aria-hidden="true"
          className={cx(
            "relative z-10 -mt-7 ml-5 grid h-14 w-14 place-items-center rounded-full ring-4 ring-paper transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6",
            featured ? "bg-gold text-navy" : "bg-navy text-gold",
          )}
        >
          <Icon size={22} />
        </span>
      )}
      <div className={cx("flex flex-1 flex-col px-5 pb-6", Icon ? "pt-4" : "pt-5")}>
        <H className="text-d5 leading-snug font-medium text-navy">{title}</H>
        {body && <div className="mt-2 flex-1 text-body text-graphite">{body}</div>}
        {footer && <div className="mt-5">{footer}</div>}
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-[width] duration-500 ease-out group-hover:w-full group-focus-visible:w-full"
      />
    </>
  );
  const cls = cx(
    "group relative flex h-full flex-col overflow-hidden rounded-card border bg-paper p-3 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-float)]",
    featured ? "border-navy" : "border-rule hover:border-brand/40",
    className,
  );
  return href ? (
    <Link href={href} className={cx(cls, "focus-visible:-translate-y-1.5")}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
