import aboutTeam from "@/assets/about-team.png";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            The Architects of <span className="text-gradient">Digital Growth</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            Aeroweb Designs is a premium web design agency focused on one thing: measurable business results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img src={aboutTeam} alt="Aeroweb Designs Team" className="w-full h-[600px] object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" />
          </div>
          
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Design is just the beginning.</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Most agencies build pretty websites that sit there doing nothing. We build digital assets engineered to work as hard as you do.
              </p>
              <p>
                By combining cutting-edge aesthetics with deep behavioral psychology and conversion rate optimization (CRO) principles, we create experiences that guide your visitors naturally toward the sale.
              </p>
              <p>
                Our team of elite designers, developers, and strategists work in unison to ensure every pixel serves a purpose—maximizing your ROI and elevating your brand above the competition.
              </p>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary text-primary-foreground shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-105 transition-all">
                Schedule your call now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}