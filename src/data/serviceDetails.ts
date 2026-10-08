export type ServiceProcessStep = {
  step: string;
  iconName: "compass" | "strategy" | "design" | "delivery" | "code" | "mobile" | "chart";
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroImage: string;
  heroImageAlt: string;
  processSteps: ServiceProcessStep[];
  aboutTitle: string;
  aboutDescription: string;
  whatsIncludedTitle: string;
  whatsIncluded: string[];
  approachTitle: string;
  approachDescription: string;
  resultsTitle: string;
  resultsDescription: string;
  results: string[];
  midImage: string;
  midImageAlt: string;
  conclusionTitle: string;
  conclusionDescription: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle:
      "We craft intuitive interfaces, thoughtful user journeys, and impactful visual design systems that connect emotionally and drive business growth.",
    tags: ["UI/UX", "User Research", "Wireframing", "Design System"],
    heroImage: "/uxdesign.png",
    heroImageAlt: "UI UX Design visual preview",
    processSteps: [
      {
        step: "01",
        iconName: "compass",
        title: "Discovery & Research",
        description:
          "User interviews, competitor benchmarking, and journey mapping to uncover deep customer motivations.",
      },
      {
        step: "02",
        iconName: "strategy",
        title: "Strategy & Architecture",
        description:
          "Information architecture, wireframes, user flows, and product blueprints built for frictionless navigation.",
      },
      {
        step: "03",
        iconName: "design",
        title: "Design & Prototyping",
        description:
          "Pixel-perfect high-fidelity screens, interactive prototypes, and scalable design tokens in Figma.",
      },
      {
        step: "04",
        iconName: "delivery",
        title: "Review & Developer Handoff",
        description:
          "Comprehensive design documentation, design system specs, and smooth handoff for engineering teams.",
      },
    ],
    aboutTitle: "About The Service",
    aboutDescription:
      "Our UI/UX design service helps digital businesses create meaningful, friction-free experiences that delight users and accelerate conversion rates. We combine behavioral psychology, ergonomic design principles, and modern aesthetic standards to build product interfaces that look stunning and perform effortlessly.",
    whatsIncludedTitle: "What's Included",
    whatsIncluded: [
      "End-to-end user research, persona creation, and empathy mapping.",
      "Low-fidelity wireframes and structured interaction architectures.",
      "High-fidelity responsive UI layouts optimized for desktop, tablet, and mobile.",
      "Complete design system with reusable components, color palette, typography tokens, and spacing grids.",
      "Interactive micro-animations, transitions, and clickable prototypes.",
      "Figma production assets and developer-ready handoff documentation.",
    ],
    approachTitle: "Our Approach",
    approachDescription:
      "We approach design from the user's perspective, validating every assumption with real behavioral insights. Rather than relying on guesswork, we design iteratively with precision prototyping and accessibility standards (WCAG 2.1) in mind, ensuring your software is as practical as it is beautiful.",
    resultsTitle: "The Results",
    resultsDescription:
      "Our UI/UX solutions deliver measurable gains across adoption, user retention, and core conversion metrics, ensuring your product stands out in a crowded market.",
    results: [
      "Elevated user engagement and reduced onboarding friction.",
      "Significant boost in task completion speed and customer satisfaction scores.",
      "Seamless consistency across all platforms and digital touchpoints.",
      "Faster development velocity backed by modular, well-documented design systems.",
    ],
    midImage: "/project1.png",
    midImageAlt: "UI/UX Design showcase preview",
    conclusionTitle: "Conclusion",
    conclusionDescription:
      "Great UI/UX is the foundation of every successful digital product. Through our rigorous research, human-centric design, and scalable UI systems, we equip your brand with an experience that keeps users coming back.",
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    subtitle:
      "We build blazing-fast, scalable, and responsive web applications engineered for modern performance, reliability, and business impact.",
    tags: ["Full Stack", "Next.js", "TypeScript", "Performance"],
    heroImage: "/webdesign.png",
    heroImageAlt: "Web Development interface showcase",
    processSteps: [
      {
        step: "01",
        iconName: "compass",
        title: "Technical Discovery",
        description:
          "System requirements analysis, API specification, database schema modeling, and infrastructure planning.",
      },
      {
        step: "02",
        iconName: "strategy",
        title: "Architecture & Setup",
        description:
          "Setting up modular component architectures, CI/CD pipelines, and secure cloud environments.",
      },
      {
        step: "03",
        iconName: "code",
        title: "Development & Integration",
        description:
          "Clean, type-safe full-stack coding with React, Next.js, headless CMS, and robust API endpoints.",
      },
      {
        step: "04",
        iconName: "delivery",
        title: "Testing & Deployment",
        description:
          "End-to-end automated testing, speed optimization, SEO configuration, and zero-downtime production deployment.",
      },
    ],
    aboutTitle: "About The Service",
    aboutDescription:
      "Our web development services transform bold ideas into robust, secure, and lightning-fast digital products. From high-converting marketing websites to complex enterprise web apps, we build scalable software solutions that deliver seamless experiences across all browsers and devices.",
    whatsIncludedTitle: "What's Included",
    whatsIncluded: [
      "Full-stack web application development using Next.js, React, and TypeScript.",
      "Mobile-first responsive frontend with smooth animations and sub-second load times.",
      "Headless CMS integration (Sanity, Strapi, Contentful) for effortless content management.",
      "Custom REST and GraphQL API development and third-party integrations (Stripe, HubSpot, etc.).",
      "Core Web Vitals optimization, semantic HTML, and enterprise-grade SEO architecture.",
      "Comprehensive test suites, automated CI/CD workflows, and scalable cloud hosting setup.",
    ],
    approachTitle: "Our Approach",
    approachDescription:
      "We write clean, modular, and maintainable code built to scale alongside your company. We prioritize speed, security, and developer ergonomics, leveraging state-of-the-art tooling and performance benchmarks to ensure top-tier user experiences.",
    resultsTitle: "The Results",
    resultsDescription:
      "Our web development projects consistently achieve outstanding speed scores, high uptime, and accelerated conversion rates.",
    results: [
      "95+ Google Lighthouse scores across Performance, Accessibility, and SEO.",
      "Significant increase in organic search traffic and search engine rankings.",
      "Reliable, crash-resistant infrastructure handling high concurrent traffic.",
      "Intuitive content workflows empowering marketing teams without developer dependencies.",
    ],
    midImage: "/saaswebapp.png",
    midImageAlt: "Web application development dashboard",
    conclusionTitle: "Conclusion",
    conclusionDescription:
      "Whether launching a new platform or re-architecting legacy software, our web development expertise guarantees clean code, superior speed, and lasting architectural value for your business.",
  },

  "mobile-development": {
    slug: "mobile-development",
    title: "Mobile Development",
    subtitle:
      "We design and develop high-performance iOS and Android mobile apps featuring native smoothness, fluid animations, and robust offline capabilities.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    heroImage: "/mobiledevelopment.png",
    heroImageAlt: "Mobile App Development preview",
    processSteps: [
      {
        step: "01",
        iconName: "compass",
        title: "Product Scope & Flow",
        description:
          "Defining native app specifications, hardware integrations, user onboarding paths, and API contracts.",
      },
      {
        step: "02",
        iconName: "strategy",
        title: "Mobile UX & Architecture",
        description:
          "Designing touch-first interaction paradigms, state management architectures, and offline storage models.",
      },
      {
        step: "03",
        iconName: "mobile",
        title: "Native & Hybrid Build",
        description:
          "Developing native iOS/Android or cross-platform codebases with fluid 60fps micro-interactions.",
      },
      {
        step: "04",
        iconName: "delivery",
        title: "Store Launch & QA",
        description:
          "Rigorous multi-device testing, App Store and Google Play compliance review, and launch deployment.",
      },
    ],
    aboutTitle: "About The Service",
    aboutDescription:
      "Our mobile app development service delivers sleek, intuitive applications for iOS and Android that users love spending time on. We combine native device capabilities with modern cross-platform frameworks to launch stable, feature-rich apps quickly without compromising performance or aesthetics.",
    whatsIncludedTitle: "What's Included",
    whatsIncluded: [
      "Native iOS (Swift) and Android (Kotlin) or cross-platform (React Native / Flutter) development.",
      "Intuitive mobile UX with native gestures, haptic feedback, and custom micro-animations.",
      "Offline data synchronization, secure local storage, and background processing.",
      "Push notification systems, in-app messaging, and analytics telemetry.",
      "Biometric authentication (FaceID, TouchID) and secure payment gateway integrations (Apple Pay, Google Pay).",
      "Full App Store and Google Play Store submission and approval management.",
    ],
    approachTitle: "Our Approach",
    approachDescription:
      "We focus on performance, battery efficiency, and intuitive touch interactions. By rigorous testing on physical devices across multiple OS versions, we ensure our mobile applications provide exceptional stability and instant responsiveness under any network condition.",
    resultsTitle: "The Results",
    resultsDescription:
      "Our mobile apps deliver high user retention, 4.8+ app store ratings, and seamless cross-platform user experiences.",
    results: [
      "Ultra-smooth 60fps performance and instant screen transitions.",
      "High daily active user (DAU) retention and app store feature suitability.",
      "Zero crash rates backed by automated crash reporting and observability.",
      "Frictionless user onboarding driving immediate conversion and subscription uptake.",
    ],
    midImage: "/project2.png",
    midImageAlt: "Mobile application interface mockup",
    conclusionTitle: "Conclusion",
    conclusionDescription:
      "A great mobile app puts your brand directly into your customers' pockets. We help you build mobile experiences that feel effortless, engaging, and indispensable.",
  },

  "business-services": {
    slug: "business-services",
    title: "Business Services",
    subtitle:
      "We provide strategic digital consulting, brand positioning, technology modernization, and growth roadmaps that elevate modern enterprises.",
    tags: ["Strategy", "Consulting", "Branding", "Growth"],
    heroImage: "/businessservices.png",
    heroImageAlt: "Business Strategy and Consulting showcase",
    processSteps: [
      {
        step: "01",
        iconName: "compass",
        title: "Audit & Analysis",
        description:
          "Deep evaluation of your market position, operational bottlenecks, technology stack, and revenue channels.",
      },
      {
        step: "02",
        iconName: "strategy",
        title: "Growth Strategy",
        description:
          "Actionable roadmap development, go-to-market strategies, and value proposition alignment.",
      },
      {
        step: "03",
        iconName: "chart",
        title: "Execution & Optimization",
        description:
          "Implementing digital transformations, brand collateral, conversion funnels, and enterprise workflows.",
      },
      {
        step: "04",
        iconName: "delivery",
        title: "Measurement & Scale",
        description:
          "KPI tracking, continuous conversion rate optimization, team coaching, and long-term scaling advisory.",
      },
    ],
    aboutTitle: "About The Service",
    aboutDescription:
      "Our business services provide modern organizations with strategic clarity, high-impact branding, and technology roadmaps tailored for growth. We help startups and established companies identify lucrative market opportunities, modernize their digital infrastructure, and scale revenue profitably.",
    whatsIncludedTitle: "What's Included",
    whatsIncluded: [
      "Comprehensive digital strategy and product-market fit consulting.",
      "Brand identity development, messaging guidelines, and executive presentation decks.",
      "Technology stack audit, cost optimization, and vendor evaluation.",
      "Conversion rate optimization (CRO) and customer acquisition funnel blueprints.",
      "Enterprise workflow automation and CRM/ERP integrations.",
      "Executive advisory and recurring strategic planning workshops.",
    ],
    approachTitle: "Our Approach",
    approachDescription:
      "We work collaboratively as an extension of your leadership team. Combining deep analytical rigor with creative execution, we turn complex business challenges into clear, prioritized action steps that produce measurable ROI.",
    resultsTitle: "The Results",
    resultsDescription:
      "Our strategic consulting helps businesses unlock higher margins, accelerate product rollouts, and build defensible competitive advantages.",
    results: [
      "Clear, actionable digital roadmap aligned with core business objectives.",
      "Strengthened market visibility and premium brand positioning.",
      "Streamlined operations with lower software overhead and higher team efficiency.",
      "Measurable increase in customer lifetime value and revenue velocity.",
    ],
    midImage: "/learnbudai.png",
    midImageAlt: "Business consulting and brand identity preview",
    conclusionTitle: "Conclusion",
    conclusionDescription:
      "In a fast-moving digital economy, having the right strategy makes all the difference. We empower your business with the clarity, tools, and execution required to thrive and lead.",
  },
};

export const serviceSlugs = Object.keys(serviceDetails);