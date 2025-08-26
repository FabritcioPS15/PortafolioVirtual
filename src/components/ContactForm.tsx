import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  isPreview?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isPreview = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El formato del email no es válido';
    }
    if (!isPreview && !formData.subject.trim()) newErrors.subject = 'El asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-300">
          Gracias por contactarme. Te responderé lo antes posible.
        </p>
      </motion.div>
    );
  }

  const fields = [
    { name: 'name', label: 'Nombre', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    ...(!isPreview ? [{ name: 'subject', label: 'Asunto', type: 'text', required: true }] : []),
  ];

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={`grid gap-6 ${isPreview ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        {fields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={field.name === 'subject' ? 'md:col-span-2' : ''}
          >
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
              {field.label} {field.required && <span className="text-red-400">*</span>}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                errors[field.name]
                  ? 'border-red-500 focus:ring-red-500/50'
                  : 'border-gray-600 focus:border-teal-400 focus:ring-teal-400/50'
              }`}
              placeholder={`Ingresa tu ${field.label.toLowerCase()}`}
            />
            {errors[field.name] && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center mt-2 text-red-400 text-sm"
              >
                <AlertCircle size={14} className="mr-1" />
                {errors[field.name]}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Mensaje <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={isPreview ? 4 : 6}
          className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.message
              ? 'border-red-500 focus:ring-red-500/50'
              : 'border-gray-600 focus:border-teal-400 focus:ring-teal-400/50'
          }`}
          placeholder="Cuéntame sobre tu proyecto..."
        />
        {errors.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center mt-2 text-red-400 text-sm"
          >
            <AlertCircle size={14} className="mr-1" />
            {errors.message}
          </motion.div>
        )}
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full px-8 py-4 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all ${
          isSubmitting
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:shadow-lg hover:shadow-teal-500/25'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>{isPreview ? 'Enviar Mensaje Rápido' : 'Enviar Mensaje'}</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;