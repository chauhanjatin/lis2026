"use client";

import { Container } from "@/components/ui/Container";
import {
  ScrollReveal,
  ScrollStagger,
  ScrollItem,
  fadeUp,
} from "@/components/ui/ScrollReveal";
import { aboutValues, type AboutValue } from "@/data/about";

export function AboutValuesSection({
  values = aboutValues,
}: {
  values?: AboutValue[];
}) {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <ScrollReveal className="mx-auto max-w-3xl text-center" amount={0.35}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
            Core Philosophy
          </p>
          <h2 className="mt-4 font-Sora text-3xl font-semibold tracking-[-0.03em] text-[#101010] sm:text-4xl md:text-5xl">
            Values that shape every{" "}
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              pixel & line of code.
            </span>
          </h2>
          <p className="mt-4 text-base text-[#606468]">
            We uphold strict standards to ensure our partnerships deliver enduring value.
          </p>
        </ScrollReveal>

        <ScrollStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val) => (
            <ScrollItem key={val.number} variants={fadeUp}>
              <div className="group relative flex h-full flex-col justify-between rounded-[1.35rem] border border-[#E5E7EB] bg-[#FAFBFB] p-7 transition-all duration-300 hover:border-[#D1D5DB] hover:bg-white hover:shadow-[0_12px_32px_rgba(20,24,30,0.06)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-[#8E9298]">
                      {val.number}
                    </span>
                    <span className="rounded-full bg-[#EBF0F5] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wider text-[#354556] transition-colors group-hover:bg-[#0D4FB8]/10 group-hover:text-[#0D4FB8]">
                      {val.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-Sora text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#606468]">
                    {val.description}
                  </p>
                </div>
              </div>
            </ScrollItem>
          ))}
        </ScrollStagger>
      </Container>
    </section>
  );
}
