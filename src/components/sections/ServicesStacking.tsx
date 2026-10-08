"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { detailedServices, type ServiceItem } from "@/data/services";

function ServiceCard({
  service,
  index,
  total,
}: {
  service: ServiceItem;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  // Calculate sticky stacking top offset
  const stickyTop = 85 + index * 16;

  return (
    <div
      ref={cardRef}
      style={{
        top: `${stickyTop}px`,
      }}
      className="sticky mb-10 sm:mb-14 last:mb-0"
    >
      <motion.article
        style={reduceMotion ? undefined : { scale }}
        className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white p-6 sm:p-9 md:p-12 text-[#101116] shadow-[0_20px_50px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E7EB] transition-all duration-300"
      >
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-8 border-b border-[#F0F1F3]">
          {/* Large Number */}
          <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-none tracking-tight text-[#101116] shrink-0 sm:w-20 md:w-24">
            {service.number}
          </span>

          {/* Title and Tags */}
          <div className="flex-1">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#101116] leading-tight">
              {service.title}
            </h2>

            {/* Tag Pills */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E5E7EB] bg-[#FAFBFD] px-3.5 py-1 text-xs font-medium text-[#606468] transition-colors hover:border-[#101116] hover:text-[#101116]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Body Content Row */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left: 3 Preview Images Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
              {service.images.map((img, imgIdx) => (
                <div
                  key={`${img.src}-${imgIdx}`}
                  className="group/img relative aspect-[1.3] overflow-hidden rounded-xl sm:rounded-2xl bg-[#F5F6F8] border border-black/5 shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-108"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/img:bg-black/5"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Description & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5 lg:pl-4">
            <p className="text-xs sm:text-sm md:text-[0.92rem] leading-relaxed text-[#606468]">
              {service.description}
            </p>

            <div>
              <Link
                href={service.ctaHref || "/contact"}
                className="group/btn inline-flex items-center gap-1.5 font-Sora text-sm sm:text-base font-bold text-[#101116] transition-colors hover:text-[#0D4FB8]"
              >
                <span>{service.ctaText || "Get This Now"}</span>
                <ArrowUpRight
                  size={18}
                  className="stroke-[2.5] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ServicesStacking({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section
      id="services-stacking"
      className="relative bg-[#F8F9FB] text-[#101116] py-16 sm:py-24 lg:py-28 min-h-screen"
    >
      <Container className="max-w-6xl">
        {/* Optional Section Header */}
        {!hideHeader && (
          <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-18">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#676d70]">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
              Our Services
            </span>
            <h1 className="font-Sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#101116] mt-3">
              Crafted for impact and{" "}
              <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
                growth.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-[#606468] max-w-xl mx-auto leading-relaxed">
              From mobile design to high-converting websites and scalable software architecture, we engineer intuitive digital experiences.
            </p>
          </div>
        )}

        {/* Stacking Service Cards */}
        <div className="relative">
          {detailedServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              total={detailedServices.length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
