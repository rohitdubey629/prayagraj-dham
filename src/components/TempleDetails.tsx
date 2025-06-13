// components/TempleDetails.tsx
"use client";

import { Temple } from "@/data/templeData";
import Image from "next/image";

export default function TempleDetails({ temple }: { temple: Temple }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-bhagwa-dark mb-1">
          {temple.name}
        </h1>
        <h2 className="text-2xl font-serif text-bhagwa-dark">
          {temple.nameHindi}
        </h2>
        <div className="w-16 h-1 bg-bhagwa-dark my-3"></div>
      </div>

      <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6 bg-amber-50">
        {temple.image ? (
          <Image
            src={temple.image}
            alt={temple.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-6xl">🛕</span>
          </div>
        )}
      </div>

      <div className="prose max-w-none">
        <h3 className="text-xl font-bold text-bhagwa-dark mb-3 font-serif">
          मंदिर के बारे में
        </h3>
        <p className="text-white">{temple.descriptionHindi}</p>

        <h3 className="text-xl font-bold text-bhagwa-dark mt-6 mb-3 font-serif">
          धार्मिक महत्व
        </h3>
        <p className="text-white">{temple.importance}</p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-lg font-bold text-bhagwa-dark mb-2 font-serif">
              दर्शन का समय
            </h4>
            <p className="text-white">{temple.visitingHours}</p>

            <h4 className="text-lg font-bold text-bhagwa-dark mt-4 mb-2 font-serif">
              स्थान
            </h4>
            <p className="text-white">{temple.location}</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-bhagwa-dark mb-2 font-serif">
              विशेषताएँ
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-white">
              {temple.specialFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
          <h4 className="text-lg font-bold text-bhagwa-dark mb-3 font-serif">
            दर्शन संबंधी जानकारी
          </h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>मंदिर में फोटोग्राफी की अनुमति नहीं हो सकती</li>
            <li>पूजन सामग्री मंदिर परिसर में उपलब्ध</li>
            <li>विशेष पूजा के लिए पुजारी से संपर्क करें</li>
            <li>भीड़भाड़ वाले दिनों में सावधानी बरतें</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
