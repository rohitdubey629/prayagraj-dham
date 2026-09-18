// One-off dev seed script: adds a handful of hero slideshow images using the
// existing static photos already shipped in /frontend/public/images (no
// Cloudinary upload needed). Admin can add more/replace these later from the
// admin dashboard once real Cloudinary credentials are configured.
//
// NOTE: this WIPES the hero_slides collection before inserting.

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../lib/db";
import { HeroSlide } from "../models/HeroSlide";
import mongoose from "mongoose";

const slides = [
  "/images/triveni_sangam.jpeg",
  "/images/mahakumbh.jpg",
  "/images/sangam.jpg",
  "/images/Akbar_Fort_Allahabad.jpg",
  "/images/shankar_viman_mandapam.jpg",
];

async function seed() {
  await connectDB();

  await HeroSlide.deleteMany({});

  const docs = slides.map((mediaUrl) => ({ mediaUrl, mediaType: "image" as const }));
  await HeroSlide.insertMany(docs);

  console.log(`Seeded ${docs.length} hero slides.`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
