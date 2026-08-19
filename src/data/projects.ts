export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    title: "A fintech dashboard built for daily use",
    category: "SaaS · UI/UX + Frontend",
    summary:
      "Redesigned a dense analytics product around the three tasks users actually perform daily, cutting time-to-insight significantly.",
    image: "https://placehold.co/1200x800.webp",
    alt: "Dashboard interface for a fintech SaaS product, showing a dark-mode analytics view",
  },
  {
    slug: "marketplace-mvp",
    title: "A two-sided marketplace, from zero to launch",
    category: "Startup · Full-stack",
    summary:
      "Took a marketplace concept from research to a working product in eight weeks — design, frontend, and backend in parallel.",
    image: "https://placehold.co/1200x800.webp",
    alt: "Product listing and checkout screens for a two-sided marketplace web app",
  },
  {
    slug: "b2b-onboarding",
    title: "Cutting B2B onboarding from days to minutes",
    category: "SaaS · UX Research + Design",
    summary:
      "Rebuilt an enterprise onboarding flow around user research findings, reducing drop-off in the first-run experience.",
    image: "https://placehold.co/1200x800.webp",
    alt: "Step-by-step onboarding flow interface for a B2B software product",
  },
];
