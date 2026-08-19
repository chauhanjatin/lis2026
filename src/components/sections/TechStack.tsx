"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Layers3, PenTool, Server, Shapes, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

const integrations = [
  { name: "Next.js", mark: "N", color: "text-[#191919]", icon: null },
  { name: "Microsoft Teams", mark: "T", color: "text-[#5b5fc7]", icon: null },
  { name: "Xero", mark: "xero", color: "text-[#13b5d1]", icon: null },
  { name: "Figma", mark: "", color: "text-[#f24e1e]", icon: Shapes },
  { name: "GitHub", mark: "", color: "text-[#181717]", icon: Code2 },
  { name: "Vercel", mark: "▲", color: "text-[#111111]", icon: null },
  { name: "Node.js", mark: "JS", color: "text-[#5fa04e]", icon: Server },
  { name: "TypeScript", mark: "TS", color: "text-[#3178c6]", icon: null },
  { name: "PostgreSQL", mark: "", color: "text-[#336791]", icon: Layers3 },
  { name: "Tailwind CSS", mark: "", color: "text-[#38bdf8]", icon: Sparkles },
];

function IntegrationCard({ item }: { item: (typeof integrations)[number] }) {
  const Icon = item.icon;
  return (
    <motion.div whileHover={{ y: -8, scale: 1.05 }} className="integration-card" title={item.name}>
      {Icon ? <Icon className={item.color} size={38} strokeWidth={1.9} aria-hidden="true" /> : <span className={`integration-mark ${item.color}`}>{item.mark}</span>}
    </motion.div>
  );
}

export function TechStack() {
  const reduceMotion = useReducedMotion();
  const left = integrations.slice(0, 4);
  const right = integrations.slice(4);
  const leftRail = [...left, ...left, ...left];
  const rightRail = [...right, ...right, ...right];
  return (
    <section id="tech-stack" className="integration-section overflow-hidden py-20 sm:py-28 lg:py-36">
      <Container>
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]"><span className="h-2 w-2 rounded-full bg-[#16181a]" /> Technologies</p>
          <h2 className="mt-7 font-display text-balance text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-[#151618] sm:text-6xl md:text-7xl">Works with the tools<br />you already use.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-[#55585b] sm:text-lg">We bring your existing tools together—from design and development to deployment—so your digital product stays connected, scalable, and ready to grow.</p>
        </motion.div>

        <div className="integration-network mx-auto mt-14 max-w-[1440px] sm:mt-20">
          <div className="integration-rail integration-rail-left">
            <motion.div className="integration-rail-track" animate={reduceMotion ? undefined : { x: ["-34%", "0%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              {leftRail.map((item, index) => <IntegrationCard key={`${item.name}-${index}`} item={item} />)}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.2 }} className="integration-featured"><PenTool size={76} strokeWidth={1.45} aria-hidden="true" /><span>Studio</span></motion.div>
          <div className="integration-rail integration-rail-right">
            <motion.div className="integration-rail-track" animate={reduceMotion ? undefined : { x: ["0%", "-34%"] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
              {rightRail.map((item, index) => <IntegrationCard key={`${item.name}-${index}`} item={item} />)}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
