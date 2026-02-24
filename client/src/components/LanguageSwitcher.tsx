import { useLanguage, type Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

/**
 * LanguageSwitcher Component
 * Seletor de idiomas (PT-BR, ENG, ES)
 * Design: Dropdown elegante na navbar
 */
export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border border-border rounded-lg text-foreground/70 hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium">
        <Globe size={16} />
        <span className="hidden sm:inline">{language.toUpperCase()}</span>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-3 flex items-center gap-2 hover:bg-primary/10 transition-colors ${
              language === lang.code
                ? 'bg-primary/20 text-primary border-b border-border'
                : 'text-foreground/70 hover:text-foreground'
            } ${lang.code === 'es' ? '' : 'border-b border-border'}`}
          >
            <span>{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
            {language === lang.code && <span className="ml-auto text-primary">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
