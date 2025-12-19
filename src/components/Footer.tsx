import { Shield, Clock, HeadphonesIcon, CreditCard } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    sports: ["Cricket", "Soccer", "Tennis", "Horse Racing", "Greyhound", "Basketball"],
    casino: ["Live Casino", "Aviator", "Teen Patti", "Slots", "Roulette", "Blackjack"],
    support: ["Help Center", "Contact Us", "FAQs", "Live Chat", "Email Support"],
    legal: ["Terms & Conditions", "Privacy Policy", "Responsible Gaming", "Cookie Policy"],
  };

  const paymentMethods = ["UPI", "Paytm", "PhonePe", "Bank Transfer", "Bitcoin", "USDT"];

  return (
    <footer className="bg-card/50 border-t border-border">
      {/* Trust Badges */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <div className="font-heading font-bold text-sm">Secure & Safe</div>
                <div className="text-xs text-muted-foreground">256-bit SSL Encryption</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-neon-gold" />
              <div>
                <div className="font-heading font-bold text-sm">24/7 Support</div>
                <div className="text-xs text-muted-foreground">Always here to help</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <div className="font-heading font-bold text-sm">Fast Payouts</div>
                <div className="text-xs text-muted-foreground">Instant withdrawals</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <HeadphonesIcon className="h-8 w-8 text-neon-gold" />
              <div>
                <div className="font-heading font-bold text-sm">Live Chat</div>
                <div className="text-xs text-muted-foreground">Get instant help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold text-primary">
                Karnali<span className="text-neon-gold">X</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              India's premier online betting & gaming destination. Play responsibly.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                💬
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                📸
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors">
                ✈️
              </a>
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-heading font-bold mb-4">Sports</h4>
            <ul className="space-y-2">
              {footerLinks.sports.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Casino */}
          <div>
            <h4 className="font-heading font-bold mb-4">Casino</h4>
            <ul className="space-y-2">
              {footerLinks.casino.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-8 border-t border-border">
          <h4 className="font-heading font-bold mb-4 text-center">Accepted Payment Methods</h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="px-4 py-2 rounded-lg bg-secondary text-sm text-muted-foreground"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 KarnaliX. All rights reserved.</p>
            <p className="text-center">
              🔞 18+ Only. Please gamble responsibly. 
              <a href="#" className="text-primary hover:underline ml-1">BeGambleAware.org</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
