"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function ContactCTA() {
  return (
    <Section id="contact" divider={false} className="contact-cta">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="cta-panel relative isolate overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0c0f10] px-6 py-16 text-center shadow-[0_20px_55px_rgba(12,18,20,.18)] sm:px-10 sm:py-20 md:rounded-[2rem] lg:py-10"
      >
        <span
          className="cta-panel-glow cta-panel-glow-left"
          aria-hidden="true"
        />
        <span
          className="cta-panel-glow cta-panel-glow-right"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[.14em] text-[#a4dedc]"
          >
            Ready when you are
          </motion.p>
          <h2 className="font-display mt-5 text-balance text-4xl font-medium leading-[.94] tracking-[-.05em] text-white sm:text-5xl lg:text-6xl">
            Let’s  make  something
            <span className="cta-panel-accent"> amazing together.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Build a digital presence that earns trust, turns interest into
            action, and gives your business room to grow.
          </p>
          <motion.a
            href="mailto:hello@designstudio.com"
            whileHover={{ scale: 1.045, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur transition-colors hover:bg-white hover:text-[#0c0f10]"
          >
            Contact Us{" "}
            <Sparkles
              size={16}
              className="text-[#68d9e5] transition-transform group-hover:rotate-12"
              aria-hidden="true"
            />
            <ArrowUpRight size={16} aria-hidden="true" />
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
}
