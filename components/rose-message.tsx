'use client';

import { useState, useEffect } from 'react';

interface RoseMessageProps {
  roseIndex: number;
  message: string;
  onBack: () => void;
}

export default function RoseMessage({ roseIndex, message, onBack }: RoseMessageProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(message.slice(0, displayedText.length + 1));
      }, 30);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, message]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-tl from-accent/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Rose at the top */}
        <div className="flex justify-center mb-8">
          <svg
            viewBox="0 0 100 140"
            className="w-24 h-32 md:w-32 md:h-44"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Stem */}
            <path
              d="M 50 140 Q 48 110 50 80 Q 52 50 50 20"
              stroke="#2d5016"
              strokeWidth="3"
              fill="none"
            />

            {/* Leaves */}
            <ellipse
              cx="35"
              cy="60"
              rx="12"
              ry="18"
              fill="#3a7d1f"
              transform="rotate(-30 35 60)"
            />
            <ellipse
              cx="65"
              cy="100"
              rx="12"
              ry="18"
              fill="#3a7d1f"
              transform="rotate(35 65 100)"
            />

            {/* Rose petals */}
            <ellipse
              cx="50"
              cy="12"
              rx="16"
              ry="14"
              fill="#c41e3a"
            />
            <ellipse
              cx="65"
              cy="18"
              rx="14"
              ry="16"
              fill="#dc143c"
            />
            <ellipse
              cx="70"
              cy="32"
              rx="12"
              ry="16"
              fill="#c41e3a"
            />
            <ellipse
              cx="62"
              cy="46"
              rx="14"
              ry="14"
              fill="#dc143c"
            />
            <ellipse
              cx="38"
              cy="46"
              rx="14"
              ry="14"
              fill="#dc143c"
            />
            <ellipse
              cx="30"
              cy="32"
              rx="12"
              ry="16"
              fill="#c41e3a"
            />
            <ellipse
              cx="35"
              cy="18"
              rx="14"
              ry="16"
              fill="#dc143c"
            />

            {/* Middle layer */}
            <ellipse
              cx="50"
              cy="18"
              rx="13"
              ry="11"
              fill="#e91e63"
            />
            <ellipse
              cx="58"
              cy="28"
              rx="11"
              ry="13"
              fill="#dc143c"
            />
            <ellipse
              cx="42"
              cy="28"
              rx="11"
              ry="13"
              fill="#dc143c"
            />

            {/* Inner layer */}
            <ellipse
              cx="50"
              cy="25"
              rx="10"
              ry="9"
              fill="#f06292"
            />
            <ellipse
              cx="50"
              cy="28"
              rx="8"
              ry="8"
              fill="#ec407a"
            />
          </svg>
        </div>

        {/* Message card */}
        <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-16 backdrop-blur-md border border-white/50 max-w-2xl">
          {/* Top decoration */}
          <div className="text-center mb-8">
            <div className="inline-flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
                  🌹
                </span>
              ))}
            </div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">
              Message {roseIndex + 1} of 16
            </h2>
          </div>

          {/* Message text with typing animation */}
          <div className="min-h-48 flex items-center justify-center mb-8">
            <p className="text-lg md:text-xl leading-loose text-foreground text-center font-light">
              {displayedText}
              {!isComplete && <span className="animate-pulse text-primary text-2xl">|</span>}
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>

          {/* Button group */}
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Back to Garden
            </button>
            {isComplete && (
              <button
                onClick={onBack}
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Next Rose
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
