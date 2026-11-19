"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * AnimatedCursor
 * A smooth dual-layer custom cursor:
 *  - Inner dot  : snaps to the pointer precisely (no lag)
 *  - Outer ring : follows with spring-like lerp for a trailing effect
 *
 * Hides the native OS cursor on non-touch devices.
 * Respects prefers-reduced-motion by collapsing both layers to a simple dot.
 */
export function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Live position state stored in refs (not React state) to avoid re-renders
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);
  const isVisible = useRef(false);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
    ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Don't run on touch-only devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    if (prefersReduced) {
      // Show only the dot, no animation loop
      dot.style.opacity = "1";
      ring.style.display = "none";
    }

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        dot.style.opacity = "1";
        if (!prefersReduced) ring.style.opacity = "1";
      }

      if (prefersReduced) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      isVisible.current = false;
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      if (!prefersReduced) ring.style.opacity = "1";
      isVisible.current = true;
    };

    // Expand ring on interactive elements
    const addHoverClass = () => ring.classList.add("cursor-ring--hover");
    const removeHoverClass = () => ring.classList.remove("cursor-ring--hover");
    const addClickClass = () => dot.classList.add("cursor-dot--click");
    const removeClickClass = () => dot.classList.remove("cursor-dot--click");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", addClickClass);
    document.addEventListener("mouseup", removeClickClass);

    // Delegate hover detection for interactive elements
    document.addEventListener(
      "mouseover",
      (e) => {
        const target = (e.target as Element).closest(
          "a, button, [role=button], input, textarea, select, label, [tabindex]"
        );
        if (target) addHoverClass();
      },
      { passive: true }
    );
    document.addEventListener(
      "mouseout",
      (e) => {
        const target = (e.target as Element).closest(
          "a, button, [role=button], input, textarea, select, label, [tabindex]"
        );
        if (target) removeHoverClass();
      },
      { passive: true }
    );

    if (!prefersReduced) {
      rafId.current = requestAnimationFrame(animate);
    }

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", addClickClass);
      document.removeEventListener("mouseup", removeClickClass);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      {/* Inner dot */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      {/* Outer trailing ring */}
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
