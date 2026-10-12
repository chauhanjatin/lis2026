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

        {/* 2. Typography */}
        <SectionPill label="Typography" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Font Identification Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-2xl border border-black/10 bg-[#FAFAFA] p-6 text-center shadow-sm">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111]">
                Plus Jakarta Sans
              </span>
            </div>

            <div className="relative rounded-2xl border border-black/10 bg-gradient-to-br from-[#FFFBF8] to-[#FFF3EC] p-10 flex items-center justify-center overflow-hidden min-h-[220px]">
              {/* Subtle Blueprint Grid Pattern */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#FF5516 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative z-10 flex items-baseline">
                <span className="text-8xl sm:text-9xl font-black text-[#FF5516] leading-none tracking-tight">
                  A
                </span>
                <span className="text-7xl sm:text-8xl font-black text-[#FF5516]/40 leading-none tracking-tight font-mono -ml-2">
                  a
                </span>
              </div>
            </div>
          </div>

          {/* Right Typography Scale Table */}
          <div className="lg:col-span-7 rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-2 pb-4 mb-4 border-b border-black/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5516]">
              <span>Name</span>
              <span className="text-right">Font Size</span>
            </div>

            <div className="flex flex-col divide-y divide-black/5 text-[#222]">
              <div className="py-3 flex items-baseline justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">Heading 1</span>
                <span className="text-xl sm:text-2xl font-bold text-[#FF5516]">84 px</span>
              </div>
              <div className="py-3 flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight">Heading 2</span>
                <span className="text-lg sm:text-xl font-bold text-[#FF5516]">64 px</span>
              </div>
              <div className="py-3 flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-semibold">Heading 3</span>
                <span className="text-base sm:text-lg font-semibold text-[#FF5516]">48 px</span>
              </div>
              <div className="py-2.5 flex items-baseline justify-between">
                <span className="text-lg sm:text-xl font-medium">Heading 4</span>
                <span className="text-sm sm:text-base font-semibold text-[#FF5516]">34 px</span>
              </div>
              <div className="py-2.5 flex items-baseline justify-between">
                <span className="text-base font-medium">Heading 5</span>
                <span className="text-sm font-semibold text-[#FF5516]">24 px</span>
              </div>
              <div className="py-2 flex items-baseline justify-between text-sm text-[#555]">
                <span>Sub-font</span>
                <span className="font-medium text-[#FF5516]">16 px</span>
              </div>
              <div className="py-2 flex items-baseline justify-between text-xs sm:text-sm text-[#666]">
                <span>Normal</span>
                <span className="font-medium text-[#FF5516]">14 px</span>
              </div>
              <div className="py-2 flex items-baseline justify-between text-xs text-[#888]">
                <span>Tiny</span>
                <span className="font-medium text-[#FF5516]">12 px</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Colors */}
        <SectionPill label="Colors" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Solid Color Swatches */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-2xl bg-[#FF5516] p-5 text-white shadow-md">
              <span className="font-bold text-base">Vibrant Primary Orange</span>
              <span className="font-mono text-sm tracking-wider font-semibold">#FF5516</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#F8F9FA] border border-black/10 p-5 text-[#222] shadow-sm">
              <span className="font-bold text-base">Clean Surface White</span>
              <span className="font-mono text-sm tracking-wider font-semibold text-[#555]">#F8F9FA</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#544741] p-5 text-white shadow-md">
              <span className="font-bold text-base">Deep Taupe Gray</span>
              <span className="font-mono text-sm tracking-wider font-semibold">#544741</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#111111] p-5 text-white shadow-md">
              <span className="font-bold text-base">Rich Dark Black</span>
              <span className="font-mono text-sm tracking-wider font-semibold">#111111</span>
            </div>
          </div>

          {/* Right Gradient Palettes */}
          <div className="flex flex-col gap-3.5">
            <div className="h-14 rounded-2xl bg-gradient-to-r from-[#FFAACF] to-[#FF6E40] shadow-sm flex items-center justify-between px-6 text-white font-semibold text-sm">
              <span>Sunset Accent</span>
              <span className="font-mono text-xs opacity-90">Pink → Orange</span>
            </div>
            <div className="h-14 rounded-2xl bg-gradient-to-r from-[#FF5516] to-[#FFA834] shadow-sm flex items-center justify-between px-6 text-white font-semibold text-sm">
              <span>Warm Energy</span>
              <span className="font-mono text-xs opacity-90">Orange → Amber</span>
            </div>
            <div className="h-14 rounded-2xl bg-gradient-to-r from-[#FCD3C1] to-[#BEE5B7] shadow-sm flex items-center justify-between px-6 text-[#2D2A26] font-semibold text-sm">
              <span>Classroom Harmony</span>
              <span className="font-mono text-xs opacity-80">Peach → Sage</span>
            </div>
            <div className="h-14 rounded-2xl bg-gradient-to-r from-[#4FBDF8] to-[#1D71F2] shadow-sm flex items-center justify-between px-6 text-white font-semibold text-sm">
              <span>Analytics Wave</span>
              <span className="font-mono text-xs opacity-90">Sky → Cobalt</span>
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
