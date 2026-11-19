"use client";

import { useEffect, useRef } from "react";

/**
 * CursorDot
 * A small #0d4fb8 dot that always tracks the real mouse position.
 * - Hidden on touch / coarse-pointer devices
 * - Respects prefers-reduced-motion (instant move instead of lerp)
 * - Scales up slightly on click
 */
export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let raf = 0;
    let visible = false;

    const show = () => {
      if (visible) return;
      visible = true;
      dot.style.opacity = "1";
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      show();
    };

    const onDown = () => dot.classList.add("cursor-dot--click");
    const onUp = () => dot.classList.remove("cursor-dot--click");
    const onLeave = () => { dot.style.opacity = "0"; visible = false; };
    const onEnter = () => show();

    const loop = () => {
      if (reduced) {
        curX = mouseX;
        curY = mouseY;
      } else {
        // Smooth lerp — fast enough to feel snappy
        curX += (mouseX - curX) * 0.55;
        curY += (mouseY - curY) * 0.55;
      }
      // Offset by half the dot width (4px) to centre it on the pointer
      dot.style.transform = `translate(${curX - 4}px, ${curY - 4}px)`;
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown, { passive: true });
    document.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#0d4fb8",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        willChange: "transform",
        // Ring outline so it pops on both light and dark content
        boxShadow: "0 0 0 1.5px rgba(255,255,255,0.4), 0 0 6px 1px rgba(13,79,184,0.5)",
        transition: "opacity 300ms ease, width 150ms ease, height 150ms ease",
      }}
      className="cursor-dot"
    />
  );
}
