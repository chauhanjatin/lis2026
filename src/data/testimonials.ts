export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  avatar: string;
};

export type RatingSummary = {
  rating: string;
  scale: string;
  stars: number;
  avatarStack: string[];
  countBadge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
};

export type TestimonialMetric = {
  value: string;
  label: string;
  brand: string;
  icon: string;
};

export const ratingSummary: RatingSummary = {
  rating: "4.9",
  scale: "/5",
  stars: 5,
  avatarStack: [
    "/clientiamge/clientiamge1.webp",
    "/clientiamge/clientiamge2.webp",
    "/clientiamge/clientiamge3.webp",
    "/clientiamge/clientiamge4.webp",
  ],
  countBadge: "+82",
  title: "Clients worldwide",
  subtitle: "who love our service",
  buttonText: "Leave a review",
  buttonHref: "/contact",
};

export const testimonialMetrics: TestimonialMetric[] = [
  {
    value: "29%",
    label: "Faster Project Delivery",
    brand: "Acme Corp",
    icon: "✦",
  },
  {
    value: "43%",
    label: "Lower Overhead Costs",
    brand: "Luminous",
    icon: "彡",
  },
];

export const testimonials: Testimonial[] = [
  // Column 1
  {
    id: "alva-design",
    quote:
      "Jatin was great at communication and delivered on time. Will most definitely work with him again!",
    name: "ALVA Design Studio",
    company: "Canada",
    avatar: "/clientiamge/clientiamge1.webp",
  },
  {
    id: "shailendra-singh",
    quote:
      "Jatin is a great designer! Proficient in Figma and great at understanding what we needed. He designs quickly and is an excellent communicator. Look forward to working with him in the future.",
    name: "Shailendra Singh",
    company: "India",
    avatar: "/clientiamge/clientiamge2.webp",
  },

  // Column 2
  {
    id: "haris-beha",
    quote:
      "Excellent designer. Knows exactly what he's doing and has a keen eye for making things look better.",
    name: "Haris Beha",
    company: "USA",
    avatar: "/clientiamge/clientiamge3.webp",
  },
  {
    id: "vipul-sharma",
    quote:
      "Jatin communicated clearly throughout the engagement, was receptive to requests and feedback, delivered quality work, and was accommodating to changes. Overall, a very satisfying experience.",
    name: "Vipul Sharma",
    company: "India",
    avatar: "/clientiamge/clientiamge4.webp",
  },
  {
    id: "andrija-bosnjak",
    quote:
      "Let me tell you what kind of freelancer Jatin is. He's the type of a freelancer to work overtime on your project even tho he's got few more to work on. Jatin is the type of freelancer who makes me want to make more projects just so I could hire him again. I came to upwork expecting to fight windmills but instead I met Jatin. If you're here looking for a good freelancer, then look no further.",
    name: "Andrija Bosnjak",
    company: "Croatia",
    avatar: "/clientiamge/clientiamge5.webp",
  },

  // Column 3
  {
    id: "aidan-mcdowell",
    quote:
      "Great to work with, adjusts well based on feedback, delivers on time, and super high quality of work!",
    name: "Aidan McDowell",
    company: "",
    avatar: "/clientiamge/clientiamge6.webp",
  },
  {
    id: "ravi-manwani",
    quote:
      "Jatin is one of the most creative, talented and easy to work with UX Designer I have worked with. He is not only good with UI but thinks about the business problem when suggesting designs. For our project, we were not sure about few screens and asked Jatin for suggestions. I'll strongly recommend Jatin for any UI/UX related work. We'll surely work again with him if the need comes.",
    name: "Ravi Manwani",
    company: "USA",
    avatar: "/clientiamge/clientiamge1.webp",
  },
  {
    id: "dev-monnappa",
    quote:
      "Jatin and his team understood the requirement and were happy to accommodate changes quickly. I was happy with the turnaround and the UI they designed.",
    name: "Dev Monnappa",
    company: "New Zealand",
    avatar: "/clientiamge/clientiamge2.webp",
  },

  // Column 4
  {
    id: "nikhil-toy",
    quote:
      "Excellent work done.. He gave his valuable inputs at every step and worked day in and out to meet the deadlines.. Also the work done by him is exceptional in low cost.. Great Job Jatin..!!",
    name: "Nikhil Toy",
    company: "India",
    avatar: "/clientiamge/clientiamge3.webp",
  },
  {
    id: "able-joseph",
    quote:
      "Jatin delivered clean UI designs and was easy to work with throughout. He understood requirements quickly, iterated fast, and maintained good communication.",
    name: "Able Joseph",
    company: "",
    avatar: "/clientiamge/clientiamge4.webp",
  },
];