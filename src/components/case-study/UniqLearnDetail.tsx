"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

function SectionPill({ label }: { label: string }) {
  return (
    <div className="relative my-12 sm:my-16 md:my-20 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-black/10" />
      </div>
      <span className="relative z-10 rounded-full border border-black/15 bg-white px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#333] shadow-sm">
        {label}
      </span>
    </div>
  );
}

export function UniqLearnDetail() {
  const reduceMotion = useReducedMotion();

  return (
    <article className="min-h-screen bg-white text-[#111111] pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-28 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <Container className="max-w-6xl">
        {/* Navigation Bar */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-8 flex items-center justify-between"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#606468] hover:text-[#111] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Case Studies</span>
          </Link>

          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5516] bg-[#FF5516]/10 px-3 py-1 rounded-full">
            EDTECH • CLASSROOM OS
          </span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-[#FFEFE8] to-[#FFF9F6] border border-[#FF5516]/15 shadow-xl flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative w-full h-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/uniqlearn.png"
              alt="UniqLearn Web Dashboard Platform Showcase"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>
        </motion.div>

        {/* 1. Project Overview */}
        <SectionPill label="Project Overview" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-3xl border-2 border-[#FF5516]/40 bg-gradient-to-br from-[#FFFBF8] to-[#FFF6F0] p-7 sm:p-10 md:p-12 text-center shadow-sm">
            <p className="text-lg sm:text-2xl md:text-[1.75rem] leading-relaxed text-[#2D2A26] font-medium">
              <span className="inline-block bg-[#FF5516] text-white font-bold px-3 py-1 rounded-xl text-base sm:text-xl align-middle mr-2.5 shadow-sm">
                UniqLearn
              </span>
              is a web-based classroom management platform that connects{" "}
              <strong className="text-[#111] font-extrabold underline decoration-[#FF5516] decoration-2 underline-offset-4">
                teachers
              </strong>{" "}
              and{" "}
              <strong className="text-[#111] font-extrabold underline decoration-[#FF5516] decoration-2 underline-offset-4">
                students
              </strong>{" "}
              in one shared workspace.
            </p>
          </div>
        </motion.div>

        {/* 2. Typography - Exact Figma Design */}
        <SectionPill label="Typography" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >
          {/* Left Font Identification Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {/* Top Card: Plus Jakarta Sans */}
            <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
                Plus Jakarta Sans
              </span>
            </div>

            {/* Bottom Card: "Aa" (Solid Orange A + Outlined Orange a) */}
            <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9 flex items-center justify-center shadow-sm min-h-[190px] sm:min-h-[220px]">
              <div className="flex items-baseline select-none">
                <span className="text-8xl sm:text-9xl font-bold text-[#FF5916] leading-none tracking-tight">
                  A
                </span>
                <span
                  className="text-7xl sm:text-8xl font-bold text-transparent leading-none ml-1"
                  style={{
                    WebkitTextStroke: "2.5px #FF5916",
                  }}
                >
                  a
                </span>
              </div>
            </div>
          </div>

          {/* Right Typography Scale Table (No container, clean canvas) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Table Header: Name and Font Size in Orange */}
            <div className="grid grid-cols-2 pb-2 mb-2 text-base sm:text-lg font-bold text-[#FF5916]">
              <span>Name</span>
              <span>Font Size</span>
            </div>

            {/* Typography Scale Rows */}
            <div className="flex flex-col gap-2.5 sm:gap-3 text-[#111]">
              {/* Row 1: Heading 1 - 84 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  Heading 1
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  84 px
                </span>
              </div>

              {/* Row 2: Heading 2 - 64 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Heading 2
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  64 px
                </span>
              </div>

              {/* Row 3: Heading 3 - 48 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  Heading 3
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  48 px
                </span>
              </div>

              {/* Row 4: Heading 4 - 34 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  Heading 4
                </span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold">
                  34 px
                </span>
              </div>

              {/* Row 5: Heading 5 - 24 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-base sm:text-lg font-bold">
                  Heading 5
                </span>
                <span className="text-base sm:text-lg font-bold">
                  24 px
                </span>
              </div>

              {/* Row 6: Sub Font - 18 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-xs sm:text-sm font-medium">
                  Sub Font
                </span>
                <span className="text-xs sm:text-sm font-medium">
                  18 px
                </span>
              </div>

              {/* Row 7: Sub Font - 16 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-[11px] sm:text-xs font-normal">
                  Sub Font
                </span>
                <span className="text-[11px] sm:text-xs font-normal">
                  16 px
                </span>
              </div>

              {/* Row 8: Small - 14 px */}
              <div className="grid grid-cols-2 items-baseline">
                <span className="text-[10px] sm:text-[11px] font-normal">
                  Small
                </span>
                <span className="text-[10px] sm:text-[11px] font-normal">
                  14 px
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Colors - Custom Designed Swatch Cards matching Figma */}
        <SectionPill label="Colors" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl mx-auto py-2 sm:py-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 md:gap-10">
            {/* Left Stack: 4 Solid Swatches with Centered Hex Codes */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {/* Card 1: #FF5916 */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-[#FF5916] text-white shadow-md flex items-center justify-center transform -rotate-1.5 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="font-extrabold text-sm sm:text-base tracking-wider font-sans">
                  #FF5916
                </span>
              </div>

              {/* Card 2: #FFFFFF */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-white text-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-black/5 flex items-center justify-center transform rotate-1 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="font-extrabold text-sm sm:text-base tracking-wider font-sans">
                  #FFFFFF
                </span>
              </div>

              {/* Card 3: #544741 */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-[#544741] text-white shadow-md flex items-center justify-center transform -rotate-1 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="font-extrabold text-sm sm:text-base tracking-wider font-sans">
                  #544741
                </span>
              </div>

              {/* Card 4: #111111 */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-[#111111] text-white shadow-md flex items-center justify-center transform rotate-1.5 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer">
                <span className="font-extrabold text-sm sm:text-base tracking-wider font-sans">
                  #111111
                </span>
              </div>
            </div>

            {/* Right Stack: 4 Gradient Swatches */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {/* Card 1: Pastel Pink to Lavender/Blue */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-gradient-to-r from-[#FFCCE1] via-[#FEDDC8] to-[#ADC0F7] shadow-sm transform -rotate-1.5 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer" />

              {/* Card 2: Fiery Warm Orange to Amber */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-gradient-to-r from-[#FF4E18] via-[#FF7A1A] to-[#FFA726] shadow-sm transform rotate-1.5 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer" />

              {/* Card 3: Soft Peach to Mint Pastel */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-gradient-to-r from-[#FEDAC5] via-[#FEEDBA] to-[#BEE5B6] shadow-sm transform -rotate-1 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer" />

              {/* Card 4: Royal Electric Blue */}
              <div className="relative h-16 sm:h-18 md:h-20 rounded-[1.3rem] sm:rounded-[1.6rem] bg-gradient-to-r from-[#298EEA] via-[#1E88E5] to-[#1976D2] shadow-sm transform rotate-1.5 hover:rotate-0 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </motion.div>

        {/* 4. Screens Showcase - Exact User Image */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 sm:mt-20 md:mt-24 relative w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="/uniqlearn-screens.png"
            alt="UniqLearn Web Screens"
            width={1600}
            height={510}
            className="w-full h-auto object-cover rounded-3xl block"
            priority
          />
        </motion.div>

        {/* 5. Problem & Solution */}
        <SectionPill label="Problem & Solution" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Problem Card */}
          <div className="relative rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Ambient Pastel Gradient Aura */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -left-16 size-48 rounded-full bg-gradient-to-tr from-[#FFAACF]/40 to-[#FF6E40]/20 blur-2xl pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-grid size-8 place-items-center rounded-xl bg-[#FF5516]/10 text-[#FF5516]">
                  <AlertCircle size={18} strokeWidth={2.4} />
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#111]">Problem</h3>
              </div>

              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-6">
                Teachers find managing generally time-consuming due to multiple tools, cluttered dashboards, and a lack of visual clarity.
              </p>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#333]">
                <div className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-[#FF5516] mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-[#111]">Fragmented Tools:</strong> Teachers struggle with disjointed software for student grades, attendance, course modules, and daily tasks.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-[#FF5516] mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-[#111]">Deadline Disconnect:</strong> Students face a lack of clear deadline tracking, leading to poor platform engagement and missed submissions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className="relative rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Ambient Pastel Gradient Aura */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 size-48 rounded-full bg-gradient-to-tl from-[#BEE5B7]/40 to-[#4FBDF8]/20 blur-2xl pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="inline-grid size-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-[#111]">Solution</h3>
              </div>

              <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-6">
                Crafted a centralized classroom web platform featuring clean spatial hierarchy, responsive visual components, and intuitive navigation flows.
              </p>

              <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#333]">
                <div className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-[#111]">Unified Command Center:</strong> All-in-one centralized workspace for student tracking, modern evaluation grids, and grading workflows.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <p>
                    <strong className="text-[#111]">Transparent Feedback Loops:</strong> Students receive real-time deadline visibility, upcoming assignment alerts, and structured rubrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation to Next Case Study */}
        <div className="mt-20 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/case-studies"
            className="text-xs sm:text-sm font-semibold text-[#666] hover:text-[#111] transition-colors"
          >
            ← View All Case Studies
          </Link>
          <Link
            href="/work/learnbud-ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#FF5516] transition-colors"
          >
            <span>Next Case Study: LearnBud AI</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </Container>
    </article>
  );
}
