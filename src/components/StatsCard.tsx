import AnimatedCounter from "./AnimatedCounter";

interface StatsCardProps {
  title: string;
  value: number;
  emoji: string;
  delay?: number;
}

const StatsCard = ({ title, value, emoji, delay = 0 }: StatsCardProps) => {
  return (
    <div 
      className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:glow-purple group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl mb-3 group-hover:animate-heartbeat">
        {emoji}
      </div>
      <div className="text-4xl md:text-5xl font-calligraphy text-gradient mb-2">
        <AnimatedCounter end={value} duration={2500} />
      </div>
      <p className="text-sm md:text-base text-muted-foreground font-calligraphy">
        {title}
      </p>
    </div>
  );
};

export default StatsCard;