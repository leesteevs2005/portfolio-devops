import { Code2, Zap, Target } from 'lucide-react';

/**
 * About Component
 * Seção sobre o profissional com highlights
 * Design: Cards com ícones e animações ao scroll
 */
export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Experiência com Python, Bash e automação de processos. Criação de scripts para otimizar fluxos de trabalho.',
    },
    {
      icon: Zap,
      title: 'Infraestrutura',
      description: 'Conhecimento em configuração de servidores Linux, redes, switches e roteadores. Manutenção de ambientes.',
    },
    {
      icon: Target,
      title: 'DevOps',
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
              Sobre Mim
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
          </div>

          {/* Main text */}
          <div className="mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Sou um profissional apaixonado por tecnologia, com experiência prática em manutenção de computadores, infraestrutura interna e configuração de redes. Atualmente cursando Análise e Desenvolvimento de Sistemas, estou em constante evolução para me especializar em DevOps e Cloud Computing.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Minha jornada profissional começou com suporte técnico e evoluiu para automação de processos e infraestrutura. Tenho facilidade em aprender novas tecnologias e gosto de resolver problemas complexos através de soluções criativas e eficientes.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeInUp"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { number: '5+', label: 'Anos de Experiência' },
              { number: '50+', label: 'Projetos Pessoais' },
              { number: '100%', label: 'Dedicação' },
              { number: '∞', label: 'Aprendizado' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
