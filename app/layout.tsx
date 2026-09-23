import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Noto_Sans_Devanagari } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionQA } from "@/components/motion/MotionQA";
import { Spotlight } from "@/components/motion/Spotlight";
import { CALM_PATH } from "@/content/site";
import "./globals.css";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["italic"], variable: "--font-instrument", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });
const notoDeva = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-deva", display: "swap", preload: false });

/* Before paint: mark JS as available (reveal initial states never hide content without JS),
   and flag the Mind Before Marks route as "calm" — shared chrome drops all gold there. */
const INIT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');if(location.pathname.indexOf('${CALM_PATH}')===0)d.dataset.calm='';})()`;

export const metadata: Metadata = {
  title: { default: "eduRealm — We work for the student.", template: "%s · eduRealm" },
  description:
    "Ethical education consultancy, India. Suicide prevention and academic pressure support, coaching tactics awareness, and free scholarships for rural and Tier 2/3 students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${instrument.variable} ${plexMono.variable} ${notoDeva.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* General Sans (Fontshare, free for commercial use) — display + body */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,400i&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: INIT_SCRIPT }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionQA />
        <Spotlight />
      </body>
    </html>
  );
}
