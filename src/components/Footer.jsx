import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { Button } from "./button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      href: "https://github.com",
      label: "View my projects on GitHub"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://linkedin.com",
      label: "Connect with me on LinkedIn"
    },
    { 
      name: "Email", 
      icon: Mail, 
      href: "mailto:hello@example.com",
      label: "Send me an email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-footer relative overflow-hidden text-white" style={{ backgroundColor: '#121212' }}>
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-footer-foreground mb-2">
                  Let's Build Something Amazing
                </h3>
                <p className="text-footer-muted text-lg leading-relaxed max-w-md">
                  Passionate developer crafting digital experiences with modern technologies. 
                  Always excited to collaborate on innovative projects.
                </p>
              </div>
              
              {/* CTA Button */}
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-footer-accent text-footer-accent hover:bg-footer-accent hover:text-footer-foreground transition-smooth group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-footer-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-footer-muted hover:text-footer-accent transition-smooth relative group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-footer-accent transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-footer-foreground font-semibold mb-4">Connect</h4>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-footer-muted hover:text-footer-accent transition-bounce group flex items-center space-x-3"
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-footer-border mb-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-footer-muted">
              <span>© {currentYear} Your Portfolio.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#privacy" 
                className="text-footer-muted hover:text-footer-accent transition-smooth text-sm"
              >
                Privacy
              </a>
              <a 
                href="#terms" 
                className="text-footer-muted hover:text-footer-accent transition-smooth text-sm"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Subtle glow effect at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-footer-accent to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;