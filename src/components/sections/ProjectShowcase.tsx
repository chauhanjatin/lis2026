"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText, SectionHero } from "@/components/ui/SectionHero";

const projects = [
  {
    title: "UniqLearn",
    alt: "UniqLearn education dashboard – teacher analytics web app UI/UX design case study",
    image: "/uniqlearn/uniqlearn.png",
    figmaUrl: "https://www.figma.com/design/uniqlearn",
    caseStudyUrl: "/work/uniqlearn",
  },
  {
    title: "Integrative Dermatology",
    alt: "Integrative Dermatology clinic website design case study – desktop and mobile",
    image: "/integrative-dermatology.png",
    figmaUrl: "https://www.figma.com/design/integrative-dermatology",
    caseStudyUrl: "/work/integrative-dermatology",
    websiteUrl: "https://integrativedermatology.co/",
  },
  {
    title: "LearnBud AI",
    alt: "LearnBud AI tutoring mobile app UI/UX design case study",
    image: "/learnbudai/learnbudai.png",
    figmaUrl: "https://www.figma.com/design/learnbud-ai",
    caseStudyUrl: "/work/learnbud-ai",
  },
  {
    title: "DTS Splint",
    alt: "DTS Splint AI-powered dental splint design software UI case study",
    image: "/dts-splint.png",
    figmaUrl: "https://www.figma.com/design/dts-splint",
    caseStudyUrl: "/work/dts-splint",
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

  // Mobile navigation arrows
  const handleMobilePrev = () => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.clientWidth * 0.85;
      mobileScrollRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleMobileNext = () => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.clientWidth * 0.85;
      mobileScrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section
      id="featured-work"
      className="border-t border-border bg-background py-14 sm:py-20 md:py-28"
    >
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
            <Link
              href="/projects"
              className="absolute bottom-8 left-1/2 z-30 inline-flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#101116] py-2.5 pl-6 pr-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(16,17,22,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View All Projects
              <span className="inline-grid size-8 place-items-center rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] text-white">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </Link>
            <motion.div ref={trackRef} className="showcase-track" style={{ x }}>
              {projects.map((project, index) => (
                <div key={project.title} className="showcase-step">
                  <article
                    className={`showcase-card group ${index === active ? "is-active" : ""}`}
                  >
                    {/* Clickable Image with Hover Arrow View Button */}
                    <a
                      href={project.caseStudyUrl}
                      rel="noopener noreferrer"
                      className="showcase-art group/art block relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="68vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover/art:scale-[1.04]"
                        priority={index === 0}
                      />

                      {/* Hover Overlay with Centered View Button + Arrow */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover/art:opacity-100">
                        <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0c0d10] shadow-[0_16px_36px_rgba(0,0,0,0.3)] transition-all duration-300 transform scale-75 group-hover/art:scale-100">
                          <span>View Project</span>
                          <span className="inline-grid size-6 place-items-center rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] text-white">
                            <ArrowUpRight size={14} strokeWidth={2.4} />
                          </span>
                        </div>
                      </div>

                      {/* Top-Right Corner Arrow Button */}
                      <div className="pointer-events-none absolute top-4 right-4 z-10 size-11 rounded-full bg-white/95 text-[#0c0d10] border border-white/40 grid place-items-center opacity-0 group-hover/art:opacity-100 transform translate-y-2 group-hover/art:translate-y-0 transition-all duration-300 shadow-xl">
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2.4}
                          className="transition-transform group-hover/art:translate-x-0.5 group-hover/art:-translate-y-0.5"
                        />
                      </div>
                    </a>

                    <div className="showcase-meta">
                      <h3 className="text-base font-semibold tracking-[-0.01em] text-[#151618]">
                        {project.title}
                      </h3>
                      <div className="showcase-actions">
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="showcase-link group/link"
                        >
                          <span className="showcase-link-icon showcase-link-icon--figma">
                            <FaFigma aria-hidden />
                          </span>
                          <span className="showcase-link-label">
                            View Design
                          </span>
                          <ArrowUpRight
                            size={12}
                            className="text-[#145a7a] opacity-50 transition-opacity group-hover/link:opacity-100"
                          />
                        </a>
                        
                        {project.websiteUrl ? (
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="showcase-link group/link"
                          >
                            <span className="showcase-link-icon showcase-link-icon--web">
                              <HiOutlineGlobeAlt aria-hidden />
                            </span>
                            <span className="showcase-link-label">
                              Visit Website
                            </span>
                            <ArrowUpRight
                              size={12}
                              className="text-[#145a7a] opacity-50 transition-opacity group-hover/link:opacity-100"
                            />
                          </a>
                        ) : null}
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
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none px-4 sm:px-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[85vw] max-w-[380px] shrink-0 snap-center">
              <article className="group flex flex-col rounded-2xl bg-[#cbc9c93d] p-3.5 sm:p-4 shadow-sm border border-black/5 transition-all">
                <a href={project.caseStudyUrl}
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#e4e4e4] group/mobileArt block">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="85vw"
                    className="object-cover transition-transform duration-500 group-hover/mobileArt:scale-[1.03]"
                    priority={index === 0}
                  />

                  {/* Top-Right Arrow Indicator on Mobile */}
                  <div className="absolute top-3 right-3 z-10 size-9 rounded-full bg-white/95 text-[#0c0d10] border border-white/40 grid place-items-center shadow-lg">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </div>
                </a>

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
                      <ArrowUpRight
                        size={11}
                        className="text-[#145a7a] opacity-60"
                      />
                    </a>
                    {project.websiteUrl ? (
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
                        <ArrowUpRight
                          size={11}
                          className="text-[#145a7a] opacity-60"
                        />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Navigation Arrows & Indicators */}
        <div className="mt-4 flex items-center justify-between px-6">
          <div className="flex items-center gap-1.5">
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

          <div className="flex items-center gap-2">
            <button
              onClick={handleMobilePrev}
              disabled={mobileActive === 0}
              aria-label="Previous project"
              className="inline-grid size-8 place-items-center rounded-full border border-black/10 bg-white text-[#151618] shadow-sm transition-all disabled:opacity-30"
            >
              <ArrowLeft size={14} strokeWidth={2.2} />
            </button>

            <button
              onClick={handleMobileNext}
              disabled={mobileActive === projects.length - 1}
              aria-label="Next project"
              className="inline-grid size-8 place-items-center rounded-full border border-black/10 bg-white text-[#151618] shadow-sm transition-all disabled:opacity-30"
            >
              <ArrowRight size={14} strokeWidth={2.2} />
            </button>
          </div>

        </div>
      </div>

      <Container className="px-4 sm:px-6 mt-8 flex justify-center md:hidden">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 rounded-full bg-[#101116] py-2.5 pl-6 pr-2.5 text-sm sm:text-[15px] font-semibold text-white shadow-[0_12px_30px_-10px_rgba(16,17,22,0.45)] transition-transform hover:scale-[1.03] active:scale-[0.98]">
          View All Projects
          <span className="inline-grid size-8 place-items-center rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] text-white">
            <ArrowUpRight
              size={16}
              strokeWidth={2.4}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </Link>
      </Container>

    </section>
  );
}