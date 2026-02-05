import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import elaPortrait from "@/assets/ela1.png";

// Import your section images here - add files to src/assets/ with these names:
import aboutKindness from "@/assets/ela2.png";
import aboutStrength from "@/assets/ela3.png";
import aboutForever from "@/assets/ela5.png";

// Add your imported images to this array (one per section)
const sectionImages = [
  elaPortrait,  // "My Beautiful Soul"
  aboutKindness,  // "Your Kindness" - replace with aboutKindness
  aboutStrength,  // "Your Strength" - replace with aboutStrength
  aboutForever,  // "My Forever" - replace with aboutForever
];

const About = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  
  const sections = [
    {
      title: "'The eyes chico...they never lie' -Scarface",
      text: "They say the eyes are the windows to the soul, and every time I look into yours, aki sijui... nachizingi tuh but the feel warm kind and filled with so much love, depth, and endless love. Every time I look into them, I see a future filled with happiness and warmth as it shows its reflection back to me. Your eyes captivate me, drawing me closer to you with every glance. AAHHHH nimekuwa too lobey doby....tuingie kitu inginee....✨",
      emoji: "✨"
    },
    {
      title: "Your goofy Ass ",
      text: "I really like the way we can talk about anything and everything BILA FILTER. your funny, (sio kunishinda tho..) smart and really observant. You take note about what we talk about and remember it. Its some thing i really ddidnt receive as much in my past relationships. But im glad i get to experience this with you. The way you care for others (even me) is truly inspiring. Your heart is so pure, so genuine. You never hesitate to help someone in need, and your compassion knows no bounds.Nakumbuka adi nikikuambia and amma say it again. You can make someone be a better version of themselves for you by just being you and I love that. I hope I am the same to you",
      emoji: "💜"
    },
    {
      title: "Your Strength and resilience",
      text: "You are REALLY STRONG (Emotionally) stronger than me. Through every challenges that you've had with some useles men and still having the heart to be in another relationship, I'll call myself so lucky ngl. Your resilience amazes me every day. You face life with such courage, and I'm so proud of you and to be in your life is such a priviledge. Thank you. And i will never leave your side.",
      emoji: "💪"
    },
    {
      title: "Your Pure Heart",
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
              About Madam Ela
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-calligraphy max-w-2xl mx-auto">
            HAYAAAA FAYA SI FAYAAA.......NOMA SI NOMAAA.....I have to hype you up kidogo. Sijui nikuwe lovey dobey ama nikuwe Jokes...Lemme be both. Hope your ready my dear  💜
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
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1 overflow-hidden">
                  <div className="w-full h-full rounded-xl bg-card border-2 border-primary/30 overflow-hidden">
                    <img 
                      src={sectionImages[index]}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
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