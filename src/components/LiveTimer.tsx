import { useEffect, useState } from "react";

const LiveTimer = () => {
  const startDate = new Date("2025-11-19T00:00:00");
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    progress: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      // Progress toward 1 year
      const oneYear = 365 * 24 * 60 * 60 * 1000;
      const progress = Math.min((diff / oneYear) * 100, 100);

      setTimeTogether({ days, hours, minutes, seconds, progress });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { value: timeTogether.days, label: "Days" },
    { value: timeTogether.hours, label: "Hours" },
    { value: timeTogether.minutes, label: "Minutes" },
    { value: timeTogether.seconds, label: "Seconds" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeBlocks.map((block, index) => (
          <div 
            key={block.label}
            className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-primary/20 glow-purple"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-3xl md:text-4xl font-calligraphy text-gradient">
              {block.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground font-calligraphy">
              {block.label}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm font-calligraphy text-muted-foreground">
          <span>Progress to 1 Year 💜</span>
          <span>{timeTogether.progress.toFixed(2)}%</span>
        </div>
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-1000 rounded-full"
            style={{ width: `${timeTogether.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LiveTimer;