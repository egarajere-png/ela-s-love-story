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
  const [pambiGoals, setPambiGoals] = useState<Goal[]>([
    { id: "p1", title: "Learn to cook her favorite meal", description: "Master a special dish for her", completed: false, category: "personal" },
    { id: "p2", title: "Plan surprise dates", description: "Create memorable moments", completed: false, category: "relationship" },
    { id: "p3", title: "Be more patient", description: "Practice patience in all situations", completed: false, category: "growth" },
    { id: "p4", title: "Write her love letters", description: "Express feelings through words", completed: false, category: "relationship" },
    { id: "p5", title: "Support her dreams", description: "Be her biggest cheerleader", completed: false, category: "growth" },
  ]);

  const [elaGoals, setElaGoals] = useState<Goal[]>([
    { id: "e1", title: "Learn something new together", description: "Pick up a shared hobby", completed: false, category: "growth" },
    { id: "e2", title: "Be more adventurous", description: "Try new experiences", completed: false, category: "adventure" },
    { id: "e3", title: "Practice self-care", description: "Take care of mental health", completed: false, category: "personal" },
    { id: "e4", title: "Communicate openly", description: "Share thoughts and feelings", completed: false, category: "relationship" },
    { id: "e5", title: "Create memories", description: "Document special moments", completed: false, category: "personal" },
  ]);

  const [sharedGoals, setSharedGoals] = useState<Goal[]>([
    { id: "s1", title: "Travel Together", description: "Visit a new place we've never been to", completed: false, category: "adventure" },
    { id: "s2", title: "Cook a Meal Together", description: "Make a special dinner from scratch", completed: false, category: "relationship" },
    { id: "s3", title: "Watch Sunrise Together", description: "Wake up early and watch the sunrise", completed: false, category: "adventure" },
    { id: "s4", title: "Have a Picnic Date", description: "Plan a romantic outdoor picnic", completed: false, category: "relationship" },
    { id: "s5", title: "Movie Marathon", description: "Watch our favorite movie series together", completed: false, category: "relationship" },
    { id: "s6", title: "Dance in the Rain", description: "Be spontaneous and dance together", completed: false, category: "adventure" },
    { id: "s7", title: "Stargaze Together", description: "Find a dark spot and watch the stars", completed: false, category: "adventure" },
    { id: "s8", title: "Build Our Future", description: "Plan and work towards our shared dreams", completed: false, category: "growth" },
  ]);

  const toggleGoal = (id: string, type: 'pambi' | 'ela' | 'shared') => {
    const updateGoals = (goals: Goal[]) =>
      goals.map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal);
    
    if (type === 'pambi') setPambiGoals(updateGoals(pambiGoals));
    else if (type === 'ela') setElaGoals(updateGoals(elaGoals));
    else setSharedGoals(updateGoals(sharedGoals));
  };

  const allGoals = [...pambiGoals, ...elaGoals, ...sharedGoals];
  const completedCount = allGoals.filter(g => g.completed).length;
  const progress = (completedCount / allGoals.length) * 100;

  const getCategoryColor = (category: Goal["category"]) => {
    switch (category) {
      case "relationship": return "border-destructive/50";
      case "adventure": return "border-primary/50";
      case "growth": return "border-accent/50";
      case "personal": return "border-secondary/50";
      default: return "border-border";
    }
  };

  const GoalCard = ({ goal, type }: { goal: Goal; type: 'pambi' | 'ela' | 'shared' }) => (
    <div
      className={`relative p-4 rounded-lg bg-card border-2 ${getCategoryColor(goal.category)} 
        transition-all duration-300 hover:scale-105 hover:shadow-lg
        ${goal.completed ? "opacity-70" : ""}`}
    >
      <div className="flex items-start gap-3">
        <Checkbox
          id={goal.id}
          checked={goal.completed}
          onCheckedChange={() => toggleGoal(goal.id, type)}
          className="mt-1 w-5 h-5 border-2 data-[state=checked]:bg-destructive data-[state=checked]:border-destructive"
        />
        <div className="flex-1">
          <label
            htmlFor={goal.id}
            className={`block font-calligraphy text-lg cursor-pointer transition-all ${
              goal.completed ? "line-through text-muted-foreground" : "text-foreground"
            }`}
          >
            {goal.title}
          </label>
          <p className={`mt-1 font-calligraphy text-xs ${
            goal.completed ? "text-muted-foreground/50" : "text-muted-foreground"
          }`}>
            {goal.description}
          </p>
        </div>
      </div>
      {goal.completed && (
        <div className="absolute top-2 right-2 text-lg animate-heartbeat">✅</div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-calligraphy text-gradient">
                Our Goals & Dreams
              </h1>
              <Heart className="w-8 h-8 text-destructive" />
            </div>
            <p className="text-muted-foreground font-calligraphy text-lg">
              Things we want to achieve together 💜
            </p>
            
            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm font-calligraphy mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-primary">{completedCount}/{allGoals.length} completed</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-destructive transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Individual Goals - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pambi's Goals */}
            <div className="bg-card/50 rounded-xl p-6 border border-primary/30">
              <h2 className="text-2xl font-calligraphy text-gradient mb-6 text-center">
                💜 Pambi's Goals
              </h2>
              <div className="space-y-4">
                {pambiGoals.map(goal => (
                  <GoalCard key={goal.id} goal={goal} type="pambi" />
                ))}
              </div>
            </div>

            {/* Ela's Goals */}
            <div className="bg-card/50 rounded-xl p-6 border border-destructive/30">
              <h2 className="text-2xl font-calligraphy text-gradient mb-6 text-center">
                💖 Ela's Goals
              </h2>
              <div className="space-y-4">
                {elaGoals.map(goal => (
                  <GoalCard key={goal.id} goal={goal} type="ela" />
                ))}
              </div>
            </div>
          </div>

          {/* Shared Goals */}
          <div className="bg-card/50 rounded-xl p-6 border border-accent/30">
            <h2 className="text-2xl font-calligraphy text-gradient mb-6 text-center">
              💕 Our Goals Together
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sharedGoals.map(goal => (
                <GoalCard key={goal.id} goal={goal} type="shared" />
              ))}
            </div>
          </div>

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
