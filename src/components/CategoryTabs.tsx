import { useState } from "react";
import { 
  Trophy, Dice1, Zap, Clock, TrendingUp, 
  Gamepad2, Star, Crown, Flame
} from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  subcategories?: { id: string; label: string }[];
}

const categories: Category[] = [
  {
    id: "sports",
    label: "Sports Book",
    icon: <Trophy className="h-4 w-4" />,
    subcategories: [
      { id: "cricket", label: "🏏 Cricket" },
      { id: "soccer", label: "⚽ Soccer" },
      { id: "tennis", label: "🎾 Tennis" },
      { id: "horse", label: "🏇 Horse Racing" },
      { id: "greyhound", label: "🐕 Greyhound" },
    ],
  },
  {
    id: "in-play",
    label: "In-Play",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: "casino",
    label: "Casino",
    icon: <Dice1 className="h-4 w-4" />,
    subcategories: [
      { id: "indian", label: "🎰 Indian Casino" },
      { id: "live", label: "🎥 Live Casino" },
      { id: "slots", label: "🍒 Slot Games" },
      { id: "crash", label: "📈 Crash Games" },
      { id: "table", label: "♠️ Table Games" },
    ],
  },
  {
    id: "popular",
    label: "Popular",
    icon: <Flame className="h-4 w-4" />,
  },
  {
    id: "aviator",
    label: "Aviator",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    id: "teen-patti",
    label: "Teen Patti",
    icon: <Crown className="h-4 w-4" />,
  },
  {
    id: "providers",
    label: "Providers",
    icon: <Gamepad2 className="h-4 w-4" />,
    subcategories: [
      { id: "mac88", label: "Mac 88" },
      { id: "evolution", label: "Evolution" },
      { id: "ezugi", label: "Ezugi" },
    ],
  },
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("sports");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="w-full bg-card/50 border-b border-border sticky top-[120px] z-40">
      <div className="container mx-auto px-4">
        {/* Main Categories */}
        <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubcategory(null);
              }}
              className={`category-tab flex items-center gap-2 whitespace-nowrap shrink-0
                        ${activeCategory === category.id ? "category-tab-active" : ""}`}
            >
              {category.icon}
              {category.label}
              {category.id === "in-play" && (
                <span className="live-indicator ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-red animate-pulse-live" />
                  LIVE
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Subcategories */}
        {currentCategory?.subcategories && (
          <div className="flex items-center gap-2 py-2 overflow-x-auto scrollbar-hide border-t border-border/50">
            {currentCategory.subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubcategory(sub.id)}
                className={`px-3 py-1.5 text-sm rounded-full transition-all whitespace-nowrap
                          ${
                            activeSubcategory === sub.id
                              ? "bg-secondary text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryTabs;
