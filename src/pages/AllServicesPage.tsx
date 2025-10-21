import { Code, Palette, Sparkles, Brain, Smartphone, Globe, Megaphone, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "تطوير مواقع الويب",
    description: "نبني مواقع ويب متجاوبة وسريعة تعمل بسلاسة على جميع الأجهزة، من المواقع التعريفية إلى المنصات المعقدة.",
    features: ["React & Next.js", "تصميم متجاوب", "أداء عالي", "SEO محسّن"],
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "تطوير تطبيقات الجوال",
    description: "تطبيقات جوال أصلية وهجينة توفر تجربة مستخدم سلسة وقوية لنظامي iOS و Android.",
    features: ["React Native", "Flutter", "تجربة سلسة", "دعم متعدد المنصات"],
  },
  {
    id: "uiux-design",
    icon: Palette,
    title: "تصميم UI/UX",
    description: "تصميمات تركز على المستخدم تجمع بين الجمال والوظائف، تخلق تجارب بديهية تسعد المستخدمين.",
    features: ["Figma & Adobe XD", "بحث المستخدم", "نماذج تفاعلية", "اختبار قابلية الاستخدام"],
  },
  {
    id: "brand-identity",
    icon: Sparkles,
    title: "الهوية البصرية والعلامة التجارية",
    description: "حلول علامة تجارية شاملة تروي قصتك وتميزك في المشهد الرقمي.",
    features: ["تصميم الشعار", "دليل العلامة التجارية", "مواد تسويقية", "هوية بصرية متكاملة"],
  },
  {
    id: "ai-transformation",
    icon: Brain,
    title: "الذكاء الاصطناعي والتحول الرقمي",
    description: "استغل قوة الذكاء الاصطناعي للابتكار والأتمتة وتحويل عمليات عملك.",
    features: ["تعلم الآلة", "معالجة اللغة", "أتمتة العمليات", "تحليل البيانات"],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويق رقمي فعالة تزيد من وصولك وتحقق نتائج قابلة للقياس.",
    features: ["إدارة وسائل التواصل", "إنشاء المحتوى", "تحسين محركات البحث", "إعلانات مدفوعة"],
  },
  {
    id: "data-analytics",
    icon: LineChart,
    title: "تحليل البيانات",
    description: "حوّل بياناتك إلى رؤى قابلة للتنفيذ من خلال التحليلات المتقدمة ولوحات المعلومات التفاعلية.",
    features: ["تصور البيانات", "تقارير مخصصة", "تحليلات تنبؤية", "تتبع الأداء"],
  },
  {
    id: "code",
    icon: Code,
    title: "حلول برمجية مخصصة",
    description: "برمجيات مخصصة تلبي احتياجات عملك الفريدة وتنمو معك.",
    features: ["حلول قابلة للتوسع", "تكامل API", "صيانة ودعم", "استشارات تقنية"],
  },
];

const AllServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">خدماتنا</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              نقدم حلولاً رقمية متكاملة تجمع بين التكنولوجيا المتقدمة والتصميم الإبداعي
            </p>
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
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-light" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/service/${service.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      اعرف المزيد
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground/70 mb-6">
              لم تجد ما تبحث عنه؟ نحن نقدم حلولاً مخصصة لتلبية احتياجاتك
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary glow hover:glow-lg transition-all duration-300">
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
