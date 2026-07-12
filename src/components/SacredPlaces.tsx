"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./motion/FadeIn";
import StaggerContainer, { staggerItem } from "./motion/StaggerContainer";

// components/SacredPlaces.js
export default function SacredPlaces() {
  const sacredSites = [
    {
      name: "त्रिवेणी संगम",
      description: "गंगा, यमुना और अदृश्य सरस्वती का पावन संगम स्थल",
      image: "/images/sangam.jpg",
      link: "/sangam",
    },
    {
      name: "अक्षयवट",
      description: "वह अमर वट वृक्ष जिसका वर्णन पुराणों में मिलता है",
      image: "/images/akshayavat_madhav_.webp",
      link: "/temples/20",
    },
    {
      name: "बड़े हनुमान जी मंदिर",
      description: "लेटे हुए हनुमान जी का विश्वप्रसिद्ध मंदिर",
      image: "/images/bade_hanuman_ji_temple.jpeg",
      link: "/temples/1",
    },
    {
      name: "झूंसी क्षेत्र",
      description: "गंगा पार स्थित प्राचीन प्रतिष्ठानपुर, कुम्भ का प्रमुख सेक्टर",
      image: "/images/sankasht_har_madhav.jpg",
      link: "/jhusi",
    },
    {
      name: "इलाहाबाद किला",
      description: "अकबर द्वारा निर्मित भव्य किला, पातालपुरी व अक्षयवट यहीं स्थित",
      image: "/images/Akbar_Fort_Allahabad.jpg",
      link: "/temples/3",
    },
    {
      name: "नाग वासुकी मंदिर",
      description: "गंगा तट पर स्थित नाग देवता का प्राचीन मंदिर",
      image: "/images/NaagvasukiTemple.jpg",
      link: "/temples/6",
    },
  ];

  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-bhagwa-dark mb-2 text-center font-serif">
            प्रयागराज के पावन स्थल
          </h2>
          <div className="w-24 h-1 bg-bhagwa-dark mx-auto mb-8"></div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {sacredSites.map((site, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 bg-amber-100 relative overflow-hidden group">
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-bhagwa-dark mb-2 font-serif">
                  {site.name}
                </h3>
                <p className="text-gray-600 mb-4">{site.description}</p>
                <Link
                  href={site.link}
                  className="text-bhagwa-dark font-medium hover:underline flex items-center"
                >
                  अधिक जानें <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
