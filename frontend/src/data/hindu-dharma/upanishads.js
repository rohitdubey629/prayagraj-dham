export const upanishadsIntro = {
  hi: "उपनिषद् वैदिक साहित्य के अंत में स्थित हैं — इसीलिए इन्हें अक्सर वेदांत, अर्थात \"वेद का अंत\" कहा जाता है। ये अनुष्ठानिक निर्देशों से हटकर दार्शनिक जिज्ञासा की ओर बढ़ते हैं: आत्मा का स्वरूप, परम सत्य (ब्रह्म), और ज्ञान (ज्ञान) के माध्यम से मुक्ति (मोक्ष) की संभावना।",
  en: "The Upanishads sit at the end of the Vedic corpus — hence they are often called Vedanta, the \"end of the Veda.\" They move away from ritual instruction toward philosophical inquiry: the nature of the self (Atman), ultimate reality (Brahman), and the possibility of liberation (Moksha) through knowledge (Jnana).",
};

export const upanishadThemes = [
  { id: "atman", term: { hi: "आत्मन्", en: "Atman" }, description: { hi: "अंतरतम स्व या आत्मा — जिसे उपनिषदों में शरीर व मन से भिन्न रूप में खोजा गया है।", en: "The innermost self or soul — explored across the Upanishads as distinct from the body and mind." } },
  { id: "brahman", term: { hi: "ब्रह्मन्", en: "Brahman" }, description: { hi: "सृष्टि के मूल में स्थित अपरिवर्तनीय परम सत्य, जिसे विभिन्न ढंग से वर्णित व अनुभव किया गया है।", en: "The ultimate, unchanging reality underlying the universe, described and approached in varied ways." } },
  { id: "moksha", term: { hi: "मोक्ष", en: "Moksha" }, description: { hi: "जन्म-मृत्यु चक्र से मुक्ति, जो उपनिषदीय शिक्षा में खोजा गया एक केंद्रीय लक्ष्य है।", en: "Liberation from the cycle of birth and rebirth, a central goal explored through Upanishadic teaching." } },
  { id: "jnana", term: { hi: "ज्ञान", en: "Jnana" }, description: { hi: "ज्ञान या प्रत्यक्ष साक्षात्कार, इन ग्रंथों में मोक्ष का एक प्रमुख मार्ग माना गया है।", en: "Knowledge or direct realization, understood in these texts as a primary path to liberation." } },
];

// There is no single universally agreed "complete" list of Upanishads —
// this is a curated set of the ones most commonly cited as major (mukhya) Upanishads.
export const majorUpanishads = [
  { id: "isha", name: { hi: "ईश उपनिषद्", en: "Isha Upanishad" }, veda: { hi: "शुक्ल यजुर्वेद", en: "Shukla Yajurveda" }, note: { hi: "सभी वस्तुओं में दिव्य उपस्थिति पर एक संक्षिप्त ग्रंथ।", en: "A short text on the divine presence within all things." } },
  { id: "kena", name: { hi: "केन उपनिषद्", en: "Kena Upanishad" }, veda: { hi: "सामवेद", en: "Samaveda" }, note: { hi: "यह पूछते हुए आरंभ होता है कि मन और इंद्रियों को किसके द्वारा गति दी जाती है।", en: "Opens by asking by whom the mind and senses are set in motion." } },
  { id: "katha", name: { hi: "कठ उपनिषद्", en: "Katha Upanishad" }, veda: { hi: "कृष्ण यजुर्वेद", en: "Krishna Yajurveda" }, note: { hi: "बालक नचिकेता का मृत्यु के देवता यम के साथ संवाद।", en: "The dialogue of the boy Nachiketa with Yama, the lord of death." } },
  { id: "prashna", name: { hi: "प्रश्न उपनिषद्", en: "Prashna Upanishad" }, veda: { hi: "अथर्ववेद", en: "Atharvaveda" }, note: { hi: "शिष्यों द्वारा एक ऋषि से पूछे गए छह प्रश्नों के रूप में संरचित।", en: "Structured as six questions posed by students to a sage." } },
  { id: "mundaka", name: { hi: "मुण्डक उपनिषद्", en: "Mundaka Upanishad" }, veda: { hi: "अथर्ववेद", en: "Atharvaveda" }, note: { hi: "उच्च व निम्न ज्ञान में भेद करता है; भारत के राष्ट्रीय चिह्न की आदर्श-वाक्य का स्रोत।", en: "Distinguishes higher and lower knowledge; source of India's national emblem motto." } },
  { id: "mandukya", name: { hi: "माण्डूक्य उपनिषद्", en: "Mandukya Upanishad" }, veda: { hi: "अथर्ववेद", en: "Atharvaveda" }, note: { hi: "ओम् अक्षर और चेतना की अवस्थाओं का विश्लेषण करने वाला एक संक्षिप्त ग्रंथ।", en: "A brief text analysing the syllable Om and states of consciousness." } },
  { id: "taittiriya", name: { hi: "तैत्तिरीय उपनिषद्", en: "Taittiriya Upanishad" }, veda: { hi: "कृष्ण यजुर्वेद", en: "Krishna Yajurveda" }, note: { hi: "अस्तित्व की परतों (कोशों) और विद्यार्थियों को नैतिक निर्देश की चर्चा करता है।", en: "Discusses the layers (koshas) of being and ethical instruction to students." } },
  { id: "aitareya", name: { hi: "ऐतरेय उपनिषद्", en: "Aitareya Upanishad" }, veda: { hi: "ऋग्वेद", en: "Rigveda" }, note: { hi: "सृष्टि और चेतना के स्वरूप की खोज करता है।", en: "Explores creation and the nature of consciousness." } },
  { id: "chandogya", name: { hi: "छान्दोग्य उपनिषद्", en: "Chandogya Upanishad" }, veda: { hi: "सामवेद", en: "Samaveda" }, note: { hi: "सबसे लंबे उपनिषदों में से एक, जिसमें प्रसिद्ध \"तत् त्वम् असि\" शिक्षा है।", en: "One of the longest, containing the well-known \"Tat Tvam Asi\" teaching." } },
  { id: "brihadaranyaka", name: { hi: "बृहदारण्यक उपनिषद्", en: "Brihadaranyaka Upanishad" }, veda: { hi: "शुक्ल यजुर्वेद", en: "Shukla Yajurveda" }, note: { hi: "सबसे लंबे व प्राचीनतम में से एक, आत्मा पर संवादों से समृद्ध।", en: "Among the longest and oldest, rich in dialogues on the self." } },
  { id: "svetasvatara", name: { hi: "श्वेताश्वतर उपनिषद्", en: "Svetasvatara Upanishad" }, veda: { hi: "कृष्ण यजुर्वेद", en: "Krishna Yajurveda" }, note: { hi: "दार्शनिक जिज्ञासा को विशेषतः शिव के प्रति आस्तिक भक्ति के साथ जोड़ता है।", en: "Blends philosophical inquiry with theistic devotion, especially toward Shiva." } },
];

export const upanishadsNote = {
  hi: "विभिन्न परंपराएँ और शाखाएँ उपनिषदों के भिन्न-भिन्न समूहों को मुख्य ग्रंथ के रूप में मान्यता देती हैं; कुछ परवर्ती सूचियों में सौ से अधिक शीर्षक शामिल हैं। ऊपर दिए गए ग्यारह सबसे व्यापक रूप से अध्ययन व टीका किए जाने वाले हैं।",
  en: "Different traditions and lineages recognize different sets of Upanishads as principal texts; some later lists include well over a hundred titles. The eleven above are the ones most widely studied and commented upon.",
};
