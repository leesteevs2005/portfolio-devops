import { ExternalLink, Github, Code2, Star, GitFork, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useGitHubProjects } from '../hooks/useGitHubProjects';

/**
 * Projects Component
 * Grid de projetos com integração GitHub
 * Design: Cards com hover effects, badges de tecnologia e links
 */
export default function Projects() {
  const { t } = useLanguage();
  const { projects, loading, error } = useGitHubProjects('leesteevs2005');

  // Fallback projects se GitHub não estiver disponível
  const fallbackProjects = [
    {
      title: 'Laboratório de Redes com VLANs',
      description: 'Simulação de ambiente corporativo segmentado por VLANs utilizando Linux Network Namespaces e 802.1Q.',
      technologies: ['Networking', 'Linux', 'VLAN', 'Bash'],
      features: [
        'Segmentação com Linux Namespaces',
        'Configuração de VLAN Tagging (802.1Q)',
        'Roteamento Inter-VLAN prático',
        'Topologia de rede corporativa',
      ],
      github: 'https://github.com/leesteevs2005/lab-vlan',
      demo: '#',
      color: 'from-orange-600 to-red-600',
    },
    {
      title: 'Automação de Infraestrutura com Python',
      description: 'Ferramenta modular para gerenciamento remoto de servidores Linux via SSH, automatizando usuários, pacotes e serviços.',
      technologies: ['Python', 'SSH', 'Paramiko', 'YAML'],
      features: [
        'Conexão segura via SSH/Paramiko',
        'Gerenciamento de usuários e permissões',
        'Instalação automatizada de pacotes',
        'Controle de estado de serviços (systemd)',
      ],
      github: 'https://github.com/leesteevs2005/infra-automation',
      demo: '#',
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Provisionamento de Servidor Linux com Docker',
      description: 'Automatização completa de infraestrutura: Docker, Nginx Proxy Reverso, Monitoramento cAdvisor e Segurança UFW.',
      technologies: ['Docker', 'Bash', 'Nginx', 'Node.js'],
      features: [
        'Provisionamento automático via Bash',
        'Orquestração com Docker Compose',
        'Proxy Reverso e Segurança UFW',
        'Monitoramento de Containers',
      ],
      github: 'https://github.com/leesteevs2005/provisionamento-docker',
      demo: '#',
      color: 'from-blue-600 to-indigo-600',
    },
  ];

  // Ordenar para que os novos projetos apareçam primeiro
  const sortedProjects = [...projects].sort((a, b) => {
    const priority = ['lab-vlan', 'infra-automation', 'provisionamento-docker'];
    const indexA = priority.indexOf(a.name);
    const indexB = priority.indexOf(b.name);
    
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });

  const displayProjects = sortedProjects.length > 0 ? sortedProjects : fallbackProjects;

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex items-center gap-3">
              <Loader className="animate-spin text-primary" size={24} />
              <span className="text-foreground/60">Carregando projetos...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
            Não foi possível carregar os projetos do GitHub. Exibindo projetos de exemplo.
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.slice(0, 6).map((project, index) => {
              // Para projetos do GitHub
              if ('html_url' in project) {
                const highlightedRepos = ['lab-vlan', 'infra-automation', 'provisionamento-docker'];
                const isNewProject = highlightedRepos.includes(project.name);
                const isInfra = project.name === 'infra-automation';
                const isVlan = project.name === 'lab-vlan';
                
                return (
                  <div
                    key={project.id}
                    className={`group bg-card border ${isNewProject ? 'border-primary/50 shadow-lg shadow-primary/5' : 'border-border'} rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fadeInUp flex flex-col`}
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    {/* Header com gradiente */}
                    <div className={`h-32 bg-gradient-to-br ${isVlan ? 'from-orange-600 to-red-500' : isInfra ? 'from-emerald-600 to-teal-500' : isNewProject ? 'from-indigo-600 to-blue-500' : 'from-blue-500 to-cyan-500'} relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Code2 className="text-white/50 group-hover:text-white/70 transition-colors" size={48} />
                      </div>
                      {isNewProject && (
                        <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded uppercase tracking-wider">
                          Destaque
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Título */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {isVlan ? 'Laboratório de VLANs' : isInfra ? 'Automação de Infraestrutura' : project.name === 'provisionamento-docker' ? 'Provisionamento Docker' : project.name}
                      </h3>

                      {/* Descrição */}
                      <p className="text-foreground/60 text-sm mb-4 flex-grow line-clamp-3">
                        {project.description || 'Projeto sem descrição'}
                      </p>

                      {/* Language */}
                      {project.language && (
                        <div className="mb-4 flex items-center gap-2">
                          <span className="text-foreground/50 text-xs">Linguagem:</span>
                          <span className="px-2 py-1 bg-secondary/50 border border-border rounded text-foreground/60 text-xs font-medium">
                            {project.language}
                          </span>
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex gap-4 mb-6 text-foreground/60 text-xs">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          {project.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          {project.forks_count}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-border">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary/50 border border-border rounded hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 border border-primary/50 rounded hover:bg-primary/20 text-primary transition-all duration-300 text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Abrir
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Para projetos de fallback
              return (
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
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-foreground/60 mb-4">
            Quer ver mais projetos e contribuições?
          </p>
          <a
            href="https://github.com/leesteevs2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            {t('projects.github')}
          </a>
        </div>
      </div>
    </section>
  );
}
