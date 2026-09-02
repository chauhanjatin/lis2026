"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Code2,
  FileSearch,
  Info,
  Menu,
  PenLine,
  Smartphone,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/components/lib/cn";
import {
  companyMenuItems,
  navLinks,
  servicesMenuItems,
  type NavDropdownItem,
} from "@/data/navigation";

type OpenMenu = "company" | "services" | null;

const companyIcons = [Info, FileSearch];
const serviceIcons = [PenLine, Code2, Smartphone, Briefcase];

function DropdownPointer() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
    />
  );
}

function DropdownItem({
  item,
  icon: Icon,
}: {
  item: NavDropdownItem;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
}) {
  return (
    <Link
      href={item.href}
      className="group flex min-w-[9.5rem] items-center gap-3 rounded-xl p-2 transition-colors hover:bg-[#f7f7f8]"
    >
      <span
        className={cn(
          "inline-grid size-10 shrink-0 place-items-center rounded-xl",
          item.iconBg,
          item.iconColor,
        )}
      >
        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="text-sm font-medium tracking-[-0.01em] text-[#151618]">
        {item.label}
      </span>
    </Link>
  );
}

function CompanyDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="relative rounded-[1.25rem] bg-white px-4 py-4 shadow-[0_20px_50px_rgba(12,14,18,0.14)]">
        <DropdownPointer />
        <div className="flex items-center gap-2">
          {companyMenuItems.map((item, index) => (
            <div key={item.href} onClick={onClose}>
              <DropdownItem item={item} icon={companyIcons[index]!} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <div className="relative w-[22rem] rounded-[1.25rem] bg-white p-4 shadow-[0_20px_50px_rgba(12,14,18,0.14)] sm:w-[28rem]">
        <DropdownPointer />
        <div className="grid grid-cols-2 gap-1">
          {servicesMenuItems.map((item, index) => (
            <div key={item.href} onClick={onClose}>
              <DropdownItem item={item} icon={serviceIcons[index]!} />
            </div>
          ))}
        </div>
        <Link
          href="/services"
          onClick={onClose}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f1f2f4] px-4 py-3 text-sm font-semibold text-[#151618] transition-colors hover:bg-[#e8e9eb]"
        >
          View all services
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function NavDropdown({
  label,
  menu,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  menu: OpenMenu;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <li className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => (isOpen ? onClose() : onOpen())}
        className="inline-flex items-center gap-1 text-sm font-medium text-white transition-opacity hover:opacity-65"
      >
        {label}
        <ChevronDown
          size={13}
          strokeWidth={1.8}
          aria-hidden="true"
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && menu === "company" && <CompanyDropdown onClose={onClose} />}
      {isOpen && menu === "services" && <ServicesDropdown onClose={onClose} />}
    </li>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<OpenMenu>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileSubmenu(null);
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
    <header ref={headerRef} className="fixed inset-x-0 top-4 z-40">
      <Container className="max-w-[1120px] px-4 sm:px-6">
        <div className="mx-auto flex h-14 w-[1000px] items-center rounded-full bg-[#0000009c] px-3  backdrop-blur-sm sm:px-4">
          <Link
            href="/"
            className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0c]"
          >
            <Image
              src="/lis-logo.svg"
              alt="LIS"
              width={151}
              height={51}
              priority
              className="h-auto w-[4.4rem] brightness-0 invert"
            />
          </Link>

          <nav aria-label="Primary" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-white transition-opacity hover:opacity-65"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) =>
                link.submenu ? (
                  <NavDropdown
                    key={link.href}
                    label={link.label}
                    menu={link.label === "Company" ? "company" : "services"}
                    isOpen={
                      openMenu ===
                      (link.label === "Company" ? "company" : "services")
                    }
                    onOpen={() =>
                      setOpenMenu(
                        link.label === "Company" ? "company" : "services",
                      )
                    }
                    onClose={() => setOpenMenu(null)}
                  />
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-white transition-opacity hover:opacity-65"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <Link
            href="/career"
            className="hidden rounded-full bg-white px-6 py-2.5 text-sm font-medium text-[#101116] transition-transform hover:scale-[1.03] lg:inline-flex">
            Send CV
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Primary"
          className={cn(
            "mt-2 overflow-hidden rounded-[1.4rem] bg-[#090a0c] text-white transition-[max-height,opacity] duration-300 lg:hidden",
            open ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="px-6 py-5">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-base font-medium"
              >
                Home
              </Link>
            </li>
            {navLinks.map((link) =>
              link.submenu ? (
                <li key={link.href} className="border-b border-white/10 py-3">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-base"
                    aria-expanded={
                      mobileSubmenu ===
                      (link.label === "Company" ? "company" : "services")
                    }
                    onClick={() =>
                      setMobileSubmenu((current) =>
                        current ===
                        (link.label === "Company" ? "company" : "services")
                          ? null
                          : link.label === "Company"
                            ? "company"
                            : "services",
                      )
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        mobileSubmenu ===
                          (link.label === "Company" ? "company" : "services") &&
                          "rotate-180",
                      )}
                    />
                  </button>
                  {mobileSubmenu ===
                    (link.label === "Company" ? "company" : "services") && (
                    <ul className="mt-2 space-y-1 pl-2">
                      {(link.label === "Company"
                        ? companyMenuItems
                        : servicesMenuItems
                      ).map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              setOpen(false);
                              setMobileSubmenu(null);
                            }}
                            className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      {link.label === "Services" && (
                        <li>
                          <Link
                            href="/services"
                            onClick={() => {
                              setOpen(false);
                              setMobileSubmenu(null);
                            }}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/5"
                          >
                            View all services
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-3 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link
                href="/career"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#101116]"
              >
                Send CV
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
