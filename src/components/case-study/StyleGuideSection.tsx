"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudyStyleGuide } from "@/data/caseStudies";

const ease = [0.22, 1, 0.36, 1] as const;

const fontVars: Record<string, string> = {
  "Plus Jakarta Sans": "var(--font-plus-jakarta)",
  Sora: "var(--font-sora)",
  Manrope: "var(--font-manrope)",
  "Instrument Sans": "var(--font-instrument-sans)",
  Poppins: "var(--font-poppins)",
  Nunito: "var(--font-nunito)",
  Inter: "var(--font-inter)",
  "Cormorant Garamond": "var(--font-cormorant)",
};

function isLight(hex: string) {
  const v = hex.replace("#", "");
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function SubLabel({ label }: { label: string }) {
  return (
    <p className="text-[20px] md:text-[22px] font-semibold text-[#101116] mb-6 md:mb-8">
      {label}
    </p>
  );
}

type SwatchItem =
  | { kind: "solid"; hex: string }
  | { kind: "gradient"; css: string; textColor?: "white" | "dark" };

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

  // Build unified swatch list
  const solidItems: SwatchItem[] = guide.colors.map((hex) => ({
    kind: "solid",
    hex,
  }));

  const gradItems: SwatchItem[] = guide.gradients.map((grad) => {
    if (typeof grad === "string") {
      return { kind: "gradient", css: grad };
    }
    return { kind: "gradient", css: grad.css, textColor: grad.textColor };
  });

  const allItems: SwatchItem[] = guide.gradientFirst
    ? [...gradItems, ...solidItems]
    : [...solidItems, ...gradItems];

  // Group into rows of 5
  const rows: SwatchItem[][] = [];
  for (let i = 0; i < allItems.length; i += 5) {
    rows.push(allItems.slice(i, i + 5));
  }

  const buttons = guide.buttons ?? [
    { label: "Button", filled: true },
    { label: "Button", filled: false, outline: true },
  ];

  return (
    <section className="mt-16 md:mt-20 xl:mt-24 space-y-12 md:space-y-16">
      {/* ── Title ───────────────────────────────────────────────────────────── */}
      <motion.div {...reveal}>
        <h2 className="font-Sora text-[30px] xl:text-[36px] font-bold tracking-[-0.03em] text-[#101116]">
          Design System
        </h2>
      </motion.div>

      {/* ── 1. Colors ───────────────────────────────────────────────────────── */}
      <motion.div {...reveal}>
        <SubLabel label="Colors" />

        <div className="space-y-3">
          {rows.map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-5 gap-3">
              {row.map((item, cIdx) => {
                if (item.kind === "solid") {
                  const hex = item.hex;
                  const light = isLight(hex);
                  return (
                    <div
                      key={`${hex}-${cIdx}`}
                      className={`h-16 sm:h-20 rounded-2xl flex items-center justify-center shadow-sm text-xs sm:text-[16px] md:text-[18px] font-medium tracking-wide select-all transition-transform hover:scale-[1.01] ${
                        light
                          ? "border border-black/10 text-[#101116]"
                          : "text-white"
                      }`}
                      style={{ backgroundColor: hex }}
                    >
                      {hex}
                    </div>
                  );
                }

                // Gradient swatch
                const isWhite =
                  item.textColor === "white" ||
                  (!item.textColor &&
                    (item.css.includes("#2196E3") ||
                      item.css.includes("#3B9BF0") ||
                      item.css.includes("#FF5916") ||
                      item.css.includes("#FF5816")));

                return (
                  <div
                    key={`grad-${cIdx}`}
                    className="h-16 sm:h-20 rounded-2xl shadow-sm flex items-center justify-center transition-transform hover:scale-[1.01]"
                    style={{ backgroundImage: item.css }}
                  >
                    <span
                      className={`text-xs sm:text-[16px] md:text-[18px] font-medium ${
                        isWhite ? "text-white" : "text-[#101116]"
                      }`}
                    >
                      Linear
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 2. Typography ───────────────────────────────────────────────────── */}
      <motion.div {...reveal}>
        <SubLabel label="Typography" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left: font name card + Aa card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="rounded-2xl border border-[#eceeed] bg-white px-6 py-6 flex text-center items-center justify-center shadow-sm h-[180px]">
              <span
                style={fontStyle}
                className="text-2xl md:text-[40px] font-semibold text-[#101116]"
              >
                {guide.fontFamily}
              </span>
            </div>

            <div className="rounded-2xl border border-[#eceeed] bg-white px-6 py-8 flex items-center justify-center shadow-sm min-h-[283px]">
              <span style={fontStyle} className="flex items-baseline select-none">
                <span
                  className="text-8xl sm:text-9xl font-bold leading-none"
                  style={{ color: guide.accent }}
                >
                  A
                </span>
                <span
                  className="text-7xl sm:text-8xl font-bold leading-none ml-1"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `2px ${guide.accent}`,
                  }}
                >
                  a
                </span>
              </span>
            </div>
          </div>

          {/* Right: type scale table */}
          <div className="lg:col-span-8" style={fontStyle}>
            <div className="grid grid-cols-2 gap-x-12 md:gap-x-16 mb-4 md:mb-6">
              <span
                className="text-[24px] md:text-[32px] font-bold"
                style={{ color: guide.accent }}
              >
                Name
              </span>
              <span
                className="text-[24px] md:text-[32px] font-bold"
                style={{ color: guide.accent }}
              >
                Font Size
              </span>
            </div>

            <ul className="space-y-1.5 md:space-y-2">
              {guide.typeScale.map((item, idx) => {
                const weight = idx < 1 ? 700 : idx < 3 ? 600 : idx < 5 ? 500 : 400;
                return (
                  <li
                    key={`${item.name}-${item.size}-${idx}`}
                    className="grid grid-cols-2 gap-x-12 md:gap-x-16 items-baseline text-[#101116]"
                    style={{ fontSize: `${item.size}px`, fontWeight: weight }}
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

      {/* 3. Buttons */}
      <motion.div {...reveal}>
        <SubLabel label="Buttons" />
        <div className="flex flex-wrap items-center gap-4">
          {buttons.map((btn, i) => {
            const roundedClass = btn.rounded ?? "rounded-xl";

            /* ── Disabled ── */
            if (btn.disabled) {
              const bg = btn.bg ?? "#15171C";
              const defaultText = isLight(bg)
                ? "rgba(0,0,0,0.35)"
                : "rgba(255,255,255,0.25)";
              return (
                <button
                  key={i}
                  disabled
                  className={`inline-flex items-center justify-center px-7 py-3 text-sm font-semibold cursor-not-allowed select-none ${roundedClass}`}
                  style={{
                    backgroundColor: bg,
                    color: btn.textColor ?? defaultText,
                  }}
                >
                  {btn.label}
                </button>
              );
            }

            /* ── Outline ── */
            if (btn.outline || (!btn.filled && !btn.gradient)) {
              const borderColor = btn.bg ?? guide.accent;
              const textColor = btn.textColor ?? btn.bg ?? guide.accent;
              return (
                <button
                  key={i}
                  className={`inline-flex items-center justify-center px-7 py-3 text-sm font-semibold transition-opacity hover:opacity-80 ${roundedClass}`}
                  style={{
                    backgroundColor: "white",
                    border: `1.5px solid ${borderColor}`,
                    color: textColor,
                  }}
                >
                  {btn.label}
                </button>
              );
            }

            /* ── Filled with gradient ── */
            if (btn.gradient) {
              return (
                <button
                  key={i}
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 ${roundedClass}`}
                  style={{ background: btn.gradient }}
                >
                  {btn.label}
                </button>
              );
            }

            /* ── Filled solid (default) ── */
            const bg = btn.bg ?? guide.accent;
            const textColor = btn.textColor ?? (isLight(bg) ? "#101116" : "#FFFFFF");
            return (
              <button
                key={i}
                className={`inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold shadow-sm transition-opacity hover:opacity-90 ${roundedClass}`}
                style={{
                  backgroundColor: bg,
                  color: textColor,
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
