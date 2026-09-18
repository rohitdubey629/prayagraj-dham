// Section 12 — commonly encountered names/titles for major deities.
// Note: not every name carries exactly the same theological nuance in every
// tradition or region — these are widely recognized names, not a claim of
// uniform meaning everywhere.
export const deityNames = [
  {
    id: "shiva",
    deity: { hi: "शिव", en: "Shiva" },
    names: [
      { name: { hi: "महादेव", en: "Mahadeva" }, meaning: { hi: "महान देवता", en: "The great god" } },
      { name: { hi: "शंकर", en: "Shankara" }, meaning: { hi: "मंगलकारी देने वाला", en: "One who grants auspiciousness" } },
      { name: { hi: "नीलकंठ", en: "Neelkantha" }, meaning: { hi: "नीले कंठ वाला", en: "The blue-throated one" } },
      { name: { hi: "पशुपति", en: "Pashupati" }, meaning: { hi: "सभी प्राणियों के स्वामी", en: "Lord of all creatures" } },
      { name: { hi: "नटराज", en: "Nataraja" }, meaning: { hi: "ब्रह्मांडीय नृत्य के स्वामी", en: "Lord of the cosmic dance" } },
      { name: { hi: "रुद्र", en: "Rudra" }, meaning: { hi: "एक प्राचीन वैदिक नाम, तूफान व रूपांतरण से जुड़ा", en: "An older Vedic name, associated with storm and transformation" } },
    ],
  },
  {
    id: "vishnu",
    deity: { hi: "विष्णु", en: "Vishnu" },
    names: [
      { name: { hi: "नारायण", en: "Narayana" }, meaning: { hi: "जो ब्रह्मांडीय जल में विराजमान/व्याप्त हैं", en: "One who rests on/pervades the cosmic waters" } },
      { name: { hi: "हरि", en: "Hari" }, meaning: { hi: "दुःख हरने वाले", en: "One who removes suffering" } },
      { name: { hi: "गोविंद", en: "Govinda" }, meaning: { hi: "गायों/पृथ्वी के रक्षक", en: "Protector of cows/the earth" } },
      { name: { hi: "माधव", en: "Madhava" }, meaning: { hi: "वसंत से जुड़े, या लक्ष्मी (श्री) के पति", en: "Associated with spring, or consort of Lakshmi (Sri)" } },
      { name: { hi: "केशव", en: "Keshava" }, meaning: { hi: "सुंदर, लंबे बालों वाले; केशी असुर से भी जुड़ा", en: "One with fine, long hair; also linked to the demon Keshi" } },
    ],
  },
  {
    id: "krishna",
    deity: { hi: "कृष्ण", en: "Krishna" },
    names: [
      { name: { hi: "गोविंद", en: "Govinda" }, meaning: { hi: "गायों के रक्षक", en: "Protector of cows" } },
      { name: { hi: "गोपाल", en: "Gopala" }, meaning: { hi: "गोपालक", en: "Cowherd" } },
      { name: { hi: "मधुसूदन", en: "Madhusudana" }, meaning: { hi: "मधु असुर का वध करने वाले", en: "Slayer of the demon Madhu" } },
      { name: { hi: "वासुदेव", en: "Vasudeva" }, meaning: { hi: "वासुदेव के पुत्र", en: "Son of Vasudeva" } },
      { name: { hi: "श्यामसुंदर", en: "Shyamsundara" }, meaning: { hi: "सुंदर श्याम-वर्ण वाले", en: "The beautiful dark-hued one" } },
    ],
  },
  {
    id: "rama",
    deity: { hi: "राम", en: "Rama" },
    names: [
      { name: { hi: "राघव", en: "Raghava" }, meaning: { hi: "राजा रघु के वंशज", en: "Descendant of King Raghu" } },
      { name: { hi: "रघुनाथ", en: "Raghunatha" }, meaning: { hi: "रघुकुल के स्वामी", en: "Lord of the Raghu dynasty" } },
      { name: { hi: "रामचंद्र", en: "Ramachandra" }, meaning: { hi: "चंद्रमा के समान राम", en: "Rama, likened to the moon" } },
      { name: { hi: "दाशरथि", en: "Dasharathi" }, meaning: { hi: "राजा दशरथ के पुत्र", en: "Son of King Dasharatha" } },
    ],
  },
  {
    id: "ganesha",
    deity: { hi: "गणेश", en: "Ganesha" },
    names: [
      { name: { hi: "गणपति", en: "Ganapati" }, meaning: { hi: "गणों (अनुचरों) के स्वामी", en: "Lord of the ganas (attendants)" } },
      { name: { hi: "विनायक", en: "Vinayaka" }, meaning: { hi: "सर्वोच्च नेता / विघ्नहर्ता", en: "The supreme leader / remover of obstacles" } },
      { name: { hi: "विघ्नहर्ता", en: "Vighnaharta" }, meaning: { hi: "बाधाओं को दूर करने वाले", en: "Remover of obstacles" } },
      { name: { hi: "एकदंत", en: "Ekadanta" }, meaning: { hi: "एक ही दाँत वाले", en: "One with a single tusk" } },
      { name: { hi: "लंबोदर", en: "Lambodara" }, meaning: { hi: "बड़े उदर वाले", en: "One with a large belly" } },
    ],
  },
  {
    id: "devi",
    deity: { hi: "देवी", en: "Devi (the Goddess)" },
    names: [
      { name: { hi: "अंबा / अंबिका", en: "Amba / Ambika" }, meaning: { hi: "माता", en: "Mother" } },
      { name: { hi: "जगदंबा", en: "Jagadamba" }, meaning: { hi: "जगत की माता", en: "Mother of the world" } },
      { name: { hi: "भवानी", en: "Bhavani" }, meaning: { hi: "जीवन/अस्तित्व देने वाली", en: "Giver of life/existence" } },
      { name: { hi: "शक्ति", en: "Shakti" }, meaning: { hi: "शक्ति/ऊर्जा, अक्सर देवी के लिए सामान्य शब्द के रूप में प्रयुक्त", en: "Power/energy, often used as a general term for the Goddess" } },
    ],
  },
];
