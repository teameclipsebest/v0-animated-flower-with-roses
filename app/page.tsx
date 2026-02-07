'use client';

import { useState, useRef } from 'react';
import RoseGarden from '@/components/rose-garden';
import RoseMessage from '@/components/rose-message';
import WelcomeScreen from '@/components/welcome-screen';
import Confetti from '@/components/confetti';
import GalleryPreview from '@/components/gallery-preview';
import FallingPetals from '@/components/falling-petals';
import LoveCalculator from '@/components/love-calculator';
import ShareButton from '@/components/share-button';
import EasterEggs from '@/components/easter-eggs';
import VideoGallery from '@/components/video-gallery';
import RoseButtons from '@/app/roses';
import Rose3D from '@/components/rose-3d'; // Declare the Rose3D variable here

export default function Home() {
  const [selectedRose, setSelectedRose] = useState<number | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  const handleRoseSelect = (index: number) => {
    setSelectedRose(index);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 500);
  };

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  if (selectedRose !== null) {
    return <RoseMessage roseIndex={selectedRose} message={messages[selectedRose]} onBack={() => setSelectedRose(null)} />;
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Falling petals */}
      <FallingPetals />

      {/* Easter eggs */}
      <EasterEggs />

      {/* Confetti effect */}
      <Confetti trigger={showConfetti} />

      {/* Share button */}
      <ShareButton />

      {/* Background music */}
      <audio
        ref={audioRef}
        autoPlay
        loop
        className="hidden"
      >
        <source
          src="/folder/Blue-Yung-Kai.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Background Videos */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/folder/lv_7503953309502278965_20260202180306.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Premium animated background with multiple gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Premium Header with enhanced typography */}
        <header className="pt-20 pb-16 text-center px-4 animate-in fade-in slide-in-from-top duration-1000">
          <div className="space-y-10">
            {/* Decorative top accent with more roses */}
            <div className="flex justify-center gap-2 md:gap-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {i % 2 === 0 ? '🌹' : '✨'}
                </span>
              ))}
            </div>

            {/* Main title with serif styling */}
            <div className="space-y-6">
              <p className="text-accent font-cursive tracking-widest uppercase text-xl md:text-2xl">Happy Rose Day</p>
              <h1 className="text-8xl md:text-9xl font-serif font-light leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse">
                  Pooja
                </span>
              </h1>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-primary/70"></div>
                <span className="text-xl">🌹</span>
                <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-primary/70"></div>
              </div>
            </div>

            {/* Romantic subtitle */}
            <div className="space-y-5 max-w-3xl mx-auto">
              <p className="text-lg md:text-2xl text-foreground font-light leading-relaxed">
                True feelings are hard to express in words. But you make everything easier for me. 💕
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-light">
                Here are 16 roses, each carrying a message that words alone couldn't convey
              </p>
            </div>

            {/* Additional decorative roses */}
            <div className="flex justify-center gap-2 md:gap-3 flex-wrap max-w-xl mx-auto">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="text-xl md:text-2xl animate-bounce"
                  style={{ animationDelay: `${(i % 5) * 0.15}s` }}
                >
                  🌹
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Rose Garden - centered and spacious */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-4xl space-y-12">
            {/* Video Gallery Display */}
            <div className="animate-in fade-in slide-in-from-bottom duration-1000">
              <VideoGallery />
            </div>

            {/* Rose Garden */}
            <RoseGarden onSelectRose={handleRoseSelect} />
            <GalleryPreview />

            {/* Love Calculator */}
            <LoveCalculator />
          </div>
        </div>

        {/* Enhanced Footer with decorative elements */}
        <footer className="pb-16 text-center animate-in fade-in slide-in-from-bottom duration-1000 border-t border-primary/10">
          <div className="space-y-6 pt-12">
            {/* Decorative roses */}
            <div className="flex justify-center gap-2">
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>🌹</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.15s' }}>💕</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>🌹</span>
            </div>

            {/* Footer text */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                Click each rose to reveal a special message 💝
              </p>
              <p className="text-xs text-muted-foreground/60 font-light">
                {messages.length} Roses • {messages.length} Feelings • ∞ Love
              </p>
            </div>

            {/* Additional decorative divider */}
            <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
              <span className="text-sm text-muted-foreground/50">✧</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>

            {/* Call to action */}
            <p className="text-xs text-muted-foreground/50 font-light">
              Made with 💖 for someone truly special
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
