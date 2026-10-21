"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, fadeUp } from "@/components/ui/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business goals, research your audience, and identify key challenges to define a clear strategy for your digital solution.",
    image: "/discover.png",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create intuitive UI/UX designs and thoughtful user journeys that combine visual appeal, usability, and functionality to deliver exceptional digital experiences.",
    image: "/design.png",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We transform designs into powerful digital products using modern technologies, clean code, and scalable development practices tailored to your business needs.",
    image: "/build.png",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We rigorously test, optimize, and launch your solution to ensure quality, security, and performance, with ongoing support to help your business grow.",
    image: "/deliver.png",
  },
];

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      className="bg-[#0a0b0b] py-20 text-[#f4f2ed] sm:py-28 lg:py-36"
    >
      <Container className="max-w-[1360px]">
        <ScrollReveal className="max-w-5xl" amount={0.4}>
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#b7b8b5]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] shadow-[0_0_12px_#a9f66f]" />{" "}
            Workflow
          </p>
          <h2 className="font-Sora mt-7 text-balance text-3xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl md:text-6xl">
            Our Simple &amp; Fast
            <br />
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              Design Process.
            </span>
          </h2>
        </ScrollReveal>

        <motion.ol
          className="process-flow mt-14 md:mt-20"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.14, delayChildren: 0.08 },
            },
          }}
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              variants={reduceMotion ? undefined : fadeUp}
              transition={{ duration: 0.65, ease }}
              className="process-flow-card"
            >
              <div className="workflow-preview">
                <Image
                  src={step.image}
                  alt={`${step.title} – step ${step.number} of the LIS UI/UX design and development process`}
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
                <span
                  className={`process-flow-arrow ${
                    index % 2 === 0
                      ? "process-flow-arrow--bottom"
                      : "process-flow-arrow--top"
                  }`}
                  aria-hidden="true"
                >
                  <Image
                    src={
                      index % 2 === 0 ? "/arrow-bottom.png" : "/arrow-top.png"
                    }
                    alt=""
                    width={160}
                    height={96}
                    className="process-flow-arrow-img"
                  />
                </span>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}