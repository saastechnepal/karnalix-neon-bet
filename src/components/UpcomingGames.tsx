import { Calendar, Clock, ChevronRight } from "lucide-react";

interface UpcomingMatch {
  id: number;
  sportIcon: string;
  league: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
}

const upcomingMatches: UpcomingMatch[] = [
  { id: 1, sportIcon: "🏏", league: "IPL 2024", team1: "Delhi Capitals", team2: "Royal Challengers", date: "Today", time: "19:30" },
  { id: 2, sportIcon: "⚽", league: "La Liga", team1: "Real Madrid", team2: "Barcelona", date: "Tomorrow", time: "22:00" },
  { id: 3, sportIcon: "🎾", league: "ATP Finals", team1: "Sinner J.", team2: "Medvedev D.", date: "Dec 21", time: "18:00" },
  { id: 4, sportIcon: "🏏", league: "Test Series", team1: "India", team2: "England", date: "Dec 22", time: "09:30" },
];

const UpcomingGames = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent/20 border border-accent/30">
              <Calendar className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold">Upcoming Matches</h2>
              <p className="text-sm text-muted-foreground">Don't miss the action</p>
            </div>
          </div>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingMatches.map((match, index) => (
            <div
              key={match.id}
              className="group glass rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 
                       cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Sport Icon */}
                <div className="text-3xl shrink-0">{match.sportIcon}</div>

                {/* Match Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">{match.league}</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{match.team1}</span>
                    <span className="text-xs text-muted-foreground px-2 py-0.5 rounded bg-secondary">vs</span>
                    <span className="font-medium truncate">{match.team2}</span>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="text-right shrink-0">
                  <p className={`text-sm font-bold ${match.date === "Today" ? "text-primary" : "text-foreground"}`}>
                    {match.date}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center justify-end gap-1">
                    <Clock className="h-3 w-3" />
                    {match.time}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary 
                                        group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
