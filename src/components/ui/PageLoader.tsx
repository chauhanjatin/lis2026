"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MIN_VISIBLE_MS = 600;
const MAX_VISIBLE_MS = 4000;
const FADE_MS = 500;

type Phase = "shown" | "hiding" | "hidden";

export function PageLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("shown");
  const shownAt = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const firstPath = useRef(true);
  const currentPath = useRef(pathname);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const hide = () => {
    clearTimers();
    const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - shownAt.current));
    timers.current.push(
      setTimeout(() => {
        setPhase("hiding");
        timers.current.push(setTimeout(() => setPhase("hidden"), FADE_MS));
      }, wait),
    );
  };

  const show = () => {
    clearTimers();
    shownAt.current = performance.now();
    setPhase("shown");
    timers.current.push(setTimeout(hide, MAX_VISIBLE_MS));
  };

  useEffect(() => {
    shownAt.current = performance.now();
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });
    const fallback = setTimeout(hide, MAX_VISIBLE_MS);

    const onClick = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      show();
    };
    document.addEventListener("click", onClick, true);

    const onPopState = () => {
      if (window.location.pathname !== currentPath.current) show();
    };
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("load", hide);
      document.removeEventListener("click", onClick, true);
      clearTimeout(fallback);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    currentPath.current = pathname;
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    hide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-[9999] grid place-items-center bg-white transition-opacity duration-500 ${
        phase === "hiding" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0D4FB8]/10 to-[#42BFA5]/10 blur-3xl"
      />
      <div className="relative flex flex-col items-center gap-7">
        <Image
          src="/lis-logo.svg"
          alt="Liberty Info Science (LIS) logo"
          width={151}
          height={51}
          preload
          className="loader-logo h-auto w-24 sm:w-28"
        />
        <div className="h-[3px] w-40 overflow-hidden rounded-full bg-[#101116]/10">
          <div className="loader-bar h-full w-1/3 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
        </div>
      </div>
    </div>
  );
}
