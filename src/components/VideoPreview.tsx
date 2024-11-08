import React, { useState } from 'react';
import { Play } from 'lucide-react';
import webDesignAd from '../assets/webdesign ad.mp4'; // Adjust the path according to your project structure

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
      <div className="aspect-video">
        {isPlaying ? (
          <video
            src={webDesignAd}
            controls
            autoPlay
            className="absolute top-0 left-0 w-full h-full"
          />
        ) : (
          <>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Website Success"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handlePlayClick}
                className="bg-white/90 hover:bg-white p-6 rounded-full transition-all transform hover:scale-110"
              >
                <Play className="w-12 h-12 text-blue-600" fill="currentColor" />
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}