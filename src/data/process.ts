export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Research",
    description:
      "We talk to your users before we open a design tool — interviews, competitive analysis, and data to find where the real friction is.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and prototypes tested against real tasks, refined into a system that holds up as the product grows.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Production-grade frontend and backend, shipped in increments so you're reviewing working software, not slides.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Launch is the start — we track how the product performs and keep iterating on what moves the numbers that matter.",
  },
];
