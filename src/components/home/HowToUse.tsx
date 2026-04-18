import SectionHeading from "@/components/site/SectionHeading";

const steps = [
  ["Open the app", "Open FreeCine APK on your mobile."],
  ["Browse the home page", "Scroll through movies and videos. Swipe up or down for more content."],
  ["Search for content", "Use the search bar to find a title — results appear in seconds."],
  ["Play your favorite", "Tap the movie or video — a new window opens and starts streaming."],
  ["Choose viewing mode", "Watch in fullscreen or windowed — your choice."],
  ["Save for later", "Build a playlist of your favorite content to watch anytime."],
  ["Stay updated", "Use the download button to save shows, movies and new episodes."],
  ["Watch live sports", "Visit the Sports section for live channels and events."],
  ["Change language", "Pick your preferred language in Settings and save."],
  ["Sign in (optional)", "Access additional features by signing in."],
];

export default function HowToUse() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="How to Use"
        title={<>How to use <span className="gradient-text">Free Cine APK</span></>}
        description="If you want to use FreeCine, follow these simple steps."
      />

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {steps.map(([t, d], i) => (
          <div
            key={t}
            className="surface-card p-5 flex gap-4 hover:border-primary/30 transition-all"
          >
            <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-cta grid place-items-center font-display font-bold text-primary-foreground">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">{t}</h3>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
