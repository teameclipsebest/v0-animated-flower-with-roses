'use client';

import Rose from './rose';

interface RoseGardenProps {
  onSelectRose: (index: number) => void;
}

export default function RoseGarden({ onSelectRose }: RoseGardenProps) {
  const roseCount = 16;
  const roses = Array.from({ length: roseCount }, (_, i) => i);

  return (
    <div className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-10">
          {roses.map((index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => {
                  console.log('[v0] Rose clicked:', index);
                  onSelectRose(index);
                }}
                className="focus:outline-none transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <Rose index={index} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
