import { useLanguage } from '../contexts/LanguageContext';

/**
 * Skills Component
 * Grid de competências técnicas com barras de proficiência
 * Design: Cards com ícones e animações
 */
export default function Skills() {
  const { t } = useLanguage();

  const skillsData = {
    backend: [
      { name: 'Python', level: 85 },
      { name: 'Bash', level: 80 },
      { name: 'Linux', level: 85 },
      { name: 'Git', level: 90 },
    ],
    devops: [
      { name: 'Docker', level: 75 },
      { name: 'Redes', level: 80 },
      { name: 'Infraestrutura', level: 75 },
      { name: 'Cloud', level: 60 },
    ],
    tools: [
      { name: 'Automação', level: 80 },
      { name: 'Manutenção', level: 85 },
      { name: 'Troubleshooting', level: 80 },
      { name: 'Configuração', level: 85 },
    ],
  };

  const categories = [
    { key: 'backend', label: t('skills.backend'), skills: skillsData.backend },
    { key: 'devops', label: t('skills.devops'), skills: skillsData.devops },
    { key: 'tools', label: t('skills.tools'), skills: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.key}
              className="animate-fadeInUp"
              style={{ animationDelay: `${0.1 * categoryIndex}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {category.label}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} style={{ animationDelay: `${0.05 * skillIndex}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
