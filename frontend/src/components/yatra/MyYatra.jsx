"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import Layout from "@/components/Layout";
import Section from "@/components/hindu-dharma/Section";
import { useYatra } from "@/lib/yatra/useYatra";
import { useTranslation } from "@/lib/useTranslation";
import YatraStats from "./YatraStats";
import PilgrimageProgress from "./PilgrimageProgress";
import YatraTimeline from "./YatraTimeline";
import YatraWishlist from "./YatraWishlist";
import MyTempleCollection from "./MyTempleCollection";
import OnThisDay from "./OnThisDay";

export default function MyYatra() {
  const { stats, timeline, wishlistPlaces, visitedPlaces, onThisDay } = useYatra();
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, hydrated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (hydrated && !isAuthenticated) {
      router.push(`/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [hydrated, isAuthenticated, router, pathname]);

  if (!hydrated || !isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <section className="bg-bhagwa-dark text-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <p className="uppercase tracking-widest text-sm font-semibold text-gold mb-3">
            {t({ hi: "आपकी निजी डायरी", en: "Your Private Diary" })}
          </p>
          <h1 className="font-serif-display text-4xl md:text-5xl font-bold mb-4">
            {t({ hi: "मेरी यात्रा", en: "My Yatra" })}
          </h1>
          <p className="text-white/80 max-w-2xl">
            {t({
              hi: "आपने किन मंदिरों के दर्शन किए, कब किए, कितनी बार किए और किसके साथ किए — यह सब यहाँ याद रखें। यह जानकारी केवल इसी ब्राउज़र में सुरक्षित रहती है और कहीं और साझा नहीं होती।",
              en: "Remember which temples you've visited, when, how many times, and with whom. This data stays only in this browser and isn't shared anywhere.",
            })}
          </p>
        </div>
      </section>

      <OnThisDayWrapper onThisDay={onThisDay} />

      <Section id="overview" eyebrow={{ hi: "अवलोकन", en: "Overview" }} title={{ hi: "आपकी यात्रा एक नज़र में", en: "Your Yatra at a Glance" }}>
        <div className="space-y-8">
          <YatraStats stats={stats} />
          <PilgrimageProgress progress={stats.progress} />
        </div>
      </Section>

      <Section id="timeline" eyebrow={{ hi: "समयरेखा", en: "Timeline" }} title={{ hi: "मेरी यात्रा समयरेखा", en: "My Yatra Timeline" }}>
        <YatraTimeline timeline={timeline} />
      </Section>

      <Section id="collection" eyebrow={{ hi: "संग्रह", en: "Collection" }} title={{ hi: "मेरे मंदिर", en: "My Temples" }}>
        <MyTempleCollection visitedPlaces={visitedPlaces} />
      </Section>

      <Section id="wishlist" eyebrow={{ hi: "इच्छा सूची", en: "Wishlist" }} title={{ hi: "मेरी यात्रा सूची", en: "My Yatra Wishlist" }}>
        <YatraWishlist places={wishlistPlaces} />
      </Section>
    </Layout>
  );
}

function OnThisDayWrapper({ onThisDay }) {
  if (!onThisDay || onThisDay.length === 0) return null;
  return (
    <div className="container mx-auto px-4 pt-8">
      <OnThisDay entries={onThisDay} />
    </div>
  );
}
