// components/TemplesList.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { temples } from '@/data/templeData';

export default function TemplesList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {temples.map((temple) => (
        <div
          key={temple.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-amber-100"
        >
          <div className="relative h-48 w-full bg-amber-50">
            {temple.image ? (
              <Image
                src={temple.image}
                alt={temple.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-6xl">🛕</span>
              </div>
            )}
          </div>

          <div className="p-4">
            <h3 className="text-xl font-bold text-bhagwa-dark mb-1">{temple.name}</h3>
            <h4 className="text-md text-bhagwa-dark font-serif mb-2">{temple.nameHindi}</h4>
            <p className="text-gray-700 text-sm line-clamp-3 mb-4">{temple.descriptionHindi}</p>

            <Link
              href={`/temples/${temple.id}`}
              className="inline-block text-bhagwa-dark font-semibold hover:underline"
            >
              विस्तृत जानकारी →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
