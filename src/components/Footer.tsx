const Footer = () => {
  const loveMessages = [
    "Every moment with you is a treasure 💜",
    "You are my forever and always ✨",
    "My heart beats only for you 💕",
    "In your eyes, I found my home 🏠",
    "You're the poem I never knew how to write 📝",
    "With you, every day is Valentine's Day 💜",
  ];

  const fullMessage = loveMessages.join(" • ");

  return (
    <footer className="bg-card/50 border-t border-border py-4 overflow-hidden">
      <div className="relative">
        <div className="scrolling-text whitespace-nowrap font-calligraphy text-xl text-primary/80">
          {fullMessage} • {fullMessage}
        </div>
      </div>
    </footer>
  );
};

export default Footer;