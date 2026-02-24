import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Hero Component
 * Seção inicial com apresentação profissional
 * Design: Layout assimétrico com gradiente dinâmico e CTA destacado
 */
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Background gradient animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20 animate-gradientShift" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="animate-fadeInLeft">
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-xs font-semibold">{t('hero.welcome')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-xl text-foreground/70 mb-4 font-medium">
              {t('hero.subtitle')}
            </p>

            <p className="text-base md:text-lg text-foreground/60 mb-8 leading-relaxed max-w-xl">
              {t('hero.description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                {t('hero.projects_btn')}
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                {t('hero.contact_btn')}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/leesteevs2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-esteves-de-souza-820572236/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:leandro@email.com"
                className="p-3 bg-card border border-border rounded-lg text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Visualização técnica */}
          <div className="hidden lg:flex items-center justify-center animate-fadeInRight">
            <div className="relative w-full max-w-md">
              {/* Terminal-like visualization */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-foreground/50 text-xs ml-2">leandro@devops:~$</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-3 min-h-64">
                  <div className="text-foreground/60">
                    <span className="text-primary">$</span> {t('hero.terminal.whoami')}
                  </div>
                  <div className="text-foreground">leandro_devops</div>
                  
                  <div className="text-foreground/60 mt-4">
                    <span className="text-primary">$</span> {t('hero.terminal.skills')}
                  </div>
                  <div className="text-foreground space-y-1">
                    <div>• Python | Bash | Docker</div>
                    <div>• Linux | Redes | Infraestrutura</div>
                    <div>• Git | Automação | Cloud</div>
                  </div>

                  <div className="text-foreground/60 mt-4">
                    <span className="text-primary">$</span> _
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
