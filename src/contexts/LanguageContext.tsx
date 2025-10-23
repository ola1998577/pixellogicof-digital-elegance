import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact Us",
    "nav.startProject": "Start Your Project",
    
    // Hero
    "hero.badge": "Female-Owned Tech & Design",
    "hero.tagline": "We blend technology and creativity to shape a smarter digital future.",
    "hero.startProject": "Start Your Project",
    "hero.contactUs": "Contact Us",
    
    // About
    "about.title": "Who We Are",
    "about.intro": "was founded by a visionary woman passionate about merging technology with design.",
    "about.description": "We build beautiful, functional, and futuristic digital experiences for brands that dare to innovate. Our approach combines cutting-edge technology with artistic sensibility, creating solutions that are not just powerful, but also elegant and intuitive.",
    
    // Services
    "services.title": "What We Do",
    "services.subtitle": "We combine advanced technology and creativity to deliver comprehensive digital solutions",
    "services.web.title": "Web Development",
    "services.web.desc": "Responsive and fast websites that combine performance and beauty, built with the latest technologies to provide an exceptional experience.",
    "services.app.title": "Mobile App Development",
    "services.app.desc": "Powerful mobile applications for iOS and Android, providing seamless user experience and high performance across all devices.",
    "services.uiux.title": "UI/UX Design",
    "services.uiux.desc": "User-focused designs that combine aesthetics and functionality, creating intuitive experiences that delight users.",
    "services.brand.title": "Brand Identity",
    "services.brand.desc": "Comprehensive visual identities that tell your brand story and distinguish you in the market with unique and professional design.",
    "services.ai.title": "Artificial Intelligence",
    "services.ai.desc": "Advanced AI solutions that transform your operations, increase efficiency, and open new horizons for innovation and growth.",
    "services.code.title": "Custom Software Solutions",
    "services.code.desc": "Software designed specifically to meet your unique business needs, scalable and growing with you step by step.",
    "services.learnMore": "Learn More",
    "services.viewAll": "View All Services",
    
    // Portfolio
    "portfolio.title": "Our Work",
    "portfolio.subtitle": "Successful projects where we turned ideas into stunning digital reality",
    "portfolio.tools": "Tools",
    "portfolio.viewAll": "View All Projects",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Let us turn your idea into a stunning digital reality",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.emailPlaceholder": "example@email.com",
    "contact.form.phonePlaceholder": "+966 XX XXX XXXX",
    "contact.form.messagePlaceholder": "Tell us about your project...",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.info.locationText": "Riyadh, Saudi Arabia",
    "contact.follow": "Follow Us",
    
    // Start Project
    "startProject.badge": "Let's start your digital journey",
    "startProject.title": "Start Your Project",
    "startProject.subtitle": "Tell us about your vision and we'll turn it into an exceptional digital experience",
    "startProject.basic": "Basic Information",
    "startProject.details": "Project Details",
    "startProject.name": "Full Name",
    "startProject.email": "Email",
    "startProject.phone": "Phone Number",
    "startProject.company": "Company Name",
    "startProject.companyPlaceholder": "Optional",
    "startProject.serviceType": "Service Type Required",
    "startProject.serviceSelect": "Select Service",
    "startProject.budget": "Expected Budget",
    "startProject.budgetSelect": "Select Price Range",
    "startProject.timeline": "Expected Timeline",
    "startProject.timelineSelect": "Select Duration",
    "startProject.description": "Project Description",
    "startProject.descPlaceholder": "Tell us in detail about your project, goals, and target audience...",
    "startProject.haveYou": "Do you have?",
    "startProject.logo": "Current logo or brand identity",
    "startProject.content": "Ready content (text, images)",
    "startProject.design": "Ready designs or mockups",
    "startProject.submit": "Submit Request",
    "startProject.response": "We'll contact you within 24 hours to discuss details",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Built with passion, powered by innovation.",
    
    // Call to Action
    "cta.title": "Ready to Get Started?",
    "cta.subtitle": "Let us turn your vision into an exceptional digital experience",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "الأعمال",
    "nav.contact": "تواصل معنا",
    "nav.startProject": "ابدأ مشروعك",
    
    // Hero
    "hero.badge": "شركة تقنية نسائية",
    "hero.tagline": "نجمع بين التكنولوجيا والإبداع لتشكيل مستقبل رقمي أذكى.",
    "hero.startProject": "ابدأ مشروعك",
    "hero.contactUs": "تواصل معنا",
    
    // About
    "about.title": "من نحن",
    "about.intro": "تأسست على يد امرأة صاحبة رؤية شغوفة بدمج التكنولوجيا مع التصميم.",
    "about.description": "نبني تجارب رقمية جميلة، عملية، ومستقبلية للعلامات التجارية التي تجرؤ على الابتكار. نهجنا يجمع بين التكنولوجيا المتطورة والحساسية الفنية، لإنشاء حلول ليست قوية فحسب، بل أنيقة وبديهية أيضاً.",
    
    // Services
    "services.title": "ماذا نقدم",
    "services.subtitle": "نجمع بين التكنولوجيا المتقدمة والإبداع لتقديم حلول رقمية متكاملة",
    "services.web.title": "تطوير مواقع الويب",
    "services.web.desc": "مواقع ويب متجاوبة وسريعة تجمع بين الأداء والجمال، مبنية بأحدث التقنيات لتوفير تجربة استثنائية.",
    "services.app.title": "تطوير تطبيقات الجوال",
    "services.app.desc": "تطبيقات جوال قوية لنظامي iOS و Android، توفر تجربة مستخدم سلسة وأداء عالي على جميع الأجهزة.",
    "services.uiux.title": "تصميم UI/UX",
    "services.uiux.desc": "تصميمات تركز على المستخدم تجمع بين الجمالية والوظيفية، تخلق تجارب بديهية تسعد المستخدمين.",
    "services.brand.title": "الهوية البصرية",
    "services.brand.desc": "هويات بصرية متكاملة تروي قصة علامتك التجارية وتميزك في السوق بتصميم فريد واحترافي.",
    "services.ai.title": "الذكاء الاصطناعي",
    "services.ai.desc": "حلول ذكاء اصطناعي متقدمة تحول عملياتك، تزيد الكفاءة، وتفتح آفاق جديدة للابتكار والنمو.",
    "services.code.title": "حلول برمجية مخصصة",
    "services.code.desc": "برمجيات مصممة خصيصاً لتلبية احتياجات عملك الفريدة، قابلة للتوسع وتنمو معك خطوة بخطوة.",
    "services.learnMore": "اعرف المزيد",
    "services.viewAll": "عرض جميع الخدمات",
    
    // Portfolio
    "portfolio.title": "أعمالنا",
    "portfolio.subtitle": "مشاريع ناجحة حولنا فيها الأفكار إلى واقع رقمي مبهر",
    "portfolio.tools": "الأدوات",
    "portfolio.viewAll": "عرض جميع الأعمال",
    
    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "دعنا نحول فكرتك إلى واقع رقمي مبهر",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.message": "الرسالة",
    "contact.form.namePlaceholder": "أدخل اسمك",
    "contact.form.emailPlaceholder": "example@email.com",
    "contact.form.phonePlaceholder": "+966 XX XXX XXXX",
    "contact.form.messagePlaceholder": "أخبرنا عن مشروعك...",
    "contact.form.submit": "إرسال الرسالة",
    "contact.info.title": "معلومات التواصل",
    "contact.info.email": "البريد الإلكتروني",
    "contact.info.phone": "الهاتف",
    "contact.info.location": "الموقع",
    "contact.info.locationText": "الرياض، المملكة العربية السعودية",
    "contact.follow": "تابعنا",
    
    // Start Project
    "startProject.badge": "دعنا نبدأ رحلتك الرقمية",
    "startProject.title": "ابدأ مشروعك",
    "startProject.subtitle": "أخبرنا عن رؤيتك وسنحولها إلى تجربة رقمية استثنائية",
    "startProject.basic": "المعلومات الأساسية",
    "startProject.details": "تفاصيل المشروع",
    "startProject.name": "الاسم الكامل",
    "startProject.email": "البريد الإلكتروني",
    "startProject.phone": "رقم الهاتف",
    "startProject.company": "اسم الشركة",
    "startProject.companyPlaceholder": "اختياري",
    "startProject.serviceType": "نوع الخدمة المطلوبة",
    "startProject.serviceSelect": "اختر الخدمة",
    "startProject.budget": "الميزانية المتوقعة",
    "startProject.budgetSelect": "اختر النطاق السعري",
    "startProject.timeline": "الإطار الزمني المتوقع",
    "startProject.timelineSelect": "اختر المدة",
    "startProject.description": "وصف المشروع",
    "startProject.descPlaceholder": "أخبرنا بالتفصيل عن مشروعك، أهدافك، والجمهور المستهدف...",
    "startProject.haveYou": "هل لديك؟",
    "startProject.logo": "شعار أو هوية بصرية حالية",
    "startProject.content": "محتوى جاهز (نصوص، صور)",
    "startProject.design": "تصميمات أو mockups جاهزة",
    "startProject.submit": "إرسال الطلب",
    "startProject.response": "سنتواصل معك خلال 24 ساعة لمناقشة التفاصيل",
    
    // Footer
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.tagline": "مبني بشغف، مدعوم بالابتكار.",
    
    // Call to Action
    "cta.title": "هل أنت مستعد للبدء؟",
    "cta.subtitle": "دعنا نحول رؤيتك إلى تجربة رقمية استثنائية",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
