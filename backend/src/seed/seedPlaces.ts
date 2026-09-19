// Seed script: loads Prayagraj places across ALL categories (Temple, Ghat,
// Ashram, Historical, Other) into the Place collection as approved documents,
// with English translations, and a handful marked `featured` so the homepage
// has content immediately.
//
// NOTE: this WIPES the entire `places` collection before inserting
// (Place.deleteMany({})). Only run this against an empty/dev database.

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../lib/db";
import { Place, PlaceCategory } from "../models/Place";
import mongoose from "mongoose";

interface SeedPlace {
  name: string;
  nameHindi: string;
  category: PlaceCategory;
  descriptionHindi: string;
  descriptionEnglish: string;
  importance: string;
  importanceEnglish: string;
  visitingHours: string;
  visitingHoursEnglish: string;
  location: string;
  locationEnglish: string;
  image?: string;
  specialFeatures: string[];
  specialFeaturesEnglish: string[];
  featured?: boolean;
}

const temples: SeedPlace[] = [
  {
    name: "Bade Hanuman Ji Temple",
    nameHindi: "बड़े हनुमान जी मंदिर",
    category: "Temple",
    descriptionHindi:
      "यह मंदिर संगम के पास स्थित है और यहाँ भगवान हनुमान की लेटी हुई मूर्ति है जो दुर्लभ मानी जाती है।",
    descriptionEnglish:
      "This temple is located near the Sangam and houses a rare reclining idol of Lord Hanuman.",
    importance:
      "कुंभ मेले के समय लाखों श्रद्धालु यहाँ दर्शन करने आते हैं। यह मंदिर संकट मोचन के रूप में प्रसिद्ध है।",
    importanceEnglish:
      "Millions of devotees visit for darshan during the Kumbh Mela. The temple is famous as a remover of troubles (Sankat Mochan).",
    visitingHours: "सुबह 5 बजे से रात 10 बजे तक",
    visitingHoursEnglish: "5:00 AM to 10:00 PM",
    location: "संगम के पास, प्रयागराज",
    locationEnglish: "Near Sangam, Prayagraj",
    image: "/images/bade_hanuman_ji_temple.jpeg",
    specialFeatures: [
      "हनुमान जी की लेटी हुई मूर्ति",
      "संगम के समीप",
      "भीड़भाड़ में भी अनुशासित व्यवस्था",
    ],
    specialFeaturesEnglish: [
      "Reclining idol of Lord Hanuman",
      "Located close to the Sangam",
      "Well-organized crowd management even during peak times",
    ],
    featured: true,
  },
  {
    name: "Alopi Devi Temple",
    nameHindi: "अलोपि देवी मंदिर",
    category: "Temple",
    descriptionHindi:
      "यह मंदिर देवी सती के शक्तिपीठों में से एक माना जाता है जहाँ उनकी अंगूठी गिरने की मान्यता है।",
    descriptionEnglish:
      "This temple is regarded as one of the Shaktipeeths of Goddess Sati, believed to be where her ring fell.",
    importance:
      "यह स्थान धार्मिक रूप से अत्यंत महत्वपूर्ण है और महिलाओं के बीच विशेष आस्था का केंद्र है।",
    importanceEnglish:
      "This site is of great religious importance and is a special center of faith among women.",
    visitingHours: "सुबह 6 बजे से रात 9 बजे तक",
    visitingHoursEnglish: "6:00 AM to 9:00 PM",
    location: "अलोपिबाग, प्रयागराज",
    locationEnglish: "Alopibagh, Prayagraj",
    image: "/images/Alopi_Devi_Mandir.jpeg",
    specialFeatures: [
      "शक्तिपीठ के रूप में मान्यता",
      "स्थानीय श्रद्धालुओं में अत्यधिक आस्था",
      "नवरात्रि में विशेष आयोजन",
    ],
    specialFeaturesEnglish: [
      "Recognized as a Shaktipeeth",
      "Deep faith among local devotees",
      "Special celebrations during Navratri",
    ],
  },
  {
    name: "Patalpuri Temple",
    nameHindi: "पातालपुरी मंदिर",
    category: "Temple",
    descriptionHindi:
      "इलाहाबाद किले के भीतर स्थित यह मंदिर भूमिगत मंदिर है जहाँ कई संतों ने तप किया।",
    descriptionEnglish:
      "Located inside Allahabad Fort, this is an underground temple where many saints performed penance.",
    importance:
      "यह मंदिर आध्यात्मिक साधकों के लिए महत्वपूर्ण स्थान है। यहाँ से अक्षयवट भी जुड़ा है।",
    importanceEnglish:
      "This temple is an important site for spiritual seekers and is connected to the Akshayavat tree.",
    visitingHours: "सुबह 7 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "7:00 AM to 6:00 PM",
    location: "इलाहाबाद किला परिसर",
    locationEnglish: "Allahabad Fort Complex",
    image: "/images/Patalpuri.jpeg",
    specialFeatures: [
      "अंडरग्राउंड मंदिर",
      "अक्षयवट वृक्ष की निकटता",
      "किले के भीतर का धार्मिक स्थल",
    ],
    specialFeaturesEnglish: [
      "An underground temple",
      "Close proximity to the Akshayavat tree",
      "A religious site within the fort",
    ],
  },
  {
    name: "Shankar Viman Mandapam",
    nameHindi: "शंकर विमन मंडपम",
    category: "Temple",
    descriptionHindi:
      "यह चार मंज़िला शिव मंदिर बनारस शैली में बना है और इसमें आदि शंकराचार्य के लिए समर्पित परिसर है।",
    descriptionEnglish:
      "This four-storey Shiva temple is built in Banaras style and includes a complex dedicated to Adi Shankaracharya.",
    importance:
      "प्रयागराज के इन प्रमुख शिव मंदिरों में से एक, जहां श्रावण और शिवरात्रि के दौरान भारी भीड़ होती है।",
    importanceEnglish:
      "One of Prayagraj's major Shiva temples, drawing large crowds during Shravan and Shivratri.",
    visitingHours: "सुबह 6 बजे से शाम 8 बजे तक",
    visitingHoursEnglish: "6:00 AM to 8:00 PM",
    location: "त्रिवेणी संगम के पास, गंगा तट, प्रयागराज",
    locationEnglish: "Near Triveni Sangam, Ganga bank, Prayagraj",
    image: "/images/shankar_viman_mandapam.jpg",
    specialFeatures: [
      "चार मंज़िला दक्षिण भारतीय शैली",
      "विमन शैली में शिव मंदिर",
      "त्रिवेणी के पास",
    ],
    specialFeaturesEnglish: [
      "Four-storey South Indian architectural style",
      "A Shiva temple built in Vimana style",
      "Located near the Triveni Sangam",
    ],
  },
  {
    name: "Lalita Devi Temple",
    nameHindi: "ललिता देवी मंदिर",
    category: "Temple",
    descriptionHindi:
      "यह एक शक्तिपीठ माना जाता है जहाँ देवी सती के अंगों में से कुछ गिरे थे, और अलगढ़ी नवल उपयोग होता है।",
    descriptionEnglish:
      "This is regarded as a Shaktipeeth where parts of Goddess Sati's body are believed to have fallen.",
    importance: "यह 51 शक्तिपीठों में से एक है और दुर्गा पूजा के समय ख़ास श्रद्धा मिलती है।",
    importanceEnglish:
      "This is one of the 51 Shaktipeeths and receives special devotion during Durga Puja.",
    visitingHours: "5:30 AM – 10:00 PM",
    visitingHoursEnglish: "5:30 AM – 10:00 PM",
    location: "मीरा पुर, प्रयागराज",
    locationEnglish: "Mirapur, Prayagraj",
    image: "/images/Shri-Lalita-devi-temple-prayagraj-1.webp",
    specialFeatures: [
      "शिवलिंग (पारा) की प्रतिकृति",
      "नवरात्रि व दुर्गा पूजा में विशेष सजावट",
      "बाग घाट के पास स्थित",
    ],
    specialFeaturesEnglish: [
      "A mercury Shivling replica",
      "Special decorations during Navratri and Durga Puja",
      "Located near Bagh Ghat",
    ],
  },
  {
    name: "Nag Vasuki Temple",
    nameHindi: "नाग वासुकी मंदिर",
    category: "Temple",
    descriptionHindi:
      "यह गंगा के किनारे स्थित नाग देवता को समर्पित मंदिर है, जहाँ हर साल नागपंचमी पर मेला लगता है।",
    descriptionEnglish:
      "Located on the banks of the Ganga, this temple is dedicated to the serpent deity, with a fair held every year on Nag Panchami.",
    importance: "यह शहर का एक प्राचीन मंदिर है जहाँ नाग देवता की पूजा होती है।",
    importanceEnglish:
      "This is an ancient temple of the city where the serpent deity is worshipped.",
    visitingHours: "सुबह 6 बजे से शाम 8 बजे तक",
    visitingHoursEnglish: "6:00 AM to 8:00 PM",
    location: "दरगंज, गंगा तट, प्रयागराज",
    locationEnglish: "Daraganj, Ganga bank, Prayagraj",
    image: "/images/NaagvasukiTemple.jpg",
    specialFeatures: [
      "नाग पंचमी में विशेष पूजा",
      "गंगा किनारे स्थित",
      "प्राचीन ऐतिहासिक महत्व",
    ],
    specialFeaturesEnglish: [
      "Special worship on Nag Panchami",
      "Located on the banks of the Ganga",
      "Significant ancient historical importance",
    ],
  },
  {
    name: "Someshwar Mahadev Temple",
    nameHindi: "सोमेश्वर महादेव मंदिर",
    category: "Temple",
    descriptionHindi:
      "यह मंदिर यमुना नदी के किनारे स्थित है और शिवरूप ‘रुद्र’ को समर्पित है। इसे शिवकुटि के नाम से भी जाना जाता है।",
    descriptionEnglish:
      "This temple, located on the banks of the Yamuna, is dedicated to Lord Shiva's 'Rudra' form and is also known as Shivkuti.",
    importance: "यह पांडवों द्वारा स्थापित आठ प्रमुख तीर्थस्थलों में से एक माना जाता है।",
    importanceEnglish:
      "It is considered one of the eight major pilgrimage sites established by the Pandavas.",
    visitingHours: "सुबह 5:30 AM – 9:00 PM",
    visitingHoursEnglish: "5:30 AM – 9:00 PM",
    location: "नैनी गांव, यमुना तट, प्रयागराज",
    locationEnglish: "Naini village, Yamuna bank, Prayagraj",
    image: "/images/Someshwar.webp",
    specialFeatures: [
      "रुद्र रूप शिव का मंदिर",
      "यमुना किनारे",
      "पंदव तीर्थस्थलों में शामिल",
    ],
    specialFeaturesEnglish: [
      "A temple of Shiva in his Rudra form",
      "Located on the Yamuna bank",
      "Included among the Pandava pilgrimage sites",
    ],
  },
  {
    name: "Bharadwaj Ashram Temple",
    nameHindi: "भरद्वाज आश्रम मंदिर",
    category: "Temple",
    descriptionHindi:
      "यह ऋषि भरद्वाज द्वारा स्थापित मठ है, जहाँ राम ने तप किया था। इसमें एक शिव मंदिर भी स्थित है।",
    descriptionEnglish:
      "This monastery was established by Sage Bharadwaj, where Lord Rama once meditated. It also houses a Shiva temple.",
    importance: "ज्ञान व शिक्षा की कृपा के लिए लोग यहाँ आते हैं।",
    importanceEnglish: "People come here seeking the blessings of knowledge and education.",
    visitingHours: "सुबह 6 बजे से शाम 7 बजे तक",
    visitingHoursEnglish: "6:00 AM to 7:00 PM",
    location: "कर्नलगंज/दरगंज क्षेत्र, प्रयागराज",
    locationEnglish: "Kernelganj/Daraganj area, Prayagraj",
    image: "/images/bhardwaj_shram.webp",
    specialFeatures: [
      "आश्रम परिसर में मंदिर",
      "शिव व अन्य देवी-देवताओं की प्रतिमाएँ",
      "ज्ञान विज्ञान की शिक्षा के लिए ऐतिहासिक स्थल",
    ],
    specialFeaturesEnglish: [
      "A temple within the ashram complex",
      "Idols of Shiva and other deities",
      "A historic site associated with education and learning",
    ],
  },
  {
    name: "Asi Madhav",
    nameHindi: "आशि माधव",
    category: "Temple",
    descriptionHindi: "नाग वासुकी मंदिर परिसर में स्थित विष्णु रूप।",
    descriptionEnglish: "A form of Lord Vishnu located within the Nag Vasuki Temple complex.",
    importance: "द्वादश माधव यात्रा का अंग, नाग देवता से सुसम्पन्न।",
    importanceEnglish:
      "Part of the twelve Madhav pilgrimage circuit, closely associated with the serpent deity.",
    visitingHours: "सुबह 6 बजे से रात 8 बजे तक",
    visitingHoursEnglish: "6:00 AM to 8:00 PM",
    location: "दरगंज, नाग वासुकी मंदिर",
    locationEnglish: "Daraganj, Nag Vasuki Temple",
    image: "/images/asi_madhav.webp",
    specialFeatures: ["नागवणी मंदिर के भीतर", "द्वादश माधव में शामिल"],
    specialFeaturesEnglish: [
      "Located within the Nag Vasuki temple",
      "Part of the twelve Madhav shrines",
    ],
  },
  {
    name: "Sankasht Har Madhav",
    nameHindi: "संकटहार माधव",
    category: "Temple",
    descriptionHindi: "झूंसी में पीपल वृक्ष के पास स्थित संकट निवारक रूप।",
    descriptionEnglish: "A trouble-relieving form located near a peepal tree in Jhunsi.",
    importance: "संकट मोचन के लिए प्रतिपादित, संकट निवारण में विशेष।",
    importanceEnglish:
      "Worshipped as a remover of troubles, especially known for warding off difficulties.",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    visitingHoursEnglish: "6:00–8:00 AM, 4:00–6:00 PM",
    location: "झूंसी",
    locationEnglish: "Jhunsi",
    image: "/images/sankasht_har_madhav.jpg",
    specialFeatures: ["पीपल वृक्ष के पास", "संकट निवारण"],
    specialFeaturesEnglish: ["Located near a peepal tree", "Known for relieving troubles"],
  },
  {
    name: "Shankh Madhav",
    nameHindi: "शंख माधव",
    category: "Temple",
    descriptionHindi: "छतग्न मुंशी बगीचा, झूंसी में स्थित शंख रूप विष्णु।",
    descriptionEnglish: "A conch (Shankh) form of Vishnu located at Chhatnag Munshi Bagicha, Jhunsi.",
    importance: "द्वादश माधव यात्रा में महत्व, हाल ही में संरक्षित।",
    importanceEnglish:
      "Significant in the twelve Madhav pilgrimage circuit, recently restored and preserved.",
    visitingHours: "सुबह 7 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "7:00 AM to 6:00 PM",
    location: "छतग्न मुंशी बगीचा, झूंसी",
    locationEnglish: "Chhatnag Munshi Bagicha, Jhunsi",
    image: "/images/shankh_madhav.webp",
    specialFeatures: ["शंख रूप में विष्णु", "नवीकरण पूरक"],
    specialFeaturesEnglish: ["Vishnu in his conch form", "Recently renovated"],
  },
  {
    name: "Adi Veni Madhav",
    nameHindi: "आदि वेणी माधव",
    category: "Temple",
    descriptionHindi: "अरैल घाट में स्थित जलमूल विष्णु रूप।",
    descriptionEnglish: "A water-rooted form of Vishnu located at Arail Ghat.",
    importance: "द्वादश माधव यात्रा का हिस्सा, पुराणों में वर्णित।",
    importanceEnglish: "Part of the twelve Madhav pilgrimage circuit, described in the Puranas.",
    visitingHours: "सुबह 6 बजे से रात 8 बजे तक",
    visitingHoursEnglish: "6:00 AM to 8:00 PM",
    image: "/images/maxresdefault.jpg",
    location: "अरैल घाट",
    locationEnglish: "Arail Ghat",
    specialFeatures: ["जलमूल मंदिर", "पुराणिक महत्व"],
    specialFeaturesEnglish: ["A water-based shrine", "Puranic significance"],
  },
  {
    name: "Chakra Madhav",
    nameHindi: "चक्र माधव",
    category: "Temple",
    descriptionHindi: "अरैल घाट, सोमेश्वर मंदिर के पास चक्र रूप विष्णु।",
    descriptionEnglish: "A discus (Chakra) form of Vishnu near Someshwar Temple at Arail Ghat.",
    importance: "अग्निकोन में स्थित, द्वादश यात्रा श्रृंगार में शामिल।",
    importanceEnglish:
      "Situated in the south-east direction, part of the adornment of the twelve Madhav pilgrimage.",
    visitingHours: "सुबह 7 बजे से शाम 7 बजे तक",
    visitingHoursEnglish: "7:00 AM to 7:00 PM",
    location: "अरैल घाट",
    locationEnglish: "Arail Ghat",
    image: "/images/chakra_madhav.webp",
    specialFeatures: ["चक्र रूपी विष्णु", "संगम के निकट"],
    specialFeaturesEnglish: ["Vishnu in his discus form", "Located close to the Sangam"],
  },
  {
    name: "Gada Madhav",
    nameHindi: "गदा माधव",
    category: "Temple",
    descriptionHindi: "चिवांकी (चिवंकी?) में गदा रूप विष्णु का मंदिर।",
    descriptionEnglish: "A temple of Vishnu's mace (Gada) form in Chivanki.",
    importance: "एकादशी व पूर्णिमा पर आस्था का मंदिर।",
    importanceEnglish: "A temple of great devotion on Ekadashi and Purnima.",
    visitingHours: "सुबह 6 से शाम 6 बजे तक",
    visitingHoursEnglish: "6:00 AM to 6:00 PM",
    location: "चिवांकी, नयनी क्षेत्र",
    locationEnglish: "Chivanki, Naini area",
    image: "/images/shree_gada_madhav.webp",
    specialFeatures: ["गदा रूप मधव", "ग्रामीण वातावरण"],
    specialFeaturesEnglish: ["Madhav in his mace form", "A rural setting"],
  },
  {
    name: "Padma Madhav",
    nameHindi: "पद्म माधव",
    category: "Temple",
    descriptionHindi: "बिकार देवरिया ग्राम में स्थित पद्म रूप विष्णु।",
    descriptionEnglish: "A lotus (Padma) form of Vishnu located in Bikar Deoria village.",
    importance: "ग्राम्य तीर्थ स्थल, पद्म रूप माधव के प्रति श्रद्धा।",
    importanceEnglish: "A rural pilgrimage site with deep devotion to Madhav's lotus form.",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    visitingHoursEnglish: "6:00–8:00 AM, 4:00–6:00 PM",
    location: "बिकार देवरिया",
    locationEnglish: "Bikar Deoria",
    image: "/images/padma_madhav.webp",
    specialFeatures: ["पद्म रूप विष्णु", "दीप ग्रामीण मंदिर"],
    specialFeaturesEnglish: ["Vishnu in his lotus form", "A quiet rural temple"],
  },
  {
    name: "Manohar Madhav",
    nameHindi: "मनोहर माधव",
    category: "Temple",
    descriptionHindi: "जॉनसनगंज में स्थित मनोहारी रूप विष्णु।",
    descriptionEnglish: "A charming form of Vishnu located in Johnstonganj.",
    importance: "नगरीय क्षेत्र में लोकप्रिय पूजा स्थल।",
    importanceEnglish: "A popular place of worship within the city area.",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    visitingHoursEnglish: "6:00–8:00 AM, 4:00–6:00 PM",
    location: "जॉनसनगंज",
    locationEnglish: "Johnstonganj",
    image: "/images/manohar_madhav.webp",
    specialFeatures: ["नगरीय माधव", "दैनंदिन पूजा"],
    specialFeaturesEnglish: ["An urban Madhav shrine", "Daily worship"],
  },
  {
    name: "Bindu Madhav",
    nameHindi: "बिंदु माधव",
    category: "Temple",
    descriptionHindi: "द्रौपदी घाट के पास स्थित बिंदु रूप विष्णु।",
    descriptionEnglish: "A form of Vishnu located near Draupadi Ghat.",
    importance: "तीर्थ व पूजा स्थल, बिंदु रूप विशिष्ट।",
    importanceEnglish: "A pilgrimage and worship site, distinctive for its Bindu form.",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    visitingHoursEnglish: "6:00–8:00 AM, 4:00–6:00 PM",
    location: "द्रौपदी घाट",
    locationEnglish: "Draupadi Ghat",
    image: "/images/bindu_madhav.webp",
    specialFeatures: ["बिंदु रूप विष्णु", "घाट समीप"],
    specialFeaturesEnglish: ["Vishnu in his Bindu form", "Located close to the ghat"],
  },
  {
    name: "Veni Madhav",
    nameHindi: "वेणी माधव",
    category: "Temple",
    descriptionHindi: "दरगंज में स्थित, प्रयागराज के नगरी देवता के रूप में पूजे जाते हैं।",
    descriptionEnglish:
      "Located in Daraganj, worshipped as the presiding deity of the city of Prayagraj.",
    importance: "द्वादश मंदिरों में सर्वोच्च, पहली तीर्थ यात्रा यहीं से प्रारंभ।",
    importanceEnglish:
      "The foremost among the twelve Madhav temples; the pilgrimage circuit traditionally begins here.",
    visitingHours: "सुबह 5–12 बजे, शाम 4–8 बजे",
    visitingHoursEnglish: "5:00 AM–12:00 PM, 4:00–8:00 PM",
    location: "दरगंज",
    locationEnglish: "Daraganj",
    image: "/images/veni_madhav.webp",
    specialFeatures: ["नगरी देवता", "चैतन्य महाप्रभु के कीर्तन स्थल"],
    specialFeaturesEnglish: [
      "The presiding deity of the city",
      "A site associated with Chaitanya Mahaprabhu's kirtan",
    ],
    featured: true,
  },
  {
    name: "Anant Madhav",
    nameHindi: "अनंत माधव",
    category: "Temple",
    descriptionHindi: "दुर्घटना फैक्ट्री (Ordnance Depot) के पास स्थित अनंत रूप।",
    descriptionEnglish: "An eternal (Anant) form located near the Ordnance Depot.",
    importance: "पौराणिक यात्रा के 12वें मंदिर के रूप में भी गिना जाता है।",
    importanceEnglish: "Also counted as the 12th temple in the mythological pilgrimage circuit.",
    visitingHours: "सुबह 6–8 बजे, शाम 4–6 बजे",
    visitingHoursEnglish: "6:00–8:00 AM, 4:00–6:00 PM",
    location: "Ordnance Depot क्षेत्र",
    locationEnglish: "Ordnance Depot area",
    image: "/images/anant_madhav.webp",
    specialFeatures: ["अनंत रूप माधव", "परिक्रमा का हिस्सा"],
    specialFeaturesEnglish: ["Madhav in his eternal form", "Part of the circumambulation route"],
  },
  {
    name: "Akshayavat Madhav",
    nameHindi: "अक्षयवट माधव",
    category: "Temple",
    descriptionHindi:
      "अक्षयवट वृक्ष को साक्षी मानकर यह मंदिर अनादि काल से धर्म, तपस्या और सत्य का प्रतीक रहा है। यह पातालपुरी मंदिर के निकट स्थित है।",
    descriptionEnglish:
      "Witnessed by the Akshayavat tree, this temple has stood since time immemorial as a symbol of dharma, penance and truth. It is located near the Patalpuri Temple.",
    importance:
      "यह स्थान मोक्षदायक माना जाता है, जहाँ भगवान विष्णु स्वयं वट वृक्ष के रूप में प्रतिष्ठित हैं।",
    importanceEnglish:
      "This site is believed to grant salvation, where Lord Vishnu himself is enshrined in the form of the banyan tree.",
    visitingHours: "सुबह 6 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "6:00 AM to 6:00 PM",
    location: "पातालपुरी परिसर, इलाहाबाद किला, दरगंज",
    locationEnglish: "Patalpuri Complex, Allahabad Fort, Daraganj",
    image: "/images/akshayavat_madhav_.webp",
    specialFeatures: [
      "अक्षयवट वृक्ष के समीप",
      "मोक्ष प्रदान करने वाला स्थल",
      "विष्णु की विशेष उपासना का केंद्र",
    ],
    specialFeaturesEnglish: [
      "Located next to the Akshayavat tree",
      "A site believed to grant salvation",
      "A special center of Vishnu worship",
    ],
  },
  {
    name: "Anant Madhav (Daraganj)",
    nameHindi: "अनंत माधव (दरगंज)",
    category: "Temple",
    descriptionHindi:
      "अनंत माधव मंदिर भगवान विष्णु के अनंत रूप को समर्पित है। यह मंदिर शांति, सहिष्णुता और मोक्ष की प्रतीक स्थल माना जाता है।",
    descriptionEnglish:
      "The Anant Madhav Temple is dedicated to Lord Vishnu's eternal form. It is regarded as a symbol of peace, tolerance and salvation.",
    importance:
      "द्वादश माधवों में एक, यह मंदिर धार्मिक यात्रियों और भक्तों के लिए अत्यंत श्रद्धा का केंद्र है।",
    importanceEnglish:
      "One of the twelve Madhav shrines, this temple is a deeply revered center for pilgrims and devotees.",
    visitingHours: "सुबह 6 बजे से रात 8 बजे तक",
    visitingHoursEnglish: "6:00 AM to 8:00 PM",
    location: "दरगंज, प्रयागराज",
    locationEnglish: "Daraganj, Prayagraj",
    image: "/images/veni_madhav.webp",
    specialFeatures: [
      "अनंत स्वरूप विष्णु की प्रतिमा",
      "परिक्रमा यात्रा में शामिल",
      "शांति और समाधि का स्थल",
    ],
    specialFeaturesEnglish: [
      "An idol of Vishnu in his eternal form",
      "Included in the circumambulation pilgrimage",
      "A place of peace and meditation",
    ],
  },
  {
    name: "Adi Vat Madhav",
    nameHindi: "आदि वट माधव",
    category: "Temple",
    descriptionHindi: "त्रिवेणी संगम में जलमध्य में स्थित पौराणिक विष्णु रूप।",
    descriptionEnglish:
      "A mythological form of Vishnu situated amid the waters at the Triveni Sangam.",
    importance: "प्रथम द्वादश माधव, ज्योतिषीय परिक्रमा की शुरुआत यहाँ होती है।",
    importanceEnglish:
      "The first of the twelve Madhav shrines; the astrological circumambulation begins here.",
    visitingHours: "नित्य दर्शन",
    visitingHoursEnglish: "Open daily for darshan",
    location: "त्रिवेणी संगम",
    locationEnglish: "Triveni Sangam",
    image: "/images/adivenimadhav.jpg",
    specialFeatures: ["पौराणिक जल मंदिर", "द्वादश माधव यात्रा की शुरुआत"],
    specialFeaturesEnglish: [
      "A mythological water shrine",
      "The starting point of the twelve Madhav pilgrimage",
    ],
  },
];

