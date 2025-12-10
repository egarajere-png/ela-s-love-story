import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Notes", path: "/notes" },
    { name: "Photos", path: "/photos" },
    { name: "Ela's Surprise", path: "/surprise", special: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-2xl font-calligraphy text-gradient hover:opacity-80 transition-opacity"
          >
            Ela Nyokabi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-calligraphy text-lg transition-all duration-300 hover:text-primary ${
                  link.special 
                    ? "text-accent flex items-center gap-1 glow-pink" 
                    : isActive(link.path) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                }`}
              >
                {link.special && <Heart className="w-4 h-4" />}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-calligraphy text-xl text-center py-2 transition-all duration-300 ${
                  link.special 
                    ? "text-accent" 
                    : isActive(link.path) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                }`}
              >
                {link.special && "💜 "}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;