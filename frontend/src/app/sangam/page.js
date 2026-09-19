"use client";

import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Sparkles, Clock, CheckCircle2 } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Section({ icon: Icon, heading, children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="mt-10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-bhagwa-dark text-gold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="font-serif-display text-2xl font-bold text-bhagwa-dark">{heading}</h2>
      </div>
      {children}
    </motion.div>
  );
}

export default function SangamPage() {
  const { t } = useTranslation();
  const s = translations.sangamPage;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <PageBanner
          images={["/images/triveni_sangam.jpeg", "/images/sangam.jpg", "/images/adivenimadhav.jpg"]}
          title={t(s.title)}
        />

        <div className="bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-10 mt-8">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {t(s.intro)}
          </motion.p>

          <Section icon={Sparkles} heading={t(s.mythHeading)}>
            <p className="text-gray-700 leading-relaxed">{t(s.mythText)}</p>
          </Section>

          <Section icon={CheckCircle2} heading={t(s.featuresHeading)}>
            <div className="grid sm:grid-cols-2 gap-4">
              {s.features.map((f, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gold/20 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t(f)}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Clock} heading={t(s.timingHeading)}>
            <p className="text-gray-700 leading-relaxed">{t(s.timingText)}</p>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
