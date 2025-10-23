import {
  Code,
  Palette,
  Sparkles,
  Brain,
  Smartphone,
  Globe,
  Megaphone,
  LineChart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "services.web.title",
    description: "services.web.desc",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "services.web.features.0",
      "services.web.features.1",
      "services.web.features.2",
      "services.web.features.3",
    ],
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "services.app.title",
    description: "services.app.desc",
    gradient: "from-blue-500 to-purple-500",
    features: [
      "services.app.features.0",
      "services.app.features.1",
      "services.app.features.2",
      "services.app.features.3",
    ],
  },
  {
    id: "uiux-design",
    icon: Palette,
    title: "services.uiux.title",
    description: "services.uiux.desc",
    gradient: "from-pink-500 to-red-500",
    features: [
      "services.uiux.features.0",
      "services.uiux.features.1",
      "services.uiux.features.2",
      "services.uiux.features.3",
    ],
  },
  {
    id: "brand-identity",
    icon: Sparkles,
    title: "services.brand.title",
    description: "services.brand.desc",
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "services.brand.features.0",
      "services.brand.features.1",
      "services.brand.features.2",
      "services.brand.features.3",
    ],
  },
  {
    id: "ai-transformation",
    icon: Brain,
    title: "services.ai.title",
    description: "services.ai.desc",
    gradient: "from-green-500 to-teal-500",
    features: [
      "services.ai.features.0",
      "services.ai.features.1",
      "services.ai.features.2",
      "services.ai.features.3",
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "services.marketing.title",
    description: "services.marketing.desc",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "services.marketing.features.0",
      "services.marketing.features.1",
      "services.marketing.features.2",
      "services.marketing.features.3",
    ],
  },
  {
    id: "data-analytics",
    icon: LineChart,
    title: "services.analytics.title",
    description: "services.analytics.desc",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "services.analytics.features.0",
      "services.analytics.features.1",
      "services.analytics.features.2",
      "services.analytics.features.3",
    ],
  },
  {
    id: "code",
    icon: Code,
    title: "services.code.title",
    description: "services.code.desc",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "services.code.features.0",
      "services.code.features.1",
      "services.code.features.2",
      "services.code.features.3",
    ],
  },
];


const AllServicesPage = () => {
    const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">{t("services.title")}</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
 {t("services.subtitle")}            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-lg transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary-light transition-colors">
                    {t(service.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {t(service.description)}
                  </CardDescription>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                        <span>{t(feature)}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/service/${service.id}`}>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-primary/50 hover:bg-primary/10 transition-all"
                    >
                 {t("services.learnMore")}

                  </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="mt-16 text-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg text-foreground/70 mb-6">
              لم تجد ما تبحث عنه؟ نحن نقدم حلولاً مخصصة لتلبية احتياجاتك
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-primary glow hover:glow-lg transition-all duration-300"
              >
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllServicesPage;
