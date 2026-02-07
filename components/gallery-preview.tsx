'use client';

export default function GalleryPreview() {
  const roses = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="mt-16 pt-12 border-t border-border/50">
      <p className="text-center text-xs font-light text-muted-foreground uppercase tracking-widest mb-8">
        All 16 Roses Await
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {roses.map((rose) => (
          <div
            key={rose}
            className="aspect-square flex items-center justify-center rounded-lg bg-gradient-to-br from-card to-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🌹</span>
          </div>
        ))}
      </div>
    </div>
  );
}
