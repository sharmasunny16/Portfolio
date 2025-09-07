import { Card } from "./card";
import { Badge } from "./badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Content Writing",
      skills: ["Blog Writing", "Website Copy", "Email Marketing", "Social Media", "SEO Writing"],
      color: "bg-gradient-primary"
    },
    {
      title: "Creative Skills",
      skills: ["Storytelling", "Brand Voice", "Creative Strategy", "Content Planning", "Editorial Design"],
      color: "bg-gradient-warm"
    },
    {
      title: "Tools & Platforms",
      skills: ["WordPress", "Webflow", "Mailchimp", "Google Analytics", "Figma"],
      color: "bg-primary"
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Project Management", "Research", "Adaptability", "Collaboration"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A blend of creative storytelling and strategic thinking, always growing and evolving
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-soft transition-smooth border-0 bg-card/50 backdrop-blur-sm group hover:scale-105">
                <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center shadow-soft group-hover:shadow-warm transition-smooth`}>
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;