import { Dice1, Flame, Play, Star } from "lucide-react";

interface Game {
  id: string;
  name: string;
  provider: string;
  image: string;
  type: string;
  isHot?: boolean;
  isNew?: boolean;
}

const games: Game[] = [
  {
    id: "aviator",
    name: "Aviator",
    provider: "Spribe",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
    type: "Crash",
    isHot: true,
  },
  {
    id: "teen-patti",
    name: "Teen Patti",
    provider: "Evolution",
    image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=300&h=200&fit=crop",
    type: "Card Game",
    isHot: true,
  },
  {
    id: "roulette",
    name: "Lightning Roulette",
    provider: "Evolution",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop",
    type: "Live Casino",
  },
  {
    id: "blackjack",
    name: "Blackjack VIP",
    provider: "Ezugi",
    image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=300&h=200&fit=crop",
    type: "Table Game",
  },
  {
    id: "dragon-tiger",
    name: "Dragon Tiger",
    provider: "Mac 88",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop",
    type: "Live Casino",
    isNew: true,
  },
  {
    id: "andar-bahar",
    name: "Andar Bahar",
    provider: "Evolution",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&h=200&fit=crop",
    type: "Indian Game",
    isHot: true,
  },
  {
    id: "baccarat",
    name: "Speed Baccarat",
    provider: "Evolution",
    image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=300&h=200&fit=crop",
    type: "Live Casino",
  },
  {
    id: "slots",
    name: "Sweet Bonanza",
    provider: "Pragmatic",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop",
    type: "Slots",
    isNew: true,
  },
];

const providers = [
  { id: "all", name: "All Games" },
  { id: "evolution", name: "Evolution" },
  { id: "ezugi", name: "Ezugi" },
  { id: "mac88", name: "Mac 88" },
  { id: "pragmatic", name: "Pragmatic" },
];

const CasinoGames = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
              <Dice1 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">Casino Lobby</h2>
              <p className="text-sm text-muted-foreground">Premium games from top providers</p>
            </div>
          </div>
          <button className="text-sm text-primary hover:underline font-medium">
            View All →
          </button>
        </div>

        {/* Provider Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-2">
          {providers.map((provider, index) => (
            <button
              key={provider.id}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                        ${index === 0 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-muted-foreground hover:text-foreground"}`}
            >
              {provider.name}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="group relative rounded-xl overflow-hidden bg-card border border-border 
                       hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {game.isHot && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-neon-red text-foreground rounded-full flex items-center gap-1">
                      <Flame className="h-3 w-3" /> HOT
                    </span>
                  )}
                  {game.isNew && (
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full">
                      NEW
                    </span>
                  )}
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 
                              group-hover:opacity-100 transition-opacity bg-background/40">
                  <div className="flex gap-2">
                    <button className="p-3 rounded-full bg-primary text-primary-foreground 
                                     hover:scale-110 transition-transform glow-green">
                      <Play className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="font-heading font-bold text-sm truncate">{game.name}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-muted-foreground">{game.provider}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {game.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoGames;
