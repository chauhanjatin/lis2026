"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudiesList, type CaseStudyItem } from "@/data/caseStudies";

export function CaseStudyGrid({
  items = caseStudiesList,
  showHeader = true,
}: {
  items?: CaseStudyItem[];
  showHeader?: boolean;
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <Container className="max-w-6xl">
        {showHeader && (
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#606468]">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
              Proven Impact
            </span>
            <h1 className="font-Sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#101116] mt-3">
              Case studies that{" "}
              <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
                deliver.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#606468] max-w-xl mx-auto leading-relaxed">
              Explore how we partner with ambitious enterprises and startups to transform operations, scale growth, and design exceptional digital products.
            </p>
          </div>
        )}

        {/* 2-Column Grid with Hover Image Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((study, idx) => (
            <CaseStudyCard key={study.slug} study={study} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
