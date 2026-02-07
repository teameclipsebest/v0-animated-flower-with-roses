'use client';

import { useState } from 'react';

interface RoseProps {
  index: number;
}

export default function Rose({ index }: RoseProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-24 h-32 md:w-28 md:h-40 focus:outline-none transition-transform duration-300 hover:scale-110"
    >
      <svg
        viewBox="0 0 100 140"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem */}
        <path
          d="M 50 140 Q 48 110 50 80 Q 52 50 50 20"
          stroke="#2d5016"
          strokeWidth="3"
          fill="none"
          className={`transition-all duration-500 ${isHovered ? 'stroke-green-700' : 'stroke-green-600'}`}
        />

        {/* Leaves */}
        <ellipse
          cx="35"
          cy="60"
          rx="12"
          ry="18"
          fill="#3a7d1f"
          transform="rotate(-30 35 60)"
          className={`transition-all duration-500 ${isHovered ? 'fill-green-700 opacity-100' : 'fill-green-600'}`}
        />
        <ellipse
          cx="65"
          cy="100"
          rx="12"
          ry="18"
          fill="#3a7d1f"
          transform="rotate(35 65 100)"
          className={`transition-all duration-500 ${isHovered ? 'fill-green-700 opacity-100' : 'fill-green-600'}`}
        />

        {/* Rose petals - outer layer */}
        <ellipse
          cx="50"
          cy="12"
          rx="16"
          ry="14"
          fill="#c41e3a"
          opacity="0.9"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-600 opacity-100' : 'fill-rose-600'}`}
        />
        <ellipse
          cx="65"
          cy="18"
          rx="14"
          ry="16"
          fill="#dc143c"
          opacity="0.85"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-700 opacity-100' : 'fill-red-600'}`}
        />
        <ellipse
          cx="70"
          cy="32"
          rx="12"
          ry="16"
          fill="#c41e3a"
          opacity="0.8"
          className={`transition-all duration-500 ${isHovered ? 'fill-rose-700 opacity-100' : 'fill-rose-700'}`}
        />
        <ellipse
          cx="62"
          cy="46"
          rx="14"
          ry="14"
          fill="#dc143c"
          opacity="0.75"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-700 opacity-100' : 'fill-red-500'}`}
        />
        <ellipse
          cx="38"
          cy="46"
          rx="14"
          ry="14"
          fill="#dc143c"
          opacity="0.75"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-700 opacity-100' : 'fill-red-500'}`}
        />
        <ellipse
          cx="30"
          cy="32"
          rx="12"
          ry="16"
          fill="#c41e3a"
          opacity="0.8"
          className={`transition-all duration-500 ${isHovered ? 'fill-rose-700 opacity-100' : 'fill-rose-700'}`}
        />
        <ellipse
          cx="35"
          cy="18"
          rx="14"
          ry="16"
          fill="#dc143c"
          opacity="0.85"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-700 opacity-100' : 'fill-red-600'}`}
        />

        {/* Rose petals - middle layer */}
        <ellipse
          cx="50"
          cy="18"
          rx="13"
          ry="11"
          fill="#e91e63"
          opacity="0.7"
          className={`transition-all duration-500 ${isHovered ? 'fill-pink-600 opacity-100' : 'fill-pink-600'}`}
        />
        <ellipse
          cx="58"
          cy="28"
          rx="11"
          ry="13"
          fill="#dc143c"
          opacity="0.7"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-600 opacity-100' : 'fill-red-600'}`}
        />
        <ellipse
          cx="42"
          cy="28"
          rx="11"
          ry="13"
          fill="#dc143c"
          opacity="0.7"
          className={`transition-all duration-500 ${isHovered ? 'fill-red-600 opacity-100' : 'fill-red-600'}`}
        />

        {/* Rose petals - inner layer */}
        <ellipse
          cx="50"
          cy="25"
          rx="10"
          ry="9"
          fill="#f06292"
          opacity="0.8"
          className={`transition-all duration-500 ${isHovered ? 'fill-pink-500 opacity-100' : 'fill-pink-500'}`}
        />
        <ellipse
          cx="50"
          cy="28"
          rx="8"
          ry="8"
          fill="#ec407a"
          opacity="0.9"
          className={`transition-all duration-500 ${isHovered ? 'fill-pink-400 opacity-100' : 'fill-pink-400'}`}
        />

        {/* Sparkle effect on hover */}
        {isHovered && (
          <>
            <circle cx="50" cy="15" r="2" fill="#ffd700" opacity="0.8" className="animate-pulse" />
            <circle cx="65" cy="25" r="1.5" fill="#ffd700" opacity="0.6" className="animate-pulse" />
            <circle cx="35" cy="25" r="1.5" fill="#ffd700" opacity="0.6" className="animate-pulse" />
          </>
        )}
      </svg>

      {/* Number indicator */}
      <div className="absolute bottom-2 right-2 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {index + 1}
      </div>

      {/* Floating heart on hover */}
      {isHovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">
          ❤️
        </div>
      )}
    </button>
  );
}
