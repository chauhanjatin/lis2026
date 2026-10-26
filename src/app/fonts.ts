import {
  Cormorant_Garamond,
  Instrument_Sans,
  Manrope,
  Sora,
} from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-instrument-sans",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
  variable: "--font-cormorant",
  fallback: ["Georgia", "serif"],
});

export const fontVariables = [
  manrope.variable,
  sora.variable,
  instrumentSans.variable,
  cormorantGaramond.variable,
].join(" ");
