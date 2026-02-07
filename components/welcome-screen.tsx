'use client';

import { useEffect, useState } from 'react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        {/* Main content with staggered animation */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: showContent ? 1 : 0,
            transform: showContent ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Decorative top with animated roses */}
          <div className="mb-12 flex justify-center gap-2">
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0s' }}>🌹</span>
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0.15s' }}>✨</span>
            <span className="text-5xl animate-bounce" style={{ animationDelay: '0.3s' }}>🌹</span>
          </div>

          {/* Title */}
          <h1 className="text-7xl md:text-8xl font-light mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Happy
            </span>
          </h1>
          <h1 className="text-6xl md:text-7xl font-light mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              Rose Day
            </span>
          </h1>

          {/* Decorative divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-foreground font-light mb-4">
            For Pooja
          </p>
          <p className="text-lg text-accent font-light mb-12">
            The most special person in my life
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground font-light mb-4 leading-relaxed max-w-xl mx-auto">
            I've prepared 16 roses, each one carrying a message that words alone couldn't convey. Every rose represents a moment, a feeling, and a piece of my heart.
          </p>
          <p className="text-sm text-muted-foreground/80 font-light mb-12">
            Plus exclusive video edits just for you
          </p>

          {/* CTA Button */}
          <button
            onClick={onEnter}
            className="group relative inline-block mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-lg"></div>
            <div className="relative px-14 py-4 bg-background rounded-full border border-primary/50 group-hover:border-primary transition-all duration-300">
              <span className="text-sm uppercase tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:from-accent group-hover:to-primary">
                Enter the Garden
              </span>
            </div>
          </button>

          {/* Animated arrow indicator */}
          <div className="mt-6 animate-bounce">
            <span className="text-2xl">↓</span>
          </div>

          {/* Bottom decoration */}
          <div className="mt-12 flex justify-center gap-3">
            <span className="text-3xl">🌹</span>
            <span className="text-3xl">💕</span>
            <span className="text-3xl">🌹</span>
          </div>
        </div>
      </div>
    </div>
  );
}
