"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getShlokas, Shloka } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function ShlokasPage() {
  const [shlokas, setShlokas] = useState<Shloka[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const { t } = useTranslation();
  const s = translations.shlokas;

  useEffect(() => {
    getShlokas()
      .then((data) => {
        setShlokas(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-bhagwa-dark mb-2 font-serif">
            {t(s.listHeading)}
          </h1>
          <div className="w-24 h-1 bg-bhagwa-dark mx-auto my-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">{t(s.listIntro)}</p>
          <Link
            href="/shlokas/add"
            className="inline-block bg-bhagwa-dark text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            {t(s.addLink)}
          </Link>
        </div>

        {status === "loading" && <p className="text-center text-gray-600">{t(s.loading)}</p>}
        {status === "error" && <p className="text-center text-red-600">{t(s.loadError)}</p>}
        {status === "ready" && shlokas.length === 0 && (
          <p className="text-center text-gray-600">{t(s.empty)}</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shlokas.map((shloka) => (
            <div
              key={shloka._id}
              className="bg-white p-6 rounded-lg border border-amber-200 shadow-md"
            >
              <blockquote className="text-lg italic mb-3 text-bhagwa-dark" style={{ whiteSpace: "pre-line" }}>
                &quot;{shloka.text}&quot;
              </blockquote>
              {shloka.meaning && <p className="text-sm text-gray-700 mb-2">{shloka.meaning}</p>}
              {shloka.source && <p className="text-right text-amber-700">- {shloka.source}</p>}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
