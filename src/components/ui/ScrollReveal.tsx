"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  amount?: number | "some" | "all";
  once?: boolean;
  "aria-label"?: string;
};

export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
  "aria-label": ariaLabel,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} aria-label={ariaLabel}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number | "some" | "all";
  once?: boolean;
  delayChildren?: number;
  staggerChildren?: number;
};

export function ScrollStagger({
  children,
  className,
  amount = 0.2,
  once = true,
  delayChildren = 0.06,
  staggerChildren = 0.12,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollItem({
  children,
  className,
  variants = fadeUp,
  duration = 0.65,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      transition={{ duration, ease }}
    >
      {children}
    </motion.div>
  );
}
