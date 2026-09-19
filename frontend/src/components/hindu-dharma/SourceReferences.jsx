"use client";

import { useTranslation } from "@/lib/useTranslation";

// Placeholder, data-driven sources section (brief section 38).
// `sources` can later be populated per-entry once citation-grade references
// are compiled; until then this states the intent transparently instead of
// inventing citations.
const sourceCategories = [
  { hi: "वैदिक ग्रंथ", en: "Vedic texts" },
  { hi: "उपनिषद्", en: "Upanishads" },
  { hi: "भगवद्गीता", en: "Bhagavad Gita" },
  { hi: "रामायण", en: "Ramayana" },
  { hi: "महाभारत", en: "Mahabharata" },
  { hi: "पौराणिक साहित्य", en: "Puranic literature" },
  { hi: "शैक्षणिक/संदर्भ स्रोत", en: "Academic / reference sources" },
  { hi: "मंदिर/ट्रस्ट के आधिकारिक स्रोत (जहाँ लागू हो)", en: "Temple / trust official sources (where applicable)" },
];

export default function SourceReferences() {
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-gold/20 rounded-xl p-6">
      <p className="text-gray-600 mb-4">
        {t({
          hi: "यह डायरी सामान्य पाठकों के लिए व्यापक रूप से साझा पारंपरिक ज्ञान का सारांश प्रस्तुत करती है। जैसे-जैसे यह डायरी बढ़ेगी, प्रत्येक प्रविष्टि में निम्न श्रेणियों से विशिष्ट स्रोत संदर्भ जोड़े जाएँगे:",
          en: "This diary summarizes widely shared traditional knowledge for a general audience. As the diary grows, each entry will carry specific source references drawn from categories such as:",
        })}
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-navy/80 mb-4">
        {sourceCategories.map((c) => (
          <li key={c.en} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            {t(c)}
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-500">
        {t({
          hi: "इस संस्करण में कोई विशिष्ट उद्धरण गढ़ा नहीं गया है — सत्यापित होने पर संदर्भ क्रमशः जोड़े जाएँगे।",
          en: "No specific citations are fabricated in this version — references will be added incrementally as they are verified.",
        })}
      </p>
    </div>
  );
}
