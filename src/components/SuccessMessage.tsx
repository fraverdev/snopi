import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-4">Bedankt voor je aanvraag!</h1>
        <p className="text-gray-600">
          We hebben je gegevens ontvangen en nemen binnen 24 uur contact met je op om je gratis website ontwerp te bespreken.
        </p>
      </div>
    </div>
  );
}