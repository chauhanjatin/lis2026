"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ease = [0.22, 1, 0.36, 1] as const;

export function LearnBudDetail() {
  const reduceMotion = useReducedMotion();

  return (
    <article className="min-h-screen bg-white text-[#101116] pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-28 overflow-hidden font-['Nunito',sans-serif]">
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

          <span className="text-xs font-semibold uppercase tracking-wider text-[#00B2FE] bg-[#00B2FE]/10 px-3 py-1 rounded-full">
            AI APP • SMART EDTECH
          </span>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease }}
          className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-3xl overflow-hidden bg-gradient-to-b from-[#041B2D] via-[#02111E] to-[#010912] border border-white/10 shadow-2xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Subtle Ambient Cyan Glow Behind Phones */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-[#00B2FE]/20 blur-[100px] pointer-events-none"
          />

          <div className="relative w-full h-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/learnbudai.png"
              alt="LearnBud AI Isometric Mobile Showcase"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>
        </motion.div>

        {/* 1. Project Overview */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101116] mb-4">
            Project Overview
          </h2>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-4xl text-base sm:text-lg leading-relaxed text-[#55585b]"
          >
            <strong className="text-[#101116] font-bold">LearnBud AI</strong> is a mobile learning companion that connects students with live, AI-powered tutors. An all-in-one platform for high-school & college students to summarize complex study materials, convert audio/PDFs into structured notes, create interactive flashcards, and get 24/7 AI-guided explanations tailored to their learning level.
          </motion.p>
        </div>

        {/* 2. Typography */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101116] mb-6">
            Typography
          </h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="relative rounded-3xl border border-black/10 bg-[#FAFAFC] p-10 sm:p-14 text-center overflow-hidden shadow-sm"
          >
            {/* Blueprint Grid Lines */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#00B2FE 1px, transparent 1px), linear-gradient(90deg, #00B2FE 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Wordmark Center Display */}
            <div className="relative z-10 py-6 sm:py-10">
              <span className="font-['Nunito'] text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-[#00B2FE] drop-shadow-sm">
                Nunito
              </span>
            </div>

            {/* Font Weight Scale */}
            <div className="relative z-10 pt-6 border-t border-black/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[#222]">
              <span className="font-light text-sm sm:text-base">Light</span>
              <span className="font-normal text-sm sm:text-base">Regular</span>
              <span className="font-medium text-sm sm:text-base">Medium</span>
              <span className="font-semibold text-sm sm:text-base">SemiBold</span>
              <span className="font-bold text-sm sm:text-base">Bold</span>
            </div>
          </motion.div>
        </div>

        {/* 3. Colors */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10 md:p-14 shadow-sm relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101116] mb-8 sm:mb-12">
              Colors
            </h2>

            {/* Fanned / Overlapping Paint Swatches Deck matching Figma */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease }}
              className="flex items-end justify-center pt-6 pb-6 overflow-x-auto scrollbar-none"
            >
              <div className="flex items-end justify-center min-w-max px-6 gap-6 sm:gap-10 md:gap-14">
                {/* Left Swatch Pair (#737B81, #FFFFFF) */}
                <div className="flex items-end">
                  {/* 1. Slate Gray #737B81 */}
                  <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#737B81] shadow-xl -rotate-4 transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 z-20 flex flex-col justify-end p-4 sm:p-6 shrink-0 cursor-pointer">
                    <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#111] tracking-tight">
                      #737B81
                    </span>
                  </div>

                  {/* 2. Pure White #FFFFFF */}
                  <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.75rem] sm:rounded-[2.25rem] bg-white border border-black/15 shadow-xl -ml-12 sm:-ml-16 md:-ml-20 -rotate-1 transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 z-10 flex flex-col justify-end p-4 sm:p-6 shrink-0 cursor-pointer">
                    <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#111] tracking-tight ml-auto">
                      #FFFFFF
                    </span>
                  </div>
                </div>

                {/* Right Swatch Cluster (Linear, #00111C, #2196E3) */}
                <div className="flex items-end">
                  {/* 3. Linear Gradient */}
                  <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.75rem] sm:rounded-[2.25rem] bg-gradient-to-b from-[#00C2FF] via-[#00A3FF] to-[#0084FF] shadow-2xl rotate-0 transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 z-10 flex flex-col justify-end p-4 sm:p-6 shrink-0 cursor-pointer">
                    <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#111] tracking-tight">
                      Linear
                    </span>
                  </div>

                  {/* 4. Deep Navy #00111C */}
                  <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#00111C] shadow-2xl rotate-1 -ml-10 sm:-ml-14 md:-ml-16 transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 z-20 flex flex-col justify-end p-4 sm:p-6 shrink-0 cursor-pointer">
                    <span className="font-extrabold text-xs sm:text-sm md:text-base text-white tracking-tight">
                      #00111C
                    </span>
                  </div>

                  {/* 5. Electric Blue #2196E3 */}
                  <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#2196E3] shadow-2xl rotate-5 -ml-10 sm:-ml-14 md:-ml-16 transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 z-30 flex flex-col justify-end p-4 sm:p-6 shrink-0 cursor-pointer">
                    <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#111] tracking-tight">
                      #2196E3
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. Screens Showcase - Exact User Image */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease }}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/learnbud-screens.png"
              alt="LearnBud AI Mobile Screens"
              width={1400}
              height={912}
              className="w-full h-auto object-cover rounded-3xl block"
              priority
            />
          </motion.div>
        </div>

        {/* 5. Problem & Solution */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101116] mb-6">
            Problem & Solution
          </h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card 1: The Problem */}
            <div className="relative rounded-3xl border border-white/10 bg-[#0B1A28] p-7 sm:p-9 shadow-xl overflow-hidden text-white flex flex-col justify-between">
              {/* Soft Red/Blue Glow Accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-16 size-48 rounded-full bg-rose-500/15 blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="inline-grid size-8 place-items-center rounded-xl bg-rose-500/20 text-rose-400">
                    <XCircle size={18} strokeWidth={2.4} />
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">The Problem</h3>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  Learners juggle disconnected tools and struggle to retain complex lecture material.
                </p>

                <div className="flex flex-col gap-4 text-xs sm:text-sm text-white/85">
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <p>Capturing content is manual and slow</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <p>Help is generic, not matched to level or goals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <p>Studying alone is demotivating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: The Solution */}
            <div className="relative rounded-3xl border border-white/10 bg-[#0B1A28] p-7 sm:p-9 shadow-xl overflow-hidden text-white flex flex-col justify-between">
              {/* Soft Cyan Glow Accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-16 size-48 rounded-full bg-[#00B2FE]/20 blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="inline-grid size-8 place-items-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={18} strokeWidth={2.4} />
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white">The Solution</h3>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  One smart mobile learning ecosystem powering retention, focus, and clarity.
                </p>

                <div className="flex flex-col gap-4 text-xs sm:text-sm text-white/85">
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <p>AI Notes turn audio, PDFs, and links into structured notes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <p>Onboarding and adaptive placement personalizes the tutor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <p>Group learn channels, streaks, and leaderboards</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Navigation to Previous Case Study */}
        <div className="mt-20 pt-10 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/case-studies"
            className="text-xs sm:text-sm font-semibold text-[#666] hover:text-[#111] transition-colors"
          >
            ← View All Case Studies
          </Link>
          <Link
            href="/work/uniqlearn"
            className="inline-flex items-center gap-2 rounded-full bg-[#041B2D] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md hover:bg-[#00B2FE] transition-colors"
          >
            <span>Next Case Study: UniqLearn</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </Container>
    </article>
  );
}
