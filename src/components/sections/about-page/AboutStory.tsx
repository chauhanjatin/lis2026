"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { Container } from "@/components/ui/Container";
import {
  ScrollReveal,
  ScrollStagger,
  ScrollItem,
  fadeUp,
} from "@/components/ui/ScrollReveal";
import { aboutStoryData, type AboutStory } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingBadge({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#181A1C]/90 text-white shadow-2xl backdrop-blur-md sm:h-32 sm:w-32 border border-white/20"
      aria-hidden="true"
    >
      {/* Curved circular text */}
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id="textPathCircle"
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <text
          fill="#FFFFFF"
          fontSize="9.2"
          fontWeight="600"
          letterSpacing="0.18em"
          className="uppercase select-none opacity-90"
        >
          <textPath href="#textPathCircle" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Concentric overlapping graphic in center */}
      <div className="relative z-10 flex items-center justify-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="14"
            cy="18"
            rx="6"
            ry="11"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
          <ellipse
            cx="18"
            cy="18"
            rx="6"
            ry="11"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.95"
          />
          <ellipse
            cx="22"
            cy="18"
            rx="6"
            ry="11"
            stroke="white"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function SocialIcon({ platform }: { platform: "x" | "website" | "instagram" }) {
  switch (platform) {
    case "x":
      return <FaXTwitter size={15} />;
    case "website":
      return <HiOutlineGlobeAlt size={17} />;
    case "instagram":
      return <FaInstagram size={16} />;
  }
}

export function AboutStorySection({
  data = aboutStoryData,
}: {
  data?: AboutStory;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-20 sm:py-28 lg:py-32 border-t border-[#EAECEF]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Portrait Card matching Image 1 */}
          <div className="lg:col-span-5">
            <ScrollReveal amount={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Image Container with rounded corners and shadow */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.25rem] bg-[#1c1d21] shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
                  <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                  />

                  {/* Gradient overlay for contrast */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
                  />

                  {/* Rotating Circular Badge (Bottom Right of Image) */}
                  <div className="absolute -bottom-2 -right-2 z-20 sm:bottom-4 sm:right-4">
                    <RotatingBadge text={data.image.badgeText} />
                  </div>

                  {/* Frosted Social Action Buttons (Bottom Left of Image) */}
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2.5">
                    {data.socials.map((social) => (
                      <motion.a
                        key={social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={reduceMotion ? undefined : { scale: 1.15, y: -2 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md border border-white/20 transition-colors hover:bg-black/80 sm:h-10 sm:w-10"
                        aria-label={`Visit our ${social.platform}`}
                      >
                        <SocialIcon platform={social.platform} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Content Blocks (Mission, Vision, Quality) */}
          <div className="lg:col-span-7">
            <ScrollReveal amount={0.3}>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#202224]">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
                {data.eyebrow}
              </p>

              <h2 className="mt-4 font-Sora text-3xl font-bold tracking-[-0.035em] text-[#111827] sm:text-4xl md:text-5xl">
                {data.heading}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#55585D] sm:text-base md:text-lg">
                {data.leadParagraph}
              </p>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-[#E2E4E8]" />

              {/* 3 Pillars List with Smooth Animation */}
              <ScrollStagger className="space-y-6">
                {data.pillars.map((pillar) => (
                  <ScrollItem key={pillar.id} variants={fadeUp}>
                    <motion.article
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { x: 4, transition: { duration: 0.25, ease } }
                      }
                      className="group relative rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-[#E2E4E8] hover:bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] sm:p-5"
                    >
                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#E8EAEF] font-mono text-xs font-bold text-[#1F2937] transition-colors group-hover:bg-gradient-to-r from-[#42BFA5] to-[#0D4FB8]  group-hover:text-white">
                          {pillar.number}
                        </span>

                        <div className="flex-1">
                          <h3 className="font-Sora text-lg font-bold tracking-[-0.02em] text-[#111827] sm:text-xl">
                            {pillar.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#55585D] sm:text-[0.95rem]">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </ScrollItem>
                ))}
              </ScrollStagger>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
