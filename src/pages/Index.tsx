import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import HeroBanner from "@/components/HeroBanner";
import InPlayMatches from "@/components/InPlayMatches";
import PopularSports from "@/components/PopularSports";
import CasinoGames from "@/components/CasinoGames";
import UpcomingGames from "@/components/UpcomingGames";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryTabs />
      <main>
        <HeroBanner />
        <InPlayMatches />
        <PopularSports />
        <CasinoGames />
        <UpcomingGames />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
