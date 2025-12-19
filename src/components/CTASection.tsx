import { Gift, Shield, Zap, Trophy } from "lucide-react";

const CTASection = () => {
  const features = [
    { icon: <Gift className="h-6 w-6" />, title: "Welcome Bonus", desc: "100% up to ₹50,000" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Payments", desc: "UPI, Bank, Crypto" },
    { icon: <Zap className="h-6 w-6" />, title: "Instant Withdrawal", desc: "Within 5 minutes" },
    { icon: <Trophy className="h-6 w-6" />, title: "Best Odds", desc: "Guaranteed returns" },
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-neon-gold/5 to-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-primary">Win Big</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join thousands of winners at KarnaliX. Get your welcome bonus and start playing today!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-gold text-lg px-8 py-4">
              🎁 Claim Welcome Bonus
            </button>
            <button className="btn-outline px-8 py-4">
              Explore Games
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 text-center hover:border-primary/30 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center 
                           text-primary mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
