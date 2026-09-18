"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { useTranslation } from "@/lib/useTranslation";
import DharmaHero from "./DharmaHero";
import SectionNavigation from "./SectionNavigation";
import Section from "./Section";
import SearchBar from "./SearchBar";
import OverviewCards from "./OverviewCards";
import ConceptCard from "./ConceptCard";
import DeityCard from "./DeityCard";
import ScriptureCard from "./ScriptureCard";
import SacredPlaceCard from "./SacredPlaceCard";
import FestivalCard from "./FestivalCard";
import Accordion from "./Accordion";
import Glossary from "./Glossary";
import LearningPath from "./LearningPath";
import ComparisonTable from "./ComparisonTable";
import SourceReferences from "./SourceReferences";
import TraditionLabel from "./TraditionLabel";
import NoteBox from "./NoteBox";

import { overviewCategories, exploreCategories, learningPath } from "@/data/hindu-dharma/overview";
import { whatIsDharma, majorConcepts, glossaryTerms, shrutiSmriti } from "@/data/hindu-dharma/concepts";
import { vedasIntro, fourVedas, vedicLiteratureLayers } from "@/data/hindu-dharma/vedas";
import { upanishadsIntro, upanishadThemes, majorUpanishads, upanishadsNote } from "@/data/hindu-dharma/upanishads";
import { itihasaIntro, epics, bhagavadGita } from "@/data/hindu-dharma/itihasa";
import { puranasIntro, mahapuranas, upapuranasNote } from "@/data/hindu-dharma/puranas";
import { sixDarshanas, vedantaTraditions, vedantaNote } from "@/data/hindu-dharma/darshanas";
import {
  trimurti,
  trimurtiNote,
  deviForms,
  dashavatara,
  dashavataraNote,
  otherDeities,
} from "@/data/hindu-dharma/deities";
import { deityNames } from "@/data/hindu-dharma/deityNames";
import {
  charDhamIntro,
  charDham,
  chotaCharDhamIntro,
  chotaCharDham,
  jyotirlingasIntro,
  jyotirlingas,
  jyotirlingasNote,
  shaktiPeethasIntro,
  shaktiPeethas,
  shaktiPeethasNote,
  sacredRivers,
  sacredCities,
} from "@/data/hindu-dharma/pilgrimage";
import { templesByRegion } from "@/data/hindu-dharma/temples";
import { festivals, festivalsNote } from "@/data/hindu-dharma/festivals";
import { panchangTerms, nakshatras } from "@/data/hindu-dharma/calendar";
import { yogaIntro, yogaPaths, patanjaliInfo, ashtangaLimbs } from "@/data/hindu-dharma/yoga";
import { samskarasIntro, samskaras, ashramas, purusharthas, yugas } from "@/data/hindu-dharma/lifeStages";
import { symbols, mantras, mantrasDisclaimer } from "@/data/hindu-dharma/symbolsMantras";
import { sacredTexts, traditions, traditionsNote } from "@/data/hindu-dharma/textsTraditions";

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HinduDharmaDiary() {
  const { t } = useTranslation();
  const [activeRegion, setActiveRegion] = useState(templesByRegion[0].region.en);
  const currentRegionTemples =
    templesByRegion.find((r) => r.region.en === activeRegion)?.temples || [];

  return (
    <Layout>
      <DharmaHero />
      <SectionNavigation />

      {/* 2. QUICK OVERVIEW */}
      <Section
        id="overview"
        eyebrow={{ hi: "यहाँ से शुरू करें", en: "Start Here" }}
        title={{ hi: "एक नज़र में हिंदू धर्म", en: "Hindu Dharma at a Glance" }}
        subtitle={{ hi: "विषयों में जाने के सोलह द्वार — किसी भी कार्ड पर क्लिक करके सीधे उस विषय पर जाएँ।", en: "Sixteen doorways into the tradition — pick any card to jump straight to that topic." }}
      >
        <div className="mb-8 max-w-2xl">
          <SearchBar />
        </div>
        <OverviewCards items={overviewCategories} />
      </Section>

      {/* 3. WHAT IS HINDU DHARMA? */}
      <Section
        id="what-is-dharma"
        eyebrow={{ hi: "शुरुआती लोगों के लिए", en: "For Beginners" }}
        title={{ hi: "हिंदू धर्म क्या है?", en: "What is Hindu Dharma?" }}
        subtitle={{ hi: "धर्मग्रंथों, देवी-देवताओं और स्थलों में जाने से पहले एक संक्षिप्त, तटस्थ परिचय।", en: "A brief, neutral introduction before diving into scriptures, deities and places." }}
      >
        <div className="max-w-3xl space-y-4 text-gray-700 leading-relaxed">
          <p>{t(whatIsDharma.intro)}</p>
          <p>{t(whatIsDharma.diversity)}</p>
          <p>
            <span className="font-semibold text-navy">{t({ hi: "धर्म", en: "Dharma" })}</span> — {t(whatIsDharma.dharmaMeaning)}
          </p>
          <NoteBox>{t(whatIsDharma.disclaimer)}</NoteBox>
        </div>
      </Section>

      {/* 4 & 5. THE FOUR VEDAS + VEDIC LITERATURE */}
      <Section
        id="vedas"
        eyebrow={{ hi: "धर्मग्रंथ", en: "Scriptures" }}
        title={{ hi: "चारों वेद", en: "The Four Vedas" }}
        subtitle={{ hi: "वेद क्या हैं? हिंदू परंपरा की सबसे प्राचीन धर्मग्रंथ परत।", en: "What are the Vedas? The oldest scriptural layer of Hindu tradition." }}
      >
        <p className="max-w-3xl text-gray-700 mb-8">{t(vedasIntro)}</p>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {fourVedas.map((veda) => (
            <ScriptureCard
              key={veda.id}
              name={veda.name}
              sanskrit={veda.sanskrit}
              description={veda.description}
              themes={veda.themes}
              related={veda.related}
            />
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
          {t({ hi: "वैदिक साहित्य की संरचना", en: "Structure of Vedic Literature" })}
        </h3>
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {vedicLiteratureLayers.map((layer, index) => (
            <div key={layer.id} className="flex items-center md:flex-col gap-3 flex-1">
              <div className="bg-white border border-gold/30 rounded-xl p-4 flex-1 text-center">
                <p className="font-semibold text-navy">{t(layer.name)}</p>
                <p className="text-xs text-gray-500 mt-1">{t(layer.description)}</p>
              </div>
              {index < vedicLiteratureLayers.length - 1 && (
                <span className="text-gold text-xl shrink-0 md:rotate-90">→</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 6. UPANISHADS */}
      <Section
        id="upanishads"
        eyebrow={{ hi: "धर्मग्रंथ", en: "Scriptures" }}
        title={{ hi: "उपनिषद्", en: "Upanishads" }}
        subtitle={{ hi: "वेद के अंत में स्थित दर्शनशास्त्र।", en: "Philosophy at the end of the Veda." }}
      >
        <p className="max-w-3xl text-gray-700 mb-8">{t(upanishadsIntro)}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {upanishadThemes.map((theme) => (
            <ConceptCard key={theme.id} term={theme.term} definition={theme.description} />
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">
          {t({ hi: "प्रमुख उपनिषद्", en: "Major Upanishads" })}
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          {t({ hi: "व्यापक रूप से उद्धृत ग्यारह का समूह — यह एकमात्र पारंपरिक सूची नहीं है।", en: "A commonly cited set of eleven — not the only traditional list." })}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {majorUpanishads.map((u) => (
            <div key={u.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy">{t(u.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-1">{t(u.veda)}</p>
              <p className="text-sm text-gray-500">{t(u.note)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(upanishadsNote)}</NoteBox>
      </Section>

      {/* 7. ITIHASA + BHAGAVAD GITA */}
      <Section
        id="itihasa"
        eyebrow={{ hi: "धर्मग्रंथ", en: "Scriptures" }}
        title={{ hi: "इतिहास — महान महाकाव्य", en: "Itihasa — The Great Epics" }}
        subtitle={{ hi: "रामायण, महाभारत, और उसमें निहित भगवद्गीता।", en: "Ramayana, Mahabharata, and the Bhagavad Gita within it." }}
      >
        <p className="max-w-3xl text-gray-700 mb-8">{t(itihasaIntro)}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {epics.map((epic) => (
            <div key={epic.id} className="bg-white border border-gold/20 rounded-xl p-6">
              <h3 className="font-serif-display font-bold text-xl text-navy mb-1">{t(epic.name)}</h3>
              <p className="text-xs text-gray-400 mb-3">{t(epic.author)}</p>
              <p className="text-sm text-gray-600 mb-3">{t(epic.description)}</p>
              <p className="text-xs text-gray-400 mb-1">
                {t({ hi: "केंद्रीय पात्र", en: "Central characters" })}: {epic.characters.map((c) => t(c)).join(", ")}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                {t({ hi: "प्रमुख विषय", en: "Major themes" })}: {epic.themes.map((th) => t(th)).join(", ")}
              </p>
              <p className="text-sm text-navy/80">{t(epic.significance)}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-4">
          {t({ hi: "भगवद्गीता", en: "Bhagavad Gita" })}
        </h3>
        <div className="bg-white border border-gold/20 rounded-xl p-6 max-w-3xl">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold text-navy">{t({ hi: "यह क्या है", en: "What it is" })}:</span> {t(bhagavadGita.what)}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold text-navy">{t({ hi: "यह कहाँ आती है", en: "Where it appears" })}:</span> {t(bhagavadGita.where)}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold text-navy">{t({ hi: "कृष्ण और अर्जुन", en: "Krishna and Arjuna" })}:</span> {t(bhagavadGita.participants)}
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-4">
            {bhagavadGita.paths.map((p) => (
              <div key={p.id} className="bg-gold/10 rounded-lg p-3">
                <p className="font-semibold text-sm text-navy">{t(p.name)}</p>
                <p className="text-xs text-gray-500 mt-1">{t(p.description)}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">{t(bhagavadGita.concepts)}</p>
        </div>
      </Section>

      {/* 8. PURANAS */}
      <Section
        id="puranas"
        eyebrow={{ hi: "धर्मग्रंथ", en: "Scriptures" }}
        title={{ hi: "पुराण", en: "The Puranas" }}
        subtitle={{ hi: "अठारह महापुराण, जो परंपरागत रूप से एक समूह में रखे जाते हैं।", en: "Eighteen Mahapuranas, traditionally grouped together." }}
      >
        <p className="max-w-3xl text-gray-700 mb-8">{t(puranasIntro)}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {mahapuranas.map((p) => (
            <div key={p.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy">{t(p.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-1">{t(p.tradition)}</p>
              <p className="text-sm text-gray-500">{t(p.focus)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(upapuranasNote)}</NoteBox>
      </Section>

      {/* 9. PHILOSOPHICAL SCHOOLS */}
      <Section
        id="philosophy"
        eyebrow={{ hi: "दर्शनशास्त्र", en: "Philosophy" }}
        title={{ hi: "छह शास्त्रीय दर्शन", en: "Six Classical Darshanas" }}
        subtitle={{ hi: "हिंदू दार्शनिक जिज्ञासा के व्यवस्थित स्कूल।", en: "Systematic schools of Hindu philosophical inquiry." }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {sixDarshanas.map((d) => (
            <div key={d.id} className="bg-white border border-gold/20 rounded-xl p-5">
              <h3 className="font-serif-display font-bold text-lg text-navy mb-1">{t(d.name)}</h3>
              <p className="text-xs text-bhagwa-dark mb-2">{t(d.coreIdea)}</p>
              <p className="text-sm text-gray-600 mb-2">{t(d.simple)}</p>
              <p className="text-xs text-gray-400">{t({ hi: "मूल अवधारणा", en: "Key concept" })}: {t(d.keyConcept)}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
          {t({ hi: "प्रमुख वेदांत परंपराएँ", en: "Major Vedanta Traditions" })}
        </h3>
        <div className="grid sm:grid-cols-3 gap-5 mb-4">
          {vedantaTraditions.map((v) => (
            <div key={v.id} className="bg-white border border-gold/20 rounded-xl p-5">
              <h4 className="font-semibold text-navy mb-1">{t(v.name)}</h4>
              <p className="text-xs text-bhagwa-dark mb-2">{t(v.proponent)}</p>
              <p className="text-sm text-gray-600">{t(v.view)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(vedantaNote)}</NoteBox>
      </Section>

      {/* 10. MAJOR CONCEPTS */}
      <Section
        id="concepts"
        eyebrow={{ hi: "आधार", en: "Foundations" }}
        title={{ hi: "प्रमुख अवधारणाएँ", en: "Major Concepts" }}
        subtitle={{ hi: "मूल विचार जो लगभग हर हिंदू परंपरा में दोहराए जाते हैं।", en: "Key ideas that recur across nearly every Hindu tradition." }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {majorConcepts.map((c) => (
            <ConceptCard
              key={c.id}
              term={c.term}
              sanskrit={c.sanskrit}
              definition={c.definition}
              explanation={c.explanation}
            />
          ))}
        </div>
      </Section>

      {/* 11 & 12. DEITIES + NAMES/TITLES */}
      <Section
        id="deities"
        eyebrow={{ hi: "भक्ति", en: "Devotion" }}
        title={{ hi: "प्रमुख देवी-देवता", en: "Major Deities" }}
        subtitle={{ hi: "हिंदू परंपराओं के अनुसार — किसी एक रूप को दूसरे से ऊपर रखे बिना प्रस्तुत।", en: "According to Hindu traditions — presented without ranking one form above another." }}
      >
        <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">{t({ hi: "त्रिमूर्ति", en: "Trimurti" })}</h3>
        <TraditionLabel label="philosophical" />
        <div className="grid sm:grid-cols-3 gap-5 my-6">
          {trimurti.map((d) => (
            <DeityCard key={d.id} {...d} />
          ))}
        </div>
        <NoteBox>{t(trimurtiNote)}</NoteBox>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6 mt-14">
          {t({ hi: "देवी / शक्ति", en: "Devi / Shakti" })}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {deviForms.map((d) => (
            <div key={d.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy">{t(d.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-1">{d.altNames.map((n) => t(n)).join(", ")}</p>
              <p className="text-sm text-gray-500">{t(d.significance)}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">
          {t({ hi: "विष्णु के अवतार — दशावतार", en: "Vishnu's Avatars — Dashavatara" })}
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          {t({ hi: "परंपरागत क्रम में व्यापक रूप से मान्यता प्राप्त दस अवतार।", en: "The ten commonly recognized avatars, in traditional order." })}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {dashavatara.map((a) => (
            <div key={a.id} className="bg-white border border-gold/20 rounded-xl p-4 text-center">
              <p className="w-7 h-7 mx-auto rounded-full bg-gold/15 text-bhagwa-dark text-xs font-semibold flex items-center justify-center mb-2">
                {a.order}
              </p>
              <p className="font-semibold text-navy text-sm">{t(a.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-1">{t(a.form)}</p>
              <p className="text-xs text-gray-500">{t(a.note)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(dashavataraNote)}</NoteBox>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6 mt-14">
          {t({ hi: "अन्य व्यापक रूप से पूजित देवी-देवता", en: "Other Widely Worshipped Deities" })}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {otherDeities.map((d) => (
            <DeityCard key={d.id} {...d} />
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">
          {t({ hi: "नाम व उपाधियाँ", en: "Names & Titles" })}
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          {t({
            hi: "प्रार्थना, धर्मग्रंथ व बातचीत में सामान्यतः प्रयुक्त नाम। हर नाम का धार्मिक अर्थ हर परंपरा या क्षेत्र में बिल्कुल एक जैसा नहीं होता।",
            en: "Common names encountered in prayer, scripture and conversation. Not every name carries exactly the same theological nuance across every tradition or region.",
          })}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deityNames.map((group) => (
            <Accordion key={group.id} title={group.deity}>
              <ul className="space-y-1.5">
                {group.names.map((n, i) => (
                  <li key={i} className="flex justify-between gap-3">
                    <span className="font-medium text-navy">{t(n.name)}</span>
                    <span className="text-gray-500 text-right">{t(n.meaning)}</span>
                  </li>
                ))}
              </ul>
            </Accordion>
          ))}
        </div>
      </Section>

      {/* 18 & 19. SACRED RIVERS + SACRED CITIES */}
      <Section
        id="sacred-places"
        eyebrow={{ hi: "भक्ति का भूगोल", en: "Geography of Devotion" }}
        title={{ hi: "पवित्र नदियाँ व नगर", en: "Sacred Rivers & Cities" }}
        subtitle={{ hi: "हिंदू परंपराओं में लंबे समय से पूजित नदियाँ व नगर।", en: "Rivers and cities long revered across Hindu traditions." }}
      >
        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
          {t({ hi: "पवित्र नदियाँ", en: "Sacred Rivers" })}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {sacredRivers.map((r) => (
            <div key={r.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy mb-1">{t(r.name)}</p>
              <p className="text-sm text-gray-500">{t(r.significance)}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
          {t({ hi: "महत्वपूर्ण पवित्र नगर", en: "Important Sacred Cities" })}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sacredCities.map((c) => (
            <SacredPlaceCard key={c.id} name={c.name} location={c.state} deity={c.association} info={c.info} />
          ))}
        </div>
      </Section>

      {/* 13 & 14. CHAR DHAM + CHOTA CHAR DHAM */}
      <Section id="char-dham" eyebrow={{ hi: "तीर्थयात्रा", en: "Pilgrimage" }} title={{ hi: "चार धाम", en: "Char Dham" }} subtitle={charDhamIntro}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {charDham.map((d) => (
            <SacredPlaceCard
              key={d.id}
              name={d.name}
              location={{ hi: `${t(d.location)} (${t(d.direction)})`, en: `${t(d.location)} (${t(d.direction)})` }}
              deity={d.deity}
              temple={d.temple}
              info={d.info}
            />
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">
          {t({ hi: "छोटा चार धाम", en: "Chota Char Dham" })}
        </h3>
        <p className="text-sm text-gray-500 mb-6 max-w-2xl">{t(chotaCharDhamIntro)}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {chotaCharDham.map((d) => (
            <SacredPlaceCard key={d.id} name={d.name} location={d.location} deity={d.associated} info={d.info} />
          ))}
        </div>
      </Section>

      {/* 15. JYOTIRLINGAS */}
      <Section id="jyotirlingas" eyebrow={{ hi: "तीर्थयात्रा", en: "Pilgrimage" }} title={{ hi: "बारह ज्योतिर्लिंग", en: "Twelve Jyotirlingas" }} subtitle={jyotirlingasIntro}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {jyotirlingas.map((j, index) => (
            <div key={j.id} className="bg-white border border-gold/20 rounded-xl p-4 text-center">
              <p className="w-7 h-7 mx-auto rounded-full bg-gold/15 text-bhagwa-dark text-xs font-semibold flex items-center justify-center mb-2">
                {index + 1}
              </p>
              <p className="font-semibold text-navy text-sm">{t(j.name)}</p>
              <p className="text-xs text-gray-500">{t(j.location)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(jyotirlingasNote)}</NoteBox>
      </Section>

      {/* 16. SHAKTI PEETHAS */}
      <Section id="shakti-peethas" eyebrow={{ hi: "तीर्थयात्रा", en: "Pilgrimage" }} title={{ hi: "शक्ति पीठ", en: "Shakti Peethas" }} subtitle={shaktiPeethasIntro}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {shaktiPeethas.map((s) => (
            <div key={s.id} className="bg-white border border-gold/20 rounded-xl p-5">
              <p className="font-semibold text-navy">{t(s.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-2">{t(s.location)}</p>
              <p className="text-sm text-gray-600 mb-1">{t({ hi: "शक्ति रूप", en: "Shakti form" })}: {t(s.shaktiForm)}</p>
              {s.bhairava.en !== "—" && (
                <p className="text-sm text-gray-600 mb-2">{t({ hi: "भैरव", en: "Bhairava" })}: {t(s.bhairava)}</p>
              )}
              <p className="text-sm text-gray-500">{t(s.note)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(shaktiPeethasNote)}</NoteBox>
      </Section>

      {/* 17. MAJOR TEMPLES BY REGION */}
      <Section
        id="temples"
        eyebrow={{ hi: "तीर्थयात्रा", en: "Pilgrimage" }}
        title={{ hi: "प्रमुख हिंदू मंदिर", en: "Major Hindu Temples" }}
        subtitle={{ hi: "एक क्षेत्रीय निर्देशिका — नीचे क्षेत्र के अनुसार फ़िल्टर करें।", en: "A regional directory — filter by region below." }}
      >
        <div className="flex flex-wrap gap-2 mb-8">
          {templesByRegion.map((group) => (
            <button
              key={group.region.en}
              onClick={() => setActiveRegion(group.region.en)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                activeRegion === group.region.en
                  ? "bg-bhagwa-dark text-white border-bhagwa-dark"
                  : "bg-white text-navy border-gold/30 hover:border-gold"
              }`}
            >
              {t(group.region)}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentRegionTemples.map((temple) => (
            <SacredPlaceCard
              key={temple.id}
              name={temple.name}
              location={temple.city}
              deity={temple.deity}
              info={temple.why}
              festival={temple.festival}
            />
          ))}
        </div>
      </Section>

      {/* 20 & 21. FESTIVALS + CALENDAR */}
      <Section
        id="festivals"
        eyebrow={{ hi: "जीवंत परंपरा", en: "Living Tradition" }}
        title={{ hi: "त्योहार", en: "Festivals" }}
        subtitle={{ hi: "उत्सव, कथा और सामुदायिक प्रथा का एक कैलेंडर।", en: "A calendar of celebration, story and community practice." }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {festivals.map((f) => (
            <FestivalCard key={f.id} {...f} />
          ))}
        </div>
        <NoteBox>{t(festivalsNote)}</NoteBox>

        <h3 id="calendar" className="scroll-mt-32 font-serif-display text-2xl font-bold text-navy mb-6 mt-14">
          {t({ hi: "हिंदू कैलेंडर (पंचांग)", en: "Hindu Calendar (Panchang)" })}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {panchangTerms.map((term) => (
            <ConceptCard key={term.id} term={term.term} definition={term.definition} />
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">
          {t({ hi: "27 नक्षत्र", en: "27 Nakshatras" })}
        </h3>
        <TraditionLabel label="traditional" />
        <div className="overflow-x-auto mt-6 rounded-xl border border-gold/20">
          <table className="w-full text-sm bg-white min-w-[640px]">
            <thead>
              <tr className="bg-bhagwa-dark text-white text-left">
                <th className="px-4 py-2.5">#</th>
                <th className="px-4 py-2.5">{t({ hi: "नाम", en: "Name" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "संस्कृत", en: "Sanskrit" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "प्रतीक", en: "Symbol" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "अधिष्ठाता देवता", en: "Ruling Deity" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "ग्रह स्वामी", en: "Planetary Ruler" })}</th>
              </tr>
            </thead>
            <tbody>
              {nakshatras.map((n) => (
                <tr key={n.id} className="border-b border-gold/10 last:border-0">
                  <td className="px-4 py-2 text-gray-400">{n.id}</td>
                  <td className="px-4 py-2 font-medium text-navy">{t(n.name)}</td>
                  <td className="px-4 py-2 text-bhagwa-dark">{n.sanskrit}</td>
                  <td className="px-4 py-2 text-gray-600">{t(n.symbol)}</td>
                  <td className="px-4 py-2 text-gray-600">{t(n.deity)}</td>
                  <td className="px-4 py-2 text-gray-600">{t(n.ruler)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 23. YOGA */}
      <Section id="yoga" eyebrow={{ hi: "साधना", en: "Practice" }} title={{ hi: "योग", en: "Yoga" }} subtitle={yogaIntro}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {yogaPaths.map((y) => (
            <div key={y.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy mb-1">{t(y.name)}</p>
              <p className="text-sm text-gray-500">{t(y.description)}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gold/20 rounded-xl p-6 max-w-3xl mb-8">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold text-navy">{t({ hi: "पतंजलि", en: "Patanjali" })}:</span> {t(patanjaliInfo.who)}
          </p>
          <p className="text-sm text-gray-600">{t(patanjaliInfo.text)}</p>
        </div>
        <h3 className="font-serif-display text-xl font-bold text-navy mb-4">
          {t({ hi: "अष्टांग — आठ अंग", en: "Ashtanga — The Eight Limbs" })}
        </h3>
        <div className="grid sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {ashtangaLimbs.map((limb, index) => (
            <div key={limb.id} className="bg-gold/10 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-400">{index + 1}</p>
              <p className="font-semibold text-navy text-sm">{t(limb.name)}</p>
              <p className="text-xs text-gray-500 mt-1">{t(limb.meaning)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 24, 25, 26, 27. SAMSKARAS, ASHRAMAS, PURUSHARTHAS, YUGAS */}
      <Section id="samskaras" eyebrow={{ hi: "जीवन व समाज", en: "Life & Society" }} title={{ hi: "हिंदू संस्कार", en: "Hindu Samskaras" }} subtitle={samskarasIntro}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {samskaras.map((s) => (
            <div key={s.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy text-sm">{t(s.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-1">{t(s.stage)}</p>
              <p className="text-xs text-gray-500">{t(s.note)}</p>
            </div>
          ))}
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
          {t({ hi: "चार आश्रम", en: "Four Ashramas" })}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {ashramas.map((a) => (
            <div key={a.id} className="bg-white border border-gold/20 rounded-xl p-4">
              <p className="font-semibold text-navy mb-1">{t(a.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-1">{t(a.meaning)}</p>
              <p className="text-sm text-gray-500">{t(a.description)}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
              {t({ hi: "चार पुरुषार्थ", en: "Four Purusharthas" })}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {purusharthas.map((p) => (
                <div key={p.id} className="bg-white border border-gold/20 rounded-xl p-4">
                  <p className="font-semibold text-navy mb-1">{t(p.name)}</p>
                  <p className="text-sm text-gray-500">{t(p.description)}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">
              {t({ hi: "चार युग", en: "Four Yugas" })}
            </h3>
            <TraditionLabel label="scriptural" />
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {yugas.map((y) => (
                <div key={y.id} className="bg-white border border-gold/20 rounded-xl p-4">
                  <p className="font-semibold text-navy mb-1">
                    {t(y.name)}{y.altName ? ` (${t(y.altName)})` : ""}
                  </p>
                  <p className="text-sm text-gray-500">{t(y.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 28. SACRED SYMBOLS */}
      <Section id="symbols" eyebrow={{ hi: "प्रतीक-विज्ञान", en: "Iconography" }} title={{ hi: "हिंदू प्रतीक", en: "Hindu Symbols" }} subtitle={{ hi: "मंदिरों, घरों व अनुष्ठानों में मिलने वाली दृश्य भाषा।", en: "Visual language encountered in temples, homes and ritual." }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {symbols.map((s) => (
            <div key={s.id} className="bg-white border border-gold/20 rounded-xl p-5">
              <p className="text-3xl mb-2">{s.symbol}</p>
              <p className="font-semibold text-navy mb-1">{t(s.name)}</p>
              <p className="text-sm text-gray-500 mb-2">{t(s.meaning)}</p>
              <p className="text-xs text-bhagwa-dark">{t(s.tradition)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 29. MANTRAS */}
      <Section id="mantras" eyebrow={{ hi: "ध्वनि व प्रार्थना", en: "Sound & Prayer" }} title={{ hi: "महत्वपूर्ण मंत्र", en: "Important Mantras" }} subtitle={{ hi: "प्रार्थना, ध्यान व अनुष्ठान में प्रयुक्त पवित्र सूत्र।", en: "Sacred formulas used in prayer, meditation and ritual." }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {mantras.map((m) => (
            <div key={m.id} className="bg-white border border-gold/20 rounded-xl p-5">
              <p className="font-semibold text-navy mb-1">{t(m.name)}</p>
              <p className="text-xs text-bhagwa-dark mb-2">{t(m.tradition)}</p>
              <p className="text-sm text-gray-600 mb-2">{t(m.meaning)}</p>
              <p className="text-xs text-gray-400">{t(m.context)}</p>
            </div>
          ))}
        </div>
        <NoteBox>{t(mantrasDisclaimer)}</NoteBox>
      </Section>

      {/* 30. SACRED TEXTS DIRECTORY */}
      <Section id="texts" eyebrow={{ hi: "निर्देशिका", en: "Directory" }} title={{ hi: "पवित्र धर्मग्रंथ त्वरित निर्देशिका", en: "Sacred Texts Quick Directory" }} subtitle={{ hi: "धर्मग्रंथ श्रेणियों में एक एकल संदर्भ तालिका।", en: "A single reference table across scripture categories." }}>
        <div className="overflow-x-auto rounded-xl border border-gold/20">
          <table className="w-full text-sm bg-white min-w-[720px]">
            <thead>
              <tr className="bg-bhagwa-dark text-white text-left">
                <th className="px-4 py-2.5">{t({ hi: "ग्रंथ", en: "Text" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "श्रेणी", en: "Category" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "विषय", en: "Subject" })}</th>
                <th className="px-4 py-2.5">{t({ hi: "यह क्यों महत्वपूर्ण है", en: "Why it matters" })}</th>
              </tr>
            </thead>
            <tbody>
              {sacredTexts.map((textEntry) => (
                <tr key={textEntry.id} className="border-b border-gold/10 last:border-0 align-top">
                  <td className="px-4 py-3 font-medium text-navy">{t(textEntry.name)}</td>
                  <td className="px-4 py-3 text-bhagwa-dark whitespace-nowrap">{t(textEntry.category)}</td>
                  <td className="px-4 py-3 text-gray-600">{t(textEntry.subject)}</td>
                  <td className="px-4 py-3 text-gray-600">{t(textEntry.why)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 31. MAJOR TRADITIONS / SAMPRADAYAS */}
      <Section id="traditions" eyebrow={{ hi: "संप्रदाय", en: "Lineages" }} title={{ hi: "प्रमुख हिंदू परंपराएँ", en: "Major Hindu Traditions" }} subtitle={{ hi: "किसी एक परंपरा को दूसरे से ऊपर रखे बिना प्रस्तुत।", en: "Presented without ranking one tradition above another." }}>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {traditions.map((tr) => (
            <div key={tr.id} className="bg-white border border-gold/20 rounded-xl p-6">
              <h3 className="font-serif-display font-bold text-xl text-navy mb-2">{t(tr.name)}</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">{t({ hi: "देवता केंद्र", en: "Deity focus" })}:</span> {t(tr.deityFocus)}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">{t({ hi: "ग्रंथ", en: "Texts" })}:</span> {tr.texts.map((tx) => t(tx)).join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">{t({ hi: "विचार", en: "Ideas" })}:</span> {t(tr.ideas)}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-navy">{t({ hi: "प्रथाएँ", en: "Practices" })}:</span> {t(tr.practices)}
              </p>
            </div>
          ))}
        </div>
        <NoteBox>{t(traditionsNote)}</NoteBox>
      </Section>

      {/* 33. SHRUTI VS SMRITI + 32. GLOSSARY */}
      <Section id="glossary" eyebrow={{ hi: "संदर्भ", en: "Reference" }} title={{ hi: "श्रुति बनाम स्मृति", en: "Shruti vs Smriti" }} subtitle={{ hi: "रहस्योद्घाटित व स्मरणित साहित्य की एक त्वरित तुलना।", en: "A quick comparison of revealed and remembered literature." }}>
        <div className="mb-16 max-w-3xl">
          <ComparisonTable shruti={shrutiSmriti.shruti} smriti={shrutiSmriti.smriti} note={shrutiSmriti.note} />
        </div>

        <h3 className="font-serif-display text-2xl font-bold text-navy mb-6">
          {t({ hi: "A–Z शब्दावली", en: "A–Z Glossary" })}
        </h3>
        <Glossary terms={glossaryTerms} />
      </Section>

      {/* 36. BEGINNER LEARNING PATH */}
      <Section
        id="learning-path"
        tone="navy"
        eyebrow={{ hi: "पक्का नहीं कि कहाँ से शुरू करें?", en: "Not Sure Where to Start?" }}
        title={{ hi: "मुझे कहाँ से शुरू करना चाहिए?", en: "Where Should I Start?" }}
        subtitle={{ hi: "शुरुआती कदमों से गहन अध्ययन तक एक सुझाई गई पठन-क्रम।", en: "A suggested reading order, from first steps to deep study." }}
      >
        <LearningPath path={learningPath} />
      </Section>

      {/* 35. EXPLORE BY CATEGORY */}
      <Section id="explore" eyebrow={{ hi: "त्वरित नेविगेशन", en: "Quick Navigation" }} title={{ hi: "श्रेणी के अनुसार अन्वेषण करें", en: "Explore by Category" }} subtitle={{ hi: "डायरी के किसी भी हिस्से में सीधे जाएँ।", en: "Jump straight to any part of the diary." }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {exploreCategories.map((cat) => (
            <button
              key={cat.label.en}
              onClick={() => scrollToId(cat.sectionId)}
              className="bg-white border border-gold/20 rounded-xl p-4 text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <p className="text-2xl mb-1">{cat.icon}</p>
              <p className="text-sm font-medium text-navy">{t(cat.label)}</p>
            </button>
          ))}
        </div>
      </Section>

      {/* 38. SOURCES & FURTHER READING */}
      <Section id="sources" eyebrow={{ hi: "पारदर्शिता", en: "Transparency" }} title={{ hi: "स्रोत व आगे का अध्ययन", en: "Sources & Further Reading" }}>
        <SourceReferences />
      </Section>
    </Layout>
  );
}
