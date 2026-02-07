'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  size: number;
  color: string;
  life: number;
}

interface ConfettiProps {
  trigger?: boolean;
}

export default function Confetti({ trigger = false }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [particleId, setParticleId] = useState(0);

  const colors = ['#e91e63', '#ff69b4', '#ffd700', '#ff1493', '#ff69b4'];

  const createConfetti = (x: number = window.innerWidth / 2, y: number = window.innerHeight / 2) => {
    const newParticles: Particle[] = [];

    for (let i = 0; i < 50; i++) {
      const angle = (Math.PI * 2 * i) / 50;
      const velocity = 5 + Math.random() * 8;

      newParticles.push({
        id: particleId + i,
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        rotation: Math.random() * 360,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
    setParticleId((prev) => prev + 50);
  };

  useEffect(() => {
    if (trigger) {
      createConfetti();
    }
  }, [trigger]);

  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.3,
            rotation: p.rotation + 10,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
