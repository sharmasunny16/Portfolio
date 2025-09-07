import { Button } from "./button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#070F2B' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/30 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary/40 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in mb-6">
          <p className="text-lg md:text-xl text-white/80 font-medium">
            Hello, I'm
          </p>
        </div>

        {/* Name */}
        <div className="animate-fade-in-delay-1 mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-primary-glow to-accent bg-clip-text text-transparent">
              Sunny Sharma
            </span>
          </h1>
        </div>

        {/* Title */}
        <div className="animate-fade-in-delay-2 mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90 mb-6">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I craft beautiful, functional web experiences with modern technologies. 
            Passionate about creating digital solutions that make a difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero-outline" size="lg" className="group">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-delay-3 flex justify-center space-x-6">
          <a 
            href="#" 
            className="p-3 rounded-full bg-glass border border-glass-border backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-hero-glow group"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-white group-hover:text-primary-glow transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-glass border border-glass-border backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-hero-glow group"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-white group-hover:text-primary-glow transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-glass border border-glass-border backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-hero-glow group"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-white group-hover:text-primary-glow transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
    </section>
  );
};

export default HeroSection;
