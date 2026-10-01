import type { PhoneScreenType } from "@/components/case-study/PhoneMockup";

export type CaseStudyDetail = {
  label: string;
  content: string;
};

export type CaseStudySlide = {
  tag: string;
  title: string;
  description: string;
  screenType: PhoneScreenType;
};

export type CaseStudyData = {
  slug: string;
  eyebrow: string;
  title: string;
  meta: {
    company: {
      name: string;
      url?: string;
    };
    role: string;
    expertise: string;
    year: string;
  };
  heroScreens: PhoneScreenType[];
  projectDescription: {
    lead: string;
    items: CaseStudyDetail[];
  };
  process: {
    lead: string;
    items: CaseStudyDetail[];
  };
  solution: {
    lead: string;
    items: CaseStudyDetail[];
  };
  solutionSlides: CaseStudySlide[];
  results: {
    lead: string;
    items: CaseStudyDetail[];
  };
};

export const defaultCaseStudy: CaseStudyData = {
  slug: "ai-scheduling",
  eyebrow: "AI-POWERED SCHEDULING",
  title: "World's first AI-powered scheduling app",
  meta: {
    company: {
      name: "Wifter",
      url: "https://wifter.example.com",
    },
    role: "UX Designer",
    expertise: "UX/UI Design",
    year: "2024",
  },
  heroScreens: ["schedule", "dashboard", "calendar"],
  projectDescription: {
    lead: "Our client, a leading technology company, aimed to revolutionize scheduling processes worldwide by introducing the world's first AI-powered scheduling app.",
    items: [
      {
        label: "Timeline",
        content:
          "From initial discovery to final designs in 8 weeks, while working with multiple projects at the same time.",
      },
      {
        label: "Background",
        content:
          "With average artificial intelligence optimize your daily schedule, ensuring maximum productivity and work-life balance. The app seamlessly integrates with your existing calendar and task management tools, using advanced algorithms to prioritize tasks, suggest optimal times for meetings, and provide smart reminders.",
      },
    ],
  },
  process: {
    lead: "This category details the step-by-step approach taken during the project, including research, planning, design, development, testing, and optimization phases.",
    items: [
      {
        label: "Research & Planning",
        content:
          "Conducted market research to identify existing scheduling challenges and user preferences. Defined target audience segments and analyzed key factors that affect smooth user interactions.",
      },
      {
        label: "Design & Prototyping",
        content:
          "Collaborated with design teams to create intuitive interfaces and interactive prototypes. Iteratively refined designs based on early feedback to ensure usability and visual appeal.",
      },
      {
        label: "Development & Implementation",
        content:
          "Leveraged agile development methodologies to build the scheduling app from the ground up. Prioritized feature development based on user feedback and technical feasibility. Implemented AI algorithms to analyze user behavior and optimize scheduling recommendations.",
      },
      {
        label: "Testing & Optimization",
        content:
          "Conducted rigorous testing across various devices and platforms to ensure compatibility and performance. Gathered user feedback through beta testing and iteratively refined the app based on usability metrics and user satisfaction.",
      },
    ],
  },
  solution: {
    lead: "The resulting AI-powered scheduling app offers a seamless user experience, allowing individuals and businesses to effortlessly manage their schedules.",
    items: [
      {
        label: "Intelligent Scheduling",
        content:
          "AI algorithms analyze user preferences, availability, and priorities to generate optimized schedules.",
      },
      {
        label: "Calendar Integration",
        content:
          "Seamless integration with popular calendar platforms such as Google Calendar and Outlook, ensuring synchronized scheduling across devices.",
      },
      {
        label: "Personalization",
        content:
          "Customizable settings allow users to tailor scheduling preferences and prioritizations to their unique needs.",
      },
    ],
  },
  solutionSlides: [
    {
      tag: "INTELLIGENT SCHEDULING",
      title: "Intelligent Scheduling Engine",
      description:
        "AI algorithms analyze user preferences, availability, and priorities to generate optimized schedules.",
      screenType: "dashboard",
    },
    {
      tag: "CALENDAR INTEGRATION",
      title: "Universal Calendar Sync",
      description:
        "Seamless integration with popular calendar platforms such as Google Calendar and Outlook, ensuring synchronized scheduling across devices.",
      screenType: "calendar",
    },
    {
      tag: "PERSONALIZATION",
      title: "Tailored Focus Workflows",
      description:
        "Customizable settings allow users to tailor scheduling preferences and prioritizations to their unique needs.",
      screenType: "personalization",
    },
  ],
  results: {
    lead: "Here, the outcomes and achievements of the project are highlighted, including user feedback, adoption rates, and industry recognition.",
    items: [
      {
        label: "Increased Efficiency",
        content:
          "Users report significant time savings and improved productivity through automated scheduling recommendations.",
      },
      {
        label: "Positive User Feedback",
        content:
          "High user satisfaction ratings and positive reviews highlight the app's intuitive interface and powerful AI capabilities.",
      },
      {
        label: "Growing User Base",
        content:
          "The app quickly gained traction among individuals and businesses worldwide, with a steady increase in user adoption and engagement.",
      },
    ],
  },
};

