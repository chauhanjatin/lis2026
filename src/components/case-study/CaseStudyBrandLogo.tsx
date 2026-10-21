"use client";

import React from "react";

export function CaseStudyBrandLogo({
  type,
  className = "",
}: {
  type:
    | "orion"
    | "meridian"
    | "apex"
    | "brightpath"
    | "skyline"
    | "wifter"
    | "uniqlearn"
    | "learnbud"
    | "dermatology"
    | "dtssplint";
  className?: string;
}) {
  switch (type) {
    case "uniqlearn":
      return (
        <div
          className={`flex items-center gap-3 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF5516] to-[#FFA84A] text-white shadow-md">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-Sora text-2xl font-bold tracking-tight">
              Uniq<span className="text-[#FF5516] group-hover:text-white transition-colors">Learn</span>
            </span>
            <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase opacity-65 group-hover:opacity-90">
              CLASSROOM OS
            </span>
          </div>
        </div>
      );

    case "learnbud":
      return (
        <div
          className={`flex items-center gap-3 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#00B2FE] to-[#2D8CFF] text-white shadow-md">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a8 8 0 0 0-8 8c0 3.3 2 6.1 4.9 7.3.3.1.5.4.5.7v1.5a1.5 1.5 0 0 0 1.5 1.5h2.2a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.3.2-.6.5-.7A8 8 0 0 0 20 10a8 8 0 0 0-8-8z" />
              <path d="M9 22h6" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-Sora text-2xl font-bold tracking-tight">
              LearnBud <span className="bg-gradient-to-r from-[#00B2FE] to-[#2D8CFF] bg-clip-text text-transparent group-hover:text-white transition-colors">AI</span>
            </span>
            <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase opacity-65 group-hover:opacity-90">
              SMART TUTOR
            </span>
          </div>
        </div>
      );

    case "dermatology":
      return (
        <div
          className={`flex items-center gap-3 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#111111] font-serif text-lg font-semibold tracking-tight text-white shadow-md">
            HD
          </div>
          <div className="flex flex-col text-left">
            <span className="font-Sora text-xl font-bold tracking-tight">
              Integrative
            </span>
            <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase opacity-65 group-hover:opacity-90">
              DERMATOLOGY
            </span>
          </div>
        </div>
      );

    case "dtssplint":
      return (
        <div
          className={`flex items-center gap-3 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111111] text-[#3DDC4E] shadow-md">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 4.5c.6 1.4 1.2 2.2 2.2 2.2S10.8 5.9 11.4 4.5c.3-.7 1.2-.7 1.5 0 .6 1.4 1.2 2.2 2.2 2.2s1.6-.8 2.2-2.2c.3-.7 1.2-.7 1.5 0-.2 2.2-.8 4.6-1.6 6.2-1.2 2.4-2.2 3.8-4.7 5.3-2.5-1.5-3.5-2.9-4.7-5.3C6.2 9.1 5.6 6.7 5.4 4.5c.3-.7 1.2-.7 1.6 0z" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-Sora text-2xl font-bold tracking-tight">
              DTS <span className="text-[#3DDC4E] group-hover:text-white transition-colors">Splint</span>
            </span>
            <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase opacity-65 group-hover:opacity-90">
              DENTAL CAD
            </span>
          </div>
        </div>
      );

    case "orion":
      return (
        <div
          className={`flex flex-col items-center justify-center text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex items-center gap-1.5 font-Sora text-2xl sm:text-3xl font-extrabold tracking-[-0.04em]">
            <span>ORION</span>
          </div>
          <div className="mt-0.5 flex items-center gap-2 text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100">
            <span className="h-[1px] w-4 bg-current" />
            <span>VENTURES</span>
            <span className="h-[1px] w-4 bg-current" />
          </div>
        </div>
      );

    case "meridian":
      return (
        <div
          className={`flex flex-col items-center justify-center text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="mb-1 flex items-center justify-center">
            <svg
              className="h-7 w-7 text-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              <circle cx="12" cy="4" r="2" fill="currentColor" />
            </svg>
          </div>
          <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight uppercase">
            MERIDIAN
          </div>
          <div className="text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.25em] uppercase opacity-75 group-hover:opacity-90">
            HEALTHCARE
          </div>
        </div>
      );

    case "apex":
      return (
        <div
          className={`flex items-center gap-2.5 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="relative flex h-8 w-8 items-center justify-center">
            <svg
              className="h-8 w-8 text-current"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 2L30 28H21L16 17.5L11 28H2L16 2Z" />
              <path d="M16 11L19 18H13L16 11Z" className="fill-white/80 group-hover:fill-black/60" />
            </svg>
          </div>
          <span className="font-Sora text-xl sm:text-2xl font-bold tracking-tight">
            Apex Digital
          </span>
        </div>
      );

    case "brightpath":
      return (
        <div
          className={`flex items-center gap-3 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-current text-white group-hover:text-black group-hover:bg-white p-1.5 transition-colors duration-300">
            <svg
              className="h-full w-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-Sora text-lg sm:text-xl font-bold leading-tight tracking-tight">
              BrightPath
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-90">
              CONSULTING
            </span>
          </div>
        </div>
      );

    case "skyline":
      return (
        <div
          className={`flex items-center gap-2.5 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-current text-white group-hover:text-black group-hover:bg-white p-1 transition-colors duration-300">
            <svg
              className="h-full w-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="8" height="8" rx="2" />
              <rect x="14" y="2" width="8" height="8" rx="2" />
              <rect x="14" y="14" width="8" height="8" rx="2" />
              <rect x="2" y="14" width="8" height="8" rx="2" />
              <path d="M6 10v4M18 10v4M10 6h4M10 18h4" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-Sora text-base sm:text-lg font-bold leading-tight tracking-tight uppercase">
              SKYLINE
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-90">
              TECH LABS
            </span>
          </div>
        </div>
      );

    case "wifter":
    default:
      return (
        <div
          className={`flex items-center gap-2 text-[#101116] transition-colors duration-300 group-hover:text-white select-none ${className}`}
        >
          <span className="font-Sora text-2xl sm:text-3xl font-extrabold tracking-tight">
            Wifter<span className="text-[#0D4FB8] group-hover:text-emerald-400">.</span>
          </span>
        </div>
      );
  }
}
