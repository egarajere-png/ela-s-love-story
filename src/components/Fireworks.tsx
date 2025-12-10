import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

const Fireworks = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(280, 70%, 60%)", // primary purple
      "hsl(320, 80%, 65%)", // accent pink
      "hsl(330, 85%, 70%)", // love pink
      "hsl(260, 60%, 55%)", // deep purple
    ];

    const createFirework = (x: number, y: number) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: Date.now() + i,
          x,
          y,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 4 + Math.random() * 6,
          angle: (i / 20) * Math.PI * 2,
          speed: 2 + Math.random() * 3,
        });
      }
      return newParticles;
    };

    const interval = setInterval(() => {
      const x = 10 + Math.random() * 80;
      const y = 10 + Math.random() * 50;
      setParticles((prev) => [...prev.slice(-100), ...createFirework(x, y)]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animation: "firework 1s ease-out forwards",
            transform: `translate(${Math.cos(particle.angle) * 100}px, ${Math.sin(particle.angle) * 100}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireworks;