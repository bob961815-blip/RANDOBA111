export function ModernEqualizer() {
  // Create 40 bars for a fuller, more modern look
  const bars = Array.from({ length: 40 }, (_, i) => i);

  return (
    <>
      {/* Global CSS for modern equalizer animations */}
      <style>
        {`
          @keyframes modern-eq-1 {
            0%, 100% { 
              transform: scaleY(0.2);
              filter: hue-rotate(0deg);
            }
            25% { 
              transform: scaleY(1);
              filter: hue-rotate(90deg);
            }
            50% { 
              transform: scaleY(0.6);
              filter: hue-rotate(180deg);
            }
            75% { 
              transform: scaleY(0.8);
              filter: hue-rotate(270deg);
            }
          }
          @keyframes modern-eq-2 {
            0%, 100% { 
              transform: scaleY(0.4);
              filter: hue-rotate(45deg);
            }
            20% { 
              transform: scaleY(0.9);
              filter: hue-rotate(135deg);
            }
            40% { 
              transform: scaleY(1);
              filter: hue-rotate(225deg);
            }
            60% { 
              transform: scaleY(0.3);
              filter: hue-rotate(315deg);
            }
            80% { 
              transform: scaleY(0.7);
              filter: hue-rotate(45deg);
            }
          }
          @keyframes modern-eq-3 {
            0%, 100% { 
              transform: scaleY(0.3);
              filter: hue-rotate(90deg);
            }
            30% { 
              transform: scaleY(0.95);
              filter: hue-rotate(180deg);
            }
            60% { 
              transform: scaleY(0.2);
              filter: hue-rotate(270deg);
            }
            90% { 
              transform: scaleY(1);
              filter: hue-rotate(360deg);
            }
          }
          @keyframes modern-eq-4 {
            0%, 100% { 
              transform: scaleY(0.5);
              filter: hue-rotate(135deg);
            }
            15% { 
              transform: scaleY(0.25);
              filter: hue-rotate(225deg);
            }
            35% { 
              transform: scaleY(1);
              filter: hue-rotate(315deg);
            }
            55% { 
              transform: scaleY(0.6);
              filter: hue-rotate(45deg);
            }
            75% { 
              transform: scaleY(0.85);
              filter: hue-rotate(135deg);
            }
          }
          @keyframes modern-eq-5 {
            0%, 100% { 
              transform: scaleY(0.15);
              filter: hue-rotate(180deg);
            }
            25% { 
              transform: scaleY(0.8);
              filter: hue-rotate(270deg);
            }
            50% { 
              transform: scaleY(1);
              filter: hue-rotate(360deg);
            }
            75% { 
              transform: scaleY(0.45);
              filter: hue-rotate(90deg);
            }
          }
          @keyframes modern-eq-6 {
            0%, 100% { 
              transform: scaleY(0.35);
              filter: hue-rotate(225deg);
            }
            33% { 
              transform: scaleY(0.9);
              filter: hue-rotate(315deg);
            }
            66% { 
              transform: scaleY(0.6);
              filter: hue-rotate(45deg);
            }
          }

          .modern-equalizer-bar {
            transform-origin: bottom;
            background: linear-gradient(to top, #00d4ff, #0066ff, #9933ff, #ff0080);
            background-size: 100% 400%;
            filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5));
          }

          .modern-equalizer-container {
            filter: drop-shadow(0 4px 20px rgba(0, 150, 255, 0.3));
          }

          @keyframes glow-pulse {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.5)); }
            50% { filter: drop-shadow(0 0 25px rgba(255, 0, 128, 0.8)); }
          }
        `}
      </style>

      {/* Modern Equalizer bars */}
      <div className="modern-equalizer-container flex items-end justify-center space-x-1">
        {bars.map((bar, index) => {
          const animationName = `modern-eq-${(index % 6) + 1}`;
          const duration = 0.6 + (Math.random() * 1.2); // 0.6s to 1.8s
          const delay = Math.random() * 2; // 0 to 2s delay
          const height = 30 + (index % 3) * 20; // Varying heights: 30px, 50px, 70px

          return (
            <div
              key={bar}
              className="modern-equalizer-bar rounded-t-lg"
              style={{
                width: '3px',
                height: `${height}px`,
                animation: `${animationName} ${duration}s ease-in-out infinite, glow-pulse 3s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                backgroundPosition: `0 ${(index % 4) * 25}%`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
