"use client";

import Layout from "@/components/Layout";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function About() {
  const { t } = useTranslation();
  const a = translations.about;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-prayagraj-primary mb-8">
          {t(a.title)}
        </h1>

        <div className="prose max-w-none">
          <p className="text-lg">{t(a.intro)}</p>

          <h2 className="text-2xl font-bold text-prayagraj-primary mt-8 mb-4">
            {t(a.historicalHeading)}
          </h2>
          <p>{t(a.historicalText)}</p>

          <h2 className="text-2xl font-bold text-prayagraj-primary mt-8 mb-4">
            {t(a.culturalHeading)}
          </h2>
          <p>{t(a.culturalText)}</p>

          <h2 className="text-2xl font-bold text-prayagraj-primary mt-8 mb-4">
            {t(a.touristHeading)}
          </h2>

          <p>{t(a.touristIntro)}</p>
          <ul className="list-disc list-inside">
            {a.touristList.map((item, index) => (
              <li key={index}>{t(item)}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-prayagraj-primary mt-8 mb-4">
            {t(a.modernHeading)}
          </h2>
          <p>{t(a.modernText)}</p>

          <h2 className="text-2xl font-bold text-prayagraj-primary mt-8 mb-4">
            {t(a.specialHeading)}
          </h2>
          <p>{t(a.specialText)}</p>
        </div>
      </div>
    </Layout>
  );
}
