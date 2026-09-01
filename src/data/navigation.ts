export type NavLink = {
  href: string;
  label: string;
  submenu?: boolean;
};

export const navLinks: NavLink[] = [
  { href: "/company", label: "Company", submenu: true },
  { href: "/services", label: "Services", submenu: true },
  { href: "/projects", label: "Projects" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact Us" },
];

export type PageSlug = "company" | "services" | "career" | "contact" | "projects";

export const pageSlugs: PageSlug[] = [
  "company",
  "services",
  "career",
  "contact",
  "projects",
];

export const pageMeta: Record<
  PageSlug,
  { title: string; description: string; eyebrow: string }
> = {
  company: {
    title: "Company — Design Studio",
    description:
      "Learn about our global consulting studio dedicated to building smarter, more adaptive digital products.",
    eyebrow: "About us",
  },
  services: {
    title: "Services — Design Studio",
    description:
      "UI/UX design, web development, and digital strategy for startups and growing companies.",
    eyebrow: "Our services",
  },
  career: {
    title: "Career — Design Studio",
    description:
      "Join our team of designers, researchers, and engineers building products that matter.",
    eyebrow: "Careers",
  },
  contact: {
    title: "Contact — Design Studio",
    description:
      "Start a project or say hello — we'd love to hear from you.",
    eyebrow: "Contact",
  },
  projects: {
    title: "Projects — Design Studio",
    description:
      "Featured projects and case studies from our design and development studio.",
    eyebrow: "Case Studies",
  },
};
