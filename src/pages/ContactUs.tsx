import { useState, FormEvent } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import { Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — we'll get back to you soon.");
    }, 700);
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80">
              <Mail className="h-3.5 w-3.5 text-primary" />
              Contact us
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Let's <span className="gradient-text">talk</span>
            </h1>
            <p className="mt-4 text-lg text-foreground/75">
              Questions, feedback or partnership ideas — drop us a message and the team will get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="surface-card p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your name</label>
                  <input required name="name" type="text" placeholder="Jane Doe"
                    className="w-full h-12 px-4 rounded-lg bg-surface-2 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your email</label>
                  <input required name="email" type="email" placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-lg bg-surface-2 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input required name="subject" type="text" placeholder="What is it about?"
                  className="w-full h-12 px-4 rounded-lg bg-surface-2 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your message <span className="text-muted-foreground">(optional)</span></label>
                <textarea name="message" rows={5} placeholder="Type your message..."
                  className="w-full px-4 py-3 rounded-lg bg-surface-2 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none transition-all" />
              </div>
              <button disabled={loading} type="submit"
                className="inline-flex h-12 px-6 items-center gap-2 rounded-full bg-gradient-cta font-semibold text-primary-foreground shadow-cta hover:shadow-glow transition-all disabled:opacity-60">
                <Send className="h-4 w-4" /> {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 space-y-4">
            {[
              { i: MessageSquare, t: "Quick replies", d: "We aim to respond within 1–2 business days." },
              { i: Mail, t: "General inquiries", d: "Use the form for the fastest response." },
              { i: MapPin, t: "Worldwide team", d: "FreeCine fans on every continent." },
              { i: Clock, t: "Always listening", d: "Feedback shapes every release." },
            ].map((c) => (
              <div key={c.t} className="surface-card p-5 flex gap-4 hover:border-primary/30 transition-all">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center text-primary ring-1 ring-primary/30 shrink-0">
                  <c.i className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold">{c.t}</h3>
                  <p className="text-sm text-foreground/70 mt-1">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
