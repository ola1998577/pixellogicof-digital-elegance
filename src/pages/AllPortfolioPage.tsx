import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    id: "ecommerce-platform",
    image: portfolio1,
    title: "منصة تجارة إلكترونية",
    category: "تطوير ويب",
    tools: ["React", "Node.js", "Stripe"],
    result: "زيادة بنسبة 300% في التحويلات",
    description: "منصة تجارة إلكترونية متكاملة مع نظام دفع آمن",
  },
  {
    id: "fitness-app",
    image: portfolio2,
    title: "تطبيق اللياقة البدنية",
    category: "تطبيق جوال",
    tools: ["React Native", "Firebase"],
    result: "+50 ألف تحميل في 3 أشهر",
    description: "تطبيق جوال لتتبع التمارين والتغذية",
  },
  {
    id: "corporate-rebrand",
    image: portfolio3,
    title: "إعادة العلامة التجارية لشركة",
    category: "هوية بصرية",
    tools: ["Figma", "Adobe Suite"],
    result: "هوية بصرية متكاملة",
    description: "إعادة تصميم كاملة للعلامة التجارية والهوية البصرية",
  },
  {
    id: "ai-analytics",
    image: portfolio4,
    title: "تحليلات مدعومة بالذكاء الاصطناعي",
    category: "ذكاء اصطناعي",
    tools: ["Python", "TensorFlow", "React"],
    result: "لوحة معلومات في الوقت الفعلي",
    description: "نظام تحليلات متقدم باستخدام الذكاء الاصطناعي",
  },
  {
    id: "saas-platform",
    image: portfolio1,
    title: "منصة SaaS للإدارة",
    category: "تطوير ويب",
    tools: ["Next.js", "PostgreSQL", "Tailwind"],
    result: "أداة إدارة شاملة",
    description: "منصة سحابية لإدارة المشاريع والفرق",
  },
  {
    id: "mobile-banking",
    image: portfolio2,
    title: "تطبيق بنكي آمن",
    category: "تطبيق جوال",
    tools: ["Flutter", "Blockchain", "AWS"],
    result: "أمان عالي وتجربة سلسة",
    description: "تطبيق بنكي بميزات أمان متقدمة",
  },
  {
    id: "restaurant-brand",
    image: portfolio3,
    title: "علامة تجارية لمطعم فاخر",
    category: "هوية بصرية",
    tools: ["Illustrator", "Photoshop"],
    result: "هوية فريدة تعكس الفخامة",
    description: "تصميم شامل يشمل الشعار والقوائم والمواد التسويقية",
  },
  {
    id: "predictive-system",
    image: portfolio4,
    title: "نظام تنبؤي للمبيعات",
    category: "ذكاء اصطناعي",
    tools: ["Machine Learning", "Python", "Power BI"],
    result: "دقة تنبؤ 95%",
    description: "نموذج ذكاء اصطناعي للتنبؤ بالمبيعات",
  },
];

const categories = ["الكل", "تطوير ويب", "تطبيق جوال", "هوية بصرية", "ذكاء اصطناعي"];

const AllPortfolioPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredProjects = selectedCategory === "الكل" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">أعمالنا</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              مشاريع ناجحة نفخر بها، حولنا فيها الأفكار إلى تجارب رقمية مميزة
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "gradient-primary glow"
                    : "border-primary/50 hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in block"
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 gradient-primary transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-90' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-sm text-primary-light font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-foreground/90 mb-3">
                      {project.description}
                    </p>
                    <p className="text-xs text-foreground/80 mb-2">
                      <span className="font-semibold">الأدوات:</span> {project.tools.join(", ")}
                    </p>
                    <p className="text-sm text-primary-light font-semibold">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Bottom Info (visible when not hovering) */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <span className="text-xs text-primary-light font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground/70 mb-6">
              هل لديك مشروع مماثل في ذهنك؟
            </p>
            <Link to="/start-project">
              <Button size="lg" className="gradient-primary glow hover:glow-lg transition-all duration-300">
                ابدأ مشروعك الآن
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllPortfolioPage;
