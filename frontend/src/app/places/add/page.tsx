"use client";

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { submitPlace } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const CATEGORIES = ["Temple", "Ghat", "Ashram", "Historical", "Other"] as const;

export default function AddPlacePage() {
  const { t } = useTranslation();
  const pa = translations.placesAdd;

  const [form, setForm] = useState({
    name: "",
    nameHindi: "",
    category: "Temple",
    location: "",
    locationEnglish: "",
    descriptionHindi: "",
    descriptionEnglish: "",
    visitingHours: "",
    visitingHoursEnglish: "",
    importance: "",
    importanceEnglish: "",
    mapsLink: "",
    submittedByName: "",
    submittedByContact: "",
  });
  const [features, setFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState("");
  const [featuresEnglish, setFeaturesEnglish] = useState<string[]>([]);
  const [featureEnglishInput, setFeatureEnglishInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [extraImages, setExtraImages] = useState<File[]>([]);
  const [extraImagePreviews, setExtraImagePreviews] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!image) {
      setImagePreview(null);
      return;
    }
    const url = URL.createObjectURL(image);
    setImagePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  useEffect(() => {
    if (extraImages.length === 0) {
      setExtraImagePreviews([]);
      return;
    }
    const urls = extraImages.map((file) => URL.createObjectURL(file));
    setExtraImagePreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [extraImages]);

  const addExtraImages = (files: FileList | null) => {
    if (!files) return;
    setExtraImages((prev) => [...prev, ...Array.from(files)].slice(0, 5));
  };

  const removeExtraImage = (index: number) => {
    setExtraImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFeatures((prev) => [...prev, featureInput.trim()]);
      setFeatureInput("");
    }
  };

  const removeFeature = (index: number) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const addFeatureEnglish = () => {
    if (featureEnglishInput.trim()) {
      setFeaturesEnglish((prev) => [...prev, featureEnglishInput.trim()]);
      setFeatureEnglishInput("");
    }
  };

  const removeFeatureEnglish = (index: number) => {
    setFeaturesEnglish((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (features.length > 0) {
      formData.append("specialFeatures", JSON.stringify(features));
    }
    if (featuresEnglish.length > 0) {
      formData.append("specialFeaturesEnglish", JSON.stringify(featuresEnglish));
    }
    if (image) {
      formData.append("image", image);
    }
    extraImages.forEach((file) => formData.append("images", file));

    try {
      await submitPlace(formData);
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : t(pa.genericError));
    }
  };

  if (status === "done") {
    return (
      <Layout noBackground>
        <div className="container mx-auto px-4 py-16 text-center max-w-xl">
          <h1 className="text-2xl font-bold text-bhagwa-dark mb-4">
            {t(pa.thankYouHeading)}
          </h1>
          <p className="text-gray-700">{t(pa.thankYouBody)}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout noBackground>
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-bhagwa-dark mb-2 font-serif text-center">
          {t(pa.heading)}
        </h1>
        <p className="text-gray-600 text-center mb-8">{t(pa.intro)}</p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">{t(pa.nameEn)}</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">{t(pa.nameHi)}</label>
              <input
                name="nameHindi"
                value={form.nameHindi}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">{t(pa.category)}</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">{t(pa.location)}</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.locationEnglish)}</label>
            <input
              name="locationEnglish"
              value={form.locationEnglish}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.description)}</label>
            <textarea
              name="descriptionHindi"
              value={form.descriptionHindi}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.descriptionEnglish)}</label>
            <textarea
              name="descriptionEnglish"
              value={form.descriptionEnglish}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.visitingHours)}</label>
            <input
              name="visitingHours"
              value={form.visitingHours}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
              placeholder={t(pa.visitingHoursPlaceholder)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.visitingHoursEnglish)}</label>
            <input
              name="visitingHoursEnglish"
              value={form.visitingHoursEnglish}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.importance)}</label>
            <textarea
              name="importance"
              value={form.importance}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.importanceEnglish)}</label>
            <textarea
              name="importanceEnglish"
              value={form.importanceEnglish}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.features)}</label>
            <div className="flex gap-2 mb-2">
              <input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addFeature();
                  }
                }}
                className="flex-1 px-3 py-2 border rounded"
                placeholder={t(pa.featuresPlaceholder)}
              />
              <button
                type="button"
                onClick={addFeature}
                className="bg-bhagwa-dark text-white px-4 py-2 rounded"
              >
                {t(pa.add)}
              </button>
            </div>
            {features.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {features.map((f, i) => (
                  <li
                    key={i}
                    className="bg-amber-50 border border-amber-200 text-sm px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {f}
                    <button type="button" onClick={() => removeFeature(i)} className="text-red-500">
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.featuresEnglish)}</label>
            <div className="flex gap-2 mb-2">
              <input
                value={featureEnglishInput}
                onChange={(e) => setFeatureEnglishInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addFeatureEnglish();
                  }
                }}
                className="flex-1 px-3 py-2 border rounded"
                placeholder={t(pa.featuresEnglishPlaceholder)}
              />
              <button
                type="button"
                onClick={addFeatureEnglish}
                className="bg-bhagwa-dark text-white px-4 py-2 rounded"
              >
                {t(pa.add)}
              </button>
            </div>
            {featuresEnglish.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {featuresEnglish.map((f, i) => (
                  <li
                    key={i}
                    className="bg-amber-50 border border-amber-200 text-sm px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {f}
                    <button type="button" onClick={() => removeFeatureEnglish(i)} className="text-red-500">
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.photo)}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full"
            />
            {imagePreview && (
              <div className="mt-3 relative inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-40 w-40 object-cover rounded-lg border border-amber-200"
                />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm leading-none shadow"
                  aria-label={t(pa.removeImage)}
                >
                  ×
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.morePhotos)}</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => addExtraImages(e.target.files)}
              className="w-full"
            />
            {extraImagePreviews.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {extraImagePreviews.map((src, i) => (
                  <div key={i} className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Preview ${i + 1}`}
                      className="h-24 w-24 object-cover rounded-lg border border-amber-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeExtraImage(i)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm leading-none shadow"
                      aria-label={t(pa.removeImage)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">{t(pa.mapsLink)}</label>
            <input
              name="mapsLink"
              value={form.mapsLink}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">{t(pa.submitterName)}</label>
              <input
                name="submittedByName"
                value={form.submittedByName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">{t(pa.submitterContact)}</label>
              <input
                name="submittedByContact"
                value={form.submittedByContact}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>

          {status === "error" && <p className="text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-bhagwa-dark text-white px-4 py-3 rounded font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {status === "submitting" ? t(pa.submitting) : t(pa.submit)}
          </button>
        </form>
      </div>
    </Layout>
  );
}
