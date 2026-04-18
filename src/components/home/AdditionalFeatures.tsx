import SectionHeading from "@/components/site/SectionHeading";

const additional = [
  {
    img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-10.webp",
    t: "No buffering, ever",
    d: "Stream shows, movies and cartoons without interruption. FreeCine PH MOD APK keeps the play button moving.",
  },
  {
    img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-11.webp",
    t: "Access all OTT content",
    d: "Get TV shows and kids' cartoons from leading OTT platforms — all from one app.",
  },
  {
    img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-12.webp",
    t: "Vast Anime Library",
    d: "FreeCine atualizado anime gives you a deep anime catalog — stream your favorites anywhere.",
  },
  {
    img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-13.webp",
    t: "Easy Screen Casting",
    d: "Push your stream to a TV in one tap. Big-screen movie nights, no setup needed.",
  },
  {
    img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-14.webp",
    t: "Parental controls",
    d: "Categories for parents and kids, plus content filters that make safe streaming effortless.",
  },
];

export default function AdditionalFeatures() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        align="center"
        eyebrow="Additional features"
        title={<>The extras that make <span className="gradient-text">FreeCine premium</span></>}
        description="FreeCine APK is packed with features that level up your streaming experience."
      />

      <div className="mt-14 space-y-5">
        {additional.map((f, i) => (
          <article
            key={f.t}
            className={`surface-card overflow-hidden grid md:grid-cols-12 gap-0 hover:border-primary/30 transition-all ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative h-full min-h-[200px] bg-gradient-to-br from-primary/10 to-accent/10 grid place-items-center p-8">
                <img
                  src={f.img}
                  alt={f.t}
                  className="max-h-32 object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7 p-7 md:p-9 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">
                Feature {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl font-bold">{f.t}</h3>
              <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                {f.d}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
