import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import CTAButton from "@/components/site/CTAButton";
import AppInfoCard from "@/components/site/AppInfoCard";
import FAQ from "@/components/site/FAQ";
import { Smartphone, Zap, Library, Gauge, Layout, Gift, Download, Languages, Apple, ShieldCheck, Ban, Cast, RefreshCw, Globe2, Sparkles, Subtitles, Newspaper, Check, X } from "lucide-react";

const features = [
  { i: Zap, t: "Speed and compatibility", d: "Fast hardware and software pairing keeps lag away — even when you're binging a long series." },
  { i: Library, t: "Content library", d: "Both new and historical content — TV shows, movies, web series, cartoons and dramas, plus Netflix and Disney." },
  { i: Gauge, t: "High-quality streaming", d: "Even on slow internet, FreeCine on iOS streams in high quality — choose from 4K to 1080p." },
  { i: Layout, t: "Easy-to-use interface", d: "Optimized performance with a search bar that makes finding content effortless." },
  { i: Gift, t: "Free app", d: "FreeCine on iPhone is free — watch Netflix and Prime-style content without paying." },
  { i: Download, t: "Offline availability", d: "Download your favorites and watch offline anytime, with daily catalog updates." },
  { i: Languages, t: "Multi-language support", d: "English, Japanese, Brazilian, Arabic, Urdu, Hindi, Turkish and more — all with subtitles." },
  { i: Apple, t: "Optimized for iOS", d: "Works perfectly on every iPhone model, old or new." },
  { i: ShieldCheck, t: "Safe and secure", d: "Private, secure and virus-free. No subscription or credit card needed." },
  { i: Ban, t: "No ads", d: "Stream movies, dramas and cartoons without ads getting in the way." },
  { i: Cast, t: "Cast to TV", d: "AirDrop and casting let you share your stream to a bigger screen instantly." },
  { i: RefreshCw, t: "Regular updates", d: "Daily updates so you always have something new to watch." },
  { i: Sparkles, t: "No subscription fees", d: "Completely free for all users — unlike most apps." },
  { i: Globe2, t: "Multilingual support", d: "Watch in your own language so you never miss the magic." },
  { i: Newspaper, t: "Entertainment", d: "Web series, movies, TV shows, cartoons and news — all on your iPhone." },
  { i: Subtitles, t: "Integrated subtitles", d: "Love the content but not the language? Subtitles have you covered." },
];

const faqs = [
  { q: "Is FreeCine APK iOS free?", a: "Absolutely. Anyone can use it — no subscription fees." },
  { q: "Is FreeCine APK safe for iOS?", a: "Yes. The app doesn't ask for personal data, so you can use it safely." },
  { q: "How can I update the FreeCine app for iOS?", a: "FreeCine isn't on the App Store, so it won't auto-update. Whenever a new version is released, download and install it from our website." },
  { q: "Does FreeCine have ads on iOS?", a: "Very few — and they don't interrupt streaming." },
];

const pros = ["Free access","Free streaming","User-friendly interface","High-quality streaming","Massive content library","No advertisements"];
const cons = ["Occasional ads","Third-party install","Manual updates","Legal concerns","Limited availability","Not on the Apple App Store"];

