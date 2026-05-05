interface Props {
  videoId: string;
  title: string;
  category?: string;
  vertical?: boolean;
}

export function VideoCard({ videoId, title, category, vertical = false }: Props) {
  return (
    <div className="group rounded-xl overflow-hidden bg-card neon-border glow-hover">
      <div className={vertical ? "aspect-[9/16]" : "aspect-video"}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        {category && (
          <span className="text-xs uppercase tracking-widest text-primary font-display">{category}</span>
        )}
        <h3 className="mt-1 text-base font-semibold text-foreground line-clamp-2">{title}</h3>
      </div>
    </div>
  );
}
