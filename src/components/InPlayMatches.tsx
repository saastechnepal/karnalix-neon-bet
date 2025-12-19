import { Zap, Timer } from "lucide-react";

interface Match {
  id: number;
  sport: string;
  sportIcon: string;
  league: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  time: string;
  odds: { home: number; draw: number; away: number };
  isLive: boolean;
}

const liveMatches: Match[] = [
  {
    id: 1,
    sport: "Cricket",
    sportIcon: "🏏",
    league: "IPL 2024",
    team1: "Mumbai Indians",
    team2: "Chennai Super Kings",
    score1: "156/4",
    score2: "142/6",
    time: "15.2 Overs",
    odds: { home: 1.85, draw: 3.40, away: 2.10 },
    isLive: true,
  },
  {
    id: 2,
    sport: "Soccer",
    sportIcon: "⚽",
    league: "Premier League",
    team1: "Manchester United",
    team2: "Liverpool",
    score1: "2",
    score2: "1",
    time: "67'",
    odds: { home: 1.65, draw: 3.80, away: 2.40 },
    isLive: true,
  },
  {
    id: 3,
    sport: "Tennis",
    sportIcon: "🎾",
    league: "Australian Open",
    team1: "Djokovic N.",
    team2: "Alcaraz C.",
    score1: "6-4, 3",
    score2: "4-6, 2",
    time: "Set 3",
    odds: { home: 1.45, draw: 0, away: 2.75 },
    isLive: true,
  },
  {
    id: 4,
    sport: "Cricket",
    sportIcon: "🏏",
    league: "T20 World Cup",
    team1: "India",
    team2: "Australia",
    score1: "89/2",
    score2: "-",
    time: "10.4 Overs",
    odds: { home: 1.55, draw: 4.00, away: 2.60 },
    isLive: true,
  },
];

const InPlayMatches = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neon-red/20 border border-neon-red/30">
              <Zap className="h-5 w-5 text-neon-red" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold flex items-center gap-2">
                In-Play
                <span className="live-indicator">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-red animate-pulse-live" />
                  LIVE
                </span>
              </h2>
              <p className="text-sm text-muted-foreground">
                {liveMatches.length} matches live now
              </p>
            </div>
          </div>
          <button className="text-sm text-primary hover:underline font-medium">
            View All →
          </button>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {liveMatches.map((match, index) => (
            <div
              key={match.id}
              className="card-game animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Match Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <span>{match.sportIcon}</span>
                  {match.league}
                </span>
                <span className="live-indicator text-[10px]">
                  <span className="w-1 h-1 rounded-full bg-neon-red animate-pulse-live" />
                  {match.time}
                </span>
              </div>

              {/* Teams */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm truncate pr-2">{match.team1}</span>
                  <span className="font-heading font-bold text-neon-green">{match.score1}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm truncate pr-2">{match.team2}</span>
                  <span className="font-heading font-bold text-foreground">{match.score2}</span>
                </div>
              </div>

              {/* Odds */}
              <div className="grid grid-cols-3 gap-2">
                <button className="odds-badge text-center">
                  <div className="text-[10px] text-muted-foreground mb-0.5">1</div>
                  <div>{match.odds.home.toFixed(2)}</div>
                </button>
                {match.odds.draw > 0 && (
                  <button className="odds-badge text-center">
                    <div className="text-[10px] text-muted-foreground mb-0.5">X</div>
                    <div>{match.odds.draw.toFixed(2)}</div>
                  </button>
                )}
                <button className={`odds-badge text-center ${match.odds.draw === 0 ? "col-span-2" : ""}`}>
                  <div className="text-[10px] text-muted-foreground mb-0.5">2</div>
                  <div>{match.odds.away.toFixed(2)}</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InPlayMatches;
