import type { Guide, GuideMetadata } from './types';

import * as cableSection from './cable-section';
import * as termicaVsDisyuntor from './termica-vs-disyuntor';
import * as comoArmarTablero from './como-armar-tablero-electrico-domiciliario';
import * as abbVsSiemens from './abb-vs-siemens-tablero';
import * as lumenesPorAmbiente from './lumenes-por-ambiente';

const modules: Guide[] = [
  cableSection,
  termicaVsDisyuntor,
  comoArmarTablero,
  abbVsSiemens,
  lumenesPorAmbiente
];

/** Sort guides by publish date desc, then by title. */
export const guides: Guide[] = [...modules].sort((a, b) => {
  const t = b.metadata.published.localeCompare(a.metadata.published);
  return t !== 0 ? t : a.metadata.title.localeCompare(b.metadata.title);
});

export const guidesMetadata: GuideMetadata[] = guides.map((g) => g.metadata);

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.metadata.slug === slug);
}

/** Return guides that mention this product (used on product pages). */
export function getGuidesForProduct(productSlug: string): GuideMetadata[] {
  return guidesMetadata.filter((m) => m.relatedProducts?.includes(productSlug));
}

/** Return guides in a given category (used on category pages). */
export function getGuidesForCategory(category: string): GuideMetadata[] {
  return guidesMetadata.filter((m) => m.category === category);
}
