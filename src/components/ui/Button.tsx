import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "border border-border text-foreground hover:bg-surface",
  };

  const cls = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
