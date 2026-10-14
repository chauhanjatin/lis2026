"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudyStyleGuide } from "@/data/caseStudies";

const ease = [0.22, 1, 0.36, 1] as const;

const fontVars: Record<string, string> = {
  "Plus Jakarta Sans": "var(--font-plus-jakarta)",
  Sora: "var(--font-sora)",
  Manrope: "var(--font-manrope)",
  "Instrument Sans": "var(--font-instrument-sans)",
};

const tilts = ["-rotate-[4deg]", "rotate-[3deg]", "-rotate-[3deg]", "rotate-[4deg]"];

function isLight(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="font-Sora text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#101116] pb-5 ">
      {label}
    </h2>
  );
}

export function StyleGuideSection({ guide }: { guide: CaseStudyStyleGuide }) {
  const reduceMotion = useReducedMotion();
  const fontStyle = {
    fontFamily: `${fontVars[guide.fontFamily] ?? `"${guide.fontFamily}"`}, sans-serif`,
  };

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease },
  } as const;

  return (
    <section className="mt-16 sm:mt-24 space-y-12 sm:space-y-16">
      <motion.div {...reveal}>
        <SectionHeading label="Design System" />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[minmax(0,15rem)_1fr] gap-8 md:gap-12">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 content-start">
            <div className="flex items-center justify-center rounded-2xl border border-[#eceeed] bg-white px-4 py-6 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.12)]">
              <span style={fontStyle} className="text-center text-lg sm:text-xl font-medium text-[#101116]">
                {guide.fontFamily}
              </span>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-[#eceeed] bg-white px-4 py-6 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.12)]">
              <span style={fontStyle} className="text-6xl sm:text-7xl font-bold leading-none" aria-hidden>
                <span style={{ color: guide.accent }}>A</span>
                <span style={{ color: "transparent", WebkitTextStroke: `1.5px ${guide.accent}` }} className="font-normal">
                  a
                </span>
              </span>
            </div>
          </div>  

          <div style={fontStyle}>
            <div className="grid grid-cols-[1fr_auto] sm:grid-cols-2 gap-x-6 pb-3">
              <span className="text-sm sm:text-base font-semibold" style={{ color: guide.accent }}>
                Name
              </span>
              <span className="text-sm sm:text-base font-semibold" style={{ color: guide.accent }}>
                Font Size
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              {guide.typeScale.map((item, idx) => {
                const fontSize = `clamp(${Math.max(item.size * 0.3, 10)}px, ${item.size / 22}vw, ${Math.max(item.size * 0.5, 11)}px)`;
                const weight = idx < 3 ? 700 : idx < 5 ? 600 : 400;
                return (
                  <li
                    key={`${item.name}-${item.size}`}
                    className="grid grid-cols-[1fr_auto] sm:grid-cols-2 gap-x-6 items-baseline text-[#101116] leading-tight"
                    style={{ fontSize, fontWeight: weight }}
                  >
                    <span>{item.name}</span>
                    <span>{item.size} px</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div {...reveal}>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 max-w-2xl mx-auto px-2">
          <div className="flex flex-col">
            {guide.colors.map((hex, idx) => (
              <div
                key={hex}
                className={`${tilts[idx % tilts.length]} ${idx > 0 ? "-mt-3" : ""} relative flex h-16 sm:h-[4.5rem] items-center justify-center rounded-xl shadow-[0_10px_25px_-12px_rgba(0,0,0,0.35)] ${
                  isLight(hex) ? "border border-[#eceeed] text-[#101116]" : "text-white"
                }`}
                style={{ backgroundColor: hex, zIndex: idx + 1 }}
              >
                <span className="text-xs sm:text-sm font-medium tracking-wide">{hex}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {guide.gradients.map((gradient, idx) => (
              <div
                key={gradient}
                className={`${tilts[(idx + 1) % tilts.length]} ${idx > 0 ? "-mt-3" : ""} relative h-16 sm:h-[4.5rem] rounded-xl shadow-[0_10px_25px_-12px_rgba(0,0,0,0.35)]`}
                style={{ backgroundImage: gradient, zIndex: idx + 1 }}
              />
            ))}
          </div>          
        </div>
      </motion.div>
    </section>
  );
}