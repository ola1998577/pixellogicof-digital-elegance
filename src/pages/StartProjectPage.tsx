import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

const StartProjectPage = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 mb-6">
                <Rocket className="w-5 h-5 text-primary-light" />
                <span className="text-sm">{t("startProject.badge")}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">{t("startProject.title")}</span>
              </h1>
              
              <p className="text-xl text-foreground/70">
                {t("startProject.subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-card/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-primary/20 glow animate-fade-in-scale">
              {/* Basic Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient">{t("startProject.basic")}</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.name")} *</label>
                    <Input
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.email")} *</label>
                    <Input
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.phone")} *</label>
                    <Input
                      type="tel"
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.company")}</label>
                    <Input
                      type="text"
                      placeholder={t("startProject.companyPlaceholder")}
                      className="bg-background/50 border-primary/30 focus:border-primary h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient">{t("startProject.details")}</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.serviceType")} *</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary h-12">
                      <SelectValue placeholder={t("startProject.serviceSelect")} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/30">
                      <SelectItem value="web">{t("services.web.title")}</SelectItem>
                      <SelectItem value="app">{t("services.app.title")}</SelectItem>
                      <SelectItem value="uiux">{t("services.uiux.title")}</SelectItem>
                      <SelectItem value="brand">{t("services.brand.title")}</SelectItem>
                      <SelectItem value="ai">{t("services.ai.title")}</SelectItem>
                      <SelectItem value="multiple">{t("services.code.title")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.budget")} *</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary h-12">
                      <SelectValue placeholder={t("startProject.budgetSelect")} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/30">
                      <SelectItem value="small">Less than $15,000</SelectItem>
                      <SelectItem value="medium">$15,000 - $40,000</SelectItem>
                      <SelectItem value="large">$40,000 - $130,000</SelectItem>
                      <SelectItem value="enterprise">More than $130,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.timeline")} *</label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30 focus:border-primary h-12">
                      <SelectValue placeholder={t("startProject.timelineSelect")} />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-primary/30">
                      <SelectItem value="urgent">Urgent (Less than 1 month)</SelectItem>
                      <SelectItem value="short">1-3 months</SelectItem>
                      <SelectItem value="medium">3-6 months</SelectItem>
                      <SelectItem value="long">More than 6 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t("startProject.description")} *</label>
                  <Textarea
                    placeholder={t("startProject.descPlaceholder")}
                    className="bg-background/50 border-primary/30 focus:border-primary min-h-40 resize-none"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground/80">{t("startProject.haveYou")}</label>
                  
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="logo" className="border-primary/50" />
                    <label
                      htmlFor="logo"
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      {t("startProject.logo")}
                    </label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="content" className="border-primary/50" />
                    <label
                      htmlFor="content"
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      {t("startProject.content")}
                    </label>
                  </div>

                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox id="design" className="border-primary/50" />
                    <label
                      htmlFor="design"
                      className="text-sm text-foreground/80 cursor-pointer"
                    >
                      {t("startProject.design")}
                    </label>
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full gradient-primary glow hover:glow-lg transition-all duration-300 text-lg py-6 group"
              >
                {t("startProject.submit")}
                <CheckCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>

              <p className="text-center text-sm text-foreground/60">
                {t("startProject.response")}
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartProjectPage;
