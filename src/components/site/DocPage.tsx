import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SiteLayout from "../layout/SiteLayout";

interface Props {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  effectiveDate?: string;
}

export default function DocPage({ title, intro, children, effectiveDate }: Props) {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.25),transparent_60%)]" />
        <div className="relative container py-16 md:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/legal-pages" className="hover:text-primary">Legal</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground/80">{title}</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">{title}</span>
          </h1>
          {effectiveDate && (
            <p className="mt-3 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>
          )}
          {intro && (
            <p className="mt-6 max-w-3xl text-base md:text-lg text-foreground/75 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </section>

      <section className="container py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8 doc-prose">{children}</article>
          <aside className="lg:col-span-4">
            <div className="surface-card p-6 sticky top-24">
              <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground/60 mb-4">
                Legal Pages
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  ["About Us", "/about-us"],
                  ["Contact Us", "/contact-us"],
                  ["Privacy Policy", "/privacy-policy"],
                  ["Terms And Condition", "/terms-and-condition"],
                  ["DMCA", "/dmca"],
                  ["Disclaimer", "/disclaimer"],
                  ["Cookies Policy", "/cookies-policy"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      to={href}
                      className="flex items-center justify-between py-1.5 text-foreground/75 hover:text-primary group"
                    >
                      <span>{label}</span>
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
