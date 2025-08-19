import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Droplets, Shield } from "lucide-react";

const SubscriptionPlans = () => {
  const [selectedZone, setSelectedZone] = useState("Z1");
  
  const zones = [{
    id: "Z1",
    name: "Zone 1",
    description: "Up to 999 TDS"
  }, {
    id: "Z2",
    name: "Zone 2", 
    description: "1000-2000 TDS"
  }, {
    id: "Z3",
    name: "Zone 3",
    description: ">2000 TDS"
  }];

  const planData = {
    Z1: {
      starter: {
        price: 249,
        litres: 500
      },
      smart: {
        price: 699,
        litres: 1600
      },
      saver: {
        price: 1349,
        litres: 2200
      },
      max: {
        price: 2599,
        litres: 6500
      }
    },
    Z2: {
      starter: {
        price: 299,
        litres: 500
      },
      smart: {
        price: 849,
        litres: 1600
      },
      saver: {
        price: 1649,
        litres: 2200
      },
      max: {
        price: 3149,
        litres: 6500
      }
    },
    Z3: {
      starter: {
        price: 349,
        litres: 500
      },
      smart: {
        price: 999,
        litres: 1600
      },
      saver: {
        price: 1949,
        litres: 2200
      },
      max: {
        price: 3699,
        litres: 6500
      }
    }
  };

  const plans = [{
    id: "starter",
    name: "Starter Plan",
    description: "Perfect for small families",
    features: [
      "500 Litres pure drinking water",
      "Basic IoT monitoring",
      "Monthly delivery",
      "Email support"
    ],
    popular: false,
    color: "border-primary/20"
  }, {
    id: "smart",
    name: "Smart Plan",
    description: "Most popular choice",
    features: [
      "1600 Litres pure drinking water",
      "Advanced IoT features",
      "Bi-weekly delivery",
      "Priority support",
      "Usage analytics"
    ],
    popular: true,
    color: "border-accent"
  }, {
    id: "saver",
    name: "Saver Plan",
    description: "Best value for money",
    features: [
      "2200 Litres pure drinking water",
      "Full IoT suite",
      "Weekly delivery",
      "24/7 support",
      "Usage analytics",
      "Maintenance included"
    ],
    popular: false,
    color: "border-success"
  }, {
    id: "max",
    name: "Max Value Plan",
    description: "For large families",
    features: [
      "6500 Litres pure drinking water",
      "Premium IoT features",
      "On-demand delivery",
      "Dedicated support",
      "Advanced analytics",
      "Free maintenance",
      "Emergency backup"
    ],
    popular: false,
    color: "border-primary"
  }];

  const currentPricing = planData[selectedZone as keyof typeof planData];
  return <section id="plans" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Subscription <span className="bg-gradient-ocean bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your family's water needs
          </p>

          {/* Zone Selector */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-medium text-muted-foreground">Select Your Water Quality Zone (TDS Level)</h3>
            <div className="bg-muted p-2 rounded-lg inline-flex space-x-1">
              {zones.map(zone => (
                <button 
                  key={zone.id} 
                  onClick={() => setSelectedZone(zone.id)} 
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-all flex flex-col items-center
                    ${selectedZone === zone.id 
                      ? "bg-primary text-primary-foreground shadow-water" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10"
                    }
                  `}
                >
                  <span>{zone.name}</span>
                  <span className="text-xs mt-1 opacity-80">{zone.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
          const pricing = currentPricing[plan.id as keyof typeof currentPricing];
          return <Card key={plan.id} className={`relative hover:shadow-water transition-all duration-300 hover:scale-105 ${plan.color} ${plan.popular ? "ring-2 ring-accent shadow-eco" : ""}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-eco text-accent-foreground px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>}

                <CardHeader className="text-center pb-4">
                  <div className={`${plan.popular ? 'text-accent' : 'text-primary'} bg-current/10 p-3 rounded-full w-fit mx-auto mb-4`}>
                    <Droplets className={`h-8 w-8 ${plan.popular ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-foreground">
                      ₹{pricing.price}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {pricing.litres}L included
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>

                  <Link 
                    to={`/auth?mode=register&plan=${plan.id}&zone=${selectedZone}`}
                    className="block"
                  >
                    <Button 
                      variant={plan.popular ? "eco" : "cta"} 
                      className="w-full mt-6" 
                      size="lg"
                    >
                      Subscribe Now
                    </Button>
                  </Link>

                  <div className="text-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      30-day validity • Cancel anytime
                    </span>
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-fresh border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose Our Plans?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">No Installation Cost</h4>
                  <p className="text-muted-foreground">
                    We handle all setup and installation completely free of charge
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <Droplets className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Flexible Usage</h4>
                  <p className="text-muted-foreground">
                    Pay only for what you use with our transparent pricing model
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-success/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <Check className="h-6 w-6 text-success" />
                  </div>
                  <h4 className="font-semibold mb-2">Maintenance Free</h4>
                  <p className="text-muted-foreground">
                    Complete maintenance and service included in all plans
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SubscriptionPlans;