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
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Premium animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute -top-12 left-0 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest font-light"
        >
          ← Back
        </button>

        {/* Rose at the top */}
        <div className="flex justify-center mb-12">
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

        {/* Message card - Premium styling */}
        <div className="bg-card/90 rounded-lg shadow-2xl p-8 md:p-16 backdrop-blur-xl border border-border/50 max-w-2xl">
          {/* Top decoration */}
          <div className="text-center mb-12">
            <div className="inline-flex gap-2 mb-8">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
                  🌹
                </span>
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-light text-secondary uppercase tracking-widest">
                Rose #{roseIndex + 1}
              </h2>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
            </div>
          </div>

          {/* Message text with typing animation */}
          <div className="min-h-56 flex items-center justify-center mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-center font-light">
              {displayedText}
              {!isComplete && <span className="animate-pulse text-primary text-xl">|</span>}
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"></div>

          {/* Button group - Premium styling */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={onBack}
              className="px-8 py-3 text-primary text-sm font-light uppercase tracking-widest border border-primary/50 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              Back
            </button>
            {isComplete && (
              <button
                onClick={onBack}
                className="px-8 py-3 text-white bg-gradient-to-r from-primary to-accent text-sm font-light uppercase tracking-widest rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
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
