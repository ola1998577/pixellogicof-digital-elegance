import { useParams, Link } from "react-router-dom";
import { Code, Palette, Sparkles, Brain, Smartphone, Globe, Megaphone, LineChart, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const serviceDetails = {
  "web-development": {
    icon: Globe,
    title: "تطوير مواقع الويب",
    description: "نبني مواقع ويب متجاوبة وسريعة تعمل بسلاسة على جميع الأجهزة",
    fullDescription: "نحن نبني مواقع ويب حديثة وعالية الأداء تجمع بين التصميم الجميل والوظائف القوية. نستخدم أحدث التقنيات لضمان أن موقعك سريع وآمن وسهل الاستخدام.",
    benefits: [
      "تصميم متجاوب يعمل على جميع الأجهزة",
      "أداء فائق وسرعة تحميل عالية",
      "تحسين لمحركات البحث (SEO)",
      "لوحة تحكم سهلة الاستخدام",
      "أمان متقدم وحماية البيانات",
      "دعم فني مستمر وصيانة دورية",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    process: [
      { step: "التخطيط والبحث", desc: "نحلل احتياجاتك ونضع خطة مفصلة" },
      { step: "التصميم", desc: "نصمم واجهات جذابة وسهلة الاستخدام" },
      { step: "التطوير", desc: "نبني الموقع باستخدام أحدث التقنيات" },
      { step: "الاختبار", desc: "نختبر الموقع بدقة لضمان الجودة" },
      { step: "الإطلاق", desc: "ننشر الموقع ونوفر التدريب والدعم" },
    ],
  },
  "app-development": {
    icon: Smartphone,
    title: "تطوير تطبيقات الجوال",
    description: "تطبيقات جوال أصلية وهجينة توفر تجربة مستخدم سلسة",
    fullDescription: "نطور تطبيقات جوال متميزة لنظامي iOS و Android تتميز بالأداء العالي والتصميم الجذاب.",
    benefits: [
      "تطبيقات أصلية أو هجينة حسب احتياجك",
      "تجربة مستخدم سلسة وسريعة",
      "تكامل مع خدمات السحابة",
      "إشعارات فورية وتفاعلية",
      "تحديثات منتظمة وصيانة",
      "دعم لجميع أحجام الشاشات",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    process: [
      { step: "البحث والتحليل", desc: "ندرس السوق والمنافسين" },
      { step: "التصميم", desc: "نصمم واجهات مستخدم جذابة" },
      { step: "التطوير", desc: "نبني التطبيق بأعلى معايير الجودة" },
      { step: "الاختبار", desc: "نختبر على أجهزة مختلفة" },
      { step: "النشر", desc: "ننشر على المتاجر ونقدم الدعم" },
    ],
  },
  "uiux-design": {
    icon: Palette,
    title: "تصميم UI/UX",
    description: "تصميمات تركز على المستخدم تجمع بين الجمال والوظائف",
    fullDescription: "نصمم تجارب رقمية استثنائية تجمع بين الجمالية والوظيفية، مع التركيز على احتياجات المستخدم.",
    benefits: [
      "بحث مستخدم شامل",
      "نماذج تفاعلية (Prototypes)",
      "اختبار قابلية الاستخدام",
      "تصميم نظام التصميم (Design System)",
      "إرشادات العلامة التجارية",
      "دعم في مرحلة التطوير",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
    process: [
      { step: "البحث", desc: "نفهم جمهورك واحتياجاتهم" },
      { step: "التخطيط", desc: "نرسم خريطة رحلة المستخدم" },
      { step: "التصميم", desc: "نصمم واجهات جذابة وعملية" },
      { step: "النموذج التفاعلي", desc: "نبني نموذج تفاعلي للاختبار" },
      { step: "التسليم", desc: "نسلم ملفات جاهزة للتطوير" },
    ],
  },
  "brand-identity": {
    icon: Sparkles,
    title: "الهوية البصرية والعلامة التجارية",
    description: "حلول علامة تجارية شاملة تروي قصتك",
    fullDescription: "نبني هويات بصرية قوية تعكس قيم علامتك التجارية وتميزك في السوق.",
    benefits: [
      "تصميم شعار احترافي وفريد",
      "دليل هوية بصرية متكامل",
      "مواد تسويقية متنوعة",
      "تصميم بطاقات العمل والمطبوعات",
      "قوالب وسائل التواصل الاجتماعي",
      "استشارات استراتيجية للعلامة التجارية",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "After Effects"],
    process: [
      { step: "الاكتشاف", desc: "نفهم رؤيتك وقيمك" },
      { step: "البحث", desc: "ندرس السوق والمنافسين" },
      { step: "التصميم", desc: "نصمم هوية فريدة ومميزة" },
      { step: "التطوير", desc: "نطور جميع العناصر البصرية" },
      { step: "التسليم", desc: "نسلم دليل الهوية الكامل" },
    ],
  },
  "ai-transformation": {
    icon: Brain,
    title: "الذكاء الاصطناعي والتحول الرقمي",
    description: "استغل قوة الذكاء الاصطناعي لتحويل عملك",
    fullDescription: "نساعدك على دمج الذكاء الاصطناعي في عملياتك لزيادة الكفاءة والابتكار.",
    benefits: [
      "حلول ذكاء اصطناعي مخصصة",
      "أتمتة العمليات التجارية",
      "تحليل البيانات الذكي",
      "معالجة اللغة الطبيعية",
      "رؤية الحاسوب",
      "استشارات التحول الرقمي",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python", "Machine Learning"],
    process: [
      { step: "التقييم", desc: "نحلل احتياجاتك وفرص التحسين" },
      { step: "التخطيط", desc: "نضع استراتيجية التحول الرقمي" },
      { step: "التطوير", desc: "نبني حلول الذكاء الاصطناعي" },
      { step: "التكامل", desc: "ندمج الحلول مع أنظمتك" },
      { step: "التدريب", desc: "نوفر التدريب والدعم المستمر" },
    ],
  },
  "digital-marketing": {
    icon: Megaphone,
    title: "التسويق الرقمي",
    description: "استراتيجيات تسويق رقمي تحقق نتائج",
    fullDescription: "نطور استراتيجيات تسويق رقمي شاملة تزيد من وصولك وتحقق أهدافك التجارية.",
    benefits: [
      "استراتيجية تسويق متكاملة",
      "إدارة وسائل التواصل الاجتماعي",
      "إنشاء محتوى إبداعي",
      "حملات إعلانية مستهدفة",
      "تحليلات وتقارير مفصلة",
      "تحسين معدل التحويل",
    ],
    technologies: ["Google Ads", "Meta Ads", "SEO Tools", "Analytics", "CRM"],
    process: [
      { step: "التحليل", desc: "ندرس جمهورك والسوق" },
      { step: "الاستراتيجية", desc: "نضع خطة تسويقية فعالة" },
      { step: "التنفيذ", desc: "ننفذ الحملات التسويقية" },
      { step: "المتابعة", desc: "نتابع الأداء ونحلل النتائج" },
      { step: "التحسين", desc: "نحسن باستمرار لأفضل نتائج" },
    ],
  },
  "data-analytics": {
    icon: LineChart,
    title: "تحليل البيانات",
    description: "حوّل بياناتك إلى رؤى قابلة للتنفيذ",
    fullDescription: "نساعدك على فهم بياناتك واتخاذ قرارات مبنية على معلومات دقيقة.",
    benefits: [
      "لوحات معلومات تفاعلية",
      "تقارير مخصصة",
      "تحليلات تنبؤية",
      "تتبع الأداء في الوقت الفعلي",
      "رؤى قابلة للتنفيذ",
      "تكامل مع مصادر البيانات",
    ],
    technologies: ["Power BI", "Tableau", "Python", "SQL", "Excel"],
    process: [
      { step: "جمع البيانات", desc: "نجمع البيانات من مصادر مختلفة" },
      { step: "التنظيف", desc: "ننظف ونجهز البيانات للتحليل" },
      { step: "التحليل", desc: "نحلل البيانات لاستخراج الرؤى" },
      { step: "التصور", desc: "نصمم لوحات معلومات مرئية" },
      { step: "التقارير", desc: "نقدم تقارير دورية وتوصيات" },
    ],
  },
  "code": {
    icon: Code,
    title: "حلول برمجية مخصصة",
    description: "برمجيات مخصصة تلبي احتياجاتك الفريدة",
    fullDescription: "نطور حلول برمجية مخصصة تماماً لتلبية احتياجات عملك الفريدة وتنمو معك.",
    benefits: [
      "حلول مخصصة بالكامل",
      "قابلة للتوسع والنمو",
      "تكامل مع أنظمتك الحالية",
      "أمان وموثوقية عالية",
      "صيانة ودعم فني",
      "استشارات تقنية متخصصة",
    ],
    technologies: ["Custom Stack", "APIs", "Microservices", "Cloud Services"],
    process: [
      { step: "الفهم", desc: "نفهم احتياجاتك بعمق" },
      { step: "التصميم", desc: "نصمم الحل المثالي" },
      { step: "التطوير", desc: "نبني البرمجية بأعلى جودة" },
      { step: "الاختبار", desc: "نختبر بشمولية" },
      { step: "الدعم", desc: "نوفر دعم مستمر" },
    ],
  },
};

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">الخدمة غير موجودة</h1>
          <Link to="/services">
            <Button>العودة للخدمات</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex w-24 h-24 rounded-3xl gradient-primary items-center justify-center mb-6 glow-lg">
                <service.icon className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">{service.title}</span>
              </h1>
              
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-16 animate-fade-in-scale">
              <h2 className="text-3xl font-bold mb-8 text-gradient">الفوائد والمميزات</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-light flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-8 text-gradient">التقنيات المستخدمة</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 text-foreground/80 hover:border-primary hover:glow transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-8 text-gradient">عملية العمل</h2>
              <div className="space-y-4">
                {service.process.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold group-hover:glow transition-all">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary-light transition-colors">
                        {item.step}
                      </h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-card/50 backdrop-blur-lg rounded-3xl p-12 border border-primary/20 glow animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-4">هل أنت مستعد للبدء؟</h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                دعنا نعمل معاً لتحويل رؤيتك إلى واقع رقمي مبهر
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/start-project">
                  <Button size="lg" className="gradient-primary glow hover:glow-lg transition-all duration-300 group">
                    ابدأ مشروعك الآن
                    <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    تواصل معنا
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetailsPage;
