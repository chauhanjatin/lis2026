"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  FileCheck2,
  PenTool,
  CheckCircle2,
  Code2,
  Smartphone,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { ServiceDetail, ServiceProcessStep } from "@/data/serviceDetails";

const iconMap = {
  compass: Compass,
  strategy: FileCheck2,
  design: PenTool,
  delivery: CheckCircle2,
  code: Code2,
  mobile: Smartphone,
  chart: TrendingUp,
};

function ProcessCard({
  step,
  index,
}: {
  step: ServiceProcessStep;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const IconComponent = iconMap[step.iconName] || Compass;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl border border-[#ECEEF2] bg-[#FAFBFD] p-6 sm:p-7 transition-all duration-300 hover:border-[#101116]/20 hover:bg-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="flex size-10 items-center justify-center rounded-xl bg-white border border-[#E5E7EB] text-[#101116] shadow-sm transition-transform duration-300 group-hover:scale-110">
            <IconComponent size={20} strokeWidth={1.75} />
          </span>
          <span className="font-mono text-xs font-semibold text-[#8E9296]">
            {step.step}
          </span>
        </div>

        <h3 className="mt-5 font-Sora text-base sm:text-[1.05rem] font-semibold tracking-tight text-[#101116]">
          {step.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-[0.875rem] leading-relaxed text-[#606468]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ServiceDetailPage({
  service,
}: {
  service: ServiceDetail;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative bg-white text-[#101116] pt-28 pb-24 sm:pt-36 sm:pb-32">
      <Container className="max-w-6xl">
        {/* Top Header Row */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between pb-8 sm:pb-12 border-b border-[#F0F1F3]"
        >
          <div className="max-w-3xl">
            <h1 className="font-Sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#101116]">
              {service.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#606468] max-w-2xl leading-relaxed">
              {service.subtitle}
            </p>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 lg:justify-end">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E5E7EB] bg-[#FAFBFD] px-4 py-1.5 text-xs font-medium text-[#606468] transition-colors hover:border-[#101116] hover:text-[#101116]">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image Banner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 sm:mt-12 aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl sm:rounded-[2rem] bg-[#F5F6F8] border border-black/5 shadow-sm"
        >
          <Image
            src={service.heroImage}
            alt={service.heroImageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </motion.div>

        {/* 4 Process Step Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {service.processSteps.map((step, index) => (
            <ProcessCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* Main Content Body */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto space-y-12 sm:space-y-16">
          {/* About The Service */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#101116]">
              {service.aboutTitle}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#55595F]">
              {service.aboutDescription}
            </p>
          </motion.section>

          {/* What's Included */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#101116]">
              {service.whatsIncludedTitle}
            </h2>
            <ul className="mt-5 space-y-3.5 pl-5 list-disc text-sm sm:text-base leading-relaxed text-[#55595F]">
              {service.whatsIncluded.map((item, idx) => (
                <li key={idx} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Our Approach */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#101116]">
              {service.approachTitle}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#55595F]">
              {service.approachDescription}
            </p>
          </motion.section>

          {/* The Results */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#101116]">
              {service.resultsTitle}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#55595F]">
              {service.resultsDescription}
            </p>
            <ul className="mt-5 space-y-3.5 pl-5 list-disc text-sm sm:text-base leading-relaxed text-[#55595F]">
              {service.results.map((item, idx) => (
                <li key={idx} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Mid Image Banner */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/9] sm:aspect-[2.2/1] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#F5F6F8] border border-black/5 shadow-sm"
          >
            <Image
              src={service.midImage}
              alt={service.midImageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </motion.div>

          {/* Conclusion */}
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-Sora text-2xl sm:text-3xl font-semibold tracking-tight text-[#101116]">
              {service.conclusionTitle}
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#55595F]">
              {service.conclusionDescription}
            </p>
          </motion.section>

     
        </div>
      </Container>
    </div>
  );
}
