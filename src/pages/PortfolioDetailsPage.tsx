import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioDetails = {
  "ecommerce-platform": {
    image: portfolio1,
    title: "منصة تجارة إلكترونية",
    category: "تطوير ويب",
    client: "شركة تجارية رائدة",
    duration: "4 أشهر",
    team: "5 محترفين",
    challenge: "كان العميل يحتاج إلى منصة تجارة إلكترونية حديثة وسريعة مع نظام دفع آمن وإدارة مخزون متقدمة.",
    solution: "قمنا ببناء منصة متكاملة باستخدام React و Node.js مع تكامل Stripe للمدفوعات وواجهة إدارية قوية.",
    results: [
      "زيادة بنسبة 300% في معدلات التحويل",
      "تحسين بنسبة 50% في سرعة تحميل الصفحات",
      "زيادة رضا العملاء بنسبة 85%",
      "معالجة +10,000 طلب شهرياً بسلاسة",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
    features: [
      "نظام دفع متعدد العملات",
      "إدارة مخزون ذكية",
      "توصيات منتجات مخصصة",
      "نظام تتبع الطلبات",
      "لوحة تحكم تحليلية",
    ],
  },
  "fitness-app": {
    image: portfolio2,
    title: "تطبيق اللياقة البدنية",
    category: "تطبيق جوال",
    client: "شركة ناشئة في مجال الصحة",
    duration: "3 أشهر",
    team: "4 محترفين",
    challenge: "إنشاء تطبيق جوال سهل الاستخدام لتتبع التمارين والتغذية مع خطط تدريب مخصصة.",
    solution: "طورنا تطبيق باستخدام React Native مع تكامل Firebase للمصادقة والتخزين السحابي.",
    results: [
      "+50,000 تحميل في أول 3 أشهر",
      "تقييم 4.8 نجوم على المتاجر",
      "معدل احتفاظ 70% بعد شهر",
      "مشاركة يومية نشطة 45%",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Push Notifications"],
    features: [
      "خطط تدريب مخصصة",
      "تتبع السعرات الحرارية",
      "مكتبة تمارين بالفيديو",
      "تحديات وإنجازات",
      "تكامل مع أجهزة اللياقة",
    ],
  },
  "corporate-rebrand": {
    image: portfolio3,
    title: "إعادة العلامة التجارية لشركة",
    category: "هوية بصرية",
    client: "شركة استشارات عالمية",
    duration: "2 شهر",
    team: "3 مصممين",
    challenge: "تحديث الهوية البصرية القديمة لتعكس قيم الشركة الحديثة وجذب جمهور أصغر سناً.",
    solution: "أنشأنا هوية بصرية عصرية وأنيقة مع دليل شامل لاستخدام العلامة التجارية.",
    results: [
      "زيادة الوعي بالعلامة التجارية بنسبة 60%",
      "تحسين إدراك العلامة التجارية",
      "جذب 40% من العملاء الجدد تحت 35 سنة",
      "تفاعل أكبر على وسائل التواصل بنسبة 120%",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma"],
    features: [
      "شعار حديث ومتعدد الاستخدامات",
      "لوحة ألوان عصرية",
      "مجموعة أيقونات مخصصة",
      "قوالب وسائل التواصل",
      "دليل هوية بصرية شامل",
    ],
  },
  "ai-analytics": {
    image: portfolio4,
    title: "تحليلات مدعومة بالذكاء الاصطناعي",
    category: "ذكاء اصطناعي",
    client: "شركة بيانات B2B",
    duration: "5 أشهر",
    team: "6 خبراء",
    challenge: "بناء نظام تحليلات متقدم يستخدم الذكاء الاصطناعي لاستخراج رؤى من كميات ضخمة من البيانات.",
    solution: "طورنا منصة تحليلات باستخدام Python و TensorFlow مع لوحة معلومات تفاعلية بـ React.",
    results: [
      "معالجة +1 مليون نقطة بيانات يومياً",
      "دقة تنبؤ 92%",
      "توفير 30 ساعة عمل أسبوعياً",
      "اتخاذ قرارات أسرع بنسبة 75%",
    ],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker", "Kubernetes"],
    features: [
      "تحليلات تنبؤية متقدمة",
      "لوحات معلومات في الوقت الفعلي",
      "تقارير تلقائية",
      "تنبيهات ذكية",
      "تكامل API مع أنظمة خارجية",
    ],
  },
  "saas-platform": {
    image: portfolio1,
    title: "منصة SaaS للإدارة",
    category: "تطوير ويب",
    client: "شركة تقنية متوسطة",
    duration: "6 أشهر",
    team: "7 محترفين",
    challenge: "إنشاء منصة سحابية شاملة لإدارة المشاريع والفرق مع ميزات تعاون متقدمة.",
    solution: "بنينا منصة SaaS كاملة باستخدام Next.js و PostgreSQL مع بنية متعددة المستأجرين.",
    results: [
      "+200 شركة مشتركة",
      "إدارة +5,000 مشروع نشط",
      "معدل رضا عملاء 94%",
      "متوسط وقت تشغيل 99.9%",
    ],
    technologies: ["Next.js", "PostgreSQL", "Tailwind", "Stripe", "WebSockets"],
    features: [
      "إدارة مشاريع متقدمة",
      "تعاون فريق في الوقت الفعلي",
      "تتبع الوقت والمهام",
      "تقارير وتحليلات",
      "تكامل مع أدوات خارجية",
    ],
  },
  "mobile-banking": {
    image: portfolio2,
    title: "تطبيق بنكي آمن",
    category: "تطبيق جوال",
    client: "بنك رقمي",
    duration: "8 أشهر",
    team: "8 خبراء",
    challenge: "تطوير تطبيق بنكي يوفر أعلى معايير الأمان مع تجربة مستخدم سلسة.",
    solution: "أنشأنا تطبيق باستخدام Flutter مع تشفير من الدرجة البنكية وميزات أمان متعددة.",
    results: [
      "+100,000 مستخدم نشط",
      "صفر خروقات أمنية",
      "معاملات بقيمة +10 مليون ريال شهرياً",
      "تقييم 4.9 نجوم على المتاجر",
    ],
    technologies: ["Flutter", "Blockchain", "AWS", "Node.js", "Biometric Auth"],
    features: [
      "مصادقة بيومترية متقدمة",
      "تحويلات فورية آمنة",
      "إدارة حسابات متعددة",
      "تنبيهات فورية",
      "دعم محادثة مباشرة",
    ],
  },
  "restaurant-brand": {
    image: portfolio3,
    title: "علامة تجارية لمطعم فاخر",
    category: "هوية بصرية",
    client: "مطعم فاخر",
    duration: "6 أسابيع",
    team: "2 مصممين",
    challenge: "إنشاء هوية بصرية فاخرة تعكس جودة الطعام والتجربة الراقية.",
    solution: "صممنا هوية متكاملة تجمع بين الأناقة الكلاسيكية واللمسات الحديثة.",
    results: [
      "زيادة الحجوزات بنسبة 85%",
      "تفاعل أكبر على Instagram بنسبة 200%",
      "تحسين إدراك العلامة التجارية",
      "جذب شريحة عملاء جديدة",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    features: [
      "شعار أنيق وراقي",
      "تصميم قوائم فاخرة",
      "مواد تسويقية متنوعة",
      "تصميم داخلي للمطعم",
      "قوالب وسائل التواصل",
    ],
  },
  "predictive-system": {
    image: portfolio4,
    title: "نظام تنبؤي للمبيعات",
    category: "ذكاء اصطناعي",
    client: "شركة تجزئة كبرى",
    duration: "4 أشهر",
    team: "5 علماء بيانات",
    challenge: "بناء نموذج ذكاء اصطناعي دقيق للتنبؤ بالمبيعات وتحسين إدارة المخزون.",
    solution: "طورنا نموذج machine learning متقدم مع لوحة معلومات تفاعلية.",
    results: [
      "دقة تنبؤ 95%",
      "تقليل الفائض بنسبة 40%",
      "توفير +2 مليون ريال سنوياً",
      "تحسين رضا العملاء بتوفر المنتجات",
    ],
    technologies: ["Python", "Scikit-learn", "Power BI", "Azure ML", "SQL"],
    features: [
      "تنبؤات دقيقة للطلب",
      "تحليل الاتجاهات الموسمية",
      "تحسين المخزون",
      "لوحة معلومات تفاعلية",
      "تنبيهات تلقائية",
    ],
  },
};

const PortfolioDetailsPage = () => {
  const { projectId } = useParams();
  const project = portfolioDetails[projectId as keyof typeof portfolioDetails];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">المشروع غير موجود</h1>
          <Link to="/portfolio">
            <Button>العودة للأعمال</Button>
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
          <div className="max-w-6xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12 animate-fade-in">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[500px] object-cover rounded-3xl glow"
              />
            </div>

            {/* Header */}
            <div className="mb-12 animate-fade-in">
              <span className="text-primary-light font-semibold mb-2 block">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">{project.title}</span>
              </h1>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20">
                  <Users className="w-6 h-6 text-primary-light" />
                  <div>
                    <p className="text-sm text-foreground/60">العميل</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20">
                  <Calendar className="w-6 h-6 text-primary-light" />
                  <div>
                    <p className="text-sm text-foreground/60">المدة</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20">
                  <Target className="w-6 h-6 text-primary-light" />
                  <div>
                    <p className="text-sm text-foreground/60">الفريق</p>
                    <p className="font-semibold">{project.team}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20 animate-fade-in-scale">
                <h2 className="text-2xl font-bold mb-4 text-gradient">التحدي</h2>
                <p className="text-foreground/80 leading-relaxed">{project.challenge}</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20 glow animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold mb-4 text-gradient">الحل</h2>
                <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-8 text-gradient">النتائج المحققة</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-light mt-2 flex-shrink-0" />
                    <span className="text-lg text-foreground/80">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-8 text-gradient">التقنيات المستخدمة</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 text-foreground/80 hover:border-primary hover:glow transition-all"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold mb-8 text-gradient">المميزات الرئيسية</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20"
                  >
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-card/50 backdrop-blur-lg rounded-3xl p-12 border border-primary/20 glow animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-bold mb-4">مشروع مماثل في ذهنك؟</h2>
              <p className="text-lg text-foreground/70 mb-8">
                دعنا نساعدك على تحقيق نتائج مذهلة مثل هذه
              </p>
              <Link to="/start-project">
                <Button size="lg" className="gradient-primary glow hover:glow-lg transition-all duration-300 group">
                  ابدأ مشروعك الآن
                  <ArrowRight className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDetailsPage;
