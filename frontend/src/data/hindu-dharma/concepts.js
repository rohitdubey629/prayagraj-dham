export const whatIsDharma = {
  intro: {
    hi: "\"हिंदू धर्म\" एक आधुनिक छत्र-शब्द है, जो औपनिवेशिक काल में लोकप्रिय हुआ, और भारतीय उपमहाद्वीप की विभिन्न धार्मिक व दार्शनिक परंपराओं के विशाल परिवार को दर्शाता है। कई अनुयायी \"सनातन धर्म\" — अर्थात \"शाश्वत मार्ग\" या \"शाश्वत व्यवस्था\" — शब्द को प्राथमिकता देते हैं, हालाँकि इस शब्द की व्याख्या भी अलग-अलग होती है।",
    en: "\"Hinduism\" is a modern umbrella term, popularized during the colonial era, used to describe a vast and diverse family of related religious and philosophical traditions native to the Indian subcontinent. Many practitioners prefer the term Sanatana Dharma — \"the eternal way\" or \"eternal order\" — though how that phrase is understood also varies.",
  },
  diversity: {
    hi: "इसका कोई एक संस्थापक, एक ग्रंथ या एक केंद्रीय सत्ता नहीं है। इसके बजाय अनेक दार्शनिक स्कूल, क्षेत्रीय परंपराएँ, देवता-केंद्रित संप्रदाय और स्थानीय प्रथाएँ हैं, जो आपस में अवधारणाओं, ग्रंथों और इतिहास को साझा करती हैं।",
    en: "There is no single founder, single scripture, or single central authority. Instead there are many schools of philosophy, regional traditions, deity-focused lineages (sampradayas), and local practices that share overlapping concepts, texts and history.",
  },
  dharmaMeaning: {
    hi: "धर्म एक आधारभूत अवधारणा है जिसका अंग्रेज़ी में कोई एक सटीक पर्याय नहीं है। संदर्भ के अनुसार इसका अर्थ कर्तव्य, सदाचार, प्राकृतिक नियम, या वह व्यवस्था हो सकती है जो सृष्टि और समाज को धारण करती है।",
    en: "Dharma is a foundational concept without one exact English equivalent. Depending on context it can mean duty, righteousness, natural law, ethical conduct, or the order that sustains the universe and society.",
  },
  disclaimer: {
    hi: "विभिन्न हिंदू परंपराएँ इन अवधारणाओं को अलग-अलग ढंग से समझती हैं। यह पृष्ठ सामान्य रूप से साझा विचारों को परिचयात्मक स्तर पर प्रस्तुत करता है, साथ ही यह भी बताता है कि कहाँ व्याख्याएँ भिन्न होती हैं।",
    en: "Different Hindu traditions understand these concepts in different ways. This page presents commonly shared ideas at an introductory level, while noting where interpretations diverge.",
  },
};

