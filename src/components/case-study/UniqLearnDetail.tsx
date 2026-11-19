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
    <article className="min-h-screen bg-white text-[#111111] pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-28 overflow-hidden font-[family-name:var(--font-plus-jakarta)]">
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
              src="/uniqlearn/uniqlearn.png"
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

        {/* ── Design System ──────────────────────────────────────────────────── */}
        <SectionPill label="Design System" />

        {/* DS-1  Colors */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-[22px] font-semibold uppercase tracking-widest text-[#999] mb-5">Colors</p>

          {/* Row 1 – 5 solid swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-3">
            {[
              { bg: "#FF5916", text: "white", label: "#FF5916" },
              { bg: "#FFFFFF", text: "#111", label: "#FFFFFF", border: true },
              { bg: "#544741", text: "white", label: "#544741" },
              { bg: "#111111", text: "white", label: "#111111" },
            ].map(({ bg, text, label, border }) => (
              <div
                key={label}
                className={`h-14 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm ${border ? "border border-black/10" : ""}`}
                style={{ background: bg, color: text }}
              >
                <span className="text-xs font-bold tracking-wide">{label}</span>
              </div>
            ))}
            {/* Gradient swatch – pink to blue */}
            <div
              className="h-14 sm:h-16 rounded-2xl shadow-sm"
              style={{ background: "linear-gradient(135deg,#FFCCE1,#FEDDC8,#ADC0F7)" }}
            >
              <div className="w-full h-full rounded-2xl flex items-center justify-center">
                <span className="text-xs font-semibold text-white/70">Linear</span>
              </div>
            </div>
          </div>

          {/* Row 2 – 3 gradient swatches */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { from: "#FF4E18", via: "#FF7A1A", to: "#FFA726" },
              { from: "#FEDAC5", via: "#FEEDBA", to: "#BEE5B6" },
              { from: "#298EEA", via: "#1E88E5", to: "#1976D2" },
            ].map(({ from, via, to }, i) => (
              <div
                key={i}
                className="h-14 sm:h-16 rounded-2xl shadow-sm flex items-center justify-center"
                style={{ background: `linear-gradient(135deg,${from},${via},${to})` }}
              >
                <span className="text-xs font-semibold text-white/80">Linear</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DS-2  Typography */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mt-10"
        >
          <p className="text-[22px] font-semibold uppercase tracking-widest text-black mb-5">Typography</p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
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
                    style={{ WebkitTextStroke: "2.5px #FF5916" }}
                  >
                    a
                  </span>
                </div>
              </div>
            </div>

            {/* Right Typography Scale Table */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="grid grid-cols-2 pb-2 mb-2 text-base sm:text-lg font-bold text-[#FF5916]">
                <span>Name</span>
                <span>Font Size</span>
              </div>

              <div className="flex flex-col gap-2.5 sm:gap-3 text-[#111]">
                {[
                  ["Heading 1", "84 px", "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"],
                  ["Heading 2", "64 px", "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"],
                  ["Heading 3", "48 px", "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"],
                  ["Heading 4", "34 px", "text-lg sm:text-xl md:text-2xl font-bold"],
                  ["Heading 5", "24 px", "text-base sm:text-lg font-bold"],
                  ["Sub Font",  "18 px", "text-xs sm:text-sm font-medium"],
                  ["Sub Font",  "16 px", "text-[11px] sm:text-xs font-normal"],
                  ["Small",     "14 px", "text-[10px] sm:text-[11px] font-normal"],
                ].map(([name, size, cls], i) => (
                  <div key={i} className="grid grid-cols-2 items-baseline">
                    <span className={cls}>{name}</span>
                    <span className={cls}>{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* DS-3  Buttons */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mt-10"
        >
          <p className="text-[22px] font-semibold uppercase tracking-widest text-black mb-5">Buttons</p>
          <div className="flex flex-wrap items-center gap-4">
            {/* Primary button */}
            <button className="inline-flex items-center gap-2 rounded-full bg-[#FF5916] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#e04d10] transition-colors">
              <span className="text-base leading-none">+</span>
              Button
            </button>
            {/* Outline button */}
            <button className="inline-flex items-center rounded-full border-2 border-[#FF5916] px-6 py-2 text-sm font-semibold text-[#FF5916] hover:bg-[#FF5916]/5 transition-colors">
              Button
            </button>
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
