"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";
import { ScrollReveal, fadeUp } from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

const cardThemes = [
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#8f9194] text-white/90" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#b8babd] text-[#2a2a2a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#d8dadc] text-[#1a1a1a]" },
  { active: "bg-[#0a0a0a] text-white", idle: "bg-[#ececee] text-[#1a1a1a]" },
];

const serviceImages: Record<string, string> = {
  "ui-ux-design": "/uxdesign.png",
  "Web-Design": "/webdesign.png",
  "Web-Development": "/saaswebapp.png",
  "Mobile-Development": "/mobiledevelopment.png",
  "Business-Services": "/businessservices.png",
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
    <div className="relative aspect-[1.15] overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 640px) 70vw, 20rem"
        className="object-cover"
      />
    </div>
  );
}

export function Services({ hideHeader = false }: { hideHeader?: boolean }) {
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

  return <div></div>;
}