"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, scaleIn } from "@/components/ui/ScrollReveal";

const technologyNames: Record<number, string> = {
  2: "GitHub",
  3: "JavaScript",
  4: "Adobe Photoshop",
  5: "Android",
  6: "Laravel",
  7: "Flutter",
  8: "CodeIgniter",
  9: "WordPress",
  10: "iOS",
  11: "Adobe Illustrator",
  12: "HTML5",
  13: "Figma",
  14: "React",
  15: "CSS3",
  16: "Angular",
  17: "MySQL",
  18: "Node.js",
  19: "Vue.js",
  20: "Sketch",
};

const technologies = Object.entries(technologyNames).map(([id, name]) => ({
  id: Number(id),
  name,
  src: `/technology/technology${id}.svg`,
}));

function IntegrationCard({
  item,
}: {
  item: (typeof technologies)[number];
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="integration-card"
      title={item.name}
    >
      <Image
        src={item.src}
        alt={`${item.name} logo`}
        width={48}
        height={48}
        loading="eager"
        className="h-[52%] w-[52%] object-contain"
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
      className="integration-section overflow-hidden py-14 sm:py-20 md:py-28 lg:py-36"
    >
      <Container>
        <ScrollReveal className="mx-auto max-w-4xl text-center" amount={0.35}>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />{" "}
            Technologies
          </p>
          <h2 className="mt-4 sm:mt-7 font-Sora text-balance text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-[1.1] sm:leading-[1.02] tracking-[-0.035em] sm:tracking-[-0.055em] text-[#151618]">
            Works with the{" "}
            <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              tools
            </span>
            <br className="hidden sm:inline" />{" "}
            you already use.
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-[#55585b]">
            We bring your existing tools together—from design and development to
            deployment—so your digital product stays connected, scalable, and
            ready to grow.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="integration-network mx-auto mt-10 sm:mt-16 md:mt-20 max-w-[1440px]"
          variants={scaleIn}
          delay={0.1}
          amount={0.2}
        >
          <div className="integration-rail integration-rail-left">
            <motion.div
              className="integration-rail-track"
              animate={reduceMotion ? undefined : { x: ["-33.33%", "0%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
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
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 16,
              delay: 0.2,
            }}
            className="integration-featured"
          >
            <Image
              src="/technologies-logo.svg"
              alt="Liberty Info Science (LIS) logo"
              width={114}
              height={164}
              priority
              className="h-[62%] w-auto max-w-[68%] object-contain"
            />
          </motion.div>

          <div className="integration-rail integration-rail-right">
            <motion.div
              className="integration-rail-track"
              animate={reduceMotion ? undefined : { x: ["0%", "-33.33%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
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
