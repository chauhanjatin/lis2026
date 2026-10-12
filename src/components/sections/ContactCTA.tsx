"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/components/ui/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="contact" divider={false} className="contact-cta">
      <motion.div
        className="relative flex flex-col items-center justify-center px-4 py-12 text-center sm:px-6 sm:py-16 md:py-20 lg:py-24 border-b border-white/[0.08]"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.14, delayChildren: 0.06 },
          },
        }}
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.75, ease }}
          className="font-Sora max-w-4xl text-balance text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl sm:leading-[1.02] sm:tracking-[-0.055em]"
        >
          Let’s make something
          <br />
          amazing together.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.65, ease }}
          className="mt-6 sm:mt-8 md:mt-10"
        >
          <Link
            href="/contact"
            className="cta-tilt-btn group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] py-2.5 pl-5 pr-2.5 text-sm font-semibold text-[#0c0f10] shadow-[0_0_36px_rgba(66,191,165,0.42)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Contact Us
            <span
              className="inline-grid size-8 place-items-center rounded-full bg-[#0c0f10] text-white transition-transform group-hover:rotate-12"
              aria-hidden="true"
            >
              <ArrowUpRight size={15} strokeWidth={2.4} />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
