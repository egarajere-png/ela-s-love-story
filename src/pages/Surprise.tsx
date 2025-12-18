import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import FallingHearts from "@/components/FallingHearts";
import Fireworks from "@/components/Fireworks";

const Surprise = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [textComplete, setTextComplete] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const pages = [
    {
      title: "HELLOOOWWSS",
      gif: "👋",
      lines: [
        "Hayaaa....sasa wacha tukuwe serious....",
        "You ready BIgman for your surprise?",
        "so I decided ttry something new, which i havent done before and make this lil interactive surprise for you.",
        "Hope you like it 💜"
      ]
    },
    {
      title: "You're special.",
      gif: "✨",
      lines: [
        "There's something about you —",
        "the way you smile, the way you talk, the way you exist — i dont know how  but it seems to make my world brighter when your in it.",
        "You have this incredible ability to make people feel seen and valued, and I just want you to know that you are truly special to me."
      ]
    },
    {
      title: "You make me feel…",
      gif: "💜",
      lines: [
        "Whenever I think of you, I feel calm, happy, and excited all at once.",
        "You make even the simplest moments feel meaningful and i would like to cherish them with you"
      ]
    },
    {
      title: "I've been thinking…",
      gif: "💭",
      lines: [
        "The more time I spend with you,",
        "the more I realize how much I truly care about you. Making me simp so hard mahnn damn...",
        "And how much I'd love to be closer to you and know you even better."
      ]
    },
    {
      title: "So here it is…",
      gif: "💗",
      lines: [
        "This is the part where we both stop overthinking,",
        "stop hesitating, no biting around the bush",
        "and just say what our hearts have been wanting to say."
      ]
    },
    {
      title: "❤️ Will you be my girlfriend? ❤️",
      gif: "💕",
      lines: [],
      isFinal: true
    }
  ];

  const currentData = pages[currentPage];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  useEffect(() => {
    setTextComplete(false);
  }, [currentPage]);

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    setNoButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2
    });
  }, []);

  const handleYesClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowCelebration(true);
      setTimeout(() => {
        navigate("/");
      }, 8000);
    }, 5000);
  };

  if (isLoading && !showCelebration) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl animate-heartbeat mb-8">💜</div>
          <p className="text-2xl font-calligraphy text-gradient animate-pulse">
            Yaani ulichangua no?.....Hio haingeweza make (lol)
          </p>
        </div>
      </div>
    );
  }

  if (showCelebration) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center overflow-hidden">
        <FallingHearts />
        <Fireworks />
        <div className="text-center z-50 px-4">
          <div className="text-8xl md:text-9xl mb-8 animate-heartbeat">🎉</div>
          <h1 className="text-4xl md:text-6xl font-calligraphy text-gradient mb-6">
            Thank you babe. You now have a BoyFriend
          </h1>
          <p className="text-2xl font-calligraphy text-accent mb-8">
            I can't wait for this new chapter with you 💜
          </p>
          <p className="text-muted-foreground font-calligraphy animate-pulse">
            Redirecting to Homepage...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-1000 ${
      currentPage % 2 === 0 ? 'bg-background' : 'bg-card'
    }`}>
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full text-center">
          {/* GIF/Emoji */}
          <div className="text-7xl md:text-9xl mb-8 animate-float">
            {currentData.gif}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-calligraphy text-gradient mb-8 animate-fade-up">
            {currentData.title}
          </h1>

          {/* Text Content */}
          {!currentData.isFinal && (
            <div className="space-y-4 min-h-[150px]">
              {currentData.lines.map((line, index) => (
                <p 
                  key={index}
                  className="text-xl md:text-2xl font-calligraphy text-muted-foreground"
                  style={{ 
                    opacity: textComplete ? 1 : 0,
                    animation: textComplete ? 'none' : `fadeUp 0.8s ease-out ${index * 0.8}s forwards`
                  }}
                >
                  {index === 0 ? (
                    <TypewriterText 
                      text={line} 
                      speed={40}
                      onComplete={() => setTextComplete(true)}
                    />
                  ) : textComplete ? (
                    line
                  ) : null}
                </p>
              ))}
            </div>
          )}

          {/* Final Page - Yes/No Buttons */}
          {currentData.isFinal && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <Button
                onClick={handleYesClick}
                className="text-2xl px-12 py-8 font-calligraphy bg-gradient-to-r from-primary to-accent hover:scale-110 transition-all duration-300 glow-purple"
              >
                Yes! 💜
              </Button>
              <Button
                variant="outline"
                className="text-xl px-8 py-6 font-calligraphy border-muted-foreground/50 hover:border-primary transition-all duration-300"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) scale(${1 - Math.abs(noButtonPosition.x + noButtonPosition.y) / 2000})`,
                }}
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
              >
                No
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      {!currentData.isFinal && (
        <div className="flex justify-between items-center p-6">
          <Button
            variant="ghost"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={isFirstPage}
            className="font-calligraphy gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>
          
          <div className="flex gap-2">
            {pages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-primary w-6' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={isLastPage}
            className="font-calligraphy gap-2"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Surprise;