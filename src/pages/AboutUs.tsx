import SiteLayout from "@/components/layout/SiteLayout";
import { CheckCircle2, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const offers = [
  "Curated APKs for movies, shows, anime and more",
  "Fast, one-click downloads — no registration needed",
  "Safe, tested and regularly updated files",
  "Easy-to-follow guides and tutorials",
];

const why = [
  { icon: ShieldCheck, t: "No fake buttons or annoying ads", d: "Your time matters. Clean pages, real downloads, zero deception." },
  { icon: Sparkles, t: "No hidden paywalls", d: "Everything we publish is free — what you see is what you get." },
  { icon: Zap, t: "Just clean links and honest reviews", d: "Helpful content, made for people who actually use these apps." },
];

export default function AboutUs() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px]" />
        <div className="relative container py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              About FreeCine
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Welcome to <span className="gradient-text">FreeCine APKs</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Your trusted source for discovering and downloading top entertainment APKs from around the world. We believe entertainment should be <strong className="text-foreground">free, simple and accessible to everyone</strong> — whether you want to stream movies, binge TV shows or explore new video platforms, we make it easy to find and download the best apps without sign-ups or hassle.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold">What we offer</h2>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Our mission is to give users <strong className="text-foreground">open, secure and smooth access</strong> to entertainment apps — without pop-ups, locked content or confusion.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-4">
              {offers.map((o) => (
                <li key={o} className="surface-card p-5 flex gap-3 items-start hover:border-primary/30 transition-all">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center max-w-2xl mx-auto">
          Why choose <span className="gradient-text">FreeCine?</span>
        </h2>
        <p className="mt-4 text-center text-foreground/70 max-w-xl mx-auto">
          We value transparency, speed and simplicity. Here's what that looks like in practice.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {why.map((w) => (
            <article key={w.t} className="surface-card p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{w.t}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{w.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 surface-card p-10 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold">Join our community</h3>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Thousands of users discover and use new entertainment apps every day with FreeCine — the easy way.
          </p>
          <Link to="/" className="mt-6 inline-flex h-12 px-6 items-center rounded-full bg-gradient-cta font-semibold text-primary-foreground shadow-cta hover:shadow-glow transition-all">
            Explore the app
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
