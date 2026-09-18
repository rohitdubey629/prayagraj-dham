"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

// components/DailyDarshan.js
export default function DailyDarshan() {
  const { t } = useTranslation();
  const dd = translations.dailyDarshan;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-bhagwa-dark mb-2 text-center font-serif">
          {t(dd.heading)}
        </h2>
        <div className="w-24 h-1 bg-bhagwa-dark mx-auto mb-8"></div>

        <div className="max-w-3xl mx-auto bg-amber-50 rounded-lg p-6 shadow-md space-y-8">

          {/* घाट दर्शन */}
          <div>
            <h3 className="text-xl font-semibold text-bhagwa-dark mb-4">{t(dd.ghatDarshanHeading)}</h3>
            <div className="space-y-4">
              {dd.ghatDarshans.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-bhagwa-DEFAULT text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bhagwa-dark">{t(item.event)}</h4>
                    <p className="text-gray-600">{t(item.time)} | {t(item.location)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* मंदिर दर्शन */}
          <div>
            <h3 className="text-xl font-semibold text-bhagwa-dark mb-4">{t(dd.templeDarshanHeading)}</h3>
            <div className="space-y-4">
              {dd.templeDarshans.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-bhagwa-DEFAULT text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-bhagwa-dark">{t(item.event)}</h4>
                    <p className="text-gray-600">{t(item.time)} | {t(item.location)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Link to full schedule */}
          <div className="pt-4 text-center">
            <Link
              href="/darshan-schedule"
              className="inline-flex items-center text-bhagwa-dark font-medium hover:underline"
            >
              {t(dd.viewFullSchedule)} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
