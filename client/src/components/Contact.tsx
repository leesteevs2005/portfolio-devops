import { useState, useEffect } from 'react';
import { Phone, MapPin, Send, User, CheckCircle, AlertCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

/**
 * Contact Component
 * Formulário de contato com EmailJS
 * Design: Cards com informações e formulário responsivo
 */
export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    // Inicializar EmailJS com chave pública
    emailjs.init('4QBiCZZRdrVcigNul');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: 'error',
        message: 'Por favor, preencha todos os campos',
      });
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send('service_portfolio', 'template_portfolio', {
        to_email: 'leesteves2005@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      });

      setNotification({
        type: 'success',
        message: 'Email enviado com sucesso! Obrigado pelo contato.',
      });
      setFormData({ name: '', email: '', message: '' });

      // Remover notificação após 5 segundos
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setNotification({
        type: 'error',
        message: 'Erro ao enviar email. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+55 (14) 99615-1288',
      href: 'tel:+5514996151288',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Vera Cruz, SP - Brasil',
      href: '#',
    },
    {
      icon: User,
      label: 'Profissão',
      value: 'Infraestrutura | DevOps',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fadeInUp group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 border border-primary/30 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.label}</h3>
                <p className="text-foreground/60 group-hover:text-primary transition-colors">{info.value}</p>
              </a>
            );
          })}
        </div>

        {/* Notification Pop-up */}
        {notification && (
          <div className="fixed top-4 right-4 z-50 animate-fadeInUp">
            <div
              className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl border backdrop-blur-sm ${
                notification.type === 'success'
                  ? 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-300'
                  : 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
              }`}
            >
              <div className="flex-shrink-0">
                {notification.type === 'success' ? (
                  <CheckCircle size={24} className="text-green-500" />
                ) : (
                  <AlertCircle size={24} className="text-red-500" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm md:text-base">{notification.message}</p>
              </div>
              <button
                onClick={() => setNotification(null)}
                className="flex-shrink-0 ml-2 hover:opacity-70 transition-opacity"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="p-8 bg-card border border-border rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact.send')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.placeholder.name')}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.placeholder.email')}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.placeholder.message')}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                <Send size={20} />
                {isLoading ? 'Enviando...' : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
