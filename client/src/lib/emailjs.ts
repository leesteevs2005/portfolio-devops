import emailjs from '@emailjs/browser';

// Configurar EmailJS com sua chave pública
// Você pode obter essas chaves em: https://dashboard.emailjs.com/
export const initEmailJS = () => {
  emailjs.init({
    publicKey: 'YOUR_PUBLIC_KEY', // Será substituído com a chave real
  });
};

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      'service_portfolio', // Service ID
      'template_portfolio', // Template ID
      {
        to_email: 'leesteves2005@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
