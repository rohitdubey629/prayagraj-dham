import PostList from '@/components/PostList'
import Layout from '@/components/Layout'

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-prayagraj-primary mb-8">Prayagraj Blog</h1>
        <PostList />
      </div>
    </Layout>
  )
}