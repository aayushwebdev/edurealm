import Image from "next/image";
import type { ReactNode } from "react";
import { unsplash, type Photo } from "@/content/photos";
import { cx } from "./primitives";

/** Rounded photo frame. Fills its box; set the box size with className (aspect-* or h-*). */
export function PhotoFrame({
  photo,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  overlay,
  children,
  decorative,
  imgClassName,
}: {
  photo: Photo;
  /** e.g. object-position for a better crop. */
  imgClassName?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Bottom gradient for text legibility. */
  overlay?: boolean;
  children?: ReactNode;
  decorative?: boolean;
}) {
  return (
    <div className={cx("photo-zoom relative overflow-hidden rounded-photo bg-cream-200", className)}>
      <Image
        src={unsplash(photo)}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cx("object-cover", imgClassName)}
      />
      {overlay && <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />}
      {children}
    </div>
  );
}

/**
 * Three-photo collage: one tall photo plus two stacked, slightly offset (agency / Nuova hero pattern).
 * `badge` sits over the seam (e.g. the Stamp); `chip` floats bottom-left.
 */
export function PhotoCollage({
  photos,
  badge,
  chip,
  priority,
  className,
}: {
  photos: [Photo, Photo, Photo];
  badge?: ReactNode;
  chip?: ReactNode;
  priority?: boolean;
  className?: string;
}) {
  const [a, b, c] = photos;
  return (
    <div className={cx("relative grid grid-cols-[1.15fr_1fr] gap-3 md:gap-4", className)}>
      <PhotoFrame photo={a} priority={priority} sizes="(min-width: 1024px) 30vw, 55vw" className="row-span-2 min-h-[22rem] md:min-h-[32rem]" />
      <PhotoFrame photo={b} priority={priority} sizes="(min-width: 1024px) 25vw, 45vw" className="mt-10 min-h-[10rem] md:min-h-[15rem]" />
      <PhotoFrame photo={c} sizes="(min-width: 1024px) 25vw, 45vw" className="min-h-[10rem] md:min-h-[15rem]" />
      {badge && <div className="absolute top-1/2 left-[53%] z-10 -translate-x-1/2 -translate-y-1/2">{badge}</div>}
      {chip && <div className="absolute bottom-5 left-5 z-10 max-w-[70%]">{chip}</div>}
    </div>
  );
}

/** Two-photo pair, second offset down (About / rural bands). */
export function PhotoPair({ photos, className, badge }: { photos: [Photo, Photo]; className?: string; badge?: ReactNode }) {
  return (
    <div className={cx("relative grid grid-cols-2 gap-3 md:gap-4", className)}>
      <PhotoFrame photo={photos[0]} sizes="(min-width: 1024px) 25vw, 50vw" className="aspect-[4/5]" />
      <PhotoFrame photo={photos[1]} sizes="(min-width: 1024px) 25vw, 50vw" className="mt-12 aspect-[4/5]" />
      {badge && <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">{badge}</div>}
    </div>
  );
}
