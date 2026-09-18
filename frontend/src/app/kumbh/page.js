"use client";

import Layout from "../../components/Layout";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function KumbhPage() {
  const { t } = useTranslation();
  const k = translations.kumbhPage;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-bhagwa-dark mb-6 text-center font-serif">
          {t(k.title)}
        </h1>

        <div className="prose max-w-none">
          <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden">
            {/* Kumbh image placeholder */}
            <div className="w-full h-96 bg-amber-100 flex items-center justify-center">
              <span className="text-6xl">
                {" "}
                <Image
                  src={`/images/mahakumbh.jpg`}
                  alt="Decorative line"
                  width={500}
                  height={200}
                  className="mx-auto"
                />
              </span>
            </div>
          </div>

          <p className="text-lg">{t(k.intro)}</p>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            {t(k.mythHeading)}
          </h2>
          <p>{t(k.mythText)}</p>

          <h2 className="text-2xl font-bold  mt-8 mb-4 font-serif">
            {t(k.datesHeading)}
          </h2>
          <div className="bg-amber-50 text-black p-4 rounded-lg">
            <ul className="space-y-3">
              {k.dates.map((d, index) => (
                <li key={index} className="flex">
                  <span className="font-medium w-32">{t(d.label)}</span>
                  <span>{t(d.value)}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-bhagwa-dark mt-8 mb-4 font-serif">
            {t(k.attractionsHeading)}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {k.attractions.map((a, index) => (
              <li key={index}>{t(a)}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
