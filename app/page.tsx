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
    <main className="min-h-screen bg-gradient-to-br from-background via-purple-100 to-pink-100 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="pt-8 pb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-rose-500 to-pink-600">
              Happy Rose Day
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground mt-4 font-light">
            Dear Pooja 🌹
          </p>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto px-4">
            Click on each rose to discover the feelings I&apos;ve been wanting to share with you
          </p>
        </div>

        <RoseGarden onSelectRose={setSelectedRose} />

        <div className="text-center mt-12 pb-8">
          <p className="text-sm text-muted-foreground">
            ✨ There are {messages.length} roses with special messages for you ✨
          </p>
        </div>
      </div>
    </main>
  );
}
