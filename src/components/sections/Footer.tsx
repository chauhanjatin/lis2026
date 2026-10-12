"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Container } from "@/components/ui/Container";
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

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Portfolio", href: "https://dribbble.com", icon: FaDribbble },
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
                alt="Liberty Info Science"
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
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
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
                <a href="mailto:hello@designstudio.com">
                  hello@designstudio.com
                </a>
                <a href="tel:+910000000000">+91 00000 00000</a>
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
