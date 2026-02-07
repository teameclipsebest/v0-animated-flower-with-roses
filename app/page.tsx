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
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header section */}
        <header className="pt-12 pb-8 text-center px-4">
          <div className="mb-6 inline-block">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-pink-600">
                Happy Rose Day
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-semibold text-foreground">
              For Pooja 🌹
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              I know words don't always come easy to me, but you make everything feel possible. Here are 16 roses, each holding a piece of my heart and the feelings I want you to know.
            </p>
          </div>
        </header>

        {/* Rose garden */}
        <div className="py-8">
          <RoseGarden onSelectRose={setSelectedRose} />
        </div>

        {/* Footer */}
        <footer className="text-center py-12">
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Click on each rose to read a special message
          </p>
          <p className="text-xs text-muted-foreground">
            ✨ {messages.length} roses × infinite feelings ✨
          </p>
        </footer>
      </div>
    </main>
  );
}
