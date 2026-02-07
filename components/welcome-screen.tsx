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
          {/* Decorative top */}
          <div className="mb-8">
            <span className="text-6xl inline-block animate-bounce">🌹</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Happy Rose Day
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground font-light mb-8">
            A special message for Pooja
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground font-light mb-12 leading-relaxed">
            This is a collection of 16 roses, each carrying feelings I want to share with you. Click to enter and discover each one.
          </p>

          {/* CTA Button */}
          <button
            onClick={onEnter}
            className="group relative px-12 py-4 text-lg font-light uppercase tracking-widest text-white bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Enter Garden</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
          </button>

          {/* Bottom decoration */}
          <div className="mt-12 flex justify-center gap-2">
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.15s' }}>💕</span>
            <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
}
