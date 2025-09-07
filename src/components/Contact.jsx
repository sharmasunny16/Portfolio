import { Button } from "./button";
import { Card } from "./card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Have a story that needs telling? A brand that deserves beautiful words? 
            I'd love to hear about your project and explore how we can bring your vision to life.
          </p>
          
          <Card className="p-8 md:p-12 shadow-card bg-gradient-primary text-white border-0 mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to start your story?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Whether you're launching something new, refreshing your brand voice, or just want to chat about the magic of words, I'm here for it. Every great project starts with a simple hello.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-smooth"
                onClick={() => window.open('mailto:hello@sarahjohnson.com', '_blank')}
              >
                Send me an email
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-warm"
                onClick={() => window.open('https://linkedin.com/in/sarahjohnson', '_blank')}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary text-xl">📧</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Email</h4>
              <p className="text-muted-foreground">hello@sarahjohnson.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary text-xl">💼</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">LinkedIn</h4>
              <p className="text-muted-foreground">@sarahjohnson</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary text-xl">☕</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Coffee Chat</h4>
              <p className="text-muted-foreground">Always up for a good conversation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;