// Section 10 — Major Concepts
export const majorConcepts = [
  { id: "dharma", term: { hi: "धर्म", en: "Dharma" }, sanskrit: "धर्म", definition: { hi: "कर्तव्य, सदाचार, या वह व्यवस्था जो अस्तित्व को धारण करती है।", en: "Duty, righteousness or the order that sustains existence." }, explanation: { hi: "यह व्यक्तिगत, सामाजिक और ब्रह्मांडीय स्तरों पर लागू होता है; इसकी विशिष्टताएँ संदर्भ, जीवन-अवस्था और परंपरा के अनुसार बदलती हैं।", en: "Applies at personal, social and cosmic levels; its specifics vary by context, stage of life and tradition." } },
  { id: "karma", term: { hi: "कर्म", en: "Karma" }, sanskrit: "कर्म", definition: { hi: "क्रिया, और यह सिद्धांत कि हर क्रिया का परिणाम होता है।", en: "Action, and the principle that actions have consequences." }, explanation: { hi: "अक्सर पुनर्जन्म से जुड़ा — वर्तमान कर्म भविष्य की परिस्थितियों को आकार देते हैं, ऐसा माना जाता है।", en: "Often linked with rebirth — present actions are held to shape future circumstances." } },
  { id: "samsara", term: { hi: "संसार", en: "Samsara" }, sanskrit: "संसार", definition: { hi: "जन्म, मृत्यु और पुनर्जन्म का चक्र।", en: "The cycle of birth, death and rebirth." }, explanation: { hi: "अधिकांश परंपराओं में इसे वह स्थिति माना जाता है जिससे मोक्ष प्राप्त करना है।", en: "Considered by most traditions to be a condition from which liberation (moksha) is sought." } },
  { id: "moksha", term: { hi: "मोक्ष", en: "Moksha" }, sanskrit: "मोक्ष", definition: { hi: "संसार चक्र से मुक्ति।", en: "Liberation from the cycle of samsara." }, explanation: { hi: "विभिन्न स्कूलों में भिन्न रूप से समझा जाता है — ब्रह्म से एकत्व के रूप में, या एक व्यक्तिगत ईश्वर के साथ शाश्वत प्रेमपूर्ण संबंध के रूप में, अन्य दृष्टिकोणों के साथ।", en: "Understood differently across schools — as union with Brahman, or eternal loving relationship with a personal God, among other views." } },
  { id: "atman", term: { hi: "आत्मन्", en: "Atman" }, sanskrit: "आत्मन्", definition: { hi: "व्यक्तिगत स्व या आत्मा।", en: "The individual self or soul." }, explanation: { hi: "ब्रह्म से इसका अंतिम संबंध वेदांत परंपराओं के बीच एक केंद्रीय दार्शनिक बहस का विषय है।", en: "Its ultimate relationship to Brahman is a central point of philosophical debate between Vedanta traditions." } },
  { id: "brahman", term: { hi: "ब्रह्मन्", en: "Brahman" }, sanskrit: "ब्रह्मन्", definition: { hi: "सृष्टि के मूल में स्थित परम सत्य।", en: "The ultimate reality underlying the universe." }, explanation: { hi: "कुछ परंपराओं में निराकार व अवैयक्तिक, तो कुछ में एक व्यक्तिगत परम सत्ता के रूप में वर्णित।", en: "Described as impersonal and formless in some traditions, and as a personal supreme being in others." } },
  { id: "maya", term: { hi: "माया", en: "Maya" }, sanskrit: "माया", definition: { hi: "अक्सर \"भ्रम\" या परम सत्य को आवृत्त करने वाली शक्ति के रूप में अनूदित।", en: "Often translated as illusion or the power that veils ultimate reality." }, explanation: { hi: "अद्वैत वेदांत की इस व्याख्या का केंद्र कि संसार बहुविध क्यों प्रतीत होता है जबकि सत्य एक ही है।", en: "Central to Advaita Vedanta's explanation of why the world appears multiple when reality is said to be one." } },
  { id: "ahimsa", term: { hi: "अहिंसा", en: "Ahimsa" }, sanskrit: "अहिंसा", definition: { hi: "विचार, वचन और कर्म में अहिंसा।", en: "Non-violence, in thought, word and action." }, explanation: { hi: "हिंदू, जैन और बौद्ध परंपराओं में व्यापक रूप से साझा एक नैतिक मूल्य।", en: "A widely shared ethical value across Hindu, Jain and Buddhist traditions." } },
  { id: "satya", term: { hi: "सत्य", en: "Satya" }, sanskrit: "सत्य", definition: { hi: "सत्यनिष्ठा।", en: "Truthfulness." }, explanation: { hi: "कई योगिक और धार्मिक ढाँचों में एक मूल नैतिक अनुशासन (यम) माना जाता है।", en: "Considered a core ethical discipline (yama) in many yogic and dharmic frameworks." } },
  { id: "yoga-concept", term: { hi: "योग", en: "Yoga" }, sanskrit: "योग", definition: { hi: "शाब्दिक रूप से \"मिलन\" या \"अनुशासन\"।", en: "Literally \"union\" or \"discipline\"." }, explanation: { hi: "एक दार्शनिक स्कूल और आध्यात्मिक साधना के व्यावहारिक मार्गों, दोनों को संदर्भित करता है।", en: "Refers both to a philosophical school and to practical paths of spiritual discipline." } },
  { id: "bhakti", term: { hi: "भक्ति", en: "Bhakti" }, sanskrit: "भक्ति", definition: { hi: "अपने आराध्य देवता के प्रति प्रेमपूर्ण भक्ति।", en: "Loving devotion toward a chosen deity." }, explanation: { hi: "भक्ति परंपराओं की नींव और भगवद्गीता में वर्णित एक मार्ग।", en: "The foundation of devotional (bhakti) traditions and a path discussed in the Bhagavad Gita." } },
  { id: "jnana-concept", term: { hi: "ज्ञान", en: "Jnana" }, sanskrit: "ज्ञान", definition: { hi: "ज्ञान, विशेषकर प्रत्यक्ष आध्यात्मिक अंतर्दृष्टि।", en: "Knowledge, especially direct spiritual insight." }, explanation: { hi: "वेदांतिक परंपराओं में कर्म व भक्ति के साथ मोक्ष के मार्ग के रूप में महत्वपूर्ण।", en: "Emphasized in Vedantic traditions as a path to liberation, alongside karma and bhakti." } },
  { id: "seva", term: { hi: "सेवा", en: "Seva" }, sanskrit: "सेवा", definition: { hi: "निःस्वार्थ सेवा।", en: "Selfless service." }, explanation: { hi: "व्यक्तिगत व सामूहिक रूप से की जाती है, अक्सर कर्म योग से जुड़ी।", en: "Practiced individually and communally, often connected with karma yoga." } },
  { id: "tapas", term: { hi: "तपस्", en: "Tapas" }, sanskrit: "तपस्", definition: { hi: "अनुशासित प्रयास या तपस्या।", en: "Disciplined effort or austerity." }, explanation: { hi: "केंद्रित आध्यात्मिक साधना और आत्म-संयम से जुड़ा।", en: "Associated with focused spiritual practice and self-restraint." } },
];