const ghats: SeedPlace[] = [
  {
    name: "Triveni Ghat (Sangam)",
    nameHindi: "त्रिवेणी घाट (संगम)",
    category: "Ghat",
    descriptionHindi:
      "गंगा, यमुना और अदृश्य सरस्वती के संगम पर बना यह मुख्य घाट है, जहाँ प्रतिदिन हज़ारों श्रद्धालु स्नान करते हैं।",
    descriptionEnglish:
      "The main ghat at the confluence of the Ganga, Yamuna and the unseen Saraswati, where thousands of devotees bathe every day.",
    importance:
      "यह कुम्भ मेले का केंद्रीय स्नान स्थल है और हिंदू धर्म के सबसे पवित्र स्नान स्थलों में गिना जाता है।",
    importanceEnglish:
      "This is the central bathing site of the Kumbh Mela and is counted among the holiest bathing places in Hinduism.",
    visitingHours: "सूर्योदय से सूर्यास्त तक (नित्य दर्शन)",
    visitingHoursEnglish: "Sunrise to sunset (open daily)",
    location: "संगम क्षेत्र, प्रयागराज",
    locationEnglish: "Sangam area, Prayagraj",
    image: "/images/triveni_sangam.jpeg",
    specialFeatures: [
      "नाव से संगम स्नान की सुविधा",
      "कुम्भ मेले का मुख्य स्नान घाट",
      "पंडा/पुरोहित द्वारा पूजा-पाठ की व्यवस्था",
    ],
    specialFeaturesEnglish: [
      "Boat rides available for bathing at the exact confluence point",
      "Main bathing ghat of the Kumbh Mela",
      "Priests available on-site for rituals",
    ],
    featured: true,
  },
  {
    name: "Rasoolabad Ghat",
    nameHindi: "रसूलाबाद घाट",
    category: "Ghat",
    descriptionHindi:
      "यमुना नदी के किनारे स्थित यह घाट अंतिम संस्कार तथा सांस्कृतिक आयोजनों (जैसे रामलीला) के लिए जाना जाता है।",
    descriptionEnglish:
      "Located on the banks of the Yamuna, this ghat is known both as a cremation ghat and as a venue for cultural events like Ramlila.",
    importance:
      "शहर के प्रमुख घाटों में से एक, यहाँ स्थानीय लोग पितृ तर्पण और अन्य धार्मिक अनुष्ठान भी करते हैं।",
    importanceEnglish:
      "One of the city's major ghats, also used by locals for ancestral rites (Pitru Tarpan) and other religious rituals.",
    visitingHours: "सुबह 5 बजे से रात 9 बजे तक",
    visitingHoursEnglish: "5:00 AM to 9:00 PM",
    location: "यमुना तट, दरभंगा कॉलोनी के पास, प्रयागराज",
    locationEnglish: "Yamuna bank, near Darbhanga Colony, Prayagraj",
    image: "/images/rasoolabad_ghat.jpg",
    specialFeatures: [
      "यमुना नदी का प्रमुख घाट",
      "रामलीला व सांस्कृतिक आयोजनों का स्थल",
      "पितृ तर्पण के लिए उपयुक्त",
    ],
    specialFeaturesEnglish: [
      "A major ghat on the Yamuna river",
      "Venue for Ramlila and cultural events",
      "Suitable for ancestral rites",
    ],
  },
  {
    name: "Daraganj Ghat",
    nameHindi: "दारागंज घाट",
    category: "Ghat",
    descriptionHindi:
      "दारागंज क्षेत्र में गंगा किनारे स्थित यह घाट वेणी माधव मंदिर तथा नाग वासुकी मंदिर के नज़दीक है।",
    descriptionEnglish:
      "This ghat on the Ganga in the Daraganj area lies close to the Veni Madhav and Nag Vasuki temples.",
    importance:
      "स्थानीय श्रद्धालुओं के लिए नित्य स्नान व पूजा का प्रमुख स्थान, कई मंदिरों तक पैदल पहुँच यहीं से होती है।",
    importanceEnglish:
      "A primary daily bathing and worship spot for locals, and the walking access point to several nearby temples.",
    visitingHours: "सुबह 5 बजे से शाम 8 बजे तक",
    visitingHoursEnglish: "5:00 AM to 8:00 PM",
    location: "दारागंज, गंगा तट, प्रयागराज",
    locationEnglish: "Daraganj, Ganga bank, Prayagraj",
    image: "/images/daraganj_ghat.jpg",
    specialFeatures: [
      "नाग वासुकी व वेणी माधव मंदिर के निकट",
      "स्थानीय श्रद्धालुओं में लोकप्रिय",
      "प्रातःकालीन आरती",
    ],
    specialFeaturesEnglish: [
      "Close to the Nag Vasuki and Veni Madhav temples",
      "Popular with local devotees",
      "Morning aarti",
    ],
  },
  {
    name: "Chatnag Ghat",
    nameHindi: "छतनाग घाट",
    category: "Ghat",
    descriptionHindi:
      "गंगा किनारे स्थित यह शांत घाट झूंसी क्षेत्र के करीब है और द्वादश माधव यात्रा के कुछ पड़ावों से जुड़ा है।",
    descriptionEnglish:
      "A quieter ghat on the Ganga near the Jhunsi area, connected to some stops on the twelve-Madhav pilgrimage circuit.",
    importance:
      "कम भीड़-भाड़ वाला घाट, शांति से स्नान व ध्यान के लिए उपयुक्त।",
    importanceEnglish:
      "A less crowded ghat, well suited for a peaceful bath or meditation.",
    visitingHours: "सुबह 6 बजे से शाम 7 बजे तक",
    visitingHoursEnglish: "6:00 AM to 7:00 PM",
    location: "झूंसी के निकट, गंगा तट, प्रयागराज",
    locationEnglish: "Near Jhunsi, Ganga bank, Prayagraj",
    image: "/images/chatnag_ghat.jpg",
    specialFeatures: ["शांत वातावरण", "द्वादश माधव यात्रा से जुड़ाव"],
    specialFeaturesEnglish: ["A calm, quiet setting", "Linked to the twelve-Madhav pilgrimage"],
  },
  {
    name: "Kila Ghat",
    nameHindi: "किला घाट",
    category: "Ghat",
    descriptionHindi:
      "इलाहाबाद किले के ठीक नीचे यमुना किनारे स्थित यह घाट पातालपुरी मंदिर व अक्षयवट के दर्शन के लिए प्रवेश बिंदु के रूप में भी उपयोग होता है।",
    descriptionEnglish:
      "Located on the Yamuna right below Allahabad Fort, this ghat also serves as an access point for visiting the Patalpuri Temple and Akshayavat.",
    importance:
      "ऐतिहासिक किले के सामीप्य के कारण पर्यटकों व श्रद्धालुओं दोनों के लिए महत्वपूर्ण स्थान।",
    importanceEnglish:
      "Its proximity to the historic fort makes it significant for both tourists and pilgrims.",
    visitingHours: "सुबह 6 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "6:00 AM to 6:00 PM",
    location: "इलाहाबाद किला परिसर के निकट, यमुना तट",
    locationEnglish: "Near Allahabad Fort complex, Yamuna bank",
    image: "/images/Akbar_Fort_Allahabad.jpg",
    specialFeatures: ["किले के निकट", "पातालपुरी व अक्षयवट का प्रवेश बिंदु"],
    specialFeaturesEnglish: ["Close to the fort", "Access point for Patalpuri and Akshayavat"],
  },
];

