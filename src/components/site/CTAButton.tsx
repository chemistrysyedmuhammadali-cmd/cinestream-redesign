import { ArrowDownToLine } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  href?: string;
  children?: ReactNode;
  size?: "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  href = "https://file.freecineapks.cc/FreeCine-V3.0.4_freecineapks.cc.apk",
  children = "Download FreeCine APK",
  size = "lg",
  variant = "primary",
  className = "",
}: Props) {
  const sizing =
    size === "lg" ? "h-14 px-8 text-base" : "h-11 px-5 text-sm";

  if (variant === "outline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 backdrop-blur ${sizing} font-semibold text-foreground hover:border-primary/60 hover:bg-primary/10 transition-all ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-cta ${sizing} font-semibold text-primary-foreground shadow-cta hover:shadow-glow transition-all hover:-translate-y-0.5 ${className}`}
    >
      <ArrowDownToLine className="h-5 w-5" />
      <span>{children}</span>
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
