"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { aboutCTAData, type AboutCTA } from "@/data/about";

export function AboutCTASection({
  data = aboutCTAData,
}: {
  data?: AboutCTA;
}) {
  return (
    <section className="bg-white pb-20 pt-10 sm:pb-28 sm:pt-14">
      <Container>
        <ScrollReveal amount={0.3}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#111216] px-8 py-16 text-center text-white sm:px-14 sm:py-20 md:py-24 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            {/* Subtle atmospheric glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[22rem] w-[32rem] rounded-full bg-gradient-to-b from-[#42BFA5]/25 to-transparent blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#62D4DF]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#62D4DF]" />
                {data.eyebrow}
              </p>

              <h2 className="mt-5 font-Sora text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
                {data.title}
              </h2>

              <p className="mx-auto mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-[#9DA3AE]">
                {data.description}
              </p>

              <div className="mt-8 flex justify-center sm:mt-10">
                <Link
                  href={data.buttonHref}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold tracking-[-0.01em] text-[#111216] transition-all duration-300 hover:scale-[1.03] hover:bg-[#F3F4F6] shadow-[0_10px_25px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                >
                  <span>{data.buttonLabel}</span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2.2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
