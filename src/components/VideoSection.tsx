import React, { useState } from 'react';
import { Play } from 'lucide-react';
import webDesignAd from '../assets/webdesign ad.mp4'; // Adjust the path according to your project structure

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Ontdek Onze Werkwijze</h2>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16">
          {isPlaying ? (
            <video
              src={webDesignAd}
              controls
              autoPlay
              className="absolute top-0 left-0 w-full h-full"
            />
          ) : (
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 rounded-2xl"
            >
              <Play className="w-12 h-12 text-white" fill="currentColor" />
            </button>
          )}
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