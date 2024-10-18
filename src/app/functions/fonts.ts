import { IBM_Plex_Sans, IBM_Plex_Mono, Be_Vietnam_Pro } from "next/font/google";

export const main_font_mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--main-font-mono",
  display: "swap",
});

export const main_font_sans = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--main-font-sans",
  display: "swap",
});

export const second_font = Be_Vietnam_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--secondary-font",
  display: "swap",
});
