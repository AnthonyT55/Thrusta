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

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Design is just the beginning.</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-center">
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
            
            <div className="pt-8 flex justify-center">
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