import { Link } from "wouter";
import { Leaf, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  const handleNavigation = (to: string) => {
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Our Products", to: "/products" },
    { name: "Information", to: "/information" },
    { name: "Contact Us", to: "/contact" },
    { name: "Gallery", to: "/gallery" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-deep-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-warm-brown rounded-full flex items-center justify-center">
                <Leaf className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl">Cinnara Royal</h3>
                <p className="font-script text-dull-yellow">Premium Ceylon Cinnamon</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Bringing you the world's finest Ceylon cinnamon, proudly grown and hand-harvested 
              in Sri Lanka with centuries-old artisanal craftsmanship.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-warm-brown rounded-full flex items-center justify-center hover:bg-dull-yellow transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="text-white w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-dull-yellow transition-colors"
                    onClick={() => handleNavigation(link.to)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-dull-yellow/50"
                required
              />
              <Button
                type="submit"
                className="w-full bg-warm-brown text-white hover:bg-dull-yellow hover:text-deep-brown transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Cinnara Royal Pvt. Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/information" 
              className="text-white/60 hover:text-dull-yellow transition-colors"
              onClick={() => handleNavigation('/information')}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/information" 
              className="text-white/60 hover:text-dull-yellow transition-colors"
              onClick={() => handleNavigation('/information')}
            >
              Terms of Service
            </Link>
            <Link 
              to="/information" 
              className="text-white/60 hover:text-dull-yellow transition-colors"
              onClick={() => handleNavigation('/information')}
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;