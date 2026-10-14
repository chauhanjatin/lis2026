"use client";

import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Power,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "./PhoneMockup";
import { SolutionCarousel } from "./SolutionCarousel";
import { StyleGuideSection } from "./StyleGuideSection";
import { defaultKeyFindings, type CaseStudyData } from "@/data/caseStudies";

const ease = [0.22, 1, 0.36, 1] as const;

interface CaseStudyViewProps {
  data: CaseStudyData;
}

export function CaseStudyView({ data }: CaseStudyViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <article className="min-h-screen bg-white text-[#101116] pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <Container className="max-w-6xl">
        {/* Back navigation */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#707478] hover:text-[#101116] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Case Studies</span>
          </Link>
        </motion.div>

        {/* Eyebrow and Headline */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <span className="text-sm sm:text-[15px] font-semibold tracking-wider text-[#606468] uppercase">
            {data.eyebrow}
          </span>
          <h1 className="font-Sora text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.035em] text-[#101116] leading-[1.12] mt-2 sm:mt-3 max-w-4xl text-balance">
            {data.title}
          </h1>
        </motion.div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-10 items-start">
          <div className="lg:col-span-8">
          {/* Hero Showcase Card with 3 Phone Mockups */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#FAF2F8] via-[#FAF4FB] to-[#F5EBF7] p-6 sm:p-10 md:p-14 lg:px-6 lg:pt-10 lg:pb-36 border border-[#F1E4F0] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] overflow-hidden relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-64 sm:h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent"/>
            {data.heroImage ? (
              <>
                <Image
                  src={data.heroImage}
                  alt={`${data.meta.company.name} product preview`}
                  fill
                  preload
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="z-0 object-cover object-center"
                />
                <div aria-hidden className="h-[300px] sm:h-[360px] lg:h-[300px] xl:h-[340px]" />
              </>
            ) : (
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-6 lg:gap-0 lg:[zoom:0.62] xl:[zoom:0.72]">
              {data.heroScreens.map((screen, idx) => {
                const isCenter = idx === 1;
                const overlap =
                  idx === 0 ? "lg:-mr-10" : idx === 2 ? "lg:-ml-10" : "";
                return (
                  <motion.div
                    key={`${screen}-${idx}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease }}
                    className={`transition-transform duration-500 hover:scale-[1.03] ${overlap} ${
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
            )}

            {/* Project Meta Info Grid (4-cols) */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease }}
              className="absolute inset-x-0 bottom-0 z-30 grid grid-cols-2 md:grid-cols-[1fr_1.4fr_1.4fr_0.6fr] lg:grid-cols-2 gap-x-6 gap-y-5 md:gap-x-10 lg:gap-x-6 px-6 pb-6 sm:px-10 sm:pb-8 md:px-14 md:pb-10 lg:px-8 lg:pb-8"
            >
              <div className="flex flex-col gap-2 min-w-0 border-l border-white/25 pl-3 sm:pl-4">
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.12em] leading-none text-white/60 uppercase">
                  Company
                </span>
                {data.meta.company.url ? (
                  <a href={data.meta.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 font-Sora text-[15px] sm:text-base font-semibold leading-snug text-white hover:text-white/75 transition-colors"
                  >
                    <span>{data.meta.company.name}</span>
                    <ArrowUpRight size={15} className="stroke-[2.2] shrink-0" />
                  </a>
                ) : (
                  <span className="font-Sora text-[15px] sm:text-base font-semibold leading-snug text-white">
                    {data.meta.company.name}
                  </span>
                )}
              </div>

              {[
                { label: "Role", value: data.meta.role },
                { label: "Expertise", value: data.meta.expertise },
                { label: "Year", value: data.meta.year },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 min-w-0 border-l border-white/25 pl-3 sm:pl-4"
                >
                  <span className="text-xs sm:text-[13px] font-semibold tracking-[0.12em] leading-none text-white/60 uppercase">
                    {item.label}
                  </span>
                  <span className="font-Sora text-[15px] sm:text-base font-semibold leading-snug text-white text-pretty">
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {(data.tags ?? data.cardCategory.split("•").map((tag) => tag.trim())).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E5E7EB] bg-[#FAFBFD] px-3.5 py-1 text-xs font-medium text-[#606468] transition-colors hover:border-[#101116] hover:text-[#101116]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          </div>

          {/* Section 1: Project Description */}
          <section className="lg:col-span-4">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease }}
            >
              <h2 className="font-Sora text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#101116]">
                Project description
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#404347] max-w-3xl">
                {data.projectDescription.lead}
              </p>

              <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
                {data.projectDescription.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row lg:flex-col sm:items-start gap-2 sm:gap-10 lg:gap-2 pt-5 border-t border-[#f0f2f3]"
                  >
                    <div className="sm:w-48 lg:w-auto shrink-0">
                      <span className="text-sm sm:text-[15px] font-semibold text-[#151618] sm:text-[#8f9194]">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm sm:text-base leading-relaxed text-[#505357]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Section 2: Process */}
        <section>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#101116]">
            Problem statement
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#404347] max-w-3xl">
              {data.process.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.process.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row lg:flex-col sm:items-start gap-2 sm:gap-10 lg:gap-2 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-auto shrink-0">
                    <span className="text-sm sm:text-[15px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base leading-relaxed text-[#505357]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Solution */}
        <section>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#101116]">
            Challenge
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#404347] max-w-3xl">
              {data.solution.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.solution.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row lg:flex-col sm:items-start gap-2 sm:gap-10 lg:gap-2 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-auto shrink-0">
                    <span className="text-sm sm:text-[15px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base leading-relaxed text-[#505357]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
        </div>

        <SolutionCarousel slides={data.solutionSlides} gallery={data.gallery} />

        {/* Section 4: Key Findings */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}>
            <h2 className="font-Sora text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#101116]">
              Key Findings
            </h2>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {(data.keyFindings ?? defaultKeyFindings).map((finding, idx) => (
                <div
                  key={finding}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-56 shrink-0">
                    <span className="text-sm sm:text-[15px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base leading-relaxed text-[#505357]">{finding}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {data.styleGuide && <StyleGuideSection guide={data.styleGuide} />}

        {/* Section 5: Results */}
        <section className="mt-16 sm:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="font-Sora text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-[#101116]">
              Result
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#404347] max-w-3xl">
              {data.results.lead}
            </p>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {data.results.items.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10 pt-5 border-t border-[#f0f2f3]"
                >
                  <div className="sm:w-48 lg:w-56 shrink-0">
                    <span className="text-sm sm:text-[15px] font-semibold text-[#151618] sm:text-[#8f9194]">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base leading-relaxed text-[#505357]">
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