import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Ontdek Onze Werkwijze</h2>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Snopi Werkwijze"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Smooth Scrolling Experience</h3>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/assets/scrolling.gif"
                alt="Smooth Scrolling Demo"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">SEO Optimization</h3>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/assets/seo.gif"
                alt="SEO Performance Demo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-300 mt-8">
          Bekijk hoe wij uw digitale visie tot leven brengen
        </p>
      </div>
    </section>
  );
}