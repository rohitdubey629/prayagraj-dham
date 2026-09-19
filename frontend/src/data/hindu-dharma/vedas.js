export const vedasIntro = {
  hi: "वेद हिंदू धर्मग्रंथों की सबसे प्राचीन परत हैं, जो संस्कृत में एक लंबे कालखंड में रचे गए और लिखित रूप में आने से पहले अत्यंत सटीकता के साथ मौखिक रूप से प्रसारित हुए। परंपरागत रूप से इन्हें श्रुति — \"जो सुना गया\" — माना जाता है और ये अधिकांश (यद्यपि सभी नहीं) हिंदू परंपराओं की नींव हैं।",
  en: "The Vedas are the oldest layer of Hindu scripture, composed in Sanskrit over a long period and transmitted orally with great precision before being written down. Traditionally they are considered Shruti — \"that which is heard\" — and are foundational to many, though not all, Hindu traditions.",
};

export const fourVedas = [
  {
    id: "rigveda",
    name: { hi: "ऋग्वेद", en: "Rigveda" },
    sanskrit: "ऋग्वेद",
    description: {
      hi: "चारों वेदों में सबसे प्राचीन, अग्नि, इंद्र और वरुण जैसे विभिन्न देवताओं की स्तुति करने वाले भजनों (सूक्तों) का संग्रह।",
      en: "The oldest of the four Vedas, a collection of hymns (suktas) praising various deities such as Agni, Indra and Varuna.",
    },
    themes: [
      { hi: "स्तुति भजन", en: "Hymns of praise" },
      { hi: "सृष्टि-विज्ञान", en: "Cosmology" },
      { hi: "अनुष्ठानिक आह्वान", en: "Ritual invocation" },
    ],
    related: [
      { hi: "गायत्री मंत्र", en: "Gayatri Mantra" },
      { hi: "नासदीय सूक्त (सृष्टि का भजन)", en: "Nasadiya Sukta (hymn of creation)" },
      { hi: "पुरुष सूक्त", en: "Purusha Sukta" },
    ],
  },
  {
    id: "samaveda",
    name: { hi: "सामवेद", en: "Samaveda" },
    sanskrit: "सामवेद",
    description: {
      hi: "अधिकांशतः ऋग्वेदिक श्लोकों से लिया गया, लेकिन अनुष्ठानों में गायन के लिए संगीतमय स्वर में व्यवस्थित।",
      en: "Largely drawn from Rigvedic verses, but arranged and set to musical notation for chanting during rituals.",
    },
    themes: [
      { hi: "पवित्र गायन (साम)", en: "Sacred chant (saman)" },
      { hi: "अनुष्ठानिक संगीत", en: "Ritual music" },
      { hi: "यज्ञ अनुष्ठान", en: "Yajna performance" },
    ],
    related: [
      { hi: "उद्गाता पुरोहित", en: "Udgatri priests" },
      { hi: "सोम यज्ञ", en: "Soma sacrifice" },
    ],
  },
  {
    id: "yajurveda",
    name: { hi: "यजुर्वेद", en: "Yajurveda" },
    sanskrit: "यजुर्वेद",
    description: {
      hi: "यज्ञ करने वाले पुरोहित द्वारा उच्चारित बलिदान सूत्रों (यजुस्) की एक अनुष्ठानिक पुस्तिका।",
      en: "A ritual handbook of sacrificial formulas (yajus) recited by the priest performing the yajna.",
    },
    themes: [
      { hi: "यज्ञ विधि", en: "Sacrificial procedure" },
      { hi: "गद्य व पद्य सूत्र", en: "Prose and verse formulas" },
      { hi: "दो परंपराएँ: शुक्ल और कृष्ण", en: "Two traditions: Shukla and Krishna" },
    ],
    related: [
      { hi: "अध्वर्यु पुरोहित", en: "Adhvaryu priests" },
      { hi: "शतपथ ब्राह्मण", en: "Shatapatha Brahmana" },
    ],
  },
  {
    id: "atharvaveda",
    name: { hi: "अथर्ववेद", en: "Atharvaveda" },
    sanskrit: "अथर्ववेद",
    description: {
      hi: "एक विशिष्ट संग्रह जो दैनिक जीवन के विषयों — उपचार, सुरक्षा, गृहस्थी और सामाजिक जीवन — के साथ-साथ दार्शनिक भजनों को भी समाहित करता है।",
      en: "A distinct collection covering everyday concerns — healing, protection, household and social life — alongside philosophical hymns.",
    },
    themes: [
      { hi: "दैनिक जीवन व उपचार", en: "Everyday life and healing" },
      { hi: "मंत्र व आशीर्वाद", en: "Charms and blessings" },
      { hi: "परवर्ती दार्शनिक भजन", en: "Later philosophical hymns" },
    ],
    related: [
      { hi: "आयुर्वेद की पारंपरिक जड़ें", en: "Ayurveda's traditional roots" },
      { hi: "पृथ्वी सूक्त (पृथ्वी की स्तुति)", en: "Prithvi Sukta (hymn to the Earth)" },
    ],
  },
];

// Vedas -> Samhitas -> Brahmanas -> Aranyakas -> Upanishads
export const vedicLiteratureLayers = [
  {
    id: "samhitas",
    name: { hi: "संहिता", en: "Samhitas" },
    description: {
      hi: "भजनों, मंत्रों और सूत्रों के मूल संग्रह — संकुचित अर्थ में \"वेद\" यही है।",
      en: "The core collections of hymns, chants and formulas — the \"Veda\" in its narrowest sense.",
    },
  },
  {
    id: "brahmanas",
    name: { hi: "ब्राह्मण", en: "Brahmanas" },
    description: {
      hi: "वैदिक अनुष्ठानों के अर्थ और सही विधि की व्याख्या करने वाले गद्य ग्रंथ।",
      en: "Prose texts explaining the meaning and correct performance of Vedic rituals.",
    },
  },
  {
    id: "aranyakas",
    name: { hi: "आरण्यक", en: "Aranyakas" },
    description: {
      hi: "\"वन ग्रंथ\" जो अनुष्ठान और दर्शन के बीच सेतु हैं, अक्सर एकांतवास में अध्ययन किए जाते हैं।",
      en: "\"Forest texts\" bridging ritual and philosophy, often studied by those in retreat.",
    },
  },
  {
    id: "upanishads",
    name: { hi: "उपनिषद्", en: "Upanishads" },
    description: {
      hi: "दार्शनिक ग्रंथ जो अनुष्ठान से हटकर आत्मा और परम सत्य की खोज की ओर मुड़ते हैं।",
      en: "Philosophical texts turning from ritual toward inquiry into the self and ultimate reality.",
    },
  },
];
