import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Experience Component
 * Timeline de experiência profissional
 * Design: Vertical timeline com cards
 */
export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.fulltime'),
      period: 'Set 2024 - ' + t('experience.present'),
      location: 'Garça, SP',
      description: t('experience.fulltime_desc'),
      responsibilities: [
        t('experience.fulltime_resp1'),
        t('experience.fulltime_resp2'),
        t('experience.fulltime_resp3'),
        t('experience.fulltime_resp4'),
      ],
    },
    {
      title: t('experience.freelance'),
      period: '2022 - 2024',
      location: 'Brasil',
      description: 'Trabalho autônomo prestando serviços de manutenção, suporte técnico e configuração de infraestrutura para clientes diversos.',
      responsibilities: [
        t('experience.support'),
        t('experience.networking'),
        t('experience.cables'),
        t('experience.switches'),
        t('experience.automation'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('experience.title')}
            </h2>
            <p className="text-foreground/60 text-lg">
              {t('experience.description')}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5" />

                {/* Content */}
                <div className="ml-8 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex flex-col gap-2 mt-2 text-foreground/60 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 p-3 bg-primary/10 border border-primary/30 rounded-lg">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <div key={respIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/60 text-sm">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <p className="text-foreground/60 mb-4">Interessado em conversar sobre oportunidades?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              {t('experience.talk')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
