export type Service = {
  id: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  tags: string[];
  images: {
    src: string;
    alt: string;
  }[];
  description: string;
  ctaText?: string;
  ctaHref?: string;
};

export const homeServices: Service[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Our skilled designers produce the best aesthetics. Your users will be astounded by a UX/UI that is appealing, useful, and simple to use, and it will address their problems successfully.",
  },
  {
    id: "Web-Design",
    title: "Web Design",
    description:
      "We help design custom design that drives your business to success. Our success is the result of our actionable results.",
  },
  {
    id: "Web-Development",
    title: "Web Development",
    description:
      "Develop fully-scalable web solutions to ensure your company's online presence with our web development services.",
  },
  {
    id: "Mobile-Development",
    title: "Mobile Design",
    description:
      "We provide significant business growth with responsive mobile development to expand beyond the global horizon with an intuitive user interface and high-quality features.",
  },
  {
    id: "Business-Services",
    title: "Business Services",
    description:
      "We help design custom design that drives your business to success. Our success is the result of our actionable results.",
  },
];

export const services: Service[] = homeServices;

export const detailedServices: ServiceItem[] = [
  {
    id: "mobile-app-design",
    number: "01.",
    title: "Mobile App Design",
    tags: ["User Research", "UI Design", "UX Strategy", "Wireframe Design"],
    images: [
      { src: "/project2.png", alt: "Mobile app interfaces showcase" },
      { src: "/mobiledevelopment.png", alt: "iOS application design mockup" },
      { src: "/saaswebapp.png", alt: "Responsive mobile experience preview" },
    ],
    description:
      "We design simple mobile apps with clean layout, smooth flow, fast speed, and easy user friendly experience for all users.",
    ctaText: "Get This Now",
    ctaHref: "/contact",
  },
  {
    id: "dashboard-design",
    number: "02.",
    title: "Dashboard Design",
    tags: ["User Research", "UI Design", "UX Strategy", "Wireframe Design"],
    images: [
      { src: "/project1.png", alt: "Analytics dashboard tablet interface" },
      { src: "/uxdesign.png", alt: "Interactive data visualization UI" },
      { src: "/dts-splint.png", alt: "Enterprise workflow dashboard" },
    ],
    description:
      "We design mobile apps with intuitive layouts, smooth flows, and engaging visuals for better user experience.",
    ctaText: "Get This Now",
    ctaHref: "/contact",
  },
  {
    id: "full-website-design",
    number: "03.",
    title: "Full Website Design",
    tags: ["User Research", "UI Design", "UX Strategy", "Wireframe Design"],
    images: [
      { src: "/webdesign.png", alt: "Modern laptop website mockup" },
      { src: "/project3.png", alt: "Responsive web design showcase" },
      { src: "/uniqlearn.png", alt: "Dark theme website layout" },
    ],
    description:
      "We design modern websites with clean layouts, fast performance, and smooth user experience for all devices.",
    ctaText: "Get This Now",
    ctaHref: "/contact",
  },
  {
    id: "landing-page-design",
    number: "04.",
    title: "Landing Page Design",
    tags: ["User Research", "UI Design", "UX Strategy", "Wireframe Design"],
    images: [
      { src: "/project4.png", alt: "High converting marketing landing page" },
      { src: "/integrative-dermatology.png", alt: "Conversion optimized hero section" },
      { src: "/project5.png", alt: "Product launch landing page mockup" },
    ],
    description:
      "We design high converting landing pages with clear messaging, strong visuals, and smooth user experience.",
    ctaText: "Get This Now",
    ctaHref: "/contact",
  },
  {
    id: "branding-design",
    number: "05.",
    title: "Branding Design",
    tags: ["User Research", "UI Design", "UX Strategy", "Wireframe Design"],
    images: [
      { src: "/learnbudai.png", alt: "Brand identity studio display" },
      { src: "/project6.png", alt: "Design system and typography tokens" },
      { src: "/businessservices.png", alt: "Brand collateral and stationery mockup" },
    ],
    description:
      "We create strong brand identities with consistent visuals, memorable logos, and impactful design systems.",
    ctaText: "Get This Now",
    ctaHref: "/contact",
  },
];
