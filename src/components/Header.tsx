import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-2 px-4">
        <p className="text-center text-sm font-medium">
          <span className="text-accent">🏏💰</span>{" "}
          <span className="text-foreground">Welcome to KarnaliX! Deposit Now & Get</span>{" "}
          <span className="text-primary font-bold">Cash Bonus</span>{" "}
          <span className="text-foreground">on Every Deposit</span>{" "}
          <span className="text-accent">💵</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary">
                Karnali<span className="text-accent">X</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-60" />
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search games, sports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary border border-border 
                         text-foreground placeholder:text-muted-foreground focus:outline-none 
                         focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" className="font-heading text-sm">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" className="font-heading text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Sign Up
              </Button>
            </Link>
            <Link to="/deposit">
              <Button className="btn-gold text-sm py-2">
                💰 Deposit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary border border-border 
                         text-foreground placeholder:text-muted-foreground focus:outline-none 
                         focus:border-primary/50 transition-all"
              />
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex gap-2">
              <Link to="/login" className="flex-1">
                <Button variant="ghost" className="w-full font-heading text-sm">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="flex-1">
                <Button variant="outline" className="w-full font-heading text-sm border-primary text-primary">
                  Sign Up
                </Button>
              </Link>
            </div>
            <Link to="/deposit">
              <Button className="w-full btn-gold text-sm py-2.5">
                💰 Deposit Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
