'use client';

import { useState } from 'react';

export default function RoseButtons() {
  const [clicked, setClicked] = useState<number | null>(null);

  const handleRoseClick = (index: number) => {
    setClicked(index);
    console.log(`Rose ${index + 1} clicked!`);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        body {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 100vh;
          background-color: #000;
          overflow: hidden;
          perspective: 1000px;
          font-family: 'Poppins', sans-serif;
        }

        .roses-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #1a0a1a 0%, #000 50%, #0a1a1a 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          padding-bottom: 50px;
        }

        .roses-wrapper {
          position: relative;
          transform: scale(0.9);
          display: flex;
          gap: 80px;
          justify-content: center;
        }

        .rose {
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .rose:hover {
          transform: scale(1.05);
        }

        .rose.clicked {
          animation: roseGlow 0.6s ease;
        }

        @keyframes roseGlow {
          0% { filter: drop-shadow(0 0 0px rgba(255, 20, 147, 0)); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.8)); }
          100% { filter: drop-shadow(0 0 0px rgba(255, 20, 147, 0)); }
        }

        /* Rose Stem */
        .rose__stem {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 100px;
          background: linear-gradient(to top, #0d5e3d 0%, #1a8c4a 50%, #228c4a 100%);
          border-radius: 2px;
          z-index: 1;
        }

        .rose__stem-leaf {
          position: absolute;
          width: 20px;
          height: 15px;
          background: linear-gradient(135deg, #1a7a3f 0%, #228c4a 100%);
          border-radius: 50% 0;
        }

        .rose__stem-leaf--1 {
          top: 25%;
          left: -15px;
          transform: rotate(-40deg);
        }

        .rose__stem-leaf--2 {
          top: 50%;
          right: -15px;
          transform: rotate(40deg);
        }

        .rose__stem-leaf--3 {
          top: 75%;
          left: -18px;
          transform: rotate(-35deg);
        }

        /* Rose Petals */
        .rose__petals {
          position: relative;
          width: 80px;
          height: 80px;
          z-index: 10;
        }

        .rose__petal {
          position: absolute;
          width: 25px;
          height: 35px;
          background: radial-gradient(ellipse at 30% 30%, #ff1493, #c71585 70%);
          border-radius: 50% 50% 50% 0;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.3);
          animation: petalBlooming 2s ease-out backwards;
        }

        /* Outer petals */
        .rose__petal:nth-child(1) {
          transform: translateX(-50%) rotate(0deg) translateY(-40px);
          animation-delay: 0s;
          background: radial-gradient(ellipse at 30% 30%, #ff4da6, #d91e63 70%);
        }

        .rose__petal:nth-child(2) {
          transform: translateX(-50%) rotate(45deg) translateY(-40px);
          animation-delay: 0.1s;
          background: radial-gradient(ellipse at 30% 30%, #ff3d94, #e91e63 70%);
        }

        .rose__petal:nth-child(3) {
          transform: translateX(-50%) rotate(90deg) translateY(-40px);
          animation-delay: 0.2s;
          background: radial-gradient(ellipse at 30% 30%, #ff1493, #d91e63 70%);
        }

        .rose__petal:nth-child(4) {
          transform: translateX(-50%) rotate(135deg) translateY(-40px);
          animation-delay: 0.3s;
          background: radial-gradient(ellipse at 30% 30%, #ff3d94, #e91e63 70%);
        }

        .rose__petal:nth-child(5) {
          transform: translateX(-50%) rotate(180deg) translateY(-40px);
          animation-delay: 0.4s;
          background: radial-gradient(ellipse at 30% 30%, #ff1493, #d91e63 70%);
        }

        .rose__petal:nth-child(6) {
          transform: translateX(-50%) rotate(225deg) translateY(-40px);
          animation-delay: 0.5s;
          background: radial-gradient(ellipse at 30% 30%, #ff3d94, #e91e63 70%);
        }

        .rose__petal:nth-child(7) {
          transform: translateX(-50%) rotate(270deg) translateY(-40px);
          animation-delay: 0.6s;
          background: radial-gradient(ellipse at 30% 30%, #ff1493, #d91e63 70%);
        }

        .rose__petal:nth-child(8) {
          transform: translateX(-50%) rotate(315deg) translateY(-40px);
          animation-delay: 0.7s;
          background: radial-gradient(ellipse at 30% 30%, #ff3d94, #e91e63 70%);
        }

        /* Inner petals */
        .rose__petal:nth-child(n+9) {
          width: 20px;
          height: 28px;
          background: radial-gradient(ellipse at 30% 30%, #ff1493, #c71585 70%);
        }

        .rose__petal:nth-child(9) {
          transform: translateX(-50%) rotate(22deg) translateY(-25px);
          animation-delay: 0.8s;
        }

        .rose__petal:nth-child(10) {
          transform: translateX(-50%) rotate(67deg) translateY(-25px);
          animation-delay: 0.9s;
        }

        .rose__petal:nth-child(11) {
          transform: translateX(-50%) rotate(112deg) translateY(-25px);
          animation-delay: 1s;
        }

        .rose__petal:nth-child(12) {
          transform: translateX(-50%) rotate(157deg) translateY(-25px);
          animation-delay: 1.1s;
        }

        .rose__petal:nth-child(13) {
          transform: translateX(-50%) rotate(202deg) translateY(-25px);
          animation-delay: 1.2s;
        }

        .rose__petal:nth-child(14) {
          transform: translateX(-50%) rotate(247deg) translateY(-25px);
          animation-delay: 1.3s;
        }

        .rose__petal:nth-child(15) {
          transform: translateX(-50%) rotate(292deg) translateY(-25px);
          animation-delay: 1.4s;
        }

        .rose__petal:nth-child(16) {
          transform: translateX(-50%) rotate(337deg) translateY(-25px);
          animation-delay: 1.5s;
        }

        /* Center of rose */
        .rose__center {
          position: absolute;
          width: 15px;
          height: 15px;
          background: radial-gradient(circle at 30% 30%, #ff69b4, #c71585);
          border-radius: 50%;
          bottom: -7.5px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          box-shadow: 0 0 10px rgba(255, 20, 147, 0.5);
        }

        @keyframes petalBlooming {
          0% {
            transform: translateX(-50%) rotate(var(--rotate)) translateY(0px) scale(0);
            opacity: 0;
          }
          100% {
            opacity: 0.9;
          }
        }

        .title {
          position: absolute;
          top: 30px;
          font-size: 45px;
          color: white;
          z-index: 999;
          text-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
        }
      `}</style>

      <h1 className="title">Rose Button Garden</h1>

      <div className="roses-container">
        <div className="roses-wrapper">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => handleRoseClick(index)}
              className={`rose ${clicked === index ? 'clicked' : ''}`}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
              type="button"
              aria-label={`Rose ${index + 1}`}
            >
              <div className="rose__petals">
                {Array.from({ length: 16 }).map((_, petalIndex) => (
                  <div key={petalIndex} className="rose__petal" />
                ))}
                <div className="rose__center" />
              </div>
              <div className="rose__stem">
                <div className="rose__stem-leaf rose__stem-leaf--1" />
                <div className="rose__stem-leaf rose__stem-leaf--2" />
                <div className="rose__stem-leaf rose__stem-leaf--3" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
