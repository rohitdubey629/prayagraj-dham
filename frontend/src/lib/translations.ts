// lib/translations.ts
// Central Hindi/English dictionary for all static UI text on the site.
// Dynamic place/temple content from the backend is localized separately (see lib/placeLocalization.ts).

export interface Bilingual {
  hi: string;
  en: string;
}

export const translations = {
  navbar: {
    home: { hi: "मुखपृष्ठ", en: "Home" },
    sangam: { hi: "त्रिवेणी संगम", en: "Triveni Sangam" },
    kumbh: { hi: "कुम्भ मेला", en: "Kumbh Mela" },
    blog: { hi: "ब्लॉग", en: "Blog" },
    temples: { hi: "मंदिर", en: "Temples" },
    dharmaDiary: { hi: "धर्म डायरी", en: "Dharma Diary" },
    myYatra: { hi: "मेरी यात्रा", en: "My Yatra" },
    addPlace: { hi: "जगह जोड़ें", en: "Add a Place" },
    addMenu: { hi: "जोड़ें", en: "Add" },
    admin: { hi: "प्रशासन", en: "Admin" },
    login: { hi: "लॉगिन", en: "Login" },
    logout: { hi: "लॉगआउट", en: "Logout" },
    brand: { hi: "प्रयागराज धाम", en: "Prayagraj Dham" },
  },

  footer: {
    tagline: { hi: "त्रिवेणी संगम की पावन भूमि", en: "The sacred land of Triveni Sangam" },
    about: { hi: "हमारे बारे में", en: "About Us" },
    rights: { hi: "सर्वाधिकार सुरक्षित", en: "All rights reserved" },
  },

  hero: {
    title: { hi: "पवित्र प्रयागराज", en: "Sacred Prayagraj" },
    subtitleLine1: {
      hi: "त्रिवेणी संगम की पावन भूमि, कुम्भ की अद्भुत नगरी",
      en: "The sacred land of Triveni Sangam, the wondrous city of Kumbh",
    },
    subtitleLine2: {
      hi: "जहाँ गंगा, यमुना और सरस्वती का होता है मिलन",
      en: "Where the Ganga, Yamuna and Saraswati rivers meet",
    },
    ctaSangam: { hi: "त्रिवेणी संगम", en: "Triveni Sangam" },
    ctaKumbh: { hi: "कुम्भ मेला", en: "Kumbh Mela" },
  },

  featuredPosts: {
    heading: { hi: "विशेष लेख", en: "Featured Articles" },
    readMore: { hi: "और पढ़ें", en: "Read More" },
  },

  postList: {
    readMore: { hi: "और पढ़ें", en: "Read More" },
    by: { hi: "द्वारा", en: "By" },
  },

  blog: {
    title: { hi: "प्रयागराज ब्लॉग", en: "Prayagraj Blog" },
    postNotFound: { hi: "लेख नहीं मिला", en: "Post not found" },
    fillerPara1: {
      hi: "प्रयागराज, भारत के प्राचीनतम शहरों में से एक है, जो अत्यधिक आध्यात्मिक महत्व रखता है। यह शहर कुंभ मेले के लिए प्रसिद्ध है, जो दुनिया का सबसे बड़ा धार्मिक आयोजन है और हर 12 वर्षों में होता है।",
      en: "Prayagraj is one of India's oldest cities, holding immense spiritual significance. The city is famous for the Kumbh Mela, the world's largest religious gathering, held every 12 years.",
    },
    fillerPara2: {
      hi: "आध्यात्मिक महत्व से परे, प्रयागराज समृद्ध सांस्कृतिक विरासत, ऐतिहासिक स्थलों, शैक्षणिक संस्थानों और पवित्र नदियों के किनारे सुंदर घाटों के लिए जाना जाता है।",
      en: "Beyond its spiritual significance, Prayagraj is known for its rich cultural heritage, historical sites, educational institutions and beautiful ghats along the sacred rivers.",
    },
  },

  dailyDarshan: {
    heading: { hi: "दैनिक दर्शन कार्यक्रम", en: "Daily Darshan Schedule" },
    ghatDarshanHeading: { hi: "🌊 घाट दर्शन", en: "🌊 Ghat Darshan" },
    templeDarshanHeading: { hi: "🏛️ मंदिर दर्शन", en: "🏛️ Temple Darshan" },
    viewFullSchedule: { hi: "पूरा कार्यक्रम देखें", en: "View Full Schedule" },
    ghatDarshans: [
      {
        time: { hi: "प्रातः 5:00 - 6:00", en: "5:00 - 6:00 AM" },
        event: { hi: "मंगला आरती", en: "Mangala Aarti" },
        location: { hi: "त्रिवेणी घाट", en: "Triveni Ghat" },
      },
      {
        time: { hi: "सायं 6:30 - 7:30", en: "6:30 - 7:30 PM" },
        event: { hi: "गंगा आरती", en: "Ganga Aarti" },
        location: { hi: "दरियाबाद घाट", en: "Daryabad Ghat" },
      },
    ],
    templeDarshans: [
      {
        time: { hi: "रात्रि 8:00 - 9:00", en: "8:00 - 9:00 PM" },
        event: { hi: "शयन आरती", en: "Shayan Aarti" },
        location: { hi: "अक्षयवट मंदिर", en: "Akshayavat Temple" },
      },
      {
        time: { hi: "प्रातः 7:00 - 8:00", en: "7:00 - 8:00 AM" },
        event: { hi: "सप्तऋषि पूजा", en: "Saptrishi Puja" },
        location: { hi: "हनुमान मंदिर", en: "Hanuman Temple" },
      },
      {
        time: { hi: "दोपहर 12:00 - 12:30", en: "12:00 - 12:30 PM" },
        event: { hi: "राजभोग दर्शन", en: "Rajbhog Darshan" },
        location: { hi: "श्री वेणीमाधव मंदिर", en: "Shri Veni Madhav Temple" },
      },
    ],
  },

  darshanSchedule: {
    heading: { hi: "पूर्ण दर्शन कार्यक्रम", en: "Full Darshan Schedule" },
    subheading: {
      hi: "प्रयागराज के प्रमुख घाटों और मंदिरों में दैनिक पूजा-अर्चना का समय",
      en: "Daily worship timings at Prayagraj's major ghats and temples",
    },
    sections: [
      {
        title: { hi: "घाट दर्शन", en: "Ghat Darshan" },
        items: [
          {
            time: { hi: "प्रातः 5:00 - 6:00", en: "5:00 - 6:00 AM" },
            event: { hi: "मंगला आरती", en: "Mangala Aarti" },
            location: { hi: "त्रिवेणी घाट", en: "Triveni Ghat" },
          },
          {
            time: { hi: "सायं 6:30 - 7:30", en: "6:30 - 7:30 PM" },
            event: { hi: "गंगा आरती", en: "Ganga Aarti" },
            location: { hi: "दरियाबाद घाट", en: "Daryabad Ghat" },
          },
        ],
      },
      {
        title: { hi: "मंदिर दर्शन", en: "Temple Darshan" },
        items: [
          {
            time: { hi: "प्रातः 4:30 - रात्रि 10:00", en: "4:30 AM - 10:00 PM" },
            event: { hi: "मंदिर खुलने का समय", en: "Temple Opening Hours" },
            location: { hi: "बड़े हनुमान मंदिर", en: "Bade Hanuman Temple" },
          },
          {
            time: { hi: "प्रातः 5:00", en: "5:00 AM" },
            event: { hi: "प्रभात आरती", en: "Prabhat Aarti" },
            location: { hi: "बड़े हनुमान मंदिर", en: "Bade Hanuman Temple" },
          },
          {
            time: { hi: "दोपहर 12:00", en: "12:00 PM" },
            event: { hi: "राजभोग आरती", en: "Rajbhog Aarti" },
            location: { hi: "बड़े हनुमान मंदिर", en: "Bade Hanuman Temple" },
          },
          {
            time: { hi: "सायं 7:00", en: "7:00 PM" },
            event: { hi: "शयन आरती", en: "Shayan Aarti" },
            location: { hi: "बड़े हनुमान मंदिर", en: "Bade Hanuman Temple" },
          },
          {
            time: { hi: "प्रातः 6:00 - रात्रि 9:00", en: "6:00 AM - 9:00 PM" },
            event: { hi: "दर्शन समय", en: "Darshan Hours" },
            location: { hi: "अलोपि देवी मंदिर", en: "Alopi Devi Temple" },
          },
          {
            time: { hi: "सायं 6:30", en: "6:30 PM" },
            event: { hi: "शाम की आरती", en: "Evening Aarti" },
            location: { hi: "अलोपि देवी मंदिर", en: "Alopi Devi Temple" },
          },
          {
            time: { hi: "प्रातः 6:00 - रात्रि 9:00", en: "6:00 AM - 9:00 PM" },
            event: { hi: "दर्शन समय", en: "Darshan Hours" },
            location: { hi: "मनकामेश्वर मंदिर", en: "Mankameshwar Temple" },
          },
          {
            time: { hi: "प्रातः 7:00", en: "7:00 AM" },
            event: { hi: "सप्तऋषि पूजा", en: "Saptrishi Puja" },
            location: { hi: "हनुमान मंदिर (संकट मोचन)", en: "Hanuman Temple (Sankat Mochan)" },
          },
          {
            time: { hi: "दोपहर 12:00 - 12:30", en: "12:00 - 12:30 PM" },
            event: { hi: "राजभोग दर्शन", en: "Rajbhog Darshan" },
            location: { hi: "श्री वेणीमाधव मंदिर", en: "Shri Veni Madhav Temple" },
          },
          {
            time: { hi: "सायं 7:00", en: "7:00 PM" },
            event: { hi: "आरती", en: "Aarti" },
            location: { hi: "श्री वेणीमाधव मंदिर", en: "Shri Veni Madhav Temple" },
          },
        ],
      },
    ],
  },

  kumbhHighlights: {
    heading: { hi: "कुम्भ मेला", en: "Kumbh Mela" },
    intro: {
      hi: "प्रयागराज में कुम्भ मेला विश्व का सबसे बड़ा मानव समूह है जहाँ करोड़ों श्रद्धालु पवित्र स्नान के लिए एकत्रित होते हैं।",
      en: "The Kumbh Mela at Prayagraj is the largest gathering of humans in the world, where millions of devotees come together for a sacred bath.",
    },
    shloka: {
      hi: "\"प्रयागे तु त्रिवेणीति संगमो यत्र दृश्यते\nतत्र स्नात्वा नरो देवि परं ब्रह्माधिगच्छति\"",
      en: "\"At Prayag, where the Triveni confluence is seen,\nbathing there, one attains the Supreme Brahman\"",
    },
    highlights: [
      {
        title: { hi: "महाकुम्भ 2025", en: "Maha Kumbh 2025" },
        description: {
          hi: "अगला महाकुम्भ मेला जनवरी 2025 में प्रयागराज में",
          en: "The next Maha Kumbh Mela is in Prayagraj in January 2025",
        },
        date: { hi: "14 जनवरी - 26 फरवरी 2025", en: "14 January - 26 February 2025" },
      },
      {
        title: { hi: "शाही स्नान", en: "Shahi Snan" },
        description: {
          hi: "साधु-संतों का भव्य शाही स्नान देखने योग्य",
          en: "The grand royal bath of saints and sages is a sight to behold",
        },
        date: { hi: "मकर संक्रांति पर", en: "On Makar Sankranti" },
      },
      {
        title: { hi: "कल्पवास", en: "Kalpavas" },
        description: {
          hi: "पूरे माहौन तक पवित्र नदियों के किनारे तपस्या",
          en: "A month-long penance along the banks of the sacred rivers",
        },
        date: { hi: "1 माह की अवधि", en: "1 month duration" },
      },
    ],
  },

  featuredShlokas: {
    heading: { hi: "पवित्र वचन", en: "Sacred Verses" },
    viewAll: { hi: "सभी श्लोक देखें", en: "View All Shlokas" },
  },

  categorySliders: {
    heading: { hi: "प्रयागराज के पावन स्थल", en: "Sacred Sites of Prayagraj" },
    viewAll: { hi: "सभी देखें", en: "View All" },
    featuredBadge: { hi: "होम पेज पर", en: "Featured" },
  },

  about: {
    title: { hi: "प्रयागराज के बारे में", en: "About Prayagraj" },
    intro: {
      hi: "प्रयागराज, जिसे पहले इलाहाबाद के नाम से जाना जाता था, उत्तर प्रदेश राज्य का एक प्रमुख शहर है। यह प्रयागराज ज़िले का प्रशासनिक मुख्यालय है और उत्तर भारत के सबसे तेजी से विकसित होते शहरों में से एक है।",
      en: "Prayagraj, formerly known as Allahabad, is a major city in the state of Uttar Pradesh. It is the administrative headquarters of Prayagraj district and one of the fastest-developing cities in North India.",
    },
    historicalHeading: { hi: "ऐतिहासिक महत्व", en: "Historical Significance" },
    historicalText: {
      hi: "प्रयागराज भारत के सबसे प्राचीन और पवित्र शहरों में से एक है। इसे प्राचीन काल में प्रयाग कहा जाता था, जिसका अर्थ है 'यज्ञ स्थल'। यह शहर तीन पवित्र नदियों — गंगा, यमुना और अदृश्य सरस्वती — के संगम पर स्थित है, जिसे 'त्रिवेणी संगम' कहा जाता है। त्रिवेणी संगम पर स्नान को मोक्षदायक माना जाता है।",
      en: "Prayagraj is one of India's oldest and most sacred cities. In ancient times it was called Prayag, meaning 'place of sacrifice'. The city sits at the confluence of three sacred rivers — the Ganga, Yamuna and the unseen Saraswati — known as the 'Triveni Sangam'. Bathing at the Triveni Sangam is believed to grant salvation.",
    },
    culturalHeading: { hi: "सांस्कृतिक और धार्मिक धरोहर", en: "Cultural & Religious Heritage" },
    culturalText: {
      hi: "प्रयागराज कुंभ मेले के लिए विश्व प्रसिद्ध है, जो हर 12 वर्षों में आयोजित होता है और करोड़ों श्रद्धालु इसमें भाग लेते हैं। यह मेला हिंदू धर्म के सबसे पवित्र आयोजनों में से एक है। शहर में अनेक मंदिर हैं, जैसे हनुमान मंदिर (जहाँ लेटे हुए हनुमान जी की मूर्ति है), अलोपी देवी मंदिर, और भारत का एकमात्र अक्षयवट वृक्ष।",
      en: "Prayagraj is world-famous for the Kumbh Mela, held every 12 years, in which millions of devotees take part. It is one of the holiest gatherings in Hinduism. The city has many temples, such as the Hanuman Temple (home to the reclining idol of Lord Hanuman), the Alopi Devi Temple, and India's only Akshayavat (immortal banyan) tree.",
    },
    touristHeading: { hi: "पर्यटन स्थल", en: "Tourist Places" },
    touristIntro: { hi: "प्रयागराज में कई दर्शनीय स्थल हैं जैसे:", en: "Prayagraj has many places worth visiting, such as:" },
    touristList: [
      { hi: "इलाहाबाद किला – मुग़ल बादशाह अकबर द्वारा निर्मित।", en: "Allahabad Fort – built by the Mughal emperor Akbar." },
      { hi: "आनंद भवन – नेहरू परिवार का निवास स्थान और अब संग्रहालय।", en: "Anand Bhavan – former residence of the Nehru family, now a museum." },
      {
        hi: "ऑल सेंट्स कैथेड्रल – ब्रिटिशकालीन चर्च जिसे \"पट्थर गिरजाघर\" भी कहा जाता है।",
        en: "All Saints Cathedral – a British-era church also known as the \"Patthar Girjaghar\" (stone church).",
      },
      {
        hi: "चंद्रशेखर आज़ाद पार्क – जहाँ स्वतंत्रता सेनानी आज़ाद ने अपने प्राण त्यागे थे।",
        en: "Chandrashekhar Azad Park – where the freedom fighter Azad laid down his life.",
      },
    ],
    modernHeading: { hi: "आधुनिक प्रयागराज", en: "Modern Prayagraj" },
    modernText: {
      hi: "आज का प्रयागराज एक प्रमुख शैक्षिक, न्यायिक और प्रशासनिक केंद्र है। यहाँ इलाहाबाद उच्च न्यायालय स्थित है, जो भारत के सबसे पुराने उच्च न्यायालयों में से एक है। प्रयागराज विश्वविद्यालय भारत के प्राचीनतम केंद्रीय विश्वविद्यालयों में गिना जाता है। इसके अलावा, शहर में कई आईएएस/पीसीएस कोचिंग संस्थान भी हैं, जिससे यह शिक्षा का केंद्र बन गया है।",
      en: "Today's Prayagraj is a major educational, judicial and administrative hub. It is home to the Allahabad High Court, one of India's oldest high courts. Prayagraj University is counted among India's oldest central universities. The city also has many IAS/PCS coaching institutes, making it a well-known center of education.",
    },
    specialHeading: { hi: "विशेषताएं", en: "Highlights" },
    specialText: {
      hi: "प्रयागराज को 'तीर्थराज' यानी 'तीर्थों का राजा' कहा जाता है। यह शहर भारत के धार्मिक, ऐतिहासिक और सांस्कृतिक गौरव का प्रतीक है। यहाँ की आस्था, आज़ादी की विरासत, और आध्यात्मिकता इसे एक विशिष्ट पहचान प्रदान करती है।",
      en: "Prayagraj is called 'Teerthraj' — the 'king of pilgrimage sites'. The city is a symbol of India's religious, historical and cultural pride. Its faith, legacy of freedom, and spirituality give it a unique identity.",
    },
  },

  kumbhPage: {
    title: { hi: "कुम्भ मेला", en: "Kumbh Mela" },
    intro: {
      hi: "प्रयागराज कुम्भ मेला विश्व का सबसे बड़ा धार्मिक समागम है जहाँ करोड़ों श्रद्धालु पवित्र स्नान के लिए एकत्रित होते हैं। यह मेला प्रत्येक 12 वर्ष में प्रयागराज में आयोजित किया जाता है।",
      en: "The Prayagraj Kumbh Mela is the world's largest religious gathering, where millions of devotees come together for a sacred bath. It is held in Prayagraj every 12 years.",
    },
    mythHeading: { hi: "कुम्भ का पौराणिक महत्व", en: "Mythological Significance of Kumbh" },
    mythText: {
      hi: "पुराणों के अनुसार समुद्र मंथन के दौरान अमृत कलश से चार स्थानों पर अमृत की बूँदें गिरी थीं - प्रयागराज, हरिद्वार, उज्जैन और नासिक। इन स्थानों पर कुम्भ मेले का आयोजन होता है।",
      en: "According to the Puranas, during the churning of the ocean, drops of the nectar of immortality fell at four places — Prayagraj, Haridwar, Ujjain and Nashik. The Kumbh Mela is held at these places.",
    },
    typesHeading: { hi: "कुम्भ के प्रकार", en: "Types of Kumbh Mela" },
    types: [
      {
        name: { hi: "महाकुम्भ", en: "Maha Kumbh" },
        description: {
          hi: "प्रयागराज में हर 144 वर्ष (12 पूर्ण कुम्भ) में एक बार आयोजित सबसे विशाल आयोजन। 2025 का कुम्भ महाकुम्भ था।",
          en: "The grandest gathering, held at Prayagraj once every 144 years (after 12 Purna Kumbhs). The 2025 Kumbh was a Maha Kumbh.",
        },
      },
      {
        name: { hi: "पूर्ण कुम्भ", en: "Purna Kumbh" },
        description: {
          hi: "प्रत्येक स्थान पर हर 12 वर्ष में आयोजित होने वाला मुख्य कुम्भ मेला।",
          en: "The main Kumbh Mela held at each of the four sites once every 12 years.",
        },
      },
      {
        name: { hi: "अर्धकुम्भ", en: "Ardh Kumbh" },
        description: {
          hi: "हरिद्वार और प्रयागराज में हर 6 वर्ष (दो पूर्ण कुम्भ के बीच) में आयोजित होने वाला मेला।",
          en: "Held every 6 years at Haridwar and Prayagraj, midway between two Purna Kumbhs.",
        },
      },
    ],
    locationsHeading: { hi: "कुम्भ के चार पवित्र स्थान", en: "The Four Sacred Kumbh Sites" },
    locations: [
      {
        name: { hi: "प्रयागराज", en: "Prayagraj" },
        river: { hi: "त्रिवेणी संगम (गंगा-यमुना-सरस्वती)", en: "Triveni Sangam (Ganga-Yamuna-Saraswati)" },
      },
      {
        name: { hi: "हरिद्वार", en: "Haridwar" },
        river: { hi: "गंगा नदी", en: "River Ganga" },
      },
      {
        name: { hi: "उज्जैन", en: "Ujjain" },
        river: { hi: "क्षिप्रा नदी", en: "River Shipra" },
      },
      {
        name: { hi: "नासिक", en: "Nashik" },
        river: { hi: "गोदावरी नदी", en: "River Godavari" },
      },
    ],
    cycleNote: {
      hi: "बृहस्पति और सूर्य की राशि के अनुसार यह चारों स्थान बारी-बारी से हर लगभग 3 वर्ष में कुम्भ मेले की मेज़बानी करते हैं, इस तरह हर स्थान पर 12 वर्ष में एक बार कुम्भ लौटता है।",
      en: "Based on the positions of Jupiter and the Sun, these four sites take turns hosting the Kumbh roughly every 3 years, so the Kumbh returns to each site once every 12 years.",
    },
    eventsHeading: { hi: "कुम्भ मेले के आयोजन", en: "Kumbh Mela Events" },
    eventsLoading: { hi: "लोड हो रहा है...", en: "Loading..." },
    eventsError: { hi: "आयोजन लोड नहीं हो पाए।", en: "Could not load events." },
    eventsEmpty: { hi: "अभी कोई आयोजन नहीं जोड़ा गया है।", en: "No events added yet." },
    upcomingBadge: { hi: "आगामी", en: "Upcoming" },
    completedBadge: { hi: "संपन्न", en: "Completed" },
    approximateNote: { hi: "(अनुमानित)", en: "(approximate)" },
    attractionsHeading: { hi: "आकर्षण", en: "Attractions" },
    attractions: [
      { hi: "साधु-संतों का शाही स्नान", en: "The royal bath of saints and sages" },
      { hi: "अखाड़ों की भव्य शोभायात्रा", en: "The grand procession of the akharas" },
      { hi: "धार्मिक संगोष्ठियाँ एवं भजन-कीर्तन", en: "Religious discourses and devotional singing" },
      { hi: "कल्पवासी तपस्वियों की तपस्या", en: "The penance of Kalpavasi ascetics" },
      { hi: "गंगा आरती की भव्य व्यवस्था", en: "The grand arrangement of Ganga Aarti" },
    ],
  },

  sangamPage: {
    title: { hi: "त्रिवेणी संगम", en: "Triveni Sangam" },
    intro: {
      hi: "त्रिवेणी संगम हिन्दुओं का सबसे पवित्र तीर्थस्थलों में से एक है जहाँ पवित्र नदियाँ गंगा, यमुना और अदृश्य सरस्वती का मिलन होता है। यह स्थान मोक्ष प्राप्ति के लिए अत्यंत शुभ माना जाता है।",
      en: "Triveni Sangam is one of the holiest pilgrimage sites for Hindus, where the sacred rivers Ganga, Yamuna and the unseen Saraswati meet. This place is considered highly auspicious for attaining salvation.",
    },
    mythHeading: { hi: "पौराणिक महत्व", en: "Mythological Significance" },
    mythText: {
      hi: "हिन्दू शास्त्रों के अनुसार, त्रिवेणी संगम पर स्नान करने से सभी पापों से मुक्ति मिलती है। स्कन्द पुराण में वर्णित है कि यहाँ एक बार स्नान करने से अश्वमेध यज्ञ के समान पुण्य प्राप्त होता है।",
      en: "According to Hindu scriptures, bathing at the Triveni Sangam frees one from all sins. The Skanda Purana states that a single bath here grants merit equal to that of an Ashwamedha Yajna.",
    },
    featuresHeading: { hi: "विशेषताएँ", en: "Highlights" },
    features: [
      { hi: "गंगा (श्वेत), यमुना (नीली) और सरस्वती (अदृश्य) का संगम", en: "The confluence of Ganga (white), Yamuna (blue) and Saraswati (unseen)" },
      { hi: "कुम्भ मेले का मुख्य स्थल", en: "The main site of the Kumbh Mela" },
      { hi: "पितृ तर्पण के लिए उत्तम स्थान", en: "An excellent place for ancestral rites (Pitru Tarpan)" },
      { hi: "नाव से संगम स्नान की विशेष व्यवस्था", en: "Special boat arrangements for bathing at the confluence" },
    ],
    timingHeading: { hi: "स्नान का समय", en: "Bathing Time" },
    timingText: {
      hi: "संगम स्नान के लिए सूर्योदय से सूर्यास्त तक का समय उत्तम माना जाता है। विशेष अवसरों जैसे मकर संक्रांति, गंगा दशहरा और कुम्भ के दौरान स्नान का विशेष महत्व है।",
      en: "The time from sunrise to sunset is considered ideal for bathing at the Sangam. Bathing holds special significance on occasions like Makar Sankranti, Ganga Dussehra and the Kumbh Mela.",
    },
  },

  temples: {
    title: { hi: "प्रयागराज के प्रमुख मंदिर", en: "Major Temples of Prayagraj" },
    intro: {
      hi: "प्रयागराज, तीर्थराज के नाम से प्रसिद्ध, अनेक प्राचीन एवं दिव्य मंदिरों की नगरी है। यहाँ के मंदिरों का धार्मिक एवं ऐतिहासिक महत्व है।",
      en: "Prayagraj, famed as Teerthraj, is a city of many ancient and divine temples. These temples hold deep religious and historical significance.",
    },
    tipsHeading: { hi: "मंदिर दर्शन सुझाव", en: "Temple Visit Tips" },
    tips: [
      { hi: "प्रातःकाल का समय मंदिर दर्शन के लिए सर्वोत्तम", en: "Early morning is the best time for temple darshan" },
      { hi: "विनम्र वस्त्र धारण करें", en: "Wear modest clothing" },
      { hi: "मंदिर परिसर में चप्पल/जूते उतार दें", en: "Remove footwear inside the temple premises" },
      { hi: "मौन रहकर दर्शन करें", en: "Maintain silence during darshan" },
    ],
    loading: { hi: "लोड हो रहा है...", en: "Loading..." },
    loadError: { hi: "मंदिरों की जानकारी लोड नहीं हो पाई। कृपया बाद में पुनः प्रयास करें।", en: "Could not load temple information. Please try again later." },
    empty: { hi: "कोई मंदिर उपलब्ध नहीं है।", en: "No temples available." },
    viewDetails: { hi: "विस्तृत जानकारी →", en: "View Details →" },
    learnMoreDetailed: { hi: "विस्तार से जानें", en: "Learn More" },
    filterAll: { hi: "सभी", en: "All" },
    filterTemple: { hi: "मंदिर", en: "Temple" },
    filterGhat: { hi: "घाट", en: "Ghat" },
    filterAshram: { hi: "आश्रम", en: "Ashram" },
    filterHistorical: { hi: "ऐतिहासिक", en: "Historical" },
    filterOther: { hi: "अन्य", en: "Other" },
    noneInCategory: { hi: "इस श्रेणी में कोई स्थान नहीं है।", en: "No places in this category." },
    searchPlaceholder: { hi: "मंदिर या स्थान खोजें...", en: "Search temples or places..." },
    noSearchResults: { hi: "आपकी खोज से मेल खाता कोई स्थान नहीं मिला।", en: "No places match your search." },
  },

  templeDetails: {
    aboutHeading: { hi: "मंदिर के बारे में", en: "About the Temple" },
    importanceHeading: { hi: "धार्मिक महत्व", en: "Religious Significance" },
    timingHeading: { hi: "दर्शन का समय", en: "Visiting Hours" },
    locationHeading: { hi: "स्थान", en: "Location" },
    featuresHeading: { hi: "विशेषताएँ", en: "Special Features" },
    infoHeading: { hi: "दर्शन संबंधी जानकारी", en: "Visitor Information" },
    infoTips: [
      { hi: "मंदिर में फोटोग्राफी की अनुमति नहीं हो सकती", en: "Photography inside the temple may not be permitted" },
      { hi: "पूजन सामग्री मंदिर परिसर में उपलब्ध", en: "Puja items are available within the temple premises" },
      { hi: "विशेष पूजा के लिए पुजारी से संपर्क करें", en: "Contact the priest for special worship arrangements" },
      { hi: "भीड़भाड़ वाले दिनों में सावधानी बरतें", en: "Take extra care on crowded days" },
    ],
  },

  placesAdd: {
    heading: { hi: "कोई महत्वपूर्ण स्थान जोड़ें", en: "Add an Important Place" },
    intro: {
      hi: "अगर प्रयागराज का कोई महत्वपूर्ण मंदिर/घाट/आश्रम यहाँ नहीं दिख रहा, तो नीचे जानकारी भरें। एडमिन द्वारा समीक्षा के बाद यह सबको दिखाई देगा।",
      en: "If an important temple/ghat/ashram of Prayagraj isn't listed here, fill in the details below. It will be visible to everyone after admin review.",
    },
    nameEn: { hi: "नाम (English) *", en: "Name (English) *" },
    nameHi: { hi: "नाम (Hindi) *", en: "Name (Hindi) *" },
    category: { hi: "प्रकार (Category) *", en: "Category *" },
    location: { hi: "स्थान/पता (Location) *", en: "Location/Address *" },
    locationEnglish: { hi: "स्थान/पता (English, वैकल्पिक)", en: "Location/Address (English, optional)" },
    description: { hi: "संक्षिप्त विवरण (Hindi) *", en: "Short Description (Hindi) *" },
    descriptionEnglish: { hi: "संक्षिप्त विवरण (English, वैकल्पिक)", en: "Short Description (English, optional)" },
    visitingHours: { hi: "दर्शन का समय (Visiting Hours) *", en: "Visiting Hours *" },
    visitingHoursPlaceholder: { hi: "जैसे: सुबह 6 बजे से रात 9 बजे तक", en: "e.g. 6 AM to 9 PM" },
    visitingHoursEnglish: { hi: "दर्शन का समय (English, वैकल्पिक)", en: "Visiting Hours (English, optional)" },
    importance: { hi: "धार्मिक महत्व (वैकल्पिक)", en: "Religious Significance (optional)" },
    importanceEnglish: { hi: "धार्मिक महत्व (English, वैकल्पिक)", en: "Religious Significance (English, optional)" },
    features: { hi: "विशेषताएँ (वैकल्पिक)", en: "Special Features (optional)" },
    featuresPlaceholder: { hi: "एक विशेषता लिखें और Enter दबाएँ", en: "Type a feature and press Enter" },
    featuresEnglish: { hi: "विशेषताएँ (English, वैकल्पिक)", en: "Special Features (English, optional)" },
    featuresEnglishPlaceholder: { hi: "Type a feature in English and press Enter", en: "Type a feature in English and press Enter" },
    add: { hi: "जोड़ें", en: "Add" },
    photo: { hi: "फोटो (वैकल्पिक)", en: "Photo (optional)" },
    removeImage: { hi: "हटाएं", en: "Remove" },
    morePhotos: { hi: "अतिरिक्त तस्वीरें (वैकल्पिक, अधिकतम 5)", en: "Additional Photos (optional, up to 5)" },
    mapsLink: { hi: "Google Maps लिंक (वैकल्पिक)", en: "Google Maps Link (optional)" },
    submitterName: { hi: "आपका नाम (वैकल्पिक)", en: "Your Name (optional)" },
    submitterContact: { hi: "संपर्क (वैकल्पिक, सार्वजनिक नहीं होगा)", en: "Contact (optional, will not be shown publicly)" },
    submitting: { hi: "भेजा जा रहा है...", en: "Submitting..." },
    submit: { hi: "समीक्षा के लिए भेजें", en: "Submit for Review" },
    genericError: { hi: "कुछ गलत हो गया, कृपया पुनः प्रयास करें।", en: "Something went wrong, please try again." },
    thankYouHeading: { hi: "धन्यवाद! आपका सुझाव प्राप्त हो गया है 🙏", en: "Thank you! Your submission has been received 🙏" },
    thankYouBody: {
      hi: "आपके द्वारा जोड़ी गई जानकारी की समीक्षा (review) एडमिन द्वारा की जाएगी। स्वीकृति मिलने के बाद यह स्थान सार्वजनिक रूप से दिखाई देगा।",
      en: "The information you submitted will be reviewed by the admin. Once approved, this place will be visible to everyone.",
    },
  },

  login: {
    title: { hi: "लॉगिन", en: "Login" },
    email: { hi: "ईमेल", en: "Email" },
    password: { hi: "पासवर्ड", en: "Password" },
    submit: { hi: "लॉगिन करें", en: "Login" },
    invalidCredentials: { hi: "गलत ईमेल या पासवर्ड", en: "Invalid email or password" },
    noAccount: { hi: "खाता नहीं है?", en: "Don't have an account?" },
    registerLink: { hi: "रजिस्टर करें", en: "Register" },
  },

  register: {
    title: { hi: "नया खाता बनाएँ", en: "Create an Account" },
    name: { hi: "नाम", en: "Name" },
    email: { hi: "ईमेल", en: "Email" },
    password: { hi: "पासवर्ड", en: "Password" },
    passwordHint: { hi: "कम से कम 6 अक्षर", en: "At least 6 characters" },
    submit: { hi: "खाता बनाएँ", en: "Create Account" },
    haveAccount: { hi: "पहले से खाता है?", en: "Already have an account?" },
    loginLink: { hi: "लॉगिन करें", en: "Log in" },
    genericError: { hi: "खाता नहीं बन सका। कृपया पुनः प्रयास करें।", en: "Could not create account. Please try again." },
  },

  shlokas: {
    navLink: { hi: "श्लोक", en: "Shlokas" },
    listHeading: { hi: "पवित्र वचन", en: "Sacred Verses" },
    listIntro: {
      hi: "श्रद्धालुओं द्वारा साझा किए गए पवित्र श्लोक और वचन।",
      en: "Sacred shlokas and verses shared by devotees.",
    },
    addLink: { hi: "श्लोक जोड़ें", en: "Add a Shloka" },
    loading: { hi: "लोड हो रहा है...", en: "Loading..." },
    loadError: { hi: "श्लोक लोड नहीं हो पाए। कृपया बाद में पुनः प्रयास करें।", en: "Could not load shlokas. Please try again later." },
    empty: { hi: "अभी कोई श्लोक उपलब्ध नहीं है।", en: "No shlokas available yet." },
    formHeading: { hi: "एक पवित्र श्लोक जोड़ें", en: "Add a Sacred Shloka" },
    formIntro: {
      hi: "अपना पसंदीदा श्लोक या पवित्र वचन साझा करें। एडमिन द्वारा समीक्षा के बाद यह सबको दिखाई देगा।",
      en: "Share your favourite shloka or sacred verse. It will be visible to everyone after admin review.",
    },
    textLabel: { hi: "श्लोक/वचन *", en: "Shloka/Verse *" },
    sourceLabel: { hi: "स्रोत (वैकल्पिक)", en: "Source (optional)" },
    sourcePlaceholder: { hi: "जैसे: स्कन्द पुराण", en: "e.g. Skanda Purana" },
    meaningLabel: { hi: "अर्थ/भावार्थ (वैकल्पिक)", en: "Meaning (optional)" },
    scheduledDateLabel: { hi: "विशेष तिथि (वैकल्पिक)", en: "Scheduled Date (optional)" },
    scheduledDateHint: {
      hi: "इस तिथि को यह श्लोक मुखपृष्ठ पर पॉपअप के रूप में दिखेगा।",
      en: "On this date, the shloka will appear as a popup on the homepage.",
    },
    nameLabel: { hi: "आपका नाम *", en: "Your Name *" },
    emailLabel: { hi: "ईमेल *", en: "Email *" },
    mobileLabel: { hi: "मोबाइल नंबर (वैकल्पिक)", en: "Mobile Number (optional)" },
    submitting: { hi: "भेजा जा रहा है...", en: "Submitting..." },
    submit: { hi: "समीक्षा के लिए भेजें", en: "Submit for Review" },
    genericError: { hi: "कुछ गलत हो गया, कृपया पुनः प्रयास करें।", en: "Something went wrong, please try again." },
    thankYouHeading: { hi: "धन्यवाद! आपका श्लोक प्राप्त हो गया है 🙏", en: "Thank you! Your shloka has been received 🙏" },
    thankYouBody: {
      hi: "एडमिन द्वारा समीक्षा के बाद यह सूची में दिखाई देगा।",
      en: "It will appear in the list after admin review.",
    },
    popupClose: { hi: "बंद करें", en: "Close" },
    adminHeading: { hi: "श्लोक", en: "Shlokas" },
    adminPending: { hi: "लंबित श्लोक", en: "Pending Shlokas" },
    adminAddHeading: { hi: "सीधे श्लोक जोड़ें (स्वतः स्वीकृत)", en: "Add Shloka Directly (auto-approved)" },
    adminAdd: { hi: "जोड़ें", en: "Add" },
    adminNoPending: { hi: "कोई लंबित श्लोक नहीं है।", en: "No pending shlokas." },
  },

  admin: {
    heading: { hi: "एडमिन डैशबोर्ड", en: "Admin Dashboard" },
    addPost: { hi: "नया लेख जोड़ें", en: "Add New Post" },
    editPost: { hi: "लेख संपादित करें", en: "Edit Post" },
    postTitle: { hi: "शीर्षक", en: "Title" },
    content: { hi: "विवरण", en: "Content" },
    category: { hi: "श्रेणी", en: "Category" },
    author: { hi: "लेखक", en: "Author" },
    imageUrl: { hi: "छवि URL", en: "Image URL" },
    date: { hi: "तिथि", en: "Date" },
    update: { hi: "अपडेट करें", en: "Update" },
    add: { hi: "जोड़ें", en: "Add" },
    cancel: { hi: "रद्द करें", en: "Cancel" },
    managePosts: { hi: "लेख प्रबंधित करें", en: "Manage Posts" },
    edit: { hi: "संपादित करें", en: "Edit" },
    delete: { hi: "हटाएं", en: "Delete" },
    pendingPlaces: { hi: "लंबित स्थान", en: "Pending Places" },
    loading: { hi: "लोड हो रहा है...", en: "Loading..." },
    pendingLoadError: { hi: "स्थान लोड नहीं हो पाए। दोबारा प्रयास करें।", en: "Could not load places. Please try again." },
    noPending: { hi: "कोई लंबित सबमिशन नहीं है।", en: "No pending submissions." },
    approve: { hi: "स्वीकृत करें", en: "Approve" },
    reject: { hi: "अस्वीकार करें", en: "Reject" },
    rejectReasonPlaceholder: { hi: "अस्वीकार करने का कारण (वैकल्पिक)", en: "Reason for rejection (optional)" },
    confirmReject: { hi: "अस्वीकृति की पुष्टि करें", en: "Confirm Reject" },
    timingLabel: { hi: "समय:", en: "Timing:" },
    managePlaces: { hi: "स्थान प्रबंधित करें", en: "Manage Places" },
    manageShlokasHeading: { hi: "श्लोक प्रबंधित करें", en: "Manage Shlokas" },
    manageHeroHeading: { hi: "होम पेज हीरो (स्लाइडशो)", en: "Homepage Hero (Slideshow)" },
    heroIntro: {
      hi: "यहाँ जो भी फोटो/वीडियो जोड़ेंगे, वो होम पेज पर बारी-बारी (auto-change) दिखेंगे।",
      en: "Whatever photos/videos you add here will automatically cycle on the homepage.",
    },
    heroUploadLabel: { hi: "नई फोटो/वीडियो जोड़ें", en: "Add a new photo/video" },
    heroUploading: { hi: "अपलोड हो रहा है...", en: "Uploading..." },
    heroUploadError: { hi: "अपलोड नहीं हो पाया, कृपया पुनः प्रयास करें।", en: "Upload failed, please try again." },
    heroEmpty: { hi: "अभी कोई स्लाइड नहीं है, डिफ़ॉल्ट फोटो दिख रही है।", en: "No slides yet — a default photo is showing." },
    heroDelete: { hi: "हटाएं", en: "Remove" },
    markFeatured: { hi: "होम पेज पर दिखाएं", en: "Feature on Homepage" },
    unmarkFeatured: { hi: "होम पेज से हटाएं", en: "Remove from Homepage" },
    featuredBadge: { hi: "होम पेज पर", en: "Featured" },
    noApprovedPlaces: { hi: "कोई स्वीकृत स्थान नहीं है।", en: "No approved places." },
    noApprovedShlokas: { hi: "कोई स्वीकृत श्लोक नहीं है।", en: "No approved shlokas." },
    filterPlaceholder: { hi: "खोजें / फ़िल्टर करें...", en: "Search / filter..." },
    allCategories: { hi: "सभी श्रेणियां", en: "All categories" },
    manageKumbhHeading: { hi: "कुम्भ आयोजन प्रबंधित करें", en: "Manage Kumbh Events" },
    addKumbhEvent: { hi: "नया कुम्भ आयोजन जोड़ें", en: "Add New Kumbh Event" },
    kumbhLocation: { hi: "स्थान (English)", en: "Location (English)" },
    kumbhLocationHindi: { hi: "स्थान (Hindi)", en: "Location (Hindi)" },
    kumbhType: { hi: "प्रकार (English)", en: "Type (English)" },
    kumbhTypeHindi: { hi: "प्रकार (Hindi)", en: "Type (Hindi)" },
    kumbhYear: { hi: "वर्ष", en: "Year" },
    kumbhStartDate: { hi: "आरंभ तिथि (वैकल्पिक)", en: "Start Date (optional)" },
    kumbhEndDate: { hi: "समाप्ति तिथि (वैकल्पिक)", en: "End Date (optional)" },
    kumbhDescription: { hi: "विवरण Hindi (वैकल्पिक)", en: "Description Hindi (optional)" },
    kumbhDescriptionEnglish: { hi: "विवरण English (वैकल्पिक)", en: "Description English (optional)" },
    kumbhApproximate: { hi: "तिथि अनुमानित है", en: "Date is approximate" },
    noKumbhEvents: { hi: "कोई आयोजन नहीं है।", en: "No events yet." },
  },
};

export type Translations = typeof translations;
