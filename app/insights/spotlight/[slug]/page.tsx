import { notFound } from 'next/navigation';
import { spotlights } from '../../../../lib/spotlights';
import SpotlightDetail from './SpotlightDetail';

export function generateStaticParams() {
  return spotlights.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export default async function SpotlightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spotlight = spotlights.find((s) => s.slug === slug);
  if (!spotlight) return notFound();
  return <SpotlightDetail spotlight={spotlight} />;
}
