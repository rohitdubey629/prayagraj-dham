// Adds well-documented HISTORICAL Kumbh Mela editions (does not wipe the
// collection - only inserts entries that don't already exist for the same
// location+year, so it's safe to run alongside seedKumbhEvents.ts).

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../lib/db";
import { KumbhEvent } from "../models/KumbhEvent";
import mongoose from "mongoose";

const events = [
  // Prayagraj
  {
    location: "Prayagraj" as const,
    locationHindi: "प्रयागराज",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 1989,
    description: "प्रयागराज में आयोजित पूर्ण कुम्भ मेला।",
    descriptionEnglish: "The Purna Kumbh Mela held at Prayagraj.",
    isApproximate: false,
  },
  {
    location: "Prayagraj" as const,
    locationHindi: "प्रयागराज",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 2001,
    description: "प्रयागराज में आयोजित पूर्ण कुम्भ मेला, जिसमें करोड़ों श्रद्धालु शामिल हुए।",
    descriptionEnglish: "The Purna Kumbh Mela held at Prayagraj, attended by tens of millions of devotees.",
    isApproximate: false,
  },
  {
    location: "Prayagraj" as const,
    locationHindi: "प्रयागराज",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 2013,
    description: "प्रयागराज (इलाहाबाद) में आयोजित कुम्भ मेला।",
    descriptionEnglish: "The Kumbh Mela held at Prayagraj (Allahabad).",
    isApproximate: false,
  },
  {
    location: "Prayagraj" as const,
    locationHindi: "प्रयागराज",
    kumbhType: "Ardh Kumbh" as const,
    kumbhTypeHindi: "अर्धकुम्भ",
    year: 2019,
    description: "प्रयागराज में आयोजित अर्धकुम्भ, जिसे उत्तर प्रदेश सरकार ने भव्य रूप से 'कुम्भ 2019' के नाम से आयोजित किया।",
    descriptionEnglish: "The Ardh Kumbh at Prayagraj, organised on a grand scale by the Uttar Pradesh government as 'Kumbh 2019'.",
    isApproximate: false,
  },
  // Haridwar
  {
    location: "Haridwar" as const,
    locationHindi: "हरिद्वार",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 1998,
    description: "हरिद्वार में गंगा तट पर आयोजित पूर्ण कुम्भ मेला।",
    descriptionEnglish: "The Purna Kumbh Mela held at Haridwar on the banks of the Ganga.",
    isApproximate: false,
  },
  {
    location: "Haridwar" as const,
    locationHindi: "हरिद्वार",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 2010,
    description: "हरिद्वार में आयोजित पूर्ण कुम्भ मेला।",
    descriptionEnglish: "The Purna Kumbh Mela held at Haridwar.",
    isApproximate: false,
  },
  {
    location: "Haridwar" as const,
    locationHindi: "हरिद्वार",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 2021,
    description: "ज्योतिषीय गणना के अनुसार समय से पहले आयोजित हरिद्वार कुम्भ, कोविड-19 महामारी के दौरान।",
    descriptionEnglish: "Held earlier than the usual cycle per astrological calculations, during the COVID-19 pandemic.",
    isApproximate: false,
  },
  // Nashik-Trimbakeshwar
  {
    location: "Nashik" as const,
    locationHindi: "नासिक",
    kumbhType: "Simhastha" as const,
    kumbhTypeHindi: "सिंहस्थ",
    year: 2003,
    description: "गोदावरी नदी के तट पर नासिक-त्र्यंबकेश्वर में आयोजित सिंहस्थ कुम्भ।",
    descriptionEnglish: "The Simhastha Kumbh held at Nashik-Trimbakeshwar on the banks of the Godavari.",
    isApproximate: false,
  },
  {
    location: "Nashik" as const,
    locationHindi: "नासिक",
    kumbhType: "Simhastha" as const,
    kumbhTypeHindi: "सिंहस्थ",
    year: 2015,
    description: "नासिक-त्र्यंबकेश्वर में आयोजित सिंहस्थ कुम्भ मेला।",
    descriptionEnglish: "The Simhastha Kumbh Mela held at Nashik-Trimbakeshwar.",
    isApproximate: false,
  },
  // Ujjain
  {
    location: "Ujjain" as const,
    locationHindi: "उज्जैन",
    kumbhType: "Simhastha" as const,
    kumbhTypeHindi: "सिंहस्थ",
    year: 2004,
    description: "क्षिप्रा नदी के तट पर उज्जैन में आयोजित सिंहस्थ कुम्भ।",
    descriptionEnglish: "The Simhastha Kumbh held at Ujjain on the banks of the Shipra.",
    isApproximate: false,
  },
  {
    location: "Ujjain" as const,
    locationHindi: "उज्जैन",
    kumbhType: "Simhastha" as const,
    kumbhTypeHindi: "सिंहस्थ",
    year: 2016,
    description: "उज्जैन में आयोजित सिंहस्थ कुम्भ मेला।",
    descriptionEnglish: "The Simhastha Kumbh Mela held at Ujjain.",
    isApproximate: false,
  },
  // Additional confirmed/likely upcoming (beyond what's already seeded)
  {
    location: "Haridwar" as const,
    locationHindi: "हरिद्वार",
    kumbhType: "Ardh Kumbh" as const,
    kumbhTypeHindi: "अर्धकुम्भ",
    year: 2027,
    startDate: new Date("2027-03-01"),
    description: "हरिद्वार में अगला अनुमानित अर्धकुम्भ मेला।",
    descriptionEnglish: "The next estimated Ardh Kumbh Mela at Haridwar.",
    isApproximate: true,
  },
];

async function run() {
  await connectDB();

  let inserted = 0;
  let skipped = 0;

  for (const event of events) {
    const exists = await KumbhEvent.findOne({ location: event.location, year: event.year });
    if (exists) {
      skipped++;
      continue;
    }
    await KumbhEvent.create(event);
    inserted++;
  }

  console.log(`Inserted ${inserted} historical Kumbh events, skipped ${skipped} (already existed).`);

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((error) => {
  console.error("Failed:", error);
  process.exit(1);
});
