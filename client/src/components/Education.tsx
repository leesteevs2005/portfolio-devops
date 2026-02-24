import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Education Component
 * Seção de formação acadêmica e cursos realizados
 */
export default function Education() {
  const { t } = useLanguage();

  const education = [
    {
      type: 'university',
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade (Cursando)',
      period: '2024 - Presente',
      location: 'São Paulo, Brasil',
      description: 'Foco em desenvolvimento de software, arquitetura de sistemas e infraestrutura tecnológica.',
      icon: GraduationCap,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      type: 'course',
      title: 'DevOps & Cloud Computing',
      institution: 'Cursos de Especialização',
      period: '2023 - 2024',
      location: 'Online',
      description: 'Especialização em Docker, Kubernetes, CI/CD, Terraform e provedores de Cloud (AWS/Azure).',
      icon: Award,
      color: 'from-emerald-600 to-teal-600',
    },
    {
      type: 'course',
      title: 'Infraestrutura de Redes e Servidores Linux',
      institution: 'Cursos Técnicos',
      period: '2022 - 2023',
      location: 'São Paulo, Brasil',
      description: 'Configuração de serviços Linux, administração de redes corporativas e segurança de perímetros.',
      icon: Award,
      color: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Formação & Cursos
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Minha trajetória acadêmica e especializações técnicas na área de tecnologia e infraestrutura
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fadeInUp flex flex-col"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Header com gradiente */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-primary font-medium text-sm mb-4">
                    {item.institution}
                  </p>

                  <div className="space-y-2 mb-6 text-foreground/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
