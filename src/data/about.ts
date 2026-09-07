export type AboutHeroData = {
  prefix: string;
  brand: string;
  pillBadge: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  highlight: string;
  line2Prefix: string;
  roundBadge: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  line2Suffix: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export type AboutPartner = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type AboutStat = {
  label: string;
  value: number;
  suffix: string;
  description: string;
  featured?: boolean;
};

export type AboutCoreValue = {
  id: string;
  title: string;
  icon: "commitment" | "clarity" | "excellence" | "passion";
  description: string;
};

export type AboutCoreValuesSectionData = {
  title: string;
  subtitle: string;
  values: AboutCoreValue[];
};

export type AboutFAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type AboutFAQSectionData = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: AboutFAQItem[];
};

export type AboutValue = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

export type AboutStoryPillar = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type AboutStory = {
  eyebrow: string;
  heading: string;
  leadParagraph: string;
  image: {
    src: string;
    alt: string;
    badgeText: string;
  };
  socials: {
    platform: "x" | "website" | "instagram";
    href: string;
  }[];
  pillars: AboutStoryPillar[];
};

export type AboutTeamMember = {
  name: string;
  role: string;
  bio: string;
  location: string;
};

export type AboutCTA = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export const aboutHeroData: AboutHeroData = {
  prefix: "Meet",
  brand: "Agero",
  pillBadge: {
    src: "/about/badge-building.svg",
    alt: "Modern architecture headquarters badge",
    width: 66,
    height: 44,
  },
  highlight: "Bold Ideas",
  line2Prefix: "Real Impact",
  roundBadge: {
    src: "/about/badge-column-plant.svg",
    alt: "Sustainable design and growth badge",
    width: 44,
    height: 44,
  },
  line2Suffix: "Driven",
  description:
    "LIS is a leading UX design, mobile app, and custom software development company. Our diverse team of strategists and technologists combines expertise to create innovative digital solutions.",
  cta: {
    label: "View Projects",
    href: "/projects",
  },
};

