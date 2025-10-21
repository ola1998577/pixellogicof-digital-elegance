import { Code, Palette, Sparkles, Brain, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "تطوير مواقع الويب",
    description: "مواقع ويب متجاوبة وسريعة تجمع بين الأداء والجمال، مبنية بأحدث التقنيات لتوفير تجربة استثنائية.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "تطوير تطبيقات الجوال",
    description: "تطبيقات جوال قوية لنظامي iOS و Android، توفر تجربة مستخدم سلسة وأداء عالي على جميع الأجهزة.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: "uiux-design",
    icon: Palette,
    title: "تصميم UI/UX",
    description: "تصميمات تركز على المستخدم تجمع بين الجمالية والوظيفية، تخلق تجارب بديهية تسعد المستخدمين.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    id: "brand-identity",
    icon: Sparkles,
    title: "الهوية البصرية",
    description: "هويات بصرية متكاملة تروي قصة علامتك التجارية وتميزك في السوق بتصميم فريد واحترافي.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "ai-transformation",
    icon: Brain,
    title: "الذكاء الاصطناعي",
    description: "حلول ذكاء اصطناعي متقدمة تحول عملياتك، تزيد الكفاءة، وتفتح آفاق جديدة للابتكار والنمو.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "code",
    icon: Code,
    title: "حلول برمجية مخصصة",
    description: "برمجيات مصممة خصيصاً لتلبية احتياجات عملك الفريدة، قابلة للتوسع وتنمو معك خطوة بخطوة.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">ماذا نقدم</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            نجمع بين التكنولوجيا المتقدمة والإبداع لتقديم حلول رقمية متكاملة
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
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary-light hover:text-primary hover:bg-transparent group/btn"
                >
                  <span className="ml-2">اعرف المزيد</span>
                  <span className="inline-block group-hover/btn:-translate-x-1 transition-transform">←</span>
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
              عرض جميع الخدمات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
