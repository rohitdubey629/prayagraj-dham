export const itihasaIntro = {
  hi: "इतिहास, शाब्दिक रूप से \"ऐसा वास्तव में हुआ\", हिंदू परंपरा के महान महाकाव्यों को संदर्भित करता है। इन्हें स्मृति — पारंपरिक व स्मरण किया गया साहित्य — माना जाता है और अधिकांश परंपराओं में इन्हें आधुनिक अर्थ में ऐतिहासिक अभिलेख के बजाय पवित्र कथा के रूप में देखा जाता है।",
  en: "Itihasa, literally \"thus indeed it happened,\" refers to the great epics of Hindu tradition. They are revered as Smriti — traditional and remembered literature — and are treated by most traditions as sacred narrative rather than historical record in the modern sense.",
};

export const epics = [
  {
    id: "ramayana",
    name: { hi: "रामायण", en: "Ramayana" },
    author: { hi: "परंपरागत रूप से ऋषि वाल्मीकि को श्रेय", en: "Traditionally attributed to sage Valmiki" },
    description: {
      hi: "अयोध्या के राजकुमार राम की कथा — उनका वनवास, रावण द्वारा उनकी पत्नी सीता का हरण, और हनुमान व सहयोगियों की सेना की सहायता से उन्हें बचाने की यात्रा।",
      en: "The story of Rama, prince of Ayodhya, his exile, the abduction of his wife Sita by Ravana, and his journey to rescue her with the help of Hanuman and an army of allies.",
    },
    characters: [
      { hi: "राम", en: "Rama" }, { hi: "सीता", en: "Sita" }, { hi: "लक्ष्मण", en: "Lakshmana" }, { hi: "हनुमान", en: "Hanuman" }, { hi: "रावण", en: "Ravana" },
    ],
    themes: [
      { hi: "धर्म और कर्तव्य", en: "Dharma and duty" }, { hi: "भक्ति और निष्ठा", en: "Devotion and loyalty" }, { hi: "धर्मपूर्ण राजशासन का आदर्श", en: "The ideal of righteous kingship" },
    ],
    significance: {
      hi: "त्योहारों (दीवाली, रामनवमी), क्षेत्रीय प्रदर्शन परंपराओं और भक्ति साधना में गहराई से रचा-बसा है, जो दक्षिण व दक्षिण-पूर्व एशिया में व्याप्त है।",
      en: "Deeply woven into festivals (Diwali, Ram Navami), regional performance traditions, and devotional practice across South and Southeast Asia.",
    },
  },
  {
    id: "mahabharata",
    name: { hi: "महाभारत", en: "Mahabharata" },
    author: { hi: "परंपरागत रूप से ऋषि व्यास को श्रेय", en: "Traditionally attributed to sage Vyasa" },
    description: {
      hi: "विश्व के सबसे लंबे महाकाव्यों में से एक, जो पांडव और कौरव चचेरे भाइयों के संघर्ष पर केंद्रित है, जिसकी परिणति कुरुक्षेत्र के महान युद्ध में होती है।",
      en: "One of the longest epic poems in the world, centred on the conflict between the Pandava and Kaurava cousins, culminating in the great war at Kurukshetra.",
    },
    characters: [
      { hi: "कृष्ण", en: "Krishna" }, { hi: "अर्जुन", en: "Arjuna" }, { hi: "युधिष्ठिर", en: "Yudhishthira" }, { hi: "भीष्म", en: "Bhishma" }, { hi: "द्रौपदी", en: "Draupadi" }, { hi: "दुर्योधन", en: "Duryodhana" },
    ],
    themes: [
      { hi: "कठिन परिस्थितियों में धर्म", en: "Dharma in difficult circumstances" }, { hi: "कर्तव्य, युद्ध और परिणाम", en: "Duty, war and consequence" }, { hi: "परिवार और सत्ता", en: "Family and power" },
    ],
    significance: {
      hi: "इसमें भगवद्गीता समाहित है और इसे अक्सर हिंदू नैतिक व दार्शनिक विचार के विशाल भंडार के रूप में वर्णित किया जाता है।",
      en: "Contains the Bhagavad Gita and is often described as a vast repository of Hindu ethical and philosophical thought.",
    },
  },
];

export const bhagavadGita = {
  what: { hi: "700 श्लोकों का एक दार्शनिक संवाद जो महाभारत के भीतर समाहित है, जो कुरुक्षेत्र युद्ध शुरू होने से ठीक पहले घटित होता है।", en: "A 700-verse philosophical dialogue embedded within the Mahabharata, set just before the Kurukshetra war begins." },
  where: { hi: "यह महाभारत के भीष्म पर्व (अध्याय) में युद्धभूमि पर एक संवाद के रूप में आता है।", en: "It appears within the Bhishma Parva (book) of the Mahabharata, as a conversation on the battlefield." },
  participants: {
    hi: "सारथी व मार्गदर्शक बने कृष्ण, योद्धा अर्जुन को परामर्श देते हैं, जो अपने ही स्वजनों के विरुद्ध युद्ध करने को लेकर व्यथित हैं।",
    en: "Krishna, acting as charioteer and guide, counsels the warrior Arjuna, who is torn about fighting a war against his own kinsmen.",
  },
  paths: [
    { id: "karma-yoga", name: { hi: "कर्म योग", en: "Karma Yoga" }, description: { hi: "परिणामों के प्रति आसक्ति के बिना किए जाने वाले निःस्वार्थ कर्म का मार्ग।", en: "The path of selfless action, performed without attachment to results." } },
    { id: "jnana-yoga", name: { hi: "ज्ञान योग", en: "Jnana Yoga" }, description: { hi: "शाश्वत आत्मा और क्षणभंगुर संसार के बीच विवेक व ज्ञान का मार्ग।", en: "The path of knowledge and discernment between the eternal self and the transient world." } },
    { id: "bhakti-yoga", name: { hi: "भक्ति योग", en: "Bhakti Yoga" }, description: { hi: "ईश्वर के प्रति प्रेमपूर्ण भक्ति और समर्पण का मार्ग।", en: "The path of loving devotion and surrender to the divine." } },
  ],
  concepts: {
    hi: "गीता धर्म (अपना कर्तव्य), मोक्ष (मुक्ति), और इन तीनों मार्गों को परस्पर विरोधी मानने के बजाय एकीकृत करने की चर्चा करती है।",
    en: "The Gita discusses dharma (one's duty), moksha (liberation), and how the three paths above can be integrated rather than treated as mutually exclusive.",
  },
};
