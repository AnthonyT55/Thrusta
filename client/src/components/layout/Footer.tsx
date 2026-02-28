import logo from "@assets/aerowebdesignslogo_1772293911539.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Aeroweb Designs Logo" className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Aeroweb Designs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}