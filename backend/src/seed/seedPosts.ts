// Seed script: loads the original hardcoded blog articles into the Post
// collection so "Featured Articles" has content immediately.
//
// NOTE: this WIPES the entire `posts` collection before inserting
// (Post.deleteMany({})). Only run this against an empty/dev database.

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "../lib/db";
import { Post } from "../models/Post";
import mongoose from "mongoose";

interface SeedPost {
  title: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author: string;
  featured?: boolean;
}

const posts: SeedPost[] = [
  {
    title: "त्रिवेणी संगम - एक पवित्र संगम",
    content:
      "त्रिवेणी संगम तीन नदियों - गंगा, यमुना और मिथकीय सरस्वती का संगम है। यह हिंदुओं के लिए एक पवित्र स्थान है और कुंभ मेला का प्रमुख स्थल है।",
    category: "आध्यात्मिक",
    image: "/images/triveni_sangam.jpeg",
    date: "2023-05-15",
    author: "भक्त शर्मा",
    featured: true,
  },
  {
    title: "इलाहाबाद किला - मुगलकालीन चमत्कार",
    content:
      "सम्राट अकबर द्वारा 1583 में बनवाया गया यह किला अक्षयवट वृक्ष का निवास है, जिसका उल्लेख प्राचीन शास्त्रों में भी मिलता है।",
    category: "ऐतिहासिक",
    image: "/images/Akbar_Fort_Allahabad.jpg",
    date: "2023-06-22",
    author: "इतिहास प्रेमी",
  },
  {
    title: "अखिल भारतीय हिंदी साहित्य सम्मेलन",
    content:
      "प्रयागराज में स्थित यह संस्था हिंदी भाषा और साहित्य के प्रचार-प्रसार का एक प्रमुख केंद्र रही है। यहाँ कई महान साहित्यकारों ने रचनाएँ की हैं।",
    category: "साहित्यिक",
    image: "/images/hindi_.jpg",
    date: "2023-07-10",
    author: "साहित्य सेवक",
  },
  {
    title: "हनुमान मंदिर - लेटे हुए हनुमान जी",
    content:
      "यह मंदिर भगवान हनुमान जी की लेटी हुई मुद्रा के लिए प्रसिद्ध है। यहाँ आने वाले भक्त अपनी मनोकामनाओं की पूर्ति के लिए दर्शन करते हैं।",
    category: "धार्मिक",
    image: "/images/hanuman_mandir.jpg",
    date: "2023-08-01",
    author: "श्रद्धालु मिश्रा",
    featured: true,
  },
  {
    title: "कुंभ मेला - श्रद्धा का महासंगम",
    content:
      "हर 12 वर्षों में प्रयागराज में आयोजित होने वाला कुंभ मेला लाखों श्रद्धालुओं को आकर्षित करता है, जो संगम में स्नान कर पुण्य प्राप्त करते हैं।",
    category: "त्योहार",
    image: "/images/mahakumbh.jpg",
    date: "2024-01-10",
    author: "योगी त्रिपाठी",
    featured: true,
  },
  {
    title: "प्रयागराज विश्वविद्यालय - शिक्षा का गौरव",
    content:
      "इलाहाबाद विश्वविद्यालय भारत के सबसे पुराने और प्रतिष्ठित विश्वविद्यालयों में से एक है। यहाँ से कई नेता, लेखक, और वैज्ञानिक निकले हैं।",
    category: "शैक्षणिक",
    image: "/images/allahabad_university.avif",
    date: "2023-09-05",
    author: "शिक्षा प्रेमी",
  },
  {
    title: "चंद्रशेखर आज़ाद पार्क - देशभक्ति की प्रेरणा",
    content:
      "यह ऐतिहासिक पार्क उस स्थान के रूप में जाना जाता है जहाँ अमर शहीद चंद्रशेखर आज़ाद ने अंग्रेजों से संघर्ष करते हुए बलिदान दिया था।",
    category: "देशभक्ति",
    image: "/images/chandra_shekhar_azad_park.jpg",
    date: "2023-08-15",
    author: "स्वतंत्रता सेनानी",
  },
];

async function seed() {
  await connectDB();

  // WARNING: this wipes the entire posts collection before reseeding.
  // Only safe to run against an empty/dev database.
  await Post.deleteMany({});

  const docs = posts.map((post) => ({
    title: post.title,
    content: post.content,
    category: post.category,
    image: post.image,
    author: post.author,
    date: new Date(post.date),
    featured: Boolean(post.featured),
  }));

  await Post.insertMany(docs);

  console.log(`Seeded ${docs.length} posts (${docs.filter((d) => d.featured).length} featured).`);

  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
