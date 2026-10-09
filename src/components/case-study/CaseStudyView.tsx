"use client";

import React, { use } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles, Power } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "./PhoneMockup";
import { SolutionCarousel } from "./SolutionCarousel";
import type { CaseStudyData } from "@/data/caseStudies";

const ease = [0.22, 1, 0.36, 1] as const;

interface CaseStudyViewProps {
  data: CaseStudyData;
}

export function CaseStudyView({ data }: CaseStudyViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="min-h-screen bg-white text-[#101116] pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <Container className="max-w-5xl">
        {/* Back navigation */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#707478] hover:text-[#101116] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Case Studies</span>
          </Link>
        </motion.div>

        {/* Eyebrow and Headline */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}>
          <span className="text-xs sm:text-[13px] font-semibold tracking-wider text-[#606468] uppercase">
            {data.eyebrow}
          </span>
          <h1 className="font-Sora text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.035em] text-[#101116] leading-[1.12] mt-2 sm:mt-3 max-w-4xl text-balance">
            {data.title}
          </h1>
        </motion.div>

        {/* Project Meta Info Grid (4-cols) */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
          className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-[#eceeed]"
        >
          <div>
            <span className="block text-[11px] font-semibold tracking-wider text-[#8f9194] uppercase">
              Company
            </span>
            {data.meta.company.url ? (
              <a
                href={data.meta.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 font-Sora text-sm sm:text-base font-semibold text-[#101116] hover:text-[#0D4FB8] transition-colors"
              >
                <span>{data.meta.company.name}</span>
                <ArrowUpRight size={15} className="stroke-[2.2]" />
              </a>
            ) : (
              <span className="mt-1.5 block font-Sora text-sm sm:text-base font-semibold text-[#101116]">
                {data.meta.company.name}
              </span>
            )}
          </div>

          <div>
            <span className="block text-[11px] font-semibold tracking-wider text-[#8f9194] uppercase">
              Role
            </span>
            <span className="mt-1.5 block font-Sora text-sm sm:text-base font-semibold text-[#101116]">
              {data.meta.role}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-semibold tracking-wider text-[#8f9194] uppercase">
              Expertise
            </span>
            <span className="mt-1.5 block font-Sora text-sm sm:text-base font-semibold text-[#101116]">
              {data.meta.expertise}
            </span>
          </div>

          <div>
            <span className="block text-[11px] font-semibold tracking-wider text-[#8f9194] uppercase">
              Year
            </span>
            <span className="mt-1.5 block font-Sora text-sm sm:text-base font-semibold text-[#101116]">
              {data.meta.year}
            </span>
          </div>
        </motion.div>

        {/* Hero Showcase Card with 3 Phone Mockups */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.22, ease }}
          className="mt-10 sm:mt-14 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#FAF2F8] via-[#FAF4FB] to-[#F5EBF7] p-6 sm:p-10 md:p-14 border border-[#F1E4F0] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-10">
            {data.heroScreens.map((screen, idx) => {
              const isCenter = idx === 1;
              return (
                <motion.div
                  key={`${screen}-${idx}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease }}
                  className={`transition-transform duration-500 hover:scale-[1.03] ${
                    isCenter
                      ? "order-first md:order-none z-10 scale-[1.03] md:scale-105"
                      : "opacity-90 md:opacity-95"
                  }`}
                >
                  <PhoneMockup type={screen} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 1: Project Description */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#101116]">
              Project description
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#404347] max-w-3xl">
              {data.projectDescription.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.projectDescription.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-56 shrink-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#505357]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 2: Process */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#101116]">
              Process
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#404347] max-w-3xl">
              {data.process.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.process.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-56 shrink-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#505357]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Solution */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#101116]">
              Solution
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#404347] max-w-3xl">
              {data.solution.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.solution.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-56 shrink-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#505357]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Carousel */}
          <SolutionCarousel slides={data.solutionSlides} />
        </section>

        {/* Section 4: Results */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-[#101116]">
              Results
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#404347] max-w-3xl">
              {data.results.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.results.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-56 shrink-0">
                    <span className="text-xs sm:text-[13px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm leading-relaxed text-[#505357]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

      </Container>
    </article>
  );
}
