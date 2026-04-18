import SectionHeading from "@/components/site/SectionHeading";

const movies = [
  { t: "Sinful", img: "https://freecineapks.net/wp-content/uploads/2025/10/Sinful.webp", d: "Twin brothers leave their troubled lives behind only to find that evil has been waiting for their return." },
  { t: "Weapons", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-16.webp", d: "When all but one child in a class disappears at the same time, a community questions the mystery." },
  { t: "Superman", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-17.webp", d: "An alien Kryptonian raised on Earth confronts a world that sees truth and justice as old-fashioned." },
  { t: "Colleagues", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-18.webp", d: "A friendly weekend descends into chaos when one guest turns out to be hiding the truth." },
  { t: "Companion", img: "https://freecineapks.net/wp-content/uploads/2025/10/Companion.webp", d: "A weekend trip with friends spirals into chaos as guests reveal who they really are." },
  { t: "Mickey 17", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-20.webp", d: "On a human expedition into space, an employee is sent to explore an unforgiving ice planet." },
  { t: "The Needle Girl", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-21.webp", d: "Unemployed and pregnant, a woman meets Dagmar and uncovers the truth behind her work." },
  { t: "None 2", img: "https://freecineapks.net/wp-content/uploads/2025/10/None-2.webp", d: "A former assassin's home is attacked, triggering events that pull him back into his past." },
  { t: "28 Years Later", img: "https://freecineapks.net/wp-content/uploads/2025/10/28.webp", d: "A small island group survives the virus — but one of them carries an unknowable secret." },
  { t: "Black Phone 2", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-12-1.webp", d: "A girl's life unravels when her sister starts receiving phone calls in her dreams." },
];

export default function PopularMovies() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        align="center"
        eyebrow="Popular on FreeCine 2025"
        title={<>The <span className="gradient-text">most-watched titles</span> right now</>}
        description="Ten of the most popular films streamed through FreeCine 2025 mod apk."
      />

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.map((m) => (
          <article
            key={m.t}
            className="group relative overflow-hidden rounded-2xl bg-surface-1 border border-border hover:border-primary/40 transition-all"
          >
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={m.img}
                alt={m.t}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="font-display text-base font-bold text-foreground">{m.t}</h3>
              <p className="mt-1 text-[11px] leading-snug text-foreground/70 line-clamp-3">
                {m.d}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
