import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { Youtube, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voltiacz Rising & BunnyZ" },
      { name: "description", content: "Who is BunnyZ and what is Voltiacz Rising? Learn the story behind the gaming brand and community." },
      { property: "og:title", content: "About Voltiacz Rising" },
      { property: "og:description", content: "The story behind BunnyZ and the Voltiacz Rising community." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">The Story</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-6">
          About <span className="text-gradient">Voltiacz Rising</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A creator. A community. A brand built on energy, humor, and the love of the game.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="aspect-square rounded-2xl bg-gradient-primary neon-border flex items-center justify-center font-display text-7xl text-primary-foreground shadow-neon">
          BZ
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Who is <span className="text-gradient">BunnyZ?</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            BunnyZ is a gaming content creator focused on entertaining videos, funny moments, and real interaction with viewers.
            From wild clutches to chaotic squad sessions, every upload is built to make you laugh — and stay.
          </p>
          <p className="text-muted-foreground">
            What started as a one-person grind became a full community vibe. Now BunnyZ leads Voltiacz Rising into its next chapter.
          </p>
          <div className="mt-6">
            <NeonLink href="https://www.youtube.com/@BunnyZChannel" external>
              <Youtube className="w-4 h-4" /> Subscribe
            </NeonLink>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="md:order-2 aspect-square rounded-2xl bg-card neon-border p-10 flex flex-col justify-center shadow-neon-sm">
          <div className="font-display text-5xl md:text-6xl font-black text-gradient mb-2">RISE.</div>
          <div className="font-display text-5xl md:text-6xl font-black mb-2">PLAY.</div>
          <div className="font-display text-5xl md:text-6xl font-black text-foreground/80">REPEAT.</div>
        </div>
        <div className="md:order-1">
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            What is <span className="text-gradient">Voltiacz Rising?</span>
          </h2>
          <p className="text-muted-foreground mb-4">
            Voltiacz Rising is a growing gaming community and content brand built around content, teamwork, and fun.
            We're not chasing numbers — we're building something real.
          </p>
          <p className="text-muted-foreground">
            Whether you grind ranked, love casual nights with friends, or just want to vibe in voice chat, there's a spot for you here.
          </p>
          <div className="mt-6">
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline">
              <MessageCircle className="w-4 h-4" /> Join Discord
            </NeonLink>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { value: "10K+", label: "Community" },
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
