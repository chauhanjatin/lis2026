"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp } from "@/components/ui/ScrollReveal";
import { cn } from "@/components/lib/cn";
import {
  portfolioFilters,
  projects,
  type PortfolioFilter,
} from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const cardExit = {
  opacity: 0,
  y: 20,
  scale: 0.98,
  transition: { duration: 0.3, ease },
};

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("all");
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="portfolio-section pb-16 md:pb-24">
      <Container className="relative z-[1]">
        <div className="flex lg:flex-row lg:items-start lg:justify-center lg:gap-16 justify-center items-center mt-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="flex flex-wrap items-center gap-6 sm:gap-8"
            role="tablist"
            aria-label="Filter projects"
          >
            {portfolioFilters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "relative pb-1 text-sm font-semibold tracking-[-0.01em] transition-colors",
                    isActive
                      ? "text-[#151618]"
                      : "text-[#8f9194] hover:text-[#606468]",
                  )}>
                  {filter.label}
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-filter"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-[#151618]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        <ul
          key={activeFilter}
          role="tabpanel"
          className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={project.slug}
                layout
                variants={fadeUp}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                exit={reduceMotion ? undefined : cardExit}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease,
                }}
              >
                <article className="portfolio-card group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#e8e9eb]">
                    <Link
                      href={`/work/${project.slug}`}
                      className="absolute inset-0 z-0"
                      aria-label={`View ${project.title} case study`}
                    />
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h2 className="font-Sora text-2xl font-semibold tracking-[-0.03em] text-white sm:text-[1.75rem]">
                            {project.title}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-white/80">
                            {project.category}
                          </p>
                        </div>
                        <div className="showcase-actions shrink-0">
                          <a
                            href={project.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="showcase-link"
                            onClick={(event) => event.stopPropagation()}
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
                            onClick={(event) => event.stopPropagation()}
                          >
                            <span className="showcase-link-icon showcase-link-icon--web">
                              <HiOutlineGlobeAlt aria-hidden />
                            </span>
                            <span className="showcase-link-label">Visit Website</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </Container>
    </section>
  );
}
