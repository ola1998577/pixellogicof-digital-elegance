import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Instagram, Dribbble, Mail, Send, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  const { t, language } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
              <span className="text-gradient">{t("contact.title")}</span>
            </h1>
            
            <p className="text-xl text-center text-foreground/70 mb-16 animate-fade-in">
              {t("contact.subtitle")}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in-scale">
                <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20 glow">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("contact.form.name")}</label>
                    <Input
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("contact.form.email")}</label>
                    <Input
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("contact.form.phone")}</label>
                    <Input
                      type="tel"
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("contact.form.message")}</label>
                    <Textarea
                      placeholder={t("contact.form.messagePlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary min-h-32 text-base resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary glow hover:glow-lg transition-all duration-300 text-lg py-6 group"
                  >
                    {t("contact.form.submit")}
                    <Send className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${language === 'ar' ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">{t("contact.info.title")}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 glow">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.info.email")}</h3>
                        <p className="text-foreground/70">hello@pixellogicof.com</p>
                        <p className="text-foreground/70">info@pixellogicof.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 glow">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.info.phone")}</h3>
                        <p className="text-foreground/70">+966 XX XXX XXXX</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 glow">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t("contact.info.location")}</h3>
                        <p className="text-foreground/70">{t("contact.info.locationText")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">{t("contact.follow")}</h2>
                  
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-primary-light" />
                    </a>
                    <a
                      href="#"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-primary-light" />
                    </a>
                    <a
                      href="#"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="Dribbble"
                    >
                      <Dribbble className="w-6 h-6 text-primary-light" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
