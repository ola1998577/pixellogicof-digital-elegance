import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const StartProjectPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
  };

  const services = [
    "تطوير مواقع ويب",
    "تطوير تطبيقات جوال",
    "تصميم UI/UX",
    "الهوية البصرية والعلامة التجارية",
    "التحول الرقمي والذكاء الاصطناعي",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
                <Rocket className="w-5 h-5 text-primary-light" />
                <span className="text-sm">دعنا نبدأ رحلتك الرقمية</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">ابدأ مشروعك</span>
              </h1>
              
              <p className="text-xl text-foreground/70">
                أخبرنا عن رؤيتك وسنحولها إلى تجربة رقمية استثنائية
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-primary/20 glow animate-fade-in-scale">
              {/* Basic Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient">المعلومات الأساسية</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">الاسم الكامل *</label>
                    <Input
                      type="text"
                      placeholder="أدخل اسمك"
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">البريد الإلكتروني *</label>
                    <Input
                      type="email"
                      placeholder="example@email.com"
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">رقم الهاتف *</label>
                    <Input
                      type="tel"
                      placeholder="+966 XX XXX XXXX"
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">اسم الشركة</label>
                    <Input
                      type="text"
                      placeholder="اختياري"
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient">تفاصيل المشروع</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">نوع الخدمة المطلوبة *</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary h-12">
                      <SelectValue placeholder="اختر الخدمة" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/30">
                      <SelectItem value="web">تطوير موقع ويب</SelectItem>
                      <SelectItem value="app">تطوير تطبيق جوال</SelectItem>
                      <SelectItem value="uiux">تصميم UI/UX</SelectItem>
                      <SelectItem value="brand">الهوية البصرية</SelectItem>
                      <SelectItem value="ai">ذكاء اصطناعي</SelectItem>
                      <SelectItem value="multiple">عدة خدمات</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">الميزانية المتوقعة *</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary h-12">
                      <SelectValue placeholder="اختر النطاق السعري" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/30">
                      <SelectItem value="small">أقل من 50,000 ريال</SelectItem>
                      <SelectItem value="medium">50,000 - 150,000 ريال</SelectItem>
                      <SelectItem value="large">150,000 - 500,000 ريال</SelectItem>
                      <SelectItem value="enterprise">أكثر من 500,000 ريال</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">الإطار الزمني المتوقع *</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary h-12">
                      <SelectValue placeholder="اختر المدة" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/30">
                      <SelectItem value="urgent">عاجل (أقل من شهر)</SelectItem>
                      <SelectItem value="short">1-3 أشهر</SelectItem>
                      <SelectItem value="medium">3-6 أشهر</SelectItem>
                      <SelectItem value="long">أكثر من 6 أشهر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">وصف المشروع *</label>
                  <Textarea
                    placeholder="أخبرنا بالتفصيل عن مشروعك، أهدافك، والجمهور المستهدف..."
                    className="bg-background/50 border-primary/30 focus:border-primary min-h-40 resize-none"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground/80">هل لديك؟</label>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="logo" className="border-primary/50" />
                    <label
                      htmlFor="logo"
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      شعار أو هوية بصرية حالية
                    </label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="content" className="border-primary/50" />
                    <label
                      htmlFor="content"
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      محتوى جاهز (نصوص، صور)
                    </label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="design" className="border-primary/50" />
                    <label
                      htmlFor="design"
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      تصميمات أو mockups جاهزة
                    </label>
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full gradient-primary glow hover:glow-lg transition-all duration-300 text-lg py-6 group"
              >
                إرسال الطلب
                <CheckCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>

              <p className="text-center text-sm text-foreground/60">
                سنتواصل معك خلال 24 ساعة لمناقشة التفاصيل
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartProjectPage;
