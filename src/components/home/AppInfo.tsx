import SectionHeading from "@/components/site/SectionHeading";
import AppInfoCard from "@/components/site/AppInfoCard";

const compatibility = [
  { t: "Android Devices", d: "Built specifically for Android phones, tablets and TV boxes — best performance on every form factor." },
  { t: "Smart TV", d: "FreeCine APK now supports Smart TVs. The big-screen experience for those who prefer it." },
  { t: "Laptops & PC", d: "Run FreeCine on Windows or laptop via Android emulator — full library, larger canvas." },
  { t: "iOS Devices", d: "Available for iPhone and iPad through a trusted third-party install method." },
];

export default function AppInfo() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="App Info"
            title={<>The <span className="gradient-text">specs at a glance</span></>}
            description="Lightweight, modern and built to run on almost anything."
          />
          <div className="mt-8">
            <AppInfoCard
              rows={[
                { label: "App Name", value: "FreeCine APK" },
                { label: "Latest Version", value: "v3.0.3" },
                { label: "Size", value: "25 MB" },
                { label: "Required Android", value: "4.0+" },
                { label: "Downloads", value: "10M+" },
                { label: "Rating", value: "4.5 ★" },
                { label: "Category", value: "Movies / Entertainment" },
                { label: "Mod features", value: "Premium / Unlocked" },
              ]}
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Compatibility"
            title={<>FreeCine 2025 <span className="gradient-text">supported devices</span></>}
            description="Designed to feel native on every device you own."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {compatibility.map((c) => (
              <div key={c.t} className="surface-card p-6 hover:border-primary/30 transition-all">
                <h3 className="font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
