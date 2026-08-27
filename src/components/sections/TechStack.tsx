"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, scaleIn } from "@/components/ui/ScrollReveal";

const technologies = Array.from({ length: 19 }, (_, index) => {
  const id = index + 2;
  return {
    id,
    name: `Technology ${id}`,
    src: `/technology/technology${id}.svg`,
  };
});

function IntegrationCard({
  item,
}: {
  item: (typeof technologies)[number];
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      className="integration-card"
      title={item.name}
    >
      <Image
        src={item.src}
        alt={item.name}
        width={48}
        height={48}
        className="h-[55%] w-[55%] object-contain"
      />
    </motion.div>
  );
}

export function TechStack() {
  const reduceMotion = useReducedMotion();
  const mid = Math.ceil(technologies.length / 2);
  const left = technologies.slice(0, mid);
  const right = technologies.slice(mid);
  const leftRail = [...left, ...left, ...left];
  const rightRail = [...right, ...right, ...right];

  return (
    <section
      id="tech-stack"
      className="integration-section overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <ScrollReveal className="mx-auto max-w-4xl text-center" amount={0.35}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />{" "}
            Technologies
          </p>
          <h2 className="mt-7 font-Sora text-balance text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-[#151618] sm:text-6xl md:text-7xl">
            Works with the{" "}
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              tools
            </span>
            <br />
            you already use.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-[#55585b] sm:text-lg">
            We bring your existing tools together—from design and development to
            deployment—so your digital product stays connected, scalable, and
            ready to grow.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="integration-network mx-auto mt-14 max-w-[1440px] sm:mt-20"
          variants={scaleIn}
          delay={0.1}
          amount={0.2}
        >
          <div className="integration-rail integration-rail-left">
            <motion.div
              className="integration-rail-track"
              animate={reduceMotion ? undefined : { x: ["-34%", "0%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {leftRail.map((item, index) => (
                <IntegrationCard key={`left-${item.id}-${index}`} item={item} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 16,
              delay: 0.2,
            }}
            className="integration-featured"
          >
            <img
              src="/technologies-logo.svg"
              alt=""
              width={76}
              height={76}
              aria-hidden="true"
            />
          </motion.div>

          <div className="integration-rail integration-rail-right">
            <motion.div
              className="integration-rail-track"
              animate={reduceMotion ? undefined : { x: ["0%", "-34%"] }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            >
              {rightRail.map((item, index) => (
                <IntegrationCard
                  key={`right-${item.id}-${index}`}
                  item={item}
                />
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
