// app/temples/page.tsx
"use client";
import Layout from "@/components/Layout";
import TemplesList from "@/components/TemplesList";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function TemplesPage() {
  const { t } = useTranslation();
  const tr = translations.temples;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bhagwa-dark mb-2 font-serif">
            {t(tr.title)}
          </h1>
          <div className="w-24 h-1 bg-bhagwa-dark mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t(tr.intro)}
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg mb-8 border border-amber-200">
          <h2 className="text-xl font-bold text-bhagwa-dark mb-3 font-serif">
            {t(tr.tipsHeading)}
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {tr.tips.map((tip, index) => (
              <li key={index}>{t(tip)}</li>
            ))}
          </ul>
        </div>

        <TemplesList />

      </div>
    </Layout>
  );
}
