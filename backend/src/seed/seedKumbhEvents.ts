// One-off seed script: loads known/announced Kumbh Mela editions so the
// /kumbh page has real data immediately. Admin can add/edit/remove more
// later from the admin dashboard as official dates get announced.
//
// NOTE: this WIPES the kumbh_events collection before inserting.

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../lib/db";
import { KumbhEvent } from "../models/KumbhEvent";
import mongoose from "mongoose";

const events = [
  {
    location: "Prayagraj" as const,
    locationHindi: "प्रयागराज",
    kumbhType: "Maha Kumbh" as const,
    kumbhTypeHindi: "महाकुम्भ",
    year: 2025,
    startDate: new Date("2025-01-13"),
    endDate: new Date("2025-02-26"),
    description:
      "144 वर्षों बाद आयोजित महाकुम्भ। प्रमुख स्नान: मकर संक्रांति (14 जनवरी), मौनी अमावस्या (1 फरवरी), बसंत पंचमी (26 फरवरी)।",
    descriptionEnglish:
      "The Maha Kumbh held after 144 years. Key baths: Makar Sankranti (14 Jan), Mauni Amavasya (1 Feb), Basant Panchami (26 Feb).",
    isApproximate: false,
  },
  {
    location: "Nashik" as const,
    locationHindi: "नासिक",
    kumbhType: "Simhastha" as const,
    kumbhTypeHindi: "सिंहस्थ",
    year: 2027,
    description: "गोदावरी नदी के तट पर आयोजित होने वाला अनुमानित सिंहस्थ कुम्भ।",
    descriptionEnglish: "Estimated Simhastha Kumbh to be held on the banks of the Godavari.",
    isApproximate: true,
  },
  {
    location: "Ujjain" as const,
    locationHindi: "उज्जैन",
    kumbhType: "Simhastha" as const,
    kumbhTypeHindi: "सिंहस्थ",
    year: 2028,
    description: "क्षिप्रा नदी के तट पर आयोजित होने वाला अनुमानित सिंहस्थ कुम्भ।",
    descriptionEnglish: "Estimated Simhastha Kumbh to be held on the banks of the Shipra.",
    isApproximate: true,
  },
  {
    location: "Prayagraj" as const,
    locationHindi: "प्रयागराज",
    kumbhType: "Ardh Kumbh" as const,
    kumbhTypeHindi: "अर्धकुम्भ",
    year: 2031,
    description: "प्रयागराज में अगला अनुमानित अर्धकुम्भ मेला।",
    descriptionEnglish: "The next estimated Ardh Kumbh Mela at Prayagraj.",
    isApproximate: true,
  },
  {
    location: "Haridwar" as const,
    locationHindi: "हरिद्वार",
    kumbhType: "Purna Kumbh" as const,
    kumbhTypeHindi: "पूर्ण कुम्भ",
    year: 2033,
    description: "हरिद्वार में अगला अनुमानित पूर्ण कुम्भ मेला।",
    descriptionEnglish: "The next estimated Purna Kumbh Mela at Haridwar.",
    isApproximate: true,
  },
];

async function seed() {
  await connectDB();

  await KumbhEvent.deleteMany({});
  await KumbhEvent.insertMany(events);

  console.log(`Seeded ${events.length} Kumbh events.`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
