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
  'nav.about': { pt: 'Sobre', en: 'About', es: 'Acerca de' },
  'nav.skills': { pt: 'Skills', en: 'Skills', es: 'Habilidades' },
  'nav.experience': { pt: 'Experiência', en: 'Experience', es: 'Experiencia' },
  'nav.projects': { pt: 'Projetos', en: 'Projects', es: 'Proyectos' },
  'nav.contact': { pt: 'Contato', en: 'Contact', es: 'Contacto' },

  // Hero
  'hero.welcome': { pt: 'Bem-vindo ao meu portfólio', en: 'Welcome to my portfolio', es: 'Bienvenido a mi portafolio' },
  'hero.title': { pt: 'Leandro E. Souza', en: 'Leandro E. Souza', es: 'Leandro E. Souza' },
  'hero.subtitle': { pt: 'Infraestrutura | DevOps | Automação', en: 'Infrastructure | DevOps | Automation', es: 'Infraestructura | DevOps | Automatización' },
  'hero.description': { pt: 'Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia e infraestrutura. Especializado em automação, Linux, Docker e configuração de ambientes. Buscando evoluir para a área de DevOps e Cloud Computing.', en: 'Systems Analysis and Development student passionate about technology and infrastructure. Specialized in automation, Linux, Docker and environment configuration. Seeking to evolve in the DevOps and Cloud Computing field.', es: 'Estudiante de Análisis y Desarrollo de Sistemas apasionado por la tecnología e infraestructura. Especializado en automatización, Linux, Docker y configuración de entornos. Buscando evolucionar en el área de DevOps y Cloud Computing.' },
  'hero.projects_btn': { pt: 'Ver Projetos', en: 'View Projects', es: 'Ver Proyectos' },
  'hero.contact_btn': { pt: 'Entrar em Contato', en: 'Get in Touch', es: 'Ponerse en Contacto' },
  'hero.terminal.whoami': { pt: 'whoami', en: 'whoami', es: 'whoami' },
  'hero.terminal.skills': { pt: 'skills --list', en: 'skills --list', es: 'skills --list' },

  // About
  'about.title': { pt: 'Sobre Mim', en: 'About Me', es: 'Acerca de Mí' },
  'about.description1': { pt: 'Sou um profissional apaixonado por tecnologia, com experiência prática em manutenção de computadores, infraestrutura interna e configuração de redes. Atualmente cursando Análise e Desenvolvimento de Sistemas, estou em constante evolução para me especializar em DevOps e Cloud Computing.', en: 'I am a professional passionate about technology, with practical experience in computer maintenance, internal infrastructure and network configuration. Currently studying Systems Analysis and Development, I am constantly evolving to specialize in DevOps and Cloud Computing.', es: 'Soy un profesional apasionado por la tecnología, con experiencia práctica en mantenimiento de computadoras, infraestructura interna y configuración de redes. Actualmente estudiando Análisis y Desarrollo de Sistemas, estoy en constante evolución para especializarme en DevOps y Cloud Computing.' },
  'about.description2': { pt: 'Minha jornada profissional começou com suporte técnico e evoluiu para automação de processos e infraestrutura. Tenho facilidade em aprender novas tecnologias e gosto de resolver problemas complexos através de soluções criativas e eficientes.', en: 'My professional journey started with technical support and evolved into process automation and infrastructure. I have a knack for learning new technologies and enjoy solving complex problems through creative and efficient solutions.', es: 'Mi viaje profesional comenzó con soporte técnico y evolucionó hacia la automatización de procesos e infraestructura. Tengo facilidad para aprender nuevas tecnologías y disfruto resolviendo problemas complejos a través de soluciones creativas y eficientes.' },
  'about.highlight1': { pt: 'Experiência Prática', en: 'Practical Experience', es: 'Experiencia Práctica' },
  'about.highlight2': { pt: 'Aprendizado Contínuo', en: 'Continuous Learning', es: 'Aprendizaje Continuo' },
  'about.highlight3': { pt: 'Resolução de Problemas', en: 'Problem Solving', es: 'Resolución de Problemas' },
  'about.development': { pt: 'Desenvolvimento', en: 'Development', es: 'Desarrollo' },
  'about.infrastructure': { pt: 'Infraestrutura', en: 'Infrastructure', es: 'Infraestructura' },
  'about.devops': { pt: 'DevOps', en: 'DevOps', es: 'DevOps' },

  // Skills
  'skills.title': { pt: 'Competências Técnicas', en: 'Technical Skills', es: 'Habilidades Técnicas' },
  'skills.description': { pt: 'Conjunto diverso de habilidades desenvolvidas através de experiência prática e aprendizado contínuo', en: 'Diverse set of skills developed through practical experience and continuous learning', es: 'Conjunto diverso de habilidades desarrolladas a través de experiencia práctica y aprendizaje continuo' },
  'skills.backend': { pt: 'Backend & Infraestrutura', en: 'Backend & Infrastructure', es: 'Backend e Infraestructura' },
  'skills.devops': { pt: 'DevOps & Cloud', en: 'DevOps & Cloud', es: 'DevOps y Cloud' },
  'skills.tools': { pt: 'Ferramentas & Tecnologias', en: 'Tools & Technologies', es: 'Herramientas y Tecnologías' },

  // Experience
  'experience.title': { pt: 'Experiência Profissional', en: 'Professional Experience', es: 'Experiencia Profesional' },
  'experience.description': { pt: 'Trajetória profissional com foco em infraestrutura, automação e desenvolvimento', en: 'Professional trajectory focused on infrastructure, automation and development', es: 'Trayectoria profesional enfocada en infraestructura, automatización y desarrollo' },
  'experience.freelance': { pt: 'Trabalho Autônomo', en: 'Freelance Work', es: 'Trabajo Autónomo' },
  'experience.support': { pt: 'Manutenção e Suporte Técnico', en: 'Maintenance and Technical Support', es: 'Mantenimiento y Soporte Técnico' },
  'experience.networking': { pt: 'Configuração de Redes', en: 'Network Configuration', es: 'Configuración de Redes' },
  'experience.cables': { pt: 'Criação de Cabos', en: 'Cable Creation', es: 'Creación de Cables' },
  'experience.switches': { pt: 'Configuração de Switches e Roteadores', en: 'Switches and Routers Configuration', es: 'Configuración de Switches y Enrutadores' },
  'experience.automation': { pt: 'Scripts para Automação Interna', en: 'Scripts for Internal Automation', es: 'Scripts para Automatización Interna' },
  'experience.fulltime': { pt: 'Fulltime', en: 'Fulltime', es: 'Fulltime' },
  'experience.fulltime_desc': { pt: 'Atuação em infraestrutura e suporte técnico em uma das maiores empresas de monitoramento e rastreamento do Brasil.', en: 'Working in infrastructure and technical support at one of the largest monitoring and tracking companies in Brazil.', es: 'Actuación en infraestructura y soporte técnico en una de las mayores empresas de monitoreo y rastreo de Brasil.' },
  'experience.fulltime_resp1': { pt: 'Manutenção e monitoramento de infraestrutura crítica', en: 'Maintenance and monitoring of critical infrastructure', es: 'Mantenimiento y monitoreo de infraestructura crítica' },
  'experience.fulltime_resp2': { pt: 'Suporte técnico especializado em soluções de rastreamento e IoT', en: 'Specialized technical support in tracking and IoT solutions', es: 'Soporte técnico especializado en soluciones de rastreo e IoT' },
  'experience.fulltime_resp3': { pt: 'Configuração e gerenciamento de ambientes de rede', en: 'Configuration and management of network environments', es: 'Configuración y gestión de entornos de red' },
  'experience.fulltime_resp4': { pt: 'Automação de processos internos e suporte a sistemas legados', en: 'Internal process automation and legacy systems support', es: 'Automatización de procesos internos y soporte a sistemas legados' },
  'experience.present': { pt: 'Presente', en: 'Present', es: 'Presente' },
  'experience.talk': { pt: 'Vamos Conversar', en: "Let's Talk", es: 'Hablemos' },

  // Projects
  'projects.title': { pt: 'Projetos em Destaque', en: 'Featured Projects', es: 'Proyectos Destacados' },
  'projects.description': { pt: 'Projetos práticos que demonstram minha expertise em infraestrutura, automação e DevOps', en: 'Practical projects that demonstrate my expertise in infrastructure, automation and DevOps', es: 'Proyectos prácticos que demuestran mi experiencia en infraestructura, automatización y DevOps' },
  'projects.github': { pt: 'Visitar GitHub', en: 'Visit GitHub', es: 'Visitar GitHub' },
  'projects.loading': { pt: 'Carregando projetos...', en: 'Loading projects...', es: 'Cargando proyectos...' },
  'projects.error': { pt: 'Não foi possível carregar os projetos do GitHub. Exibindo projetos de exemplo.', en: 'Unable to load GitHub projects. Displaying example projects.', es: 'No se pudieron cargar los proyectos de GitHub. Mostrando proyectos de ejemplo.' },
  'projects.language': { pt: 'Linguagem', en: 'Language', es: 'Lenguaje' },
  'projects.more': { pt: 'Quer ver mais projetos e contribuições?', en: 'Want to see more projects and contributions?', es: '¿Quieres ver más proyectos y contribuciones?' },
  'projects.backup': { pt: 'Script de Backup Automatizado', en: 'Automated Backup Script', es: 'Script de Copia de Seguridad Automatizado' },
  'projects.backup_desc': { pt: 'Sistema completo de backup automatizado em Python com compressão, criptografia e sincronização em nuvem.', en: 'Complete automated backup system in Python with compression, encryption and cloud synchronization.', es: 'Sistema completo de copia de seguridad automatizado en Python con compresión, encriptación y sincronización en la nube.' },
  'projects.docker': { pt: 'Setup Servidor Linux com Docker', en: 'Linux Server Setup with Docker', es: 'Configuración de Servidor Linux con Docker' },
  'projects.docker_desc': { pt: 'Configuração completa de servidor Linux com Docker, incluindo orquestração de containers e monitoramento.', en: 'Complete Linux server configuration with Docker, including container orchestration and monitoring.', es: 'Configuración completa del servidor Linux con Docker, incluyendo orquestación de contenedores y monitoreo.' },
  'projects.network': { pt: 'Laboratório de Redes Local', en: 'Local Network Lab', es: 'Laboratorio de Redes Local' },
  'projects.network_desc': { pt: 'Ambiente de laboratório para estudos de redes com múltiplos switches, roteadores e VLANs configuradas.', en: 'Lab environment for network studies with multiple switches, routers and configured VLANs.', es: 'Entorno de laboratorio para estudios de redes con múltiples switches, enrutadores y VLAN configuradas.' },

  // Contact
  'contact.title': { pt: 'Entre em Contato', en: 'Get in Touch', es: 'Ponte en Contacto' },
  'contact.description': { pt: 'Estou sempre aberto a novas oportunidades e conversas sobre tecnologia', en: 'I am always open to new opportunities and conversations about technology', es: 'Siempre estoy abierto a nuevas oportunidades y conversaciones sobre tecnología' },
  'contact.info': { pt: 'Informações de Contato', en: 'Contact Information', es: 'Información de Contacto' },
  'contact.social': { pt: 'Redes Sociais', en: 'Social Networks', es: 'Redes Sociales' },
  'contact.send': { pt: 'Enviar Mensagem', en: 'Send Message', es: 'Enviar Mensaje' },
  'contact.success': { pt: '✓ Mensagem enviada com sucesso! Responderei em breve.', en: '✓ Message sent successfully! I will reply soon.', es: '✓ ¡Mensaje enviado con éxito! Responderé pronto.' },
  'contact.name': { pt: 'Seu Nome', en: 'Your Name', es: 'Tu Nombre' },
  'contact.email': { pt: 'Seu Email', en: 'Your Email', es: 'Tu Correo Electrónico' },
  'contact.message': { pt: 'Sua Mensagem', en: 'Your Message', es: 'Tu Mensaje' },
  'contact.phone': { pt: 'Telefone', en: 'Phone', es: 'Teléfono' },
  'contact.location': { pt: 'Localização', en: 'Location', es: 'Ubicación' },
  'contact.placeholder.name': { pt: 'João Silva', en: 'John Doe', es: 'Juan García' },
  'contact.placeholder.email': { pt: 'seu@email.com', en: 'your@email.com', es: 'tu@email.com' },
  'contact.placeholder.message': { pt: 'Olá Leandro, gostaria de conversar sobre...', en: 'Hi Leandro, I would like to talk about...', es: 'Hola Leandro, me gustaría hablar sobre...' },
  'contact.phone_number': { pt: '+55 (14) 99615-1288', en: '+55 (14) 99615-1288', es: '+55 (14) 99615-1288' },
  'contact.location_city': { pt: 'Vera Cruz', en: 'Vera Cruz', es: 'Vera Cruz' },
  'contact.location_state': { pt: 'Sao Paulo', en: 'Sao Paulo', es: 'Sao Paulo' },
  'contact.location_country': { pt: 'Brasil', en: 'Brazil', es: 'Brasil' },

  // Footer
  'footer.quicklinks': { pt: 'Links Rápidos', en: 'Quick Links', es: 'Enlaces Rápidos' },
  'footer.social': { pt: 'Redes Sociais', en: 'Social Media', es: 'Redes Sociales' },
  'footer.copyright': { pt: '© 2026 Leandro E. Souza. Todos os direitos reservados.', en: '© 2026 Leandro E. Souza. All rights reserved.', es: '© 2026 Leandro E. Souza. Todos los derechos reservados.' },
  'footer.scrolltop': { pt: 'Voltar ao Topo', en: 'Back to Top', es: 'Volver al Inicio' },
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
