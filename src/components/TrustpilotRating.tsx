import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Peter de Vries",
    company: "TechStart BV",
    text: "Onze omzet is met 300% gestegen sinds we deze strategieën hebben geïmplementeerd.",
    rating: 5
  },
  {
    name: "Lisa van Dam",
    company: "Marketing Pro",
    text: "De beste investering voor ons bedrijf dit jaar. Geweldige resultaten!",
    rating: 5
  },
  {
    name: "Mark Jansen",
    company: "E-commerce Solutions",
    text: "In één maand meer leads dan in het hele vorige jaar. Fantastisch!",
    rating: 5
  }
];

export default function TrustpilotRating() {
  return (
    <div className="mt-8 pt-8 border-t space-y-8">
      <div className="text-center">
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
          ))}
        </div>
        <div className="text-sm text-gray-600">
          <p className="font-semibold">Uitstekend</p>
          <p>4.9 / 5 op Trustpilot</p>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex gap-1 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
              ))}
            </div>
            <p className="text-gray-700 mb-2">"{review.text}"</p>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">{review.name}</p>
              <p>{review.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}