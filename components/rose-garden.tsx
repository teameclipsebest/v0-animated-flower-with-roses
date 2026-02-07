'use client';

import { useState } from 'react';
import Rose from './rose';

interface RoseGardenProps {
  onSelectRose: (index: number) => void;
}

export default function RoseGarden({ onSelectRose }: RoseGardenProps) {
  const roseCount = 16;
  const roses = Array.from({ length: roseCount }, (_, i) => i);

  return (
    <div className="px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
          {roses.map((index) => (
            <div
              key={index}
              className="flex justify-center"
              onClick={() => onSelectRose(index)}
            >
              <Rose index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
