import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { NeonLink } from "@/components/NeonButton";
import { Code2, Palette, Mail, Wrench, Sparkles } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Voltiacz Rising | Web Dev & Graphic Design" },
      {
        name: "description",
        content:
          "Hire the Voltiacz Rising crew for custom website builds (HTML, CSS, PHP) and graphic design (Photoshop, Illustrator).",
      },
      { property: "og:title", content: "Voltiacz Rising — Services & Products" },
      {
        property: "og:description",
        content:
          "Web development and graphic design services from the Voltiacz Rising crew.",
      },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  name: string;
  contact: string;
  role: string;
  service: string;
  icon: typeof Code2;
  tools: string[];
  details: string[];
};

const SERVICES: Service[] = [
  {
    name: "Farid",
    contact: "faridasnawi10@gmail.com",
    role: "Web Developer",
    service: "Website Built (HTML, CSS, PHP)",
    icon: Code2,
    tools: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    details: [
      "Custom multi-page websites built from scratch",
      "Server-side logic, contact forms, and admin dashboards in PHP",
      "Responsive layouts that work cleanly on mobile and desktop",
      "Database integration with MySQL for dynamic content",
    ],
  },
  {
    name: "Fyruz",
    contact: "hafizahfairuzjohari@gmail.com",
    role: "Web Developer",
    service: "Website Built (HTML, CSS, PHP)",
    icon: Code2,
    tools: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    details: [
      "Landing pages, portfolios, and small business sites",
      "Clean, modern UI styling with CSS and utility frameworks",
      "PHP form handling, authentication flows, and CMS-style pages",
      "Cross-browser tested and SEO-friendly markup",
    ],
  },
  {
    name: "Zariq",
    contact: "zariqfirdaus15@gmail.com",
    role: "Graphic Designer",
    service: "Graphic Design (Photoshop, Illustrator)",
    icon: Palette,
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Logo Design", "Branding", "Thumbnails", "Posters"],
    details: [
      "Logo design and full brand identity kits",
      "YouTube thumbnails, banners, and stream overlays",
      "Posters, flyers, and social media creatives",
      "Vector illustrations and icon sets",
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-display mb-4">
            Services & Products
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-black mb-4">
            Hire the <span className="text-gradient">Crew</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Voltiacz Rising isn't just content — our crew also ships real client work.
            From custom-coded websites to full brand identity kits, here's what we do
            and the tools we do it with.
          </p>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="max-w-6xl mx-auto px-6 -mt-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Code2, title: "Web Development", text: "HTML, CSS, PHP, MySQL & JS." },
            { icon: Palette, title: "Graphic Design", text: "Photoshop & Illustrator workflows." },
            { icon: Wrench, title: "Custom Builds", text: "Tailored to your brief & budget." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card neon-border rounded-xl p-6 glow-hover">
              <Icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-display text-lg font-bold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-3">
            Meet the <span className="text-gradient">Service Crew</span>
          </h2>
          <p className="text-muted-foreground">
            Three creators, three skill sets — pick who fits your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="bg-card neon-border rounded-2xl p-6 shadow-neon-sm flex flex-col glow-hover"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground shadow-neon-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary font-display">
                      {s.role}
                    </div>
                    <div className="font-display text-2xl font-black">{s.name}</div>
                  </div>
                </div>

                <p className="text-sm text-foreground font-semibold mb-3">{s.service}</p>

                <ul className="space-y-2 text-sm text-muted-foreground mb-5">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-display mb-2">
                    Tools & Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary font-display uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-display mb-2">
                    Contact
                  </p>
                  <a
                    href={`mailto:${s.contact}`}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {s.contact}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-10 md:p-14 text-center shadow-neon">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(1_0_0/.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-black text-primary-foreground mb-3">
              Got a project in mind?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              Email the crew member that matches your need, or reach out through our main channel.
            </p>
            <NeonLink
              href="/contact"
              variant="outline"
              className="bg-background/20 border-background/40 text-primary-foreground hover:bg-background/30"
            >
              <Mail className="w-4 h-4" /> Contact Us
            </NeonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
