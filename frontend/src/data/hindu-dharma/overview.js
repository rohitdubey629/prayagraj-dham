// Top-level "at a glance" categories and the category-explorer grid.
// `sectionId` must match the `id` prop of a <Section> elsewhere on the page
// so cards can scroll/link straight to the right place.
// All display strings are { hi, en } — rendered through useTranslation()'s t().

export const overviewCategories = [
  {
    id: "vedas",
    icon: "BookOpen",
    title: { hi: "वेद", en: "Vedas" },
    description: { hi: "हिंदू धर्मग्रंथों की सबसे प्राचीन परत — स्तुतियाँ, मंत्र और यज्ञ-ज्ञान।", en: "The oldest layer of Hindu scripture — hymns, chants and ritual knowledge." },
    sectionId: "vedas",
  },
  {
    id: "upanishads",
    icon: "Brain",
    title: { hi: "उपनिषद्", en: "Upanishads" },
    description: { hi: "आत्मा, परम सत्य और मोक्ष की खोज करने वाले दार्शनिक ग्रंथ।", en: "Philosophical texts exploring the self, ultimate reality and liberation." },
    sectionId: "upanishads",
  },
  {
    id: "puranas",
    icon: "ScrollText",
    title: { hi: "पुराण", en: "Puranas" },
    description: { hi: "सृष्टि-विज्ञान, देवी-देवताओं, वंशावली और भक्ति की पारंपरिक कथाएँ।", en: "Traditional narratives of cosmology, deities, dynasties and devotion." },
    sectionId: "puranas",
  },
  {
    id: "itihasa",
    icon: "Swords",
    title: { hi: "इतिहास", en: "Itihasa" },
    description: { hi: "महान महाकाव्य — रामायण और महाभारत — और उनमें निहित भगवद्गीता।", en: "The great epics — Ramayana and Mahabharata — and the Bhagavad Gita." },
    sectionId: "itihasa",
  },
  {
    id: "darshanas",
    icon: "Lightbulb",
    title: { hi: "दर्शन", en: "Darshanas" },
    description: { hi: "हिंदू दर्शन के छह शास्त्रीय स्कूल और उनके मूल विचार।", en: "Six classical schools of Hindu philosophy and their core ideas." },
    sectionId: "philosophy",
  },
  {
    id: "deities",
    icon: "Flame",
    title: { hi: "देवी-देवता", en: "Deities" },
    description: { hi: "त्रिमूर्ति, देवी के रूप, विष्णु के अवतार और व्यापक रूप से पूजित देवता।", en: "Trimurti, Devi forms, Vishnu's avatars and widely worshipped gods." },
    sectionId: "deities",
  },
  {
    id: "sacred-places",
    icon: "MapPin",
    title: { hi: "पवित्र स्थल", en: "Sacred Places" },
    description: { hi: "विभिन्न परंपराओं में पूजित नदियाँ, नगर और तीर्थ स्थल।", en: "Rivers, cities and pilgrimage places revered across traditions." },
    sectionId: "sacred-places",
  },
  {
    id: "char-dham",
    icon: "Landmark",
    title: { hi: "चार धाम", en: "Char Dham" },
    description: { hi: "चारों दिशाओं में स्थित चार अखिल भारतीय तीर्थ स्थल।", en: "The four pan-Indian pilgrimage sites in the cardinal directions." },
    sectionId: "char-dham",
  },
  {
    id: "jyotirlingas",
    icon: "Sparkles",
    title: { hi: "ज्योतिर्लिंग", en: "Jyotirlingas" },
    description: { hi: "भगवान शिव के बारह पारंपरिक रूप से पूजित ज्योति-स्वरूप।", en: "Twelve traditionally revered abodes of light of Lord Shiva." },
    sectionId: "jyotirlingas",
  },
  {
    id: "shakti-peethas",
    icon: "Gem",
    title: { hi: "शक्ति पीठ", en: "Shakti Peethas" },
    description: { hi: "देवी से जुड़े पवित्र स्थल, जिनकी सूची परंपरा अनुसार भिन्न होती है।", en: "Sacred sites associated with the Devi, with lists that vary by tradition." },
    sectionId: "shakti-peethas",
  },
  {
    id: "festivals",
    icon: "PartyPopper",
    title: { hi: "त्योहार", en: "Festivals" },
    description: { hi: "उत्सव, कथा और सामुदायिक परंपरा का जीवंत कैलेंडर।", en: "A living calendar of celebration, story and community practice." },
    sectionId: "festivals",
  },
  {
    id: "samskaras",
    icon: "Users",
    title: { hi: "संस्कार", en: "Samskaras" },
    description: { hi: "जीवन के प्रमुख पड़ावों को चिह्नित करने वाले पारंपरिक संस्कार।", en: "Traditional life-cycle rites marking key stages of life." },
    sectionId: "samskaras",
  },
  {
    id: "yoga",
    icon: "PersonStanding",
    title: { hi: "योग", en: "Yoga" },
    description: { hi: "कर्म, भक्ति, ज्ञान, राज और अन्य अनुशासन एवं साधना के मार्ग।", en: "Paths of discipline and practice — karma, bhakti, jnana, raja and more." },
    sectionId: "yoga",
  },
  {
    id: "mantras",
    icon: "AudioLines",
    title: { hi: "मंत्र", en: "Mantras" },
    description: { hi: "प्रार्थना, ध्यान और अनुष्ठान में प्रयुक्त पवित्र ध्वनि-सूत्र।", en: "Sacred sound formulas used in prayer, meditation and ritual." },
    sectionId: "mantras",
  },
  {
    id: "pilgrimage",
    icon: "Route",
    title: { hi: "तीर्थयात्रा", en: "Pilgrimage" },
    description: { hi: "भक्ति-भूगोल के आधार मंदिर, धाम और तीर्थ।", en: "Temples, dhams and tirthas that anchor devotional geography." },
    sectionId: "temples",
  },
  {
    id: "philosophy",
    icon: "Infinity",
    title: { hi: "दर्शनशास्त्र", en: "Philosophies" },
    description: { hi: "वेदांत परंपराएँ और धर्म, मोक्ष जैसी आधारभूत अवधारणाएँ।", en: "Vedanta traditions and foundational concepts like dharma and moksha." },
    sectionId: "concepts",
  },
];

