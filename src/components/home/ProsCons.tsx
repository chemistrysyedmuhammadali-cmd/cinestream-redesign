import SectionHeading from "@/components/site/SectionHeading";
import { Check, X } from "lucide-react";

const pros = [
  { t: "Free Access", d: "FreeCine is free with no subscription charges. Use every streaming feature and category." },
  { t: "New Content", d: "Fresh data uploaded daily and updated regularly — the catalog never gets stale." },
  { t: "Compatibility", d: "Works on iPhone, Android, smart TV, TV box, MacBook, tablet and computer at the same time." },
  { t: "Download option", d: "Save your favorite content and enjoy it offline whenever you want." },
  { t: "Multiple Categories", d: "Crime, romance, comedy, action, thriller, fantasy, sci-fi — pick your mood." },
  { t: "Content for children", d: "A separate section for kids with animated videos the whole family can enjoy." },
  { t: "International Content", d: "Brazilian, Hindi, Turkish, Spanish and more — watch in your language." },
  { t: "User-friendly interface", d: "Built around real users — clean, intuitive and easy to navigate." },
  { t: "High-quality streaming", d: "Stream in true high quality — a feature many free apps lack." },
  { t: "No registration", d: "No personal data, no signup — just open and watch." },
];

const cons = [
  { t: "VPN may be needed", d: "If the app is restricted in your country, a VPN sorts it out." },
  { t: "Occasional pop-ups", d: "It's free, so a rare pop-up may appear outside of streaming." },
  { t: "Fast internet recommended", d: "Smooth streaming needs a steady connection — or just download for offline." },
  { t: "iOS limitation", d: "Designed for Android first — iPhone/iPad use a third-party install." },
  { t: "Permission requests", d: "After install, FreeCine may ask access to photos and videos." },
];

export default function ProsCons() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Advantages & Disadvantages"
        title={<>The honest <span className="gradient-text">pros and cons</span></>}
        description="Here's the full picture of FreeCine MOD APK 2024 — both sides."
      />

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        <div className="surface-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-primary/15 ring-1 ring-primary/30 grid place-items-center text-primary">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold">Advantages</h3>
          </div>
          <ul className="space-y-3.5">
            {pros.map((p) => (
              <li key={p.t} className="flex gap-3">
                <span className="mt-1 shrink-0 h-5 w-5 rounded-full bg-primary/20 grid place-items-center">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-foreground/65 leading-relaxed">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-orange/15 ring-1 ring-orange/30 grid place-items-center text-orange">
              <X className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold">Disadvantages</h3>
          </div>
          <ul className="space-y-3.5">
            {cons.map((p) => (
              <li key={p.t} className="flex gap-3">
                <span className="mt-1 shrink-0 h-5 w-5 rounded-full bg-orange/20 grid place-items-center">
                  <X className="h-3 w-3 text-orange" />
                </span>
                <div>
                  <div className="font-semibold">{p.t}</div>
                  <div className="text-sm text-foreground/65 leading-relaxed">{p.d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
