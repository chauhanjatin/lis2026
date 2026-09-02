export type NavLink = {
  href: string;
  label: string;
  submenu?: boolean;
};

export type NavDropdownItem = {
  href: string;
  label: string;
  iconBg: string;
  iconColor: string;
};

export const companyMenuItems: NavDropdownItem[] = [
  {
    href: "/company",
    label: "About Us",
    iconBg: "bg-[#ede8f7]",
    iconColor: "text-[#5b4d9a]",
  },
  {
    href: "/projects",
    label: "Case Studies",
    iconBg: "bg-[#e3f0fa]",
    iconColor: "text-[#2563a8]",
  },
];

export const servicesMenuItems: NavDropdownItem[] = [
  {
    href: "/services#ui-ux-design",
    label: "UI/UX Design",
    iconBg: "bg-[#f8e8ef]",
    iconColor: "text-[#9b4d72]",
  },
  {
    href: "/services#web-development",
    label: "Web Development",
    iconBg: "bg-[#faf0df]",
    iconColor: "text-[#b8860b]",
  },
  {
    href: "/services#mobile-development",
    label: "Mobile Development",
    iconBg: "bg-[#e3f0fa]",
    iconColor: "text-[#2563a8]",
  },
  {
    href: "/services#business-services",
    label: "Business Services",
    iconBg: "bg-[#ede8f7]",
    iconColor: "text-[#5b4d9a]",
  },
];

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
