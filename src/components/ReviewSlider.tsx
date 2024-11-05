import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    quote: "Snopi heeft onze online aanwezigheid compleet getransformeerd. Hun oog voor detail heeft onze conversies met 200% verhoogd.",
    author: "Sarah de Vries",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "De beste investering die we ooit hebben gedaan. Het team denkt echt mee en levert altijd meer dan verwacht.",
    author: "Mark van der Berg",
    role: "Eigenaar, Studio MVB",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "Uitzonderlijke service en creativiteit. Ze hebben onze visie perfect vertaald naar een moderne website.",
    author: "Lisa Bakker",
    role: "Marketing Director, InnovateCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export default function ReviewSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex justify-center gap-2 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      <div className="overflow-hidden relative">
        <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <blockquote className="text-2xl font-light italic text-gray-600 mb-6">
                  "{review.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={review.image}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold">{review.author}</div>
                    <div className="text-gray-600">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}