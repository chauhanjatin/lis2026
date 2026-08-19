"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const projects = [
  { title: "Payroll", year: "2026", kind: "payroll", tone: "bg-[#e8ddcf]" },
  { title: "Direct", year: "2025", kind: "direct", tone: "bg-[#dce5d7]" },
  { title: "Serein", year: "2025", kind: "serein", tone: "bg-[#dce3ef]" },
  { title: "Novum", year: "2024", kind: "novum", tone: "bg-[#eadfe5]" },
];

function Artwork({ kind }: { kind: (typeof projects)[number]["kind"] }) {
  if (kind === "payroll") {
    return (
      <div className="showcase-art showcase-payroll">
        <div className="watch-strap" />
        <div className="watch-face">
          <span>PAYROLL</span>
          <strong>09:41</strong>
          <small>Made simple</small>
        </div>
      </div>
    );
  }
  if (kind === "direct") {
    return (
      <div className="showcase-art showcase-direct">
        <div className="tree" />
        <div className="wall" />
        <div className="sun-shadow" />
      </div>
    );
  }
  if (kind === "serein") {
    return (
      <div className="showcase-art showcase-serein">
        <div className="serein-orb orb-one" />
        <div className="serein-orb orb-two" />
        <div className="serein-card">
          SEREIN<span>wellness, in rhythm</span>
        </div>
      </div>
    );
  }
  return (
    <div className="showcase-art showcase-novum">
      <div className="novum-circle" />
      <div className="novum-panel">
        N<span>Build forward.</span>
      </div>
    </div>
  );
}

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
        <div ref={viewportRef} className="showcase-sticky">
          <motion.div
            ref={trackRef}
            className="showcase-track"
            style={isMobile ? undefined : { x }}
          >
            {projects.map((project, index) => (
              <div key={project.title} className="showcase-step">
                <article
                  className={`showcase-card ${project.tone} ${index === active ? "is-active" : ""}`}
                >
                  <Artwork kind={project.kind} />
                  <div className="mt-5 flex items-center justify-between gap-4 px-1">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span>{project.year}</span>
                      <ArrowUpRight size={18} aria-hidden="true" />
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