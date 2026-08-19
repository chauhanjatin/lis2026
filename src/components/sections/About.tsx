"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  {
    label: "Completed Projects",
    value: 100,
    suffix: "+",
    description:
      "Products, platforms, and brand systems shipped from discovery through launch.",
    featured: false,
  },
  {
    label: "Satisfied Clients",
    value: 80,
    suffix: "+",
    description:
      "Startups and companies we partner with to design, build, and grow digital products.",
    featured: false,
  },
  {
    label: "Expert Team",
    value: 15,
    suffix: "+",
    description: "Designers, researchers, and engineers working as one adaptive studio team.",
    featured: true,
  },
] as const;

function AccentIcon({ type }: { type: "arrow" | "sparkle" }) {
  const Icon = type === "arrow" ? ArrowDown : Sparkles;
  const color = type === "arrow" ? "bg-[#dce5d7]" : "bg-[#e8ddcf]";

  return (
    <span
      aria-hidden="true"
      className={`inline-grid size-[0.9em] translate-y-[-0.03em] place-items-center rounded-full ${color} text-[#101010]`}
    >
      <Icon className="size-[0.48em]" strokeWidth={3} />
    </span>
  );
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function StatCard({
  label,
  value,
  suffix,
  description,
  featured,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  description: string;
  featured: boolean;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const counted = useCountUp(value, Boolean(inView && !reduceMotion));
  const display = reduceMotion ? value : counted;

  return (
    <motion.article
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[1.35rem] p-7 shadow-[0_10px_28px_rgba(24,30,36,0.07)] sm:p-8 ${
        featured ? "bg-[#e8ddcf] lg:min-h-[15.5rem]" : "bg-white"
      }`}
    >
      {featured ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[46%] bg-[radial-gradient(circle,_rgba(255,255,255,0.55)_1.15px,_transparent_1.4px)] bg-[length:14px_14px] opacity-80"
        />
      ) : null}

      <div className="relative z-[1] flex h-full min-h-[11.5rem] flex-col">
        <h3 className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#111111]">{label}</h3>
        <p className="mt-3 font-display text-[clamp(3.4rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.07em] text-[#111111]">
          <span>{display}</span>
          <span>{suffix}</span>
        </p>
        <p
          className={`mt-auto pt-8 max-w-[22rem] text-[0.92rem] leading-relaxed ${
            featured ? "text-[#1a1a1a]" : "text-[#6f7378]"
          }`}
        >
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function About() {
  return (
    <section id="company" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#242424]">
            <span className="mr-2 align-[0.08em] text-[0.5em]">●</span>
            About us
          </p>

          <h2 className="font-display text-balance text-[clamp(2rem,4.1vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.065em] text-[#101010]">
            <span className="block">A global consulting partner</span>
            <span className="block">
              dedicated to building <AccentIcon type="arrow" /> smarter
            </span>
            <span className="block text-[#858585]">
              and <AccentIcon type="sparkle" /> more adaptive
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-5">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={index * 0.12} />
          ))}
        </div>
      </Container>
    </section>
  );
}
