"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

const projectImages = [
  { src: "/project1.png", alt: "DTS Splint project" },
  { src: "/project2.png", alt: "Integrative Dermatology project" },
  { src: "/project3.png", alt: "LearnBud AI project" },
  { src: "/project4.png", alt: "UniqLearn project" },
  { src: "/project5.png", alt: "UniqLearn project" },
  { src: "/project6.png", alt: "UniqLearn project" },
  { src: "/project7.png", alt: "UniqLearn project" },
  { src: "/project8.png", alt: "UniqLearn project" },
  { src: "/project9.png", alt: "UniqLearn project" },
];

const columns = [
  { items: projectImages, direction: "down" as const, duration: "38s" },
  {
    items: [...projectImages].reverse(),
    direction: "up" as const,
    duration: "44s",
  },
  { items: projectImages, direction: "down" as const, duration: "40s" },
  {
    items: [...projectImages].reverse(),
    direction: "up" as const,
    duration: "46s",
  },
];

function MarqueeColumn({
  items,
  direction,
  duration,
}: {
  items: typeof projectImages;
  direction: "up" | "down";
  duration: string;
}) {
  const loop = [...items, ...items, ...items];

  return (
    <div className="hero-marquee-col">
      <div
        className={`hero-marquee-track hero-marquee-track--${direction}`}
        style={{ animationDuration: duration }}
      >
        {loop.map((item, index) => (
          <article key={`${item.src}-${index}`} className="hero-marquee-card">
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={620}
              sizes="(max-width: 768px) 80vw, 36vw"
              className="hero-marquee-img"
              priority={index < 4}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });

  // Scroll down: zoom in → peak → zoom out
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 1],
    [0.7, 1.0, 1.0, 0.8],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0.7, 1, 1, 0.85],
  );

  return (
    <section
      id="hero"
      className="overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-52"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-Sora text-balance text-5xl font-semibold leading-[1.12] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl lg:text-[4.7rem]">
            Transforming Ideas
            <br />
            Into{" "}
            <span className="bg-gradient-to-r from-[#42BFA5] via-[#2496AE] to-[#0D4FB8] bg-clip-text text-transparent">
              Powerful Digital
            </span>
            <br />
            Experiences
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            We help businesses grow with modern websites, intuitive UI/UX
            design, scalable software solutions, and strategic digital
            innovation tailored for the future.
          </p>
        </div>

        <motion.div
          ref={marqueeRef}
          className="hero-marquee mt-16 md:mt-24"
          aria-label="Featured project gallery"
          style={{ scale, opacity }}
        >
          <div className="hero-marquee-stage">
            {columns.map((column, index) => (
              <MarqueeColumn
                key={index}
                items={column.items}
                direction={column.direction}
                duration={column.duration}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
