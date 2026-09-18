"use client";

import Layout from "@/components/Layout";
import { Clock } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function DarshanSchedulePage() {
  const { t } = useTranslation();
  const ds = translations.darshanSchedule;

  return (
    <Layout>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center font-serif mb-4 drop-shadow-lg">
            {t(ds.heading)}
          </h1>
          <p className="text-center text-cream/90 mb-10 drop-shadow">
            {t(ds.subheading)}
          </p>

          <div className="max-w-3xl mx-auto bg-amber-50/95 backdrop-blur-sm rounded-lg p-6 shadow-lg space-y-10">
            {ds.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold text-bhagwa-dark mb-4">
                  {t(section.title)}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-white rounded-md p-3 shadow-sm"
                    >
                      <div className="bg-bhagwa-DEFAULT text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-bhagwa-dark">
                          {t(item.event)}
                        </h3>
                        <p className="text-gray-600">
                          {t(item.time)} | {t(item.location)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
