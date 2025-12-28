import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Star } from "lucide-react";

interface Game {
  id: string;
  name: string;
  image: string;
  players?: number;
  isPopular?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  games: Game[];
}

const categories: Category[] = [
  {
    id: "casino",
    name: "Casino",
    icon: "🎰",
    games: [
      { id: "aviator", name: "Aviator", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop", players: 1250, isPopular: true },
      { id: "teen-patti", name: "Teen Patti", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=300&h=200&fit=crop", players: 890, isPopular: true },
      { id: "roulette", name: "Roulette", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop", players: 456 },
      { id: "blackjack", name: "Blackjack", image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=300&h=200&fit=crop", players: 678 },
      { id: "dragon-tiger", name: "Dragon Tiger", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop", players: 320 },
      { id: "andar-bahar", name: "Andar Bahar", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&h=200&fit=crop", players: 540, isPopular: true },
    ],
  },
  {
    id: "football",
    name: "Football",
    icon: "⚽",
    games: [
      { id: "premier-league", name: "Premier League", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop", players: 2100, isPopular: true },
      { id: "la-liga", name: "La Liga", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&h=200&fit=crop", players: 1800 },
      { id: "champions-league", name: "Champions League", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300&h=200&fit=crop", players: 3200, isPopular: true },
      { id: "serie-a", name: "Serie A", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop", players: 980 },
    ],
  },
  {
    id: "cricket",
    name: "Cricket",
    icon: "🏏",
    games: [
      { id: "ipl", name: "IPL", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=200&fit=crop", players: 4500, isPopular: true },
      { id: "world-cup", name: "World Cup", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=200&fit=crop", players: 5200, isPopular: true },
      { id: "test-series", name: "Test Series", image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=300&h=200&fit=crop", players: 1200 },
      { id: "t20-league", name: "T20 League", image: "https://images.unsplash.com/photo-1593766820955-05a29f5bfb62?w=300&h=200&fit=crop", players: 2800 },
    ],
  },
  {
    id: "tennis",
    name: "Tennis",
    icon: "🎾",
    games: [
      { id: "wimbledon", name: "Wimbledon", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&h=200&fit=crop", players: 890, isPopular: true },
      { id: "us-open", name: "US Open", image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=300&h=200&fit=crop", players: 760 },
      { id: "french-open", name: "French Open", image: "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=300&h=200&fit=crop", players: 650 },
    ],
  },
  {
    id: "horse-racing",
    name: "Racing",
    icon: "🏇",
    games: [
      { id: "royal-ascot", name: "Royal Ascot", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop", players: 450, isPopular: true },
      { id: "kentucky-derby", name: "Kentucky Derby", image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=300&h=200&fit=crop", players: 380 },
    ],
  },
];

const GameCategories = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            Choose Your <span className="text-primary">Game</span>
          </h2>
          <p className="text-muted-foreground text-sm">Select a category and start playing</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground glow-green scale-105"
                  : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="hidden sm:inline font-heading text-sm">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {currentCategory.games.map((game, index) => (
            <Link
              to={`/game/${game.id}`}
              key={game.id}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 
                       hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Popular Badge */}
                {game.isPopular && (
                  <div className="absolute top-2 left-2 px-2 py-1 text-[10px] font-bold 
                                bg-accent text-accent-foreground rounded-lg flex items-center gap-1">
                    <Star className="h-3 w-3" /> POPULAR
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 
                              group-hover:opacity-100 transition-all duration-300">
                  <div className="p-4 rounded-full bg-primary text-primary-foreground glow-green">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-3">
                <h3 className="font-heading font-bold text-sm truncate">{game.name}</h3>
                {game.players && (
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {game.players.toLocaleString()} playing
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
