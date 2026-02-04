import Link from "next/link";
import { ReactNode } from "react";

interface Buttonprops {
  children: ReactNode;
  variant?: "primary" | "secundary";
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: Buttonprops) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 rounded-full font-bold transition-all duration-300 transform active:scale-95";
  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1",
    secundary:
      "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
  };
  const classeFinal = `${baseStyles} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classeFinal}>
        {children}
      </Link>
    );
  }
  return <button className={classeFinal}>{children}</button>;
}
