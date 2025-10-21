import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 PIXELLOGICOF. All rights reserved.</p>
          <p className="mt-2">Built with passion, powered by innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
