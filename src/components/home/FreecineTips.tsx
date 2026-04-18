import SectionHeading from "@/components/site/SectionHeading";
import { Lock, ListMusic, RefreshCw, Search, Download, Home, Smartphone, Settings2, Bell, LayoutGrid } from "lucide-react";

const tips = [
  { i: Lock, t: "Data Controls", d: "Block inappropriate content for younger viewers — kids get a separate section with cartoons and more." },
  { i: ListMusic, t: "Create playlist", d: "Save anything you want to watch later. Open your playlist anytime to keep going." },
  { i: RefreshCw, t: "Regular update", d: "FreeCine refreshes the catalog regularly so users always get something new." },
  { i: Search, t: "Search function", d: "Type the title in the search bar — results appear in seconds." },
  { i: Download, t: "Offline viewing", d: "Download your content first and watch it offline anytime." },
  { i: Home, t: "Use the homepage", d: "All the new movies, web series and TV shows surface on the main screen." },
  { i: Smartphone, t: "Use multiple devices", d: "Smart TVs, smartphones, tablets — and PCs and Android TVs through emulators." },
  { i: Settings2, t: "Adjust quality", d: "Set 1440p, 1080p, 720p — or auto — to match your connection." },
  { i: Bell, t: "Enable notifications", d: "Get instant updates on the content you actually care about." },
  { i: LayoutGrid, t: "Explore categories", d: "Stream dramas, cartoons, TV shows or web series across many categories." },
];

export default function FreecineTips() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="FreeCine apps · Tips"
        title={<>Get more from <span className="gradient-text">every stream</span></>}
        description="Small tips, big upgrades — get the most out of FreeCine in seconds."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {tips.map((t) => (
          <article key={t.t} className="surface-card p-5 hover:border-primary/30 transition-all">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30">
              <t.i className="h-4 w-4" />
            </div>
            <h3 className="mt-4 font-display font-bold">{t.t}</h3>
            <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{t.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
