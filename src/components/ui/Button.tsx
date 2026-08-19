import { cn } from "@/components/lib/cn";
import Link from "next/link";

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    primary: "bg-primary text-background hover:opacity-90",
    ghost: "border border-border text-foreground hover:border-primary hover:text-primary",
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
