"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText, SectionHero } from "@/components/ui/SectionHero";

const projects = [
  {
    title: "UniqLearn",
    image: "/uniqlearn.png",
    figmaUrl: "https://www.figma.com/design/uniqlearn",
    websiteUrl: "https://uniqlearn.example.com",
  },
  {
    title: "Integrative Dermatology",
    image: "/integrative-dermatology.png",
    figmaUrl: "https://www.figma.com/design/integrative-dermatology",
    websiteUrl: "https://integrativedermatology.example.com",
  },
  {
    title: "LearnBud AI",
    image: "/learnbudai.png",
    figmaUrl: "https://www.figma.com/design/learnbud-ai",
    websiteUrl: "https://learnbudai.example.com",
  },
  {
    title: "DTS Splint",
    image: "/dts-splint.png",
    figmaUrl: "https://www.figma.com/design/dts-splint",
    websiteUrl: "https://dtssplint.example.com",
  },
];

export function ProjectShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 80px", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActive(
      Math.min(projects.length - 1, Math.floor(progress * projects.length)),
    );
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;
    const updateTravel = () => {
      if (viewportRef.current && trackRef.current) {
        setTravel(
          Math.max(
            0,
            trackRef.current.scrollWidth - viewportRef.current.clientWidth,
          ),
        );
      }
    };
    updateTravel();
    window.addEventListener("resize", updateTravel);
    const observer = new ResizeObserver(updateTravel);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => {
      window.removeEventListener("resize", updateTravel);
      observer.disconnect();
    };
  }, [isMobile]);

  // Track active slide on mobile horizontal scroll
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setMobileActive(Math.min(projects.length - 1, Math.max(0, index)));
    }
  };

  return (
    <section
      id="featured-work"
      className="border-t border-border bg-background py-14 sm:py-20 md:py-28"
    >
      {/* Centered Responsive Header */}
      <Container className="px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16">
        <ScrollReveal>
          <SectionHero eyebrow="Case Studies" as="h2">
            Featured projects
            <br />
            we&apos;re <GradientText>proud of.</GradientText>
          </SectionHero>
        </ScrollReveal>
      </Container>

      {/* Desktop Sticky Horizontal Scroll Track (md and up) */}
      <div className="hidden md:block">
        <div
          ref={scrollRef}
          className="showcase-scroll"
          aria-label="Featured projects"
        >
          <div ref={viewportRef} className="showcase-sticky">
            <motion.div
              ref={trackRef}
              className="showcase-track"
              style={{ x }}
            >
              {projects.map((project, index) => (
                <div key={project.title} className="showcase-step">
                  <article
                    className={`showcase-card ${index === active ? "is-active" : ""}`}
                  >
                    <div className="showcase-art">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="68vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="showcase-meta">
                      <h3 className="text-base font-semibold tracking-[-0.01em] text-[#151618]">
                        {project.title}
                      </h3>
                      <div className="showcase-actions">
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="showcase-link"
                        >
                          <span className="showcase-link-icon showcase-link-icon--figma">
                            <FaFigma aria-hidden />
                          </span>
                          <span className="showcase-link-label">View Design</span>
                        </a>
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="showcase-link"
                        >
                          <span className="showcase-link-icon showcase-link-icon--web">
                            <HiOutlineGlobeAlt aria-hidden />
                          </span>
                          <span className="showcase-link-label">
                            Visit Website
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Native Touch Snap Carousel (under md) */}
      <div className="block md:hidden">
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none px-4 sm:px-6"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[85vw] max-w-[380px] shrink-0 snap-center"
            >
              <article className="flex flex-col rounded-2xl bg-[#cbc9c93d] p-3.5 sm:p-4 shadow-sm border border-black/5 transition-all">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#e4e4e4]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="85vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="mt-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight text-[#151618]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="showcase-link !py-1 !px-2.5 !gap-1.5"
                    >
                      <span className="showcase-link-icon showcase-link-icon--figma !size-6 !text-[0.7rem]">
                        <FaFigma aria-hidden />
                      </span>
                      <span className="showcase-link-label !text-[0.75rem]">
                        View Design
                      </span>
                    </a>
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="showcase-link !py-1 !px-2.5 !gap-1.5"
                    >
                      <span className="showcase-link-icon showcase-link-icon--web !size-6 !text-[0.8rem]">
                        <HiOutlineGlobeAlt aria-hidden />
                      </span>
                      <span className="showcase-link-label !text-[0.75rem]">
                        Visit Website
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Pagination Indicators */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {projects.map((p, idx) => (
            <span
              key={p.title}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === mobileActive
                  ? "w-6 bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]"
                  : "w-1.5 bg-[#151618]/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}