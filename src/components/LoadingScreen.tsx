import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState(0);
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState(false);
  const [counting, setCounting] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (stage < 2) {
      const timer = setTimeout(() => setStage(stage + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  useEffect(() => {
    if (counting) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onComplete, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [counting, onComplete]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "191125") {
      setCounting(true);
    } else {
      setError(true);
      setShowHint(true);
    }
  };

  const messages = [
    "Wow… Naskia nervous…",
    "But before we begin, let's see if you still remember:"
  ];

  if (counting) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-calligraphy text-gradient animate-heartbeat">
            {count}%
          </div>
          <div className="mt-8 w-64 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
              style={{ width: `${count}%` }}
            />
          </div>
          <p className="mt-6 text-muted-foreground font-calligraphy text-xl animate-pulse">
            Loading our love story...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full space-y-8">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`text-2xl md:text-3xl font-calligraphy text-foreground transition-all duration-1000 ${
              stage >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 0.3}s` }}
          >
            {msg}
          </p>
        ))}

        <form 
          onSubmit={handleSubmit}
          className={`space-y-4 transition-all duration-1000 ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Input
            type="password"
            placeholder="Enter the secret date..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className={`text-center text-xl font-calligraphy bg-secondary/50 border-primary/30 focus:border-primary h-14 ${
              error ? "border-destructive animate-shake" : ""
            }`}
          />
          
          {showHint && (
            <p className="text-accent font-calligraphy animate-fade-up">
              💜 Hint: What? Umesahau the day we became official?
            </p>
          )}

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-calligraphy bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            Unlock Our Story 💜
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoadingScreen;