import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Portfolio Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t("portfolio.title")}</span>
            </h2>
            <p className="text-xl text-foreground/70">
              {t("portfolio.subtitle")}
            </p>
          </div>
          <Portfolio />
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                {t("portfolio.viewAll")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur-lg rounded-3xl p-12 border border-primary/20 glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{t("cta.title")}</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-project">
              <Button size="lg" className="gradient-primary glow hover:glow-lg transition-all duration-300">
                {t("hero.startProject")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                {t("hero.contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 PIXELLOGICOF. {t("footer.rights")}</p>
          <p className="mt-2">{t("footer.tagline")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
