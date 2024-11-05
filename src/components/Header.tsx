import React from 'react';

interface HeaderProps {
  spotsLeft: number;
}

export default function Header({ spotsLeft }: HeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Claim Nu 1 van de 10 Gratis Website Ontwerpen
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Als solo-ondernemer help ik persoonlijk 10 ondernemers aan een professionele website. Wees er snel bij, want vol = vol!
      </p>
      <div className="mt-4 inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
        Nog maar {spotsLeft} plekken beschikbaar! (t.w.v. €989)
      </div>
    </div>
  );
}