"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { RootState } from "../lib/store";

export default function FeaturedPosts() {
  const { posts } = useSelector((state: RootState) => state.posts);
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-prayagraj-primary mb-8">
        विशेष लेख
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-prayagraj-secondary text-white text-sm rounded-full mb-2">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-prayagraj-primary font-medium hover:underline"
              >
                और पढ़ें
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
