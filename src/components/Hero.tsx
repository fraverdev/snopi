import React from 'react';
import { Code2, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Code2 className="w-16 h-16 mx-auto mb-8 text-indigo-600" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Snopi
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Digitale Excellentie voor Vooruitstrevende Merken
        </p>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto">
          Neem Contact Op <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}