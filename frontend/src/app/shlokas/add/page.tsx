"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { submitShloka } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function AddShlokaPage() {
  const { t } = useTranslation();
  const s = translations.shlokas;

  const [form, setForm] = useState({
    text: "",
    source: "",
    meaning: "",
    scheduledDate: "",
    submittedByName: "",
    submittedByEmail: "",
    submittedByMobile: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitShloka({
        text: form.text,
        source: form.source || undefined,
        meaning: form.meaning || undefined,
        scheduledDate: form.scheduledDate || undefined,
        submittedByName: form.submittedByName,
        submittedByEmail: form.submittedByEmail,
        submittedByMobile: form.submittedByMobile || undefined,
      });
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : t(s.genericError));
    }
  };

  if (status === "done") {
    return (
      <Layout noBackground>
        <div className="container mx-auto px-4 py-16 text-center max-w-xl">
          <h1 className="text-2xl font-bold text-bhagwa-dark mb-4">{t(s.thankYouHeading)}</h1>
          <p className="text-gray-700">{t(s.thankYouBody)}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout noBackground>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-bhagwa-dark mb-2 font-serif text-center">
          {t(s.formHeading)}
        </h1>
        <p className="text-gray-600 text-center mb-8">{t(s.formIntro)}</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">{t(s.textLabel)}</label>
            <textarea
              name="text"
              value={form.text}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">{t(s.sourceLabel)}</label>
              <input
                name="source"
                value={form.source}
                onChange={handleChange}
                placeholder={t(s.sourcePlaceholder)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">{t(s.scheduledDateLabel)}</label>
              <input
                type="date"
                name="scheduledDate"
                value={form.scheduledDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
              <p className="text-xs text-gray-500 mt-1">{t(s.scheduledDateHint)}</p>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(s.meaningLabel)}</label>
            <textarea
              name="meaning"
              value={form.meaning}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">{t(s.nameLabel)}</label>
              <input
                name="submittedByName"
                value={form.submittedByName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">{t(s.emailLabel)}</label>
              <input
                type="email"
                name="submittedByEmail"
                value={form.submittedByEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(s.mobileLabel)}</label>
            <input
              name="submittedByMobile"
              value={form.submittedByMobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          {status === "error" && <p className="text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-bhagwa-dark text-white px-4 py-3 rounded font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "submitting" ? t(s.submitting) : t(s.submit)}
          </button>
        </form>
      </div>
    </Layout>
  );
}
