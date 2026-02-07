'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create initial petals
    const initialPetals = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }));
    setPetals(initialPetals);

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals((prev) => [
        ...prev.slice(-7),
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          duration: 8 + Math.random() * 4,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes sway {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(30px);
          }
        }
        
        .petal {
          position: fixed;
          font-size: 1.5rem;
          animation: fall linear forwards, sway ease-in-out forwards;
          animation-composition: add;
        }
      `}</style>

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            top: '-10vh',
            animation: `fall ${petal.duration}s linear ${petal.delay}s forwards, sway ${2 + Math.random() * 1}s ease-in-out ${petal.delay}s infinite`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
}
