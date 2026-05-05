import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Music } from "lucide-react";

export const Route = createFileRoute("/anthem")({
  head: () => ({
    meta: [
      { title: "Anthem — Voltiacz Rising" },
      { name: "description", content: "Listen to the official Voltiacz Rising anthem and read the full lyrics." },
      { property: "og:title", content: "Voltiacz Rising — Anthem" },
      { property: "og:description", content: "The official Voltiacz Rising anthem. Lock in. Five deep. One mind." },
    ],
  }),
  component: AnthemPage,
});

const SECTIONS: { label: string; lines: string[] }[] = [
  { label: "Intro", lines: ["Yeah", "Voltiacz", "Lock in…"] },
  {
    label: "Chorus",
    lines: [
      "⚡️ Voltiacz, feel the surge in the zone",
      "Five deep, one mind, never fight alone",
      "From the pistol to the clutch, yeah we taking control",
      "When the lights go red, watch the whole team glow",
      "⚡️ Voltiacz, every round we ignite",
      "One tap, clean play, yeah we own the site",
      "Hear the crowd go loud when we enter the fight",
      "Voltiacz on the map, yeah we here all night",
    ],
  },
  {
    label: "Verse 1",
    lines: [
      "Load in, game face, pressure don't shake us",
      "Smokes on the entry, flashes like lasers",
      "Crosshair steady, every move calculated",
      "You peek — mistake — yeah you just got deleted",
      "Mid control, map read, perfect rotation",
      "Comms stay clean, no hesitation",
      "They playing checkers, we on domination",
      "Voltiacz rising, new generation",
    ],
  },
  {
    label: "Pre-Chorus",
    lines: [
      "Heartbeat loud when the spike goes down",
      "Clock ticks low but we don't back down",
      "Clutch mentality, ice in our veins",
      "One round more, yeah we breaking their frame",
    ],
  },
  {
    label: "Chorus",
    lines: [
      "⚡️ Voltiacz, feel the surge in the zone",
      "Five deep, one mind, never fight alone",
      "From the pistol to the clutch, yeah we taking control",
      "When the lights go red, watch the whole team glow",
      "⚡️ Voltiacz, every round we ignite",
      "One tap, clean play, yeah we own the site",
      "Hear the crowd go loud when we enter the fight",
      "Voltiacz on the map, yeah we here all night",
    ],
  },
  {
    label: "Verse 2",
    lines: [
      "Eco to buy round, momentum shift",
      "Underdogs maybe, but we built like this",
      "Every loss taught lessons we kept",
      "Now we swing together, no fear, no stress",
      "They talk big but the scoreboard speaks",
      "Round after round, yeah we cooking these geeks",
      "LAN or online, pressure increases",
      "Voltiacz don't fold, yeah the streak never ceases",
    ],
  },
  {
    label: "Bridge (Chant / Crowd Part)",
    lines: [
      "Vol–ti–acz! (HEY!)",
      "Vol–ti–acz! (HEY!)",
      "Hands up, stand tall, never gonna crack",
      "Voltiacz! Voltiacz! Run it right back!",
    ],
  },
  {
    label: "Final Chorus",
    lines: [
      "⚡️ Voltiacz, feel the surge in the zone",
      "Legacy forming every time we load",
      "This ain't luck, nah, this built from the grind",
      "Voltiacz forever, yeah we changing the tide",
      "⚡️ Voltiacz, hear the echo of the win",
      "Last round played, yeah we lock it in",
      "From the scrims to the stage, let the story begin",
      "Voltiacz on top — remember the name",
    ],
  },
  { label: "Outro", lines: ["Spike defused.", "Game over.", "Voltiacz ⚡️"] },
];

function AnthemPage() {
  return (
    <PageShell>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">Official Anthem</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
          <span className="text-gradient">VOLTIACZ</span> RISING
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Five deep. One mind. Press play and lock in.
        </p>
      </section>

      {/* Player */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="rounded-2xl bg-card neon-border p-6 md:p-8 shadow-neon-sm">
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-neon-sm">
              <Music className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-lg font-bold">VOLTIACZ RISING</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Female Version</div>
            </div>
          </div>
          <audio
            controls
            preload="metadata"
            src="/voltiacz-rising-anthem.mp3"
            className="w-full"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      {/* Lyrics */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-black mb-6 text-center">
          Lyrics
        </h2>
        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={i} className="bg-card/60 neon-border rounded-xl p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-display mb-3">
                {s.label}
              </div>
              <div className="space-y-1.5">
                {s.lines.map((line, j) => (
                  <p key={j} className="text-foreground/90 leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