const ashrams: SeedPlace[] = [
  {
    name: "Shringverpur Dham",
    nameHindi: "श्रृंगवेरपुर धाम",
    category: "Ashram",
    descriptionHindi:
      "यह वह स्थान है जहाँ निषादराज गुह ने भगवान राम, सीता और लक्ष्मण को गंगा पार कराई थी। यहाँ राम-निषाद मिलन का प्राचीन स्थल है।",
    descriptionEnglish:
      "This is the site where the boatman-king Nishadraj Guha ferried Lord Rama, Sita and Lakshmana across the Ganga — the ancient site of Rama's meeting with Nishad.",
    importance:
      "रामायण से जुड़ा एक अत्यंत पवित्र स्थल, जहाँ मित्रता और भक्ति का प्रतीक राम-निषाद मिलन आज भी पूजनीय है।",
    importanceEnglish:
      "A deeply sacred site linked to the Ramayana, where the meeting of Rama and Nishad — a symbol of friendship and devotion — is still revered today.",
    visitingHours: "सुबह 7 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "7:00 AM to 6:00 PM",
    location: "श्रृंगवेरपुर, प्रयागराज से लगभग 40 किमी",
    locationEnglish: "Shringverpur, about 40 km from Prayagraj",
    image: "/images/shringverpur_dham.jpg",
    specialFeatures: [
      "राम-निषाद मिलन स्थल",
      "गंगा तट पर स्थित प्राचीन आश्रम",
      "पुरातात्विक उत्खनन स्थल भी निकट",
    ],
    specialFeaturesEnglish: [
      "Site of the Rama-Nishad meeting",
      "An ancient ashram on the banks of the Ganga",
      "Near an archaeological excavation site",
    ],
    featured: true,
  },
  {
    name: "Karpatri Dham Ashram",
    nameHindi: "करपात्री धाम आश्रम",
    category: "Ashram",
    descriptionHindi:
      "स्वामी करपात्री जी महाराज द्वारा स्थापित यह आश्रम धर्म-शिक्षा व सनातन परंपरा के प्रचार-प्रसार का केंद्र है।",
    descriptionEnglish:
      "Founded by Swami Karpatri Ji Maharaj, this ashram is a center for religious education and the propagation of Sanatan traditions.",
    importance:
      "संतों व विद्वानों के प्रवचन एवं धार्मिक शिक्षण के लिए जाना जाता है।",
    importanceEnglish:
      "Known for discourses by saints and scholars, and for religious teaching.",
    visitingHours: "सुबह 7 बजे से शाम 7 बजे तक",
    visitingHoursEnglish: "7:00 AM to 7:00 PM",
    location: "प्रयागराज शहर क्षेत्र",
    locationEnglish: "Prayagraj city area",
    image: "/images/bhardwaj_shram.webp",
    specialFeatures: ["धार्मिक शिक्षा केंद्र", "प्रवचन व सत्संग आयोजन"],
    specialFeaturesEnglish: ["A center for religious education", "Hosts discourses and satsang gatherings"],
  },
];

