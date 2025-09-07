import { Card } from "./card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 shadow-card border-0 bg-card/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-32 h-32 bg-gradient-primary rounded-full mb-6 flex items-center justify-center shadow-soft">
                  <span className="text-4xl font-bold text-white">SJ</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Crafting Stories That Connect
                </h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I'm a creative content writer with a passion for turning ideas into words that warm hearts and inspire action. With over 5 years of experience, I've discovered that the best content doesn't just inform—it creates genuine connections.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey began with a simple belief: every brand, no matter how big or small, has a unique story that deserves to be told beautifully. I specialize in crafting content that feels personal, professional, and authentically human.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not writing, you'll find me exploring local coffee shops (the best ideas happen over a good latte), reading everything from classic literature to modern marketing blogs, and continuously learning new ways to make words work magic.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;