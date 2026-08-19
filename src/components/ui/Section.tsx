import { cn } from "@/components/lib/cn";
import { Container } from "./Container";

export function Section({
  id,
  className,
  children,
  divider = true,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32 lg:py-40", divider && "border-t border-border", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}