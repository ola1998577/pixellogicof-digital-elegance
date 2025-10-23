import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const projects = [
  {
    image: portfolio1,
    title: "E-Commerce Platform",
    tools: "React, Node.js, Stripe",
    result: "300% increase in conversions",
  },
  {
    image: portfolio2,
    title: "Mobile Fitness App",
    tools: "React Native, Firebase",
    result: "50K+ downloads in 3 months",
  },
  {
    image: portfolio3,
    title: "Corporate Rebrand",
    tools: "Figma, Adobe Suite",
    result: "Complete visual identity overhaul",
  },
  {
    image: portfolio4,
    title: "AI-Powered Analytics",
    tools: "Python, TensorFlow, React",
    result: "Real-time data insights dashboard",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">{t("portfolio.title")}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-foreground/90 mb-2">
                    <span className="font-semibold">{t("portfolio.tools")}:</span> {project.tools}
                  </p>
                  <p className="text-sm text-primary-light font-semibold">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
