// A curated, representative sample of major temples grouped by region.
// Structured so more entries can be added later without changing the UI.
export const templesByRegion = [
  {
    region: { hi: "उत्तर भारत", en: "North India" },
    temples: [
      { id: "kashi-vishwanath", name: { hi: "काशी विश्वनाथ मंदिर", en: "Kashi Vishwanath Temple" }, city: { hi: "वाराणसी, उत्तर प्रदेश", en: "Varanasi, Uttar Pradesh" }, deity: { hi: "शिव", en: "Shiva" }, why: { hi: "गंगा तट पर स्थित बारह ज्योतिर्लिंगों में से एक।", en: "One of the twelve Jyotirlingas, on the banks of the Ganga." }, festival: { hi: "महाशिवरात्रि", en: "Maha Shivaratri" } },
      { id: "vaishno-devi-temple", name: { hi: "वैष्णो देवी मंदिर", en: "Vaishno Devi Temple" }, city: { hi: "कटरा, जम्मू और कश्मीर", en: "Katra, Jammu and Kashmir" }, deity: { hi: "देवी (वैष्णो देवी)", en: "Devi (Vaishno Devi)" }, why: { hi: "भारत के सर्वाधिक देखे जाने वाले तीर्थ स्थलों में से एक, पर्वतीय पैदल यात्रा से पहुँचा जाता है।", en: "One of the most visited pilgrimage sites in India, reached via a mountain trek." }, festival: { hi: "नवरात्रि", en: "Navratri" } },
      { id: "ram-mandir", name: { hi: "राम मंदिर", en: "Ram Mandir" }, city: { hi: "अयोध्या, उत्तर प्रदेश", en: "Ayodhya, Uttar Pradesh" }, deity: { hi: "राम", en: "Rama" }, why: { hi: "परंपरागत रूप से राम के जन्मस्थान माने जाने वाले स्थल पर निर्मित।", en: "Built at the site traditionally regarded as Rama's birthplace." }, festival: { hi: "रामनवमी", en: "Ram Navami" } },
    ],
  },
  {
    region: { hi: "दक्षिण भारत", en: "South India" },
    temples: [
      { id: "tirupati-temple", name: { hi: "तिरुमला वेंकटेश्वर मंदिर", en: "Tirumala Venkateswara Temple" }, city: { hi: "तिरुपति, आंध्र प्रदेश", en: "Tirupati, Andhra Pradesh" }, deity: { hi: "विष्णु (वेंकटेश्वर)", en: "Vishnu (Venkateswara)" }, why: { hi: "विश्व के सर्वाधिक देखे जाने वाले और सबसे संपन्न मंदिरों में से एक।", en: "One of the most visited and wealthiest temples in the world." }, festival: { hi: "ब्रह्मोत्सवम्", en: "Brahmotsavam" } },
      { id: "meenakshi-temple", name: { hi: "मीनाक्षी अम्मन मंदिर", en: "Meenakshi Amman Temple" }, city: { hi: "मदुरई, तमिलनाडु", en: "Madurai, Tamil Nadu" }, deity: { hi: "मीनाक्षी (पार्वती) व सुंदरेश्वर (शिव)", en: "Meenakshi (Parvati) and Sundareswarar (Shiva)" }, why: { hi: "अपने ऊँचे, अलंकृत गोपुरम् व द्रविड़ स्थापत्य के लिए प्रसिद्ध।", en: "Renowned for its towering, sculpted gopurams and Dravidian architecture." }, festival: { hi: "मीनाक्षी तिरुकल्याणम्", en: "Meenakshi Thirukalyanam" } },
      { id: "brihadeeswarar-temple", name: { hi: "बृहदेश्वर मंदिर", en: "Brihadeeswarar Temple" }, city: { hi: "तंजावुर, तमिलनाडु", en: "Thanjavur, Tamil Nadu" }, deity: { hi: "शिव", en: "Shiva" }, why: { hi: "यूनेस्को विश्व धरोहर, चोल-कालीन मंदिर जो अपने स्थापत्य के लिए जाना जाता है।", en: "A UNESCO World Heritage Chola-era temple known for its architecture." }, festival: { hi: "महाशिवरात्रि", en: "Maha Shivaratri" } },
    ],
  },
  {
    region: { hi: "पूर्वी भारत", en: "East India" },
    temples: [
      { id: "jagannath-temple", name: { hi: "जगन्नाथ मंदिर", en: "Jagannath Temple" }, city: { hi: "पुरी, ओडिशा", en: "Puri, Odisha" }, deity: { hi: "जगन्नाथ (विष्णु/कृष्ण)", en: "Jagannath (Vishnu/Krishna)" }, why: { hi: "चार धाम स्थलों में से एक, वार्षिक रथ उत्सव के लिए प्रसिद्ध।", en: "One of the four Char Dham sites, famed for its annual chariot festival." }, festival: { hi: "रथ यात्रा", en: "Rath Yatra" } },
      { id: "kalighat-temple", name: { hi: "कालीघाट काली मंदिर", en: "Kalighat Kali Temple" }, city: { hi: "कोलकाता, पश्चिम बंगाल", en: "Kolkata, West Bengal" }, deity: { hi: "काली", en: "Kali" }, why: { hi: "शक्ति पीठों में से एक, एक प्रमुख शाक्त तीर्थ केंद्र।", en: "One of the Shakti Peethas, a major Shakta pilgrimage centre." }, festival: { hi: "काली पूजा", en: "Kali Puja" } },
      { id: "kamakhya-temple", name: { hi: "कामाख्या मंदिर", en: "Kamakhya Temple" }, city: { hi: "गुवाहाटी, असम", en: "Guwahati, Assam" }, deity: { hi: "कामाख्या (देवी)", en: "Kamakhya (Devi)" }, why: { hi: "तांत्रिक व शाक्त परंपरा का एक प्रमुख केंद्र।", en: "A major centre of Tantric and Shakta tradition." }, festival: { hi: "अंबुबाची मेला", en: "Ambubachi Mela" } },
    ],
  },
  {
    region: { hi: "पश्चिम भारत", en: "West India" },
    temples: [
      { id: "somnath-temple", name: { hi: "सोमनाथ मंदिर", en: "Somnath Temple" }, city: { hi: "गुजरात", en: "Gujarat" }, deity: { hi: "शिव", en: "Shiva" }, why: { hi: "बारह ज्योतिर्लिंगों में प्रथम, इतिहास में कई बार पुनर्निर्मित।", en: "The first among the twelve Jyotirlingas, rebuilt several times through history." }, festival: { hi: "महाशिवरात्रि", en: "Maha Shivaratri" } },
      { id: "siddhivinayak-temple", name: { hi: "सिद्धिविनायक मंदिर", en: "Siddhivinayak Temple" }, city: { hi: "मुंबई, महाराष्ट्र", en: "Mumbai, Maharashtra" }, deity: { hi: "गणेश", en: "Ganesha" }, why: { hi: "भारत के सर्वाधिक देखे जाने वाले गणेश मंदिरों में से एक।", en: "One of the most visited Ganesha temples in India." }, festival: { hi: "गणेश चतुर्थी", en: "Ganesh Chaturthi" } },
      { id: "dwarkadhish-temple", name: { hi: "द्वारकाधीश मंदिर", en: "Dwarkadhish Temple" }, city: { hi: "द्वारका, गुजरात", en: "Dwarka, Gujarat" }, deity: { hi: "कृष्ण", en: "Krishna" }, why: { hi: "चार धाम स्थलों में से एक, परंपरागत रूप से कृष्ण की राजधानी।", en: "One of the four Char Dham sites, traditionally Krishna's capital city." }, festival: { hi: "जन्माष्टमी", en: "Janmashtami" } },
    ],
  },
  {
    region: { hi: "मध्य भारत", en: "Central India" },
    temples: [
      { id: "mahakaleshwar-temple", name: { hi: "महाकालेश्वर मंदिर", en: "Mahakaleshwar Temple" }, city: { hi: "उज्जैन, मध्य प्रदेश", en: "Ujjain, Madhya Pradesh" }, deity: { hi: "शिव", en: "Shiva" }, why: { hi: "बारह ज्योतिर्लिंगों में से एक, अपनी विशिष्ट भस्म आरती के लिए जाना जाता है।", en: "One of the twelve Jyotirlingas, known for its distinctive Bhasma Aarti." }, festival: { hi: "महाशिवरात्रि", en: "Maha Shivaratri" } },
      { id: "khajuraho-temples", name: { hi: "खजुराहो मंदिर समूह", en: "Khajuraho Temple Group" }, city: { hi: "मध्य प्रदेश", en: "Madhya Pradesh" }, deity: { hi: "शिव व विष्णु (मंदिर समूह)", en: "Shiva and Vishnu (temple group)" }, why: { hi: "यूनेस्को विश्व धरोहर स्थल, मध्यकालीन मंदिर स्थापत्य व मूर्तिकला के लिए प्रसिद्ध।", en: "A UNESCO World Heritage site renowned for medieval temple architecture and sculpture." }, festival: { hi: "खजुराहो नृत्य महोत्सव (सांस्कृतिक, धार्मिक नहीं)", en: "Khajuraho Dance Festival (cultural, not strictly religious)" } },
    ],
  },
  {
    region: { hi: "हिमालयी क्षेत्र", en: "Himalayan Region" },
    temples: [
      { id: "kedarnath-temple", name: { hi: "केदारनाथ मंदिर", en: "Kedarnath Temple" }, city: { hi: "उत्तराखंड", en: "Uttarakhand" }, deity: { hi: "शिव", en: "Shiva" }, why: { hi: "बारह ज्योतिर्लिंगों में से एक और छोटा चार धाम परिपथ का हिस्सा।", en: "One of the twelve Jyotirlingas and part of the Chota Char Dham circuit." }, festival: { hi: "केदारनाथ कपाट खुलने/बंद होने के अनुष्ठान", en: "Kedarnath opening/closing ceremonies" } },
      { id: "badrinath-temple", name: { hi: "बद्रीनाथ मंदिर", en: "Badrinath Temple" }, city: { hi: "उत्तराखंड", en: "Uttarakhand" }, deity: { hi: "विष्णु (बद्रीनारायण)", en: "Vishnu (Badrinarayan)" }, why: { hi: "अखिल भारतीय चार धाम और छोटा चार धाम, दोनों परिपथों का हिस्सा।", en: "Part of both the pan-Indian Char Dham and the Chota Char Dham circuits." }, festival: { hi: "बद्री-केदार उत्सव", en: "Badri-Kedar Utsav" } },
    ],
  },
];
