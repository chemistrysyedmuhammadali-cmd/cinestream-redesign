import SiteLayout from "@/components/layout/SiteLayout";
import HomeHero from "@/components/home/HomeHero";
import WhatIs from "@/components/home/WhatIs";
import Features from "@/components/home/Features";
import HowToUse from "@/components/home/HowToUse";
import Platforms from "@/components/home/Platforms";
import AppInfo from "@/components/home/AppInfo";
import AdditionalFeatures from "@/components/home/AdditionalFeatures";
import PopularMovies from "@/components/home/PopularMovies";
import FreecineTips from "@/components/home/FreecineTips";
import ProsCons from "@/components/home/ProsCons";
import WorldwideEntertainment from "@/components/home/WorldwideEntertainment";
import HowToInstall from "@/components/home/HowToInstall";
import SimilarApps from "@/components/home/SimilarApps";
import SectionHeading from "@/components/site/SectionHeading";
import FAQ from "@/components/site/FAQ";
import CTAButton from "@/components/site/CTAButton";

const faqs = [
  { q: "Is FreeCine APK safe?", a: "Yes — FreeCine is a completely safe platform. You don't even need an email to use it." },
  { q: "What is FreeCine FR APK?", a: "It's an entertainment app loved by Brazilian users that supports live streaming." },
  { q: "Are there ads in the FreeCine movie download APK?", a: "Ads can appear from time to time, but they don't interrupt the streaming experience." },
  { q: "Is the FreeCine movie app legal?", a: "Watching movies, shows and web series through FreeCine is not illegal — feel free to use it." },
  { q: "Does FreeCine 2025 require a subscription?", a: "No — it works on phones, tablets, PCs and smart TVs without any subscription or sign-up." },
  { q: "Do I need an account to use the FreeCine app?", a: "No account required. Just open the app and start streaming." },
  { q: "How do I run FreeCine on PC or Mac?", a: "Install an Android emulator on your PC or Mac, search for FreeCine APK and tap install — then open and enjoy." },
  { q: "How can I download and install the FreeCine APK?", a: "Visit our website, tap the download button at the top of the page, and run the installer once it finishes downloading." },
  { q: "What can I watch on FreeCine?", a: "Movies, dramas, cartoons, web series and TV shows in multiple languages." },
  { q: "Does FreeCine offer anime content?", a: "Yes — FreeCine APK Anime gives you a wide library and is ideal for anime fans." },
  { q: "Can I download FreeCine APK from the Google Play Store?", a: "No, FreeCine is a third-party app and is not on the Play Store. Download it directly from our site." },
];

export default function Index() {
  return (
    <SiteLayout>
      <HomeHero />
      <WhatIs />
      <Features />
      <HowToUse />
      <Platforms />
      <AppInfo />
      <AdditionalFeatures />
      <PopularMovies />
      <FreecineTips />
      <ProsCons />
      <WorldwideEntertainment />
      <HowToInstall />
      <SimilarApps />

      <section className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why upgrade"
              title={<>Why the latest <span className="gradient-text">FreeCine APK</span> matters</>}
              description="Every update brings something new — without breaking your stream. Premium content stays free, the catalog stays fresh, and the app stays light, fast and virus-free."
            />
            <p className="mt-6 text-foreground/70 leading-relaxed">
              FreeCine notifies you whenever new content drops, runs even on slow internet, and barely takes any space on your device. If you love streaming, this is the one to keep.
            </p>
          </div>

          <div className="lg:col-span-7 surface-card p-8 md:p-10">
            <h3 className="font-display text-xl md:text-2xl font-bold">Conclusion</h3>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              FreeCine APK latest version is the ideal pick for anyone who wants to stream without limits — web series, movies, sports, news and dramas, all free, all the time. The catalog updates regularly so something new is always waiting for you. Multi-language support and subtitles mean you can watch the way you want, on whatever device you have.
            </p>
            <div className="mt-6">
              <CTAButton size="md">Download FreeCine v3.0.3</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title={<>Frequently asked <span className="gradient-text">questions</span></>}
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="container pb-20 md:pb-28">
        <div className="surface-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-cta opacity-10" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Ready to stream <span className="gradient-text">unlimited entertainment</span>?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/75">
              Download FreeCine APK v3.0.3 now and unlock the full streaming library — free, fast and built for every screen.
            </p>
            <div className="mt-8 flex justify-center flex-wrap gap-4">
              <CTAButton>Download FreeCine APK</CTAButton>
              <CTAButton variant="outline" href="/freecine-for-pc">FreeCine for PC</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
