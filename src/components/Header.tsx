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
      Ik zal je website gratis ontwerpen. Als je het leuk vindt, kun je het van ons kopen. Zo niet… Geen probleem.
      </p>
      <div className="mt-4 inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
        Nog maar {spotsLeft} plekken beschikbaar! (t.w.v. €989)
      </div>
    </div>
  );
}