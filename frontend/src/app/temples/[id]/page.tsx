"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import TempleDetails from "@/components/TempleDetails";
import { notFound, useParams } from "next/navigation";
import { getPlace, Place } from "@/lib/api";
import { useTranslation } from "@/lib/useTranslation";
import { translations } from "@/lib/translations";

export default function TemplePage() {
  const params = useParams() as { id: string };
  const [temple, setTemple] = useState<Place | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const { t } = useTranslation();

  useEffect(() => {
    getPlace(params.id)
      .then((data) => {
        setTemple(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [params.id]);

  if (status === "error") {
    notFound();
  }

  if (status === "loading" || !temple) {
    return (
      <Layout>
        <p className="text-center py-12 text-gray-600">{t(translations.temples.loading)}</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <TempleDetails temple={temple} />
    </Layout>
  );
}
