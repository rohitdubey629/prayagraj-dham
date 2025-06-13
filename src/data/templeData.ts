// data/templeData.ts

export interface Temple {
  id: number;
  name: string;
  nameHindi: string;
  descriptionHindi: string;
  importance: string;
  visitingHours: string;
  location: string;
  image?: string;
  specialFeatures: string[];
}

export const temples: Temple[] = [
  {
    id: 1,
    name: "Bade Hanuman Ji Temple",
    nameHindi: "बड़े हनुमान जी मंदिर",
    descriptionHindi:
      "यह मंदिर संगम के पास स्थित है और यहाँ भगवान हनुमान की लेटी हुई मूर्ति है जो दुर्लभ मानी जाती है।",
    importance:
      "कुंभ मेले के समय लाखों श्रद्धालु यहाँ दर्शन करने आते हैं। यह मंदिर संकट मोचन के रूप में प्रसिद्ध है।",
    visitingHours: "सुबह 5 बजे से रात 10 बजे तक",
    location: "संगम के पास, प्रयागराज",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Bade_Hanuman_Ji_Allahabad.jpg",
    specialFeatures: [
      "हनुमान जी की लेटी हुई मूर्ति",
      "संगम के समीप",
      "भीड़भाड़ में भी अनुशासित व्यवस्था",
    ],
  },
  {
    id: 2,
    name: "Alopi Devi Temple",
    nameHindi: "अलोपि देवी मंदिर",
    descriptionHindi:
      "यह मंदिर देवी सती के शक्तिपीठों में से एक माना जाता है जहाँ उनकी अंगूठी गिरने की मान्यता है।",
    importance:
      "यह स्थान धार्मिक रूप से अत्यंत महत्वपूर्ण है और महिलाओं के बीच विशेष आस्था का केंद्र है।",
    visitingHours: "सुबह 6 बजे से रात 9 बजे तक",
    location: "अलोपिबाग, प्रयागराज",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Alopi_Devi_Mandir.jpg",
    specialFeatures: [
      "शक्तिपीठ के रूप में मान्यता",
      "स्थानीय श्रद्धालुओं में अत्यधिक आस्था",
      "नवरात्रि में विशेष आयोजन",
    ],
  },
  {
    id: 3,
    name: "Patalpuri Temple",
    nameHindi: "पातालपुरी मंदिर",
    descriptionHindi:
      "इलाहाबाद किले के भीतर स्थित यह मंदिर भूमिगत मंदिर है जहाँ कई संतों ने तप किया।",
    importance:
      "यह मंदिर आध्यात्मिक साधकों के लिए महत्वपूर्ण स्थान है। यहाँ से अक्षयवट भी जुड़ा है।",
    visitingHours: "सुबह 7 बजे से शाम 6 बजे तक",
    location: "इलाहाबाद किला परिसर",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Patalpuri_Mandir_Allahabad_Fort.jpg",
    specialFeatures: [
      "अंडरग्राउंड मंदिर",
      "अक्षयवट वृक्ष की निकटता",
      "किले के भीतर का धार्मिक स्थल",
    ],
  },
  {
    id: 4,
    name: "Shankar Viman Mandapam",
    nameHindi: "शंकर विमन मंडपम",
    descriptionHindi:
      "यह चार मंज़िला शिव मंदिर बनारस शैली में बना है और इसमें आदि शंकराचार्य के लिए समर्पित परिसर है।",
    importance:
      "प्रयागराज के इन प्रमुख शिव मंदिरों में से एक, जहां श्रावण और शिवरात्रि के दौरान भारी भीड़ होती है।",
    visitingHours: "सुबह 6 बजे से शाम 8 बजे तक",
    location: "त्रिवेणी संगम के पास, गंगा तट, प्रयागराज",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Shankar_Viman_Mandapam_Allahabad.jpg",
    specialFeatures: [
      "चार मंज़िला दक्षिण भारतीय शैली",
      "विमन शैली में शिव मंदिर",
      "त्रिवेणी के पास",
    ],
  },
  {
    id: 5,
    name: "Lalita Devi Temple",
    nameHindi: "ललिता देवी मंदिर",
    descriptionHindi:
      "यह एक शक्तिपीठ माना जाता है जहाँ देवी सती के अंगों में से कुछ गिरे थे, और अलगढ़ी नवल उपयोग होता है।",
    importance:
      "यह 51 शक्तिपीठों में से एक है और दुर्गा पूजा के समय ख़ास श्रद्धा मिलती है।",
    visitingHours: "5:30 AM – 10:00 PM",
    location: "मीरा पुर, प्रयागराज",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Lalita_Devi_Mandir.jpg",
    specialFeatures: [
      "शिवलिंग (पारा) की प्रतिकृति",
      "नवरात्रि व दुर्गा पूजा में विशेष सजावट",
      "बाग घाट के पास स्थित",
    ],
  },
  {
    id: 6,
    name: "Nag Vasuki Temple",
    nameHindi: "नाग वासुकी मंदिर",
    descriptionHindi:
      "यह गंगा के किनारे स्थित नाग देवता को समर्पित मंदिर है, जहाँ हर साल नागपंचमी पर मेला लगता है।",
    importance: "यह शहर का एक प्राचीन मंदिर है जहाँ नाग देवता की पूजा होती है।",
    visitingHours: "सुबह 6 बजे से शाम 8 बजे तक",
    location: "दरगंज, गंगा तट, प्रयागराज",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Nagvasuki_Mandir_Allahabad.jpg",
    specialFeatures: [
      "नाग पंचमी में विशेष पूजा",
      "गंगा किनारे स्थित",
      "प्राचीन ऐतिहासिक महत्व",
    ],
  },
  {
    id: 7,
    name: "Someshwar Mahadev Temple",
    nameHindi: "सोमेश्वर महादेव मंदिर",
    descriptionHindi:
      "यह मंदिर यमुना नदी के किनारे स्थित है और शिवरूप ‘रुद्र’ को समर्पित है। इसे शिवकुटि के नाम से भी जाना जाता है।",
    importance:
      "यह पांडवों द्वारा स्थापित आठ प्रमुख तीर्थस्थलों में से एक माना जाता है।",
    visitingHours: "सुबह 5:30 AM – 9:00 PM",
    location: "नैनी गांव, यमुना तट, प्रयागराज",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Someshwar_Mahadev_Temple.jpg",
    specialFeatures: [
      "रुद्र रूप शिव का मंदिर",
      "यमुना किनारे",
      "पंदव तीर्थस्थलों में शामिल",
    ],
  },
  {
    id: 8,
    name: "Bharadwaj Ashram Temple",
    nameHindi: "भरद्वाज आश्रम मंदिर",
    descriptionHindi:
      "यह ऋषि भरद्वाज द्वारा स्थापित मठ है, जहाँ राम ने तप किया था। इसमें एक शिव मंदिर भी स्थित है।",
    importance: "ज्ञान व शिक्षा की कृपा के लिए लोग यहाँ आते हैं।",
    visitingHours: "सुबह 6 बजे से शाम 7 बजे तक",
    location: "कर्नलगंज/दरगंज क्षेत्र, प्रयागराज",
    specialFeatures: [
      "आश्रम परिसर में मंदिर",
      "शिव व अन्य देवी-देवताओं की प्रतिमाएँ",
      "ज्ञान विज्ञान की शिक्षा के लिए ऐतिहासिक स्थल",
    ],
  },
  {
    id: 8,
    name: "Adi Vat Madhav",
    nameHindi: "आदि वट माधव",
    descriptionHindi: "त्रिवेणी संगम में जलमध्य में स्थित पौराणिक विष्णु रूप।",
    importance: "प्रथम द्वादश माधव, ज्योतिषीय परिक्रमा की शुरुआत यहाँ होती है।",
    visitingHours: "नित्य दर्शन",
    location: "त्रिवेणी संगम",
    specialFeatures: ["पौराणिक जल मंदिर", "द्वादश माधव यात्रा की शुरुआत"],
  },
  {
    id: 9,
    name: "Asi Madhav",
    nameHindi: "आशि माधव",
    descriptionHindi: "नाग वासुकी मंदिर परिसर में स्थित विष्णु रूप।",
    importance: "द्वादश माधव यात्रा का अंग, नाग देवता से सुसम्पन्न।",
    visitingHours: "सुबह 6 बजे से रात 8 बजे तक",
    location: "दरगंज, नाग वासुकी मंदिर",
    specialFeatures: ["नागवणी मंदिर के भीतर", "द्वादश माधव में शामिल"],
  },
  {
    id: 10,
    name: "Sankasht Har Madhav",
    nameHindi: "संकटहार माधव",
    descriptionHindi: "झूंसी में पीपल वृक्ष के पास स्थित संकट निवारक रूप।",
    importance: "संकट मोचन के लिए प्रतिपादित, संकट निवारण में विशेष।",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    location: "झूंसी",
    specialFeatures: ["पीपल वृक्ष के पास", "संकट निवारण"],
  },
  {
    id: 11,
    name: "Shankh Madhav",
    nameHindi: "शंख माधव",
    descriptionHindi: "छतग्न मुंशी बगीचा, झूंसी में स्थित शंख रूप विष्णु।",
    importance: "द्वादश माधव यात्रा में महत्व, हाल ही में संरक्षित।",
    visitingHours: "सुबह 7 बजे से शाम 6 बजे तक",
    location: "छतग्न मुंशी बगीचा, झूंसी",
    specialFeatures: ["शंख रूप में विष्णु", "नवीकरण पूरक"],
  },
  {
    id: 12,
    name: "Adi Veni Madhav",
    nameHindi: "आदि वेणी माधव",
    descriptionHindi: "अरैल घाट में स्थित जलमूल विष्णु रूप।",
    importance: "द्वादश माधव यात्रा का हिस्सा, पुराणों में वर्णित।",
    visitingHours: "सुबह 6 बजे से रात 8 बजे तक",
    location: "अरैल घाट",
    specialFeatures: ["जलमूल मंदिर", "पुराणिक महत्व"],
  },
  {
    id: 13,
    name: "Chakra Madhav",
    nameHindi: "चक्र माधव",
    descriptionHindi: "अरैल घाट, सोमेश्वर मंदिर के पास चक्र रूप विष्णु।",
    importance: "अग्निकोन में स्थित, द्वादश यात्रा श्रृंगार में शामिल।",
    visitingHours: "सुबह 7 बजे से शाम 7 बजे तक",
    location: "अरैल घाट",
    specialFeatures: ["चक्र रूपी विष्णु", "संगम के निकट"],
  },
  {
    id: 14,
    name: "Gada Madhav",
    nameHindi: "गदा माधव",
    descriptionHindi: "चिवांकी (चिवंकी?) में गदा रूप विष्णु का मंदिर।",
    importance: "एकादशी व पूर्णिमा पर आस्था का मंदिर।",
    visitingHours: "सुबह 6 से शाम 6 बजे तक",
    location: "चिवांकी, नयनी क्षेत्र",
    specialFeatures: ["गदा रूप मधव", "ग्रामीण वातावरण"],
  },
  {
    id: 15,
    name: "Padma Madhav",
    nameHindi: "पद्म माधव",
    descriptionHindi: "बिकार देवरिया ग्राम में स्थित पद्म रूप विष्णु।",
    importance: "ग्राम्य तीर्थ स्थल, पद्म रूप माधव के प्रति श्रद्धा।",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    location: "बिकार देवरिया",
    specialFeatures: ["पद्म रूप विष्णु", "दीप ग्रामीण मंदिर"],
  },
  {
    id: 16,
    name: "Manohar Madhav",
    nameHindi: "मनोहर माधव",
    descriptionHindi: "जॉनसनगंज में स्थित मनोहारी रूप विष्णु।",
    importance: "नगरीय क्षेत्र में लोकप्रिय पूजा स्थल।",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    location: "जॉनसनगंज",
    specialFeatures: ["नगरीय माधव", "दैनंदिन पूजा"],
  },
  {
    id: 17,
    name: "Bindu Madhav",
    nameHindi: "बिंदु माधव",
    descriptionHindi: "द्रौपदी घाट के पास स्थित बिंदु रूप विष्णु।",
    importance: "तीर्थ व पूजा स्थल, बिंदु रूप विशिष्ट।",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    location: "द्रौपदी घाट",
    specialFeatures: ["बिंदु रूप विष्णु", "घाट समीप"],
  },
  {
    id: 18,
    name: "Veni Madhav",
    nameHindi: "वेणी माधव",
    descriptionHindi:
      "दरगंज में स्थित, प्रयागराज के नगरी देवता के रूप में पूजे जाते हैं।",
    importance:
      "द्वादश मंदिरों में सर्वोच्च, पहली तीर्थ यात्रा यहीं से प्रारंभ।",
    visitingHours: "सुबह 5–12 बजे, शाम 4–8 बजे",
    location: "दरगंज",
    specialFeatures: ["नगरी देवता", "चैतन्य महाप्रभु के कीर्तन स्थल"],
  },
  {
    id: 19,
    name: "Anant Madhav",
    nameHindi: "अनंत माधव",
    descriptionHindi:
      "दुर्घटना फैक्ट्री (Ordnance Depot) के पास स्थित अनंत रूप।",
    importance: "पौराणिक यात्रा के 12वें मंदिर के रूप में भी गिना जाता है।",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    location: "Ordnance Depot क्षेत्र",
    specialFeatures: ["अनंत रूप माधव", "परिक्रमा का हिस्सा"],
  },
  {
    id: 20,
    name: "Akshayavat Madhav",
    nameHindi: "अक्षयवट माधव",
    descriptionHindi:
      "अक्षयवट वृक्ष को साक्षी मानकर यह मंदिर अनादि काल से धर्म, तपस्या और सत्य का प्रतीक रहा है। यह पातालपुरी मंदिर के निकट स्थित है।",
    importance:
      "यह स्थान मोक्षदायक माना जाता है, जहाँ भगवान विष्णु स्वयं वट वृक्ष के रूप में प्रतिष्ठित हैं।",
    visitingHours: "सुबह 6 बजे से शाम 6 बजे तक",
    location: "पातालपुरी परिसर, इलाहाबाद किला, दरगंज",
    specialFeatures: [
      "अक्षयवट वृक्ष के समीप",
      "मोक्ष प्रदान करने वाला स्थल",
      "विष्णु की विशेष उपासना का केंद्र",
    ],
  },
  {
    id: 21,
    name: "Anant Madhav",
    nameHindi: "अनंत माधव",
    descriptionHindi:
      "अनंत माधव मंदिर भगवान विष्णु के अनंत रूप को समर्पित है। यह मंदिर शांति, सहिष्णुता और मोक्ष की प्रतीक स्थल माना जाता है।",
    importance:
      "द्वादश माधवों में एक, यह मंदिर धार्मिक यात्रियों और भक्तों के लिए अत्यंत श्रद्धा का केंद्र है।",
    visitingHours: "सुबह 6 बजे से रात 8 बजे तक",
    location: "दरगंज, प्रयागराज",
    specialFeatures: [
      "अनंत स्वरूप विष्णु की प्रतिमा",
      "परिक्रमा यात्रा में शामिल",
      "शांति और समाधि का स्थल",
    ],
  },
];
