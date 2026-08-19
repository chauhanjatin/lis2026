export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Intentionally empty — per design-studio-site-guide.md §12, the
// Testimonials section should only ship once real client quotes exist.
// Do not fill this with placeholder/fabricated testimonials.
export const testimonials: Testimonial[] = [];
