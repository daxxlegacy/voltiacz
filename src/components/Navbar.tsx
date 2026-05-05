import { Link } from "@tanstack/react-router";
import { Youtube, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import voltiaczLogo from "@/assets/voltiacz-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/content", label: "Content" },
  { to: "/community", label: "Community" },
  { to: "/clips", label: "Clips" },
  { to: "/anthem", label: "Anthem" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-wider">
          <img src={voltiaczLogo} alt="Voltiacz Rising logo" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_oklch(0.7_0.22_250/0.6)]" />
          <span>
            <span className="text-gradient">VOLTIACZ</span>
            <span className="text-foreground"> RISING</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary shadow-neon-sm" }}
              className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://www.youtube.com/@BunnyZChannel"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="p-2 rounded-md text-foreground/80 hover:text-primary glow-hover"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://discord.gg/EmKrKbC3Nt"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="p-2 rounded-md text-foreground/80 hover:text-primary glow-hover"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="py-2 text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3">
            <a href="https://www.youtube.com/@BunnyZChannel" target="_blank" rel="noreferrer" className="p-2 text-foreground/80"><Youtube className="w-5 h-5" /></a>
            <a href="https://discord.gg/EmKrKbC3Nt" target="_blank" rel="noreferrer" className="p-2 text-foreground/80"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </div>
      )}
    </header>
  );
}
