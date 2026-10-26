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
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/80 bg-black transition-transform hover:scale-105 sm:size-10"
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
                    {project.caseStudyUrl ? (
                      <Link
                        href={project.caseStudyUrl}
                        className="absolute inset-0 z-[3]"
                        aria-label={`View ${project.title} case study`}
                      />
                    ) : null}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-gradient-to-t from-black/75 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-8">
                      <div className="flex  gap-4  items-end justify-between">
                        <div>
                          <h2 className="font-Sora sm:text-2xl text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[1.75rem]">
                            {project.title}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-white/80">
                            {project.category}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <ProjectLinkIcon
                            href={project.figmaUrl}
                            src="/figma-link.png"
                            label={`${project.title} Figma design`}
                          />
                          <ProjectLinkIcon
                            href={project.websiteUrl}
                            src="/link.png"
                            label={`${project.title} website`}
                          />
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