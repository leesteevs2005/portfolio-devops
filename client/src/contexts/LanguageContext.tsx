import React, { createContext, useContext, useState } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.about': {
    pt: 'Sobre',
    en: 'About',
    es: 'Acerca de',
  },
  'nav.skills': {
    pt: 'Skills',
    en: 'Skills',
    es: 'Habilidades',
  },
  'nav.experience': {
    pt: 'Experiência',
    en: 'Experience',
    es: 'Experiencia',
  },
  'nav.projects': {
    pt: 'Projetos',
    en: 'Projects',
    es: 'Proyectos',
  },
  'nav.contact': {
    pt: 'Contato',
    en: 'Contact',
    es: 'Contacto',
  },

  // Hero
  'hero.welcome': {
    pt: 'Bem-vindo ao meu portfólio',
    en: 'Welcome to my portfolio',
    es: 'Bienvenido a mi portafolio',
  },
  'hero.title': {
    pt: 'Leandro E. Souza',
    en: 'Leandro E. Souza',
    es: 'Leandro E. Souza',
  },
  'hero.subtitle': {
    pt: 'Infraestrutura | DevOps | Automação',
    en: 'Infrastructure | DevOps | Automation',
    es: 'Infraestructura | DevOps | Automatización',
  },
  'hero.description': {
    pt: 'Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia e infraestrutura. Especializado em automação, Linux, Docker e configuração de ambientes. Buscando evoluir para a área de DevOps e Cloud Computing.',
    en: 'Systems Analysis and Development student passionate about technology and infrastructure. Specialized in automation, Linux, Docker and environment configuration. Seeking to evolve in the DevOps and Cloud Computing field.',
    es: 'Estudiante de Análisis y Desarrollo de Sistemas apasionado por la tecnología e infraestructura. Especializado en automatización, Linux, Docker y configuración de entornos. Buscando evolucionar en el área de DevOps y Cloud Computing.',
  },
  'hero.projects_btn': {
    pt: 'Ver Projetos',
    en: 'View Projects',
    es: 'Ver Proyectos',
  },
  'hero.contact_btn': {
    pt: 'Entrar em Contato',
    en: 'Get in Touch',
    es: 'Ponerse en Contacto',
  },

  // About
  'about.title': {
    pt: 'Sobre Mim',
    en: 'About Me',
    es: 'Acerca de Mí',
  },
  'about.description1': {
    pt: 'Sou um profissional apaixonado por tecnologia, com experiência prática em manutenção de computadores, infraestrutura interna e configuração de redes. Atualmente cursando Análise e Desenvolvimento de Sistemas, estou em constante evolução para me especializar em DevOps e Cloud Computing.',
    en: 'I am a professional passionate about technology, with practical experience in computer maintenance, internal infrastructure and network configuration. Currently studying Systems Analysis and Development, I am constantly evolving to specialize in DevOps and Cloud Computing.',
    es: 'Soy un profesional apasionado por la tecnología, con experiencia práctica en mantenimiento de computadoras, infraestructura interna y configuración de redes. Actualmente estudiando Análisis y Desarrollo de Sistemas, estoy en constante evolución para especializarme en DevOps y Cloud Computing.',
  },
  'about.description2': {
    pt: 'Minha jornada profissional começou com suporte técnico e evoluiu para automação de processos e infraestrutura. Tenho facilidade em aprender novas tecnologias e gosto de resolver problemas complexos através de soluções criativas e eficientes.',
    en: 'My professional journey started with technical support and evolved into process automation and infrastructure. I have a knack for learning new technologies and enjoy solving complex problems through creative and efficient solutions.',
    es: 'Mi viaje profesional comenzó con soporte técnico y evolucionó hacia la automatización de procesos e infraestructura. Tengo facilidad para aprender nuevas tecnologías y disfruto resolviendo problemas complejos a través de soluciones creativas y eficientes.',
  },
  'about.development': {
    pt: 'Desenvolvimento',
    en: 'Development',
    es: 'Desarrollo',
  },
  'about.infrastructure': {
    pt: 'Infraestrutura',
    en: 'Infrastructure',
    es: 'Infraestructura',
  },
  'about.devops': {
    pt: 'DevOps',
    en: 'DevOps',
    es: 'DevOps',
  },

  // Skills
  'skills.title': {
    pt: 'Competências Técnicas',
    en: 'Technical Skills',
    es: 'Habilidades Técnicas',
  },
  'skills.description': {
    pt: 'Conjunto diverso de habilidades desenvolvidas através de experiência prática e aprendizado contínuo',
    en: 'Diverse set of skills developed through practical experience and continuous learning',
    es: 'Conjunto diverso de habilidades desarrolladas a través de experiencia práctica y aprendizaje continuo',
  },
  'skills.proficiency': {
    pt: 'Nível de Proficiência',
    en: 'Proficiency Level',
    es: 'Nivel de Competencia',
  },

  // Experience
  'experience.title': {
    pt: 'Experiência Profissional',
    en: 'Professional Experience',
    es: 'Experiencia Profesional',
  },
  'experience.description': {
    pt: 'Trajetória profissional com foco em infraestrutura, automação e desenvolvimento',
    en: 'Professional trajectory focused on infrastructure, automation and development',
    es: 'Trayectoria profesional enfocada en infraestructura, automatización y desarrollo',
  },
  'experience.talk': {
    pt: 'Vamos Conversar',
    en: "Let's Talk",
    es: 'Hablemos',
  },

  // Projects
  'projects.title': {
    pt: 'Projetos em Destaque',
    en: 'Featured Projects',
    es: 'Proyectos Destacados',
  },
  'projects.description': {
    pt: 'Projetos práticos que demonstram minha expertise em infraestrutura, automação e DevOps',
    en: 'Practical projects that demonstrate my expertise in infrastructure, automation and DevOps',
    es: 'Proyectos prácticos que demuestran mi experiencia en infraestructura, automatización y DevOps',
  },
  'projects.github': {
    pt: 'Visitar GitHub',
    en: 'Visit GitHub',
    es: 'Visitar GitHub',
  },

  // Contact
  'contact.title': {
    pt: 'Entre em Contato',
    en: 'Get in Touch',
    es: 'Ponte en Contacto',
  },
  'contact.description': {
    pt: 'Estou sempre aberto a novas oportunidades e conversas sobre tecnologia',
    en: 'I am always open to new opportunities and conversations about technology',
    es: 'Siempre estoy abierto a nuevas oportunidades y conversaciones sobre tecnología',
  },
  'contact.info': {
    pt: 'Informações de Contato',
    en: 'Contact Information',
    es: 'Información de Contacto',
  },
  'contact.social': {
    pt: 'Redes Sociais',
    en: 'Social Networks',
    es: 'Redes Sociales',
  },
  'contact.send': {
    pt: 'Enviar Mensagem',
    en: 'Send Message',
    es: 'Enviar Mensaje',
  },
  'contact.success': {
    pt: '✓ Mensagem enviada com sucesso! Responderei em breve.',
    en: '✓ Message sent successfully! I will reply soon.',
    es: '✓ ¡Mensaje enviado con éxito! Responderé pronto.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
