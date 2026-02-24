import { Code2, Zap, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * About Component
 * Seção sobre o profissional com highlights
 * Design: Cards com ícones e animações ao scroll
 */
export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t('about.development'),
      description: 'Experiência com Python, Bash e automação de processos. Criação de scripts para otimizar fluxos de trabalho.',
    },
    {
      icon: Zap,
      title: t('about.infrastructure'),
      description: 'Conhecimento em configuração de servidores Linux, redes, switches e roteadores. Manutenção de ambientes.',
    },
    {
      icon: Target,
      title: t('about.devops'),
      description: 'Foco em Docker, containerização e automação. Estudando cloud computing e CI/CD para crescimento profissional.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
          </div>

          {/* Main text */}
          <div className="mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={highlight.title}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeInUp"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="mb-4 p-3 bg-primary/10 border border-primary/30 rounded-lg w-fit">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
