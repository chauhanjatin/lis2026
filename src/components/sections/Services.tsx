"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";
import { ScrollReveal, fadeUp } from "@/components/ui/ScrollReveal";
import { homeServices as services } from "@/data/services";

const cardThemes = [
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#8f9194] text-white/95" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#a5a7aa] text-[#1a1a1a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#bebfc2] text-[#1a1a1a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#d6d7d9] text-[#1a1a1a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#ececee] text-[#1a1a1a]" },
];

const serviceImages: Record<string, string> = {
  "ui-ux-design": "/uxdesign.png",
  "Web-Design": "/webdesign.png",
  "Web-Development": "/saaswebapp.png",
  "Mobile-Development": "/mobiledevelopment.png",
  "Business-Services": "/businessservices.png",
};

const serviceHrefMap: Record<string, string> = {
  "ui-ux-design": "/services/ui-ux-design",
  "Web-Design": "/services/web-development",
  "Web-Development": "/services/web-development",
  "Mobile-Development": "/services/mobile-development",
  "Business-Services": "/services/business-services",
};

const serviceTagsMap: Record<string, string[]> = {
  "ui-ux-design": ["User Research", "Wireframing", "UI Design", "Design Systems"],
  "Web-Design": ["Brand Identity", "Interactive UI", "Responsive Design", "Figma"],
  "Web-Development": ["Next.js", "React", "TypeScript", "Scalable APIs"],
  "Mobile-Development": ["iOS & Android", "React Native", "Mobile UI", "App Architecture"],
  "Business-Services": ["Strategic Consulting", "Market Growth", "Brand Strategy", "Digital Roadmap"],
};

function ServiceArtwork({
  serviceId,
  title,
}: {
  serviceId: string;
  title: string;
}) {
  const src = serviceImages[serviceId] ?? "/uxdesign.png";

  return (
    <div className="relative aspect-[1.25] sm:aspect-[1.15] overflow-hidden rounded-2xl border border-white/10 shadow-lg">
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 640px) 80vw, 20rem"
        className="object-cover"
      />
    </div>
  );
}

export function Services({ hideHeader = false }: { hideHeader?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>(services[0]?.id ?? "");
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();

  // Detect desktop viewports (>= 1024px)
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.15", "end 0.85"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion || !isDesktop) return;

    const index = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(progress * services.length)),
    );

    setActiveId(services[index].id);
  });

  const handleToggleCard = (serviceId: string) => {
    if (!isDesktop) {
      // Accordion toggle on mobile/tablet
      setActiveId((current) => (current === serviceId ? "" : serviceId));
    } else {
      setActiveId(serviceId);
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-white text-[#101116]"
      style={{
        height: !isDesktop || reduceMotion ? "auto" : `${services.length * 80 + 35}vh`,
      }}
    >
      <svg aria-hidden width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="services-arrow-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0D4FB8" />
            <stop offset="100%" stopColor="#42BFA5" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative py-14 sm:py-20 lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center lg:py-28">
        <Container
          className={cn(
            "grid gap-10 sm:gap-12",  
            hideHeader
              ? "max-w-3xl"
              : "lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20",
          )}
        >
          {!hideHeader && (
            <ScrollReveal
              className="lg:sticky lg:top-28 lg:h-fit"
              amount={0.35}
              variants={fadeUp}
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.13em] text-[#676d70]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />{" "}
                Our services
              </p>
              <h2 className="font-Sora mt-4 sm:mt-6 max-w-xl text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.08] sm:leading-[1.02] tracking-[-0.04em] sm:tracking-[-0.055em]">
                Inspiring digital{" "}
                <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
                  experiences.
                </span>
              </h2>
              <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed text-[#65696d]">
                Strategy, design, and technology aligned around the people using
                your product.
              </p>
              <Link
                href="/contact"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#101116] px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Start your project <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          )}

          <div className="flex flex-col gap-3 sm:gap-4">
            {services.map((service, index) => {
              const isActive = activeId === service.id;
              const theme = cardThemes[index % cardThemes.length];
              const tags = serviceTagsMap[service.id] ?? ["Discovery","Strategy","Design","Development",];

              return (
                <article
                  key={service.id}
                  onClick={() => handleToggleCard(service.id)}
                  className={`group relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.35rem] cursor-pointer select-none transition-[background-color,color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? theme.active : theme.idle
                  } ${
                    isActive
                      ? "shadow-[0_24px_60px_rgba(10,10,10,0.18)]"
                      : "hover:shadow-md"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      aria-hidden="true"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 0.8, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0_2px,transparent_2px_18px)]"
                    />
                  ) : null}

                  <div className="relative z-[1] flex w-full items-center justify-between gap-4 p-5 sm:p-7 md:p-8">
                    <span className="font-Sora max-w-[78%] text-xl font-medium tracking-[-.04em] sm:text-2xl md:text-3xl lg:text-4xl">
                      {service.title}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`text-xs sm:text-sm font-medium tabular-nums transition-colors duration-500 ${
                          isActive ? "text-white/55" : "text-current/50"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "inline-grid size-7 place-items-center rounded-full transition-transform duration-300",
                          isActive
                            ? "bg-white/10 text-white rotate-45"
                            : "bg-black/5 text-current/60 group-hover:bg-black/10"
                        )}
                        aria-hidden="true"
                      >
                        <Plus size={14} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>

                  <AnimatePresence initial={false} mode="wait">
                    {isActive && (
                      <motion.div
                        key={`content-${service.id}`}
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-[1] overflow-hidden">
                        <div className="px-5 pb-5 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
                         
                          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">
                            {service.description}
                          </p>

                          <div className="mt-5 max-w-[260px] sm:max-w-xs">
                            <ServiceArtwork
                              serviceId={service.id}
                              title={service.title}
                            />
                          </div>

                          <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/85"
                              >
                                {tag}
                              </span> 
                            ))}
                          </div>

                          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                            <Link
                              href={serviceHrefMap[service.id] ?? "/services"}
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent hover:underline"
                              onClick={(e) => e.stopPropagation()}>
                              Explore service{" "}
                              <ArrowUpRight
                                size={14}
                                aria-hidden="true"
                                stroke="url(#services-arrow-gradient)"
                              />
                            </Link>
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}