"use client";
import { temples } from "@/data/templeData";
import Layout from "@/components/Layout";
import TempleDetails from "@/components/TempleDetails";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function TemplePage() {
  const params = useParams() as { id: string };
  const temple = temples.find((t) => t.id === Number(params.id));

  if (!temple) {
    notFound();
  }

  return (
    <Layout>
      <TempleDetails temple={temple} />
    </Layout>
  );
}