export const caseStudies: Record<string, CaseStudyData> = {
  "ai-scheduling": defaultCaseStudy,
  "fintech-dashboard": {
    ...defaultCaseStudy,
    slug: "fintech-dashboard",
    eyebrow: "FINTECH & ANALYTICS",
    title: "Lumen Collective Analytics Platform",
    meta: {
      company: { name: "Lumen Collective", url: "https://lumencollective.example.com" },
      role: "Lead Product Designer",
      expertise: "Web & UX Design",
      year: "2024",
    },
  },
  "marketplace-mvp": {
    ...defaultCaseStudy,
    slug: "marketplace-mvp",
    eyebrow: "MARKETPLACE ECOSYSTEM",
    title: "Arc & Co. Next-Gen Mobile Experience",
    meta: {
      company: { name: "Arc & Co.", url: "https://arcandco.example.com" },
      role: "UX/UI Designer",
      expertise: "Mobile App Design",
      year: "2024",
    },
  },
  "b2b-onboarding": {
    ...defaultCaseStudy,
    slug: "b2b-onboarding",
    eyebrow: "BRANDING & ONBOARDING",
    title: "Northline Studio Digital Identity",
    meta: {
      company: { name: "Northline Studio", url: "https://northlinestudio.example.com" },
      role: "Brand & UX Lead",
      expertise: "Branding / Web",
      year: "2024",
    },
  },
  "uniqlearn": {
    ...defaultCaseStudy,
    slug: "uniqlearn",
    eyebrow: "EDTECH PLATFORM",
    title: "UniqLearn Adaptive Education Hub",
    meta: {
      company: { name: "UniqLearn", url: "https://uniqlearn.example.com" },
      role: "Senior UX Designer",
      expertise: "EdTech UX/UI",
      year: "2024",
    },
  },
  "integrative-dermatology": {
    ...defaultCaseStudy,
    slug: "integrative-dermatology",
    eyebrow: "HEALTHCARE & CLINICAL UX",
    title: "Integrative Dermatology Patient Portal",
    meta: {
      company: { name: "Integrative Dermatology", url: "https://integrativedermatology.example.com" },
      role: "UX Researcher & Designer",
      expertise: "Healthcare UI/UX",
      year: "2024",
    },
  },
  "learnbud-ai": {
    ...defaultCaseStudy,
    slug: "learnbud-ai",
    eyebrow: "AI ASSISTANT & BRANDING",
    title: "LearnBud AI Conversational Companion",
    meta: {
      company: { name: "LearnBud AI", url: "https://learnbudai.example.com" },
      role: "Product & Brand Designer",
      expertise: "AI Product Design",
      year: "2024",
    },
  },
};
