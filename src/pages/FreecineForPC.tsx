import SiteLayout from "@/components/layout/SiteLayout";
import SectionHeading from "@/components/site/SectionHeading";
import CTAButton from "@/components/site/CTAButton";
import AppInfoCard from "@/components/site/AppInfoCard";
import FAQ from "@/components/site/FAQ";
import {
  Video, Library, MousePointerClick, Download, SlidersHorizontal,
  Cpu, ShieldCheck, Cast, Layers,
} from "lucide-react";
import { Monitor, KeyboardIcon, Maximize } from "lucide-react";

const features = [
  { i: Video, t: "High-quality video streaming", d: "Watch in true 4K — way beyond the 1080p ceiling on mobile." },
  { i: Library, t: "Massive Content Library", d: "Movies, TV shows, cartoons and news, updated daily — both new releases and classics." },
  { i: MousePointerClick, t: "User-friendly interface", d: "Clean, simple and easy to run on a desktop. Works for everyone, all ages." },
  { i: Download, t: "Offline availability", d: "No connection? Download the content directly to your PC and watch it later." },
  { i: SlidersHorizontal, t: "More customization", d: "Adjust quality, subtitles, favorites and navigation to fit how you watch." },
  { i: Cpu, t: "Low system requirements", d: "Built with clean code that runs seamlessly on both old laptops and high-end PCs." },
  { i: ShieldCheck, t: "Secure and ad-free", d: "Completely safe and ad-free for an uninterrupted streaming experience." },
  { i: Cast, t: "Connect to other devices", d: "Send the stream from your laptop to a bigger screen — bring the cinema home." },
  { i: Layers, t: "Wide range of content", d: "Movies, TV shows, cartoons, comedy, news, songs and kids' content — updated daily." },
];

const faqs = [
  { q: "Is FreeCine for PC available?", a: "FreeCine was designed for Android — install it on your laptop using an Android emulator like BlueStacks or LD Player." },
  { q: "Is FreeCine for PC free?", a: "Yes. Download your favorite movies anytime, anywhere — no waiting and no fees." },
  { q: "Is FreeCine on PC safe?", a: "Yes. We tested it on multiple devices before release — virus-free and respectful of your privacy." },
  { q: "How do I install FreeCine on my PC?", a: "Use an Android emulator like NoxPlayer, PCSX2, Citra or BlueStacks to install FreeCine for PC." },
  { q: "Can I watch movies offline using FreeCine for PC?", a: "Yes. Download content first, then watch offline whenever you want." },
  { q: "Does FreeCine for PC have ads?", a: "No — FreeCine is ad-free during streaming. The occasional pop-up never interrupts playback." },
  { q: "Can I play high-quality content on FreeCine for PC?", a: "Yes. With a stable internet connection you can stream in true high quality, with adjustable resolutions." },
  { q: "Does FreeCine for PC support subtitles?", a: "Yes — watch in any language using subtitles." },
];

