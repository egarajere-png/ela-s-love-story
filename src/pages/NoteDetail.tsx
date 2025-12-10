import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Download, ArrowLeft } from "lucide-react";

const NoteDetail = () => {
  const { id } = useParams();

  const noteContent = {
    title: "The Day We First Met",
    author: "Your Love",
    coverEmoji: "💕",
    content: `
      <h2>A Moment That Changed Everything</h2>
      <p>I still remember that day like it was yesterday. The way the light caught your eyes, the way your smile seemed to illuminate the entire room. I didn't know it then, but my life was about to change forever.</p>
      
      <h3>The First Glance</h3>
      <p>There's something magical about first meetings. That split second when your eyes meet someone else's and somehow, deep down, you just know. You know that this person is going to matter to you. That's exactly what happened when I first saw you.</p>
      
      <h3>Getting to Know You</h3>
      <p>Every conversation with you felt like discovering a new treasure. The way you think, the way you express yourself, your dreams and hopes – everything about you fascinated me. I found myself looking forward to every moment we could spend together.</p>
      
      <h4>The Little Things</h4>
      <p>It's the small moments that I cherish the most. The way you laugh at my silly jokes, the way you always know exactly what to say when I'm feeling down, the way you make even the most ordinary moments feel extraordinary.</p>
      
      <h2>Looking Forward</h2>
      <p>As I write this, I can't help but feel incredibly grateful for that fateful day when our paths crossed. Every day since has been a blessing, and I know that whatever the future holds, I want to face it together with you.</p>
      
      <h3>Forever Yours</h3>
      <p>This is just the beginning of our story. There are so many more chapters to write, so many more memories to make. And I can't wait to experience every single one of them with you by my side.</p>
      
      <p class="text-center text-2xl mt-8">💜 With all my love, forever and always 💜</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Back Button */}
          <Link 
            to="/notes"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-calligraphy mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Notes
          </Link>

          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-calligraphy text-gradient mb-4">
              {noteContent.title}
            </h1>
            <p className="text-muted-foreground font-calligraphy text-lg">
              By {noteContent.author}
            </p>
          </header>

          {/* Cover Image */}
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mb-12 border border-primary/20">
            <span className="text-9xl md:text-[12rem] animate-heartbeat">
              {noteContent.coverEmoji}
            </span>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg prose-invert max-w-none font-elegant
              [&>h2]:text-3xl [&>h2]:font-calligraphy [&>h2]:text-gradient [&>h2]:mt-12 [&>h2]:mb-6
              [&>h3]:text-2xl [&>h3]:font-calligraphy [&>h3]:text-primary [&>h3]:mt-8 [&>h3]:mb-4
              [&>h4]:text-xl [&>h4]:font-calligraphy [&>h4]:text-accent [&>h4]:mt-6 [&>h4]:mb-3
              [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-justify"
            dangerouslySetInnerHTML={{ __html: noteContent.content }}
          />

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-border">
            <Button variant="outline" className="gap-2 font-calligraphy">
              <Heart className="w-5 h-5" />
              Like
            </Button>
            <Button variant="outline" className="gap-2 font-calligraphy">
              <MessageCircle className="w-5 h-5" />
              Comment
            </Button>
            <Button variant="outline" className="gap-2 font-calligraphy">
              <Download className="w-5 h-5" />
              Download
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NoteDetail;