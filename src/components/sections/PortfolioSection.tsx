"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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

function ProjectLinkIcon({
  href,
  src,
  label,
}: {
  href?: string;
  src: string;
  label: string;
}) {
  const url = href?.trim();
  if (!url || url === "/") return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center transition-transform hover:scale-105"
      onClick={(event) => event.stopPropagation()}
    >
      <img src={src} alt="" className="size-5 object-contain" />
    </a>
  );
}

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
        <div className="flex justify-center items-center mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
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
                    "relative inline-flex items-center justify-center rounded-full px-5 py-2 md:px-6 md:py-2.5 text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#0D4FB8]/50 active:scale-95",
                    isActive
                      ? "text-white font-semibold shadow-md shadow-[#0D4FB8]/25 border border-transparent"
                      : "border border-[#E5E7EB] bg-[#FAFBFD] text-[#606468] hover:border-[#101116]/30 hover:text-[#101116] hover:bg-white shadow-sm",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-filter-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <ul
          key={activeFilter}
          role="tabpanel"
          className="mt-10 md:mt-12 lg:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={project.slug}
                variants={reduceMotion ? undefined : fadeUp}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                exit={reduceMotion ? undefined : cardExit}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : (index % 2) * 0.12,
                  ease,
                }}
              >
                <article className="portfolio-card group">
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#e8e9eb] bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="eager"
                      decoding="async"
                      className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-gradient-to-t from-black/100 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-8">
                      <div className="flex  gap-4  items-end justify-between">
                        <div>
                          <h2 className="font-Sora sm:text-2xl text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[1.75rem]">
                            {project.title}
                          </h2>
                          <p className="mt-2 text-sm font-medium text-white/80">
                            {project.category}
                          </p>
                          {project.displayTags && project.displayTags.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {project.displayTags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-[#00000080] opacity-[20px]  border border-white/20 px-3 py-1 text-[12px] text-white/90 tracking-wide"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col shrink-0 items-center gap-2">
                          {project.figmaUrl && (
                            <a
                              href={project.figmaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${project.title} design on Figma`}
                              onClick={(e) => e.stopPropagation()}
                              className="flex gap-2.5 items-center py-2 px-3.5 rounded-[40px] bg-black text-white border border-white transition-opacity hover:opacity-80"
                            >
                              <img src="/figma-link.png" alt="" className="size-5 object-contain" />
                              <p>View Design</p>
                            </a>
                          )}
                          {project.websiteUrl && (
                            <a
                              href={project.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${project.title} website`}
                              onClick={(e) => e.stopPropagation()}
                              className="flex gap-2.5 items-center py-2 px-3.5 rounded-[40px] bg-black text-white border border-white transition-opacity hover:opacity-80"
                            >
                              <img src="/link.png" alt="" className="size-5 object-contain" />
                              <p>View Website</p>
                            </a>
                          )}                        </div>
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
