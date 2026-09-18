"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { getPosts, Post } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FeaturedPosts() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const { t } = useTranslation();
  const fp = translations.featuredPosts;

  useEffect(() => {
    getPosts(true)
      .then((data) => setFeaturedPosts(data.slice(0, 3)))
      .catch(() => setFeaturedPosts([]));
  }, []);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.h2 variants={item} className="font-serif-display text-3xl md:text-4xl font-bold text-bhagwa-dark mb-2 text-center">
          {t(fp.heading)}
        </motion.h2>
        <motion.div variants={item} className="w-24 h-1 bg-gold mx-auto mb-10"></motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <motion.div
              key={post._id}
              variants={item}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gold/20"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={post.image || "/images/mahakumbh.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-bhagwa-dark text-gold text-sm rounded-full mb-2">
                  {post.category}
                </span>
                <h3 className="font-serif-display text-xl font-bold mb-2 text-bhagwa-dark">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
                <Link
                  href={`/blog/${post._id}`}
                  className="text-gold font-semibold hover:underline"
                >
                  {t(fp.readMore)}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
