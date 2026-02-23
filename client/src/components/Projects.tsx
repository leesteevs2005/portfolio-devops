import { ExternalLink, Github, Code2 } from 'lucide-react';

/**
 * Projects Component
 * Grid de projetos com cards modernos
 * Design: Cards com hover effects, badges de tecnologia e links
 */
export default function Projects() {
  const projects = [
    {
      title: 'Script de Backup Automatizado',
      description: 'Sistema completo de backup automatizado em Python com compressão, criptografia e sincronização em nuvem.',
      technologies: ['Python', 'Bash', 'Cron', 'AWS S3'],
      features: [
        'Agendamento automático com Cron',
        'Compressão e criptografia de dados',
        'Sincronização com S3',
        'Logs detalhados e notificações',
      ],
      github: 'https://github.com',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Setup Servidor Linux com Docker',
      description: 'Configuração completa de servidor Linux com Docker, incluindo orquestração de containers e monitoramento.',
      technologies: ['Linux', 'Docker', 'Docker Compose', 'Nginx'],
      features: [
        'Configuração de servidor do zero',
        'Docker e Docker Compose',
        'Reverse proxy com Nginx',
        'Monitoramento com Prometheus',
      ],
      github: 'https://github.com',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Laboratório de Redes Local',
      description: 'Ambiente de laboratório para estudos de redes com múltiplos switches, roteadores e VLANs configuradas.',
      technologies: ['Networking', 'VLAN', 'Switches', 'Roteadores'],
      features: [
        'Configuração de VLANs',
        'Roteamento entre subredes',
        'Segurança de rede',
        'Troubleshooting prático',
      ],
      github: 'https://github.com',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Automação de Tarefas com Python',
      description: 'Suite de scripts Python para automação de tarefas repetitivas em infraestrutura e administração de sistemas.',
      technologies: ['Python', 'Ansible', 'SSH', 'APIs'],
      features: [
        'Automação de deploy',
        'Gerenciamento de configurações',
        'Integração com APIs',
        'Relatórios automáticos',
      ],
      github: 'https://github.com',
      demo: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Monitoramento de Infraestrutura',
      description: 'Sistema de monitoramento em tempo real para servidores e aplicações com alertas e dashboards.',
      technologies: ['Prometheus', 'Grafana', 'Docker', 'Linux'],
      features: [
        'Coleta de métricas em tempo real',
        'Dashboards customizados',
        'Alertas automáticos',
        'Histórico de performance',
      ],
      github: 'https://github.com',
      demo: '#',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Pipeline CI/CD Automatizado',
      description: 'Pipeline completo de integração e deployment contínuo com testes automatizados e deploy em staging/produção.',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Git'],
      features: [
        'Testes automatizados',
        'Build de containers',
        'Deploy automático',
        'Rollback seguro',
      ],
      github: 'https://github.com',
      demo: '#',
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Projetos práticos que demonstram minha expertise em infraestrutura, automação e DevOps
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeInUp flex flex-col"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Header com gradiente */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="text-white/50 group-hover:text-white/70 transition-colors" size={48} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Título */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-foreground/60 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4 space-y-1">
                  {project.features.slice(0, 2).map((feature) => (
                    <div
                      key={feature}
                      className="text-foreground/50 text-xs flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 2 && (
                    <div className="text-foreground/50 text-xs text-primary">
                      +{project.features.length - 2} mais
                    </div>
                  )}
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/50 border border-border rounded text-foreground/60 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary/50 border border-border rounded hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 border border-primary/50 rounded hover:bg-primary/20 text-primary transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-foreground/60 mb-4">
            Quer ver mais projetos e contribuições?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            Visitar GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
