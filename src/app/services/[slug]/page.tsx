import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { serviceDetails, serviceSlugs } from "@/data/serviceDetails";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return {};
  return {
    title: `${service.title} — Services | Design Studio`,
    description: service.subtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main">
        <ServiceDetailPage service={service} />
      </main>
      <Footer />
    </>
  );
}
