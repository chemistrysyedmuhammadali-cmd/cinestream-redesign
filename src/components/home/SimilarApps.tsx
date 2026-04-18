import SectionHeading from "@/components/site/SectionHeading";

const apps = [
  { t: "Cinema HD", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-7.webp", d: "Popular streaming app with a deep catalog — but you'll see far more ads than on FreeCine." },
  { t: "Bee TV", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-8.webp", d: "Different content variety, but requires its own player like MX Player and updates can be problematic." },
  { t: "CyberFlix TV", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-9.webp", d: "Comparable to Cinema HD but with limited content and no big-screen casting support." },
];

export default function SimilarApps() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Apps similar to FreeCine"
        title={<>If you want to <span className="gradient-text">compare alternatives</span></>}
        description="FreeCine is great — but exploring alternatives is healthy. Here are the best-known options."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {apps.map((a) => (
          <article key={a.t} className="surface-card p-6 hover:border-primary/30 transition-all">
            <div className="h-16 w-16 rounded-xl bg-white/10 ring-1 ring-border grid place-items-center p-2 overflow-hidden">
              <img src={a.img} alt={a.t} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{a.t}</h3>
            <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{a.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
