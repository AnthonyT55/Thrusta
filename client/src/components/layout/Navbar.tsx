import { Link, useLocation } from "wouter";
import logo from "@assets/aerowebdesignslogo_1772293911539.png";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src={logo} alt="Aeroweb Designs Logo" className="h-16 w-auto object-contain transition-transform hover:scale-105" />
          </a>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">
            <a className={`transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-muted-foreground"}`}>About</a>
          </Link>
          <Link href="/gallery">
            <a className={`transition-colors hover:text-primary ${location === "/gallery" ? "text-primary" : "text-muted-foreground"}`}>Gallery</a>
          </Link>
        </div>
        
        <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105 transition-all">
          Schedule your call now
        </Button>
      </div>
    </nav>
  );
}