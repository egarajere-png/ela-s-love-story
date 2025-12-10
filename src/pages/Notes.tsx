import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, User } from "lucide-react";

const Notes = () => {
  const notes = [
    {
      id: 1,
      title: "The Day We First Met",
      author: "Your Love",
      readTime: "5 min read",
      preview: "I still remember that day like it was yesterday. The way the light caught your eyes...",
      hasDetail: true,
    },
    {
      id: 2,
      title: "Why I Love Your Laugh",
      author: "Your Love",
      readTime: "3 min read",
      preview: "There's something magical about the sound of your laughter...",
      hasDetail: false,
    },
    {
      id: 3,
      title: "Our Future Dreams",
      author: "Your Love",
      readTime: "7 min read",
      preview: "I've been thinking about all the adventures we'll have together...",
      hasDetail: false,
    },
    {
      id: 4,
      title: "Little Things I Adore",
      author: "Your Love",
      readTime: "4 min read",
      preview: "The way you scrunch your nose when you're thinking, the way you...",
      hasDetail: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-calligraphy text-gradient mb-4">
              Love Notes 💜
            </h1>
            <p className="text-xl text-muted-foreground font-calligraphy">
              Words from my heart to yours
            </p>
          </div>

          <div className="grid gap-6">
            {notes.map((note, index) => (
              <Card 
                key={note.id}
                className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-accent/40 transition-all duration-500 hover:scale-[1.02] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <h2 className="text-2xl md:text-3xl font-calligraphy text-gradient">
                    {note.hasDetail ? (
                      <Link to={`/notes/${note.id}`} className="hover:opacity-80 transition-opacity">
                        {note.title}
                      </Link>
                    ) : (
                      note.title
                    )}
                  </h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-elegant text-lg">
                    {note.preview}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center gap-6 text-sm text-muted-foreground font-calligraphy">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{note.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{note.readTime}</span>
                  </div>
                  {note.hasDetail && (
                    <Link 
                      to={`/notes/${note.id}`}
                      className="ml-auto text-accent hover:text-primary transition-colors"
                    >
                      Read more →
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notes;