import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { VideoCard } from "@/components/VideoCard";
import { useState } from "react";

export const Route = createFileRoute("/clips")({
  head: () => ({
    meta: [
      { title: "Clips & Highlights — Voltiacz Rising" },
      { name: "description", content: "Short-form clips and highlights from BunnyZ and xChurros. Quick hits of the best gaming moments." },
      { property: "og:title", content: "Clips — Voltiacz Rising" },
      { property: "og:description", content: "Short-form gaming highlights from BunnyZ and xChurros." },
    ],
  }),
  component: ClipsPage,
});

const CLIPS_BUNNYZ = [
  { id: "dQw4w9WgXcQ", title: "Insane no-scope" },
  { id: "9bZkp7q19f0", title: "How did that hit?" },
  { id: "kJQP7kiw5Fk", title: "1HP clutch" },
  { id: "fJ9rUzIMcZQ", title: "Squad reaction" },
  { id: "L_jWHffIx5E", title: "Lost it on stream" },
  { id: "OPf0YbXqDm0", title: "Highlight reel" },
  { id: "RgKAFK5djSk", title: "Trickshot ace" },
  { id: "JGwWNGJdvx8", title: "Movement check" },
];

const CLIPS_XCHURROS = [
  { id: "3JZ_D3ELwOQ", title: "Churros snap aim" },
  { id: "RgKAFK5djSk", title: "Sneaky flank" },
  { id: "JGwWNGJdvx8", title: "Last second clutch" },
  { id: "OPf0YbXqDm0", title: "Stream rage" },
  { id: "L_jWHffIx5E", title: "Mic goes wild" },
  { id: "fJ9rUzIMcZQ", title: "Bunny-hop kill" },
  { id: "kJQP7kiw5Fk", title: "Wallbang of the year" },
  { id: "9bZkp7q19f0", title: "1v3 reverse sweep" },
];

type Creator = "bunnyz" | "xchurros";

function ClipsPage() {
  const [creator, setCreator] = useState<Creator>("bunnyz");
  const clips = creator === "bunnyz" ? CLIPS_BUNNYZ : CLIPS_XCHURROS;

  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">Short Form</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
          <span className="text-gradient">Clips</span> & Highlights
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Quick hits. Fast scrolls. The most-shared moments from BunnyZ & xChurros.
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clips.map((c) => (
            <VideoCard key={c.id} videoId={c.id} title={c.title} vertical />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
