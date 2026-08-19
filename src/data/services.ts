export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces grounded in real user research, not guesswork — wireframes, prototypes, and design systems built to convert.",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Fast, accessible, pixel-accurate builds in modern frameworks — from your design files to production code.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "SEO, content, and growth strategy tuned to how people actually find and evaluate your product.",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "APIs, databases, and infrastructure built to scale with your product from day one, not bolted on later.",
  },
];
