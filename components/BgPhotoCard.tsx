import Image from "next/image";
import type { ReactNode } from "react";
import type { CardPhoto } from "@/content/cardPhotos";
import { cx } from "@/components/ui";

/**
 * Large module card with a full-bleed background photo under a blue overlay.
 * Hover: the photo zooms slowly, the overlay lightens to reveal more of it, the card lifts, and a
 * soft light sweep crosses the card (CSS `.card-sweep`). All transitions stop under reduced motion.
 */
export function BgPhotoCard({
  photo,
  tone = "navy",
  className,
  children,
}: {
  photo: CardPhoto;
  /** navy = deep navy overlay; blue = brand-blue overlay. */
  tone?: "navy" | "blue";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "group on-dark relative isolate flex h-full flex-col overflow-hidden rounded-card p-8 text-white/85 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(3_38_58_/_0.6)] md:p-10",
        className,
      )}
    >
      <Image
        src={photo.src}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="-z-20 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
      <div
        aria-hidden="true"
        className={cx(
          "absolute inset-0 -z-10 transition-opacity duration-500 group-hover:opacity-[0.86]",
          tone === "navy"
            ? "bg-gradient-to-br from-navy-950/95 via-navy/90 to-navy/75"
            : "bg-gradient-to-br from-[#03263a]/90 via-brand-600/88 to-brand/75",
        )}
      />
      <div aria-hidden="true" className="card-sweep pointer-events-none absolute inset-0 -z-10" />
      {children}
    </div>
  );
}
