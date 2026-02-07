'use client';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative rose dividers */}
      <div className="relative z-10 space-y-16 py-24 px-4">
        {/* Top decorative accent */}
        <div className="flex justify-center gap-3 items-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/50"></div>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🌹</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
          <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌹</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold">For Someone Special</p>
            <h1 className="text-6xl md:text-7xl font-light leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Rose Day 2026
              </span>
            </h1>
            <p className="text-lg text-muted-foreground font-light">Celebrating the most precious person in my life</p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-2xl">🌹</span>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed max-w-xl mx-auto">
            Every rose here represents a moment, a memory, and a feeling I couldn't put into words. Until now.
          </p>
        </div>

        {/* Animated rose cascade */}
        <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              🌹
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