export const aboutPartners: AboutPartner[] = [
  {
    src: "/partners/partner-1.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-2.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-3.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-4.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-5.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-6.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-7.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-8.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-9.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
  {
    src: "/partners/partner-10.webp",
    alt: "Partner mark",
    width: 200,
    height: 100,
  },
];

export const aboutCoreValuesData: AboutCoreValuesSectionData = {
  title: "Our Core Values",
  subtitle:
    "We are driven by our core values and philosophies that are deeply ingrained in each and every one of us. For us, helping our clients comes first!",
  values: [
    {
      id: "commitment",
      title: "Commitment",
      icon: "commitment",
      description:
        "Our employees are empowered and inspired. Only those who are content and connected can provide a truly excellent service. Our dedication to our staff translates into a dedication to our clients",
    },
    {
      id: "clarity",
      title: "Clarity",
      icon: "clarity",
      description:
        "Everything we promise and deliver is precise and straightforward. We always make sure that our clients are treated with transparency. With our employees, we are upfront and sincere while putting the most important things first.",
    },
    {
      id: "excellence",
      title: "Excellence",
      icon: "excellence",
      description:
        "We aim for the best quality in all we do, including our overall service, communication, and decision-making. We push engineering excellence. Instead of following trends, we start them.",
    },
    {
      id: "passion",
      title: "Passion",
      icon: "passion",
      description:
        "Passion leads to commitment. Responsibility comes with commitment. LIS's success was fueled by dedicated individuals in every way. We wouldn't be the business we are today without them.",
    },
  ],
};

export const aboutFAQData: AboutFAQSectionData = {
  eyebrow: "Common Questions",
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about partnering with Agero.",
  items: [
    {
      id: "why-agero",
      question: "Why's Agero instead of full-time designer?",
      answer:
        "Hiring a full-time senior designer costs over $120,000+ annually plus benefits and equity. With Agero, you get access to an entire multidisciplinary studio of elite senior designers and engineers for a flexible, scalable engagement with zero overhead and instant turnaround.",
    },
    {
      id: "how-to-request",
      question: "How to request a design?",
      answer:
        "Requesting a design is effortless. Once onboarded, you get direct access to our collaborative board (Trello/Slack/Linear) where you can queue requests, upload wireframes or Loom videos, and track progress in real-time.",
    },
    {
      id: "speed-delivery",
      question: "Speed of design delivery?",
      answer:
        "Most initial design requests and iterative cycles are delivered within 48 to 72 hours. Complex product architectures, full design systems, or bespoke app sprints are broken down into rapid milestones delivered continuously.",
    },
    {
      id: "not-like-design",
      question: "What if I don't like design?",
      answer:
        "No worries at all! We offer unlimited design revisions until you are 100% satisfied. We collaborate closely to align on your vision, iterate rapidly on feedback, and ensure the final product exceeds your expectations.",
    },
  ],
};

export const aboutStats: AboutStat[] = [
  {
    label: "Completed Projects",
    value: 100,
    suffix: "+",
    description:
      "Products, platforms, and brand systems shipped from discovery through launch.",
    featured: false,
  },
  {
    label: "Expert Team",
    value: 15,
    suffix: "+",
    description:
      "Designers, researchers, and engineers working as one adaptive studio team.",
    featured: true,
  },
  {
    label: "Satisfied Clients",
    value: 80,
    suffix: "+",
    description:
      "Startups and enterprises we partner with to design, build, and scale digital products.",
    featured: false,
  },
];

export const aboutStoryData: AboutStory = {
  eyebrow: "Our Foundation",
  heading: "Empowering innovation through clarity & craft.",
  leadParagraph:
    "We partner with forward-thinking leaders to turn complex visions into world-class digital experiences that drive measurable outcomes.",
  image: {
    src: "/about/founder.jpg",
    alt: "Creative Director & Studio Team",
    badgeText: "AWARD WINNING STUDIO • SINCE 2020 •",
  },
  socials: [
    { platform: "x", href: "https://x.com" },
    { platform: "website", href: "https://agero.design" },
    { platform: "instagram", href: "https://instagram.com" },
  ],
  pillars: [
    {
      id: "mission",
      number: "01",
      title: "Our Mission",
      description:
        "We think that digital is the way of the future. We also think that companies' expansion is delayed if new technology is not embraced.",
    },
    {
      id: "vision",
      number: "02",
      title: "Our Vision",
      description:  
        "Our vision is to become the world’s best IT solutions partner and global leader who provides the best IT services to people all around the world.",
    },
    {
      id: "quality",
      number: "03",
      title: "Quality Management",
      description:
        "We are a quality-focused software development business, developing software while complying with legal criteria for quality and data security.",
    },
  ],
};

export const aboutValues: AboutValue[] = [
  {
    number: "01",
    title: "Bold Curiosity",
    tag: "Mindset",
    description:
      "We never settle for conventional templates. We question assumptions, experiment fearlessly, and uncover breakthrough opportunities.",
  },
  {
    number: "02",
    title: "Purpose-Driven Craft",
    tag: "Execution",
    description:
      "Every pixel, curve, and animation must earn its place. Beauty and utility must work in flawless harmony to drive real business metrics.",
  },
  {
    number: "03",
    title: "Radical Transparency",
    tag: "Collaboration",
    description:
      "No jargon, no hidden agendas. We collaborate closely with our partners, sharing work-in-progress early and iterating with speed.",
  },
  {
    number: "04",
    title: "Built for Tomorrow",
    tag: "Engineering",
    description:
      "We build on solid, maintainable foundations using modern frameworks and accessible design standards that grow effortlessly with your vision.",
  },
];

export const aboutTeam: AboutTeamMember[] = [
  {
    name: "Alex Reed",
    role: "Founding Partner & Creative Director",
    bio: "Over a decade directing digital brand experiences and interactive design systems.",
    location: "San Francisco, CA",
  },
  {
    name: "Elena Rostova",
    role: "Head of Engineering",
    bio: "Architecting scalable web platforms, high-throughput microservices, and slick client apps.",
    location: "London, UK",
  },
  {
    name: "Marcus Vance",
    role: "Lead Product Designer",
    bio: "Obsessed with micro-interactions, accessibility, and human-centered design heuristics.",
    location: "Berlin, DE",
  },
  {
    name: "Sophia Chen",
    role: "Design Strategist & Researcher",
    bio: "Translating qualitative user insights into clear strategic direction and intuitive IA.",
    location: "New York, NY",
  },
];

export const aboutCTAData: AboutCTA = {
  eyebrow: "Let's Collaborate",
  title: "Ready to turn bold ideas into real impact?",
  description:
    "Whether you're starting from scratch or re-architecting an existing product, our team is ready to help you move faster and build better.",
  buttonLabel: "Start a Conversation",
  buttonHref: "/contact",
};