import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="hero" className="overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-52">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-balance text-5xl font-semibold leading-[1.12] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl lg:text-[4.7rem]">
            Transforming Ideas<br />Into Powerful Digital<br />Experiences
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            We help businesses grow with modern websites, intuitive UI/UX design,
            scalable software solutions, and strategic digital innovation tailored
            for the future.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[24px] bg-[#d8d8d8] shadow-[0_18px_55px_rgba(26,41,55,0.08)] md:mt-24 md:rounded-[30px]">
          <Image
            src="/hero-studio.png"
            alt="Abstract architectural composition in blue, glass, and chrome"
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 1400px"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}