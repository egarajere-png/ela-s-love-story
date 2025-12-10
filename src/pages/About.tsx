import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import elaPortrait from "@/assets/ela-portrait.png";

const About = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  
  const sections = [
    {
      title: "My Beautiful Soul",
      text: "From the moment I first saw you, I knew there was something special about you. Your smile lights up every room, and your laughter is the sweetest melody I've ever heard. You have this incredible way of making everyone around you feel valued and loved.",
      emoji: "✨"
    },
    {
      title: "Your Kindness",
      text: "The way you care for others is truly inspiring. Your heart is so pure, so genuine. You never hesitate to help someone in need, and your compassion knows no bounds. Being with you has made me a better person.",
      emoji: "💜"
    },
    {
      title: "Your Strength",
      text: "You are stronger than you know. Through every challenge, you rise with grace and determination. Your resilience amazes me every day. You face life with such courage, and I'm so proud to be by your side.",
      emoji: "💪"
    },
    {
      title: "My Forever",
      text: "Every day with you feels like a beautiful dream. You are my best friend, my confidant, my everything. I can't imagine my life without you in it. Here's to us, to our story, and to forever.",
      emoji: "💕"
    }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-3 animate-float overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent/40">
                <img 
                  src={elaPortrait} 
                  alt="Ela Nyokabi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 text-3xl animate-pulse">💜</div>
            <div className="absolute bottom-0 left-0 text-2xl animate-pulse" style={{ animationDelay: "0.3s" }}>✨</div>
            <div className="absolute top-1/2 -right-8 text-2xl animate-pulse" style={{ animationDelay: "0.6s" }}>💕</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-calligraphy text-gradient mb-6">
            About Ela
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-calligraphy max-w-2xl mx-auto">
            The most beautiful soul I've ever known. Here's how I see you... 💜
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      {sections.map((section, index) => (
        <div 
          key={index}
          ref={(el) => { if (el) sectionRefs.current[index] = el; }}
          className="py-20 px-4"
        >
          <div className="container mx-auto">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              {/* Image */}
              <div 
                className={`flex-1 transition-all duration-1000 ${
                  visibleSections.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : index % 2 === 0 
                      ? 'opacity-0 translate-x-20' 
                      : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center border-2 border-primary/30">
                    <span className="text-6xl md:text-8xl">{section.emoji}</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div 
                className={`flex-1 text-center md:text-left transition-all duration-1000 ${
                  visibleSections.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : index % 2 === 0 
                      ? 'opacity-0 -translate-x-20' 
                      : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <h2 className="text-3xl md:text-4xl font-calligraphy text-gradient mb-6">
                  {section.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-elegant leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default About;