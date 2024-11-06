import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.eu2.make.com/7tjmqwx8wjv69sceu5sr759j1fmrmzuy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Start Uw Digitale Reis</h2>
          <p className="text-gray-600 text-center mb-8">
            Laat uw contactgegevens achter en ontvang binnen 24 uur een gratis adviesgesprek
          </p>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
              Bedankt voor uw aanvraag! We nemen binnen 24 uur contact met u op.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
              Er is iets misgegaan. Probeer het later opnieuw of neem direct contact met ons op.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Bedrijfsnaam
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Uw Bericht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSubmitting ? (
                'Verzenden...'
              ) : (
                <>Verstuur Aanvraag <Send className="w-5 h-5" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}