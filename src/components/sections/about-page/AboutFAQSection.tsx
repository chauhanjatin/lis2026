"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, fadeUp } from "@/components/ui/ScrollReveal";
import {
  aboutFAQData,
  type AboutFAQItem,
  type AboutFAQSectionData,
} from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

function FAQCard({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: AboutFAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="w-full"
    >
      <div
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className="group relative cursor-pointer overflow-hidden rounded-[1.35rem] bg-[#EDEDF0] p-5 sm:p-6 transition-all duration-300 hover:bg-[#E7E9EC] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      >
        {/* Card Header: Question & Plus Button */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold tracking-[-0.01em] text-[#151618] sm:text-base">
            {item.question}
          </h3>

          {/* Plus / Minus Circle Icon */}
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#181A1C] text-white transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.25, ease }}
              className="inline-block text-xs font-bold leading-none"
            >
              +
            </motion.span>
          </span>
        </div>

        {/* Expandable Answer Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#D9DBDF] pt-4 text-xs sm:text-sm leading-relaxed text-[#555960]">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function AboutFAQSection({
  data = aboutFAQData,
}: {
  data?: AboutFAQSectionData;
}) {
  // Track open cards; default to opening the first card so user immediately sees the "card open" design
  const [openIds, setOpenIds] = useState<string[]>(["why-agero"]);

  const toggleCard = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="bg-[#E4E6E8] py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center" amount={0.35}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
            {data.eyebrow ?? "Common Questions"}
          </p>
          <h2 className="mt-4 font-Sora text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl md:text-5xl">
            {data.title ?? "Frequently Asked Questions"}
          </h2>
          <p className="mt-3 text-sm text-[#5B6068] sm:text-base">
            {data.subtitle ?? "Everything you need to know about partnering with Agero."}
          </p>
        </ScrollReveal>

        {/* 2-Column Expandable Cards Grid matching Image 2 */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16">
          {data.items.map((item, index) => (
            <FAQCard
              key={item.id}
              item={item}
              isOpen={openIds.includes(item.id)}
              onToggle={() => toggleCard(item.id)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
