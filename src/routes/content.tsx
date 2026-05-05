import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { VideoCard } from "@/components/VideoCard";
import { useState } from "react";

export const Route = createFileRoute("/content")({
  head: () => ({
    meta: [
      { title: "Content — Voltiacz Rising | BunnyZ Videos" },
      { name: "description", content: "Browse BunnyZ's gameplay, funny moments, and highlight clips. New uploads dropping all the time." },
      { property: "og:title", content: "Content — Voltiacz Rising" },
      { property: "og:description", content: "Gameplay, funny moments, and highlight clips from BunnyZ." },
    ],
  }),
  component: ContentPage,
});

const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Ranked Grind — Road to Top", category: "Gameplay" },
  { id: "kJQP7kiw5Fk", title: "Squad Wipe Wins", category: "Gameplay" },
  { id: "L_jWHffIx5E", title: "Bro What Just Happened", category: "Funny" },
  { id: "9bZkp7q19f0", title: "Voice Chat Goes Off the Rails", category: "Funny" },
  { id: "fJ9rUzIMcZQ", title: "1v4 Clutch of the Year", category: "Highlights" },
  { id: "OPf0YbXqDm0", title: "Best Plays — November", category: "Highlights" },
] as const;

const CATS = ["All", "Gameplay", "Funny", "Highlights"] as const;
type Cat = typeof CATS[number];

function ContentPage() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === cat);

  return (
    <PageShell>
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">Watch</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
          The <span className="text-gradient">Content</span> Vault
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every drop from BunnyZ — handpicked into the categories you love.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm font-display uppercase tracking-wider transition-all ${
                cat === c
                  ? "bg-gradient-primary text-primary-foreground shadow-neon-sm"
                  : "border border-border text-muted-foreground hover:text-primary hover:border-primary/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <VideoCard key={v.id} videoId={v.id} title={v.title} category={v.category} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
