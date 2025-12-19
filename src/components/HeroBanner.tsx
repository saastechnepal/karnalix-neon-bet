import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Welcome Bonus",
    subtitle: "100% Match on First Deposit",
    description: "Get up to ₹50,000 bonus on your first deposit. Start your winning journey now!",
    cta: "Claim Bonus",
    gradient: "from-neon-green/20 via-transparent to-neon-gold/20",
    accent: "neon-green",
  },
  {
    id: 2,
    title: "IPL 2024 Special",
    subtitle: "Best Odds Guaranteed",
    description: "Bet on every IPL match with the best odds. Live betting available!",
    cta: "Bet Now",
    gradient: "from-blue-500/20 via-transparent to-neon-gold/20",
    accent: "neon-gold",
  },
  {
    id: 3,
    title: "Aviator x100",
    subtitle: "Crash & Win Big",
    description: "Play the most popular crash game. Multiply your winnings up to 100x!",
    cta: "Play Aviator",
    gradient: "from-neon-red/20 via-transparent to-orange-500/20",
    accent: "neon-red",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative rounded-2xl overflow-hidden glass border border-border/50">
          {/* Slides */}
          <div className="relative h-[280px] md:h-[350px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out
                          ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
                
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-neon-green/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-neon-gold/10 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-12">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                                  bg-${slide.accent}/20 text-${slide.accent} border border-${slide.accent}/30 w-fit mb-4`}>
                    🔥 Hot Offer
                  </span>
                  <h2 className={`font-heading text-3xl md:text-5xl font-bold mb-2 text-${slide.accent}`}>
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-foreground mb-2">
                    {slide.subtitle}
                  </p>
                  <p className="text-muted-foreground max-w-md mb-6">
                    {slide.description}
                  </p>
                  <button className="btn-primary w-fit">
                    {slide.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary/80 
                     hover:bg-secondary transition-colors z-20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary/80 
                     hover:bg-secondary transition-colors z-20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all
                          ${index === currentSlide ? "w-6 bg-primary" : "bg-muted-foreground/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
