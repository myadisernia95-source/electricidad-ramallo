import { SITE_URL, localeUrl } from './seo';
import type { Product } from '@/data/products';
import type { Locale } from '@/i18n/config';

const PHONE_E164 = '+5491136030603';
const PHONE_DISPLAY = '+54 9 11 3603-0603';

/** Schema.org LocalBusiness — the headline structured data for a local store. */
export function localBusinessJsonLd(locale: Locale | string = 'es') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ElectricalContractor',
    additionalType: 'HardwareStore',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Electricidad Ramallo',
    legalName: 'Electricidad Ramallo',
    alternateName: ['Ramallo Electricidad', 'Electricidad Ramallo Núñez'],
    description:
      'Distribuidora de materiales eléctricos en Núñez, CABA. Más de 40 años abasteciendo obras, edificios y consorcios. Marcas: ABB, Siemens, Cambre, Philips y Argenplas. Envíos a CABA y AMBA.',
    url: localeUrl(locale, '/'),
    logo: `${SITE_URL}/LOGO.png`,
    image: [`${SITE_URL}/FRONT.jpg`, `${SITE_URL}/LOGO.png`],
    telephone: PHONE_E164,
    email: 'myadisernia95@gmail.com',
    foundingDate: '1986',
    slogan: 'Tu tienda de confianza en Núñez, Buenos Aires',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ramallo 2339',
      addressLocality: 'Núñez',
      addressRegion: 'Ciudad Autónoma de Buenos Aires',
      addressCountry: 'AR',
      postalCode: 'C1429'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.5474,
      longitude: -58.4663
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
      { '@type': 'AdministrativeArea', name: 'Área Metropolitana de Buenos Aires (AMBA)' }
    ],
    brand: [
      { '@type': 'Brand', name: 'ABB' },
      { '@type': 'Brand', name: 'Siemens' },
      { '@type': 'Brand', name: 'Cambre' },
      { '@type': 'Brand', name: 'Philips' },
      { '@type': 'Brand', name: 'Argenplas' }
    ],
    sameAs: ['https://www.instagram.com/electricidadramallo/'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: PHONE_E164,
        areaServed: 'AR',
        availableLanguage: ['Spanish']
      }
    ],
    paymentAccepted: 'Mercado Pago, Transferencia, Tarjeta de crédito, Tarjeta de débito, Efectivo',
    currenciesAccepted: 'ARS',
    knowsAbout: [
      'Materiales eléctricos',
      'Cables Argenplas',
      'Térmicas y disyuntores ABB',
      'Térmicas y disyuntores Siemens',
      'Fichas y tapas Cambre',
      'Iluminación LED',
      'Lámparas Philips',
      'Instalaciones eléctricas domiciliarias',
      'Tableros eléctricos'
    ]
  };
}

/** Schema.org Product — for product detail pages. */
export function productJsonLd(product: Product, locale: Locale | string = 'es') {
  const url = localeUrl(locale, `/producto/${product.slug}`);
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.name,
    description: product.description,
    image: product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`,
    sku: product.slug,
    brand: { '@type': 'Brand', name: product.brand },
    category: categoryLabel(product.category),
    url,
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Electricidad Ramallo', '@id': `${SITE_URL}/#localbusiness` }
    }
  };

  // Add pricing when available
  if (product.offerPrice ?? product.regularPrice) {
    const price = product.offerPrice ?? product.regularPrice!;
    (data.offers as Record<string, unknown>).price = price;
    (data.offers as Record<string, unknown>).priceValidUntil = priceValidUntil();
  }

  // Add specs as additionalProperty
  if (product.specs && product.specs.length > 0) {
    data.additionalProperty = product.specs.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value
    }));
  }

  return data;
}

/** Schema.org TechArticle — for the technical guide pages. */
export function techArticleJsonLd(args: {
  title: string;
  description: string;
  slug: string;
  published: string;
  updated?: string;
  keywords?: string[];
  locale?: Locale | string;
}) {
  const locale = args.locale ?? 'es';
  const url = localeUrl(locale, `/guias/${args.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: args.title,
    description: args.description,
    inLanguage: 'es-AR',
    datePublished: args.published,
    dateModified: args.updated ?? args.published,
    keywords: args.keywords?.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    author: { '@type': 'Organization', name: 'Electricidad Ramallo', '@id': `${SITE_URL}/#organization` },
    publisher: {
      '@type': 'Organization',
      name: 'Electricidad Ramallo',
      '@id': `${SITE_URL}/#organization`,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/LOGO.png` }
    },
    image: `${SITE_URL}/og-image.jpg`
  };
}

/** Schema.org BreadcrumbList — feeds the breadcrumb in Google SERPs. */
export function breadcrumbJsonLd(
  trail: { name: string; url: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/** Schema.org Organization — minimal, used in addition to LocalBusiness on home. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Electricidad Ramallo',
    url: SITE_URL,
    logo: `${SITE_URL}/LOGO.png`,
    sameAs: ['https://www.instagram.com/electricidadramallo/']
  };
}

/** Schema.org WebSite + SearchAction — enables sitelinks search box in Google. */
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Electricidad Ramallo',
    url: SITE_URL,
    inLanguage: 'es-AR',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

function categoryLabel(slug: string): string {
  switch (slug) {
    case 'iluminacion': return 'Iluminación';
    case 'cables':      return 'Cables y Conducciones';
    case 'tableros':    return 'Tableros y Disyuntores';
    case 'materiales':  return 'Materiales Eléctricos';
    default: return slug;
  }
}

/** Price offers default to valid for 30 days. */
function priceValidUntil(): string {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().split('T')[0];
}
