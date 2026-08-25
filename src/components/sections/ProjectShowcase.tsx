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
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [travel, setTravel] = useState(0);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
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
    const observer = new ResizeObserver(updateTravel);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section
      id="featured-work"
      className="border-t border-border bg-background py-20 md:py-28"
    >
      <div
        ref={scrollRef}
        className="showcase-scroll"
        aria-label="Featured projects"
      >
        <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#242424] text-center">
          <span className="mr-2 align-[0.08em] text-[0.5em]">●</span>
          Case Studies
        </p>
        <div ref={viewportRef} className="showcase-sticky">
          <motion.div
            ref={trackRef}
            className="showcase-track"
            style={isMobile ? undefined : { x }}
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
                      sizes="(max-width: 767px) 88vw, 68vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <div className="showcase-meta">
                    <h3 className="text-sm font-semibold tracking-[-0.01em] text-[#151618]">
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
    </section>
  );
}
