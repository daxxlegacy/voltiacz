import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { Youtube, MessageCircle, Twitch } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voltiacz Rising | BunnyZ & Mr_Zomba" },
      { name: "description", content: "Meet the creators behind Voltiacz Rising — BunnyZ and Mr_Zomba — and learn the story of the gaming brand." },
      { property: "og:title", content: "About Voltiacz Rising" },
      { property: "og:description", content: "The story behind Voltiacz Rising and its creators." },
    ],
  }),
  component: AboutPage,
});

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
    </svg>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">The Story</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
          About <span className="text-gradient">Voltiacz Rising</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A brand. A crew. A community built on energy, humor, and the love of the game.
        </p>
      </section>

      {/* What is Voltiacz Rising */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-square rounded-2xl bg-card neon-border p-10 flex flex-col justify-center shadow-neon-sm">
          <div className="font-display text-5xl md:text-6xl font-black text-gradient mb-2">RISE.</div>
          <div className="font-display text-5xl md:text-6xl font-black mb-2">PLAY.</div>
          <div className="font-display text-5xl md:text-6xl font-black text-foreground/80">REPEAT.</div>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            What is <span className="text-gradient">Voltiacz Rising?</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Voltiacz Rising is a growing gaming community and content brand built around content, teamwork, and fun.
            We're not chasing numbers — we're building something real.
          </p>
          <p className="text-muted-foreground">
            Under the Voltiacz Rising banner, multiple creators bring their own flavor to the channel — and the family keeps growing.
          </p>
          <div className="mt-6">
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline">
              <MessageCircle className="w-4 h-4" /> Join Discord
            </NeonLink>
          </div>
        </div>
      </section>

      {/* Creators heading */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">The Crew</p>
        <h2 className="font-display text-3xl md:text-5xl font-black mb-3">
          Meet the <span className="text-gradient">Creators</span>
        </h2>
      </section>

      {/* BunnyZ */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-square rounded-2xl bg-gradient-primary neon-border flex items-center justify-center font-display text-7xl text-primary-foreground shadow-neon">
          BZ
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-primary font-display mb-2">Creator</p>
          <h3 className="font-display text-3xl md:text-4xl font-black mb-4">
            <span className="text-gradient">BunnyZ</span> 🐰
          </h3>
          <p className="text-muted-foreground mb-3">
            Welcome to <span className="text-foreground font-semibold">Bunnyz Gaming</span> 🎮🐰
          </p>
          <p className="text-muted-foreground mb-3">
            The channel focuses on gameplay, highlights, and gaming content that's fun but full of action.
            From chill play to clutch moments — it's all right here.
          </p>
          <p className="text-muted-foreground mb-3">
            Join the <span className="text-foreground font-semibold">Bunnyz Syndicate</span> 🐰⚔️
          </p>
          <p className="text-muted-foreground mb-6">
            Subscribe and become part of the Bunnyz Gaming journey 🚀
          </p>
          <div className="flex flex-wrap gap-3">
            <NeonLink href="https://www.youtube.com/@BunnyZChannel" external>
              <Youtube className="w-4 h-4" /> YouTube
            </NeonLink>
            <NeonLink href="https://twitch.tv/bunnyzgamingmy" external variant="outline">
              <Twitch className="w-4 h-4" /> Twitch
            </NeonLink>
            <NeonLink href="https://tiktok.com/@bunnyz10" external variant="outline">
              <TikTokIcon /> TikTok
            </NeonLink>
          </div>
        </div>
      </section>

      {/* Mr_Zomba */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="md:order-2 aspect-square rounded-2xl bg-gradient-to-br from-secondary to-accent neon-border flex items-center justify-center font-display text-7xl text-primary-foreground shadow-neon">
          MZ
        </div>
        <div className="md:order-1">
          <p className="text-xs uppercase tracking-widest text-primary font-display mb-2">Creator</p>
          <h3 className="font-display text-3xl md:text-4xl font-black mb-4">
            <span className="text-gradient">Mr_Zomba</span> 🧟
          </h3>
          <p className="text-muted-foreground mb-3">
            Another voice of the Voltiacz Rising crew. Mr_Zomba brings his own style of gameplay,
            energy, and chaos to the channel — a different vibe, same family.
          </p>
          <p className="text-muted-foreground mb-6">
            Stay tuned for more drops, collabs, and squad sessions across the Voltiacz Rising universe.
          </p>
          <div className="flex flex-wrap gap-3">
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline">
              <MessageCircle className="w-4 h-4" /> Join Discord
            </NeonLink>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { value: "2", label: "Creators" },
            { value: "500+", label: "Uploads" },
            { value: "24/7", label: "Live Vibes" },
          ].map((s) => (
            <div key={s.label} className="bg-card neon-border rounded-xl p-6 glow-hover">
              <div className="font-display text-3xl md:text-4xl font-black text-gradient">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
