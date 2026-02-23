import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

/**
 * Footer Component
 * Rodapé com links sociais e informações
 * Design: Minimalista com scroll to top button
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <span className="text-foreground font-bold">Leandro Souza</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Profissional apaixonado por infraestrutura e DevOps, sempre buscando aprender e crescer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Sobre', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
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

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Conecte-se</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 border border-border rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary/50 border border-border rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:leandro@email.com"
                className="w-10 h-10 bg-secondary/50 border border-border rounded-lg flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-foreground/60 text-sm text-center sm:text-left">
            © {currentYear} Leandro E. Souza. Feito com{' '}
            <Heart className="inline-block w-4 h-4 text-primary mx-1" />
            usando React, Vite e TailwindCSS.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary/10 border border-primary/50 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-foreground/50 text-xs text-center">
            Este portfólio foi desenvolvido como showcase de habilidades em desenvolvimento web e design responsivo.
          </p>
        </div>
      </div>
    </footer>
  );
}
