"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const INITIAL_MIN_VISIBLE_MS = 380;
const ROUTE_MIN_VISIBLE_MS = 280;
const MAX_SAFETY_MS = 1500;
const FADE_MS = 250;

type Phase = "shown" | "hiding" | "hidden";

function isInternalNavigation(targetHref: string, currentPathname: string): boolean {
  try {
    const url = new URL(targetHref, window.location.href);
    // Only same origin
    if (url.origin !== window.location.origin) return false;

    // Compare paths without trailing slashes
    const nextPath = url.pathname.replace(/\/$/, "") || "/";
    const currentPath = currentPathname.replace(/\/$/, "") || "/";

    // Same path: hash or query change on same page should not trigger full loader
    return nextPath !== currentPath;
  } catch {
    return false;
  }
}

export function PageLoader() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("shown");
  const shownAt = useRef(0);
  const pathRef = useRef(pathname);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const hide = useCallback(
    (minVisible = ROUTE_MIN_VISIBLE_MS) => {
      clearTimers();
      const elapsed = performance.now() - shownAt.current;
      const wait = Math.max(0, minVisible - elapsed);

      timers.current.push(
        setTimeout(() => {
          setPhase("hiding");
          timers.current.push(
            setTimeout(() => {
              setPhase("hidden");
            }, FADE_MS),
          );
        }, wait),
      );
    },
    [clearTimers],
  );

  const show = useCallback(() => {
    clearTimers();
    shownAt.current = performance.now();
    setPhase("shown");
    // Hard safety timeout: unconditionally hide after MAX_SAFETY_MS
    timers.current.push(
      setTimeout(() => {
        hide(0);
      }, MAX_SAFETY_MS),
    );
  }, [clearTimers, hide]);

  // Initial page load dismiss
  useEffect(() => {
    shownAt.current = performance.now();
    const handleInitialComplete = () => hide(INITIAL_MIN_VISIBLE_MS);

    if (document.readyState === "complete") {
      handleInitialComplete();
    } else {
      window.addEventListener("load", handleInitialComplete, { once: true });
    }

    const initialSafety = setTimeout(() => hide(0), MAX_SAFETY_MS);

    return () => {
      window.removeEventListener("load", handleInitialComplete);
      clearTimeout(initialSafety);
    };
  }, [hide]);

  // Dynamic route transition handler via link clicks and popstate
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Primary mouse button only
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      if (isInternalNavigation(anchor.href, window.location.pathname)) {
        show();
      }
    };

    const handlePopState = () => {
      show();
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [show]);

  // When pathname updates, route transition is complete
  useEffect(() => {
    if (pathRef.current === pathname) return;
    pathRef.current = pathname;
    hide(ROUTE_MIN_VISIBLE_MS);
  }, [pathname, hide]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  if (phase === "hidden") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading..."
      className={`fixed inset-0 z-[99999] grid place-items-center bg-white transition-all duration-300 ease-out ${
        phase === "hiding"
          ? "pointer-events-none opacity-0 scale-[0.99]"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Subtle ambient brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-72 sm:size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0D4FB8]/10 via-[#3391B1]/10 to-[#42BFA5]/10 blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* LIS Logo with smooth gentle breathing pulse */}
        <div className="relative">
          <Image
            src="/lis-loader.png"
            alt="Liberty Info Science (LIS) logo"
            width={566}
            height={180}
            priority
            unoptimized
            className="loader-logo h-auto w-36 sm:w-44 select-none object-contain"
          />
        </div>

        {/* Dynamic sleek progress bar */}
        <div className="h-[3px] w-36 sm:w-44 overflow-hidden rounded-full bg-[#101116]/10">
          <div className="loader-bar h-full w-1/3 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]" />
        </div>
      </div>
    </div>
  );
}
