"use client";

import React from "react";
import {
  Calendar,
  Clock,
  Home,
  MessageSquare,
  Sparkles,
  User,
  Sun,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export type PhoneScreenType = "schedule" | "dashboard" | "calendar" | "personalization";

interface PhoneMockupProps {
  type?: PhoneScreenType;
  className?: string;
  glow?: boolean;
}

export function PhoneMockup({
  type = "dashboard",
  className = "",
  glow = true,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[240px] sm:w-[260px] md:w-[275px] shrink-0 select-none ${className}`}
      style={{ aspectRatio: "9/18.5" }}
    >
      {/* Ambient Phone Glow */}
      {glow && (
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-[48px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent blur-xl opacity-60 pointer-events-none"
        />
      )}

      {/* Outer Phone Shell */}
      <div className="relative h-full w-full rounded-[42px] sm:rounded-[46px] bg-[#1a1c1e] p-[9px] sm:p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_1px_rgba(255,255,255,0.3)]">
        {/* Antenna bands & buttons hints */}
        <div className="absolute -left-[2px] top-24 h-9 w-[3px] rounded-l bg-[#32363a]" />
        <div className="absolute -left-[2px] top-36 h-9 w-[3px] rounded-l bg-[#32363a]" />
        <div className="absolute -right-[2px] top-28 h-12 w-[3px] rounded-r bg-[#32363a]" />

        {/* Screen Bezel & Screen Inner */}
        <div className="relative h-full w-full overflow-hidden rounded-[34px] sm:rounded-[38px] bg-[#070D09] text-white flex flex-col justify-between">
          {/* Dynamic Island Header */}
          <div className="relative z-20 pt-3 px-5 flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-tight text-white/90">
              9:41
            </span>
            {/* Dynamic Island Pill */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 h-[18px] w-[72px] sm:w-[80px] rounded-full bg-black flex items-center justify-end px-2">
              <div className="h-2 w-2 rounded-full bg-[#15231a] ring-1 ring-emerald-500/40" />
            </div>
            {/* Status Icons */}
            <div className="flex items-center gap-1 text-[10px] text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
              <div className="h-2.5 w-4 rounded-[2px] border border-white/60 p-[1px] flex items-center">
                <div className="h-full w-3/4 rounded-[1px] bg-white" />
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 overflow-hidden px-4 pt-3 pb-2 flex flex-col">
            {type === "schedule" && <ScheduleScreen />}
            {type === "dashboard" && <DashboardScreen />}
            {type === "calendar" && <CalendarScreen />}
            {type === "personalization" && <PersonalizationScreen />}
          </div>

          {/* Bottom App Navigation */}
          <div className="relative z-20 px-4 pb-2 pt-1 border-t border-white/5 bg-[#070D09]/90 backdrop-blur-md">
            <div className="flex items-center justify-around py-1 text-white/40">
              <Home size={15} className="text-emerald-400" />
              <Calendar size={15} />
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-black">
                <Sparkles size={12} className="stroke-[2.5]" />
              </div>
              <MessageSquare size={15} />
              <User size={15} />
            </div>
            {/* Home Indicator Bar */}
            <div className="mx-auto mt-1.5 h-1 w-24 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <p className="text-[10px] uppercase font-medium tracking-wider text-emerald-400/80">
          Good morning
        </p>
        <div className="mt-0.5 flex items-baseline gap-2">
          <span className="font-Sora text-3xl sm:text-4xl font-bold tracking-tight text-white">
            4°
          </span>
          <Sun size={16} className="text-amber-300" />
        </div>
        <p className="mt-1 text-[11px] font-medium leading-snug text-emerald-100/90">
          Your calm sleep made you ready for today.
        </p>
      </div>

      {/* Mini AI recommendation pill */}
      <div className="my-2.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-teal-950/40 border border-emerald-500/20 p-2.5">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300">
          <Sparkles size={11} />
          <span>AI Schedule Assistant</span>
        </div>
        <p className="mt-1 text-[9.5px] leading-tight text-white/70">
          Optimal focus block scheduled from 14:00 - 16:30.
        </p>
      </div>

      {/* Schedule Items */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between rounded-lg bg-white/[0.04] p-2 border border-white/5">
          <div>
            <span className="text-[9px] font-bold text-emerald-400">9:00</span>
            <p className="text-[11px] font-medium text-white/95">Meet with mike</p>
          </div>
          <span className="text-[8px] rounded bg-emerald-500/15 px-1.5 py-0.5 text-emerald-300 font-medium">
            30 min
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/[0.04] p-2 border border-white/5">
          <div>
            <span className="text-[9px] font-bold text-emerald-400">10:00</span>
            <p className="text-[11px] font-medium text-white/95">Design Workshop</p>
          </div>
          <span className="text-[8px] rounded bg-white/10 px-1.5 py-0.5 text-white/70">
            1 hr
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/[0.04] p-2 border border-white/5">
          <div>
            <span className="text-[9px] font-bold text-emerald-400">13:00</span>
            <p className="text-[11px] font-medium text-white/95">Team Lunch</p>
          </div>
          <span className="text-[8px] rounded bg-white/10 px-1.5 py-0.5 text-white/70">
            45 min
          </span>
        </div>
      </div>
    </div>
  );
}

function ScheduleScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <span className="text-[9.5px] font-medium tracking-wide text-emerald-400">
          TODAY&apos;S AGENDA
        </span>
        <h3 className="font-Sora text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
          Meeting with mike
        </h3>
        <p className="text-[10px] text-white/60 flex items-center gap-1 mt-0.5">
          <Clock size={10} /> 9:00 AM – 9:30 AM · Google Meet
        </p>
      </div>

      <div className="my-2 space-y-1.5">
        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-2.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-emerald-300">10:00 AM</span>
            <span className="text-[8px] bg-emerald-400 text-black font-bold px-1 rounded">
              Priority
            </span>
          </div>
          <p className="text-[11.5px] font-semibold text-white mt-0.5">Meet with alex</p>
          <p className="text-[9px] text-white/60">Product sync & roadmap review</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/5 p-2.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-emerald-400/90">11:00 AM</span>
          </div>
          <p className="text-[11.5px] font-semibold text-white mt-0.5">Design Workshop</p>
          <p className="text-[9px] text-white/60">Design system token alignment</p>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/5 p-2.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-bold text-emerald-400/90">12:00 PM</span>
          </div>
          <p className="text-[11.5px] font-semibold text-white mt-0.5">Team Lunch</p>
          <p className="text-[9px] text-white/60">Social hangout</p>
        </div>
      </div>
    </div>
  );
}

function CalendarScreen() {
  const days = [
    "", "", "", 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, "", "",
  ];

  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-Sora text-base sm:text-lg font-bold text-white">
            June, 2024
          </h3>
          <span className="text-[9px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            AI Synced
          </span>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mt-2 text-center text-[9px] font-semibold text-white/40">
          <span>Mo</span>
          <span>Tu</span>
          <span>We</span>
          <span>Th</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>Su</span>
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1 mt-1 text-center text-[10px]">
          {days.map((d, i) => (
            <div
              key={i}
              className={`h-5 flex items-center justify-center rounded-full transition-colors ${
                d === 18
                  ? "bg-emerald-400 text-black font-bold ring-2 ring-emerald-300/50"
                  : d === 10 || d === 24
                  ? "bg-white/10 text-white font-medium"
                  : d
                  ? "text-white/70 hover:bg-white/5"
                  : "text-transparent"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Day Event Summary */}
      <div className="mt-2 space-y-1.5">
        <div className="rounded-lg bg-white/[0.04] p-2 border border-white/5 flex items-center justify-between">
          <div>
            <p className="text-[9px] text-emerald-400 font-bold">10:00 – 11:00 AM</p>
            <p className="text-[11px] font-medium text-white">Calendar Automation</p>
          </div>
          <CheckCircle2 size={13} className="text-emerald-400" />
        </div>
        <div className="rounded-lg bg-white/[0.04] p-2 border border-white/5 flex items-center justify-between">
          <div>
            <p className="text-[9px] text-emerald-400 font-bold">14:00 – 15:30 PM</p>
            <p className="text-[11px] font-medium text-white">Focus Time (AI Blocked)</p>
          </div>
          <Sparkles size={12} className="text-amber-300" />
        </div>
      </div>
    </div>
  );
}

function PersonalizationScreen() {
  return (
    <div className="flex-1 flex flex-col justify-between text-left">
      <div>
        <span className="text-[9.5px] font-medium tracking-wide text-emerald-400">
          PREFERENCES
        </span>
        <h3 className="font-Sora text-base sm:text-lg font-bold text-white mt-0.5">
          Smart AI Tuning
        </h3>
        <p className="text-[10px] text-white/60">
          Tailor algorithms to your productivity rhythms.
        </p>
      </div>

      <div className="my-2 space-y-2">
        <div className="rounded-xl bg-white/[0.04] border border-white/5 p-2.5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-white">Focus Hours First</p>
            <p className="text-[9px] text-white/50">Keep mornings meeting-free</p>
          </div>
          <div className="h-4 w-7 rounded-full bg-emerald-400 p-0.5 flex items-center justify-end">
            <div className="h-3 w-3 rounded-full bg-black" />
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/5 p-2.5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-white">Buffer Transitions</p>
            <p className="text-[9px] text-white/50">Auto 10-min breather between calls</p>
          </div>
          <div className="h-4 w-7 rounded-full bg-emerald-400 p-0.5 flex items-center justify-end">
            <div className="h-3 w-3 rounded-full bg-black" />
          </div>
        </div>

        <div className="rounded-xl bg-white/[0.04] border border-white/5 p-2.5 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-white">Energy-Based Sync</p>
            <p className="text-[9px] text-white/50">Peak cognitive load matching</p>
          </div>
          <div className="h-4 w-7 rounded-full bg-emerald-400 p-0.5 flex items-center justify-end">
            <div className="h-3 w-3 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
