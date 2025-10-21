import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Instagram, Dribbble, Mail, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Let's Work Together</span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-primary/20 glow animate-fade-in-scale">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background/50 border-primary/30 focus:border-primary h-12 text-base"
                required
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Tell us about your project..."
                className="bg-background/50 border-primary/30 focus:border-primary min-h-32 text-base resize-none"
                required
              />
            </div>
            
            <Button 
              type="submit"
              size="lg"
              className="w-full gradient-primary glow hover:glow-lg transition-all duration-300 text-lg py-6 group"
            >
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary-light" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary-light" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
              aria-label="Dribbble"
            >
              <Dribbble className="w-5 h-5 text-primary-light" />
            </a>
            <a
              href="mailto:hello@pixellogicof.com"
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:glow"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary-light" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
