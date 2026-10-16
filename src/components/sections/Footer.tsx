"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/socials";
import {
  ScrollReveal,
  ScrollStagger,
  ScrollItem,
  fadeUp,
} from "@/components/ui/ScrollReveal";
import { ContactCTA } from "./ContactCTA";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/company", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="studio-footer">
      <Container className="studio-footer-frame">
        <ContactCTA />

        <ScrollStagger
          className="studio-footer-content"
          staggerChildren={0.1}
          amount={0.2}
        >
          <ScrollItem variants={fadeUp} className="studio-footer-brand">
            <Link href="/" aria-label="Liberty Info Science home">
              <Image
                src="/lis-logo.svg"
                alt="Liberty Info Science (LIS) logo"
                width={151}
                height={51}
                priority
              />
            </Link>
            <p className="studio-footer-tagline">
              Pioneering digital experiences through cutting-edge strategy, design, and engineering.
            </p>
            <div className="studio-footer-socials" aria-label="Social links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </ScrollItem>

          <ScrollItem variants={fadeUp}>
            <nav className="studio-footer-nav" aria-label="Footer navigation">
              <p className="studio-footer-section-title">[ Navigate ]</p>
              <ul>
                {navigation.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollItem>

          <ScrollItem variants={fadeUp}>
            <address className="studio-footer-contact">
              <p className="studio-footer-section-title">[ Contact ]</p>
              <div>
                <span>Available worldwide</span>
                <a href="mailto:info@libertyinfoscience.com">
                  info@libertyinfoscience.com
                </a>
                <a href="tel:+917096364801">+91 70963 64801</a>
              </div>
            </address>
          </ScrollItem>
        </ScrollStagger>

        <ScrollReveal className="studio-footer-bottom" delay={0.15}>
          <p>© {new Date().getFullYear()} Liberty Info Science. All Rights Reserved.</p>
          <p className="studio-footer-credit">Designed & Engineered with Precision.</p>
        </ScrollReveal>

        <ScrollReveal
          className="studio-footer-marquee"
          delay={0.2}
          duration={0.9}
          amount={0.15}
          aria-label="libertyinfoscience"
        >
          <div className="studio-footer-marquee-track">
            <p className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">
              libertyinfoscience
            </p>
            <p
              aria-hidden="true"
              className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent"
            >
              libertyinfoscience
            </p>
            <p
              aria-hidden="true"
              className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent"
            >
              libertyinfoscience
            </p>
            <p
              aria-hidden="true"
              className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent"
            >
              libertyinfoscience
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </footer>
  );
}
