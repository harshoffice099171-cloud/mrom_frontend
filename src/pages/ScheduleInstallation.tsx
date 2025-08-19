import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import blueBuildingsBg from "@/assets/blue-buildings-bg.jpg";

const ScheduleInstallation = () => {
  return (
    <div className="min-h-screen bg-gradient-fresh flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${blueBuildingsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <div className="w-full max-w-3xl mx-auto relative z-10">
        <Card className="bg-background/95 backdrop-blur-sm shadow-glow border-primary/20">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <img 
                src="/mrom_logo.svg" 
                alt="M-Rom Logo" 
                className="h-10 w-30"
              />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Schedule Your Installation</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our team will contact you to schedule your installation
              </p>
            </div>
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </CardHeader>

          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email address" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Installation Address
                </label>
                <Textarea 
                  placeholder="Enter your complete installation address" 
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Installation Date
                </label>
                <Input 
                  type="date" 
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Notes
                </label>
                <Textarea 
                  placeholder="Any specific requirements or questions about the installation..." 
                  rows={4}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Request Installation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScheduleInstallation; 