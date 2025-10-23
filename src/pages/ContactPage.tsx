import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Linkedin,
  Instagram,
  Dribbble,
  Mail,
  Send,
  MapPin,
  Phone,
  Facebook,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // رقم الواتساب بصيغة دولية (بدون + أو 00)
    const phoneNumber = "963935080915";

    // صياغة الرسالة بشكل منسق
    const text = `👋 ${t("contact.title")}
----------------------------
👤 الاسم: ${formData.name}
📧 البريد: ${formData.email}
📞 الهاتف: ${formData.phone || "غير مذكور"}
💬 الرسالة: ${formData.message}
----------------------------
📍 تم الإرسال من الموقع`;

    // إنشاء رابط واتساب
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    // فتح واتساب في نافذة جديدة
    window.open(whatsappURL, "_blank");
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
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20 glow"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      {t("contact.form.name")}
                    </label>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.messagePlaceholder")}
                      required
                      className="bg-background/50 border-primary/30 focus:border-primary min-h-32 text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary glow hover:glow-lg transition-all duration-300 text-lg py-6 group"
                  >
                    {t("contact.form.submit")}
                    <Send
                      className={`w-5 h-5 group-hover:-translate-x-1 transition-transform ${
                        language === "ar" ? "mr-2" : "ml-2"
                      }`}
                    />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div
                className="space-y-8 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">
                    {t("contact.info.title")}
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 glow">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t("contact.info.email")}
                        </h3>
                        <p className="text-foreground/70">
                          olafatnah68@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 glow">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t("contact.info.phone")}
                        </h3>
                        <p className="text-foreground/70">+963935080915</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 glow">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t("contact.info.location")}
                        </h3>
                        <p className="text-foreground/70">
                          {t("contact.info.locationText")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 border border-primary/20">
                  <h2 className="text-2xl font-bold mb-6 text-gradient">
                    {t("contact.follow")}
                  </h2>

                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/ola-fatnah-b37943225/"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-primary-light" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1BjhgJwvYY/"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="facebook"
                    >
                      <Facebook className="w-6 h-6 text-primary-light" />
                    </a>
                    <a
                      href="https://wa.me/963935080915"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="phonecall"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#9553d5"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.474-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.67-1.612-.917-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.26.489 1.689.626.709.226 1.354.194 1.864.118.569-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.413-.074-.124-.273-.198-.57-.347m-5.421 7.426h-.004a8.958 8.958 0 0 1-4.563-1.251l-.326-.193-3.396.892.906-3.312-.211-.339a8.942 8.942 0 0 1-1.37-4.785c.001-4.962 4.037-8.998 9.002-8.998a8.96 8.96 0 0 1 6.364 2.634 8.949 8.949 0 0 1 2.635 6.363c-.002 4.962-4.038 8.998-9.001 8.998m7.688-16.646A10.9 10.9 0 0 0 12.05 1C6.495 1 2 5.495 2 11.05a10.9 10.9 0 0 0 1.456 5.452L2 23l6.633-1.739A10.93 10.93 0 0 0 12.05 22C17.605 22 22.1 17.505 22.1 11.95a10.9 10.9 0 0 0-3.361-7.788" />
                      </svg>{" "}
                    </a>
                    <a
                      href="https://t.me/pixellogicof"
                      className="flex-1 h-14 rounded-2xl bg-background/50 border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
                      aria-label="Telegram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#9553d5"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm5.832 8.106l-1.76 8.303c-.132.601-.48.748-.972.465l-2.688-1.982-1.297 1.248c-.144.145-.265.266-.54.266l.192-2.724 4.956-4.476c.215-.192-.048-.3-.334-.108l-6.126 3.857-2.64-.828c-.575-.18-.587-.575.12-.851l10.32-3.978c.48-.18.9.108.744.851z" />
                      </svg>
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
