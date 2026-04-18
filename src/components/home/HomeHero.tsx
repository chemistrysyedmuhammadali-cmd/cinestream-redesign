import { CheckCircle2, Sparkles, Zap, ShieldCheck } from "lucide-react";
import CTAButton from "@/components/site/CTAButton";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[url('https://freecineapks.net/wp-content/uploads/2026/03/ezgif.com-resize-3-2-1.webp')] bg-no-repeat bg-right-top opacity-[0.04] mix-blend-luminosity" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px]" />
      <div className="absolute -top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-pink/20 blur-[100px]" />

      <div className="relative container pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Latest version v3.0.3 · Free for 2026
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              FreeCine APK Download <br className="hidden md:block" />
              Latest <span className="gradient-text">v3.0.3</span> — Free <br className="hidden md:block" />
              Android App <span className="gradient-text">2026</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
              Tired of subscription fees and endless ads? FreeCine APK is the
              easier, faster, premium way to stream movies, TV shows, anime
              and live channels in stunning 4K — completely free. Built for
              Android, PC and iOS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton>Download FreeCine APK</CTAButton>
              <CTAButton variant="outline" href="#features">
                Explore Features
              </CTAButton>
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-3 max-w-xl">
              {[
                { icon: ShieldCheck, text: "100% safe & virus-free" },
                { icon: Zap, text: "4K streaming, no buffering" },
                { icon: CheckCircle2, text: "No subscription required" },
                { icon: Sparkles, text: "Ad-free experience" },
              ].map((b) => (
                <li
                  key={b.text}
                  className="flex items-center gap-2.5 text-sm text-foreground/85"
                >
                  <span className="h-7 w-7 rounded-md grid place-items-center bg-primary/15 text-primary ring-1 ring-primary/25">
                    <b.icon className="h-3.5 w-3.5" />
                  </span>
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 bg-gradient-cta opacity-30 blur-3xl rounded-[3rem]" />
              <div className="relative surface-card p-3 shadow-card">
                <img
                  src="https://freecineapks.net/wp-content/uploads/2025/09/ezgif.com-resize-20.webp"
                  alt="FreeCine APK preview"
                  className="w-full h-auto rounded-xl ring-1 ring-border"
                  loading="eager"
                />
                <div className="absolute -bottom-5 -right-5 surface-card bg-card/95 px-4 py-3 flex items-center gap-3 shadow-card">
                  <div className="h-10 w-10 rounded-full bg-gradient-cta grid place-items-center text-primary-foreground font-bold">
                    4K
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">Ultra HD streaming</div>
                    <div className="text-muted-foreground">Up to 8K resolution</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["10M+", "Downloads"],
                  ["4.8★", "User rating"],
                  ["25 MB", "App size"],
                ].map(([v, l]) => (
                  <div key={l} className="surface-card p-3 text-center">
                    <div className="font-display text-lg font-bold gradient-text">{v}</div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