// "Explore by Category" quick-nav grid (section 35)
export const exploreCategories = [
  { icon: "📜", label: { hi: "धर्मग्रंथ", en: "Scriptures" }, sectionId: "texts" },
  { icon: "🕉", label: { hi: "देवी-देवता", en: "Deities" }, sectionId: "deities" },
  { icon: "🛕", label: { hi: "मंदिर", en: "Temples" }, sectionId: "temples" },
  { icon: "🗺", label: { hi: "पवित्र स्थल", en: "Sacred Places" }, sectionId: "sacred-places" },
  { icon: "📿", label: { hi: "मंत्र", en: "Mantras" }, sectionId: "mantras" },
  { icon: "🧘", label: { hi: "योग", en: "Yoga" }, sectionId: "yoga" },
  { icon: "📚", label: { hi: "दर्शनशास्त्र", en: "Philosophy" }, sectionId: "philosophy" },
  { icon: "🎉", label: { hi: "त्योहार", en: "Festivals" }, sectionId: "festivals" },
  { icon: "🌺", label: { hi: "शक्ति", en: "Shakti" }, sectionId: "shakti-peethas" },
  { icon: "🔱", label: { hi: "शैव संप्रदाय", en: "Shaivism" }, sectionId: "traditions" },
  { icon: "🪷", label: { hi: "वैष्णव संप्रदाय", en: "Vaishnavism" }, sectionId: "traditions" },
  { icon: "📖", label: { hi: "अवधारणाएँ", en: "Concepts" }, sectionId: "concepts" },
];

// In-page sticky navigation (section 41)
export const sectionNavItems = [
  { id: "overview", label: { hi: "अवलोकन", en: "Overview" } },
  { id: "what-is-dharma", label: { hi: "धर्म क्या है?", en: "What is Dharma?" } },
  { id: "vedas", label: { hi: "वेद", en: "Vedas" } },
  { id: "upanishads", label: { hi: "उपनिषद्", en: "Upanishads" } },
  { id: "itihasa", label: { hi: "इतिहास", en: "Itihasa" } },
  { id: "puranas", label: { hi: "पुराण", en: "Puranas" } },
  { id: "philosophy", label: { hi: "दर्शनशास्त्र", en: "Philosophy" } },
  { id: "concepts", label: { hi: "अवधारणाएँ", en: "Concepts" } },
  { id: "deities", label: { hi: "देवी-देवता", en: "Deities" } },
  { id: "sacred-places", label: { hi: "पवित्र स्थल", en: "Sacred Places" } },
  { id: "char-dham", label: { hi: "चार धाम", en: "Char Dham" } },
  { id: "jyotirlingas", label: { hi: "ज्योतिर्लिंग", en: "Jyotirlingas" } },
  { id: "festivals", label: { hi: "त्योहार", en: "Festivals" } },
  { id: "yoga", label: { hi: "योग", en: "Yoga" } },
  { id: "glossary", label: { hi: "शब्दावली", en: "Glossary" } },
];

// Beginner learning path (section 36)
export const learningPath = [
  {
    level: { hi: "स्तर 1", en: "Level 1" },
    title: { hi: "शुरुआती", en: "Beginner" },
    steps: [
      { hi: "धर्म क्या है?", en: "What is Dharma?" },
      { hi: "मूल अवधारणाएँ", en: "Basic Concepts" },
      { hi: "प्रमुख देवी-देवता", en: "Major Deities" },
      { hi: "रामायण और महाभारत", en: "Ramayana & Mahabharata" },
      { hi: "प्रमुख त्योहार", en: "Major Festivals" },
    ],
  },
  {
    level: { hi: "स्तर 2", en: "Level 2" },
    title: { hi: "अन्वेषण", en: "Explore" },
    steps: [
      { hi: "वेद", en: "Vedas" },
      { hi: "उपनिषद्", en: "Upanishads" },
      { hi: "पुराण", en: "Puranas" },
      { hi: "योग", en: "Yoga" },
      { hi: "दर्शनशास्त्र", en: "Philosophy" },
    ],
  },
  {
    level: { hi: "स्तर 3", en: "Level 3" },
    title: { hi: "गहन अध्ययन", en: "Deep Dive" },
    steps: [
      { hi: "दर्शन (षड्दर्शन)", en: "Darshanas" },
      { hi: "वेदांत", en: "Vedanta" },
      { hi: "संप्रदाय", en: "Sampradayas" },
      { hi: "आगम / तंत्र", en: "Agamas/Tantras" },
      { hi: "उन्नत अवधारणाएँ", en: "Advanced concepts" },
    ],
  },
];
