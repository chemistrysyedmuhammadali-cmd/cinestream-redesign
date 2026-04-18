import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, FileText, Mail, Shield, Cookie, AlertTriangle, FileWarning, ScrollText, Info, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";

const pages = [
  { icon: Info, title: "About Us", desc: "Who we are, what we offer and why FreeCine exists.", to: "/about-us" },
  { icon: Mail, title: "Contact Us", desc: "Reach the team — feedback, support and partnerships.", to: "/contact-us" },
  { icon: Cookie, title: "Cookies Policy", desc: "How we use cookies to improve your experience.", to: "/cookies-policy" },
  { icon: AlertTriangle, title: "Disclaimer", desc: "Affiliations, third-party content and use at your own risk.", to: "/disclaimer" },
  { icon: FileWarning, title: "DMCA", desc: "Copyright takedown and counter-notice procedures.", to: "/dmca" },
  { icon: Shield, title: "Privacy Policy", desc: "What data we collect, how we use it, your rights.", to: "/privacy-policy" },
  { icon: ScrollText, title: "Terms And Condition", desc: "The rules for using FreeCine — read before you stream.", to: "/terms-and-condition" },
];

export default function LegalPages() {
  const [query, setQuery] = useState("");
  const filtered = pages.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80">
            <FileText className="h-3.5 w-3.5 text-primary" />
            Legal hub
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="gradient-text">Legal Pages</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/75">
            Everything related to using FreeCine — privacy, terms, copyright and more, all in one place.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search legal pages..."
                className="w-full h-13 pl-11 pr-4 py-3.5 rounded-full bg-surface-1 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group surface-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Read page <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">
              No pages match "{query}".
            </p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
