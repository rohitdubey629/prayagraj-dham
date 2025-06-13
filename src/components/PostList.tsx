'use client'

import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { RootState } from '../lib/store'

export default function PostList() {
  const { posts } = useSelector((state: RootState) => state.posts)

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
          <div className="md:flex">
           <div className="relative md:w-1/3 h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="p-6 md:w-2/3">
              <span className="inline-block px-3 py-1 bg-prayagraj-secondary text-white text-sm rounded-full mb-2">
                {post.category}
              </span>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-2">By {post.author} • {post.date}</p>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <Link 
                href={`/blog/${post.id}`}
                className="text-prayagraj-primary font-medium hover:underline"
              >
                और पढ़ें
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}