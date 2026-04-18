import SectionHeading from "@/components/site/SectionHeading";
import CTAButton from "@/components/site/CTAButton";

const steps = [
  { t: "Visit our website", d: "Open this site and tap the download button at the top of the page." },
  { t: "Allow installation", d: "Allow the APK to be installed on your mobile device when prompted." },
  { t: "Run the installer", d: "Start the installation process — it takes only a few seconds." },
  { t: "You're done", d: "FreeCine APK 2025 latest version is now installed and ready to stream." },
];

export default function HowToInstall() {
  return (
    <section className="container py-20 md:py-28">
      <div className="surface-card p-8 md:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-primary/20 rounded-full blur-3xl" />

        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Install Guide"
              title={<>How to <span className="gradient-text">download & install</span> FreeCine APK</>}
              description="A few easy steps and you're streaming. Here's the full install process."
            />
            <div className="mt-8">
              <CTAButton>Download FreeCine APK</CTAButton>
            </div>
          </div>

          <ol className="lg:col-span-6 relative space-y-5">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <div className="relative shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-cta grid place-items-center font-display font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 top-10 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
                  )}
                </div>
                <div className="pb-5">
                  <h3 className="font-display font-bold text-foreground">{s.t}</h3>
                  <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
