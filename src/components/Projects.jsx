import { Card } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

const Projects = () => {
  const projects = [
    {
      title: "EcoHome Brand Storytelling",
      description: "Transformed a sustainable living startup into a relatable brand by crafting authentic stories about real families making eco-friendly changes. Increased website engagement by 150% and helped secure Series A funding.",
      category: "Brand Content",
      impact: "150% engagement increase",
      skills: ["Brand Voice", "Website Copy", "Case Studies"]
    },
    {
      title: "TechStart Email Campaign",
      description: "Created a 12-part email series that turned complex tech concepts into conversational, human stories. The campaign achieved a 42% open rate and 18% click-through rate, well above industry standards.",
      category: "Email Marketing",
      impact: "42% open rate",
      skills: ["Email Marketing", "Storytelling", "Conversion Copy"]
    },
    {
      title: "Wellness Blog Series",
      description: "Developed an empowering 20-article wellness blog series that balanced expert advice with personal anecdotes. Built a community of 10K+ engaged readers and established the client as a thought leader.",
      category: "Content Strategy",
      impact: "10K+ readers",
      skills: ["Blog Writing", "SEO", "Community Building"]
    },
    {
      title: "Creative Agency Rebrand",
      description: "Led the complete content overhaul for a design agency's rebrand, from website copy to client presentation templates. The new voice helped them land 3 major enterprise clients within 6 months.",
      category: "Brand Voice",
      impact: "3 enterprise clients",
      skills: ["Brand Strategy", "Website Copy", "Presentation Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Stories of collaboration, creativity, and meaningful results
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-smooth border-0 bg-card/50 backdrop-blur-sm group">
                <div className="mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    ✨ {project.impact}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="text-xs border-border/50 text-muted-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary hover:bg-primary/5 p-0 h-auto font-medium"
                >
                  Learn more about this project →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;