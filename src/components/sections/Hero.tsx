"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, fadeUp } from "@/components/ui/ScrollReveal";

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

const ease = [0.22, 1, 0.36, 1] as const;

function BlurLetters({
  text,
  className,
  startIndex = 0,
}: {
  text: string;
  className?: string;
  startIndex?: number;
}) {
  return (  
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${startIndex + index}-${char}`}
          initial={{ opacity: 0, filter: "blur(16px)", x: -22 }}
          animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.12 + (startIndex + index) * 0.032,
            ease,
          }}
          className={`inline-block will-change-[filter,opacity,transform] ${
            char === " " ? "w-[0.28em]" : ""
          } ${className ?? ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
}

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
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });

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
      className="overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-52  relative"
    >
      <div className="hero-gradient"></div>

      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.08 },
            },
          }}
        >
          <h1
            aria-label="Transforming Ideas Into Powerful Digital Experiences"
            className="font-Sora text-balance text-5xl font-bold leading-[1.30] tracking-[-0.025em] text-foreground sm:text-6xl md:text-7xl"
          >
            {reduceMotion ? (
              <>
                Transforming Ideas
                <br />
                Into <span className="text-[#3391B1]">Powerful Digital</span>
                <br />
                Experiences
              </>
            ) : (
              <>
                <BlurLetters text="Transforming Ideas" startIndex={0} />
                <br />
                <BlurLetters text="Into " startIndex={18} />
                <BlurLetters
                  text="Powerful Digital"
                  startIndex={23}
                  className="text-[#3391B1]"
                />
                <br />
                <BlurLetters text="Experiences" startIndex={39} />
              </>
            )}
          </h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.75, ease }}
            className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted md:text-lg"
          >
            We help businesses grow with modern websites, intuitive UI/UX
            design, scalable software solutions, and strategic digital
            innovation tailored for the future.
          </motion.p>
        </motion.div>

        <ScrollReveal
          className="mt-16 md:mt-24"
          delay={0.2}
          duration={0.9}
          amount={0.15}
        >
          <motion.div
            ref={marqueeRef}
            className="hero-marquee"
            aria-label="Featured project gallery"
            style={reduceMotion ? undefined : { scale, opacity }}
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
        </ScrollReveal>
      </Container>
    </section>
  );
}