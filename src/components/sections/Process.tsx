"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const steps = [
  { number: "01", title: "Pick a template", description: "Start from a proven foundation, then shape the workflow around your team and goals." },
  { number: "02", title: "Share the link", description: "Invite teammates and stakeholders into one clear, collaborative project space." },
  { number: "03", title: "Run the phases", description: "Move from research to design and delivery with every next step in sync." },
  { number: "04", title: "Capture actions", description: "Turn decisions into clear action items that carry the project confidently forward." },
];

function WorkflowPreview({ stage }: { stage: number }) {
  return <div className={`workflow-preview workflow-preview-${stage}`} aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>;
}

export function Process() {
  return (
    <section id="process" className="bg-[#0a0b0b] py-20 text-[#f4f2ed] sm:py-28 lg:py-36">
      <Container className="max-w-[1360px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65 }} className="max-w-5xl">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#b7b8b5]"><span className="h-2 w-2 rounded-full bg-[#a9f66f] shadow-[0_0_12px_#a9f66f]" /> Workflow</p>
          <h2 className="font-display mt-7 text-balance text-6xl font-medium leading-[.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[6rem]">Our Simple &amp; Fast<br /><span className="text-[#858685]">Design Process.</span></h2>
        </motion.div>

        <ol className="process-flow mt-14 md:mt-20">
          {steps.map((step, index) => (
            <motion.li key={step.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="process-flow-card">
              <WorkflowPreview stage={index + 1} />
              <h3 className="mt-5 text-center text-lg font-semibold tracking-[-0.03em] text-[#f5f4f0]">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[14rem] text-center text-sm leading-relaxed text-[#a8aaa6]">{step.description}</p>
              {index < steps.length - 1 && (
                <svg className="process-flow-arrow" viewBox="0 0 120 72" fill="none" aria-hidden="true">
                  <path d="M6 14C34 62 78 62 104 24" />
                  <path className="process-flow-arrowhead" d="m96 25 9-1-2 9" />
                </svg>
              )}
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
