"use client";

import type { CSSProperties } from "react";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/data/testimonials";

const deckPalette = ["#e9ecf5", "#dff4f0"] as const;

type DeckSpot = { top: string; left: string; rotate: number; zIndex: number };

/** Scatter (default) + tidy grid (hover) — left-only so size/align stay consistent. */
function getDeckLayout(index: number, total: number): { scatter: DeckSpot; hover: DeckSpot } {
  const rotations = [-9, 3, 10, -16, 14, -6, 8];

  if (total === 7) {
    const scatter: DeckSpot[] = [
      { top: "4.5rem", left: "2%", rotate: -9, zIndex: 1 },
      { top: "0.5rem", left: "24%", rotate: 2, zIndex: 2 },
      { top: "3rem", left: "46%", rotate: 9, zIndex: 1 },
      { top: "1rem", left: "68%", rotate: -4, zIndex: 2 },
      { top: "17rem", left: "10%", rotate: -18, zIndex: 4 },
      { top: "15rem", left: "36%", rotate: 12, zIndex: 5 },
      { top: "16.5rem", left: "62%", rotate: 16, zIndex: 3 },
    ];
    const hover: DeckSpot[] = [
      { top: "0", left: "0", rotate: 0, zIndex: 1 },
      { top: "0", left: "calc((100% - var(--deck-card-w)) / 3)", rotate: 0, zIndex: 2 },
      { top: "0", left: "calc(2 * ((100% - var(--deck-card-w)) / 3))", rotate: 0, zIndex: 3 },
      { top: "0", left: "calc(100% - var(--deck-card-w))", rotate: 0, zIndex: 4 },
      // Same gap as top row, centered under the four cards
      { top: "22.5rem", left: "calc((100% - var(--deck-card-w)) / 6)", rotate: 0, zIndex: 5 },
      { top: "22.5rem", left: "calc((100% - var(--deck-card-w)) / 2)", rotate: 0, zIndex: 6 },
      { top: "22.5rem", left: "calc(5 * (100% - var(--deck-card-w)) / 6)", rotate: 0, zIndex: 7 },
    ];
    return { scatter: scatter[index], hover: hover[index] };
  }

  if (total <= 5) {
    const scatter: DeckSpot[] = [
      { top: "4.5rem", left: "4%", rotate: -9, zIndex: 1 },
      { top: "0", left: "33%", rotate: 0, zIndex: 2 },
      { top: "4.5rem", left: "66%", rotate: 9, zIndex: 1 },
      { top: "17rem", left: "18%", rotate: -20, zIndex: 4 },
      { top: "14rem", left: "52%", rotate: 18, zIndex: 3 },
    ];
    const hover: DeckSpot[] = [
      { top: "0", left: "0", rotate: 0, zIndex: 1 },
      { top: "0", left: "calc((100% - var(--deck-card-w)) / 2)", rotate: 0, zIndex: 2 },
      { top: "0", left: "calc(100% - var(--deck-card-w))", rotate: 0, zIndex: 3 },
      { top: "22.5rem", left: "calc((100% - var(--deck-card-w)) / 4)", rotate: 0, zIndex: 4 },
      { top: "22.5rem", left: "calc(3 * (100% - var(--deck-card-w)) / 4)", rotate: 0, zIndex: 5 },
    ];
    return { scatter: scatter[index], hover: hover[index] };
  }

  const cols = Math.min(total, 4);
  const row = Math.floor(index / cols);
  const col = index % cols;
  const step = cols === 1 ? 0 : 75 / (cols - 1);
  const hoverLeft = col * step;
  const scatterLeft = hoverLeft + (row % 2 === 0 ? 2 : 6);
  const itemsInRow = row === Math.floor((total - 1) / cols) ? total - row * cols : cols;
  const hoverOffset = cols === itemsInRow ? 0 : ((cols - itemsInRow) * step) / 2;

  return {
    scatter: {
      top: `${row === 0 ? (col % 2 === 0 ? 3.5 : 0.5) : 16 + row}rem`,
      left: `${scatterLeft}%`,
      rotate: rotations[index % rotations.length],
      zIndex: index + 1,
    },
    hover: {
      top: `${row * 22.5}rem`,
      left: `${hoverOffset + hoverLeft}%`,
      rotate: 0,
      zIndex: index + 1,
    },
  };
}

export function Testimonials() {
  const cards = testimonials;
  const cols = Math.min(cards.length, 4);
  const rows = Math.ceil(cards.length / cols);

  return (
    <>
      {/* ============ TESTIMONIALS — START ============ */}
      <Section id="testimonials" className="mb-[15rem]">
        <Eyebrow>What clients say</Eyebrow>
        <Heading size="lg" className="max-w-2xl">
          Social proof.
        </Heading>
        <p className="mt-5 max-w-xl text-muted">
          A few words from the people we have had the pleasure of working with.
        </p>
        <div
          className="testimonial-deck mt-12"
          tabIndex={0}
          style={{ "--deck-rows": rows } as CSSProperties}
        >
          {cards.map((t, index) => {
            const layout = getDeckLayout(index, cards.length);
            return (
              <blockquote
                key={`${t.name}-${index}`}
                className="testimonial-deck-card"
                style={
                  {
                    "--card-top": layout.scatter.top,
                    "--card-left": layout.scatter.left,
                    "--card-hover-top": layout.hover.top,
                    "--card-hover-left": layout.hover.left,
                    "--card-rotate": `${layout.scatter.rotate}deg`,
                    "--card-z": layout.scatter.zIndex,
                    "--card-hover-z": layout.hover.zIndex,
                    background: deckPalette[index % deckPalette.length],
                  } as CSSProperties
                }
              >
                <span className="testimonial-deck-quote" aria-hidden="true">
                  &ldquo;
                </span>
                <p>{t.quote}</p>
                <footer>
                  <span />
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </Section>
      {/* ============ TESTIMONIALS — END ============ */}
    </>
  );
}
