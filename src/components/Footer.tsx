import { Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg">
          <span className="text-gradient">VOLTIACZ</span>{" "}
          <span className="text-foreground">RISING</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Voltiacz Rising — Since 2017.</p>
        <div className="flex gap-3">
          <a href="https://www.youtube.com/@BunnyZChannel" target="_blank" rel="noreferrer" aria-label="YouTube" className="p-2 rounded-md text-foreground/80 hover:text-primary glow-hover">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://discord.gg/EmKrKbC3Nt" target="_blank" rel="noreferrer" aria-label="Discord" className="p-2 rounded-md text-foreground/80 hover:text-primary glow-hover">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
