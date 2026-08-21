import Image from "next/image";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "./ContactCTA";

const navigation = [
  { href: "#hero", label: "Home" },
  { href: "#company", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Instagram", icon: FaInstagram },
  { label: "Portfolio", icon: FaDribbble },
];

export function Footer() {
  return (
    <footer className="studio-footer">
      <ContactCTA />
      <Container className="studio-footer-frame">
        <div className="studio-footer-marquee" aria-label="libertyinfoscience">
          <div className="studio-footer-marquee-track">
            <p className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">libertyinfoscience</p>
            <p aria-hidden="true" className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">libertyinfoscience</p>
            <p aria-hidden="true" className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">libertyinfoscience</p>
            <p aria-hidden="true" className="bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5] bg-clip-text text-transparent">libertyinfoscience</p>
          </div>
        </div>
        <div className="studio-footer-content">
          <div className="studio-footer-brand">
            <a href="#hero" aria-label="Design Studio home">
              <Image src="/lis-logo.svg" alt="Design Studio" width={151} height={51} priority />
            </a>
            <div className="studio-footer-socials" aria-label="Social links">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a key={label} href="#contact" aria-label={label}>
                  <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="studio-footer-nav" aria-label="Footer navigation">
            <p>[ Navigate ]</p>
            <ul>{navigation.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
          </nav>

          <address className="studio-footer-contact">
            <p>[ Contact ]</p>
            <div>
              <span>Available worldwide</span>
              <a href="mailto:hello@designstudio.com">hello@designstudio.com</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
          </address>
        </div>

        <div className="studio-footer-bottom">
          <p>© {new Date().getFullYear()} Design Studio</p>
          <p>All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}