export default function FreecineIOS() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-pink/30 blur-[120px]" />
        <div className="relative container pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80">
                <Smartphone className="h-3.5 w-3.5 text-primary" />
                FreeCine for iOS · 2026 · v3.0.3
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                FreeCine iOS App <br />Download <span className="gradient-text">2026 · v3.0.3</span>
              </h1>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                If you're an iPhone or iPad user who wants to stream movies and TV shows online, FreeCine streams on iOS without interruption. The full library is here — no subscriptions, just download and stream.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton>Download FreeCine for iOS</CTAButton>
                <CTAButton variant="outline" href="#install">View install steps</CTAButton>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-6 bg-gradient-cta opacity-25 blur-3xl rounded-[3rem]" />
              <div className="relative surface-card p-3 shadow-card">
                <img
                  src="https://freecineapks.net/wp-content/uploads/2026/03/ezgif.com-resize-3-2-1.webp"
                  alt="FreeCine for iOS"
                  className="w-full rounded-xl ring-1 ring-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="What is FreeCine iOS"
              title={<>iOS streaming, <span className="gradient-text">redefined</span></>}
              description="FreeCine iOS gives you a vast library of high-quality entertainment in a single app — for free. Search by title to find any TV show, movie or web series instantly. Compatible with all iOS versions, with downloads also available for PC and Android."
            />
            <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold">FreeCine iOS — download latest version</h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Tap the button below to grab the latest v3.0.3 build for iPhone and iPad.
            </p>
            <div className="mt-6"><CTAButton size="md">Download FreeCine iOS</CTAButton></div>
          </div>
          <div className="lg:col-span-5">
            <AppInfoCard
              title="FreeCine iOS info"
              rows={[
                { label: "App Name", value: "FreeCine APK" },
                { label: "Latest Version", value: "v3.0.3" },
                { label: "Platform", value: "iOS" },
                { label: "Size", value: "30 MB" },
                { label: "Mod feature", value: "Premium / Unlocked" },
                { label: "Downloads", value: "3,000,000+" },
                { label: "Category", value: "Movies / Entertainment" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading
          align="center"
          eyebrow="Features"
          title={<>FreeCine iOS — <span className="gradient-text">download features</span></>}
          description="Here's everything users love — and how to benefit from it."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <article key={f.t} className="surface-card p-6 hover:border-primary/30 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30">
                <f.i className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{f.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="install" className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Install guide"
          title={<>How to <span className="gradient-text">download & install</span> FreeCine on iOS</>}
          description="Just follow these steps and you'll be streaming in minutes."
        />
        <ol className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            { t: "Open Safari on your Apple device", d: "Type freecineapks.cc in the address bar and press Enter." },
            { t: "Tap the FreeCine download iOS app", d: "Then tap Download FreeCine for iOS." },
            { t: "Open the file manager", d: "Once the download is complete, open the file and install it." },
            { t: "Launch and stream", d: "FreeCine will appear on your home screen — open it and your favorite content is right there." },
          ].map((s, i) => (
            <li key={s.t} className="surface-card p-6 flex gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-cta grid place-items-center font-display font-bold text-primary-foreground">{i+1}</div>
              <div>
                <h3 className="font-display font-bold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[
            { t: "Install a trusted third-party store", d: "The official iOS build is on the way. For now, install via a trusted third-party store from freecineapks.cc and follow the on-screen instructions." },
            { t: "Search for FreeCine iOS", d: "Open the third-party store and search for FreeCine. Tap the result to open the app's page." },
            { t: "Start streaming", d: "After installation, tap the FreeCine icon and stream — make sure your internet is stable for the best experience." },
          ].map((s) => (
            <article key={s.t} className="surface-card p-6">
              <h3 className="font-display font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="surface-card p-8 md:p-10">
          <SectionHeading
            eyebrow="Why FreeCine on iPhone"
            title={<>Why use <span className="gradient-text">iOS FreeCine</span> on iPhone</>}
          />
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-3xl">
            We've tested FreeCine on iOS ourselves — it's a reliable app with the latest content, smart bandwidth handling and broad appeal across age groups. No ads, no privacy compromises. You can use it with your eyes closed.
          </p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Pros & Cons"
          title={<>The honest <span className="gradient-text">pros and cons</span></>}
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="surface-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-primary/15 ring-1 ring-primary/30 grid place-items-center text-primary"><Check className="h-5 w-5" /></div>
              <h3 className="font-display text-xl font-bold">Pros</h3>
            </div>
            <ul className="space-y-3">
              {pros.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foreground/85">
                  <span className="h-2 w-2 rounded-full bg-primary" />{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-orange/15 ring-1 ring-orange/30 grid place-items-center text-orange"><X className="h-5 w-5" /></div>
              <h3 className="font-display text-xl font-bold">Cons</h3>
            </div>
            <ul className="space-y-3">
              {cons.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foreground/85">
                  <span className="h-2 w-2 rounded-full bg-orange" />{p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading eyebrow="Conclusion" title={<>The streaming app for <span className="gradient-text">iPhone fans</span></>} />
        <p className="mt-6 max-w-3xl text-foreground/75 leading-relaxed">
          FreeCine iOS is ideal for fans of free apps that go deep on content. A massive library, no subscriptions, adjustable resolution from 4K to 1080p, and a friendly interface. Download FreeCine APK for iOS 2025 and enjoy your favorite content.
        </p>
        <div className="mt-8"><CTAButton>Download FreeCine for iOS</CTAButton></div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading align="center" eyebrow="FAQ" title={<>Frequently asked <span className="gradient-text">questions</span></>} />
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQ items={faqs} />
        </div>
      </section>
    </SiteLayout>
  );
}
