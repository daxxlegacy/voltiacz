import { Link } from "@tanstack/react-router";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display text-sm font-bold uppercase tracking-wider transition-all duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-gradient-primary text-primary-foreground hover:shadow-neon hover:-translate-y-0.5",
  outline: "border border-primary/60 text-foreground hover:bg-primary/10 hover:shadow-neon-sm hover:border-primary",
};

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export function NeonLink({
  href,
  external,
  variant = "primary",
  className = "",
  children,
  ...rest
}: BaseProps & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href" | "children">) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${variants[variant]} ${className}`} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function NeonButton({
  variant = "primary",
  className = "",
  children,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
