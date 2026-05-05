import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { VideoCard } from "@/components/VideoCard";
import { Youtube, MessageCircle, Zap, Users, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltiacz Rising — Home | Gaming with BunnyZ" },
      { name: "description", content: "Welcome to Voltiacz Rising. Content, community, and gaming led by BunnyZ. Watch on YouTube and join the Discord." },
      { property: "og:title", content: "Voltiacz Rising — Home" },
      { property: "og:description", content: "Content. Community. Gaming. Led by BunnyZ." },
    ],
  }),
  component: Index,
});

const FEATURED = [
  { id: "dQw4w9WgXcQ", title: "Latest Gameplay Highlights", category: "Gameplay" },
  { id: "9bZkp7q19f0", title: "Funniest Moments Compilation", category: "Funny" },
  { id: "kJQP7kiw5Fk", title: "Clutch Plays of the Week", category: "Highlights" },
];

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(oklch(0.7_0.22_250/.15)_1px,transparent_1px),linear-gradient(90deg,oklch(0.7_0.22_250/.15)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] font-display border border-primary/40 text-primary bg-primary/5 mb-6">
            ⚡ Powered by the Community
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6">
            Welcome to <br />
            <span className="text-gradient">Voltiacz Rising</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Content. Community. Gaming. <span className="text-foreground font-semibold">Led by BunnyZ.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NeonLink href="https://www.youtube.com/@BunnyZChannel" external variant="primary">
              <Youtube className="w-4 h-4" /> Watch on YouTube
            </NeonLink>
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline">
              <MessageCircle className="w-4 h-4" /> Join the Community
            </NeonLink>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS STRIP */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Zap, title: "Daily Energy", text: "Constant uploads, clips, and live action." },
            { icon: Users, title: "Real Community", text: "Active Discord with friends, not followers." },
            { icon: Trophy, title: "Built to Win", text: "Esports mindset, but here for the fun." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card neon-border rounded-xl p-6 glow-hover">
              <Icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED VIDEOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-3">
            Featured <span className="text-gradient">Drops</span>
          </h2>
          <p className="text-muted-foreground">The latest from BunnyZ — straight from YouTube.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((v) => (
            <VideoCard key={v.id} videoId={v.id} title={v.title} category={v.category} />
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
          Meet <span className="text-gradient">BunnyZ</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
          A gaming creator focused on entertaining content, funny moments, and real community interaction.
          Not just videos — a movement.
        </p>
        <NeonLink href="/about" variant="outline">Read the Story</NeonLink>
      </section>

      {/* DISCORD CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-16 text-center shadow-neon">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              Join the Rising.
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Game with us. Hop in voice. Be part of the next big content moment.
            </p>
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline" className="bg-background/20 border-background/40 text-primary-foreground hover:bg-background/30">
              <MessageCircle className="w-4 h-4" /> Join Discord
            </NeonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
