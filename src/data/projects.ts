export type PortfolioFilter = "all" | "web-design" | "ui-ux" | "branding";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  tags: Exclude<PortfolioFilter, "all">[];
  figmaUrl?: string;
  websiteUrl?: string;
  caseStudyUrl?: string;
};

export const portfolioFilters: { id: PortfolioFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "web-design", label: "Web Design" },
];

export const projects: Project[] = [
  {
    slug: "uniqlearn",
    title: "UniqLearn",
    category: "EdTech • Web Platform",
    summary: "Classroom workspace for teachers to track attendance, grades, and student progress.",
    image: "/projects/uniqlearn.png",
    alt: "UniqLearn classroom management dashboard on a laptop",
    tags: ["web-design", "ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/Lpl14RL2PjUJ4d0zj1JK78/Uniqlearn?page-id=0%3A1&node-id=348-517&starting-point-node-id=348%3A517&t=7zHOPtYFpnOM5oZv-1",
    caseStudyUrl: "/work/uniqlearn",
  },
  {
    slug: "kidloop",
    title: "KidLoop",
    category: "UI/UX",
    summary: "Marketplace app for families to buy and sell children's clothes.",
    image: "/projects/kidloop.png",
    alt: "KidLoop kids clothing marketplace app on three phones",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/cfryUDmCQEQcL1pC3XkgW5/KidLoop---Children-s-clothing?node-id=161-11666&viewport=-8893%2C216%2C0.46&t=sZai0b6E09Yf1weU-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A11084",
  },
  {
    slug: "learnbud-ai",
    title: "LearnBud AI",
    category: "UI/UX",
    summary: "Personal AI tutor for lessons, practice, and study plans on mobile.",
    image: "/projects/learnbudai.png",
    alt: "LearnBud AI tutoring app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/g2R0K4VjNGVWrtIBE1HfTm/Tutor-Note-AI--Final-?page-id=0%3A1&node-id=20-86106&viewport=-1241%2C799%2C0.18&t=15Il487dsvCaB3Qi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A86106",
    caseStudyUrl: "/work/learnbud-ai",
  },
  {
    slug: "dts-splint",
    title: "DTS Splint",
    category: "UI/UX",
    summary: "Dental CAD software that turns jaw scans into splint designs.",
    image: "/projects/dtssplint.png",
    alt: "DTS Splint dental design software interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/5dkeIJSt6cSiKwKuSHJjnu/Instant-Smiles-DTS-SPLINT?node-id=853-6703&viewport=104%2C56%2C0.05&t=T3WuTflTt1kTXHYB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    caseStudyUrl: "/work/dts-splint",
  },
  {
    slug: "trudentz",
    title: "Trudentz",
    category: "Web Design",
    summary: "Dental clinic website designed to explain care and make booking clear.",
    image: "/projects/trudentz.png",
    alt: "Trudentz dental clinic website on a laptop",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/BGFsjBvs58XcZ3K2GjrGSG/Trudentz?page-id=0%3A1&node-id=288-242&viewport=-23%2C293%2C0.07&t=tCYJABtzQnVGwQqq-1&scaling=min-zoom&content-scaling=fixed",
    websiteUrl: "https://trudentz.com/",
  },
  {
    slug: "vioc",
    title: "VIOC",
    category: "Web Design",
    summary: "Fertility and oncology care website with a calm, clinical layout.",
    image: "/projects/vioc.png",
    alt: "VIOC fertility and oncology care website design",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/LWlR78x72iTEdf07NugTlc/VIOC?node-id=129-276&viewport=-1400%2C280%2C0.05&t=W35dkL9huFtip9XE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    websiteUrl: "https://vioc.in/",
  },
  {
    slug: "youniverse-home-care",
    title: "Youniverse Home Care",
    category: "Web Design",
    summary: "Home care website for families looking for trusted in-home support.",
    image: "/projects/youniversehomecare.png",
    alt: "Youniverse Home Care website on a laptop",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/jRY59POwQdbsne6IiYD8Xq/Youniverse-Home-Care?page-id=0%3A1&node-id=303-1233&t=95gj1ofl2bGYnq5Y-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=303%3A1233&hide-ui=1",
    websiteUrl: "https://ynhc.com.au/",
  },
  {
    slug: "osm-care",
    title: "OSM Care",
    category: "Web Design",
    summary: "Autism services website for programs, care, and family support.",
    image: "/projects/osmcare.png",
    alt: "OSM Care autism services website on a laptop",
    tags: ["web-design"],
    websiteUrl: "https://osmcare.com.au/",
  },
  {
    slug: "cogentshift",
    title: "CogentShift",
    category: "Web Design",
    summary: "Consulting website built to explain services and start a conversation.",
    image: "/projects/cogentshift.png",
    alt: "CogentShift consulting website design",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/Lrp1hSDeAewZpTGx8YF9cM/Cogent-Shift?node-id=1974-15581&t=VkeDgrtaAHXPrnfk-1&scaling=min-zoom&content-scaling=fixed&page-id=175%3A2&starting-point-node-id=1974%3A15581",
    websiteUrl: "https://cogentshift.com/",
  },
  {
    slug: "yoga-blossom-with-ankita",
    title: "Yoga Blossom with Ankita",
    category: "Web Design",
    summary: "Yoga studio website for classes, practice, and bookings.",
    image: "/projects/yogablossomwithankita.png",
    alt: "Yoga Blossom with Ankita yoga studio website",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/eRDH1Lqv8bJe8VEhwgJtxP/Yoga-Blossom-with-Ankita?page-id=0%3A1&node-id=139-32&t=XAe7ZO0R1TJPEq8q-0&scaling=min-zoom&content-scaling=fixed&hide-ui=1",
    websiteUrl: "https://ybwithankita.com/",
  },
  {
    slug: "bridal-hampers",
    title: "Bridal Hampers",
    category: "Web Design",
    summary: "Gift shop website for bridal hampers and celebration sets.",
    image: "/projects/bridalhampers.png",
    alt: "Bridal Hampers gift shop website design",
    tags: ["web-design"],
    websiteUrl: "https://bridalhampers.com/",
  },
  {
    slug: "integrative-dermatology",
    title: "Integrative Dermatology", 
    category: "Web Design",
    summary: "Clinic website for medical and aesthetic skin care, with booking up front.",
    image: "/projects/integrativedermatology.png",
    alt: "Integrative Dermatology clinic website on desktop and mobile",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/QCOAQX1eFi13NUGxoJERwV/INTEGRATIVE-DERMATOLOGY?page-id=0%3A1&node-id=1003-418&viewport=-12070%2C-2050%2C0.26&t=nb4HHeETsdKbCV0a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1003%3A418",
    websiteUrl: "https://integrativedermatology.co/",
    caseStudyUrl: "/work/integrative-dermatology",
  },
  {
    slug: "parvati-jewels",
    title: "Parvati Jewels",
    category: "Web Design",
    summary: "Jewelry store website for rings, earrings, diamonds, and new arrivals.",
    image: "/projects/parvati.png",
    alt: "Parvati Jewels jewelry ecommerce website on a laptop",
    tags: ["web-design"],
    figmaUrl:
      "https://www.figma.com/proto/7iz09eEvdHcXc9MEwsLc9e/Parvati-Jewels?node-id=45-342&viewport=730%2C583%2C0.07&t=KlLgOnrUKa7cupqd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=45%3A342&page-id=0%3A1",
  },
  {
    slug: "holidayy",
    title: "Holidayy",
    category: "UI/UX",
    summary: "Hotel booking app for searching stays and planning trips.",
    image: "/projects/holidayy.png",
    alt: "Holidayy hotel booking app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/SQyDNOwEGSsLybt5KCvWFJ/Holidayyy?node-id=73-5373&viewport=2888%2C-127%2C0.11&t=F79dOylaYdpQVLqh-1&scaling=min-zoom&content-scaling=fixed&page-id=7%3A2",
  },
  {
    slug: "cinema",
    title: "Cinema",
    category: "UI/UX",
    summary: "Creator marketplace for cinema and UGC campaigns.",
    image: "/projects/cinema.png",
    alt: "Cinema UGC creator marketplace web and mobile UI",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/EifV7kNQbv4yXqNSvDJpEV/Cinema?node-id=1-11334&viewport=345%2C-100%2C0.11&t=TLzGdghsn5KaUMpb-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2",
  },
  {
    slug: "instant-smile",
    title: "Instant Smile",
    category: "UI/UX",
    summary: "Dental app for smile previews, visits, and treatment steps.",
    image: "/projects/instantsmile.png",
    alt: "Instant Smile dental app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/CVSfIxEK6FSOXhTWJiei12/Instant-Smiles?page-id=57%3A53&node-id=76-20226&t=ODlS4EAzhAlHf2Dw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A20226&hide-ui=1",
  },
  {
    slug: "overc360",
    title: "Overc 360",
    category: "UI/UX",
    summary: "Product interface for tracking work across a 360 view.",
    image: "/projects/overc360.png",
    alt: "Overc 360 product interface design",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/IBvh7eeE4MAtz3UpIdc160/Overc360-Dashboard?page-id=1975%3A6155&node-id=2058-11317&node-type=frame&t=oABNfGP1dcegxGZf-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2058%3A11317",
  },
  {
    slug: "workista",
    title: "Workista",
    category: "UI/UX",
    summary: "Work management app for tasks, teams, and daily planning.",
    image: "/projects/workista.png",
    alt: "Workista work management app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/oc2IcbgfPd55Q6yntMc2vE/Workiesta?node-id=246-782&viewport=-636%2C375%2C0.1&t=47TSd1laYFSNu8hl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    slug: "tripify",
    title: "Tripify",
    category: "UI/UX",
    summary: "Travel app for planning trips, places, and bookings.",
    image: "/projects/tripify.png",
    alt: "Tripify travel planning app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/1wygtUNAenN8u8TunpHJM1/Tripify?page-id=0%3A1&node-id=494-1666&t=aYOl99vj4MwvRfNA-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=494%3A1666&hide-ui=1",
  },
  {
    slug: "benchmark-monitoring",
    title: "Benchmark Monitoring",
    category: "UI/UX",
    summary: "Monitoring dashboard for tracking benchmarks and performance.",
    image: "/projects/benchmarkmonitoring.png",
    alt: "Benchmark Monitoring dashboard interface",
    tags: ["ui-ux"],
    figmaUrl:"https://www.figma.com/proto/3IlTSRoQYMCQxuwpZ4lZQv/Kaboom-Remote?page-id=262%3A3684&node-id=328-4889&node-type=frame&t=EvdBgym6YzyseABn-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=328%3A4889"
  },
  {
    slug: "zaroorihai",
    title: "Zaroori Hai",
    category: "UI/UX",
    summary: "Home services app for booking cleaning, repair, and maintenance.",
    image: "/projects/zaroorihai.png",
    alt: "Zaroorihai home services booking app on a phone",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/QlgkeF3UoeMUsFcYp87KzP/Zaroori-hai?node-id=939-9639&viewport=340%2C-655%2C0.23&t=CW91OjQZUjDGb0mX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    slug: "linkshub",
    title: "LinksHub",
    category: "UI/UX",
    summary: "Link hub for collecting social profiles and important pages in one place.",
    image: "/projects/linkshub.png",
    alt: "LinksHub link-in-bio app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/nsNA5A1YayATuKbkIa9MHB/Linkshub?page-id=0%3A1&node-id=449-263&t=OsujW0nj9ZjHYLWt-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=449%3A263&hide-ui=1",
  },
  {
    slug: "anypost",
    title: "AnyPost",
    category: "UI/UX",
    summary: "Social posting app for writing, scheduling, and publishing content.",
    image: "/projects/anypost.png",
    alt: "AnyPost social publishing app interface",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/m3zUOUQ45XNcTSlOyUdnNN/Anypost_Job-Portal?node-id=108-346&viewport=-117%2C-1312%2C0.14&t=z1WEwx1q57tSL7uL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=26%3A770&page-id=0%3A1",
  },
  {
    slug: "edusama",
    title: "EduSama",
    category: "Web Design",
    summary: "Education app for students to track assignments, quizzes, and grades.",
    image: "/projects/edusama.png",
    alt: "EduSama education app interface",
    tags: ["web-design"],
  },
  {
    slug: "itours",
    title: "iTours",
    category: "Web Design",
    summary: "Tourism app for exploring destinations, booking tours, and managing bookings.",
    image: "/projects/itours.png",
    alt: "iTours tourism app interface",
    tags: ["web-design"],
  },
  {
    slug: "nestlyhomedecoration",
    title: "Nestly Home Decoration",  
    category: "Web Design",
    summary: "Home decoration store website for furniture, home decor, and interior design.",
    image: "/projects/nestlyhomedecoration.png",
    alt: "Nestly Home Decoration home decoration store website",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/6YBkp7icmTR4m2TyFDJG8d/NESTLY-Home-Decoration-e-Commerce?node-id=106-487&viewport=48%2C225%2C0.07&t=oWxQOCy6UqLnNo6o-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    slug: "fitsolewebsite",
    title: "FitSole",  
    category: "Web Design",
    summary: "Shoe store website for fitness shoes, running shoes, and basketball shoes.",
    image: "/projects/fitsolewebsite.png",
    alt: "FitSole shoe store website",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/PblRGy0s0NUSJc9fHYdC70/Fitsole-E-Commerce-website?page-id=0%3A1&node-id=23-105&viewport=190%2C305%2C0.06&t=7DU22pZ041appb3N-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    slug: "duxtonwatch",
    title: "Duxton Watch",  
    category: "UI/UX",
    summary: "Watch store website for luxury watches, high-end watches, and classic watches.",
    image: "/projects/duxtonwatch.png",
    alt: "Duxton Watch watch store website",
    tags: ["ui-ux"],
    figmaUrl:
      "https://www.figma.com/proto/pNyHdHFbdxltuyxP0LsukR/DUXTON-Watch-E-Commerce-Website?node-id=5-4&viewport=215%2C235%2C0.08&t=DzwYhSHE2NGNgY7B-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];