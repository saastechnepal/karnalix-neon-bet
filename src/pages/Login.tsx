import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-background to-accent/10 
                    items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]" />
        
        <div className="relative z-10 text-center max-w-md">
          <Link to="/" className="inline-block mb-8">
            <span className="font-heading text-4xl font-bold text-primary">
              Karnali<span className="text-accent">X</span>
            </span>
          </Link>
          <h1 className="text-3xl font-heading font-bold mb-4">Welcome Back!</h1>
          <p className="text-muted-foreground">
            Login to access your account and start winning big with KarnaliX.
          </p>
          
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-heading font-bold text-primary">50K+</div>
              <div className="text-xs text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-accent">₹10M+</div>
              <div className="text-xs text-muted-foreground">Won Daily</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-primary">24/7</div>
              <div className="text-xs text-muted-foreground">Support</div>
            </div>
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
            <h2 className="text-2xl font-heading font-bold mb-2">Login</h2>
            <p className="text-muted-foreground text-sm mb-8">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full btn-primary py-3 text-base">
                Login <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl 
                               bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
                <span>📱</span> Phone
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl 
                               bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
                <span>🌐</span> Google
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-8 text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
