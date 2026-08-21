"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    image: "/discover.png",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
    image: "/design.png",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Using modern technologies, we build efficiency and skill, creating flexible and scalable business-driven solutions.",
    image: "/build.png",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We take iterative approach to both our work and our practice, always looking for ways to improve what we do.",
    image: "/deliver.png",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#0a0b0b] py-20 text-[#f4f2ed] sm:py-28 lg:py-36">
      <Container className="max-w-[1360px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="max-w-5xl"
        >
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#b7b8b5]">
            <span className="h-2 w-2 rounded-full bg-[#a9f66f] shadow-[0_0_12px_#a9f66f]" />{" "}
            Workflow
          </p>
          <h2 className="font-display mt-7 text-balance text-6xl font-medium leading-[.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[6rem]">
            Our Simple &amp; Fast
            <br />
            <span className="text-[#858685]">Design Process.</span>
          </h2>
        </motion.div>

        <ol className="process-flow mt-14 md:mt-20">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="process-flow-card"
            >
              <div className="workflow-preview">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 767px) 45vw, 22vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-center text-lg font-semibold tracking-[-0.03em] text-[#f5f4f0]">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[14rem] text-center text-sm leading-relaxed text-[#a8aaa6]">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <svg
                  className="process-flow-arrow"
                  viewBox="0 0 120 72"
                  fill="none"
                  aria-hidden="true"
                >
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
