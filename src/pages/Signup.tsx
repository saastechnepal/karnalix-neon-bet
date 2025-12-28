import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-accent/20 via-background to-primary/10 
                    items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="relative z-10 text-center max-w-md">
          <Link to="/" className="inline-block mb-8">
            <span className="font-heading text-4xl font-bold text-primary">
              Karnali<span className="text-accent">X</span>
            </span>
          </Link>
          <h1 className="text-3xl font-heading font-bold mb-4">Join KarnaliX Today!</h1>
          <p className="text-muted-foreground mb-8">
            Create your account and get exclusive bonuses on your first deposit.
          </p>
          
          {/* Bonus Banner */}
          <div className="glass rounded-2xl p-6 border border-accent/30 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/20">
                <Gift className="h-5 w-5 text-accent" />
              </div>
              <span className="font-heading font-bold">Welcome Bonus</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> 100% match on first deposit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> Free spins on casino games
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span> VIP access for high rollers
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/">
              <span className="font-heading text-3xl font-bold text-primary">
                Karnali<span className="text-accent">X</span>
              </span>
            </Link>
          </div>

          <div className="glass rounded-2xl p-8 border border-border/50">
            <h2 className="text-2xl font-heading font-bold mb-2">Create Account</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Fill in your details to get started
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border 
                             text-foreground placeholder:text-muted-foreground focus:outline-none 
                             focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border 
                             text-foreground placeholder:text-muted-foreground focus:outline-none 
                             focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border 
                             text-foreground placeholder:text-muted-foreground focus:outline-none 
                             focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full pl-11 pr-12 py-3 rounded-xl bg-secondary border border-border 
                             text-foreground placeholder:text-muted-foreground focus:outline-none 
                             focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground 
                             hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 rounded border-border" required />
                <span className="text-xs text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </span>
              </label>

              {/* Submit Button */}
              <Button type="submit" className="w-full btn-gold py-3 text-base">
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Login Link */}
            <p className="text-center mt-8 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
