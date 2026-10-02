"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { CaseStudyBrandLogo } from "./CaseStudyBrandLogo";
import type { CaseStudyItem } from "@/data/caseStudies";

export function CaseStudyCard({
  study,
  index = 0,
}: {
  study: CaseStudyItem;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#EAEAEC] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
    >
      <Link
        href={`/work/${study.slug}`}
        className="flex h-full flex-col justify-between"
        aria-label={`Read case study: ${study.cardTitle}`}
      >
        {/* Top Visual Showcase / Logo Canvas */}
        <div className="relative flex h-60 sm:h-64 md:h-72 w-full items-center justify-center overflow-hidden bg-[#F7F7F8] p-8 transition-colors duration-300">
          {/* Hover Image Background */}
          {study.image && (
            <>
              <Image
                src={study.image}
                alt={study.cardTitle}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100"
              />
              {/* Subtle dark tint on hover to keep white logo perfectly legible */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-black/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </>
          )}

          {/* Centered Brand Logo */}
          <div className="relative z-20 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            <CaseStudyBrandLogo type={study.logoType} />
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 border-t border-[#EDEDF0] bg-white">
          <div>
            <span className="block text-[11px] sm:text-xs font-semibold tracking-wider text-[#8F9194] uppercase">
              {study.cardCategory}
            </span>
            <h3 className="font-Sora text-lg sm:text-xl font-semibold leading-snug tracking-[-0.025em] text-[#101116] mt-2.5 transition-colors group-hover:text-[#0D4FB8]">
              {study.cardTitle}
            </h3>
          </div>

          <div className="mt-5 pt-1">
            <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#101116] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0D4FB8]">
              <span>Read stories</span>
              <ChevronRight size={15} className="stroke-[2.5]" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
