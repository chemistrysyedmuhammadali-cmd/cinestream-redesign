import SectionHeading from "@/components/site/SectionHeading";

const platforms = [
  { name: "Brazil TV", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-13-1.webp", d: "Made for Portuguese speakers — popular Brazilian shows including O Mecanismo and No Coração." },
  { name: "Netflix", img: "https://freecineapks.net/wp-content/uploads/2025/10/netflix.png", d: "All the popular Netflix titles — Breaking Bad, Money Heist and more, without the subscription." },
  { name: "Amazon Prime", img: "https://freecineapks.net/wp-content/uploads/2025/10/Amazon-Prime-Video.png", d: "Top Prime movies and shows — My Fault, Malik, Housefull and Upgraded." },
  { name: "HBO Max", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-20-1.webp", d: "All the HBO hits — Max, Reality, Sinner and Peacemaker, ready to stream." },
  { name: "Disney+", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-22.webp", d: "Andor, Ironheart, Ms. Marvel, The Mandalorian, Born Again and more." },
  { name: "GloboPlay", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-23.webp", d: "Hidden Truths 2, Perfect Days, Hebe, Justiça 2, Guerreiros do Sol and Aruanas." },
  { name: "Crunchyroll BR", img: "https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-webp-maker-24.webp", d: "Trending anime — 11eyes, A Sign of Affection, Eden of the East and more." },
];

export default function WorldwideEntertainment() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        align="center"
        eyebrow="A world of entertainment"
        title={<>One app, <span className="gradient-text">every major platform</span></>}
        description="In FreeCine you'll find content from the platforms that matter most — curated and ready to stream."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {platforms.map((p) => (
          <article
            key={p.name}
            className="surface-card p-6 flex gap-4 items-start hover:border-primary/30 transition-all"
          >
            <div className="shrink-0 h-14 w-14 rounded-xl bg-white/10 ring-1 ring-border grid place-items-center p-2 overflow-hidden">
              <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-foreground/70 leading-snug">{p.d}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-5">
        <div className="surface-card p-6">
          <h3 className="font-display text-xl font-bold">Web series available on FreeCine</h3>
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
            FreeCine is the streaming app that delivers unlimited entertainment — international and regional web series in every language, added daily.
          </p>
          <h4 className="mt-5 font-display text-base font-semibold">Types of web series available</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Sci-Fi","Drama","Horror","Thriller","Reality","Comedy","Romance","Animated","Anthology","Mini Series","Documentary"].map((c) => (
              <span key={c} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 border border-primary/30 text-primary">{c}</span>
            ))}
          </div>
        </div>
        <div className="surface-lilac-card p-6">
          <h3 className="font-display text-xl font-bold">Formats & resolutions</h3>
          <p className="mt-2 text-sm leading-relaxed text-surface-lilac-foreground/85">
            <strong>Audio/video formats:</strong> MP4, MP3 & M4A.<br />
            <strong>Video resolutions:</strong> 144p, 240p, 360p, 480p, 720p, 1080p, 2K, 4K and 8K.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-surface-lilac-foreground/85">
            Adjust on the fly to match your connection — from low-bandwidth on the move to full 8K on the big screen at home.
          </p>
        </div>
      </div>
    </section>
  );
}
