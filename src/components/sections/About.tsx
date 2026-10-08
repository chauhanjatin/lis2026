"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      if (progress < 1) frame = requestAnimationFrame(tick);
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
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] p-7 shadow-[0_10px_28px_rgba(24,30,36,0.07)] sm:p-8",
          featured
            ? "bg-gradient-to-r from-[#42BFA5] to-[#0D4FB8] lg:min-h-[15.5rem]"
            : "bg-white",
        )}
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
            className={cn(
              "mt-auto max-w-[22rem] pt-8 text-[0.92rem] leading-relaxed",
              featured ? "text-[#1a1a1a]" : "text-[#6f7378]",
            )}
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
    <section
      id="company"
      className={cn(
        "bg-white",
        hideHeader
          ? "pb-20 pt-14 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
          : "py-20 sm:py-24 lg:py-28",
      )}
    >
      <Container>
        {!hideHeader && (
          <ScrollReveal className="w-full" amount={0.3}>
            {/* Tag / Badge */}
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#202224]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#0D4FB8]"
                />
                About us
              </p>
            </div>

            {/* Headline and Right Paragraph & Link */}
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-end">
              {/* Left Column: Headline with formatted line breaks and italic serif emphasis */}
              <div className="lg:col-span-8">
                <h2 className="font-Sora text-3xl font-medium leading-[1.2] tracking-[-0.035em] text-[#101116] sm:text-4xl md:text-5xl lg:text-[3.25rem] max-w-3xl">
                  We help brands grow through creative strategy, thoughtful design, and impactful digital experiences that inspire{" "}
                  <span className="font-serif italic font-normal text-[#101116]">
                    connections and lasting value.
                  </span>
                </h2>
              </div>

              {/* Right Column: Paragraph and Link */}
              <div className="flex flex-col justify-end space-y-5 lg:col-span-4 lg:pb-1">
                <p className="text-sm leading-relaxed text-[#606468] sm:text-[0.95rem] max-w-[22rem]">
                  We deliver innovative creative solutions, combining design,
                  strategy, and technology to elevate brands and drive
                  meaningful business growth.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#101116] underline underline-offset-4 decoration-1 transition-colors hover:text-[#0D4FB8]"
                  >
                    <span>Get Quick Answer</span>
                    <ArrowRight
                      size={15}
                      strokeWidth={2.2}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollStagger
          className={cn(
            "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5",
            hideHeader ? "mt-10 sm:mt-12 lg:mt-14" : "mt-12 sm:mt-16 lg:mt-20",
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