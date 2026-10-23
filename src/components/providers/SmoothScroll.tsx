"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";

const lenisOptions: LenisOptions = {
  autoRaf: true,
  lerp: 0.14,
  duration: 0.75,
  smoothWheel: true,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.5,
  anchors: true,
  respectReducedMotion: true,
};

function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <RouteScrollReset />
      {children}
    </ReactLenis>
  );
}