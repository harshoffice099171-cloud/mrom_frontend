import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "A-63, Dayanand Colony, Lajpat Nagar -IV, New Delhi -110024",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "Sales: +91-9810667946\nService: +91-8824777770, 011-41444033",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ons.benison@gmail.com",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM",
      color: "text-primary-glow"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Contact <span className="bg-gradient-ocean bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for any questions, support, or to start your water subscription
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-water">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Get in Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${info.color} bg-current/10 p-3 rounded-full flex-shrink-0`}>
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-background/80 backdrop-blur-sm border-accent/20">
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

           {/* Contact Form */}
           <Card className="bg-background shadow-glow border-primary/20">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="What is this regarding?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={4}
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-ocean text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of satisfied customers who have made the switch to clean, sustainable water
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#plans">
                  <Button variant="secondary" size="lg">
                    View Our Plans
                  </Button>
                </a>
                <Link to="/schedule-installation">
                  <Button variant="secondary" size="lg" className="bg-white text-primary border-white hover:bg-primary-foreground hover:text-primary hover:opacity-80 transition-opacity">
                    Schedule Installation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;