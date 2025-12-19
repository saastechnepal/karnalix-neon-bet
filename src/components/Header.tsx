import { Search, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const socialLinks = [
    { icon: "💬", label: "WhatsApp", href: "#", color: "text-green-400" },
    { icon: "📸", label: "Instagram", href: "#", color: "text-pink-400" },
    { icon: "✈️", label: "Telegram", href: "#", color: "text-blue-400" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-neon-green/10 via-neon-gold/10 to-neon-green/10 py-2 px-4">
        <p className="text-center text-sm font-medium animate-pulse">
          <span className="text-neon-gold">🏏💰</span>{" "}
          <span className="text-foreground">Welcome to KarnaliX! Deposit Now & Get</span>{" "}
          <span className="text-neon-green font-bold">Cash Bonus</span>{" "}
          <span className="text-foreground">on Every Deposit</span>{" "}
          <span className="text-neon-gold">💵 Get Ready to Win Big!</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <span className="font-heading text-2xl md:text-3xl font-bold text-neon-green">
                Karnali<span className="text-neon-gold">X</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-green to-neon-gold opacity-60" />
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search games, sports, casino..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border 
                         text-foreground placeholder:text-muted-foreground focus:outline-none 
                         focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 
                          hover:bg-secondary transition-colors text-sm ${link.color}`}
              >
                <span>{link.icon}</span>
                <span className="text-muted-foreground hidden xl:inline">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="font-heading text-sm">
              Login
            </Button>
            <Button variant="outline" className="font-heading text-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Sign Up
            </Button>
            <Button className="btn-gold text-sm py-2">
              Deposit Now
            </Button>
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
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border 
                         text-foreground placeholder:text-muted-foreground focus:outline-none 
                         focus:border-primary/50 transition-all"
              />
            </div>

            {/* Mobile Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg 
                            bg-secondary/50 text-sm ${link.color}`}
                >
                  <span>{link.icon}</span>
                  <span className="text-xs">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="flex gap-2">
              <Button variant="ghost" className="flex-1 font-heading text-sm">
                Login
              </Button>
              <Button variant="outline" className="flex-1 font-heading text-sm border-primary text-primary">
                Sign Up
              </Button>
            </div>
            <Button className="w-full btn-gold text-sm py-2.5">
              💰 Deposit Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
