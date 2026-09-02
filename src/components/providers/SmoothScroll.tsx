"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";

const lenisOptions: LenisOptions = {
  autoRaf: true,
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
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