const historical: SeedPlace[] = [
  {
    name: "Allahabad Fort",
    nameHindi: "इलाहाबाद किला",
    category: "Historical",
    descriptionHindi:
      "मुग़ल सम्राट अकबर द्वारा 1583 में गंगा-यमुना के संगम पर बनवाया गया यह विशाल किला अक्षयवट वृक्ष और पातालपुरी मंदिर का भी घर है।",
    descriptionEnglish:
      "This massive fort, built by the Mughal emperor Akbar in 1583 at the confluence of the Ganga and Yamuna, is also home to the Akshayavat tree and Patalpuri Temple.",
    importance:
      "भारत के सबसे बड़े किलों में से एक, वर्तमान में सेना के अधीन होने के कारण इसका कुछ ही हिस्सा आम जनता के लिए खुला है।",
    importanceEnglish:
      "One of the largest forts in India; since it is currently under military control, only a part of it is open to the public.",
    visitingHours: "सुबह 9 बजे से शाम 5 बजे तक (सीमित प्रवेश)",
    visitingHoursEnglish: "9:00 AM to 5:00 PM (limited public access)",
    location: "संगम के निकट, प्रयागराज",
    locationEnglish: "Near the Sangam, Prayagraj",
    image: "/images/Akbar_Fort_Allahabad.jpg",
    specialFeatures: [
      "अकबर द्वारा 1583 में निर्मित",
      "अक्षयवट व पातालपुरी मंदिर इसी परिसर में",
      "मुग़लकालीन स्थापत्य कला का उदाहरण",
    ],
    specialFeaturesEnglish: [
      "Built by Akbar in 1583",
      "Houses the Akshayavat tree and Patalpuri Temple",
      "An example of Mughal-era architecture",
    ],
    featured: true,
  },
  {
    name: "Anand Bhawan",
    nameHindi: "आनंद भवन",
    category: "Historical",
    descriptionHindi:
      "नेहरू परिवार का ऐतिहासिक निवास, जो अब एक संग्रहालय के रूप में भारतीय स्वतंत्रता संग्राम से जुड़ी स्मृतियों को संजोए हुए है।",
    descriptionEnglish:
      "The historic residence of the Nehru family, now a museum preserving memorabilia connected to India's freedom struggle.",
    importance:
      "स्वतंत्रता आंदोलन के कई महत्वपूर्ण निर्णय यहीं लिए गए थे; जवाहरलाल नेहरू व इंदिरा गांधी का बचपन यहीं बीता।",
    importanceEnglish:
      "Many important decisions of the freedom movement were taken here; Jawaharlal Nehru and Indira Gandhi spent parts of their childhood here.",
    visitingHours: "सुबह 9:30 बजे से शाम 5 बजे तक (सोमवार बंद)",
    visitingHoursEnglish: "9:30 AM to 5:00 PM (closed on Mondays)",
    location: "मुख्य शहर क्षेत्र, प्रयागराज",
    locationEnglish: "Main city area, Prayagraj",
    image: "/images/anand_bhawan.jpg",
    specialFeatures: [
      "नेहरू परिवार का निवास",
      "स्वतंत्रता संग्राम संग्रहालय",
      "तारामंडल (प्लैनेटेरियम) भी परिसर में",
    ],
    specialFeaturesEnglish: [
      "Former residence of the Nehru family",
      "A museum of the freedom struggle",
      "A planetarium is also on the premises",
    ],
  },
  {
    name: "Swaraj Bhawan",
    nameHindi: "स्वराज भवन",
    category: "Historical",
    descriptionHindi:
      "आनंद भवन के ठीक बगल में स्थित यह भवन मोतीलाल नेहरू का मूल निवास था, जिसे बाद में कांग्रेस पार्टी को दान कर दिया गया।",
    descriptionEnglish:
      "Located right next to Anand Bhawan, this was Motilal Nehru's original residence, later donated to the Congress party.",
    importance:
      "भारतीय राष्ट्रीय कांग्रेस की कई बैठकों व स्वतंत्रता आंदोलन की गतिविधियों का साक्षी।",
    importanceEnglish:
      "Witness to several Indian National Congress meetings and freedom movement activities.",
    visitingHours: "सुबह 9:30 बजे से शाम 5 बजे तक",
    visitingHoursEnglish: "9:30 AM to 5:00 PM",
    location: "आनंद भवन परिसर, प्रयागराज",
    locationEnglish: "Anand Bhawan complex, Prayagraj",
    image: "/images/swaraj_bhawan.jpg",
    specialFeatures: ["मोतीलाल नेहरू का मूल निवास", "स्वतंत्रता आंदोलन से जुड़ा इतिहास"],
    specialFeaturesEnglish: ["Motilal Nehru's original residence", "History linked to the freedom movement"],
  },
  {
    name: "All Saints Cathedral (Patthar Girjaghar)",
    nameHindi: "ऑल सेंट्स कैथेड्रल (पत्थर गिरजाघर)",
    category: "Historical",
    descriptionHindi:
      "ब्रिटिशकालीन गॉथिक शैली में निर्मित यह चर्च संगमरमर व बलुआ पत्थर से बना है, इसीलिए इसे 'पत्थर गिरजाघर' भी कहा जाता है।",
    descriptionEnglish:
      "This British-era church, built in Gothic style using marble and sandstone, is popularly called the 'Patthar Girjaghar' (stone church).",
    importance:
      "उत्तर भारत के सबसे भव्य गिरजाघरों में से एक, स्थापत्य कला के प्रेमियों के लिए महत्वपूर्ण स्थल।",
    importanceEnglish:
      "One of North India's grandest cathedrals, an important site for admirers of architecture.",
    visitingHours: "सुबह 8 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "8:00 AM to 6:00 PM",
    location: "एम.जी. मार्ग, प्रयागराज",
    locationEnglish: "M.G. Road, Prayagraj",
    image: "/images/all_saints_cathedral.jpg",
    specialFeatures: [
      "गॉथिक शैली का ब्रिटिशकालीन चर्च",
      "संगमरमर व बलुआ पत्थर से निर्मित",
      "सुंदर काँच की खिड़कियाँ (stained glass)",
    ],
    specialFeaturesEnglish: [
      "A British-era Gothic-style church",
      "Built from marble and sandstone",
      "Beautiful stained-glass windows",
    ],
  },
  {
    name: "Chandrashekhar Azad Park",
    nameHindi: "चंद्रशेखर आज़ाद पार्क",
    category: "Historical",
    descriptionHindi:
      "पहले 'अल्फ्रेड पार्क' के नाम से जाना जाने वाला यह विशाल पार्क वह स्थान है जहाँ स्वतंत्रता सेनानी चंद्रशेखर आज़ाद ने अंग्रेज़ों से घिरने पर स्वयं को गोली मार ली थी।",
    descriptionEnglish:
      "Formerly known as 'Alfred Park', this large park is where freedom fighter Chandrashekhar Azad shot himself rather than be captured by the British.",
    importance:
      "भारतीय स्वतंत्रता संग्राम के इतिहास में एक अत्यंत महत्वपूर्ण स्थल, जहाँ आज़ाद जी की प्रतिमा भी स्थापित है।",
    importanceEnglish:
      "A highly significant site in the history of India's freedom struggle, with a statue of Azad installed here.",
    visitingHours: "सुबह 6 बजे से शाम 7 बजे तक",
    visitingHoursEnglish: "6:00 AM to 7:00 PM",
    location: "सिविल लाइंस, प्रयागराज",
    locationEnglish: "Civil Lines, Prayagraj",
    image: "/images/chandra_shekhar_azad_park.jpg",
    specialFeatures: [
      "चंद्रशेखर आज़ाद के बलिदान का स्थल",
      "प्रयागराज संग्रहालय भी पार्क में स्थित",
      "हरा-भरा विशाल उद्यान",
    ],
    specialFeaturesEnglish: [
      "Site of Chandrashekhar Azad's sacrifice",
      "The Allahabad Museum is also located within the park",
      "A large, green public garden",
    ],
  },
  {
    name: "University of Allahabad",
    nameHindi: "इलाहाबाद विश्वविद्यालय",
    category: "Historical",
    descriptionHindi:
      "1887 में स्थापित, भारत का चौथा सबसे पुराना आधुनिक विश्वविद्यालय, जिसे कभी 'पूरब का ऑक्सफ़ोर्ड' कहा जाता था।",
    descriptionEnglish:
      "Established in 1887, India's fourth-oldest modern university, once called the 'Oxford of the East'.",
    importance:
      "अनेक प्रसिद्ध वैज्ञानिकों, साहित्यकारों व राजनेताओं की शिक्षा-स्थली, भारतीय शिक्षा के इतिहास में विशेष स्थान।",
    importanceEnglish:
      "The alma mater of many renowned scientists, writers and politicians, holding a special place in the history of Indian education.",
    visitingHours: "सुबह 9 बजे से शाम 5 बजे तक (कैंपस क्षेत्र)",
    visitingHoursEnglish: "9:00 AM to 5:00 PM (campus grounds)",
    location: "सिविल लाइंस, प्रयागराज",
    locationEnglish: "Civil Lines, Prayagraj",
    image: "/images/allahabad_university.avif",
    specialFeatures: [
      "भारत का चौथा सबसे पुराना विश्वविद्यालय",
      "'पूरब का ऑक्सफ़ोर्ड' की उपाधि",
      "औपनिवेशिक स्थापत्य शैली का परिसर",
    ],
    specialFeaturesEnglish: [
      "India's fourth-oldest university",
      "Nicknamed the 'Oxford of the East'",
      "Campus built in colonial-era architectural style",
    ],
  },
  {
    name: "Khusro Bagh",
    nameHindi: "खुसरो बाग़",
    category: "Historical",
    descriptionHindi:
      "मुग़ल शैली में बना यह विशाल उद्यान सम्राट जहाँगीर के पुत्र शहज़ादा खुसरो और उनकी माँ की मक़बरों के लिए जाना जाता है।",
    descriptionEnglish:
      "This large Mughal-style garden is known for the tombs of Prince Khusrau, son of Emperor Jahangir, and his mother.",
    importance:
      "मुग़लकालीन बाग़-मक़बरा स्थापत्य का सुंदर उदाहरण, इतिहास व वास्तुकला प्रेमियों के लिए महत्वपूर्ण।",
    importanceEnglish:
      "A fine example of Mughal-era garden-tomb architecture, notable for history and architecture enthusiasts.",
    visitingHours: "सुबह 6 बजे से शाम 6 बजे तक",
    visitingHoursEnglish: "6:00 AM to 6:00 PM",
    location: "जॉर्जटाउन के निकट, प्रयागराज रेलवे स्टेशन के पास",
    locationEnglish: "Near Georgetown, close to Prayagraj railway station",
    image: "/images/khusro_bagh.jpg",
    specialFeatures: [
      "शहज़ादा खुसरो की मक़बरा",
      "मुग़ल शैली का विशाल उद्यान",
      "रेलवे स्टेशन से नज़दीक",
    ],
    specialFeaturesEnglish: [
      "Tomb of Prince Khusrau",
      "A large Mughal-style garden",
      "Close to the railway station",
    ],
  },
];

