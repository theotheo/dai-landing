import React, { useState, useEffect } from "react";

const GlitchLogo = () => {
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
      });
      setTimeout(() => setGlitchOffset({ x: 0, y: 0 }), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-96 h-96 relative">
      {/* Фоновое свечение */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent opacity-20 animate-pulse" />

      {/* Базовое изображение */}
      <img
        src={`${import.meta.env.BASE_URL}dai.png`}
        alt="Logo Image"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Глитч-слои изображения */}
      <img
        src={`${import.meta.env.BASE_URL}dai.png`}
        alt="Logo Image Glitch 1"
        className="absolute inset-0 w-full h-full object-cover z-20 mix-blend-screen"
        style={{
          transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
          opacity: glitchOffset.x !== 0 ? 0.5 : 0,
          filter: "hue-rotate(90deg)",
        }}
      />

      <img
        src={`${import.meta.env.BASE_URL}dai.png`}
        alt="Logo Image Glitch 2"
        className="absolute inset-0 w-full h-full object-cover z-20 mix-blend-screen"
        style={{
          transform: `translate(${-glitchOffset.x}px, ${-glitchOffset.y}px)`,
          opacity: glitchOffset.x !== 0 ? 0.5 : 0,
          filter: "hue-rotate(-90deg)",
        }}
      />

      {/* SVG Рамка с глитч-эффектом */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full absolute z-30"
        style={{
          filter: "drop-shadow(0 0 10px rgba(249, 115, 22, 0.5))",
        }}
      >
        {/* Фоновая версия рамки для эффекта глитча */}
        {/* <g
          style={{
            transform: `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`,
            opacity: glitchOffset.x !== 0 ? 0.5 : 0,
          }}
        >
          <path
            d="M40 40 L160 40 L160 160 L40 160 Z"
            fill="none"
            stroke="#f97316"
            strokeWidth="4"
          />
          <text
            x="100"
            y="110"
            fill="#f97316"
            fontSize="48"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Roboto"
          >
            DA
          </text>
        </g> */}

        {/* Основная версия рамки */}
        {/* <g>
          <path
            d="M40 40 L160 40 L160 160 L40 160 Z"
            fill="none"
            stroke="#f97316"
            strokeWidth="4"
          />
          <text
            x="100"
            y="110"
            fill="#f97316"
            fontSize="48"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Roboto"
          >
            DA
          </text>
        </g> */}

        {/* Декоративные линии */}
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1="40"
            y1={40 + i * 30}
            x2="160"
            y2={40 + i * 30}
            stroke="#f97316"
            strokeWidth="0.5"
            opacity="0.3"
          />
        ))}
      </svg>

      {/* Интерактивный эффект при наведении */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-transparent opacity-0 hover:opacity-20 transition-opacity z-40" />
    </div>
  );
};

export default GlitchLogo;
