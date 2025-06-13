// app/temples/[id]/page.tsx
import { temples } from '@/data/templeData';
import Layout from '@/components/Layout';
import TempleDetails from '@/components/TempleDetails';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const temple = temples.find(t => t.id === Number(params.id));
  
  return {
    title: `${temple?.nameHindi} | ${temple?.name}`,
    description: temple?.descriptionHindi,
  }
}

export default function TemplePage({ params }: { params: { id: string } }) {
  const temple = temples.find(t => t.id === Number(params.id));
  
  if (!temple) {
    return notFound();
  }

  return (
    <Layout>
      <TempleDetails temple={temple} />
    </Layout>
  );
}

export async function generateStaticParams() {
  return temples.map(temple => ({
    id: temple.id.toString()
  }));
}