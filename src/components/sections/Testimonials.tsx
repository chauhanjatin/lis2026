import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials, type Testimonial } from "@/data/testimonials";

const testimonialPlaceholders: Testimonial[] = [
  { quote: "Your client testimonial will appear here.", name: "Client name", role: "Company / role" },
  { quote: "Add a short quote that explains the result you delivered.", name: "Client name", role: "Company / role" },
  { quote: "Show the experience of working together in your client’s own words.", name: "Client name", role: "Company / role" },
  { quote: "Use this space for a project outcome or a memorable collaboration detail.", name: "Client name", role: "Company / role" },
  { quote: "Replace these cards with approved testimonials when they are ready.", name: "Client name", role: "Company / role" },
];

export function Testimonials() {
  const cards = testimonials.length > 0 ? testimonials.slice(0, 5) : testimonialPlaceholders;

  return (
    <>
      {/* ============ TESTIMONIALS — START ============ */}
      <Section id="testimonials">
        <Eyebrow>What clients say</Eyebrow>
        <Heading size="lg" className="max-w-2xl">
          Social proof.
        </Heading>
        <p className="mt-5 max-w-xl text-muted">
          A few words from the people we have had the pleasure of working with.
        </p>
        <div className="testimonial-deck mt-12" tabIndex={0}>
          {cards.map((t, index) => (
            <blockquote key={`${t.name}-${index}`} className="testimonial-deck-card">
              <span className="testimonial-deck-quote" aria-hidden="true">&ldquo;</span>
              <p>{t.quote}</p>
              <footer>
                <span />
                <strong>{t.name}</strong>
                <small>{t.role}</small>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>
      {/* ============ TESTIMONIALS — END ============ */}
    </>
  );
}