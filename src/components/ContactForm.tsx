import React, { useState, useEffect } from 'react';
import { AlertCircle, Check } from 'lucide-react';

interface FormData {
  email: string;
  phone: string;
  company: string;
}

interface ContactFormProps {
  formData: FormData;
  isSubmitting: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onChange: (field: keyof FormData, value: string) => void;
}

export default function ContactForm({ formData, isSubmitting, error, onSubmit, onChange }: ContactFormProps) {
  const [spotsLeft, setSpotsLeft] = useState(6);
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    // Decrease spots after 5 seconds
    const spotTimer = setTimeout(() => {
      setSpotsLeft(5);
    }, 5000);

    // Set urgent status after 30 seconds
    const urgencyTimer = setTimeout(() => {
      setIsUrgent(true);
    }, 30000);

    return () => {
      clearTimeout(spotTimer);
      clearTimeout(urgencyTimer);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="mb-8 space-y-4">
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
          <p className="text-gray-700">Persoonlijke begeleiding bij het ontwerp van jouw website</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
          <p className="text-gray-700">Professioneel design dat perfect past bij jouw bedrijf</p>
        </div>
        <div className="flex items-start gap-3">
          <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
          <p className="text-gray-700">100% gratis, geen verborgen kosten</p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className={`w-3 h-3 rounded-full animate-pulse ${isUrgent ? 'bg-red-500' : 'bg-orange-500'}`} />
          <p className={`text-sm font-medium ${isUrgent ? 'text-red-600' : 'text-orange-600'}`}>
            Nog {spotsLeft} plekken beschikbaar
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mailadres
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Jouw telefoonnummer
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Bedrijfsnaam
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => onChange('company', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-orange-500 hover:bg-orange-600 transform hover:scale-105'
          }`}
        >
          {isSubmitting ? 'Even geduld...' : '🎁 Claim Nu Jouw Gratis Website Ontwerp'}
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Nog maar {spotsLeft} gratis ontwerpen beschikbaar. Wees er snel bij!
        </p>
      </form>
    </div>
  );
}