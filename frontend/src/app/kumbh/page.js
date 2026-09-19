"use client";

import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { Sparkles, PartyPopper, Layers, MapPin, CalendarClock } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";
import { getKumbhEvents } from "@/lib/api";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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

export default function KumbhPage() {
  const { t, lang } = useTranslation();
  const k = translations.kumbhPage;

  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getKumbhEvents()
      .then((data) => {
        setEvents(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const now = new Date();
  const isUpcoming = (event) => {
    const ref = event.endDate || event.startDate;
    if (ref) return new Date(ref) >= now;
    return event.year >= now.getFullYear();
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <PageBanner
          images={["/images/mahakumbh.jpg", "/images/triveni_sangam.jpeg", "/images/sangam.jpg"]}
          title={t(k.title)}
        />

        <div className="bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-10 mt-8">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {t(k.intro)}
          </motion.p>

          <Section icon={Sparkles} heading={t(k.mythHeading)}>
            <p className="text-gray-700 leading-relaxed">{t(k.mythText)}</p>
          </Section>

          <Section icon={Layers} heading={t(k.typesHeading)}>
            <div className="grid sm:grid-cols-3 gap-4">
              {k.types.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gold/20 shadow-sm">
                  <h3 className="font-serif-display font-bold text-bhagwa-dark mb-1">
                    {t(type.name)}
                  </h3>
                  <p className="text-sm text-gray-600">{t(type.description)}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={MapPin} heading={t(k.locationsHeading)}>
            <div className="grid sm:grid-cols-2 gap-4">
              {k.locations.map((loc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gold/20 shadow-sm"
                >
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-bhagwa-dark">{t(loc.name)}</p>
                    <p className="text-sm text-gray-600">{t(loc.river)}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">{t(k.cycleNote)}</p>
          </Section>

          <Section icon={CalendarClock} heading={t(k.eventsHeading)}>
            {status === "loading" && <p className="text-gray-500">{t(k.eventsLoading)}</p>}
            {status === "error" && <p className="text-red-600">{t(k.eventsError)}</p>}
            {status === "ready" && events.length === 0 && (
              <p className="text-gray-500">{t(k.eventsEmpty)}</p>
            )}

            {status === "ready" && events.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid sm:grid-cols-2 gap-4"
              >
                {events.map((event) => {
                  const upcoming = isUpcoming(event);
                  const location = lang === "en" ? event.location : event.locationHindi;
                  const kumbhType = lang === "en" ? event.kumbhType : event.kumbhTypeHindi;
                  const description =
                    (lang === "en" ? event.descriptionEnglish : event.description) || "";

                  return (
                    <motion.div
                      key={event._id}
                      variants={fadeIn}
                      className={`rounded-xl p-5 shadow-md border ${
                        upcoming
                          ? "bg-bhagwa-dark text-white border-gold/30"
                          : "bg-white text-gray-700 border-gold/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            upcoming ? "bg-gold text-bhagwa-dark" : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {upcoming ? t(k.upcomingBadge) : t(k.completedBadge)}
                        </span>
                        <span
                          className={`font-serif-display font-bold text-lg ${
                            upcoming ? "text-gold" : "text-bhagwa-dark"
                          }`}
                        >
                          {event.year}
                          {event.isApproximate ? " " + t(k.approximateNote) : ""}
                        </span>
                      </div>
                      <p className={`font-semibold ${upcoming ? "text-white" : "text-bhagwa-dark"}`}>
                        {location} — {kumbhType}
                      </p>
                      {description && (
                        <p className={`text-sm mt-1 ${upcoming ? "text-cream/90" : "text-gray-600"}`}>
                          {description}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </Section>

          <Section icon={PartyPopper} heading={t(k.attractionsHeading)}>
            <div className="grid sm:grid-cols-2 gap-4">
              {k.attractions.map((a, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gold/20 shadow-sm"
                >
                  <span className="text-gold font-serif-display font-bold">{index + 1}.</span>
                  <span className="text-gray-700">{t(a)}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
