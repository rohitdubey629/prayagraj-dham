// components/ReligiousQuotes.js
"use client";

import FadeIn from "./motion/FadeIn";
import StaggerContainer, { staggerItem } from "./motion/StaggerContainer";
import { motion } from "framer-motion";

export default function ReligiousQuotes() {
  const quotes = [
    {
      text: "प्रयागे तु त्रिवेणीति संगमो यत्र दृश्यते। तत्र स्नात्वा नरो देवि परं ब्रह्माधिगच्छति॥",
      source: "स्कन्द पुराण",
    },
    {
      text: "गंगा यमुना सरस्वती त्रिवेणी पापनाशिनी। तत्र स्नात्वा नरो याति ब्रह्मलोकं सनातनम्॥",
      source: "मत्स्य पुराण",
    },
    {
      text: "कुम्भे प्रयागमाहात्म्यं यत्फलं कोटिजन्मनाम्। तत्फलं लभते मर्त्यः कुम्भस्नानेन केवलम्॥",
      source: "अग्नि पुराण",
    },
  ];

  return (
    <section className="py-12 bg-bhagwa-light text-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">
            पवित्र वचन
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.03 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20 text-gray-700"
            >
              <blockquote className="text-lg italic mb-4">
                &quot;{quote.text}&quot;
              </blockquote>
              <p className="text-right text-amber-800 font-medium">
                - {quote.source}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
