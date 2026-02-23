import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/service-page-template";
import { servicePages } from "@/content/site";

export function generateStaticParams() {
  return servicePages.filter((p) => p.section === "skilte").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((p) => p.section === "skilte" && p.slug === slug);
  if (!page) return {};
  return { title: `${page.title} | Bella Skilte`, description: page.summary };
}

export default async function SkilteServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = servicePages.find((p) => p.section === "skilte" && p.slug === slug);
  if (!page) notFound();
  return <ServicePageTemplate page={page} />;
}
