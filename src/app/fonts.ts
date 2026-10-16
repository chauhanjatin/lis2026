import {
  Cormorant_Garamond,
  Instrument_Sans,
  Manrope,
  Nunito,
  Plus_Jakarta_Sans,
  Sora,
} from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

// Only used in a few sections, so they are not preloaded on every page.
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-cormorant",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-plus-jakarta",
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-nunito",
});

export const fontVariables = [
  manrope.variable,
  sora.variable,
  instrumentSans.variable,
  cormorantGaramond.variable,
  plusJakartaSans.variable,
  nunito.variable,
].join(" ");
