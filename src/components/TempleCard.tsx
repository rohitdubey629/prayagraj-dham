// components/TempleCard.tsx
'use client'

import { Temple } from '../data/templeData';
import Image from 'next/image';
import Link from 'next/link';

export default function TempleCard({ temple }: { temple: Temple }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-amber-100">
      <div className="relative h-48 w-full bg-amber-50">
        {temple.image ? (
          <Image 
            src={temple.image} 
            alt={temple.name} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-5xl">🛕</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-bhagwa-dark">{temple.name}</h3>
          <span className="bg-bhagwa-light text-white text-xs px-2 py-1 rounded">
            {/* {temple.deity} */}
          </span>
        </div>
        
        <h4 className="text-lg font-serif text-bhagwa-dark mb-3">{temple.nameHindi}</h4>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {temple.location}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {temple.visitingHours}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{temple.descriptionHindi}</p>
        
        <Link 
          href={`/temples/${temple.id}`}
          className="inline-flex items-center text-bhagwa-dark font-medium hover:underline group"
        >
          विस्तार से जानें
          <svg 
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}