// Section 32 — A-Z glossary (kept separate from majorConcepts so it can grow independently)
export const glossaryTerms = [
  { letter: "A", term: { hi: "आत्मन्", en: "Atman" }, definition: { hi: "व्यक्तिगत स्व या आत्मा।", en: "The individual self or soul." } },
  { letter: "A", term: { hi: "अहिंसा", en: "Ahimsa" }, definition: { hi: "विचार, वचन और कर्म में अहिंसा।", en: "Non-violence in thought, word and action." } },
  { letter: "A", term: { hi: "अर्थ", en: "Artha" }, definition: { hi: "भौतिक समृद्धि और आजीविका की खोज, चार पुरुषार्थों में से एक।", en: "Material prosperity and the pursuit of livelihood, one of the four Purusharthas." } },
  { letter: "B", term: { hi: "ब्रह्मन्", en: "Brahman" }, definition: { hi: "सृष्टि के मूल में स्थित परम सत्य।", en: "The ultimate reality underlying the universe." } },
  { letter: "B", term: { hi: "भक्ति", en: "Bhakti" }, definition: { hi: "अपने आराध्य देवता के प्रति प्रेमपूर्ण भक्ति।", en: "Loving devotion toward a chosen deity." } },
  { letter: "B", term: { hi: "ब्रह्मचर्य", en: "Brahmacharya" }, definition: { hi: "जीवन की विद्यार्थी/संयम अवस्था, और संयम का एक मूल्य।", en: "The student/celibate stage of life, and a value of restraint." } },
  { letter: "D", term: { hi: "धर्म", en: "Dharma" }, definition: { hi: "कर्तव्य, सदाचार, या अस्तित्व को धारण करने वाली व्यवस्था।", en: "Duty, righteousness, or the order that sustains existence." } },
  { letter: "D", term: { hi: "दर्शन", en: "Darshana" }, definition: { hi: "एक दार्शनिक स्कूल या \"दृष्टिकोण\"; मंदिर में देवता के दर्शन के कार्य को भी संदर्भित करता है।", en: "A philosophical school or \"viewpoint\"; also refers to the act of viewing a deity in a temple." } },
  { letter: "D", term: { hi: "ध्यान", en: "Dhyana" }, definition: { hi: "ध्यान या सतत चिंतन।", en: "Meditation or sustained contemplation." } },
  { letter: "G", term: { hi: "गुरु", en: "Guru" }, definition: { hi: "एक शिक्षक, विशेषकर आध्यात्मिक मार्गदर्शक।", en: "A teacher, especially a spiritual guide." } },
  { letter: "K", term: { hi: "कर्म", en: "Karma" }, definition: { hi: "क्रिया, और यह सिद्धांत कि क्रियाओं के परिणाम होते हैं।", en: "Action, and the principle that actions carry consequences." } },
  { letter: "K", term: { hi: "काम", en: "Kama" }, definition: { hi: "इच्छा और सौंदर्य/इंद्रिय सुख, चार पुरुषार्थों में से एक।", en: "Desire and aesthetic/sensory enjoyment, one of the four Purusharthas." } },
  { letter: "K", term: { hi: "कलियुग", en: "Kali Yuga" }, definition: { hi: "पारंपरिक चार युगों के चक्र में चौथा और वर्तमान युग।", en: "The fourth and current age in the traditional cycle of four Yugas." } },
  { letter: "M", term: { hi: "मोक्ष", en: "Moksha" }, definition: { hi: "संसार चक्र से मुक्ति।", en: "Liberation from the cycle of samsara." } },
  { letter: "M", term: { hi: "माया", en: "Maya" }, definition: { hi: "अक्सर भ्रम या प्रतीतियों को आवृत्त करने वाली शक्ति के रूप में अनूदित।", en: "Often translated as illusion or the veiling power of appearances." } },
  { letter: "M", term: { hi: "मंत्र", en: "Mantra" }, definition: { hi: "प्रार्थना या ध्यान में प्रयुक्त एक पवित्र ध्वनि, शब्द या वाक्यांश।", en: "A sacred sound, word or phrase used in prayer or meditation." } },
  { letter: "P", term: { hi: "पूजा", en: "Puja" }, definition: { hi: "अनुष्ठानिक पूजा, अक्सर देवता को अर्पण के साथ।", en: "Ritual worship, often involving offerings to a deity." } },
  { letter: "P", term: { hi: "प्रसाद", en: "Prasad" }, definition: { hi: "अनुष्ठानिक पूजा के बाद आशीर्वादित व बाँटा जाने वाला भोजन या अर्पण।", en: "Food or an offering blessed and shared after ritual worship." } },
  { letter: "S", term: { hi: "संसार", en: "Samsara" }, definition: { hi: "जन्म, मृत्यु और पुनर्जन्म का चक्र।", en: "The cycle of birth, death and rebirth." } },
  { letter: "S", term: { hi: "संस्कार", en: "Samskara" }, definition: { hi: "एक पारंपरिक जीवन-चक्र संस्कार।", en: "A traditional life-cycle rite or rite of passage." } },
  { letter: "S", term: { hi: "सेवा", en: "Seva" }, definition: { hi: "निःस्वार्थ सेवा।", en: "Selfless service." } },
  { letter: "S", term: { hi: "शक्ति", en: "Shakti" }, definition: { hi: "दिव्य स्त्री शक्ति या ऊर्जा।", en: "Divine feminine power or energy." } },
  { letter: "S", term: { hi: "श्रुति", en: "Shruti" }, definition: { hi: "\"जो सुना गया\" — वेद और उनसे जुड़ी रहस्योद्घाटन परंपरा।", en: "\"That which is heard\" — the Vedas and their associated revelation tradition." } },
  { letter: "S", term: { hi: "स्मृति", en: "Smriti" }, definition: { hi: "\"जो स्मरण किया गया\" — महाकाव्य व पुराण जैसा पारंपरिक साहित्य।", en: "\"That which is remembered\" — traditional literature such as the epics and Puranas." } },
  { letter: "T", term: { hi: "तीर्थ", en: "Tirtha" }, definition: { hi: "एक पवित्र संगम स्थल या तीर्थ स्थान, अक्सर किसी नदी तट पर।", en: "A sacred crossing place or pilgrimage site, often on a riverbank." } },
  { letter: "Y", term: { hi: "यज्ञ", en: "Yajna" }, definition: { hi: "एक वैदिक अनुष्ठान यज्ञ, ऐतिहासिक रूप से पवित्र अग्नि पर केंद्रित।", en: "A Vedic ritual sacrifice, historically centred on a consecrated fire." } },
];

