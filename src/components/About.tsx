import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, User } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Vision",
      description: "A future where our collective responsibility drives sustainable water conservation today and for generations to come.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Mission", 
      description: "To significantly reduce water wastage and deliver purity, health, and hygiene to our customers through economical and innovative solutions.",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "Purpose",
      description: "To conduct business in a way that fosters environmental sustainability and promotes social equity at every step as core value.",
      color: "text-success"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-ocean bg-clip-text text-transparent">M-Rom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a clear mission to revolutionize water conservation through intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              M-Rom was founded with a clear and impactful goal to significantly improve water conservation 
              through intelligent and effective drinking water solutions. We continuously seek innovative 
              approaches and have introduced the country's first "Centralized Water Purification and Distribution System".
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This system provides households with a reliable, hassle-free, and cost-effective way to access 
              clean drinking water while prioritizing environmental sustainability through minimal waste and 
              encouraging water reuse.
            </p>

            {/* Founder Info */}
            <Card className="bg-gradient-fresh border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mr. Mukesh Sharma</h4>
                    <p className="text-sm text-muted-foreground">
                      Founder & Visionary - A seasoned professional with extensive experience in the water 
                      industry, deeply passionate about creating meaningful solutions for water conservation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-water transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${value.color} bg-current/10 p-3 rounded-full`}>
                        <value.icon className={`h-6 w-6 ${value.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Company Info */}
        <Card className="bg-gradient-ocean text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">ONS BENISON</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Registered Address</h4>
                <p className="opacity-90">
                  A-63, Dayanand Colony,<br />
                  Lajpat Nagar -IV,<br />
                  New Delhi -110024
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Information</h4>
                <p className="opacity-90">
                  Sales: +91-9810667946<br />
                  Service: +91-8824777770, 011-41444033<br />
                  Email: ons.benison@gmail.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;