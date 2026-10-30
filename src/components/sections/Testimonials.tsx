"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  testimonials,
  ratingSummary,
  testimonialMetrics,
  type Testimonial,
} from "@/data/testimonials";

function RatingSummaryCard() {
  return (
    <div className="flex flex-col justify-between rounded-[1.35rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(13,79,184,0.08)]">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="font-Sora text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              {ratingSummary.rating}
            </span>
            <span className="ml-1.5 text-base font-semibold text-[#6B7280] sm:text-lg">
              {ratingSummary.scale}
            </span>
          </div>
          <div
            className="flex items-center gap-1 text-[#F59E0B]"
            role="img"
            aria-label="5 out of 5 stars rating"
          >
            {[...Array(ratingSummary.stars)].map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-current sm:size-[1.15rem]"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex -space-x-2.5 overflow-hidden" aria-hidden="true">
            {ratingSummary.avatarStack.map((src, i) => (
              <div
                key={i}
                className="relative size-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
            ))}
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#111827] text-xs font-semibold text-white ring-2 ring-white">
              {ratingSummary.countBadge}
            </span>
          </div>

          <div className="leading-tight">
            <p className="text-xs font-semibold text-[#111827]">
              {ratingSummary.title}
            </p>
            <p className="text-[11px] text-[#6B7280]">
              {ratingSummary.subtitle}
            </p>
          </div>
        </div>
      </div>

      <Link
        href={ratingSummary.buttonHref}
        aria-label="Leave a review for Liberty Info Science"
        className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#111827] px-4 py-2.5 text-center text-xs font-semibold text-white transition-all duration-200 hover:bg-[#0D4FB8] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4FB8] active:scale-[0.98]"
      >
        {ratingSummary.buttonText}
      </Link>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="group flex flex-col justify-between rounded-[1.35rem] border border-[#E5E7EB] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#0D4FB8]/40 hover:shadow-[0_12px_30px_rgba(13,79,184,0.08)]">
      <blockquote className="text-sm leading-relaxed text-[#374151] sm:text-[0.95rem]">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center justify-between gap-3 pt-2">
        <div className="min-w-0">
          <p className="truncate font-Sora text-sm font-semibold tracking-[-0.01em] text-[#111827]">
            {item.name}
          </p>
          <p className="truncate text-xs text-[#6B7280]">{item.company}</p>
        </div>

        <div className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-black/5 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={item.avatar}
            alt={`${item.name} portrait`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
      </figcaption>
    </figure>
  );
}

function MetricsRow() {
  const [metric1, metric2] = testimonialMetrics;
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {/* Metric 1: Brand Gradient Card */}
      <div className="flex flex-col justify-between rounded-[1.35rem] bg-gradient-to-br from-[#0D4FB8] to-[#42BFA5] p-5 text-white shadow-[0_10px_24px_rgba(13,79,184,0.2)] transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <span className="font-Sora text-2xl font-bold tracking-tight sm:text-3xl">
            {metric1.value}
          </span>
          <p className="mt-1.5 text-xs font-medium leading-snug text-white/95">
            {metric1.label}
          </p>
        </div>
        <p className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-white/85">
          <span aria-hidden="true">{metric1.icon}</span> {metric1.brand}
        </p>
      </div>

      {/* Metric 2: Dark Contrast Card */}
      <div className="flex flex-col justify-between rounded-[1.35rem] bg-[#0F172A] p-5 text-white shadow-[0_10px_24px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <span className="font-Sora text-2xl font-bold tracking-tight sm:text-3xl">
            {metric2.value}
          </span>
          <p className="mt-1.5 text-xs font-medium leading-snug text-white/80">
            {metric2.label}
          </p>
        </div>
        <p className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-white/75">
          <span aria-hidden="true">{metric2.icon}</span> {metric2.brand}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const col1 = [testimonials[0], testimonials[1]]; // ALVA Design Studio, Shailendra Singh
  const col2 = [testimonials[2], testimonials[3], testimonials[4]]; // Haris Beha, Vipul Sharma, Andrija Bosnjak
  const col3 = [testimonials[5], testimonials[6], testimonials[7]]; // Aidan McDowell, Ravi Manwani, Dev Monnappa
  const col4 = [testimonials[8], testimonials[9]]; // Nikhil Toy, Able Joseph

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36 border-t border-[#EAECEF]"
    >
      <Container className="max-w-[1360px]">
        <ScrollReveal amount={0.3}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#202224]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
            What clients say
          </p>
          <h2 className="mt-4 font-Sora text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-[#151618] sm:text-5xl md:text-6xl sm:tracking-[-0.055em]">
            Social{" "}
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              proof.
            </span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <RatingSummaryCard />
            <TestimonialCard item={col1[0]} />
            <TestimonialCard item={col1[1]} />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <TestimonialCard item={col2[0]} />
            <TestimonialCard item={col2[1]} />
            <TestimonialCard item={col2[2]} />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <TestimonialCard item={col3[0]} />
            <TestimonialCard item={col3[1]} />
            <TestimonialCard item={col3[2]} />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <TestimonialCard item={col4[0]} />
            <MetricsRow />
            <TestimonialCard item={col4[1]} />
          </div>
        </div>
      </Container>
    </section>
  );
}