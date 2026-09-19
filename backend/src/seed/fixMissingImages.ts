// One-off script: fills in imageUrl for the places that were seeded without
// one. Originally pointed at Wikimedia Commons URLs, but Wikimedia's servers
// throttle (HTTP 429) direct hotlinked/optimized requests inconsistently, so
// those photos were downloaded once and now live locally in
// /frontend/public/images (same reliable pattern as every other place photo).
// Does NOT touch places that already have an image.

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../lib/db";
import { Place } from "../models/Place";
import mongoose from "mongoose";

const fixes: { name: string; imageUrl: string }[] = [
  { name: "Anand Bhawan", imageUrl: "/images/anand_bhawan.jpg" },
  { name: "Swaraj Bhawan", imageUrl: "/images/swaraj_bhawan.jpg" },
  { name: "All Saints Cathedral (Patthar Girjaghar)", imageUrl: "/images/all_saints_cathedral.jpg" },
  { name: "Khusro Bagh", imageUrl: "/images/khusro_bagh.jpg" },
  { name: "Allahabad Museum", imageUrl: "/images/allahabad_museum.jpg" },
  { name: "Shringverpur Dham", imageUrl: "/images/shringverpur_dham.jpg" },
  // No specific photo of this exact ghat could be verified online - using a
  // real, verified Ganga-at-Prayagraj photo as a representative image.
  { name: "Rasoolabad Ghat", imageUrl: "/images/rasoolabad_ghat.jpg" },
  { name: "Daraganj Ghat", imageUrl: "/images/daraganj_ghat.jpg" },
  { name: "Chatnag Ghat", imageUrl: "/images/chatnag_ghat.jpg" },
  // Kila Ghat sits right below/beside Allahabad Fort - reusing that photo is
  // an accurate location match, not just filler.
  { name: "Kila Ghat", imageUrl: "/images/Akbar_Fort_Allahabad.jpg" },
  // No online photo found for this specific ashram - reusing another local
  // ashram photo as a representative image.
  { name: "Karpatri Dham Ashram", imageUrl: "/images/bhardwaj_shram.webp" },
  // Same Daraganj "Madhav" temple series as Veni Madhav - reusing that photo.
  { name: "Anant Madhav (Daraganj)", imageUrl: "/images/veni_madhav.webp" },
];

async function run() {
  await connectDB();

  let updated = 0;
  for (const fix of fixes) {
    const result = await Place.updateOne(
      { name: fix.name },
      { $set: { imageUrl: fix.imageUrl } }
    );
    if (result.matchedCount === 0) {
      console.warn(`No place found named "${fix.name}"`);
    } else {
      updated++;
    }
  }

  console.log(`Updated ${updated}/${fixes.length} places with an image.`);

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((error) => {
  console.error("Failed:", error);
  process.exit(1);
});
