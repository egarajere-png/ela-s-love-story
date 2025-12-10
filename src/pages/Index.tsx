import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveTimer from "@/components/LiveTimer";
import StatsCard from "@/components/StatsCard";
import LoadingScreen from "@/components/LoadingScreen";
import coupleHero from "@/assets/couple-hero.png";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const stats = [
    { title: "Times we've said 'I love you'", value: 11, emoji: "💜" },
    { title: "Flirty conversations", value: 206, emoji: "😏" },
    { title: "Meet ups", value: 3, emoji: "🫂" },
    { title: "Kisses had", value: 1000, emoji: "💋" },
    { title: "Interesting convos", value: 57, emoji: "💭" },
    { title: "Days of pure happiness", value: 21, emoji: "✨" },
  ];

  if (!isAuthenticated) {
    return <LoadingScreen onComplete={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 p-2 animate-float overflow-hidden">
              <div className="w-full h-full rounded-full animate-heartbeat overflow-hidden border-4 border-primary/40">
                <img 
                  src={coupleHero} 
                  alt="Our Love Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 text-4xl animate-pulse">💜</div>
            <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse" style={{ animationDelay: "0.5s" }}>✨</div>
          </div>

          <h1 className="text-5xl md:text-7xl font-calligraphy text-gradient mb-4 animate-fade-up">
            Time Together
          </h1>
          <p className="text-xl text-muted-foreground font-calligraphy mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Every second with you is a gift 💜
          </p>

          <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <LiveTimer />
          </div>
        </div>
      </section>

      {/* Stats Section - Wrapped Style */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-calligraphy text-center text-gradient mb-12">
            Our Love Wrapped 💜
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                emoji={stat.emoji}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;