"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ScrollReveal, ScrollStagger, ScrollItem, fadeUp } from "@/components/ui/ScrollReveal";

const partners = [
  { src: "/partners/partner-1.svg", alt: "Partner logo", width: 140, height: 40 },
  { src: "/partners/partner-2.svg", alt: "Logoipsum", width: 150, height: 40 },
  { src: "/partners/partner-3.svg", alt: "Logoipsum", width: 168, height: 40 },
  { src: "/partners/partner-4.svg", alt: "Partner mark", width: 56, height: 40 },
] as const;

export function Partners() {
  return (
    <section
      aria-label="Trusted by"
      className=" py-12 sm:py-14"
    >
      <Container>
        <ScrollReveal amount={0.4}>
          <ScrollStagger className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 md:gap-x-20 lg:gap-x-24">
            {partners.map((partner) => (
              <ScrollItem key={partner.src} variants={fadeUp}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-8 w-auto opacity-90 sm:h-9"
                />
              </ScrollItem>
            ))}
          </ScrollStagger>
        </ScrollReveal>
      </Container>
    </section>
  );
}
