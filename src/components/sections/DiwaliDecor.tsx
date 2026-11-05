"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { CSSProperties } from "react";

type StyleVars = CSSProperties & Record<`--${string}`, string>;

const SWAGS = 6;
const CORD_W = 1000;
const CORD_H = 100;
const BULB_COLORS = ["#ff3b30", "#ffd60a", "#22c55e", "#38bdf8", "#ff4d8d", "#ff8a1e"];

type ToranPoint = { x: number; y: number };
type ToranBulb = { x: number; y: number; color: string; delay: string };

function swagPoint(index: number, t: number): ToranPoint {
  const x0 = (index / SWAGS) * CORD_W;
  const x1 = ((index + 1) / SWAGS) * CORD_W;
  const y0 = 12;
  const mid = Math.abs(index - (SWAGS - 1) / 2);
  const cy = 46 + (2.5 - mid) * 11;
  const cx = (x0 + x1) / 2;
  const u = 1 - t;
  return {
    x: u * u * x0 + 2 * u * t * cx + t * t * x1,
    y: u * u * y0 + 2 * u * t * cy + t * t * y0,
  };
}

const TORAN = (() => {
  const cords: string[] = [];
  const bulbs: ToranBulb[] = [];
  const drops: Array<{ x: number; y: number; delay: string; colors: string[] }> = [];
  let colorIndex = 0;

  const toPercent = (point: ToranPoint) => ({
    x: (point.x / CORD_W) * 100,
    y: (point.y / CORD_H) * 100,
  });
  const nextColor = () => BULB_COLORS[colorIndex++ % BULB_COLORS.length]!;
  const nextDelay = () => `${(colorIndex % 7) * 0.16}s`;

  for (let index = 0; index < SWAGS; index++) {
    const steps = 12;
    const points = Array.from({ length: steps + 1 }, (_, step) => swagPoint(index, step / steps));
    cords.push(
      points
        .map((point, step) => `${step === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
        .join(" "),
    );

    for (let step = 2; step < steps; step += 2) {
      if (step === 6) continue;
      const placed = toPercent(points[step]!);
      bulbs.push({ ...placed, color: nextColor(), delay: nextDelay() });
    }

    const valley = toPercent(swagPoint(index, 0.5));
    drops.push({
      ...valley,
      delay: `${index * 0.22}s`,
      colors: [nextColor(), nextColor(), nextColor()],
    });

    if (index === 0) {
      const peak = toPercent(swagPoint(0, 0));
      bulbs.push({ ...peak, color: nextColor(), delay: nextDelay() });
    }
  }

  const end = toPercent(swagPoint(SWAGS - 1, 1));
  bulbs.push({ ...end, color: nextColor(), delay: nextDelay() });

  return { cord: cords.join(" "), bulbs, drops };
})();

const PETALS = [
  { left: "7%", delay: "0s", duration: "13s", drift: "28px", color: "#f4a261", size: 11 },
  { left: "19%", delay: "2.6s", duration: "15s", drift: "-22px", color: "#e76f51", size: 9 },
  { left: "34%", delay: "5.1s", duration: "12s", drift: "16px", color: "#ffb703", size: 12 },
  { left: "51%", delay: "1.4s", duration: "14s", drift: "-18px", color: "#ff7a1a", size: 8 },
  { left: "66%", delay: "3.8s", duration: "13.5s", drift: "24px", color: "#e9c46a", size: 10 },
  { left: "78%", delay: "0.7s", duration: "16s", drift: "-14px", color: "#e76f51", size: 11 },
  { left: "90%", delay: "4.4s", duration: "12.5s", drift: "12px", color: "#ffb703", size: 9 },
];

const SPARKLES = [
  { left: "11%", top: "6.6rem", delay: "0s" },
  { left: "22%", top: "8.1rem", delay: "0.8s" },
  { left: "78%", top: "6.4rem", delay: "1.3s" },
  { left: "89%", top: "8.4rem", delay: "0.4s" },
];

const RAYS = 12;

function Firework({
  className,
  color,
  delay,
}: {
  className: string;
  color: string;
  delay: string;
}) {
  const style: StyleVars = { "--burst": color, "--delay": delay };

  return (
    <div className={`diwali-burst ${className}`} style={style}>
      <span className="diwali-rocket" />
      <span className="diwali-ring" />
      <span className="diwali-burst-core" />
      {Array.from({ length: RAYS }, (_, index) => (
        <span
          key={`ray-${index}`}
          className="diwali-ray"
          style={
            {
              "--r": `${index * (360 / RAYS)}deg`,
              "--len": index % 2 === 0 ? "20px" : "12px",
            } as StyleVars
          }
        />
      ))}
      {Array.from({ length: 8 }, (_, index) => (
        <span
          key={`dot-${index}`}
          className="diwali-dot"
          style={{ "--r": `${index * 45 + 18}deg` } as StyleVars}
        />
      ))}
    </div>
  );
}

function Bulb({ color, delay }: { color: string; delay: string }) {
  return (
    <span className="diwali-bulb" style={{ "--bulb": color, "--delay": delay } as StyleVars}>
      <span className="diwali-bulb-cap" />
      <span className="diwali-bulb-glass" />
    </span>
  );
}

function Sparkle({ style }: { style: StyleVars }) {
  return (
    <svg className="diwali-sparkle" style={style} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 0 9.3 6.1 16 8 9.3 9.9 8 16 6.7 9.9 0 8 6.7 6.1Z" fill="#ffd56a" />
    </svg>
  );
}

const SIDE_BURSTS = [
  { className: "diwali-side--l1", color: "#ffb703", delay: "0.2s" },
  { className: "diwali-side--l2", color: "#ff4d8d", delay: "1.7s" },
  { className: "diwali-side--l3", color: "#3dcec4", delay: "3.1s" },
  { className: "diwali-side--r1", color: "#c084fc", delay: "0.85s" },
  { className: "diwali-side--r2", color: "#ff9f1c", delay: "2.25s" },
  { className: "diwali-side--r3", color: "#ff5a36", delay: "3.7s" },
];

function HeadlineSide({ side }: { side: "left" | "right" }) {
  const bursts =
    side === "left"
      ? [
          { className: "diwali-headline-burst--a", color: "#ffb703", delay: "0.25s" },
          { className: "diwali-headline-burst--b", color: "#ff4d8d", delay: "1.55s" },
        ]
      : [
          { className: "diwali-headline-burst--a", color: "#c084fc", delay: "0.8s" },
          { className: "diwali-headline-burst--b", color: "#38bdf8", delay: "2.15s" },
        ];

  return (
    <div className={`diwali-headline-side diwali-headline-side--${side}`} aria-hidden="true">
      {bursts.map((burst) => (
        <Firework key={burst.className} className={burst.className} color={burst.color} delay={burst.delay} />
      ))}
      <Sparkle style={{ left: "46%", top: "10%", "--delay": side === "left" ? "0.4s" : "1.1s" }} />
      <Sparkle style={{ left: "74%", top: "58%", "--delay": side === "left" ? "1.3s" : "0.2s" }} />
    </div>
  );
}

export function HeadlineSides() {
  return (
    <>
      <HeadlineSide side="left" />
      <HeadlineSide side="right" />
    </>
  );
}

export function MarqueeFireworks() {
  return (
    <div className="diwali-marquee-fire" aria-hidden="true">
      {SIDE_BURSTS.map((burst) => (
        <Firework key={burst.className} className={burst.className} color={burst.color} delay={burst.delay} />
      ))}
    </div>
  );
}

function ToranLights() {
  return (
    <div className="diwali-lights">
        <svg
          className="diwali-toran-cord"
          viewBox={`0 0 ${CORD_W} ${CORD_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={TORAN.cord}
            fill="none"
            stroke="#163d28"
            strokeWidth="2.4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={TORAN.cord}
            fill="none"
            stroke="#2f8f55"
            strokeWidth="1.1"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {TORAN.bulbs.map((bulb) => (
          <span
            key={`bulb-${bulb.x.toFixed(2)}-${bulb.y.toFixed(2)}`}
            className="diwali-bulb diwali-bulb--strung"
            style={
              {
                left: `${bulb.x}%`,
                top: `${bulb.y}%`,
                "--bulb": bulb.color,
                "--delay": bulb.delay,
              } as StyleVars
            }
          >
            <span className="diwali-bulb-cap" />
            <span className="diwali-bulb-glass" />
          </span>
        ))}
        {TORAN.drops.map((drop) => (
          <span
            key={`drop-${drop.x.toFixed(2)}`}
            className="diwali-drop"
            style={{ left: `${drop.x}%`, top: `${drop.y}%`, animationDelay: drop.delay }}
          >
            <span className="diwali-drop-wire" />
            {drop.colors.map((color, index) => (
              <Bulb key={`${drop.x}-${index}`} color={color} delay={`${index * 0.18}s`} />
            ))}
          </span>
        ))}
    </div>
  );
}

export function DiwaliDecor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lights = <ToranLights />;

  return (
    <div className="diwali" aria-hidden="true">
      {mounted ? createPortal(lights, document.body) : lights}

      <Firework className="diwali-burst--a" color="#ffb703" delay="0.15s" />
      <Firework className="diwali-burst--b" color="#ff4d8d" delay="1.45s" />
      <Firework className="diwali-burst--c" color="#3dcec4" delay="2.55s" />
      <Firework className="diwali-burst--d" color="#c084fc" delay="3.5s" />

      {SPARKLES.map((sparkle) => (
        <Sparkle
          key={`${sparkle.left}-${sparkle.top}`}
          style={{ left: sparkle.left, top: sparkle.top, "--delay": sparkle.delay }}
        />
      ))}

    </div>
  );
}