export default function FreecineForPC() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px]" />
        <div className="relative container pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80">
                <Monitor className="h-3.5 w-3.5 text-primary" />
                FreeCine for PC · v3.0.3
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Download <span className="gradient-text">FreeCine for PC</span> — latest v3.0.3
              </h1>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                Done with watching everything on a small screen? FreeCine for PC brings the full streaming library to your big screen — multi-language, with subtitles, in 4K all the way to 8K. Download v3.0.3 and bring the cinema home.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton>Download FreeCine for PC</CTAButton>
                <CTAButton variant="outline" href="#install">View install steps</CTAButton>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-6 bg-gradient-cta opacity-25 blur-3xl rounded-[3rem]" />
              <div className="relative surface-card p-3 shadow-card">
                <img
                  src="https://freecineapks.net/wp-content/uploads/2025/09/ezgif.com-resize-20.webp"
                  alt="FreeCine for PC"
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
              eyebrow="What is FreeCine PC"
              title={<>Big-screen streaming, <span className="gradient-text">small footprint</span></>}
              description="If you want to stream content on a big screen, install FreeCine APK on your PC. It's compatible with both old and new Windows versions, and far better than mobile because you can enjoy the cinema seated with friends and family."
            />
            <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold">FreeCine APK download — PC</h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Below are the official details for FreeCine on PC. Tap the button to download v3.0.3 directly.
            </p>
            <div className="mt-6">
              <CTAButton size="md">Get FreeCine PC</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-5">
            <AppInfoCard
              title="FreeCine PC info"
              rows={[
                { label: "App Name", value: "FreeCine APK" },
                { label: "Latest Version", value: "v3.0.3" },
                { label: "Platform", value: "FreeCine PC" },
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
          eyebrow="Features of FreeCine APK for PC"
          title={<>Everything you'd expect — <span className="gradient-text">on the big screen</span></>}
          description="FreeCine for PC offers all of this and more."
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

      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Why I recommend FreeCine PC"
          title={<>The PC version <span className="gradient-text">just hits different</span></>}
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { i: Maximize, t: "Larger screen", d: "PC screens are bigger and more enjoyable than mobile." },
            { i: KeyboardIcon, t: "Better control", d: "Use a keyboard and mouse for fluid navigation." },
            { i: Video, t: "High-quality playback", d: "Enjoy videos at resolutions that go beyond 4K." },
          ].map((b) => (
            <div key={b.t} className="surface-card p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30">
                <b.i className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{b.t}</h3>
              <p className="mt-2 text-sm text-foreground/70">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="install" className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Install Method 2025"
          title={<>How to <span className="gradient-text">download & install</span> FreeCine PC</>}
          description="To run FreeCine on your computer you'll need an Android emulator. Follow these simple steps."
        />
        <ol className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            { t: "Step 1 — Download the Android emulator", d: "Install your emulator. Open it, sign in to Google to enable the Play Store, and tweak performance if needed." },
            { t: "Step 2 — Get the FreeCine APK for PC", d: "Download the FreeCine PC file from our website. Save baixar freecine para pc on your computer." },
            { t: "Step 3 — Install FreeCine on the emulator", d: "Open the emulator, drag the APK file inside, install it, then open it and enjoy." },
            { t: "Step 4 — Launch and start enjoying", d: "Find the FreeCine icon on the emulator's home screen, click to open and start streaming." },
          ].map((s, i) => (
            <li key={s.t} className="surface-card p-6 flex gap-4">
              <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-cta grid place-items-center font-display font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div>
                <h3 className="font-display font-bold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          With these steps you can enjoy cinema by watching FreeCine PC on your computer.
        </p>
      </section>

      <section className="container py-20 md:py-28">
        <div className="surface-card p-8 md:p-10">
          <SectionHeading
            eyebrow="Safety & legality"
            title={<>Why FreeCine APK for PC is <span className="gradient-text">safe and reliable</span></>}
          />
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-3xl">
            We tested FreeCine for PC ourselves before publishing — no problems and virus-free. The app is safe in every way. As a best practice, keep a reliable antivirus running on your computer.
          </p>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="System requirements"
          title={<>FreeCine PC <span className="gradient-text">system requirements</span></>}
          description="To install the Android emulator on your PC, your system needs to meet a few specs."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="surface-card p-7">
            <h3 className="font-display text-xl font-bold">Minimum Requirements</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li><strong className="text-foreground">Processor:</strong> Intel or AMD x86/x64</li>
              <li><strong className="text-foreground">OS:</strong> Windows 7 or above</li>
              <li><strong className="text-foreground">OpenGL:</strong> 2.0</li>
              <li><strong className="text-foreground">RAM:</strong> 2 GB</li>
              <li><strong className="text-foreground">Disk space:</strong> 40 GB</li>
              <li><strong className="text-foreground">Virtualization:</strong> Intel VT-x / AMD-V enabled</li>
            </ul>
          </div>
          <div className="surface-lilac-card p-7">
            <h3 className="font-display text-xl font-bold">Recommended Requirements</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><strong>Processor:</strong> Intel® Core™ i7-6700</li>
              <li><strong>RAM:</strong> 8 GB</li>
              <li><strong>Disk space:</strong> 120 GB</li>
              <li><strong>Graphics Card:</strong> NVIDIA GeForce GTX-1050</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Conclusion"
          title={<>Bring the <span className="gradient-text">cinema home</span></>}
        />
        <p className="mt-6 max-w-3xl text-foreground/75 leading-relaxed">
          FreeCine for PC streams in German, Brazilian, Filipino, English, Urdu, Hindi and more — and supports subtitles in any other language you want. Multiple quality options, no ad fees, no taxes, tiny app size and built-in privacy. Download now and watch the cinema whenever you want.
        </p>
        <div className="mt-8">
          <CTAButton>Download FreeCine for PC</CTAButton>
        </div>
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
