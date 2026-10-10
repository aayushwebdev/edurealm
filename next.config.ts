import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Program detail pages were folded into Student Hub; keep old links working.
  async redirects() {
    return ["mind-before-marks", "informed-choice", "compass", "cognitive-skills", "founders-bootcamp"].map((slug) => ({
      source: `/programs/${slug}`,
      destination: "/programs/",
      permanent: true,
    }));
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
