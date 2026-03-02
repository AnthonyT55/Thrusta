import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import { ArrowRight, BarChart3, Magnet, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Abstract technology background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Premium Web Design Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Stop Losing Customers to <span className="text-gradient block mt-2">Better Websites</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Your website is your best salesperson. We engineer high-performance digital experiences that convert visitors into revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all hover:scale-105 w-full sm:w-auto font-semibold">
              Schedule your call now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 bg-background relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">We Don't Just Build Websites</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">We engineer growth engines. Our designs are strategically crafted to solve your three biggest business challenges.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-500">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Improve Conversion Rates</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">We optimize every touchpoint and eliminate friction, turning a higher percentage of your traffic into paying customers.</p>
            </div>
            
            <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-500 delay-100">
              <div className="h-20 w-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-500">
                <Magnet className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Boost Lead Generation</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Strategic calls-to-action and psychological design principles capture high-quality leads consistently, day and night.</p>
            </div>
            
            <div className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-3 transition-all duration-500 delay-200">
              <div className="h-20 w-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500">
                <Zap className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Maximize Retention</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Fast loading speeds, intuitive navigation, and premium aesthetics keep users engaged and coming back for more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to dominate your market?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Stop leaving money on the table. Let's build a website that reflects the true quality of your business.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:scale-105 transition-all">
            Schedule your call now
          </Button>
        </div>
      </section>
    </div>
  );
}