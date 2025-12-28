import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import GameCategories from "@/components/GameCategories";
import UpcomingGames from "@/components/UpcomingGames";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <GameCategories />
        <UpcomingGames />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
