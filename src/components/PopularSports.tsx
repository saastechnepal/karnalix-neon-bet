import { Star } from "lucide-react";

interface Sport {
  id: string;
  name: string;
  icon: string;
  matches: number;
  trending?: boolean;
}

const sports: Sport[] = [
  { id: "cricket", name: "Cricket", icon: "🏏", matches: 45, trending: true },
  { id: "soccer", name: "Soccer", icon: "⚽", matches: 120, trending: true },
  { id: "tennis", name: "Tennis", icon: "🎾", matches: 38 },
  { id: "basketball", name: "Basketball", icon: "🏀", matches: 28 },
  { id: "horse", name: "Horse Racing", icon: "🏇", matches: 15, trending: true },
  { id: "greyhound", name: "Greyhound", icon: "🐕", matches: 12 },
  { id: "kabaddi", name: "Kabaddi", icon: "🤼", matches: 8 },
  { id: "esports", name: "E-Sports", icon: "🎮", matches: 22 },
];

const PopularSports = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neon-gold/20 border border-neon-gold/30">
              <Star className="h-5 w-5 text-neon-gold" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">Popular Sports</h2>
              <p className="text-sm text-muted-foreground">Browse by sport category</p>
            </div>
          </div>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {sports.map((sport, index) => (
            <button
              key={sport.id}
              className="relative group card-game p-4 flex flex-col items-center gap-2 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {sport.trending && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold 
                               bg-neon-gold text-primary-foreground rounded-full">
                  HOT
                </span>
              )}
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                {sport.icon}
              </span>
              <span className="font-medium text-sm text-center">{sport.name}</span>
              <span className="text-xs text-muted-foreground">{sport.matches} events</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSports;
