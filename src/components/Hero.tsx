"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "./motion/AnimatedCounter";

export default function Hero() {
  return (
    <div className="relative bg-bhagwa-DEFAULT text-white py-24 mb-12 overflow-hidden">
      {/* animated background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sangam.jpg')" }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.55 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            पवित्र प्रयागराज
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            त्रिवेणी संगम की पावन भूमि, कुम्भ की अद्भुत नगरी
            <br />
            जहाँ गंगा, यमुना और सरस्वती का होता है मिलन
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/sangam"
              className="bg-white text-bhagwa-dark px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition text-lg"
            >
              त्रिवेणी संगम
            </Link>
            <Link
              href="/kumbh"
              className="bg-dharmic-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 hover:scale-105 transition text-lg"
            >
              कुम्भ / माघ मेला
            </Link>
            <Link
              href="/jhusi"
              className="bg-dharmic-green text-white px-8 py-3 rounded-lg font-medium hover:bg-green-900 hover:scale-105 transition text-lg"
            >
              झूंसी क्षेत्र
            </Link>
          </motion.div>

          {/* quick stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-white/30 pt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold font-serif">
                <AnimatedCounter value={12} suffix=" वर्ष" />
              </div>
              <p className="text-sm text-amber-100 mt-1">महाकुम्भ चक्र</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-serif">
                <AnimatedCounter value={3} />
              </div>
              <p className="text-sm text-amber-100 mt-1">पावन नदियाँ</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold font-serif">
                <AnimatedCounter value={20} suffix="+" />
              </div>
              <p className="text-sm text-amber-100 mt-1">प्रमुख मंदिर</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
