'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  {
    id: 1,
    url: 'https://media.discordapp.net/attachments/1325665650080743456/1469732639660310749/lv_7503953309502278965_20260202180306.mp4',
    title: 'Edit 1',
  },
  {
    id: 2,
    url: 'https://media.discordapp.net/attachments/1325665650080743456/1469732640390381780/lv_7381485843887820050_20260202175730.mp4',
    title: 'Edit 2',
  },
];

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Video Player */}
      <div className="relative w-full rounded-xl overflow-hidden border border-border/50 bg-black">
        <video
          key={videos[currentIndex].id}
          src={videos[currentIndex].url}
          controls
          autoPlay
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-4">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-full border border-border hover:bg-primary/10 transition-colors"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 w-2'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-3 rounded-full border border-border hover:bg-primary/10 transition-colors"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Video Info */}
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} / {videos.length}
        </p>
        <h3 className="text-lg font-semibold">{videos[currentIndex].title}</h3>
      </div>
    </div>
  );
}
