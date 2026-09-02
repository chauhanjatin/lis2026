"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";
import {
  ScrollReveal,
  ScrollStagger,
  ScrollItem,
  fadeUp,
} from "@/components/ui/ScrollReveal";

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
    label: "Expert Team",
    value: 15,
    suffix: "+",
    description:
      "Designers, researchers, and engineers working as one adaptive studio team.",
    featured: true,
  },
  {
    label: "Satisfied Clients",
    value: 80,
    suffix: "+",
    description:
      "Startups and companies we partner with to design, build, and grow digital products.",
    featured: false,
  },
] as const;

function AccentIcon({ type }: { type: "arrow" | "sparkle" }) {
  const Icon = type === "arrow" ? ArrowDown : Sparkles;
  const color = type === "arrow" ? "bg-[#dce5d7]" : "bg-[]";

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
}: {
  label: string;
  value: number;
  suffix: string;
  description: string;
  featured: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const counted = useCountUp(value, Boolean(inView && !reduceMotion));
  const display = reduceMotion ? value : counted;

  return (
    <ScrollItem variants={fadeUp}>
      <article
        ref={ref}
        className={`relative overflow-hidden rounded-[1.35rem] p-7 shadow-[0_10px_28px_rgba(24,30,36,0.07)] sm:p-8 ${
          featured
            ? "bg-gradient-to-r from-[#42BFA5] to-[#0D4FB8] lg:min-h-[15.5rem]"
            : "bg-white"
        }`}
      >
        <div className="relative z-[1] flex h-full min-h-[11.5rem] flex-col">
          <h3 className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#111111]">
            {label}
          </h3>
          <p className="mt-3 font-Sora text-[clamp(3.4rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.07em] text-[#111111]">
            <span>{display}</span>
            <span>{suffix}</span>
          </p>
          <p
            className={`mt-auto max-w-[22rem] pt-8 text-[0.92rem] leading-relaxed ${
              featured ? "text-[#1a1a1a]" : "text-[#6f7378]"
            }`}
          >
            {description}
          </p>
        </div>
      </article>
    </ScrollItem>
  );
}

export function About({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="company" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {!hideHeader && (
          <ScrollReveal className="mx-auto max-w-5xl text-center" amount={0.35}>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
              About us
            </p>

            <h2 className="font-Sora text-balance text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-[#101010] sm:text-6xl md:text-7xl mt-7">
              Smarter consulting for
              <br />
              <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
                adaptive </span> businesses.
            </h2>
          </ScrollReveal>
        )}

        <ScrollStagger
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-5",
            hideHeader ? "mt-0" : "mt-14 sm:mt-16 lg:mt-20",
          )}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </ScrollStagger>
      </Container>
    </section>
  );
}