"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/components/ui/ScrollReveal";

const projectImages = [
  { src: "/project1.png", alt: "Cinema UGC ad platform – creator marketplace web app and mobile UI design" },
  { src: "/project2.png", alt: "Parasol Virtual Services AI course website – responsive desktop and mobile design" },
  { src: "/project3.png", alt: "Salviali Integrated Medicine herbal healthcare website design on a laptop" },
  { src: "/project4.png", alt: "VIOC fertility and oncology care center responsive website design" },
  { src: "/project5.png", alt: "Prime Estate real estate developer website UI design" },
  { src: "/project6.png", alt: "Zwiggo smart food delivery mobile app UI design" },
  { src: "/project7.png", alt: "Integrative Dermatology clinic website – desktop and mobile web design" },
  { src: "/project8.png", alt: "Holidayyyy smart hotel booking web app and mobile UI design" },
  { src: "/project9.png", alt: "Talk2Hope online counselling and mental health website design" },
];

const col1 = [projectImages[0]!, projectImages[1]!, projectImages[2]!, projectImages[3]!, projectImages[4]!];
const col2 = [projectImages[5]!, projectImages[6]!, projectImages[7]!, projectImages[8]!, projectImages[0]!];
const col3 = [projectImages[4]!, projectImages[3]!, projectImages[2]!, projectImages[1]!, projectImages[8]!];
const col4 = [projectImages[8]!, projectImages[7]!, projectImages[6]!, projectImages[5]!, projectImages[2]!];

const columns = [
  { items: col1, direction: "down" as const, duration: "32s" },
  { items: col2, direction: "up" as const, duration: "36s" },
  { items: col3, direction: "down" as const, duration: "34s" },
  { items: col4, direction: "up" as const, duration: "38s" },
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
  decorative = false,
  eager = false,
  isPaused = false,
}: {
  items: typeof projectImages;
  direction: "up" | "down";
  duration: string;
  decorative?: boolean;
  eager?: boolean;
  isPaused?: boolean;
}) {
  // Loop twice for seamless infinite scroll
  const loop = [...items, ...items];

  return (
    <div className="hero-marquee-col">
      <div
        className={`hero-marquee-track hero-marquee-track--${direction} ${
          isPaused ? "is-paused" : ""
        }`}
        style={{ animationDuration: duration }}
      >
        {loop.map((item, index) => (
          <article key={`${item.src}-${index}`} className="hero-marquee-card">
            <Image
              src={item.src}
              alt={decorative || index >= items.length ? "" : item.alt}
              width={500}
              height={340}
              sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, 22vw"
              className="hero-marquee-img"
              loading={eager && index === 0 ? "eager" : "lazy"}
              priority={eager && index === 0}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);
  const reduceMotion = useReducedMotion();

  // Pause marquee animations when hero is scrolled out of viewport
  useEffect(() => {
    if (!marqueeRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry?.isIntersecting ?? true);
      },
      { rootMargin: "150px" },
    );
    observer.observe(marqueeRef.current);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55, 1],
    [0.78, 1.0, 1.0, 0.85],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.75, 1],
    [0.75, 1, 1, 0.88],
  );

  return (
    <section
      id="hero"
      className="overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-52 relative"
    >
      <div className="hero-gradient" aria-hidden="true" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1
            aria-label="Transforming Ideas Into Powerful Digital Experiences"
            className="font-Sora text-balance text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.22] sm:leading-[1.28] tracking-[-0.03em] text-foreground"
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
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            transition={{ duration: 0.75, ease }}
            className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted md:text-lg"
          >
            We help businesses grow with modern websites, intuitive UI/UX
            design, scalable software solutions, and strategic digital
            innovation tailored for the future.
          </motion.p>
        </div>

        <motion.div
          ref={marqueeRef}
          className="hero-marquee mt-16 md:mt-24"
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
                decorative={index > 0}
                eager={index <= 1}
                isPaused={!isInView}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}