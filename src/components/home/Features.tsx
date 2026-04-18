import SectionHeading from "@/components/site/SectionHeading";
import {
  Tv, FileVideo, Radio, Sparkles, Download, RefreshCw,
  LayoutGrid, Search, Brush, Ban, Shield, Gauge,
  Languages, Feather, Smartphone, Cast, Share2,
} from "lucide-react";

const features = [
  { icon: Tv, t: "Top TV Series", d: "New and old TV shows on demand. Notifications keep you up to date — search any genre from crime to romance." },
  { icon: FileVideo, t: "Watch Documentaries", d: "Dive into history, science and future inventions through engaging documentaries." },
  { icon: Radio, t: "Live Shows", d: "Catch live shows from anywhere — region-locked or not, hassle-free and at no cost." },
  { icon: Gauge, t: "High-quality streaming", d: "From HD up to 1080p with adjustable quality. Works on PC, tablet and Android." },
  { icon: Download, t: "Offline content", d: "Download your favorite shows or series and watch them anytime, no internet required." },
  { icon: RefreshCw, t: "Regular updates", d: "Devs update the app and the catalog so the streaming experience stays fresh." },
  { icon: LayoutGrid, t: "Easy navigation", d: "A clean, intuitive menu designed around what users actually need." },
  { icon: Search, t: "Quick Search", d: "Type a title and the lightning-fast server returns immediate results." },
  { icon: Brush, t: "Simple App Design", d: "A lightweight, easy-to-use interface that keeps getting better." },
  { icon: Ban, t: "No subscription fees", d: "Watch everything for free — no monthly bills, no paywalls, no friction." },
  { icon: Shield, t: "Ad-free streaming", d: "All ads blocked so nothing interrupts your favorite scene." },
  { icon: Sparkles, t: "Fast streaming", d: "Faster than other streaming apps — minimal loading and buffering." },
  { icon: Languages, t: "Multiple languages", d: "English, Filipino, Brazilian, Hindi and more — watch in your own language." },
  { icon: Feather, t: "Lightweight install", d: "Tiny footprint built for low-storage devices — install in seconds." },
  { icon: Smartphone, t: "Multi-device", d: "Run on iPhone, Android, tablet, MacBook and Windows PC." },
  { icon: Cast, t: "Cast to TV", d: "Bring the cinema home — cast to your TV for the full big-screen experience." },
  { icon: Share2, t: "Easy sharing", d: "Tap details, copy the link, share via WhatsApp or any social platform." },
];

export default function Features() {
  return (
    <section id="features" className="container py-20 md:py-28">
      <SectionHeading
        align="center"
        eyebrow="Como Baixar Freecine — Features"
        title={<>Everything you need from a <span className="gradient-text">premium streaming app</span></>}
        description="With FreeCine APK you don't need to look anywhere else. Here's what makes it different."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => {
          const lilac = i % 7 === 3;
          return (
            <article
              key={f.t}
              className={`group p-6 rounded-2xl transition-all hover:-translate-y-1 ${
                lilac
                  ? "surface-lilac-card"
                  : "surface-card hover:border-primary/30"
              }`}
            >
              <div
                className={`h-12 w-12 rounded-xl grid place-items-center mb-4 ${
                  lilac
                    ? "bg-white/60 text-surface-lilac-foreground"
                    : "bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/30"
                }`}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3
                className={`font-display text-lg font-bold ${
                  lilac ? "text-surface-lilac-foreground" : ""
                }`}
              >
                {f.t}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  lilac ? "text-surface-lilac-foreground/80" : "text-foreground/70"
                }`}
              >
                {f.d}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