const other: SeedPlace[] = [
  {
    name: "Kumbh Mela Grounds",
    nameHindi: "कुम्भ मेला क्षेत्र",
    category: "Other",
    descriptionHindi:
      "संगम के आस-पास की विशाल भूमि, जो हर 12 वर्ष में महाकुम्भ और हर 6 वर्ष में अर्धकुम्भ के लिए एक अस्थायी नगर में बदल जाती है।",
    descriptionEnglish:
      "The vast land around the Sangam, transformed into a temporary tent city every 12 years for the Maha Kumbh and every 6 years for the Ardh Kumbh.",
    importance:
      "विश्व का सबसे बड़ा धार्मिक व सांस्कृतिक समागम, यूनेस्को की अमूर्त सांस्कृतिक धरोहर सूची में शामिल।",
    importanceEnglish:
      "The world's largest religious and cultural gathering, inscribed on UNESCO's Intangible Cultural Heritage list.",
    visitingHours: "कुम्भ मेले की अवधि के दौरान चौबीसों घंटे",
    visitingHoursEnglish: "Open 24 hours during the Kumbh Mela period",
    location: "संगम क्षेत्र, प्रयागराज",
    locationEnglish: "Sangam area, Prayagraj",
    image: "/images/mahakumbh.jpg",
    specialFeatures: [
      "यूनेस्को अमूर्त सांस्कृतिक धरोहर",
      "करोड़ों श्रद्धालुओं का समागम",
      "साधु-संतों की शोभायात्रा व शाही स्नान",
    ],
    specialFeaturesEnglish: [
      "UNESCO Intangible Cultural Heritage",
      "Gathering of tens of millions of devotees",
      "Grand processions and royal baths of saints and ascetics",
    ],
    featured: true,
  },
  {
    name: "Allahabad Museum",
    nameHindi: "इलाहाबाद संग्रहालय",
    category: "Other",
    descriptionHindi:
      "चंद्रशेखर आज़ाद पार्क में स्थित यह संग्रहालय पुरातात्विक वस्तुओं, लघु चित्रों, शिल्पकृतियों व स्वतंत्रता संग्राम से जुड़ी सामग्री का संग्रह प्रस्तुत करता है।",
    descriptionEnglish:
      "Located within Chandrashekhar Azad Park, this museum showcases archaeological artifacts, miniature paintings, sculptures and material related to the freedom struggle.",
    importance:
      "उत्तर भारत के प्रमुख संग्रहालयों में से एक, क्षेत्रीय इतिहास व कला को समझने के लिए महत्वपूर्ण।",
    importanceEnglish:
      "One of North India's major museums, important for understanding regional history and art.",
    visitingHours: "सुबह 10:30 बजे से शाम 4:30 बजे तक (सोमवार बंद)",
    visitingHoursEnglish: "10:30 AM to 4:30 PM (closed on Mondays)",
    location: "चंद्रशेखर आज़ाद पार्क, सिविल लाइंस, प्रयागराज",
    locationEnglish: "Chandrashekhar Azad Park, Civil Lines, Prayagraj",
    image: "/images/allahabad_museum.jpg",
    specialFeatures: [
      "पुरातात्विक वस्तुओं का संग्रह",
      "स्वतंत्रता संग्राम गैलरी",
      "लघु चित्रकला संग्रह",
    ],
    specialFeaturesEnglish: [
      "Collection of archaeological artifacts",
      "A freedom struggle gallery",
      "A collection of miniature paintings",
    ],
  },
];

