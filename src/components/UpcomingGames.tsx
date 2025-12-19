import { Calendar, Clock, Bell } from "lucide-react";

interface UpcomingMatch {
  id: number;
  sport: string;
  sportIcon: string;
  league: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  odds: { home: number; draw: number; away: number };
}

const upcomingMatches: UpcomingMatch[] = [
  {
    id: 1,
    sport: "Cricket",
    sportIcon: "🏏",
    league: "IPL 2024",
    team1: "Delhi Capitals",
    team2: "Royal Challengers",
    date: "Today",
    time: "19:30",
    odds: { home: 1.90, draw: 3.50, away: 2.05 },
  },
  {
    id: 2,
    sport: "Soccer",
    sportIcon: "⚽",
    league: "La Liga",
    team1: "Real Madrid",
    team2: "Barcelona",
    date: "Tomorrow",
    time: "22:00",
    odds: { home: 2.20, draw: 3.30, away: 2.45 },
  },
  {
    id: 3,
    sport: "Tennis",
    sportIcon: "🎾",
    league: "ATP Finals",
    team1: "Sinner J.",
    team2: "Medvedev D.",
    date: "Dec 21",
    time: "18:00",
    odds: { home: 1.75, draw: 0, away: 2.15 },
  },
  {
    id: 4,
    sport: "Cricket",
    sportIcon: "🏏",
    league: "Test Series",
    team1: "India",
    team2: "England",
    date: "Dec 22",
    time: "09:30",
    odds: { home: 1.55, draw: 4.20, away: 3.00 },
  },
  {
    id: 5,
    sport: "Horse Racing",
    sportIcon: "🏇",
    league: "Royal Ascot",
    team1: "Thunder Bolt",
    team2: "Golden Arrow",
    date: "Dec 23",
    time: "15:00",
    odds: { home: 3.50, draw: 0, away: 2.10 },
  },
  {
    id: 6,
    sport: "Soccer",
    sportIcon: "⚽",
    league: "Champions League",
    team1: "Bayern Munich",
    team2: "PSG",
    date: "Dec 24",
    time: "20:45",
    odds: { home: 1.85, draw: 3.60, away: 2.80 },
  },
];

const UpcomingGames = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-transparent via-card/20 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
              <Calendar className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">Upcoming Games</h2>
              <p className="text-sm text-muted-foreground">Don't miss the action</p>
            </div>
          </div>
          <button className="text-sm text-primary hover:underline font-medium">
            Full Schedule →
          </button>
        </div>

        {/* Matches List */}
        <div className="space-y-3">
          {upcomingMatches.map((match, index) => (
            <div
              key={match.id}
              className="glass rounded-xl p-4 hover:border-primary/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Date/Time */}
                <div className="flex items-center gap-3 md:w-32 shrink-0">
                  <div className="text-center">
                    <div className={`text-sm font-bold ${match.date === "Today" ? "text-neon-green" : "text-foreground"}`}>
                      {match.date}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {match.time}
                    </div>
                  </div>
                </div>

                {/* Match Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{match.sportIcon}</span>
                    <span>{match.league}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium flex-1">{match.team1}</span>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-secondary">VS</span>
                    <span className="font-medium flex-1 text-right">{match.team2}</span>
                  </div>
                </div>

                {/* Odds */}
                <div className="flex items-center gap-2">
                  <button className="odds-badge">
                    <span className="text-[10px] text-muted-foreground block">1</span>
                    {match.odds.home.toFixed(2)}
                  </button>
                  {match.odds.draw > 0 && (
                    <button className="odds-badge">
                      <span className="text-[10px] text-muted-foreground block">X</span>
                      {match.odds.draw.toFixed(2)}
                    </button>
                  )}
                  <button className="odds-badge">
                    <span className="text-[10px] text-muted-foreground block">2</span>
                    {match.odds.away.toFixed(2)}
                  </button>
                </div>

                {/* Remind Button */}
                <button className="p-2 rounded-lg bg-secondary hover:bg-primary/20 
                                 hover:text-primary transition-colors shrink-0">
                  <Bell className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
