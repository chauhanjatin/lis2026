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
    href: "/case-studies",
    label: "Case Studies",
    iconBg: "bg-[#e3f0fa]",
    iconColor: "text-[#2563a8]",
  },
];

export const servicesMenuItems: NavDropdownItem[] = [
  {
    href: "/services/ui-ux-design",
    label: "UI/UX Design",
    iconBg: "bg-[#f8e8ef]",
    iconColor: "text-[#9b4d72]",
  },
  {
    href: "/services/web-development",
    label: "Web Development",
    iconBg: "bg-[#faf0df]",
    iconColor: "text-[#b8860b]",
  },
  {
    href: "/services/mobile-development",
    label: "Mobile Development",
    iconBg: "bg-[#e3f0fa]",
    iconColor: "text-[#2563a8]",
  },
  {
    href: "/services/business-services",
    label: "Business Services",
    iconBg: "bg-[#ede8f7]",
    iconColor: "text-[#5b4d9a]",
  },
];

export const navLinks: NavLink[] = [
  { href: "/company", label: "About Us" },
  { href: "/services", label: "Services", submenu: true },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
];

export type PageSlug =
  | "company"
  | "about"
  | "about-us"
  | "services"
  // | "career"
  | "contact"
  | "projects";

export const pageSlugs: PageSlug[] = [
  "company",
  "about",
  "about-us",
  "services",
  // "career",
  "contact",
  "projects",
];

export const pageMeta: Record<
  PageSlug,
  { title: string; description: string; eyebrow: string }
> = {
  company: {
    title: "About Us — Digital Product Design & Engineering Studio",
    description:
      "Discover Liberty Info Science — an agile team of product researchers, Figma UI/UX specialists, and full-stack software engineers transforming digital vision into reality.",
    eyebrow: "About Us",
  },
  about: {
    title: "About Us — Digital Product Design & Engineering Studio",
    description:
      "Discover Liberty Info Science — an agile team of product researchers, Figma UI/UX specialists, and full-stack software engineers transforming digital vision into reality.",
    eyebrow: "About Us",
  },
  "about-us": {
    title: "About Us — Digital Product Design & Engineering Studio",
    description:
      "Discover Liberty Info Science — an agile team of product researchers, Figma UI/UX specialists, and full-stack software engineers transforming digital vision into reality.",
    eyebrow: "About Us",
  },
  services: {
    title: "Services — UI/UX Design, Web & Mobile Engineering",
    description:
      "Explore our full spectrum of digital services: end-to-end UI/UX design, high-velocity Next.js web development, native mobile apps, and enterprise consulting.",
    eyebrow: "Our Services",
  },
  contact: {
    title: "Contact Us — Start Your Next Digital Project",
    description:
      "Partner with Liberty Info Science. Connect with our senior product architects and designers in Surat, India. Inquire about custom UI/UX design or engineering.",
    eyebrow: "Contact Us",
  },
  projects: {
    title: "Portfolio & Featured Work — Client Success Stories",
    description:
      "Explore our award-winning work across EdTech, FinTech, healthcare, AI tools, and eCommerce. See how Liberty Info Science delivers high-ROI digital solutions.",
    eyebrow: "Case Studies",
  },
};
