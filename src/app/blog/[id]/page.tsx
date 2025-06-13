"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import { RootState } from "../../../lib/store";
import Image from "next/image";


export default function PostDetail() {
  const params = useParams() as { id: string };
  const { id } = params;
  const { posts } = useSelector((state: RootState) => state.posts);

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-prayagraj-primary">
            Post not found
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <span className="inline-block px-3 py-1 bg-prayagraj-secondary text-white text-sm rounded-full mb-4">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-prayagraj-primary mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-white mb-8">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>

        <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">{post.content}</p>
          <p className="mt-4">
            प्रयागराज, भारत के प्राचीनतम शहरों में से एक है, जो अत्यधिक
            आध्यात्मिक महत्व रखता है। यह शहर कुंभ मेले के लिए प्रसिद्ध है, जो
            दुनिया का सबसे बड़ा धार्मिक आयोजन है और हर 12 वर्षों में होता है।
          </p>
          <p className="mt-4">
            आध्यात्मिक महत्व से परे, प्रयागराज समृद्ध सांस्कृतिक विरासत,
            ऐतिहासिक स्थलों, शैक्षणिक संस्थानों और पवित्र नदियों के किनारे सुंदर
            घाटों के लिए जाना जाता है।
          </p>
        </div>
      </div>
    </Layout>
  );
}
