import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Play, Star, Users, ArrowLeft, Maximize2, Volume2, VolumeX, Info, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

// Game data (in real app, fetch from API)
const allGames: Record<string, { name: string; image: string; provider: string; category: string; players: number; rating: number; description: string }> = {
  "aviator": { name: "Aviator", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop", provider: "Spribe", category: "Crash Game", players: 1250, rating: 4.8, description: "Watch the plane fly and cash out before it crashes! The longer you wait, the bigger your multiplier grows." },
  "teen-patti": { name: "Teen Patti", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&h=500&fit=crop", provider: "Evolution", category: "Card Game", players: 890, rating: 4.7, description: "The classic Indian card game! Play against real players and test your luck with this exciting three-card poker variant." },
  "roulette": { name: "Roulette", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=500&fit=crop", provider: "Evolution", category: "Table Game", players: 456, rating: 4.6, description: "Spin the wheel and watch your fortune unfold. Place your bets on numbers, colors, or combinations." },
  "blackjack": { name: "Blackjack", image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=800&h=500&fit=crop", provider: "Ezugi", category: "Card Game", players: 678, rating: 4.9, description: "Beat the dealer to 21! The world's most popular casino card game with live dealers." },
  "dragon-tiger": { name: "Dragon Tiger", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop", provider: "Mac 88", category: "Live Casino", players: 320, rating: 4.5, description: "Fast-paced baccarat variant. Bet on Dragon or Tiger - the higher card wins!" },
  "andar-bahar": { name: "Andar Bahar", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=800&h=500&fit=crop", provider: "Evolution", category: "Indian Game", players: 540, rating: 4.7, description: "Traditional Indian betting game. Guess which side the matching card will appear - Andar or Bahar!" },
  "premier-league": { name: "Premier League", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop", provider: "Sports", category: "Football", players: 2100, rating: 4.9, description: "Bet on your favorite Premier League matches. Live odds and instant payouts!" },
  "la-liga": { name: "La Liga", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=500&fit=crop", provider: "Sports", category: "Football", players: 1800, rating: 4.8, description: "Experience Spanish football at its finest. Place bets on all La Liga matches." },
  "champions-league": { name: "Champions League", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=500&fit=crop", provider: "Sports", category: "Football", players: 3200, rating: 4.9, description: "The biggest club competition in football. Bet on Europe's elite teams!" },
  "ipl": { name: "IPL", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop", provider: "Sports", category: "Cricket", players: 4500, rating: 5.0, description: "India's biggest cricket league! Place bets on every ball, over, and match." },
  "world-cup": { name: "World Cup", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=500&fit=crop", provider: "Sports", category: "Cricket", players: 5200, rating: 5.0, description: "The pinnacle of international cricket. Bet on teams from around the world!" },
  "wimbledon": { name: "Wimbledon", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=500&fit=crop", provider: "Sports", category: "Tennis", players: 890, rating: 4.8, description: "The most prestigious tennis tournament. Bet on every set and match!" },
  "royal-ascot": { name: "Royal Ascot", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop", provider: "Racing", category: "Horse Racing", players: 450, rating: 4.6, description: "Britain's most famous horse racing event. Pick your winners!" },
};

const defaultGame = { name: "Game", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=800&h=500&fit=crop", provider: "KarnaliX", category: "Casino", players: 500, rating: 4.5, description: "Exciting game with great odds and fun gameplay!" };

const similarGames = [
  { id: "teen-patti", name: "Teen Patti", image: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=300&h=200&fit=crop" },
  { id: "roulette", name: "Roulette", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop" },
  { id: "blackjack", name: "Blackjack", image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=300&h=200&fit=crop" },
  { id: "dragon-tiger", name: "Dragon Tiger", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop" },
];

const Game = () => {
  const { gameId } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const game = allGames[gameId || ""] || defaultGame;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <Link to="/">
              <span className="font-heading text-xl font-bold text-primary">
                Karnali<span className="text-accent">X</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/deposit">
              <Button className="btn-gold text-sm py-2">Deposit</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Game Preview - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Game Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50">
              {/* Game Image/Frame */}
              <div className="relative aspect-video">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <button className="p-6 rounded-full bg-primary text-primary-foreground mb-4
                                     hover:scale-110 transition-transform glow-green animate-pulse">
                      <Play className="h-10 w-10 fill-current" />
                    </button>
                    <p className="text-lg font-heading font-bold">Click to Play</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Game Title Bar */}
              <div className="p-4 flex items-center justify-between border-t border-border/50">
                <div>
                  <h1 className="font-heading text-xl font-bold">{game.name}</h1>
                  <p className="text-sm text-muted-foreground">{game.provider} • {game.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{game.players.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 btn-primary py-4 text-lg">
                <Play className="mr-2 h-5 w-5" /> Play Now
              </Button>
              <Button variant="outline" className="flex-1 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Zap className="mr-2 h-5 w-5" /> Demo Mode
              </Button>
            </div>

            {/* Game Description */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h2 className="font-heading font-bold">About This Game</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{game.description}</p>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Deposit Bonus */}
            <div className="glass rounded-2xl p-6 border border-accent/30 bg-gradient-to-br from-accent/10 to-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Gift className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading font-bold">First Deposit Bonus</h3>
              </div>
              <p className="text-2xl font-heading font-bold text-accent mb-2">100% up to ₹10,000</p>
              <p className="text-sm text-muted-foreground mb-4">Deposit now and double your playing money!</p>
              <Link to="/deposit">
                <Button className="w-full btn-gold">Claim Bonus</Button>
              </Link>
            </div>

            {/* How to Play */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="font-heading font-bold mb-4">How to Play</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">1</span>
                  <span className="text-muted-foreground">Create an account or login</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">2</span>
                  <span className="text-muted-foreground">Make your first deposit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">3</span>
                  <span className="text-muted-foreground">Click "Play Now" to start</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">4</span>
                  <span className="text-muted-foreground">Place bets and win big!</span>
                </li>
              </ol>
            </div>

            {/* Similar Games */}
            <div className="glass rounded-2xl p-6 border border-border/50">
              <h3 className="font-heading font-bold mb-4">Similar Games</h3>
              <div className="grid grid-cols-2 gap-3">
                {similarGames.filter(g => g.id !== gameId).slice(0, 4).map((similarGame) => (
                  <Link
                    key={similarGame.id}
                    to={`/game/${similarGame.id}`}
                    className="group rounded-xl overflow-hidden bg-secondary hover:ring-2 hover:ring-primary/50 transition-all"
                  >
                    <div className="aspect-video relative">
                      <img 
                        src={similarGame.image} 
                        alt={similarGame.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="p-2 text-xs font-medium truncate">{similarGame.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Game;
