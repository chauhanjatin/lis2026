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
              src="/learnbudai/learnbudai.png"
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

        {/* 2. Typography - Exact Figma Blueprint Construction */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101116] mb-8 sm:mb-12">
            Typography
          </h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="w-full flex flex-col items-center justify-center pt-2 sm:pt-4 pb-4"
          >
            {/* Wordmark Center Display with Blueprint Construction Lines */}
            <div className="relative w-full max-w-xl mx-auto flex items-center justify-center py-4 sm:py-8">
              <svg
                viewBox="0 0 540 180"
                className="w-full max-w-[440px] sm:max-w-[500px] md:max-w-[540px] h-auto overflow-visible select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal Construction Guidelines */}
                {/* x-height line (top of lowercase letters) */}
                <line
                  x1="30"
                  y1="72"
                  x2="510"
                  y2="72"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* baseline line */}
                <line
                  x1="30"
                  y1="126"
                  x2="510"
                  y2="126"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Vertical Construction Guidelines */}
                <line
                  x1="74"
                  y1="18"
                  x2="74"
                  y2="152"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="108"
                  y1="18"
                  x2="108"
                  y2="152"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="284"
                  y1="18"
                  x2="284"
                  y2="152"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="434"
                  y1="18"
                  x2="434"
                  y2="152"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="468"
                  y1="18"
                  x2="468"
                  y2="152"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Wordmark "Nunito" */}
                <text
                  x="110"
                  y="126"
                  fill="#00B2FE"
                  fontFamily="'Nunito', sans-serif"
                  fontSize="96"
                  fontWeight="700"
                  letterSpacing="-0.01em"
                >
                  Nunito
                </text>
              </svg>
            </div>

            {/* Font Weight Scale */}
            <div className="w-full max-w-3xl mt-6 sm:mt-10 flex items-center justify-between text-[#111] text-xs sm:text-sm md:text-base px-2 sm:px-6">
              <span className="font-light hover:text-[#00B2FE] transition-colors cursor-default">Light</span>
              <span className="font-normal hover:text-[#00B2FE] transition-colors cursor-default">Regular</span>
              <span className="font-medium hover:text-[#00B2FE] transition-colors cursor-default">Medium</span>
              <span className="font-semibold hover:text-[#00B2FE] transition-colors cursor-default">Semibold</span>
              <span className="font-bold hover:text-[#00B2FE] transition-colors cursor-default">Bold</span>
            </div>
          </motion.div>
        </div>

        {/* 3. Colors - Pure HTML/CSS/SVG matching Image 2 */}
        <div className="mt-14 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101116] mb-8 sm:mb-12">
            Colors
          </h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="flex items-end justify-center pt-4 pb-8 overflow-x-auto scrollbar-none"
          >
            <div className="flex items-end justify-center min-w-max px-4 gap-8 sm:gap-14 md:gap-20">
              {/* Left Group: #737B81 Curved Swatch and #FFFFFF text */}
        
              {/* Right Group: Linear, #00111C, #2196E3 (Overlapping Fanned Swatches) */}
              <div className="flex items-end">
                {/* 3. Linear Gradient Swatch */}
              
                <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.8rem] sm:rounded-[2.4rem] bg-gradient-to-b from-[#00D2FF] via-[#00B4FE] to-[#008AFF] shadow-xl rotate-0 z-10 flex flex-col justify-end p-4 sm:p-6 shrink-0 transition-transform duration-300 hover:-translate-y-3 hover:scale-105 hover:z-40 cursor-pointer">
                  <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#111] tracking-tight font-sans">
                    Linear
                  </span>
                </div>
            
                {/* 4. Deep Navy #00111C Swatch (overlaps Linear) */}
                <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.8rem] sm:rounded-[2.4rem] bg-[#00111C] shadow-2xl -ml-8 sm:-ml-12 md:-ml-14 rotate-0 z-20 flex flex-col justify-end p-4 sm:p-6 shrink-0 transition-transform duration-300 hover:-translate-y-3 hover:scale-105 hover:z-40 cursor-pointer">
                  <span className="font-extrabold text-xs sm:text-sm md:text-base text-white tracking-tight font-sans">
                    #00111C
                  </span>
                </div>

                {/* 5. Electric Sky Blue #2196E3 Swatch (overlaps #00111C, tilted +6deg) */}
                <div className="relative group w-28 sm:w-36 md:w-44 h-56 sm:h-72 md:h-80 rounded-[1.8rem] sm:rounded-[2.4rem] bg-[#2196E3] shadow-2xl -ml-8 sm:-ml-12 md:-ml-14 rotate-6 z-30 flex flex-col justify-end p-4 sm:p-6 shrink-0 transition-transform duration-300 hover:-translate-y-3 hover:scale-105 hover:z-40 cursor-pointer">
                  <span className="font-extrabold text-xs sm:text-sm md:text-base text-[#111] tracking-tight font-sans">
                    #2196E3
                  </span>
                </div>
                
              </div>
            </div>
          </motion.div>
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