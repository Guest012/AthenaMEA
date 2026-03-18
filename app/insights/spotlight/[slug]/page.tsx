import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { spotlights } from '../../../../lib/spotlights';
import SpotlightDetail from './SpotlightDetail';

export function generateStaticParams() {
  return spotlights.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const spotlight = spotlights.find((s) => s.slug === slug);
  if (!spotlight) return {};

  const title = `${spotlight.name}, ${spotlight.title} at ${spotlight.company} — Leadership Spotlight`;
  const description = spotlight.summary.length > 155
    ? spotlight.summary.slice(0, 152) + '...'
    : spotlight.summary;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.athenamea.com/insights/spotlight/${slug}`,
    },
    openGraph: {
      title: `${spotlight.name} — ATHENA MEA Leadership Spotlight`,
      description,
      url: `https://www.athenamea.com/insights/spotlight/${slug}`,
      type: 'article',
    },
  };
}

export default async function SpotlightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spotlight = spotlights.find((s) => s.slug === slug);
  if (!spotlight) return notFound();
  return <SpotlightDetail spotlight={spotlight} />;
}
