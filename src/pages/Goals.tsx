import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Target, Heart } from "lucide-react";

interface Goal {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: "relationship" | "personal" | "adventure" | "growth";
}

const Goals = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: "1",
      title: "Travel Together",
      description: "Visit a new place we've never been to",
      completed: false,
      category: "adventure",
    },
    {
      id: "2",
      title: "Cook a Meal Together",
      description: "Make a special dinner from scratch",
      completed: false,
      category: "relationship",
    },
    {
      id: "3",
      title: "Watch Sunrise Together",
      description: "Wake up early and watch the sunrise",
      completed: false,
      category: "adventure",
    },
    {
      id: "4",
      title: "Learn Something New",
      description: "Take a class or learn a skill together",
      completed: false,
      category: "growth",
    },
    {
      id: "5",
      title: "Have a Picnic Date",
      description: "Plan a romantic outdoor picnic",
      completed: false,
      category: "relationship",
    },
    {
      id: "6",
      title: "Write Love Letters",
      description: "Write handwritten letters to each other",
      completed: false,
      category: "relationship",
    },
    {
      id: "7",
      title: "Movie Marathon",
      description: "Watch our favorite movie series together",
      completed: false,
      category: "relationship",
    },
    {
      id: "8",
      title: "Create a Scrapbook",
      description: "Document our memories in a photo album",
      completed: false,
      category: "personal",
    },
    {
      id: "9",
      title: "Dance in the Rain",
      description: "Be spontaneous and dance together",
      completed: false,
      category: "adventure",
    },
    {
      id: "10",
      title: "Stargaze Together",
      description: "Find a dark spot and watch the stars",
      completed: false,
      category: "adventure",
    },
    {
      id: "11",
      title: "Support Each Other's Dreams",
      description: "Help each other achieve personal goals",
      completed: false,
      category: "growth",
    },
    {
      id: "12",
      title: "Build Our Future",
      description: "Plan and work towards our shared dreams",
      completed: false,
      category: "growth",
    },
  ]);

  const toggleGoal = (id: string) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const completedCount = goals.filter(g => g.completed).length;
  const progress = (completedCount / goals.length) * 100;

  const getCategoryColor = (category: Goal["category"]) => {
    switch (category) {
      case "relationship":
        return "border-red-500/50";
      case "adventure":
        return "border-blue-500/50";
      case "growth":
        return "border-green-500/50";
      case "personal":
        return "border-purple-500/50";
      default:
        return "border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-calligraphy text-gradient">
                Our Goals & Dreams
              </h1>
              <Heart className="w-8 h-8 text-red-500" />
            </div>
            <p className="text-muted-foreground font-calligraphy text-lg">
              Things we want to achieve together 💜
            </p>
            
            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm font-calligraphy mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-primary">{completedCount}/{goals.length} completed</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-red-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <div
                key={goal.id}
                className={`relative p-6 rounded-lg bg-card border-2 ${getCategoryColor(goal.category)} 
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  ${goal.completed ? "opacity-70" : ""}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeUp 0.5s ease-out forwards"
                }}
              >
                {/* Checkbox */}
                <div className="flex items-start gap-4">
                  <Checkbox
                    id={goal.id}
                    checked={goal.completed}
                    onCheckedChange={() => toggleGoal(goal.id)}
                    className="mt-1 w-6 h-6 border-2 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                  />
                  <div className="flex-1">
                    <label
                      htmlFor={goal.id}
                      className={`block font-calligraphy text-xl cursor-pointer transition-all ${
                        goal.completed ? "line-through text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {goal.title}
                    </label>
                    <p className={`mt-2 font-calligraphy text-sm ${
                      goal.completed ? "text-muted-foreground/50" : "text-muted-foreground"
                    }`}>
                      {goal.description}
                    </p>
                  </div>
                </div>

                {/* Completed Badge */}
                {goal.completed && (
                  <div className="absolute top-2 right-2 text-2xl animate-heartbeat">
                    ✅
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add custom goal hint */}
          <p className="text-center text-muted-foreground font-calligraphy mt-12 text-sm">
            ✨ Check off goals as you complete them together! ✨
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Goals;
