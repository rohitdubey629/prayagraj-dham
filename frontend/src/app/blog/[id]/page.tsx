"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Layout from "@/components/Layout";
import { RootState } from "../../../lib/store";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";


export default function PostDetail() {
  const params = useParams() as { id: string };
  const { id } = params;
  const { posts } = useSelector((state: RootState) => state.posts);
  const { t } = useTranslation();
  const b = translations.blog;
  const pl = translations.postList;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-prayagraj-primary">
            {t(b.postNotFound)}
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
          <span>{t(pl.by)} {post.author}</span>
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
          <p className="mt-4">{t(b.fillerPara1)}</p>
          <p className="mt-4">{t(b.fillerPara2)}</p>
        </div>
      </div>
    </Layout>
  );
}
