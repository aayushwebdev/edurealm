/** next/image loader for the static export: Unsplash URLs get a width-matched `w` param
    (so phones fetch small photos); anything else is served as-is. */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (!src.includes("images.unsplash.com")) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}