// Section 33 — Shruti vs Smriti comparison
export const shrutiSmriti = {
  shruti: {
    label: { hi: "श्रुति", en: "Shruti" },
    meaning: { hi: "\"जो सुना गया\" — दिव्य रूप से प्रकट माना जाता है और अत्यंत सटीकता से मौखिक रूप से प्रसारित।", en: "\"That which is heard\" — considered divinely revealed and transmitted orally with great precision." },
    examples: [
      { hi: "चारों वेद (संहिताएँ)", en: "The four Vedas (Samhitas)" },
      { hi: "ब्राह्मण ग्रंथ", en: "Brahmanas" },
      { hi: "आरण्यक", en: "Aranyakas" },
      { hi: "उपनिषद्", en: "Upanishads" },
    ],
  },
  smriti: {
    label: { hi: "स्मृति", en: "Smriti" },
    meaning: { hi: "\"जो स्मरण किया गया\" — मानव लेखकों द्वारा रचित व प्रसारित पारंपरिक साहित्य।", en: "\"That which is remembered\" — traditional literature composed and transmitted by human authors." },
    examples: [
      { hi: "इतिहास (रामायण, महाभारत)", en: "Itihasa (Ramayana, Mahabharata)" },
      { hi: "पुराण", en: "Puranas" },
      { hi: "धर्मशास्त्र", en: "Dharma Shastras" },
      { hi: "आगम और तंत्र (कई परंपराओं के अनुसार)", en: "Agamas and Tantras (per many traditions)" },
    ],
  },
  note: { hi: "यह भेद हिंदू विचारधारा के भीतर ही प्रयुक्त एक पारंपरिक ढाँचा है, न कि आधुनिक शैक्षणिक अर्थ में ऐतिहासिक लेखकत्व का दावा।", en: "This distinction is a traditional framework used within Hindu thought itself, not a claim about historical authorship in the modern academic sense." },
};
