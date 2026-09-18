"use client";

import Layout from "../../components/Layout";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function SangamPage() {
  const { t } = useTranslation();
  const s = translations.sangamPage;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">
          {t(s.title)}
        </h1>

        <div className="prose max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            {/* Sangam image placeholder */}
            <div className="w-full h-96 bg-amber-100 flex items-center justify-center">
              <span className="text-6xl">
                <Image
                  src={`/images/triveni_sangam.jpeg`}
                  alt="Decorative line"
                  width={500}
                  height={200}
                  className="mx-auto"
                />
              </span>
            </div>
          </div>

          <p className="text-lg">{t(s.intro)}</p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            {t(s.mythHeading)}
          </h2>
          <p>{t(s.mythText)}</p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            {t(s.featuresHeading)}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {s.features.map((f, index) => (
              <li key={index}>{t(f)}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            {t(s.timingHeading)}
          </h2>
          <p>{t(s.timingText)}</p>
        </div>
      </div>
    </Layout>
  );
}
