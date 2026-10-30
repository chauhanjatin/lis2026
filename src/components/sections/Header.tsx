"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Code2,
  Menu,
  PenLine,
  Smartphone,
  X,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";
import {
  navLinks,
  servicesMenuItems,
  type NavDropdownItem,
} from "@/data/navigation";

const serviceIcons = [PenLine, Code2, Smartphone, Briefcase];

function DropdownPointer() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#0000006e]"
    />
  );
}

function DropdownItem({
  item,
  icon: Icon,
  onClick,
}: {
  item: NavDropdownItem;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      role="menuitem"
      onClick={onClick}
      className="group flex min-w-[9.5rem] items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-grid size-10 shrink-0 place-items-center rounded-xl",
          item.iconBg,
          item.iconColor,
        )}
      >
        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="text-sm font-medium tracking-[-0.01em] text-white">
        {item.label}
      </span>
    </Link>
  );
}

function ServicesDropdown({
  id = "services-dropdown-menu",
  onClose,
}: {
  id?: string;
  onClose: () => void;
}) {
  return (
    <div
      id={id}
      role="menu"
      aria-label="Services submenu"
      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
    >
      <div className="relative w-[22rem] rounded-[1.25rem] backdrop-blur-md transition-colors duration-300 bg-[#090a0c]/95 border border-white/15 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:w-[28rem]">
        <DropdownPointer />
        <div className="grid grid-cols-2 gap-1" role="none">
          {servicesMenuItems.map((item, index) => (
            <DropdownItem
              key={item.href}
              item={item}
              icon={serviceIcons[index]!}
              onClick={onClose}
            />
          ))}
        </div>
        <Link
          href="/services"
          role="menuitem"
          onClick={onClose}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          View all services
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function ServicesNavDropdown({
  label,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        id="services-menu-trigger"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="services-dropdown-menu"
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={(e) => {
          if (e.key === "Escape" && isOpen) {
            onClose();
          }
        }}
        className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium text-white transition-opacity hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
        {label}
        <ChevronDown
          size={13}
          strokeWidth={1.8}
          aria-hidden="true"
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180",
          )}/>
      </button>
      {isOpen && <ServicesDropdown id="services-dropdown-menu" onClose={onClose} />}
    </li>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const lenis = useLenis();

  useLenis(({ scroll }) => {
    const isScrolled = scroll > 8;
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
  });

  useEffect(() => {  
    if (!open) return;

    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-3 sm:top-4 z-40">
      <Container className="max-w-[1240px] px-3 sm:px-6">
        <div
          className={cn(
            "mx-auto flex h-14 w-full max-w-[1140px] items-center justify-between rounded-full px-4 sm:px-6 backdrop-blur-md transition-colors duration-300",
            scrolled ? "bg-[#00000080]" : "bg-[#0000009c]",
          )}>
          <Link
            href="/"
            aria-label="Liberty Info Science home page"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]">
            <Image
              src="/lis-logo.svg"
              alt="Liberty Info Science (LIS) logo"
              width={151}
              height={51}
              priority
              className="h-auto w-[4.2rem] sm:w-[4.4rem] brightness-0 invert"
            />
          </Link>

          <nav aria-label="Primary" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-8">
              <li>
                <Link
                  href="/"
                  className="rounded-md px-1.5 py-1 text-sm font-medium text-white transition-opacity hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) =>
                link.submenu ? (
                  <ServicesNavDropdown
                    key={link.href}
                    label={link.label}
                    isOpen={servicesOpen}
                    onOpen={() => setServicesOpen(true)}
                    onClose={() => setServicesOpen(false)}
                  />
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-sm font-medium text-white transition-opacity hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Link
            href="mailto:info@libertyinfoscience.com"
            aria-label="Send CV to info@libertyinfoscience.com"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#101116] transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c] lg:inline-flex">
            Send CV
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className={cn(
            "mt-2 overflow-hidden rounded-[1.4rem] bg-[#090a0c]/95 backdrop-blur-xl border border-white/10 text-white transition-[max-height,opacity] duration-300 lg:hidden shadow-2xl",
            open ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 pointer-events-none",
          )}>
          <ul className="px-6 py-5">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
              >
                Home
              </Link>
            </li>
            {navLinks.map((link) =>
              link.submenu ? (
                <li key={link.href} className="border-b border-white/10 py-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md py-1"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-menu"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={cn(
                        "transition-transform",
                        mobileServicesOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul id="mobile-services-menu" className="mt-2 space-y-1 pl-2">
                      {servicesMenuItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/services"
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          View all services
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link
                href="mailto:info@libertyinfoscience.com"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#101116]">
                Send CV
              </Link>
            </li>
          </ul>
        </nav>        
      </Container>
    </header>
  );
}