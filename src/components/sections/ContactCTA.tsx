"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { fadeUp } from "@/components/ui/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="contact" divider={false} className="contact-cta">
      <motion.div
        className="relative flex min-h-[20rem] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[24rem] sm:py-20"
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
          className="font-Sora max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl"
        >
          Let’s make something
          <br />
          amazing together.
        </motion.h2>

        <motion.a
          href="mailto:hello@designstudio.com"
          variants={fadeUp}
          transition={{ duration: 0.65, ease }}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="cta-tilt-btn group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] py-2.5 pl-5 pr-2.5 text-sm font-semibold text-[#0c0f10] shadow-[0_0_36px_rgba(66,191,165,0.42)]"
        >
          Contact Us
          <span
            className="inline-grid size-8 place-items-center rounded-full bg-[#0c0f10] text-white transition-transform group-hover:rotate-12"
            aria-hidden="true"
          >
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </span>
        </motion.a>
      </motion.div>
    </Section>
  );
}
