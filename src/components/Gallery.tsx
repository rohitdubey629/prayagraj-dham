"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./motion/FadeIn";
import StaggerContainer, { staggerItem } from "./motion/StaggerContainer";

const galleryImages = [
  { src: "/images/sangam.jpg", caption: "त्रिवेणी संगम" },
  { src: "/images/triveni_sangam.jpeg", caption: "संगम तट का दृश्य" },
  { src: "/images/mahakumbh.jpg", caption: "महाकुम्भ मेला" },
  { src: "/images/bade_hanuman_ji_temple.jpeg", caption: "बड़े हनुमान जी मंदिर" },
  { src: "/images/Alopi_Devi_Mandir.jpeg", caption: "अलोपि देवी मंदिर" },
  { src: "/images/NaagvasukiTemple.jpg", caption: "नाग वासुकी मंदिर" },
  { src: "/images/shankar_viman_mandapam.jpg", caption: "शंकर विमन मंडपम" },
  { src: "/images/Akbar_Fort_Allahabad.jpg", caption: "इलाहाबाद किला" },
  { src: "/images/Patalpuri.jpeg", caption: "पातालपुरी मंदिर" },
  { src: "/images/Someshwar.webp", caption: "सोमेश्वर महादेव मंदिर" },
  { src: "/images/bhardwaj_shram.webp", caption: "भरद्वाज आश्रम" },
  { src: "/images/chandra_shekhar_azad_park.jpg", caption: "चंद्रशेखर आज़ाद पार्क" },
  { src: "/images/allahabad_university.avif", caption: "प्रयागराज विश्वविद्यालय" },
  { src: "/images/hanuman_mandir.jpg", caption: "हनुमान मंदिर" },
  { src: "/images/sankasht_har_madhav.jpg", caption: "झूंसी - संकटहार माधव" },
  { src: "/images/adivenimadhav.jpg", caption: "आदि वेणी माधव, अरैल घाट" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-bhagwa-dark mb-2 text-center font-serif">
            चित्र दीर्घा — प्रयागराज
          </h2>
          <div className="w-24 h-1 bg-bhagwa-dark mx-auto mb-8"></div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            संगम, कुम्भ मेला, मंदिरों व ऐतिहासिक स्थलों की झलकियाँ। किसी भी
            चित्र पर क्लिक करके बड़ा देखें।
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          stagger={0.06}
        >
          {galleryImages.map((img, index) => (
            <motion.button
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveIndex(index)}
              className="relative h-36 sm:h-44 rounded-lg overflow-hidden shadow-md group text-left"
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {img.caption}
                </span>
              </div>
            </motion.button>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white hover:text-amber-300"
              aria-label="बंद करें"
            >
              <X size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-10 text-white hover:text-amber-300"
              aria-label="पिछला"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-10 text-white hover:text-amber-300"
              aria-label="अगला"
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].caption}
                fill
                className="object-contain"
              />
              <p className="text-center text-white mt-3 absolute -bottom-10 w-full font-medium">
                {galleryImages[activeIndex].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
