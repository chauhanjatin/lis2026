export type PortfolioFilter = "all" | "web-design" | "ui-ux" | "branding";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  tags: Exclude<PortfolioFilter, "all">[];
  figmaUrl: string;
  websiteUrl: string;
};

export const portfolioFilters: { id: PortfolioFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web-design", label: "Web Design" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "branding", label: "Branding" },
];

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "Lumen Collective",
    category: "Web Design",
    summary:
      "Redesigned a dense analytics product around the three tasks users actually perform daily, cutting time-to-insight significantly.",
    image: "/project1.png",
    alt: "Lumen Collective web design showcase on a laptop mockup",
    tags: ["web-design", "ui-ux"],
    figmaUrl: "https://www.figma.com/design/lumen-collective",
    websiteUrl: "https://lumencollective.example.com",
  },
  {
    slug: "marketplace-mvp",
    title: "Arc & Co.",
    category: "UI/UX",
    summary:
      "Took a marketplace concept from research to a working product in eight weeks — design, frontend, and backend in parallel.",
    image: "/project2.png",
    alt: "Arc & Co. mobile interface on a smartphone mockup",
    tags: ["ui-ux"],
    figmaUrl: "https://www.figma.com/design/arc-and-co",
    websiteUrl: "https://arcandco.example.com",
  },
  {
    slug: "b2b-onboarding",
    title: "Northline Studio",
    category: "Branding",
    summary:
      "Rebuilt an enterprise onboarding flow around user research findings, reducing drop-off in the first-run experience.",
    image: "/project3.png",
    alt: "Northline Studio brand identity and digital presence",
    tags: ["branding", "web-design"],
    figmaUrl: "https://www.figma.com/design/northline-studio",
    websiteUrl: "https://northlinestudio.example.com",
  },
  {
    slug: "uniqlearn",
    title: "UniqLearn",
    category: "Web Design",
    summary:
      "An education platform with a clean learning experience designed for clarity, focus, and daily engagement.",
    image: "/uniqlearn.png",
    alt: "UniqLearn education platform interface",
    tags: ["web-design", "ui-ux"],
    figmaUrl: "https://www.figma.com/design/uniqlearn",
    websiteUrl: "https://uniqlearn.example.com",
  },
  {
    slug: "integrative-dermatology",
    title: "Integrative Dermatology",
    category: "UI/UX",
    summary:
      "A patient-first healthcare experience with intuitive booking, care journeys, and trust-building visual design.",
    image: "/integrative-dermatology.png",
    alt: "Integrative Dermatology healthcare web application",
    tags: ["ui-ux", "web-design"],
    figmaUrl: "https://www.figma.com/design/integrative-dermatology",
    websiteUrl: "https://integrativedermatology.example.com",
  },
  {
    slug: "learnbud-ai",
    title: "LearnBud AI",
    category: "Branding",
    summary:
      "Brand system and product UI for an AI learning assistant built to feel approachable, smart, and human.",
    image: "/learnbudai.png",
    alt: "LearnBud AI brand and product design",
    tags: ["branding", "ui-ux"],
    figmaUrl: "https://www.figma.com/design/learnbud-ai",
    websiteUrl: "https://learnbudai.example.com",
  },
];
