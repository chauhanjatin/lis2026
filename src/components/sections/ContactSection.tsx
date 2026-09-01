"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/SectionHero";
import { cn } from "@/components/lib/cn";

const contactDetails = [
  {
    icon: MapPin,
    label: "Des Moines, Iowa, USA",
    href: undefined,
  },
  {
    icon: Phone,
    label: "+1 (800) 456-256",
    href: "tel:+1800456256",
  },
  {
    icon: Mail,
    label: "hello@designstudio.com",
    href: "mailto:hello@designstudio.com",
  },
] as const;

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "#" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { label: "X", icon: FaXTwitter, href: "#" },
] as const;

const fieldClass =
  "contact-field w-full rounded-xl bg-[#ececee] px-4 py-3.5 text-sm text-[#151618] placeholder:text-[#8f9194] outline-none transition-[box-shadow,background-color] focus:bg-white focus:shadow-[0_0_0_2px_rgba(13,79,184,0.18)]";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-background pb-16 md:pb-24 pt-28 md:pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]"
              />
              Contact
            </p>

            <h1 className="mt-7 font-Sora text-[clamp(2.5rem,5vw,4.25rem)] font-semibold  leading-[0.98] tracking-[-0.04em] text-[#151618]">
              Let&apos;s work
              <br />
              <GradientText>Together.</GradientText>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-[#606468]">
              Let&apos;s craft intuitive, beautiful, and results-driven user
              experiences together.
            </p>

            <ul className="mt-10 space-y-4">
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="inline-flex items-center gap-3 text-sm font-medium text-[#151618] transition-opacity hover:opacity-70"
                    >
                      <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                      {label}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-3 text-sm font-medium text-[#151618]">
                      <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div
              className="mt-10 flex items-center gap-3"
              aria-label="Social links"
            >
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-grid size-10 place-items-center rounded-full bg-[#ececee] text-[#151618] transition-[transform,background-color] hover:scale-[1.05] hover:bg-[#e2e4e8]"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_16px_48px_rgba(12,14,18,0.06)] sm:p-8 lg:p-10">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="contact-label">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="First Name"
                    className={fieldClass}
                    required
                  />
                </label>
                <label className="contact-label">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    className={fieldClass}
                    required
                  />
                </label>
              </div>

              <label className="contact-label mt-5 block">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={cn(fieldClass, "mt-2")}
                  required
                />
              </label>

              <label className="contact-label mt-5 block">
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone"
                  className={cn(fieldClass, "mt-2")}
                />
              </label>

              <label className="contact-label mt-5 block">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  className={cn(fieldClass, "mt-2 resize-none")}
                  required
                />
              </label>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#101116] px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                {submitted ? "Message sent" : "Send Message"}
                <span
                  aria-hidden="true"
                  className="inline-grid size-8 place-items-center rounded-full bg-white text-[#101116] transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
