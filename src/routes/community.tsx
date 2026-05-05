import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { MessageCircle, Mic, Gamepad2, Calendar, Users } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Join Voltiacz Rising on Discord" },
      { name: "description", content: "Join the Voltiacz Rising Discord. Play games, jump in voice chats, and be part of the events." },
      { property: "og:title", content: "Join Voltiacz Rising" },
      { property: "og:description", content: "Discord community for gamers — Voltiacz Rising since 2017." },
    ],
  }),
  component: CommunityPage,
});

const PERKS = [
  { icon: Gamepad2, title: "Play Together", text: "Squad up across your favorite games. Find a teammate any hour of the day." },
  { icon: Mic, title: "Live Voice Chats", text: "24/7 active voice channels. Hop in, hang out, make friends." },
  { icon: Calendar, title: "Events & Tournaments", text: "Custom games, giveaways, and community nights every week." },
  { icon: Users, title: "Real People", text: "No drama. No spam. A community that actually cares." },
];

function CommunityPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">Community</p>
          <h1 className="font-display text-5xl md:text-7xl font-black mb-6">
            Join <span className="text-gradient">Voltiacz Rising</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Play games together. Join voice chats. Be part of events and content.
            This is where the brand actually lives.
          </p>
          <NeonLink href="https://discord.gg/EmKrKbC3Nt" external>
            <MessageCircle className="w-5 h-5" /> Join Discord
          </NeonLink>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PERKS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card neon-border rounded-xl p-8 glow-hover">
              <Icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-2xl bg-gradient-primary p-10 md:p-14 text-center shadow-neon">
          <h2 className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-4">
            Ready to rise?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto">
            One click. One community. Endless gaming nights ahead.
          </p>
          <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline" className="bg-background/20 border-background/40 text-primary-foreground hover:bg-background/30">
            <MessageCircle className="w-5 h-5" /> Join Now
          </NeonLink>
        </div>
      </section>
    </PageShell>
  );
}
