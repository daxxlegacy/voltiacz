import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { Youtube, MessageCircle, Twitch, Music } from "lucide-react";
import { useState } from "react";
import bunnyzLogo from "@/assets/bunnyz-logo.png";
import voltiaczLogo from "@/assets/voltiacz-logo.png";
import xchurrosLogo from "@/assets/xchurros-logo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voltiacz Rising | BunnyZ & xChurros" },
      { name: "description", content: "Meet the creators of Voltiacz Rising — BunnyZ and xChurros — and the story behind the gaming brand." },
      { property: "og:title", content: "About Voltiacz Rising" },
      { property: "og:description", content: "Meet BunnyZ and xChurros — the creators behind Voltiacz Rising." },
    ],
  }),
  component: AboutPage,
});

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
    </svg>
  );
}

type SocialLink = {
  label: string;
  url: string;
  icon: React.ReactNode;
  handle: string;
};

function SocialCard({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 p-4 rounded-xl bg-card neon-border glow-hover group"
    >
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        {link.icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-display">{link.label}</div>
        <div className="text-sm font-semibold text-foreground truncate">{link.handle}</div>
      </div>
    </a>
  );
}

const BUNNYZ_SOCIALS: SocialLink[] = [
  { label: "YouTube", url: "https://www.youtube.com/@BunnyZChannel", icon: <Youtube className="w-5 h-5" />, handle: "@BunnyZChannel" },
  { label: "Twitch", url: "https://twitch.tv/bunnyzgamingmy", icon: <Twitch className="w-5 h-5" />, handle: "bunnyzgamingmy" },
  { label: "TikTok", url: "https://tiktok.com/@bunnyz10", icon: <TikTokIcon />, handle: "@bunnyz10" },
];

const XCHURROS_SOCIALS: SocialLink[] = [
  { label: "YouTube", url: "https://www.youtube.com/@zariqfirdaus3392", icon: <Youtube className="w-5 h-5" />, handle: "@zariqfirdaus3392" },
  { label: "Twitch", url: "https://www.twitch.tv/mr_boyzzx", icon: <Twitch className="w-5 h-5" />, handle: "mr_boyzzx" },
  { label: "TikTok", url: "https://www.tiktok.com/@mr_ariq01", icon: <TikTokIcon />, handle: "@mr_ariq01" },
];

function AboutPage() {
  const [tab, setTab] = useState<"bunnyz" | "xchurros">("bunnyz");

  const scrollTo = (id: "bunnyz" | "xchurros") => {
    setTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageShell>
      {/* Hero */}
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
        <div className="aspect-square rounded-2xl bg-card neon-border p-8 flex items-center justify-center shadow-neon">
          <img src={voltiaczLogo} alt="Voltiacz Rising logo" className="w-full h-full object-contain drop-shadow-[0_0_30px_oklch(0.7_0.22_250/0.5)]" />
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
            Under the Voltiacz Rising banner, multiple creators bring their own flavor to the channel —
            and the family keeps growing.
          </p>
          <div className="mt-6">
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline">
              <MessageCircle className="w-4 h-4" /> Join Discord
            </NeonLink>
          </div>
        </div>
      </section>

      {/* Voltiacz Rising anthem */}
      <section className="max-w-4xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-card neon-border p-6 md:p-8 shadow-neon-sm">
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-neon-sm">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-display">Official Anthem</div>
              <div className="font-display text-lg font-bold">VOLTIACZ RISING ⚡</div>
            </div>
          </div>
          <audio controls preload="metadata" src="/voltiacz-rising-anthem.mp3" className="w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* Creator tabs / anchor jumps */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-2 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">The Crew</p>
        <h2 className="font-display text-3xl md:text-5xl font-black mb-6">
          Meet the <span className="text-gradient">Creators</span>
        </h2>
        <div className="inline-flex gap-2 p-1.5 rounded-full bg-card neon-border">
          {([
            { id: "bunnyz", label: "BunnyZ" },
            { id: "xchurros", label: "xChurros" },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => scrollTo(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-display uppercase tracking-wider transition-all ${
                tab === t.id
                  ? "bg-gradient-primary text-primary-foreground shadow-neon-sm"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* BunnyZ */}
      <section id="bunnyz" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square rounded-2xl bg-card neon-border p-4 flex items-center justify-center shadow-neon overflow-hidden">
            <img
              src={bunnyzLogo}
              alt="BunnyZ Gaming logo"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_oklch(0.7_0.22_250/0.4)]"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-display mb-2">Creator</p>
            <h3 className="font-display text-3xl md:text-4xl font-black mb-4">
              <span className="text-gradient">BunnyZ</span> 🐰
            </h3>
            <p className="text-muted-foreground mb-3">
              Welcome to <span className="text-foreground font-semibold">BunnyZ Gaming</span> 🎮🐰
            </p>
            <p className="text-muted-foreground mb-3">
              The channel is all about gameplay, highlights, and gaming content that's fun but packed with action.
              From chill casual sessions to clutch ranked moments — it's all right here.
            </p>
            <p className="text-muted-foreground mb-3">
              Expect funny squad runs, high-energy plays, and a creator who's always vibing with the chat.
            </p>
            <p className="text-muted-foreground mb-3">
              Join the <span className="text-foreground font-semibold">BunnyZ Syndicate</span> 🐰⚔️
            </p>
            <p className="text-muted-foreground">
              Subscribe and become part of the BunnyZ Gaming journey 🚀
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BUNNYZ_SOCIALS.map((s) => <SocialCard key={s.label} link={s} />)}
        </div>

        {/* BunnyZ anthem */}
        <div className="mt-8 rounded-2xl bg-card neon-border p-6 md:p-8 shadow-neon-sm">
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-neon-sm">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-display">BunnyZ Anthem</div>
              <div className="font-display text-lg font-bold">BUNNYZ 🐰⚔️</div>
            </div>
          </div>
          <audio controls preload="metadata" src="/bunnyz-anthem.mp3" className="w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* xChurros */}
      <section id="xchurros" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2 aspect-square rounded-2xl bg-card neon-border p-4 flex items-center justify-center shadow-neon overflow-hidden">
            <img
              src={xchurrosLogo}
              alt="xChurros Gaming logo"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_oklch(0.7_0.22_140/0.4)]"
            />
          </div>
          <div className="md:order-1">
            <p className="text-xs uppercase tracking-widest text-primary font-display mb-2">Creator</p>
            <h3 className="font-display text-3xl md:text-4xl font-black mb-4">
              <span className="text-gradient">xChurros</span> 💀🌹
            </h3>
            <p className="text-muted-foreground mb-3">
              Another voice of the Voltiacz Rising crew. xChurros brings his own style of gameplay,
              energy, and chaos to the channel — a different vibe, same family.
            </p>
            <p className="text-muted-foreground">
              Stay tuned for more drops, collabs, and squad sessions across the Voltiacz Rising universe.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {XCHURROS_SOCIALS.map((s) => <SocialCard key={s.label} link={s} />)}
        </div>

        {/* xChurros anthem */}
        <div className="mt-8 rounded-2xl bg-card neon-border p-6 md:p-8 shadow-neon-sm">
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-neon-sm">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-display">xChurros Anthem</div>
              <div className="font-display text-lg font-bold">xCHURROS 💀🌹</div>
            </div>
          </div>
          <audio controls preload="metadata" src="/xchurros-anthem.mp3" className="w-full">
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "2", label: "Creators" },
            { value: "4", label: "Platforms" },
            { value: "1", label: "Community" },
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
