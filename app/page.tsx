'use client';

import { useState } from 'react';
import RoseGarden from '@/components/rose-garden';
import RoseMessage from '@/components/rose-message';

export default function Home() {
  const [selectedRose, setSelectedRose] = useState<number | null>(null);

  const messages = [
    "When I first saw you, I didn't know how special you were. Now I can't imagine my days without talking to you 🌹",
    "You reply so quickly, so thoughtfully. Every message from you makes my heart skip a beat ❤️",
    "You're different from everyone else. The way you care, the way you laugh - it's mesmerizing 💕",
    "I feel so much better when I talk to you. You've brought light into my life that I didn't know was missing ✨",
    "The way you listen, the way you understand me without judgment - you're truly special Pooja 🥀",
    "You make me feel like the happiest person in this universe, and that's no exaggeration 😭💕",
    "Your presence alone brings me peace. No stress, just pure happiness 🌸",
    "I respect you more every day. Not because of how you look, but because of who you are inside 💫",
    "You avoid the games others play. That's what makes you genuinely beautiful 🌹",
    "I think about you throughout the entire day, and I wouldn't have it any other way 💭",
    "You're real, you're genuine, you're everything I never knew I needed 💖",
    "With you, I feel like I can be myself completely - no filters, no pretenses ✨",
    "The way you care about staying true to yourself shows how strong your character is 💪",
    "I don't know if you feel the same, but I need you to know - you mean everything to me 🥺",
    "Our conversations are different. They have a magic that I can't explain but deeply feel 🪄",
    "Thank you for being you. Thank you for changing my life in ways you probably don't realize 🙏",
  ];

  if (selectedRose !== null) {
    return <RoseMessage roseIndex={selectedRose} message={messages[selectedRose]} onBack={() => setSelectedRose(null)} />;
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Premium animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Premium Header */}
        <header className="pt-16 pb-20 text-center px-4">
          <div className="space-y-8">
            {/* Decorative top accent */}
            <div className="flex justify-center gap-1">
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>✨</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>🌹</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            </div>

            {/* Main title with serif styling */}
            <div>
              <p className="text-secondary font-light tracking-widest uppercase mb-4 text-sm">Happy Rose Day</p>
              <h1 className="text-7xl md:text-8xl font-light leading-tight mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                  Pooja
                </span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
            </div>

            {/* Romantic subtitle */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-foreground font-light leading-relaxed">
                They say true feelings are hard to express in words. But you make everything easier for me.
              </p>
              <p className="text-base text-muted-foreground font-light">
                Here are 16 roses, each carrying a piece of my heart
              </p>
            </div>
          </div>
        </header>

        {/* Rose Garden - centered and spacious */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <RoseGarden onSelectRose={setSelectedRose} />
        </div>

        {/* Elegant Footer */}
        <footer className="pb-12 text-center">
          <p className="text-sm text-muted-foreground font-light tracking-wide mb-2">
            Click each rose to reveal a message
          </p>
          <div className="flex justify-center gap-2 text-xs text-muted-foreground/70">
            <span>✧</span>
            <span>{messages.length} roses, endless feelings</span>
            <span>✧</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
