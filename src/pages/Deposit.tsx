import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CreditCard, Wallet, Building, Gift, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const paymentMethods = [
  { id: "upi", name: "UPI", icon: "📱", popular: true },
  { id: "card", name: "Card", icon: "💳", popular: false },
  { id: "netbanking", name: "Net Banking", icon: "🏦", popular: false },
  { id: "wallet", name: "E-Wallet", icon: "👛", popular: true },
];

const quickAmounts = [500, 1000, 2000, 5000, 10000];

const Deposit = () => {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("upi");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle deposit logic
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <span className="font-heading text-2xl font-bold text-primary">
              Karnali<span className="text-accent">X</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Bonus Banner */}
          <div className="glass rounded-2xl p-6 mb-8 border border-accent/30 
                        bg-gradient-to-r from-accent/10 to-primary/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-accent/20">
                <Gift className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Deposit Bonus Active!</h3>
                <p className="text-sm text-muted-foreground">Get 100% bonus up to ₹10,000 on your deposit</p>
              </div>
            </div>
          </div>

          {/* Deposit Form */}
          <div className="glass rounded-2xl p-8 border border-border/50">
            <h1 className="text-2xl font-heading font-bold mb-2">Deposit Funds</h1>
            <p className="text-muted-foreground text-sm mb-8">Add money to your wallet securely</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium mb-3">Enter Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-muted-foreground">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                    className="w-full pl-10 pr-4 py-4 text-2xl font-heading font-bold rounded-xl 
                             bg-secondary border border-border text-foreground 
                             placeholder:text-muted-foreground focus:outline-none 
                             focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    min="100"
                    required
                  />
                </div>
                
                {/* Quick Amount Buttons */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt.toString())}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                        ${amount === amt.toString()
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-sm font-medium mb-3">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={`relative p-4 rounded-xl text-left transition-all
                        ${selectedMethod === method.id
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-secondary border-2 border-transparent hover:border-border"
                        }`}
                    >
                      {method.popular && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-bold 
                                       bg-accent text-accent-foreground rounded-full">
                          POPULAR
                        </span>
                      )}
                      <span className="text-2xl block mb-2">{method.icon}</span>
                      <span className="font-medium">{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full btn-primary py-4 text-lg">
                Deposit Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>256-bit SSL Encrypted & Secure Payments</span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Deposit;
