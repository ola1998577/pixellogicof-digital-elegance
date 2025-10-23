import { Code, Palette, Sparkles, Brain, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: "web-development",
      icon: Globe,
      titleKey: "services.web.title",
      descKey: "services.web.desc",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "app-development",
      icon: Smartphone,
      titleKey: "services.app.title",
      descKey: "services.app.desc",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: "uiux-design",
      icon: Palette,
      titleKey: "services.uiux.title",
      descKey: "services.uiux.desc",
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: "brand-identity",
      icon: Sparkles,
      titleKey: "services.brand.title",
      descKey: "services.brand.desc",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: "ai-transformation",
      icon: Brain,
      titleKey: "services.ai.title",
      descKey: "services.ai.desc",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: "code",
      icon: Code,
      titleKey: "services.code.title",
      descKey: "services.code.desc",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];
  
  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("services.title")}</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/service/${service.id}`}
              className="group relative overflow-hidden bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:glow-lg transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-light transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {t(service.descKey)}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary-light hover:text-primary hover:bg-transparent group/btn"
                >
                  <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>{t("services.learnMore")}</span>
                  <span className={`inline-block group-hover/btn:-translate-x-1 transition-transform ${language === 'ar' ? '' : 'rotate-180'}`}>←</span>
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 transition-all">
              {t("services.viewAll")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
