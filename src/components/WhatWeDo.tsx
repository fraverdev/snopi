import React from 'react';
import { Code, Palette, Globe, Gauge, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Development",
    description: "Op maat gemaakte oplossingen die perfect aansluiten bij uw bedrijfsprocessen"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Intuïtieve en aantrekkelijke interfaces die gebruikers betrekken"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Applicaties",
    description: "Schaalbare en veilige applicaties voor elk platform"
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance",
    description: "Geoptimaliseerde websites voor maximale snelheid en conversie"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Support",
    description: "24/7 ondersteuning en onderhoud voor uw digitale producten"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Strategie",
    description: "Digitale strategieën die resultaten opleveren"
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Wat Wij Doen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all border border-gray-100">
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}