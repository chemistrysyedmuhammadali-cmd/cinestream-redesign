import SectionHeading from "@/components/site/SectionHeading";

export default function WhatIs() {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="What is FreeCine APK"
            title={<>The free streaming app <span className="gradient-text">built for cinema lovers</span></>}
            description="FreeCine APK is the free streaming app where you get live TV shows, movies, dramas, web series, live sports and kids' cartoons — without any subscription charges. Watch in 4K to 1080p quality, save content for offline viewing, and use it across Android, iPhone, PC and smart TVs via emulators."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              ["Filipino + multi-language", "Watch live TV in your language"],
              ["4K to 1080p quality", "Adjust to match your connection"],
              ["Offline downloads", "Save shows for the road"],
              ["Cross-device", "Android, iOS, PC, smart TV"],
            ].map(([t, d]) => (
              <div key={t} className="surface-card p-5">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-sm text-foreground/65">{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-cta opacity-20 blur-2xl rounded-3xl" />
            <img
              src="https://freecineapks.net/wp-content/uploads/2025/10/ezgif.com-resize-39.webp"
              alt="FreeCine app interface"
              className="relative w-full rounded-2xl ring-1 ring-border shadow-card"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
