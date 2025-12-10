import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

const FallingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 50; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 4,
          size: 10 + Math.random() * 30,
          delay: Math.random() * 5,
        });
      }
      setHearts(newHearts);
    };

    createHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-accent"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.animationDuration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          💜
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;