"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";

const links = [
  { href: "#company", label: "Company", submenu: true },
  { href: "#services", label: "Services", submenu: true },
  { href: "#work", label: "Portfolio" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <Container className="max-w-[1120px] px-4 sm:px-6">
        <div className="flex h-14 items-center rounded-full bg-[#0000003D] backdrop-blur-sm px-3 shadow-[0_12px_30px_rgba(12,14,18,0.16)] sm:px-4 w-[1000px] mx-auto">
          <Link href="/" className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]">
            <Image src="/lis-logo.svg" alt="LIS" width={151} height={51} priority className="h-auto w-[4.4rem] brightness-0 invert" />
          </Link>

          <nav aria-label="Primary" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              <li><a href="#hero" className="text-sm font-medium text-white transition-opacity hover:opacity-65">Home</a></li>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex items-center gap-1 text-sm font-medium text-white transition-opacity hover:opacity-65">
                    {link.label}
                    {link.submenu && <ChevronDown size={13} strokeWidth={1.8} aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className=" hidden rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#101116] transition-transform hover:scale-[1.03] lg:inline-flex">
            Send CV
          </a>

          <button type="button" className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>

        <nav id="mobile-nav" aria-label="Primary" className={cn("mt-2 overflow-hidden rounded-[1.4rem] bg-[#090a0c] text-white transition-[max-height,opacity] duration-300 lg:hidden", open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0")}>
          <ul className="px-6 py-5">
            <li><a href="#hero" onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-base font-medium">Home</a></li>
            {links.map((link) => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-base">{link.label}</a></li>)}
            <li><a href="#contact" onClick={() => setOpen(false)} className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#101116]">Send CV</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
