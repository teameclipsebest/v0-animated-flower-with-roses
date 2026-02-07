'use client';

import { useState, useEffect } from 'react';

export default function LoveCalculator() {
  const [percentage, setPercentage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Calculate based on name lengths and current date
      const yourName = 'You';
      const herName = 'Pooja';
      const seed = yourName.length + herName.length + new Date().getDate();
      const calculated = ((seed * 73) % 100) + 50; // Always 50-150, normalize to 50-100
      
      let currentPercentage = 0;
      const interval = setInterval(() => {
        currentPercentage += Math.random() * 8;
        if (currentPercentage >= calculated) {
          setPercentage(calculated);
          clearInterval(interval);
        } else {
          setPercentage(Math.floor(currentPercentage));
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const getColor = (percent: number) => {
    if (percent < 33) return 'from-red-500 to-orange-500';
    if (percent < 66) return 'from-yellow-500 to-orange-500';
    return 'from-primary to-accent';
  };

  const getMessage = (percent: number) => {
    if (percent < 30) return "There's potential...";
    if (percent < 50) return "Growing feelings!";
    if (percent < 70) return "Pretty compatible!";
    if (percent < 85) return "Amazing connection!";
    return "Perfect match! 🎯";
  };

  return (
    <div className="mt-12 text-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300 font-light uppercase tracking-widest text-sm"
      >
        {isOpen ? 'Hide Love Calculator' : 'Check Love Calculator ❤️'}
      </button>

      {isOpen && (
        <div className="mt-8 p-8 bg-card/80 rounded-lg border border-border/50 backdrop-blur-md max-w-sm mx-auto animate-in fade-in duration-500">
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                Compatibility Score
              </p>
              <div className="relative w-full h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getColor(percentage)} transition-all duration-300`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                {percentage}%
              </div>
              <p className="text-foreground font-light">{getMessage(percentage)}</p>
            </div>

            <div className="text-xs text-muted-foreground italic">
              "True love isn't calculated by percentages, but by the way someone makes you feel every single day."
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
