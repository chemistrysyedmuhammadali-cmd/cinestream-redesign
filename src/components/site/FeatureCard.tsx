interface Props {
  icon?: string;
  title: string;
  description: string;
  variant?: "dark" | "lilac";
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = "dark",
}: Props) {
  if (variant === "lilac") {
    return (
      <article className="surface-lilac-card p-6 group hover:-translate-y-1 transition-transform">
        {icon && (
          <div className="h-14 w-14 rounded-xl bg-white/70 grid place-items-center mb-4 ring-1 ring-black/5">
            <img src={icon} alt="" className="h-9 w-9 object-contain" loading="lazy" />
          </div>
        )}
        <h3 className="font-display text-lg font-bold text-surface-lilac-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-surface-lilac-foreground/80">
          {description}
        </p>
      </article>
    );
  }

  return (
    <article className="surface-card p-6 group hover:-translate-y-1 hover:border-primary/30 transition-all">
      {icon && (
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center mb-4 ring-1 ring-primary/30 group-hover:shadow-glow transition-shadow">
          <img src={icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
        {description}
      </p>
    </article>
  );
}