const places: SeedPlace[] = [...temples, ...ghats, ...ashrams, ...historical, ...other];

async function seed() {
  await connectDB();

  // WARNING: this wipes the entire places collection before reseeding.
  // Only safe to run against an empty/dev database.
  await Place.deleteMany({});

  const docs = places.map((place) => ({
    name: place.name,
    nameHindi: place.nameHindi,
    category: place.category,
    location: place.location,
    locationEnglish: place.locationEnglish,
    descriptionHindi: place.descriptionHindi,
    descriptionEnglish: place.descriptionEnglish,
    visitingHours: place.visitingHours,
    visitingHoursEnglish: place.visitingHoursEnglish,
    importance: place.importance,
    importanceEnglish: place.importanceEnglish,
    specialFeatures: place.specialFeatures,
    specialFeaturesEnglish: place.specialFeaturesEnglish,
    imageUrl: place.image,
    status: "approved" as const,
    featured: Boolean(place.featured),
    reviewedAt: new Date(),
  }));

  await Place.insertMany(docs);

  const byCategory = docs.reduce<Record<string, number>>((acc, d) => {
    acc[d.category] = (acc[d.category] || 0) + 1;
    return acc;
  }, {});

  console.log(`Seeded ${docs.length} places as approved:`, byCategory);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
