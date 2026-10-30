"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "@/data/socials";
import { GradientText } from "@/components/ui/SectionHero";
import { cn } from "@/components/lib/cn";

const officeAddress =
  "424, Sumerru Business Corner, B/H Rajhans Multiplex, Pal Gam, Surat, Gujarat, India";

const mapEmbedUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(
  officeAddress,
)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

const contactDetails = [
  {
    icon: MapPin,
    label: officeAddress,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`,
  },
  {
    icon: Phone,
    label: "+91 70963 64801",
    href: "tel:+917096364801",
  },
  {
    icon: Mail,
    label: "info@libertyinfoscience.com",
    href: "mailto:info@libertyinfoscience.com",
  },
] as const;

const fieldClass =
  "contact-field w-full rounded-xl bg-[#ececee] px-4 py-3.5 text-sm text-[#151618] placeholder:text-[#8f9194] outline-none transition-[box-shadow,background-color] focus:bg-white focus:shadow-[0_0_0_2px_rgba(13,79,184,0.18)]";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/lisharsh2002@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "First Name": payload.firstName,
          "Last Name": payload.lastName,
          Email: payload.email,
          Phone: payload.phone || "Not provided",
          Message: payload.message,
          _replyto: payload.email,
          _subject: `New contact from ${payload.firstName} ${payload.lastName}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        success?: boolean | string;
        message?: string;
      } | null;
      const delivered = result?.success === true || result?.success === "true";
      if (!response.ok || !delivered) {
        throw new Error(result?.message || "Could not send your message.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send your message.");
    }
  }

  return (
    <section className="bg-background pb-16 md:pb-24 pt-28 md:pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <div className="flex flex-col items-start">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#202224]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0D4FB8] to-[#42BFA5]"
              />
              Contact
            </p>

            <h1 className="mt-7 font-Sora text-[clamp(2.5rem,5vw,4.25rem)] font-semibold  leading-[0.98] tracking-[-0.04em] text-[#151618] sm:text-4xl md:text-6xl">
              Let&apos;s work
              <br />
              <GradientText>together.</GradientText>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-[#606468]">
              Let&apos;s craft intuitive, beautiful, and results-driven user
              experiences together.
            </p>

            <ul className="mt-10 space-y-4">
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex items-start gap-3 max-w-md text-sm font-medium leading-relaxed text-[#151618] transition-opacity hover:opacity-70"
                  >
                    <Icon size={16} strokeWidth={1.8} aria-hidden="true" className="mt-[3px] shrink-0" />
                    {label}
                  </a>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-grid size-10 place-items-center rounded-full bg-[#ececee] text-[#151618] transition-[transform,background-color] hover:scale-[1.05] hover:bg-[#e2e4e8]"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="relative mt-10 self-stretch min-h-[240px] sm:min-h-[280px] lg:min-h-[220px] flex-1 overflow-hidden rounded-[1.75rem] border border-black/5 bg-[#ececee] shadow-[0_16px_48px_rgba(12,14,18,0.06)]">
              <iframe
                title="Office location on Google Maps"
                src={mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col rounded-[1.75rem] bg-white p-6 shadow-[0_16px_48px_rgba(12,14,18,0.06)] sm:p-8 lg:p-10">
            <form className="contact-form flex flex-1 flex-col" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-first-name" className="contact-label block mb-2">
                    First Name <span className="text-[#0D4FB8]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-first-name"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="First Name"
                    className={fieldClass}
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="contact-label block mb-2">
                    Last Name <span className="text-[#0D4FB8]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-last-name"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    className={fieldClass}
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-email" className="contact-label block mb-2">
                  Email <span className="text-[#0D4FB8]" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                  required
                  aria-required="true"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="contact-phone" className="contact-label block mb-2">
                  Phone <span className="text-xs font-normal text-[#606468]">(Optional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone"
                  className={fieldClass}
                />
              </div>

              <div className="mt-5 !flex flex-1 flex-col">
                <label htmlFor="contact-message" className="contact-label block mb-2">
                  Message <span className="text-[#0D4FB8]" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Type your message here..."
                  className={cn(fieldClass, "min-h-[140px] flex-1 resize-none")}
                  required
                  aria-required="true"
                />
              </div>

              {/* Accessible Live Region for Form Status */}
              <div role="status" aria-live="polite" className="sr-only">
                {status === "sending" && "Sending your message..."}
                {status === "sent" && "Thank you! Your message has been sent successfully."}
              </div>

              {status === "sent" && (
                <div role="status" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
                  ✓ Thank you! Your message has been sent successfully. We will get in touch shortly.
                </div>
              )}

              {error ? (
                <div role="alert" aria-live="assertive" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-[#b42318]">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#101116] px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D4FB8] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message sent" : "Send Message"}
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
