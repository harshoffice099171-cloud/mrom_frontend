import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplets, Shield, Leaf, Zap } from "lucide-react";
import heroImage from "@/assets/hero-family-water.jpg";
import blueBuildingsBg from "@/assets/blue-buildings-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 lg:pt-24 pb-8 lg:pb-20 min-h-[100vh] sm:min-h-screen bg-gradient-fresh">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${blueBuildingsBg})` }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-float py-3">
            <div className="space-y-4">

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  Aap Ke Pani Ka
                </span>
                <br />
                <span className="text-foreground">Rakhen Khayal</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Experience India's first Centralized Water Purification & Distribution System. 
                IoT-enabled, environment-friendly, and hassle-free clean water delivery directly to your kitchen.
              </p>
            </div>

            {/* Features Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
              <div className="flex items-center space-x-3 p-4 sm:p-3 bg-background/80 rounded-xl backdrop-blur-sm shadow-sm border border-primary/10 hover:bg-background/90 transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 sm:h-5 sm:w-5 text-primary" />
                </div>
                <span className="text-sm sm:text-sm font-semibold text-foreground">Safe Water</span>
              </div>
              <div className="flex items-center space-x-3 p-4 sm:p-3 bg-background/80 rounded-xl backdrop-blur-sm shadow-sm border border-accent/10 hover:bg-background/90 transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-accent/10 rounded-lg">
                  <Leaf className="h-5 w-5 sm:h-5 sm:w-5 text-accent" />
                </div>
                <span className="text-sm sm:text-sm font-semibold text-foreground">100% Reuse</span>
              </div>
              <div className="flex items-center space-x-3 p-4 sm:p-3 bg-background/80 rounded-xl backdrop-blur-sm shadow-sm border border-primary/10 hover:bg-background/90 transition-all duration-300">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-5 w-5 sm:h-5 sm:w-5 text-primary-glow" />
                </div>
                <span className="text-sm sm:text-sm font-semibold text-foreground">IoT Enabled</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/auth?mode=register" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Get Started
                  <Droplets className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                </Button>
              </Link>
              <a href="#plans" className="w-full sm:w-auto">
                <Button variant="water" size="xl" className="w-full sm:w-auto">
                  View Plans
                </Button>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-4 lg:mt-0 animate-float py-3">
            <div className="relative rounded-2xl overflow-hidden shadow-glow mx-2 sm:mx-0">
              <img
                src={heroImage}
                alt="Happy family with clean water in modern kitchen"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats - Better mobile positioning */}
            <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 bg-background p-2 sm:p-4 rounded-xl shadow-water border border-primary/20">
              <div className="text-lg sm:text-2xl font-bold text-primary">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Water Reuse</div>
            </div>
            
            <div className="absolute top-2 right-2 sm:-top-6 sm:-right-6 bg-background p-2 sm:p-4 rounded-xl shadow-eco border border-accent/20">
              <div className="text-lg sm:text-2xl font-bold text-accent">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Pure Water</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;