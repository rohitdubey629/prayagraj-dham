'use client'

import PostList from '@/components/PostList'
import Layout from '@/components/Layout'
import { useTranslation } from '@/lib/useTranslation'
import { translations } from '@/lib/translations'

export default function Blog() {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-prayagraj-primary mb-8">{t(translations.blog.title)}</h1>
        <PostList />
      </div>
    </Layout>
  )
}
