"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

const cardThemes = [
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#8f9194] text-white/90" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#b8babd] text-[#2a2a2a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#d8dadc] text-[#1a1a1a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#ececee] text-[#1a1a1a]" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ServiceArtwork({ index }: { index: number }) {
  const artwork = [
    <>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_25%_70%,#68d4e1,transparent_23%),linear-gradient(135deg,#15243a,#6284a1)]" />
      <span className="absolute bottom-0 left-[34%] h-[72%] w-[27%] rounded-t-[2rem] bg-[#d9f7f5]/90 shadow-[0_0_45px_#caf6ff]" />
    </>,
    <>
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#f8f6dc,transparent_18%),linear-gradient(150deg,#151927,#647796)]" />
      <span className="absolute bottom-[18%] left-[22%] h-[38%] w-[56%] rounded-[50%] border border-white/60 bg-[#161b2d] shadow-[0_-14px_30px_rgba(255,255,255,.32)]" />
    </>,
    <>
      <span className="absolute inset-0 bg-[linear-gradient(135deg,#e7be94,#92655c_50%,#2f2631)]" />
      <span className="absolute inset-x-[27%] bottom-0 h-[78%] rounded-t-[5rem] bg-[linear-gradient(90deg,#8b5e48,#f3d2a0,#7b483c)] opacity-85" />
    </>,
  ][index % 3];

  return (
    <div className="relative aspect-[1.15] overflow-hidden rounded-2xl border border-white/10">
      {artwork}
    </div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(services[0]?.id);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.15", "end 0.85"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion) return;

    const index = Math.min(
      services.length - 1,
      Math.max(0, Math.floor(progress * services.length)),
    );

    setActiveId(services[index].id);
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-white text-[#101116]"
      style={{
        height: reduceMotion ? "auto" : `${services.length * 85 + 40}vh`,
      }}
    >
      <div className="sticky top-0 flex min-h-screen items-center py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <motion.div
            className="lg:sticky lg:top-28 lg:h-fit"
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.13em] text-[#676d70]">
              <span className="h-2 w-2 rounded-full bg-[#73ce64]" /> Our
              services
            </p>
            <h2 className="font-Sora mt-7 max-w-xl text-5xl font-medium leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Inspiring digital{" "}
              <span className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
                experiences.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#65696d]">
              Strategy, design, and technology aligned around the people using
              your product.
            </p>
            <motion.a
              href="#contact"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#101116] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Start your project <ArrowUpRight size={17} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {services.map((service, index) => {
              const isActive = activeId === service.id;
              const isPast =
                services.findIndex((item) => item.id === activeId) > index;
              const theme = cardThemes[index % cardThemes.length];

              return (
                <motion.article
                  key={service.id}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                    margin: "0px 0px -8% 0px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative overflow-hidden rounded-[1.35rem] transition-[background-color,color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? theme.active : theme.idle
                  } ${isActive ? "shadow-[0_24px_60px_rgba(10,10,10,0.18)]" : ""} ${
                    isPast && !isActive ? "opacity-90" : ""
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

                  <div className="relative z-[1] flex w-full items-start justify-between gap-6 p-6 sm:p-8">
                    <motion.span
                      layout
                      className="font-Sora max-w-[85%] text-2xl font-medium tracking-[-.045em] sm:text-3xl lg:text-4xl"
                      animate={{
                        opacity: isActive ? 1 : isPast ? 0.75 : 1,
                      }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {service.title}
                    </motion.span>
                    <span
                      className={`shrink-0 text-sm font-medium tabular-nums transition-colors duration-500 ${
                        isActive ? "text-white/55" : "text-current/45"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
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
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-[1] overflow-hidden"
                      >
                        <motion.div
                          initial={reduceMotion ? false : { y: 24, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 12, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="px-6 pb-6 sm:px-8 sm:pb-8"
                        >
                          <motion.p
                            initial={
                              reduceMotion ? false : { y: 16, opacity: 0 }
                            }
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              duration: 0.45,
                              delay: 0.18,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg"
                          >
                            {service.description}
                          </motion.p>

                          <motion.div
                            initial={
                              reduceMotion
                                ? false
                                : { y: 20, opacity: 0, scale: 0.96 }
                            }
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.26,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-6 max-w-xs"
                          >
                            <ServiceArtwork index={index} />
                          </motion.div>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {[
                              "Discovery",
                              "Strategy",
                              "Design",
                              "Development",
                            ].map((tag, tagIndex) => (
                              <motion.span
                                key={tag}
                                initial={
                                  reduceMotion ? false : { opacity: 0, y: 12 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: reduceMotion
                                    ? 0
                                    : 0.34 + tagIndex * 0.07,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/85"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
