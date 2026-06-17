import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { VideoCard } from "@/components/VideoCard";
import { useState } from "react";

export const Route = createFileRoute("/clips")({
  head: () => ({
    meta: [
      { title: "Clips & Highlights — Voltiacz Rising" },
      { name: "description", content: "Latest uploads from BunnyZ and xChurros." },
      { property: "og:title", content: "Clips — Voltiacz Rising" },
      { property: "og:description", content: "Latest YouTube uploads from BunnyZ and xChurros." },
    ],
  }),
  component: ClipsPage,
});

const CLIPS_BUNNYZ = [
  { id: "jRMhTuaI_Dc", title: "Level 1 Backrooms — Sesuatu Dalam Kegelapan Menunggu" },
  { id: "AyeqhOBX4b4", title: "Level 0 Backrooms — Tempat Yang Tak Sepatutnya Wujud" },
  { id: "Rd4NlvzDJjk", title: "VOLTIACZ RISING ⚡ | Gaming Motivation Song 2026" },
];

const CLIPS_XCHURROS = [
  { id: "SU0HsFcYzxs", title: "ADE 551 Tabletop Game Design — Pathfinder Adventure" },
];

type Creator = "bunnyz" | "xchurros";

function ClipsPage() {
  const [creator, setCreator] = useState<Creator>("bunnyz");
  const clips = creator === "bunnyz" ? CLIPS_BUNNYZ : CLIPS_XCHURROS;

  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">Latest Uploads</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
          <span className="text-gradient">Clips</span> & Highlights
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The most recent uploads straight from BunnyZ & xChurros' YouTube channels.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["bunnyz", "xchurros"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCreator(c)}
              className={`px-6 py-2 rounded-full text-sm font-display uppercase tracking-wider transition-all ${
                creator === c
                  ? "bg-gradient-primary text-primary-foreground shadow-neon-sm"
                  : "border border-border text-muted-foreground hover:text-primary hover:border-primary/60"
              }`}
            >
              {c === "bunnyz" ? "BunnyZ" : "xChurros"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clips.map((c) => (
            <VideoCard key={c.id} videoId={c.id} title={c.title} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
