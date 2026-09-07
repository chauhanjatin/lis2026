"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  aboutHeroData,
  aboutPartners,
  type AboutHeroData,
  type AboutPartner,
} from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutHero({
  data = aboutHeroData,
  partners = aboutPartners,
}: {
  data?: AboutHeroData;
  partners?: AboutPartner[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Main Headline with Inline Badges */}
          <h1 className="font-Sora text-balance text-4xl font-bold tracking-[-0.035em] text-[#101116] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.12]">
            {/* Line 1 */}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5">
              <span>{data.prefix} {data.brand}</span>
           
              <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">{data.highlight}</span>
            </span>

            <br className="hidden sm:inline" />

            {/* Line 2 */}
            <span className="mt-1.5 inline-flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3.5 sm:mt-2">
              <span>{data.line2Prefix}</span>
            
              <span className="text-[#101116]">{data.line2Suffix}</span>
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-[#606468] sm:mt-8 sm:text-[0.95rem] md:text-base"
          >
            {data.description}
          </motion.p>

          {/* Dark Pill CTA Button */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-8 flex justify-center sm:mt-10">
            <Link
              href={data.cta.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#2B2D31] px-6 py-3.5 text-sm font-semibold tracking-[-0.01em] text-white shadow-[0_12px_32px_rgba(26,28,32,0.28)] transition-all duration-300 hover:bg-[#151618] hover:shadow-[0_16px_36px_rgba(0,0,0,0.36)] hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>{data.cta.label}</span>
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Partner Logos Row */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease }}
          className="mt-16 sm:mt-20 md:mt-24"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-16 md:gap-x-20 lg:gap-x-14">
            {partners.map((partner) => (
              <div
                key={partner.src}
                className="opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-7 w-auto object-contain sm:h-8"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
