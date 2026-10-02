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

export type CaseStudyItem = {
  slug: string;
  cardCategory: string;
  cardTitle: string;
  logoType: "orion" | "meridian" | "apex" | "brightpath" | "skyline" | "wifter";
  image?: string;
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

export type CaseStudyData = CaseStudyItem;

export const caseStudiesList: CaseStudyItem[] = [
  {
    slug: "orion-ventures",
    cardCategory: "VENTURE CAPITAL • ENTERPRISE",
    cardTitle: "How Orion Ventures unified 14 portfolio companies.",
    logoType: "orion",
    image: "/businessservices.png",
    eyebrow: "VENTURE CAPITAL & PORTFOLIO GOVERNANCE",
    title: "Unified Multi-Entity Portfolio Operating System",
    meta: {
      company: {
        name: "Orion Ventures",
        url: "https://orionventures.example.com",
      },
      role: "Lead Product Strategist & UX Lead",
      expertise: "Enterprise UX & Systems Architecture",
      year: "2024",
    },
    heroScreens: ["dashboard", "schedule", "calendar"],
    projectDescription: {
      lead: "Orion Ventures managed 14 high-growth portfolio companies with fragmented financial and operational reporting. We designed an executive command center unifying data streams in real time.",
      items: [
        {
          label: "Timeline",
          content: "10-week end-to-end design & design system sprint.",
        },
        {
          label: "Background",
          content: "Managing 14 separate seed and Series-A companies previously required manual monthly CSV consolidation. Our unified platform delivers automated burn-rate tracking, KPI dashboards, and governance approvals in a single unified interface.",
        },
      ],
    },
    process: {
      lead: "We conducted in-depth stakeholder interviews with general partners, founders, and finance leads across 6 cities to identify reporting bottlenecks.",
      items: [
        {
          label: "Discovery & Research",
          content: "Audited financial workflows, identifying over 45 hours lost weekly in fragmented spreadsheet communication.",
        },
        {
          label: "Information Architecture",
          content: "Constructed a multi-tenant role-based data hierarchy with instant portfolio roll-up views.",
        },
        {
          label: "High-Fidelity Prototyping",
          content: "Built interactive prototypes tested directly with C-level operators and venture partners.",
        },
        {
          label: "Design System & Handoff",
          content: "Created a comprehensive enterprise component library with dark-mode analytics widgets.",
        },
      ],
    },
    solution: {
      lead: "An intelligent, multi-entity portfolio OS providing instant cross-company benchmarking, automated KPI alerts, and secure governance workflows.",
      items: [
        {
          label: "Consolidated Metrics",
          content: "Automated ARR, runway, and headcount visualizations updated in real-time.",
        },
        {
          label: "Board Deck Automation",
          content: "One-click export of quarterly performance summaries formatted for LP presentations.",
        },
        {
          label: "Role-Based Access",
          content: "Granular permissions ensuring each founder sees only their metrics while partners view the full portfolio.",
        },
      ],
    },
    solutionSlides: [
      {
        tag: "PORTFOLIO OVERVIEW",
        title: "Real-Time Fund Health",
        description: "Aggregate cash runway, net burn, and headcount metrics across all 14 active investments.",
        screenType: "dashboard",
      },
      {
        tag: "BOARD GOVERNANCE",
        title: "Automated Reporting",
        description: "Scheduled data ingestion from QuickBooks, Stripe, and HR platforms with anomaly detection.",
        screenType: "calendar",
      },
      {
        tag: "LP BENCHMARKING",
        title: "Executive Summaries",
        description: "Comparative cohort analysis highlighting top performers and capital efficiency vectors.",
        screenType: "personalization",
      },
    ],
    results: {
      lead: "Delivered dramatic operational time savings, eliminating reporting lag and establishing institutional clarity.",
      items: [
        {
          label: "Time Saved",
          content: "Saved 80+ monthly partner hours previously spent on manual reporting reconciliations.",
        },
        {
          label: "Founder Adoption",
          content: "100% adoption across all 14 portfolio leadership teams within 30 days of launch.",
        },
        {
          label: "Decision Speed",
          content: "Reduced follow-on investment review cycles from 3 weeks to under 48 hours.",
        },
      ],
    },
  },
  {
    slug: "meridian-health",
    cardCategory: "HEALTHCARE • GROWTH",
    cardTitle: "How Meridian Health eliminated policy violations.",
    logoType: "meridian",
    image: "/integrative-dermatology.png",
    eyebrow: "CLINICAL UX & REGULATORY COMPLIANCE",
    title: "Zero-Defect Protocol & Compliance Tracking Suite",
    meta: {
      company: {
        name: "Meridian Healthcare",
        url: "https://meridianhealth.example.com",
      },
      role: "Senior UX Researcher & Healthcare Designer",
      expertise: "Healthcare UI/UX & Clinical Workflows",
      year: "2024",
    },
    heroScreens: ["schedule", "dashboard", "calendar"],
    projectDescription: {
      lead: "Meridian Health operates 42 clinical centers. We designed a frictionless protocol management system that turned convoluted compliance guidelines into actionable clinical workflows.",
      items: [
        {
          label: "Timeline",
          content: "12 weeks from discovery, contextual inquiries, to final design system delivery.",
        },
        {
          label: "Background",
          content: "Shifting regulatory mandates caused accidental compliance oversights during busy shifts. The new mobile-first platform provides nurses and clinicians with real-time checklist verification and shift handoff protocols.",
        },
      ],
    },
    process: {
      lead: "Conducted on-site ethnographic shadowing in hospital emergency and inpatient units to understand real-world cognitive load under pressure.",
      items: [
        {
          label: "Clinical Shadowing",
          content: "Identified high-stress friction points where protocol steps were historically missed or delayed.",
        },
        {
          label: "Simplified Interaction Design",
          content: "Designed high-contrast, one-tap validation UI usable while wearing medical gloves.",
        },
        {
          label: "Shift Handoff Matrix",
          content: "Engineered seamless peer-to-peer verification protocols that ensure continuity of care.",
        },
        {
          label: "HIPAA & ADA Auditing",
          content: "Ensured 100% compliance with strict accessibility and healthcare data security protocols.",
        },
      ],
    },
    solution: {
      lead: "A human-centered clinical companion app that guides healthcare staff with smart contextual prompts and automated audit trails.",
      items: [
        {
          label: "Smart Checklists",
          content: "Dynamic shift checklists that automatically adjust based on patient acuity and procedure requirements.",
        },
        {
          label: "Real-Time Alerts",
          content: "Urgent protocol reminders delivered precisely when shift transitions occur.",
        },
        {
          label: "Automated Audit Trail",
          content: "Eliminated paper records with cryptographically signed, timestamped digital compliance logs.",
        },
      ],
    },
    solutionSlides: [
      {
        tag: "CLINICAL PROTOCOLS",
        title: "Contextual Guidance",
        description: "Zero-latency patient checklist verification designed specifically for fast-paced clinical workflows.",
        screenType: "dashboard",
      },
      {
        tag: "SHIFT HANDOFF",
        title: "Continuous Verification",
        description: "Synchronized digital handoff notes ensuring vital care instructions are never overlooked.",
        screenType: "schedule",
      },
      {
        tag: "AUDIT READINESS",
        title: "Live Compliance Dashboard",
        description: "Executive and nursing supervisor views showing real-time unit adherence scores.",
        screenType: "calendar",
      },
    ],
    results: {
      lead: "Meridian achieved an unprecedented zero-violation safety record across all participating hospital wings.",
      items: [
        {
          label: "Policy Violations",
          content: "Reduced clinical protocol violations by 98.4% across 42 regional healthcare facilities.",
        },
        {
          label: "Nurse Satisfaction",
          content: "94% positive rating from nursing staff citing drastic reductions in administrative stress.",
        },
        {
          label: "Audit Preparation",
          content: "Joint Commission regulatory audit prep time decreased from 2 weeks to 15 minutes.",
        },
      ],
    },
  },
  {
    slug: "apex-digital",
    cardCategory: "DIGITAL AGENCY • MID-MARKET",
    cardTitle: "How Apex Digital gained control of project spend.",
    logoType: "apex",
    image: "/project3.png",
    eyebrow: "FINANCIAL SAAS & RESOURCE OPTIMIZATION",
    title: "Predictive Resource Allocation & Margin Controller",
    meta: {
      company: {
        name: "Apex Digital",
        url: "https://apexdigital.example.com",
      },
      role: "Design Lead & SaaS UX Strategist",
      expertise: "FinTech & Professional Services UX",
      year: "2024",
    },
    heroScreens: ["dashboard", "calendar", "schedule"],
    projectDescription: {
      lead: "Apex Digital needed to eliminate unexpected project margin erosion by giving project directors real-time visibility into burn rates, billable hours, and freelance cost forecasts.",
      items: [
        {
          label: "Timeline",
          content: "8-week agile design sprint from requirements mapping to high-fidelity clickable prototype.",
        },
        {
          label: "Background",
          content: "Projects routinely suffered 15-20% budget overruns due to delayed timesheet submissions and unexpected scope creep. We engineered an intelligent budget forecasting and alerting interface.",
        },
      ],
    },
    process: {
      lead: "Mapped the entire agency billing lifecycle, from proposal estimation to client invoicing and contractor disbursement.",
      items: [
        {
          label: "Spend Journey Mapping",
          content: "Identified blind spots between planned project timelines and actual logged contractor hours.",
        },
        {
          label: "Predictive Budget Visualizations",
          content: "Created color-coded trajectory graphs showing projected final margins weeks before milestones.",
        },
        {
          label: "Micro-Interaction Design",
          content: "Crafted frictionless 5-second time logging for engineers and designers.",
        },
        {
          label: "Multi-Currency Architecture",
          content: "Supported global offshore teams with automated live currency conversions and tax handling.",
        },
      ],
    },
    solution: {
      lead: "A crystal-clear financial telemetry dashboard empowering project managers to spot and resolve budget creep in real-time.",
      items: [
        {
          label: "Early Warning Radar",
          content: "Automated notifications when project pace exceeds 80% of budget prior to milestone delivery.",
        },
        {
          label: "Capacity Heatmaps",
          content: "Visual scheduling grid balancing team utilization and preventing employee burnout.",
        },
        {
          label: "Instant Invoicing",
          content: "Direct one-click sync with Stripe and Xero for automated milestone milestone billing.",
        },
      ],
    },
    solutionSlides: [
      {
        tag: "BUDGET TELEMETRY",
        title: "Margin Prediction Engine",
        description: "Visual trajectory modeling forecasting client profitability and staffing efficiency in real time.",
        screenType: "dashboard",
      },
      {
        tag: "RESOURCE PLANNING",
        title: "Team Capacity Grid",
        description: "Drag-and-drop consultant assignment preventing under-utilization and overtime overages.",
        screenType: "calendar",
      },
      {
        tag: "CLIENT TRANSPARENCY",
        title: "Shared Milestone Portals",
        description: "Client-facing budget trackers establishing trust and eliminating billing disputes.",
        screenType: "personalization",
      },
    ],
    results: {
      lead: "Apex restored healthy 38% net profit margins across all client enterprise engagements.",
      items: [
        {
          label: "Margin Improvement",
          content: "Average project gross margin increased by 22% within two operating quarters.",
        },
        {
          label: "Overrun Prevention",
          content: "Budget overruns plummeted from 24% of all active projects to zero.",
        },
        {
          label: "Client Retention",
          content: "Achieved a 96% client contract renewal rate backed by billing clarity.",
        },
      ],
    },
  },
  {
    slug: "brightpath",
    cardCategory: "BUSINESS CONSULTING • MID-MARKET",
    cardTitle: "How BrightPath streamlined approvals & compliance",
    logoType: "brightpath",
    image: "/deliver.png",
    eyebrow: "WORKFLOW AUTOMATION & ENTERPRISE DESIGN",
    title: "Frictionless Multi-Tier Approval & Contract Engine",
    meta: {
      company: {
        name: "BrightPath Consulting",
        url: "https://brightpath.example.com",
      },
      role: "Product Designer & UX Architect",
      expertise: "Enterprise Workflow & LegalTech Design",
      year: "2024",
    },
    heroScreens: ["schedule", "dashboard", "calendar"],
    projectDescription: {
      lead: "BrightPath Consulting suffered from multi-week deal sign-off delays. We designed an automated approval orchestration platform that turns red tape into a 1-click experience.",
      items: [
        {
          label: "Timeline",
          content: "9 weeks from research to production-ready design tokens and prototype.",
        },
        {
          label: "Background",
          content: "Cross-border consulting engagements required compliance, legal, and risk sign-offs across 4 executive tiers. We streamlined the pipeline with smart conditional routing and mobile approval cards.",
        },
      ],
    },
    process: {
      lead: "Analyzed 120 historic approval trails to pinpoint legal bottlenecks and review redundancies.",
      items: [
        {
          label: "Workflow Decomposition",
          content: "Consolidated 18 disconnected email steps into a unified parallel review pipeline.",
        },
        {
          label: "Mobile-First Decision Cards",
          content: "Designed condensed briefing cards allowing executives to approve contracts from their phones in seconds.",
        },
        {
          label: "Audit-Grade Versioning",
          content: "Built visual diff viewers highlighting clause modifications across contract drafts.",
        },
      ],
    },
    solution: {
      lead: "A streamlined orchestration engine connecting legal, finance, and client teams with frictionless approvals.",
      items: [
        {
          label: "Smart Parallel Routing",
          content: "Simultaneous stakeholder reviews eliminating serial waiting queues.",
        },
        {
          label: "Executive Summary Cards",
          content: "AI-generated summaries of key commercial terms, liability caps, and risk flags.",
        },
        {
          label: "Instant DocuSign Integration",
          content: "Automated signature dispatch once internal compliance conditions are verified.",
        },
      ],
    },
    solutionSlides: [
      {
        tag: "APPROVAL PIPELINE",
        title: "Parallel Routing Engine",
        description: "Multi-tier commercial reviews orchestrated with automated fallback escalations.",
        screenType: "dashboard",
      },
      {
        tag: "EXECUTIVE BRIEFING",
        title: "AI Term Summarizer",
        description: "Extracting critical commercial terms so executives approve with complete confidence.",
        screenType: "schedule",
      },
      {
        tag: "COMPLIANCE LOGS",
        title: "Full Audit Readiness",
        description: "Immutable digital signature verification logs ready for instant compliance review.",
        screenType: "personalization",
      },
    ],
    results: {
      lead: "BrightPath accelerated contract execution speed by over 74% with flawless audit compliance.",
      items: [
        {
          label: "Turnaround Time",
          content: "Contract approval cycle dropped from an average of 14 days to just 3.2 days.",
        },
        {
          label: "Review Bottlenecks",
          content: "Eliminated 100% of lost approval emails and administrative stalled deals.",
        },
        {
          label: "Revenue Acceleration",
          content: "Helped close \$18M in consulting engagements ahead of quarterly forecast deadlines.",
        },
      ],
    },
  },
  {
    slug: "skyline-labs",
    cardCategory: "B2B SAAS • ENTERPRISE",
    cardTitle: "How Fuse helped Skyline Labs close in 11 hrs",
    logoType: "skyline",
    image: "/saaswebapp.png",
    eyebrow: "B2B SALES VELOCITY & PRODUCT-LED GROWTH",
    title: "Interactive Sandbox & Deal Acceleration Platform",
    meta: {
      company: {
        name: "Skyline Tech Labs",
        url: "https://skylinetechlabs.example.com",
      },
      role: "Lead UX Designer & Growth Strategist",
      expertise: "Product-Led Growth & B2B SaaS UX",
      year: "2024",
    },
    heroScreens: ["dashboard", "schedule", "calendar"],
    projectDescription: {
      lead: "Skyline Tech Labs had revolutionary enterprise software, but prospective buyers struggled to understand the technical architecture. We built personalized interactive sandbox demos that close enterprise deals in hours.",
      items: [
        {
          label: "Timeline",
          content: "8 weeks from user interviews to interactive sandbox experience deployment.",
        },
        {
          label: "Background",
          content: "Enterprise sales previously stalled in 30-day proof-of-concept setups. Our instant-sandbox design allowed technical decision-makers to test live product features with pre-populated dummy data immediately.",
        },
      ],
    },
    process: {
      lead: "Interviewed 25 VP-level buyers to discover what specific technical validations unlock budget approvals.",
      items: [
        {
          label: "Sandbox Experience Design",
          content: "Architected a zero-setup sandbox environment pre-configured with realistic enterprise datasets.",
        },
        {
          label: "Value Demonstration Flows",
          content: "Guided buyers through their top 3 critical use cases within 4 minutes of landing in the demo.",
        },
        {
          label: "Collaborative Deal Rooms",
          content: "Shared decision-maker portals with custom pricing calculators and security whitepapers.",
        },
      ],
    },
    solution: {
      lead: "An interactive deal portal that lets enterprise buyers experience the software's full power without sales friction.",
      items: [
        {
          label: "Instant Live Sandbox",
          content: "Zero-installation test environments ready in under 10 seconds.",
        },
        {
          label: "Interactive ROI Calculator",
          content: "Custom cost-savings model configured for buyer company headcount and infrastructure.",
        },
        {
          label: "Automated Security Packet",
          content: "Instant SOC2, GDPR, and ISO27001 self-serve security verification for IT gatekeepers.",
        },
      ],
    },
    solutionSlides: [
      {
        tag: "DEAL ACCELERATION",
        title: "Live Product Sandbox",
        description: "Zero-friction technical evaluation pre-loaded with high-value enterprise testing scenarios.",
        screenType: "dashboard",
      },
      {
        tag: "SECURITY CLEARANCE",
        title: "One-Click Compliance",
        description: "Instant self-serve security certifications satisfying enterprise IT vetting in minutes.",
        screenType: "schedule",
      },
      {
        tag: "VALUE VALIDATION",
        title: "Dynamic ROI Modeling",
        description: "Real-time cost savings projections mapped directly to prospect business metrics.",
        screenType: "personalization",
      },
    ],
    results: {
      lead: "Skyline achieved industry-leading sales velocity, closing multiple 6-figure enterprise deals in under 11 hours.",
      items: [
        {
          label: "Sales Cycle",
          content: "Shortened average sales cycle from 28 days to a record-breaking 11 hours.",
        },
        {
          label: "Deal Conversion",
          content: "Demo-to-contract conversion rate increased from 18% to 64%.",
        },
        {
          label: "ARR Growth",
          content: "Generated \$4.2M in net-new annual recurring revenue within the first 90 days.",
        },
      ],
    },
  },
  {
    slug: "ai-scheduling",
    cardCategory: "AI-POWERED SCHEDULING • CONSUMER & B2B",
    cardTitle: "World's first AI-powered scheduling app",
    logoType: "wifter",
    image: "/project2.png",
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
          content: "From initial discovery to final designs in 8 weeks, while working with multiple projects at the same time.",
        },
        {
          label: "Background",
          content: "With average artificial intelligence optimize your daily schedule, ensuring maximum productivity and work-life balance. The app seamlessly integrates with your existing calendar and task management tools, using advanced algorithms to prioritize tasks, suggest optimal times for meetings, and provide smart reminders.",
        },
      ],
    },
    process: {
      lead: "This category details the step-by-step approach taken during the project, including research, planning, design, development, testing, and optimization phases.",
      items: [
        {
          label: "Research & Planning",
          content: "Conducted market research to identify existing scheduling challenges and user preferences. Defined target audience segments and analyzed key factors that affect smooth user interactions.",
        },
        {
          label: "Design & Prototyping",
          content: "Collaborated with design teams to create intuitive interfaces and interactive prototypes. Iteratively refined designs based on early feedback to ensure usability and visual appeal.",
        },
        {
          label: "Development & Implementation",
          content: "Leveraged agile development methodologies to build the scheduling app from the ground up. Prioritized feature development based on user feedback and technical feasibility. Implemented AI algorithms to analyze user behavior and optimize scheduling recommendations.",
        },
        {
          label: "Testing & Optimization",
          content: "Conducted rigorous testing across various devices and platforms to ensure compatibility and performance. Gathered user feedback through beta testing and iteratively refined the app based on usability metrics and user satisfaction.",
        },
      ],
    },
    solution: {
      lead: "The resulting AI-powered scheduling app offers a seamless user experience, allowing individuals and businesses to effortlessly manage their schedules.",
      items: [
        {
          label: "Intelligent Scheduling",
          content: "AI algorithms analyze user preferences, availability, and priorities to generate optimized schedules.",
        },
        {
          label: "Calendar Integration",
          content: "Seamless integration with popular calendar platforms such as Google Calendar and Outlook, ensuring synchronized scheduling across devices.",
        },
        {
          label: "Personalization",
          content: "Customizable settings allow users to tailor scheduling preferences and prioritizations to their unique needs.",
        },
      ],
    },
    solutionSlides: [
      {
        tag: "INTELLIGENT SCHEDULING",
        title: "Intelligent Scheduling Engine",
        description: "AI algorithms analyze user preferences, availability, and priorities to generate optimized schedules.",
        screenType: "dashboard",
      },
      {
        tag: "CALENDAR INTEGRATION",
        title: "Universal Calendar Sync",
        description: "Seamless integration with popular calendar platforms such as Google Calendar and Outlook, ensuring synchronized scheduling across devices.",
        screenType: "calendar",
      },
      {
        tag: "PERSONALIZATION",
        title: "Tailored Focus Workflows",
        description: "Customizable settings allow users to tailor scheduling preferences and prioritizations to their unique needs.",
        screenType: "personalization",
      },
    ],
    results: {
      lead: "Here, the outcomes and achievements of the project are highlighted, including user feedback, adoption rates, and industry recognition.",
      items: [
        {
          label: "Increased Efficiency",
          content: "Users report significant time savings and improved productivity through automated scheduling recommendations.",
        },
        {
          label: "Positive User Feedback",
          content: "High user satisfaction ratings and positive reviews highlight the app's intuitive interface and powerful AI capabilities.",
        },
        {
          label: "Growing User Base",
          content: "The app quickly gained traction among individuals and businesses worldwide, with a steady increase in user adoption and engagement.",
        },
      ],
    },
  },
];

export const defaultCaseStudy: CaseStudyData = caseStudiesList[5];

export const caseStudies: Record<string, CaseStudyData> = caseStudiesList.reduce(
  (acc, study) => {
    acc[study.slug] = study;
    return acc;
  },
  {} as Record<string, CaseStudyData>,
);
