"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";
import {
  ScrollReveal,
  ScrollStagger,
  ScrollItem,
  fadeUp,
} from "@/components/ui/ScrollReveal";
import { aboutStats, type AboutStat } from "@/data/about";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return active ? value : 0;
}

function StatCard({
  label,
  value,
  suffix,
  description,
  featured,
}: AboutStat) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const counted = useCountUp(value, Boolean(inView && !reduceMotion));
  const display = reduceMotion ? value : counted;

  return (
    <ScrollItem variants={fadeUp}>
      <article
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] p-7 shadow-[0_10px_28px_rgba(24,30,36,0.07)] transition-transform duration-300 hover:-translate-y-1 sm:p-8",
          featured
            ? "bg-gradient-to-r from-[#42BFA5] to-[#0D4FB8] text-white lg:min-h-[15.5rem]"
            : "bg-white text-[#111111]",
        )}
      >
        <div className="relative z-[1] flex h-full min-h-[11.5rem] flex-col">
          <h3
            className={cn(
              "text-[0.95rem] font-semibold tracking-[-0.02em]",
              featured ? "text-white/90" : "text-[#111111]",
            )}
          >
            {label}
          </h3>
          <p className="mt-3 font-Sora text-[clamp(3.4rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.07em]">
            <span>{display}</span>
            <span>{suffix}</span>
          </p>
          <p
            className={cn(
              "mt-auto max-w-[22rem] pt-8 text-[0.92rem] leading-relaxed",
              featured ? "text-white/85" : "text-[#6f7378]",
            )}
          >
            {description}
          </p>
        </div>
      </article>
    </ScrollItem>
  );
}

export function AboutStatsSection({
  stats = aboutStats,
}: {
  stats?: AboutStat[];
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center" amount={0.35}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
            Proven Track Record
          </p>
          <h2 className="mt-4 font-Sora text-3xl font-semibold tracking-[-0.03em] text-[#101010] sm:text-4xl md:text-5xl">
            Numbers that validate our{" "}
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              craft.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </ScrollStagger>
      </Container>
    </section>
  );
}
