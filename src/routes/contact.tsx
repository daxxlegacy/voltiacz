import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { MessageCircle, Handshake } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Voltiacz Rising | Business & Collabs" },
      { name: "description", content: "Get in touch with Voltiacz Rising for business inquiries, collaborations, and sponsorships." },
      { property: "og:title", content: "Contact Voltiacz Rising" },
      { property: "og:description", content: "Business inquiries and collabs with BunnyZ." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">Get in Touch</p>
        <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Brand deals, sponsorships, collabs, or just a question — drop a message.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-card neon-border rounded-2xl p-8 md:p-10 shadow-neon-sm">
          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-display mb-1">Collabs, Sponsorships & Services</p>
              <p className="text-muted-foreground">
                Interested in our website builds, graphic design, or want to collab? Reach out via Discord below — we'll get back fast.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-wrap gap-3">
            <NeonLink href="https://discord.gg/EmKrKbC3Nt" external variant="outline">
              <MessageCircle className="w-4 h-4" /> Discord
            </NeonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
