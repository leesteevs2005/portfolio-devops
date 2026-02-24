import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * Navbar Component
 * Navegação fixa com scroll suave e menu responsivo
 * Design: Minimalismo Técnico - cores azul/roxo com animações suaves
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: 'Formação', href: '#education' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LS</span>
          </div>
          <span className="text-foreground font-bold hidden sm:inline">Leandro Souza</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side: Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fadeInUp">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="mb-2">
              <LanguageSwitcher />
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
