"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MIN_VISIBLE_MS = 700;
const MAX_VISIBLE_MS = 4000;
const FADE_MS = 450;

type Phase = "shown" | "hiding" | "hidden";

function isInternalNavigation(href: string, currentPath: string) {
  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return false;
    const nextPath = url.pathname.replace(/\/$/, "") || "/";
    const here = currentPath.replace(/\/$/, "") || "/";
    return nextPath !== here;
  } catch {
    return false;
  }
}

export function PageLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("shown");
  const phaseRef = useRef<Phase>("shown");
  const shownAt = useRef(0);
  const pathRef = useRef(pathname);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const setLoaderPhase = (next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  const hide = () => {
    clearTimers();
    const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - shownAt.current));
    timers.current.push(
      setTimeout(() => {
        setLoaderPhase("hiding");
        timers.current.push(setTimeout(() => setLoaderPhase("hidden"), FADE_MS));
      }, wait),
    );
  };

  const show = () => {
    clearTimers();
    shownAt.current = performance.now();
    setLoaderPhase("shown");
    timers.current.push(setTimeout(hide, MAX_VISIBLE_MS));
  };

  const showRef = useRef(show);
  const hideRef = useRef(hide);
  showRef.current = show;
  hideRef.current = hide;

  useEffect(() => {
    shownAt.current = performance.now();
    const finishFirstLoad = () => hideRef.current();
    if (document.readyState === "complete") finishFirstLoad();
    else window.addEventListener("load", finishFirstLoad, { once: true });
    const fallback = setTimeout(finishFirstLoad, MAX_VISIBLE_MS);

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (isInternalNavigation(anchor.href, window.location.pathname)) showRef.current();
    };
    document.addEventListener("click", onClick, true);

    const onPopState = () => {
      if (window.location.pathname !== pathRef.current) showRef.current();
    };
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("load", finishFirstLoad);
      document.removeEventListener("click", onClick, true);
      clearTimeout(fallback);
      clearTimers();
    };
  }, []);

  useEffect(() => {
    if (pathRef.current === pathname) return;
    pathRef.current = pathname;
    if (performance.now() - shownAt.current > 80) showRef.current();
    hideRef.current();
  }, [pathname]);

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[99999] grid place-items-center bg-white transition-opacity duration-500 ${
        phase === "hiding" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0D4FB8]/10 to-[#42BFA5]/10 blur-3xl"
      />
      <div className="relative flex flex-col items-center gap-7">
        <Image
          src="/lis-loader.png"
          alt="Liberty Info Science (LIS) logo"
          width={566}
          height={180}
          preload
          className="loader-logo h-auto w-36 sm:w-44"
        />
        <div className="h-[3px] w-40 overflow-hidden rounded-full bg-[#101116]/10">
          <div className="loader-bar h-full w-1/3 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
        </div>
      </div>
    </div>
  );
}
