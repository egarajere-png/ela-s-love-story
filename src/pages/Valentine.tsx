import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Volume2, VolumeX } from "lucide-react";
import FallingHearts from "@/components/FallingHearts";
import Fireworks from "@/components/Fireworks";

// Import your images here - replace with your actual image imports
import ela1 from "@/assets/ela1.png";
import ela2 from "@/assets/ela2.png";
import ela3 from "@/assets/ela3.png";
import ela4 from "@/assets/ela4.png";
import ela5 from "@/assets/ela5.png";
import minionLovesGif from "@/assets/minion-loves.gif";

const Valentine = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonScale, setNoButtonScale] = useState(1);

  // Images to show at intervals
  const images = [ela1, ela2, ela3, ela4, ela5];

  // Phrases to show at intervals
  const phrases = [
    "Hey you... 💕",
    "I've been thinking...",
    "Will you be my Valentine? 💘",
    "It's a yes or no answer...",
  ];

  // Start the sequence
  useEffect(() => {
    if (currentPhase < phrases.length) {
      const timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1);
      }, 3000); // 3 seconds per phase
      return () => clearTimeout(timer);
    } else if (currentPhase === phrases.length) {
      // Show the question after all phrases
      setTimeout(() => setShowQuestion(true), 1000);
    }
  }, [currentPhase, phrases.length]);

  // Toggle audio
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Auto-play audio on mount (will work after user interaction)
  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    // You can set a song URL here or upload a song to assets
    // audioRef.current.src = "/path-to-your-song.mp3";
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    setNoButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2
    });
    setNoButtonScale(prev => Math.max(0.3, prev - 0.1)); // Shrink each time
  }, []);

  const handleYesClick = () => {
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setTimeout(() => {
      setShowCelebration(true);
      setTimeout(() => {
        navigate("/");
      }, 8000);
    }, 3000);
  };

  // Loading screen
  if (isLoading && !showCelebration) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl animate-heartbeat mb-8">💘</div>
          <p className="text-2xl font-calligraphy text-red-400 animate-pulse">
            Processing your love...
          </p>
        </div>
      </div>
    );
  }

  // Celebration screen
  if (showCelebration) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">
        <FallingHearts />
        <Fireworks />
        <div className="text-center z-50 px-4">
          <div className="text-8xl md:text-9xl mb-8 animate-heartbeat">💘</div>
          <h1 className="text-4xl md:text-6xl font-calligraphy text-red-400 mb-6">
            Yaaay! Happy Valentine's Day! 🎉
          </h1>
          <p className="text-2xl font-calligraphy text-red-300 mb-8">
            You just made me the happiest person 💕
          </p>
          <p className="text-muted-foreground font-calligraphy animate-pulse">
            Redirecting to Homepage...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Audio control button */}
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-red-400" />
        ) : (
          <VolumeX className="w-6 h-6 text-red-400" />
        )}
      </button>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-red-500/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="max-w-2xl w-full text-center px-4 z-10">
        {/* GIF - bigger */}
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-4 animate-heartbeat">
          <img 
            src={minionLovesGif} 
            alt="Minion Love" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Current image - smaller than GIF */}
        {currentPhase > 0 && currentPhase <= images.length && (
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-red-500/50 animate-fade-up">
            <img
              src={images[currentPhase - 1]}
              alt="Valentine"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Phrases appearing at intervals */}
        <div className="min-h-[100px] mb-8">
          {currentPhase > 0 && currentPhase <= phrases.length && (
            <p className="text-2xl md:text-4xl font-calligraphy text-red-400 animate-fade-up">
              {phrases[currentPhase - 1]}
            </p>
          )}
        </div>

        {/* Yes/No buttons - shown after all phrases */}
        {showQuestion && (
          <div className="animate-fade-up">
            <h1 className="text-3xl md:text-5xl font-calligraphy text-red-400 mb-8">
              ❤️ Will you be my Valentine? ❤️
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <Button
                onClick={handleYesClick}
                className="text-2xl px-12 py-8 font-calligraphy bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 hover:scale-110 transition-all duration-300 text-white"
                style={{
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
                }}
              >
                <Heart className="w-6 h-6 mr-2" />
                Yes! 💕
              </Button>
              
              <Button
                variant="outline"
                className="text-xl px-8 py-6 font-calligraphy border-red-500/50 text-red-400 hover:border-red-500 transition-all duration-300"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${noButtonScale})`,
                }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
              >
                No
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Valentine;
