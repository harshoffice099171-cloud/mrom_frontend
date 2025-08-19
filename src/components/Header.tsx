import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-water">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/mrom_logo.svg" 
                alt="M-Rom Logo" 
                className="h-12 w-30"
              />
{/*               <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">M-Rom</span>
                <span className="text-xs text-muted-foreground">ONS BENISON</span>
              </div> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/auth?mode=login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/auth?mode=register">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <Button variant="ghost" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <nav className="flex flex-col">
              {/* Navigation Links */}
              <div className="space-y-4 mb-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors px-4 py-2 block text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Auth Section */}
              {!user ? (
                <div className="px-4 pt-4 border-t border-border">
                  <Link 
                    to="/auth?mode=login" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block mb-4"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full justify-center py-3 text-base font-medium hover:bg-muted transition-colors"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link 
                    to="/auth?mode=register" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <Button 
                      className="w-full justify-center py-3 text-base font-medium bg-primary hover:bg-primary/90 transition-colors shadow-md"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="px-4 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="w-full justify-center py-3 text-base font-medium hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;