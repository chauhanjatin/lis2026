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
      { src: "/project2.png", alt: "Parasol Virtual Services responsive website on laptop and mobile" },
      { src: "/mobiledevelopment.png", alt: "Mobile app UI designs for LearnBud AI, Tripify, Holidayyyy and pharmacy apps" },
      { src: "/saaswebapp.png", alt: "SaaS web app dashboards for UniqLearn, Overc360 and DTS Splint" },
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
      { src: "/project1.png", alt: "Cinema UGC ad platform creator dashboard on laptop and mobile" },
      { src: "/uxdesign.png", alt: "UX design process map with color palette and typography design system" },
      { src: "/dts-splint.png", alt: "DTS Splint AI dental splint design software dashboard" },
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
      { src: "/webdesign.png", alt: "Responsive website designs for dermatology, dental and pet care businesses" },
      { src: "/project3.png", alt: "Salviali Integrated Medicine website design on a laptop" },
      { src: "/uniqlearn/uniqlearn.png", alt: "UniqLearn education platform dashboard web design" },
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
      { src: "/project4.png", alt: "VIOC fertility care center landing page on desktop and mobile" },
      { src: "/integrative-dermatology.png", alt: "Integrative Dermatology clinic landing page hero section" },
      { src: "/project5.png", alt: "Prime Estate real estate landing page design" },
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
      { src: "/learnbudai/learnbudai.png", alt: "LearnBud AI brand identity and mobile app design" },
      { src: "/project6.png", alt: "Zwiggo food delivery app branding and UI design" },
      { src: "/businessservices.png", alt: "Digital marketing services: SEO, web development, paid ads and content promotion" },
    ],
    description:
      "We create strong brand identities with consistent visuals, memorable logos, and impactful design systems.",
    ctaText: "Get This Now",
    ctaHref: "/contact",
  },
];
