"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, fadeUp } from "@/components/ui/ScrollReveal";
import {
  aboutCoreValuesData,
  type AboutCoreValue,
  type AboutCoreValuesSectionData,
} from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

function CommitmentIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-[#151618]"
      aria-hidden="true"
    >
      <path d="M12 28L6 22C4.5 20.5 4.5 18 6 16.5C7.5 15 10 15 11.5 16.5L18 23" />
      <path d="M36 28L42 22C43.5 20.5 43.5 18 42 16.5C40.5 15 38 15 36.5 16.5L30 23" />
      <path d="M16 21L24 13C25.5 11.5 28 11.5 29.5 13L32 15.5" />
      <path d="M17 24L24 31L31 24" />
      <path d="M21 28L26 33L31 28" />
      <path d="M14 27L22 35C23 36 25 36 26 35L34 27" />
    </svg>
  );
}

function ClarityIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-[#151618]"
      aria-hidden="true"
    >
      <path d="M12 16V12H16" />
      <path d="M32 12H36V16" />
      <path d="M36 32V36H32" />
      <path d="M16 36H12V32" />
      <path d="M16 24C18 20 21.5 18 24 18C26.5 18 30 20 32 24C30 28 26.5 30 24 30C21.5 30 18 28 16 24Z" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path d="M14 30C16 33 20 35 24 35C28 35 32 33 34 30" />
    </svg>
  );
}

function ExcellenceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-[#151618]"
      aria-hidden="true"
    >
      <path d="M16 10L17.5 13.5L21 14L18.5 16.5L19 20L16 18L13 20L13.5 16.5L11 14L14.5 13.5L16 10Z" />
      <circle cx="27" cy="11" r="1.5" fill="currentColor" />
      <circle cx="34" cy="15" r="1.5" fill="currentColor" />
      <path d="M19 23V29C19 33 21 37 25 39L29 40V33" />
      <path d="M22 23V29" />
      <path d="M25 23V29" />
      <path d="M28 23V29" />
      <path d="M31 25V30" />
      <path d="M17 26H33C34 26 35 27 35 28V31C35 35 32 38 28 38H24" />
    </svg>
  );
}

function PassionIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-[#151618]"
      aria-hidden="true"
    >
      <path d="M24 8C24 8 28 13 28 17C28 19.2 26.2 21 24 21C21.8 21 20 19.2 20 17C20 14 22 10 24 8Z" />
      <path d="M24 16C23 15 21.5 15.5 21.5 17C21.5 18.5 24 20 24 20C24 20 26.5 18.5 26.5 17C26.5 15.5 25 15 24 16Z" fill="currentColor" />
      <path d="M14 27C14 27 18 24 23 24C28 24 33 26 36 29C37.5 30.5 36.5 33 34.5 33H28L23 37L15 33C13 32 12 30 13 28L14 27Z" />
      <path d="M20 33L26 33" />
    </svg>
  );
}

function ValueIcon({ type }: { type: AboutCoreValue["icon"] }) {
  switch (type) {
    case "commitment":
      return <CommitmentIcon />;
    case "clarity":
      return <ClarityIcon />;
    case "excellence":
      return <ExcellenceIcon />;
    case "passion":
      return <PassionIcon />;
  }
}

function ValuePillCard({
  value,
  isOpen,
  onToggle,
  index,
}: {
  value: AboutCoreValue;
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
        className="group relative cursor-pointer overflow-hidden rounded-[1.4rem] bg-[#EDEDF0] p-5 sm:p-6 transition-all duration-300 hover:bg-[#E6E8EB] hover:shadow-[0_10px_26px_rgba(0,0,0,0.06)] active:scale-[0.99]"
      >
        {/* Card Header: Icon + Title on left, Plus button on right */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/75 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <ValueIcon type={value.icon} />
            </div>
            <h3 className="font-Sora text-base font-semibold tracking-[-0.015em] text-[#151618] sm:text-lg">
              {value.title}
            </h3>
          </div>

          {/* Plus / Minus Circular Toggle Button matching reference image */}
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#181A1C] text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.28, ease }}
              className="inline-block text-xs font-bold leading-none"
            >
              +
            </motion.span>
          </span>
        </div>

        {/* Expandable Description Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.38, ease }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#D7D9DE] pt-4 text-xs sm:text-sm leading-relaxed text-[#555960]">
                {value.description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function AboutCoreValues({
  data = aboutCoreValuesData,
}: {
  data?: AboutCoreValuesSectionData;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const [openIds, setOpenIds] = useState<string[]>(["commitment"]);
  const [userInteracted, setUserInteracted] = useState(false);

  // Scroll observer for scroll up/down opening animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // If the user hasn't manually overridden cards, scroll drives sequential opening
    if (!userInteracted) {
      if (progress > 0.6) {
        setOpenIds(["commitment", "clarity", "excellence", "passion"]);
      } else if (progress > 0.4) {
        setOpenIds(["commitment", "clarity", "excellence"]);
      } else if (progress > 0.2) {
        setOpenIds(["commitment", "clarity"]);
      } else if (progress > 0.05) {
        setOpenIds(["commitment"]);
      } else {
        setOpenIds([]);
      }
    }
  });

  const toggleCard = (id: string) => {
    setUserInteracted(true);
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#FAFAFA] py-20 sm:py-28 lg:py-32"
    >
      {/* Decorative Pastel Blue Orb (Bottom Right) */}
   

      <Container className="relative z-10">
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-3xl text-center" amount={0.35}>
             <h2 className="mt-4 font-Sora text-3xl font-semibold tracking-[-0.03em] text-[#101010] sm:text-4xl md:text-5xl">
             Our Core 
             {" "}
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
            Values
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-[#52575D] sm:text-base">
            {data.subtitle}
          </p>
        </ScrollReveal>

        {/* 2x2 Expandable Pill Cards Grid matching Image */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {data.values.map((val, index) => (
            <ValuePillCard
              key={val.id}
              value={val}
              isOpen={openIds.includes(val.id)}
              onToggle={() => toggleCard(val.id)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
