import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

const importantPages = [
  { label: "About Us", to: "/about-us" },
  { label: "Contact Us", to: "/contact-us" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms And Condition", to: "/terms-and-condition" },
  { label: "DMCA", to: "/dmca" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Cookies Policy", to: "/cookies-policy" },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Send, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface-1/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="https://freecineapks.net/wp-content/uploads/2025/09/cropped-ezgif.com-webp-maker-3.webp"
              alt="FreeCine logo"
              className="h-10 w-10 rounded-lg ring-1 ring-border"
            />
            <span className="font-display text-lg font-bold">
              Free<span className="gradient-text">Cine</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/70">
            FreeCine APK is your premium free streaming hub for movies, TV
            shows, anime and live channels — fast, ad-free and built for
            Android, PC and iOS. Stream the cinema you love without
            subscriptions or limits.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground/60">
            Important Pages
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {importantPages.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  className="text-sm text-foreground/75 hover:text-primary transition-colors"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-sm font-semibold tracking-wider uppercase text-foreground/60">
            Follow Us
          </h4>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="h-10 w-10 rounded-lg grid place-items-center bg-surface-2 border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Updates, releases and new APK versions — straight from the team.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2025 Freecine APK. All rights reserved.</p>
          <p className="opacity-70">Built for entertainment lovers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
