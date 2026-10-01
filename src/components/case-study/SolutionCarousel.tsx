"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import type { CaseStudySlide } from "@/data/caseStudies";

interface SolutionCarouselProps {
  slides: CaseStudySlide[];
}

export function SolutionCarousel({ slides }: SolutionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative my-12 sm:my-16">
      {/* Desktop / Tablet Multi-card grid & Mobile carousel */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.tag}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className="flex flex-col justify-between rounded-[2rem] bg-gradient-to-b from-[#FAF2F8] to-[#F5EBF7] p-6 lg:p-8 border border-[#F2E5F0] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.04)]"
          >
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#404347] uppercase">
                {slide.tag}
              </span>
              <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#505357]">
                {slide.description}
              </p>
            </div>

            <div className="mt-8 flex justify-center overflow-hidden pt-4">
              <div className="scale-[0.85] lg:scale-[0.9] origin-top transition-transform duration-500 hover:scale-[0.94]">
                <PhoneMockup type={slide.screenType} glow={false} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Interactive Slider */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#FAF2F8] to-[#F5EBF7] p-6 border border-[#F2E5F0] min-h-[580px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#404347] uppercase">
                  {slides[currentIndex].tag}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-[#505357]">
                  {slides[currentIndex].description}
                </p>
              </div>

              <div className="my-6 flex justify-center">
                <div className="scale-[0.82] origin-top">
                  <PhoneMockup type={slides[currentIndex].screenType} glow={false} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-black/5">
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-6 bg-[#101116]" : "w-2 bg-[#101116]/20"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#101116] shadow-sm transition-transform active:scale-90"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#101116] shadow-sm transition-transform active:scale-90"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
