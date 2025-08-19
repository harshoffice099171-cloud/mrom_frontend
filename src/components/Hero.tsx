import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, Leaf, Zap } from "lucide-react";
import heroImage from "@/assets/hero-family-water.jpg";
import blueBuildingsBg from "@/assets/blue-buildings-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 lg:pt-20 min-h-screen bg-gradient-fresh overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${blueBuildingsBg})` }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-float">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/mrom_logo.svg" 
                  alt="M-Rom Logo" 
                  className="h-10 w-30"
                />
            {/*     <span className="text-2xl font-bold text-primary">M-Rom</span> */}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  Aap Ke Pani Ka
                </span>
                <br />
                <span className="text-foreground">Rakhen Khayal</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience India's first Centralized Water Purification & Distribution System. 
                IoT-enabled, environment-friendly, and hassle-free clean water delivery directly to your kitchen.
              </p>
            </div>

            {/* Features Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-background/60 rounded-lg backdrop-blur-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Safe Water</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-background/60 rounded-lg backdrop-blur-sm">
                <Leaf className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">100% Reuse</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-background/60 rounded-lg backdrop-blur-sm">
                <Zap className="h-5 w-5 text-primary-glow" />
                <span className="text-sm font-medium">IoT Enabled</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth?mode=register">
                <Button variant="hero" size="xl" className="group">
                  Get Started
                  <Droplets className="h-5 w-5 group-hover:animate-bounce" />
                </Button>
              </Link>
              <a href="#plans">
                <Button variant="water" size="xl">
                  View Plans
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Happy family with clean water in modern kitchen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-water border border-primary/20">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Water Reuse</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-background p-4 rounded-xl shadow-eco border border-accent/20">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Pure Water</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;