import React from 'react';

interface ReviewsProps {
  spotsLeft: number;
}

const reviews = [
  {
    name: "Peter de Vries",
    company: "Lokale Bakkerij De Vries",
    text: "Thomas heeft mijn visie perfect vertaald naar een prachtige website. Zijn persoonlijke aanpak maakt echt het verschil!",
  },
  {
    name: "Lisa van Dam",
    company: "Yoga Studio Puur",
    text: "Eindelijk een website waar ik trots op ben. Thomas nam alle tijd om mijn wensen te begrijpen en het resultaat is geweldig.",
  },
  {
    name: "Mark Jansen",
    company: "Jansen Administratie",
    text: "Zeer tevreden met mijn nieuwe website. De persoonlijke begeleiding was top en het resultaat overtreft mijn verwachtingen.",
  }
];

export default function Reviews({ spotsLeft }: ReviewsProps) {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-12 h-12 bg-[#00b67a] p-2 m-0.5">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium">
          Trustscore 5/5 op <span className="text-[#00b67a]">★</span> Trustpilot
        </p>
        <div className="mt-4 inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
          Nog maar {spotsLeft} plekken beschikbaar! (t.w.v. €989)
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#00b67a] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{review.text}"</p>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">{review.name}</p>
              <p>{review.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}