'use client';

export default function RoseButtonsPage() {
  const handleRoseClick = (roseNum: number) => {
    console.log(`Rose ${roseNum} clicked!`);
    alert(`You clicked Rose ${roseNum}!`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

        *,
        *::after,
        *::before {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :root {
          --dark-color: #000;
        }

        body {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 100vh;
          background-color: var(--dark-color);
          overflow: hidden;
          perspective: 1000px;
        }
        
        .title {
          position: absolute;
          top: 30px;
          font-size: 45px;
          color: white;
          z-index: 999;
          font-family: 'Poppins', sans-serif;
        }
        
        .night {
          position: fixed;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          filter: blur(0.1vmin);
          background-image: radial-gradient(
              ellipse at top,
              transparent 0%,
              var(--dark-color)
            ),
            radial-gradient(
              ellipse at bottom,
              var(--dark-color),
              rgba(139, 0, 0, 0.2)
            ),
            repeating-linear-gradient(
              220deg,
              black 0px,
              black 19px,
              transparent 19px,
              transparent 22px
            ),
            repeating-linear-gradient(
              189deg,
              black 0px,
              black 19px,
              transparent 19px,
              transparent 22px
            ),
            repeating-linear-gradient(
              148deg,
              black 0px,
              black 19px,
              transparent 19px,
              transparent 22px
            ),
            linear-gradient(90deg, #ff1744, #f0f0f0);
        }

        .flowers {
          position: relative;
          transform: scale(0.9);
        }

        .flower {
          position: absolute;
          bottom: 10vmin;
          transform-origin: bottom center;
          z-index: 10;
          --fl-speed: 0.8s;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          transition: filter 0.3s ease;
        }

        .flower:hover {
          filter: brightness(1.2);
        }

        .flower--1 {
          animation: moving-flower-1 4s linear infinite;
        }
        .flower--1 .flower__line {
          height: 70vmin;
          animation-delay: 0.3s;
        }
        .flower--1 .flower__line__leaf--1 {
          animation: blooming-leaf-right var(--fl-speed) 1.6s backwards;
        }
        .flower--1 .flower__line__leaf--2 {
          animation: blooming-leaf-right var(--fl-speed) 1.4s backwards;
        }
        .flower--1 .flower__line__leaf--3 {
          animation: blooming-leaf-left var(--fl-speed) 1.2s backwards;
        }
        .flower--1 .flower__line__leaf--4 {
          animation: blooming-leaf-left var(--fl-speed) 1s backwards;
        }
        .flower--1 .flower__line__leaf--5 {
          animation: blooming-leaf-right var(--fl-speed) 1.8s backwards;
        }
        .flower--1 .flower__line__leaf--6 {
          animation: blooming-leaf-left var(--fl-speed) 2s backwards;
        }
        .flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation: moving-flower-2 4s linear infinite;
        }
        .flower--2 .flower__line {
          height: 60vmin;
          animation-delay: 0.6s;
        }
        .flower--2 .flower__line__leaf--1 {
          animation: blooming-leaf-right var(--fl-speed) 1.9s backwards;
        }
        .flower--2 .flower__line__leaf--2 {
          animation: blooming-leaf-right var(--fl-speed) 1.7s backwards;
        }
        .flower--2 .flower__line__leaf--3 {
          animation: blooming-leaf-left var(--fl-speed) 1.5s backwards;
        }
        .flower--2 .flower__line__leaf--4 {
          animation: blooming-leaf-left var(--fl-speed) 1.3s backwards;
        }
        .flower--3 {
          left: 50%;
          transform: rotate(-15deg);
          animation: moving-flower-3 4s linear infinite;
        }
        .flower--3 .flower__line {
          animation-delay: 0.9s;
        }
        .flower--3 .flower__line__leaf--1 {
          animation: blooming-leaf-right var(--fl-speed) 2.5s backwards;
        }
        .flower--3 .flower__line__leaf--2 {
          animation: blooming-leaf-right var(--fl-speed) 2.3s backwards;
        }
        .flower--3 .flower__line__leaf--3 {
          animation: blooming-leaf-left var(--fl-speed) 2.1s backwards;
        }
        .flower--3 .flower__line__leaf--4 {
          animation: blooming-leaf-left var(--fl-speed) 1.9s backwards;
        }
        .flower__leafs {
          position: relative;
          animation: blooming-flower 2s backwards;
        }
        .flower__leafs--1 {
          animation-delay: 1.1s;
        }
        .flower__leafs--2 {
          animation-delay: 1.4s;
        }
        .flower__leafs--3 {
          animation-delay: 1.7s;
        }
        .flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background-color: #ff1744;
          filter: blur(10vmin);
        }
        .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53%/44% 45% 55% 69%;
          background-color: #ff69b4;
          background-image: linear-gradient(to top, #c41e3a, #ff1744);
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }
        .flower__leaf--1 {
          transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
        }
        .flower__leaf--2 {
          transform: translate(-50%, -4%) rotateX(40deg);
        }
        .flower__leaf--3 {
          transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
        }
        .flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(to top, #ff1744, #ff69b4);
          z-index: 1;
          opacity: 0.8;
        }
        .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background-color: #ffd700;
        }
        .flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background-image: repeating-linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              67.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              112.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              112.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              22.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              22.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              135deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              157.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              67.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            repeating-linear-gradient(
              67.5deg,
              rgba(0, 0, 0, 0.03) 0px,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 12px
            ),
            linear-gradient(90deg, #ffeb12, #ffce00);
        }
        .flower__line {
          height: 55vmin;
          width: 1.5vmin;
          background-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 0.2),
              transparent,
              rgba(255, 255, 255, 0.2)
            ),
            linear-gradient(to top, transparent 10%, #228B22, #32CD32);
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }
        .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(
            to top,
            rgba(34, 139, 34, 0.4),
            #32CD32
          );
        }
        .flower__line__leaf--1 {
          transform: rotate(70deg) rotateY(30deg);
        }
        .flower__line__leaf--2 {
          top: 45%;
          transform: rotate(70deg) rotateY(30deg);
        }
        .flower__line__leaf--3,
        .flower__line__leaf--4,
        .flower__line__leaf--6 {
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
          border-top-left-radius: var(--h);
          border-bottom-right-radius: var(--h);
          left: -460%;
          top: 12%;
          transform: rotate(-70deg) rotateY(30deg);
        }
        .flower__line__leaf--4 {
          top: 40%;
        }
        .flower__line__leaf--5 {
          top: 0;
          transform-origin: left;
          transform: rotate(70deg) rotateY(30deg) scale(0.6);
        }
        .flower__line__leaf--6 {
          top: -2%;
          left: -450%;
          transform-origin: right;
          transform: rotate(-70deg) rotateY(30deg) scale(0.6);
        }
        .flower__light {
          position: absolute;
          bottom: 0vmin;
          width: 1vmin;
          height: 1vmin;
          background-color: #ff1744;
          border-radius: 50%;
          filter: blur(0.2vmin);
          animation: light-ans 4s linear infinite backwards;
        }
        .flower__light:nth-child(odd) {
          background-color: #ff69b4;
        }
        .flower__light--1 {
          left: -2vmin;
          animation-delay: 1s;
        }
        .flower__light--2 {
          left: 3vmin;
          animation-delay: 0.5s;
        }
        .flower__light--3 {
          left: -6vmin;
          animation-delay: 0.3s;
        }
        .flower__light--4 {
          left: 6vmin;
          animation-delay: 0.9s;
        }
        .flower__light--5 {
          left: -1vmin;
          animation-delay: 1.5s;
        }
        .flower__light--6 {
          left: -4vmin;
          animation-delay: 3s;
        }
        .flower__light--7 {
          left: 3vmin;
          animation-delay: 2s;
        }
        .flower__light--8 {
          left: -6vmin;
          animation-delay: 3.5s;
        }
        .flower__grass {
          --c: #228B22;
          --line-w: 1.5vmin;
          position: absolute;
          bottom: 12vmin;
          left: -7vmin;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          z-index: 20;
          transform-origin: bottom center;
          transform: rotate(-48deg) rotateY(40deg);
        }
        .flower__grass--1 {
          animation: moving-grass 2s linear infinite;
        }
        .flower__grass--2 {
          left: 2vmin;
          bottom: 10vmin;
          transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
          opacity: 0.8;
          z-index: 0;
          animation: moving-grass--2 1.5s linear infinite;
        }
        .flower__grass--top {
          width: 7vmin;
          height: 10vmin;
          border-top-right-radius: 100%;
          border-right: var(--line-w) solid var(--c);
          transform-origin: bottom center;
          transform: rotate(-2deg);
        }
        .flower__grass--bottom {
          margin-top: -2px;
          width: var(--line-w);
          height: 25vmin;
          background-image: linear-gradient(to top, transparent, var(--c));
        }
        .flower__grass__leaf {
          --size: 10vmin;
          position: absolute;
          width: calc(var(--size) * 2.1);
          height: var(--size);
          border-top-left-radius: var(--size);
          border-top-right-radius: var(--size);
          background-image: linear-gradient(
            to top,
            transparent,
            transparent 30%,
            var(--c)
          );
          z-index: 100;
        }
        .flower__grass__leaf--1 {
          top: -6%;
          left: 30%;
          --size: 6vmin;
          transform: rotate(-20deg);
          animation: growing-grass-ans--1 2s 2.6s backwards;
        }
        @keyframes growing-grass-ans--1 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-20deg) scale(0);
          }
        }
        .flower__grass__leaf--2 {
          top: -5%;
          left: -110%;
          --size: 6vmin;
          transform: rotate(10deg);
          animation: growing-grass-ans--2 2s 2.4s linear backwards;
        }
        @keyframes growing-grass-ans--2 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }
        .flower__grass__leaf--3 {
          top: 5%;
          left: 60%;
          --size: 8vmin;
          transform: rotate(-18deg) rotateX(-20deg);
          animation: growing-grass-ans--3 2s 2.2s linear backwards;
        }
        @keyframes growing-grass-ans--3 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-18deg) rotateX(-20deg) scale(0);
          }
        }
        .flower__grass__leaf--4 {
          top: 6%;
          left: -135%;
          --size: 8vmin;
          transform: rotate(2deg);
          animation: growing-grass-ans--4 2s 2s linear backwards;
        }
        @keyframes growing-grass-ans--4 {
          0% {
            transform-origin: bottom right;
            transform: rotate(2deg) scale(0);
          }
        }
        .flower__grass__leaf--5 {
          top: 20%;
          left: 60%;
          --size: 10vmin;
          transform: rotate(-24deg) rotateX(-20deg);
          animation: growing-grass-ans--5 2s 1.8s linear backwards;
        }
        @keyframes growing-grass-ans--5 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-24deg) rotateX(-20deg) scale(0);
          }
        }
        .flower__grass__leaf--6 {
          top: 22%;
          left: -180%;
          --size: 10vmin;
          transform: rotate(10deg);
          animation: growing-grass-ans--6 2s 1.6s linear backwards;
        }
        @keyframes growing-grass-ans--6 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }
        .flower__grass__leaf--7 {
          top: 39%;
          left: 70%;
          --size: 10vmin;
          transform: rotate(-10deg);
          animation: growing-grass-ans--7 2s 1.4s linear backwards;
        }
        @keyframes growing-grass-ans--7 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-10deg) scale(0);
          }
        }
        .flower__grass__leaf--8 {
          top: 40%;
          left: -215%;
          --size: 11vmin;
          transform: rotate(10deg);
          animation: growing-grass-ans--8 2s 1.2s linear backwards;
        }
        @keyframes growing-grass-ans--8 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }
        .flower__grass__overlay {
          position: absolute;
          top: -10%;
          right: 0%;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          filter: blur(1.5vmin);
          z-index: 100;
        }
        .flower__g-long {
          --w: 2vmin;
          --h: 6vmin;
          --c: #228B22;
          position: absolute;
          bottom: 10vmin;
          left: -3vmin;
          transform-origin: bottom center;
          transform: rotate(-30deg) rotateY(-20deg);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          animation: flower-g-long-ans 3s linear infinite;
        }
        @keyframes flower-g-long-ans {
          0%,
          100% {
            transform: rotate(-30deg) rotateY(-20deg);
          }
          50% {
            transform: rotate(-32deg) rotateY(-20deg);
          }
        }
        .flower__g-long__top {
          top: calc(var(--h) * -1);
          width: calc(var(--w) + 1vmin);
          height: var(--h);
          border-top-right-radius: 100%;
          border-right: 0.7vmin solid var(--c);
          transform: translate(-0.7vmin, 1vmin);
        }
        .flower__g-long__bottom {
          width: var(--w);
          height: 50vmin;
          transform-origin: bottom center;
          background-image: linear-gradient(to top, transparent 30%, var(--c));
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          clip-path: polygon(35% 0, 65% 1%, 100% 100%, 0% 100%);
        }
        .flower__g-right {
          position: absolute;
          bottom: 6vmin;
          left: -2vmin;
          transform-origin: bottom left;
          transform: rotate(20deg);
        }
        .flower__g-right .leaf {
          width: 30vmin;
          height: 50vmin;
          border-top-left-radius: 100%;
          border-left: 2vmin solid #228B22;
          background-image: linear-gradient(
            to bottom,
            transparent,
            var(--dark-color) 60%
          );
          -webkit-mask-image: linear-gradient(
            to top,
            transparent 30%,
            #228B22 60%
          );
        }
        .flower__g-right--1 {
          animation: flower-g-right-ans 2.5s linear infinite;
        }
        .flower__g-right--2 {
          left: 5vmin;
          transform: rotateY(-180deg);
          animation: flower-g-right-ans--2 3s linear infinite;
        }
        .flower__g-right--2 .leaf {
          height: 75vmin;
          filter: blur(0.3vmin);
          opacity: 0.8;
        }
        @keyframes flower-g-right-ans {
          0%,
          100% {
            transform: rotate(20deg);
          }
          50% {
            transform: rotate(24deg) rotateX(-20deg);
          }
        }
        @keyframes flower-g-right-ans--2 {
          0%,
          100% {
            transform: rotateY(-180deg);
          }
          50% {
            transform: rotateY(-180deg) rotateX(-20deg);
          }
        }
        @keyframes moving-flower-1 {
          0%,
          100% {
            left: -30vmin;
          }
          50% {
            left: -20vmin;
          }
        }
        @keyframes moving-flower-2 {
          0%,
          100% {
            left: 50%;
            transform: rotate(20deg);
          }
          50% {
            left: 40%;
            transform: rotate(20deg) rotateZ(-5deg);
          }
        }
        @keyframes moving-flower-3 {
          0%,
          100% {
            left: 50%;
            transform: rotate(-15deg);
          }
          50% {
            left: 60%;
            transform: rotate(-15deg) rotateZ(5deg);
          }
        }
        @keyframes blooming-flower {
          0% {
            opacity: 0;
            transform: scale(0);
          }
        }
        @keyframes blooming-leaf-right {
          0% {
            opacity: 0;
            transform: translateX(-5vmin) rotateZ(-20deg) scale(0);
          }
        }
        @keyframes blooming-leaf-left {
          0% {
            opacity: 0;
            transform: translateX(5vmin) rotateZ(20deg) scale(0);
          }
        }
        @keyframes grow-flower-tree {
          0% {
            height: 0;
          }
        }
        @keyframes light-ans {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-20vmin);
          }
        }
        @keyframes moving-grass {
          0%,
          100% {
            transform: rotate(-48deg) rotateY(40deg);
          }
          50% {
            transform: rotate(-50deg) rotateY(40deg);
          }
        }
        @keyframes moving-grass--2 {
          0%,
          100% {
            transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg);
          }
          50% {
            transform: scale(0.5) rotate(72deg) rotateX(10deg) rotateY(-200deg);
          }
        }
      `}</style>
      <div className="night"></div>
      <h1 className="title">Rose Buttons</h1>
      <div className="flowers">
        {[1, 2, 3].map((roseNum) => (
          <button
            key={roseNum}
            className={`flower flower--${roseNum}`}
            onClick={() => handleRoseClick(roseNum)}
          >
            <div className="flower__line">
              {[1, 2, 3, 4, 5, 6].map((leafNum) => (
                <div
                  key={leafNum}
                  className={`flower__line__leaf flower__line__leaf--${leafNum}`}
                ></div>
              ))}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((lightNum) => (
                <div
                  key={lightNum}
                  className={`flower__light flower__light--${lightNum}`}
                ></div>
              ))}
            </div>
            <div className="flower__grass flower__grass--1">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((leafNum) => (
                  <div
                    key={leafNum}
                    className={`flower__grass__leaf flower__grass__leaf--${leafNum}`}
                  ></div>
                ))}
                <div className="flower__grass__overlay"></div>
              </div>
            </div>
            <div className="flower__grass flower__grass--2">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
            </div>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
            <div className="flower__g-right flower__g-right--1">
              <div className="leaf"></div>
            </div>
            <div className="flower__g-right flower__g-right--2">
              <div className="leaf"></div>
            </div>
            {[1, 2, 3].map((leafNum) => (
              <div key={leafNum} className={`flower__leafs flower__leafs--${leafNum}`}>
                {[1, 2, 3, 4].map((petNum) => (
                  <div key={petNum} className={`flower__leaf flower__leaf--${petNum}`}></div>
                ))}
                <div className="flower__white-circle"></div>
              </div>
            ))}
          </button>
        ))}
      </div>
    </>
  );
}
