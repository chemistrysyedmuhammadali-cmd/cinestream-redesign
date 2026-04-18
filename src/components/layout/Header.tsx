import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const NAV = [
  { label: "Freecine APK", to: "/" },
  { label: "For PC", to: "/freecine-for-pc" },
  { label: "For iOS", to: "/freecine-ios" },
  { label: "For TV", to: "#", disabled: true },
  { label: "Blog", to: "#", disabled: true },
  { label: "Old Version", to: "#", disabled: true },
  { label: "Legal Pages", to: "/legal-pages" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-lg overflow-hidden ring-1 ring-border bg-surface-1 grid place-items-center">
            <img
              src="https://freecineapks.net/wp-content/uploads/2025/09/cropped-ezgif.com-webp-maker-3.webp"
              alt="FreeCine logo"
              className="h-9 w-9 object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-cta opacity-0 group-hover:opacity-25 transition-opacity" />
          </div>
          <span className="font-display text-base font-bold tracking-tight">
            Free<span className="gradient-text">Cine</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) =>
            item.disabled ? (
              <span
                key={item.label}
                className="px-3 py-2 text-sm text-muted-foreground/60 cursor-not-allowed select-none"
                title="Coming soon"
              >
                {item.label}
              </span>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  } hover:bg-white/5`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-cta rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            )
          )}

          <button className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-foreground/70 hover:text-foreground hover:bg-white/5 transition-colors">
            <Globe className="h-3.5 w-3.5" />
            English
            <ChevronDown className="h-3.5 w-3.5 opacity-60" />
          </button>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground hover:bg-white/5"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col">
            {NAV.map((item) =>
              item.disabled ? (
                <span
                  key={item.label}
                  className="py-3 text-sm text-muted-foreground/60"
                >
                  {item.label}
                </span>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `py-3 text-base font-medium border-b border-border last:border-0 ${
                      isActive ? "text-primary" : "text-foreground/80"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
            <div className="pt-3 text-sm text-muted-foreground inline-flex items-center gap-2">
              <Globe className="h-4 w-4" /> English
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
