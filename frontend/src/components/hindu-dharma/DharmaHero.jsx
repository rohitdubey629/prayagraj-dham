"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ScrollText, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function DharmaHero() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-bhagwa-dark text-white overflow-hidden">
      {/* subtle background motif, not flashy */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C9A227 1px, transparent 1px), radial-gradient(circle at 60% 70%, #C9A227 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-gold mb-4">
            {t({ hi: "🕉️ एक डिजिटल ज्ञान केंद्र", en: "🕉️ A Digital Knowledge Hub" })}
          </p>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t({ hi: "हिंदू धर्म डायरी", en: "Hindu Dharma Diary" })}
          </h1>
          <p className="text-lg md:text-xl text-gold/90 mb-6">
            {t({
              hi: "हिंदू धर्म की परंपराओं, धर्मग्रंथों, दर्शनशास्त्रों, पवित्र स्थलों, देवी-देवताओं, त्योहारों और शाश्वत ज्ञान का अन्वेषण करें।",
              en: "Explore the traditions, scriptures, philosophies, sacred places, deities, festivals and timeless knowledge of Hindu Dharma.",
            })}
          </p>
          <p className="text-white/75 leading-relaxed mb-10 max-w-2xl">
            {t({
              hi: "हिंदू धर्म कोई एक समान धर्म नहीं, बल्कि भारतीय उपमहाद्वीप में हज़ारों वर्षों में विकसित परंपराओं व दार्शनिक स्कूलों का एक विविध परिवार है। यह डायरी एक विकसित होती, शुरुआती-अनुकूल मार्गदर्शिका है — मूल बातों से शुरू करें और जितना चाहें उतना गहराई तक जाएँ।",
              en: "Hindu Dharma is not one single, uniform religion but a diverse family of traditions and philosophical schools, developed over thousands of years across the Indian subcontinent. This diary is an evolving, beginner-friendly guide — start with the basics and go as deep as you like.",
            })}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollToId("overview")}
              className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition"
            >
              <BookOpen size={18} /> {t({ hi: "डायरी देखें", en: "Explore the Diary" })}
            </button>
            <button
              onClick={() => scrollToId("vedas")}
              className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold/10 transition"
            >
              <ScrollText size={18} /> {t({ hi: "धर्मग्रंथ देखें", en: "Explore Scriptures" })}
            </button>
            <button
              onClick={() => scrollToId("sacred-places")}
              className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold/10 transition"
            >
              <MapPin size={18} /> {t({ hi: "पवित्र स्थल", en: "Sacred Places" })}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gold/20 flex items-center gap-3 flex-wrap">
            <p className="text-sm text-white/60">
              {t({ hi: "पहले ही किसी मंदिर के दर्शन किए हैं?", en: "Already visited a temple or two?" })}
            </p>
            <Link
              href="/my-yatra"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
            >
              🛕 {t({ hi: "मेरी यात्रा डायरी खोलें →", en: "Open My Yatra Diary →" })}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
