import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" }
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Warranty Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/mrom_logo.svg" 
                alt="M-Rom Logo" 
                className="h-8 w-8 brightness-0 invert"
              />
              <div>
                <div className="text-xl font-bold">M-Rom</div>
              </div>
              <img 
                src="/ons_logo.svg" 
                alt="ONS Benison Logo" 
                className="h-6 w-6 ml-2 brightness-0 invert"
              />
              <div>
                <div className="text-sm opacity-75">ONS BENISON</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              India's first Centralized Water Purification & Distribution System. 
              Committed to providing clean, safe water while protecting our environment.
            </p>
            <div className="text-sm">
              <div className="font-semibold text-accent-glow mb-2">Our Tagline:</div>
              <div className="italic">"Aap Ke Pani Ka Rakhen Khayal"</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent-glow transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Policies</h3>
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent-glow transition-all duration-200"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent-glow flex-shrink-0 mt-0.5" />
                <div className="opacity-90">
                  A-63, Dayanand Colony,<br />
                  Lajpat Nagar -IV,<br />
                  New Delhi -110024
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-accent-glow flex-shrink-0 mt-0.5" />
                <div className="opacity-90">
                  <div>Sales: +91-9810667946</div>
                  <div>Service: +91-8824777770</div>
                  <div>Helpline: 011-41444033</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-glow flex-shrink-0" />
                <div className="opacity-90">ons.benison@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-75">
              © 2024 M-Rom (ONS BENISON). All rights reserved.
            </div>
            <div className="text-sm opacity-75">
              Made with 💧 for a sustainable future
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;