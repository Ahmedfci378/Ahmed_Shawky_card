import { notFound } from "next/navigation";
import { getCardBySlug, getAllSlugs } from "@/data/cards";
import CardShell from "@/components/card/CardShell";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const card = getCardBySlug(params.slug);
  if (!card) return {};
  return { title: card.seo.title, description: card.seo.description };
}

export function generateViewport({ params }) {
  const card = getCardBySlug(params.slug);
  return card ? { themeColor: card.theme.themeColor } : {};
}

export default function CardPage({ params }) {
  const card = getCardBySlug(params.slug);
  if (!card) notFound();
  return <CardShell card={card} />;
}
