import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Footer Component
 * Rodapé com links rápidos e redes sociais
 * Design: Minimalista com gradiente sutil
 */
export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/leesteevs2005',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/leandro-esteves-de-souza-820572236/',
      label: 'LinkedIn',
    },

  ];

  return (
    <footer className="bg-gradient-to-t from-card/50 to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">{t('footer.social')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary/50 border border-border rounded-lg text-foreground/70 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="flex flex-col items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              aria-label={t('footer.scrolltop')}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-foreground/50 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
