import { Code2, Server, Network, Zap, Database, GitBranch } from 'lucide-react';

/**
 * Skills Component
 * Grid responsivo de competências técnicas
 * Design: Cards com ícones, badges e animações ao hover
 */
export default function Skills() {
  const skillsData = [
    {
      category: 'Linguagens',
      icon: Code2,
      skills: ['Python', 'Bash', 'JavaScript', 'SQL'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Infraestrutura',
      icon: Server,
      skills: ['Linux', 'Docker', 'Servidores', 'Virtualização'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Redes',
      icon: Network,
      skills: ['TCP/IP', 'Switches', 'Roteadores', 'Cabeamento'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'DevOps',
      icon: Zap,
      skills: ['Automação', 'CI/CD', 'Cloud', 'Monitoramento'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Ferramentas',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Terminal'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      category: 'Conhecimentos',
      icon: Database,
      skills: ['Backup', 'Segurança', 'Suporte Técnico', 'Troubleshooting'],
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Competências Técnicas
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Conjunto diverso de habilidades desenvolvidas através de experiência prática e aprendizado contínuo
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <div
                key={skillGroup.category}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Header com ícone */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/50 border border-border rounded-full text-foreground/70 text-sm font-medium hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Progress bar decorativo */}
                <div className="mt-6 h-1 bg-secondary/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full group-hover:w-full transition-all duration-500`}
                    style={{ width: '75%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency levels */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-bold text-foreground mb-8">Nível de Proficiência</h3>
          <div className="space-y-6">
            {[
              { skill: 'Python & Scripting', level: 85 },
              { skill: 'Linux & Infraestrutura', level: 80 },
              { skill: 'Docker & Containers', level: 75 },
              { skill: 'Redes & Configuração', level: 80 },
              { skill: 'Git & Versionamento', level: 85 },
              { skill: 'Cloud Computing', level: 65 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-primary font-bold">{item.level}%</span>
                </div>
                <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
