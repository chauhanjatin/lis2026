"use client";

import React from "react";
import Image from "next/image";
import { PhoneMockup } from "./PhoneMockup";
import type { CaseStudyGallery, CaseStudySlide } from "@/data/caseStudies";

interface SolutionCarouselProps {
  slides: CaseStudySlide[];
  gallery?: CaseStudyGallery;
}

const SECONDS_PER_ITEM = 7;
const SCROLL_PX_PER_SECOND = 65;
const GAP_PX = 24;

function ImageSlide({ slide }: { slide: CaseStudySlide }) {
  if (!slide.image) return null;

  if (slide.image.orientation === "portrait") {
    return (
      <div className="relative h-[340px] sm:h-[420px] aspect-[42/100] shrink-0 overflow-hidden rounded-[1.75rem]">
        <Image
          src={slide.image.src}
          alt={slide.title}
          fill
          sizes="200px"
          draggable={false}
          className="object-cover"
          style={{ objectPosition: slide.image.position ?? "50% 50%" }}
        />
      </div>
    );
  }

  return (
    <Image
      src={slide.image.src}
      alt={slide.title}
      width={0}
      height={0}
      sizes="480px"
      draggable={false}
      className="h-[180px] sm:h-[230px] md:h-[260px] w-auto shrink-0 select-none"
    />
  );
}

function CardSlide({ slide }: { slide: CaseStudySlide }) {
  return (
    <div className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[350px] flex flex-col justify-between rounded-[2rem] sm:rounded-[2.4rem] bg-gradient-to-b from-[#FAF2F8] to-[#F5EBF7] p-6 sm:p-7 border border-[#F2E5F0] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] select-none">
      <div className="mb-6">
        <span className="text-xs font-bold tracking-wider text-[#FF5516] uppercase block">
          {slide.tag}
        </span>
        <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#505357]">
          {slide.description}
        </p>
      </div>
      <div className="flex justify-center overflow-hidden pt-2">
        <div className="scale-[0.82] sm:scale-[0.86] md:scale-[0.88] origin-top">
          <PhoneMockup type={slide.screenType} glow={false} />
        </div>
      </div>
    </div>
  );
}

export function SolutionCarousel({ slides, gallery }: SolutionCarouselProps) {
  const images = gallery?.images ?? [];
  const imageWidth = gallery?.width ?? 1;
  const imageHeight = gallery?.height ?? 1;
  const hasGallery = images.length > 0;
  const isPortrait = imageHeight > imageWidth;
  const desktopHeight = isPortrait ? 380 : 260;
  const durationSeconds = hasGallery
    ? Math.round(
        (images.length *
          (desktopHeight * (imageWidth / imageHeight) + GAP_PX)) /
          SCROLL_PX_PER_SECOND,
      )
    : slides.length * SECONDS_PER_ITEM;
  // Duplicate items to create seamless infinite loop for marquee
  const marqueeSlides = [...slides, ...slides];
  const marqueeImages = [...images, ...images];

  return (
    <div className="relative my-12 sm:my-16 overflow-hidden py-4">
      {/* Edge Gradient Fades for seamless entry and exit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-20 bg-gradient-to-r from-white via-white/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 z-20 bg-gradient-to-l from-white via-white/80 to-transparent"
      />

      {/* Infinite Horizontal Marquee Track with Auto Animation */}
      <div className="overflow-hidden">
        <div
          className="animate-solution-marquee flex items-center gap-5 sm:gap-6 w-max px-4"
          style={{ animationDuration: `${durationSeconds}s` }}
        >
          {hasGallery
            ? marqueeImages.map((src, idx) => (
                <Image
                  key={`${src}-${idx}`}
                  src={src}
                  alt={idx < images.length ? `Project screen ${idx + 1}` : ""}
                  aria-hidden={idx >= images.length}
                  width={imageWidth}
                  height={imageHeight}
                  sizes={
                    isPortrait ? "200px" : "(max-width: 640px) 320px, 460px"
                  }
                  draggable={false}
                  className={`${
                    isPortrait
                      ? "h-[300px] sm:h-[340px] md:h-[380px] rounded-[1.75rem]"
                      : "h-[180px] sm:h-[230px] md:h-[260px]"
                  } w-auto shrink-0 select-none`}
                />
              ))
            : marqueeSlides.map((slide, idx) => (
                <div
                  key={`${slide.tag}-${idx}`}
                  aria-hidden={idx >= slides.length}
                  className="shrink-0"
                >
                  {slide.image ? (
                    <ImageSlide slide={slide} />
                  ) : (
                    <CardSlide slide={slide} />
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
