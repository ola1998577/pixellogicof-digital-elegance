import aboutBackground from "@/assets/about-background.jpg";

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="text-gradient">Who We Are</span>
          </h2>
          
          <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-primary/20 glow animate-fade-in-scale">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              <span className="text-primary-light font-semibold">PIXELLOGICOF</span> was founded by a visionary woman passionate about merging technology with design.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              We build beautiful, functional, and futuristic digital experiences for brands that dare to innovate. Our approach combines cutting-edge technology with artistic sensibility, creating solutions that are not just powerful, but also elegant and intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
