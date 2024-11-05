import React, { useState } from 'react';
import Header from './components/Header';
import VideoPreview from './components/VideoPreview';
import ContactForm from './components/ContactForm';
import SuccessMessage from './components/SuccessMessage';
import Reviews from './components/Reviews';

interface FormData {
  email: string;
  phone: string;
  company: string;
}

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [spotsLeft, setSpotsLeft] = useState(6);
  const [isUrgent, setIsUrgent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    company: ''
  });

  React.useEffect(() => {
    const spotTimer = setTimeout(() => {
      setSpotsLeft(5);
    }, 5000);

    const urgencyTimer = setTimeout(() => {
      setIsUrgent(true);
    }, 30000);

    return () => {
      clearTimeout(spotTimer);
      clearTimeout(urgencyTimer);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://hook.eu2.make.com/7tjmqwx8wjv69sceu5sr759j1fmrmzuy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            timestamp: new Date().toISOString()
          }
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
      setFormData({ email: '', phone: '', company: '' });
      window.scrollTo(0, 0);
    } catch (error) {
      setError('Er is iets misgegaan. Probeer het later opnieuw of neem direct contact met ons op.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-orange-100 to-red-100 py-2 text-center text-sm font-medium">
        <p>🔥 Nog maar {spotsLeft} gratis website ontwerpen beschikbaar! (t.w.v. €989)</p>
      </div>
      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <Header spotsLeft={spotsLeft} />
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <VideoPreview />
          <ContactForm
            formData={formData}
            isSubmitting={isSubmitting}
            error={error}
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            spotsLeft={spotsLeft}
            isUrgent={isUrgent}
          />
        </div>
        <Reviews spotsLeft={spotsLeft} />
      </main>
      <footer className="py-4 text-center text-sm text-gray-600 border-t">
        <p>© 2024 Snopi.nl. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}

export default App;