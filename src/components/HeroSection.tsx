import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float delay-500" />

      <div className="container mx-auto px-6 relative z-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Data Scientist | Agentic AI & Automation Engineer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building Intelligent
                <span className="block gradient-text">Autonomous Systems</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
  With 3 years of experience bridging the gap between complex AI research and production-ready business solutions, I specialize in architecting intelligent automation systems. From building multi-agent workflows with LangGraph to orchestrating serverless pipelines using n8n and AWS, I turn data into actionable intelligence. My focus is on Agentic AI, Computer Vision, and scalable Big Data engineering.
</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
                asChild
              >
                <a href="mailto:darkaouihatim99@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/hatim-darkaoui-a731b8243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/hatimdeve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl scale-75" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-secondary to-card">
                  <img
                    src="/src/assets/cv.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
