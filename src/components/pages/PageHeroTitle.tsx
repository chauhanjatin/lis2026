import { GradientText, SectionHero } from "@/components/ui/SectionHero";
import type { PageSlug } from "@/data/navigation";

export function PageHeroTitle({ slug }: { slug: PageSlug }) {
  switch (slug) {
    case "company":
      return (
        <SectionHero eyebrow="About us">
          A global consulting partner
          <br />
          <GradientText>dedicated to building</GradientText> smarter and more
          adaptive businesses.
        </SectionHero>
      );
    case "services":
      return (
        <SectionHero eyebrow="Our services">
          Inspiring digital <GradientText>experiences.</GradientText>
        </SectionHero>
      );
    case "career":
      return (
        <SectionHero eyebrow="Careers">
          Join our team and build
          <br />
          what&apos;s <GradientText>next.</GradientText>
        </SectionHero>
      );
    case "contact":
      return (
        <SectionHero eyebrow="Contact">
          Let&apos;s make something
          <br />
          <GradientText>amazing together.</GradientText>
        </SectionHero>
      );
    case "projects":
      return (
        <SectionHero eyebrow="Portfolio">
          Our work,
          <br />
          <GradientText>made to matter.</GradientText>
        </SectionHero>
      );
  }
}