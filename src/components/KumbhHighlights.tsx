// components/KumbhHighlights.js
"use client";

import FadeIn from "./motion/FadeIn";
import StaggerContainer, { staggerItem } from "./motion/StaggerContainer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KumbhHighlights() {
  const highlights = [
    {
      title: "महाकुम्भ 2025 (संपन्न)",
      description:
        "प्रयागराज में 12 वर्षों बाद आयोजित पूर्ण महाकुम्भ सफलतापूर्वक संपन्न हुआ। करोड़ों श्रद्धालुओं ने त्रिवेणी संगम में पावन स्नान किया।",
      date: "13 जनवरी – 26 फरवरी 2025",
    },
    {
      title: "अगला अर्ध कुम्भ",
      description:
        "पंचांग व ग्रह स्थिति के आधार पर तिथि आधिकारिक रूप से बाद में घोषित होगी — अनुमानित वर्ष।",
      date: "लगभग वर्ष 2031 (अनुमानित)",
    },
    {
      title: "वार्षिक माघ मेला",
      description:
        "प्रत्येक वर्ष (कुम्भ/अर्ध कुम्भ वर्षों को छोड़कर) पौष पूर्णिमा से महाशिवरात्रि तक संगम तट पर आयोजित होने वाला मेला।",
      date: "जनवरी – फरवरी (प्रतिवर्ष)",
    },
  ];

  const snanParv = [
    "मकर संक्रांति",
    "पौष पूर्णिमा",
    "मौनी अमावस्या",
    "बसंत पंचमी",
    "माघी पूर्णिमा",
    "महाशिवरात्रि",
  ];

  return (
    <section className="py-12 bg-bhagwa-light text-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2 text-center font-serif">
            कुम्भ एवं माघ मेला
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-xl mb-4">
              प्रयागराज में कुम्भ मेला विश्व का सबसे बड़ा मानव समूह है जहाँ
              करोड़ों श्रद्धालु पवित्र स्नान के लिए एकत्रित होते हैं।
            </p>
            <p>
              &quot;प्रयागे तु त्रिवेणीति संगमो यत्र दृश्यते
              <br />
              तत्र स्नात्वा नरो देवि परं ब्रह्माधिगच्छति&quot;
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-30 text-gray-700 transition-shadow hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2 font-serif text-bhagwa-dark">
                {item.title}
              </h3>
              <p className="mb-2">{item.description}</p>
              <p className="text-sm opacity-80 font-medium">{item.date}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2} className="max-w-4xl mx-auto mt-10">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
            <h3 className="text-xl font-bold mb-4 font-serif text-center">
              प्रमुख स्नान पर्व (परंपरागत क्रम)
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {snanParv.map((parv, i) => (
                <span
                  key={i}
                  className="bg-white text-bhagwa-dark px-4 py-2 rounded-full text-sm font-medium shadow"
                >
                  {parv}
                </span>
              ))}
            </div>
            <p className="text-center text-sm mt-4 opacity-90">
              सटीक तिथियाँ पंचांग अनुसार प्रतिवर्ष बदलती हैं।
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="text-center mt-8">
          <Link
            href="/kumbh"
            className="inline-block bg-white text-bhagwa-dark px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            विस्तार से जानें
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
