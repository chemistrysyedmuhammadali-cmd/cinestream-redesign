import SectionHeading from "@/components/site/SectionHeading";
import { Link } from "react-router-dom";
import { Tv2, Monitor, Smartphone, ArrowRight } from "lucide-react";

const platforms = [
  {
    icon: Tv2,
    title: "FreeCine 2024 — TV Box",
    desc: "TV Box and Android TV versions are not available right now, but the team is working on releasing them soon.",
    cta: null,
  },
  {
    icon: Monitor,
    title: "FreeCine for PC",
    desc: "Stream movies, web series, Turkish dramas and live TV on PC in different languages and high resolution. Download via emulator from our site.",
    cta: { label: "Get FreeCine for PC", to: "/freecine-for-pc" },
  },
  {
    icon: Smartphone,
    title: "FreeCine for iPhone",
    desc: "FreeCine works on iPhone and iPad through a trusted third-party app. Get the full streaming library on iOS.",
    cta: { label: "Get FreeCine for iOS", to: "/freecine-ios" },
  },
];

export default function Platforms() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Available Everywhere"
        title={<>FreeCine on <span className="gradient-text">every screen you own</span></>}
        description="Built for Android, PC, iPhone, iPad and smart TVs via emulator — your library follows you."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {platforms.map((p) => (
          <article
            key={p.title}
            className="group surface-card p-6 flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30 mb-4">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">
              {p.desc}
            </p>
            {p.cta && (
              <Link
                to={p.cta.to}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                {p.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
