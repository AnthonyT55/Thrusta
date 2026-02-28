import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Gallery() {
  const projects = [
    { id: 1, title: "Fintech Platform", category: "SaaS & Dashboard", image: gallery3 },
    { id: 2, title: "Modern E-Commerce", category: "Retail & Conversion", image: gallery2 },
    { id: 3, title: "Agency Portfolio", category: "Corporate Design", image: gallery1 },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our <span className="text-gradient">Work</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of high-converting digital experiences we've engineered for ambitious brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-6 aspect-[4/3] shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm z-20">
                  <Button variant="outline" className="border-white/20 bg-black/50 hover:bg-primary hover:text-primary-foreground hover:border-primary font-medium text-lg h-12 px-6">
                    View Project <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-secondary font-medium tracking-wide">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-[2rem] p-16 text-center max-w-5xl mx-auto relative overflow-hidden animate-in fade-in duration-1000 delay-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Your project belongs here.</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Ready to upgrade your digital presence and start converting traffic into revenue? Let's discuss your vision.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(0,255,255,0.4)] relative z-10 hover:scale-105 transition-all">
            Schedule your call now
          </Button>
        </div>
      </div>
    </div>
  );
}