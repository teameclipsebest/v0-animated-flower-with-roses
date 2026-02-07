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
    <main className="min-h-screen bg-gradient-to-br from-background via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
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
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm bg-opacity-95 border border-accent border-opacity-30">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Rose #{roseIndex + 1}
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                  🌹
                </span>
              ))}
            </div>
          </div>

          {/* Message text with typing animation */}
          <div className="min-h-32 md:min-h-40">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-center">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </p>
          </div>

          {/* Button group */}
          <div className="flex gap-4 mt-12 justify-center flex-wrap">
            <button
              onClick={onBack}
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Back to Garden
            </button>
            {isComplete && (
              <button
                onClick={onBack}
                className="px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Next Rose 🌹
              </button>
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ✨ Message {roseIndex + 1} of 16 ✨
          </p>
        </div>
      </div>
    </main>
  );
}
