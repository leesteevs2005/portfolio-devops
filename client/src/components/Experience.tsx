import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

/**
 * Experience Component
 * Timeline vertical de experiência profissional
 * Design: Cards com ícones, timeline e animações ao scroll
 */
export default function Experience() {
  const experiences = [
    {
      title: 'Técnico de Suporte & Infraestrutura',
      company: 'Trabalho Autônomo',
      period: '2020 - Presente',
      location: 'Brasil',
      description: 'Prestação de serviços técnicos especializados em infraestrutura e suporte',
      responsibilities: [
        'Manutenção e suporte técnico em computadores e servidores',
        'Configuração de redes locais (switches, roteadores, cabeamento)',
        'Criação de scripts para automação de tarefas internas',
        'Instalação e configuração de sistemas operacionais',
        'Backup e recuperação de dados',
        'Troubleshooting e resolução de problemas de rede',
      ],
    },
    {
      title: 'Estudante de ADS',
      company: 'Análise e Desenvolvimento de Sistemas',
      period: '2023 - Presente',
      location: 'Brasil',
      description: 'Formação acadêmica focada em desenvolvimento e infraestrutura',
      responsibilities: [
        'Estudos em programação e desenvolvimento de software',
        'Aprendizado em infraestrutura e redes de computadores',
        'Projetos práticos em Python, JavaScript e SQL',
        'Desenvolvimento de habilidades em DevOps e Cloud',
        'Participação em projetos colaborativos',
        'Certificações em tecnologias emergentes',
      ],
    },
    {
      title: 'Especialista em Automação',
      company: 'Projetos Pessoais',
      period: '2021 - Presente',
      location: 'Remoto',
      description: 'Desenvolvimento de soluções de automação e infraestrutura',
      responsibilities: [
        'Criação de scripts Python para automação de processos',
        'Setup de servidores Linux com Docker',
        'Desenvolvimento de laboratórios de redes',
        'Criação de ferramentas para backup automatizado',
        'Documentação de processos e melhores práticas',
        'Estudo contínuo de tecnologias DevOps',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Trajetória profissional com foco em infraestrutura, automação e desenvolvimento
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative animate-fadeInUp"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                <Briefcase className="text-primary" size={20} />
              </div>

              {/* Content */}
              <div className="ml-20 mb-12 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-4 italic">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2">
                  {exp.responsibilities.map((resp) => (
                    <div
                      key={resp}
                      className="flex items-start gap-3 text-foreground/60 text-sm"
                    >
                      <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-foreground/60 mb-4">
            Interessado em saber mais sobre minha experiência?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all duration-300"
          >
            Vamos Conversar
          </a>
        </div>
      </div>
    </section>
  );
}
