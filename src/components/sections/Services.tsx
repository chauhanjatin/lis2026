"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

function ServiceArtwork({ index }: { index: number }) {
  const artwork = [
    <><span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_70%,#68d4e1,transparent_23%),linear-gradient(135deg,#15243a,#6284a1)]" /><span className="absolute bottom-0 left-[34%] h-[72%] w-[27%] rounded-t-[2rem] bg-[#d9f7f5]/90 shadow-[0_0_45px_#caf6ff]" /></>,
    <><span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#f8f6dc,transparent_18%),linear-gradient(150deg,#151927,#647796)]" /><span className="absolute bottom-[18%] left-[22%] h-[38%] w-[56%] rounded-[50%] border border-white/60 bg-[#161b2d] shadow-[0_-14px_30px_rgba(255,255,255,.32)]" /></>,
    <><span className="absolute inset-0 bg-[linear-gradient(135deg,#e7be94,#92655c_50%,#2f2631)]" /><span className="absolute inset-x-[27%] bottom-0 h-[78%] rounded-t-[5rem] bg-[linear-gradient(90deg,#8b5e48,#f3d2a0,#7b483c)] opacity-85" /></>,
  ][index % 3];

  return <div className="relative aspect-[1.15] overflow-hidden rounded-2xl border border-black/10">{artwork}</div>;
}

export function Services() {
  const [activeId, setActiveId] = useState(services[0]?.id);

  return (
    <section id="services" className="bg-white py-20 text-[#101116] sm:py-28 lg:py-36">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.13em] text-[#676d70]"><span className="h-2 w-2 rounded-full bg-[#73ce64]" /> Our services</p>
          <h2 className="font-display mt-7 max-w-xl text-5xl font-medium leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-7xl">Inspiring digital <span className="text-[#8a8d90]">experiences.</span></h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#65696d]">Strategy, design, and technology aligned around the people using your product.</p>
          <a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#101116] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]">Start your project <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>

        <div className="border-t border-[#dfe1df]">
          {services.map((service, index) => {
            const isActive = activeId === service.id;
            return (
              <motion.article layout key={service.id} className="border-b border-[#dfe1df] py-5 sm:py-6">
                <button type="button" onClick={() => setActiveId(isActive ? "" : service.id)} aria-expanded={isActive} className="flex w-full items-center justify-between gap-6 text-left">
                  <span className="font-display text-3xl font-medium tracking-[-.045em] sm:text-4xl">/ {service.title}</span>
                  <ChevronDown size={25} className={`shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <div className="pt-5 sm:pt-7">
                        <p className="max-w-2xl text-base leading-relaxed text-[#64686c] sm:text-lg">{service.description}</p>
                        <div className="mt-6 grid grid-cols-3 gap-3"><ServiceArtwork index={index} /></div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {["Discovery", "Strategy", "Design", "Development"].map((tag) => <span key={tag} className="rounded-full border border-[#dfe1df] bg-[#f7f8f6] px-3 py-1.5 text-xs font-medium text-[#53585b]">{tag}</span>)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
