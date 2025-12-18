const Footer = () => {
  const loveMessages = [
    "you can now tell why i wasnt sleeping....it was because of this, but was it worth it?...OFCOURSE!! 💕",
    "Cheki Dem amesmile tu sanaa whueeeeee...... unablush adi cheeks zinauma.... ✨",
    "Sa kwanini unaniangalia ni kama unaangalia subtitles....unadhani nitasema nini hapa down...but enyere you smart 📝",
    "WHY ARE YOU STILL SCROLLING.....aaaaahh you do love mee 💜 ",
    "WARNING: This website contains excessive love, bad jokes, and one very obsessed boyfriend. 💜",

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