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
      "Our skilled designers create visually appealing, intuitive, and user-friendly experiences that solve user problems and make every interaction seamless and engaging.",
  },
  {
    id: "Web-Design",
    title: "Web Design",
    description:
      "We create custom, visually engaging website designs that strengthen your brand identity, enhance user experience, and help drive meaningful business growth.",
  },
  {
    id: "Web-Development",
    title: "Web Development",
    description:
      "We develop scalable, high-performance web solutions that strengthen your online presence, streamline business operations, and support your company's growth.",
  },
  {
    id: "Mobile-Development",
    title: "Mobile Development",
    description:
      "We build responsive, feature-rich mobile applications with intuitive interfaces and seamless functionality to help your business reach a wider global audience.",
  },
  {
    id: "Business-Services",
    title: "Business Services",
    description:
      "We integrate business services with your application data to streamline workflows, improve efficiency, and help your business expand its global reach.",
  },
];

export const services: Service[] = homeServices;

export const detailedServices: ServiceItem[] = [
  {
    id: "ui-ux-design",
    number: "01.",
    title: "UI/UX Design",
    tags: ["User Research", "UI Design", "UX Strategy", "Wireframe Design"],
    images: [
      { src: "/uxdesign.png", alt: "UX design process map with color palette and typography" },
      { src: "/ui-ux.png", alt: "UI design system, wireframes and user flow" },
      { src: "/design.png", alt: "Product dashboard UI with charts, profiles and color controls" },
    ],
    description:
      "We craft intuitive interfaces, thoughtful user journeys, and visual systems that make every interaction clear and engaging.",
    ctaText: "Read More",
    ctaHref: "/services/ui-ux-design",
  },
  {
    id: "web-development",
    number: "02.",
    title: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Scalable APIs"],
    images: [
      { src: "/web-development.png", alt: "Full-stack web development with modern technologies and clean code" },
      { src: "/saaswebapp.png", alt: "SaaS web app dashboards for UniqLearn, Overc360 and DTS Splint" },
      { src: "/project3.png", alt: "Salviali Integrated Medicine website on a laptop" },
    ],
    description:
      "We develop scalable, high-performance web solutions that strengthen your online presence and support business growth.",
    ctaText: "Read More",
    ctaHref: "/services/web-development",
  },
  {
    id: "mobile-development",
    number: "03.",
    title: "Mobile Development",
    tags: ["iOS & Android", "React Native", "Mobile UI", "App Architecture"],
    images: [
      { src: "/project6.png", alt: "Zwiggo food delivery app on a phone" },
      { src: "/mobile-development.png", alt: "Mobile app development setup with a phone and code on screen" },
      { src: "/hero-mobiledevelopment.png", alt: "iOS and Android app screens for pharmacy, travel and learning apps" },
    ],
    description:
      "We build responsive, feature-rich mobile applications with intuitive interfaces and smooth performance.",
    ctaText: "Read More",
    ctaHref: "/services/mobile-development",
  },
  {
    id: "business-services",
    number: "04.",
    title: "Business Services",
    tags: ["Strategy", "Consulting", "Branding", "Growth"],
    images: [
      { src: "/businessservices.png", alt: "Team reviewing business reports, charts and growth plans" },
      { src: "/project4.png", alt: "VIOC fertility care website on desktop and mobile" },
      { src: "/project5.png", alt: "Prime Estate real estate website design" },
    ],
    description:
      "We connect business services with your product and brand so workflows, positioning, and growth stay aligned.",
    ctaText: "Read More",
    ctaHref: "/services/business-services",
  },
];
