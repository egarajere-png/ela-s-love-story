import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LiveTimer from "@/components/LiveTimer";
import StatsCard from "@/components/StatsCard";
import LoadingScreen from "@/components/LoadingScreen";
import coupleHero from "@/assets/ela5.png";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const stats = [
    { title: "Times we've simped for eache other (guess who simps the hardest....YOUUU!!) You cant convice me otherwise fr'", value: 10299837, emoji: "💜" },
    { title: "Conversations.....Enyewe sisi ni mayappers MBAYAAAA But that okay", value: 206, emoji: "😏" },
    { title: "Meet ups- This number needs to go up....IDK How but....We have to meet up more babe", value: 3, emoji: "🫂" },
    { title: "Kisses had....you keeping count?....well me neither LOL", value: 112903746, emoji: "💋" },
    { title: "Interesting convos, like the educating ones....Dont worry, this is a true one tho. i was thinking of the convos we've had and this number was where I reached", value: 57, emoji: "💭" },
    { title: "Days of pure happiness, since being official. CROCK IIITT!!!", value: 30, emoji: "✨" },
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
            Time togeter (including seconds)
          </h1>
          <p className="text-xl text-muted-foreground font-calligraphy mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A day comes after 24 hours, A week after 7 days,A year after 12 months, But a special person like you comes after a lifetime. I'm treasured to have you for eternity.
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
          {/* <p>I decided to do like some sort of Spotify wrapped of what we have shared and experienced together. Here's a look back at our journey so far.</p> */}
          
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