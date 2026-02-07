'use client';

import { useEffect, useState } from 'react';

export default function EasterEggs() {
  const [keySequence, setKeySequence] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [easterEggType, setEasterEggType] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = keySequence + e.key.toLowerCase();
      setKeySequence(newSequence.slice(-10)); // Keep last 10 keys

      // Check for special sequences
      if (newSequence.includes('pooja')) {
        triggerEasterEgg('love');
        setKeySequence('');
      } else if (newSequence.includes('forever')) {
        triggerEasterEgg('forever');
        setKeySequence('');
      } else if (newSequence.includes('lucky')) {
        triggerEasterEgg('lucky');
        setKeySequence('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keySequence]);

  const triggerEasterEgg = (type: string) => {
    setEasterEggType(type);
    setShowEasterEgg(true);
    
    // Trigger confetti or special effect
    const event = new CustomEvent('triggerConfetti', { detail: { count: 100 } });
    window.dispatchEvent(event);

    setTimeout(() => {
      setShowEasterEgg(false);
    }, 4000);
  };

  // Check for special dates
  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    // Rose Day is Feb 7
    if (month === 2 && date === 7) {
      console.log('[v0] Happy Rose Day special date detected!');
    }

    // Valentine's Day is Feb 14
    if (month === 2 && date === 14) {
      // Could trigger special animation
    }
  }, []);

  const easterEggMessages = {
    love: {
      text: "You know the magic word! 💕",
      emoji: '💕',
    },
    forever: {
      text: "Forever sounds perfect to me! 🌹",
      emoji: '🌹',
    },
    lucky: {
      text: "I'm the lucky one! ✨",
      emoji: '✨',
    },
  };

  const currentMessage = easterEggMessages[easterEggType as keyof typeof easterEggMessages];

  return (
    <>
      {showEasterEgg && currentMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="animate-in zoom-in duration-300 text-center space-y-4">
            <div className="text-7xl animate-bounce">{currentMessage.emoji}</div>
            <p className="text-2xl text-foreground font-light">{currentMessage.text}</p>
          </div>
        </div>
      )}
    </>
  );
}
