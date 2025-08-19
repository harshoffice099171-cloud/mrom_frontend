import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Shield, 
  Leaf, 
  Zap, 
  Filter,
  Home,
  Clock,
  DollarSign
} from "lucide-react";
import processImage from "@/assets/water-process.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";

const Services = () => {
  const features = [
    {
      icon: Shield,
      title: "Double Protection Process",
      description: "Advanced filtration ensures safe and healthy water with dual protection layers",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "IoT-Enabled System",
      description: "Smart monitoring and control through cutting-edge Internet of Things technology",
      color: "text-primary-glow"
    },
    {
      icon: Leaf,
      title: "100% Water Reuse",
      description: "Revolutionary system that converts RO-rejected water into a resource, not waste",
      color: "text-accent"
    },
    {
      icon: DollarSign,
      title: "Pay-Per-Use Model",
      description: "Cost-effective solution with no upfront costs or ongoing maintenance burdens",
      color: "text-success"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Water Intake",
      description: "Municipal water is collected and pre-filtered"
    },
    {
      step: "2", 
      title: "Centralized Purification",
      description: "Advanced RO and multi-stage filtration process"
    },
    {
      step: "3",
      title: "Hygienic Storage",
      description: "Purified water stored in sanitized tanks"
    },
    {
      step: "4",
      title: "IoT-Controlled Delivery",
      description: "Smart dispensing directly to your kitchen"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-ocean bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Introducing Centralized Purified Water Direct to Kitchen (CPW-D2K)
          </p>
        </div>

        {/* Main Service Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">CPW-D2K System</h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              It delivers purified drinking water directly to your kitchen through a smart, 
              IoT-enabled system, ensuring safe, healthy, and hassle-free solution for your 
              entire household. In addition to providing clean and healthy water, it also helps 
              save millions of litres of water by preventing wastage.
            </p>

            <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-accent/20">
              <div className="flex items-center space-x-3 mb-3">
                <Leaf className="h-6 w-6 text-accent" />
                <h4 className="font-semibold text-foreground">Environmental Impact</h4>
              </div>
              <p className="text-muted-foreground">
                CPW-D2K turns RO-rejected water into a resource, not waste. By reusing 100% of it, 
                we take a small step toward a greener future with a big environmental payoff.
              </p>
            </div>

            <Button variant="eco" size="lg" className="group">
              Learn More
              <Droplets className="h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={sustainabilityImage}
              alt="Environmental sustainability and water conservation"
              className="w-full rounded-2xl shadow-eco"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-water transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <div className={`${feature.color} bg-current/10 p-3 rounded-full w-fit`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-water">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">How It Works</h3>
            <p className="text-muted-foreground">
              A seamless, professionally managed process that eliminates service burdens for our customers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-ocean text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                src={processImage}
                alt="Water purification process illustration"
                className="w-full rounded-xl shadow-glow"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;