import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
      <div className="aspect-video">
        {isPlaying ? (
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1026811184?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="webdesign ad"
              allowFullScreen
            />
          </div>
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