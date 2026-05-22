import type { CategorySlug } from './categories';

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  image: string;
  shortDesc: string;
  description: string;
  specs?: { label: string; value: string }[];
  /** Precio "tachado" / sin descuento, en pesos argentinos (sin centavos). */
  regularPrice?: number;
  /** Precio promocional, en pesos argentinos. Si está presente, marca el producto como en oferta. */
  offerPrice?: number;
  /** Marca manual para mostrar en sección "Ofertas" aunque no haya precio. */
  offer?: boolean;
  featured?: boolean;
};

export const products: Product[] = [
  // CABLES
  {
    slug: 'cable-argenplas-1-5mm',
    name: 'Cable Argenplas 1,5 mm²',
    brand: 'Argenplas',
    category: 'cables',
    image: '/images/products/cable-argenplas-1-5mm.jpg',
    shortDesc: 'Cable unipolar antillama Argenplas 1,5 mm² para instalaciones interiores.',
    description:
      'Cable unipolar Argenplas de 1,5 mm² fabricado con cobre electrolítico de alta pureza y aislación de PVC antillama. Es el cable estándar para circuitos de iluminación en instalaciones domiciliarias, oficinas, locales comerciales y obras industriales en CABA y Buenos Aires.\n\nCumple con la norma IRAM NM 247-3 y la reglamentación AEA 90364, lo que garantiza seguridad y compatibilidad con las exigencias de inspección eléctrica. Disponible en múltiples colores (negro, marrón, celeste, verde-amarillo, rojo) para identificar fases, neutro y tierra según el código de colores argentino. Stock permanente en bobinas y rollos por metro o por unidad.\n\nIdeal para electricistas matriculados, constructoras y consorcios.',
    specs: [
      { label: 'Sección', value: '1,5 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Norma', value: 'IRAM NM 247-3' },
      { label: 'Color', value: 'Varios' }
    ],
    regularPrice: 53655,
    offerPrice: 49500,
    featured: true
  },
  {
    slug: 'cable-argenplas-2-5mm',
    name: 'Cable Argenplas 2,5 mm²',
    brand: 'Argenplas',
    category: 'cables',
    image: '/images/products/cable-argenplas-2-5mm.jpg',
    shortDesc: 'Cable Argenplas 2,5 mm² para circuitos de tomacorrientes.',
    description:
      'Cable Argenplas unipolar de 2,5 mm² con conductor de cobre electrolítico y aislación de PVC antillama. Es el cable más vendido para circuitos de tomacorrientes en viviendas, oficinas y locales comerciales en CABA y AMBA, ya que soporta hasta 20 A de corriente continua.\n\nCumple con la norma IRAM NM 247-3 y la reglamentación AEA 90364. Aislación 450/750 V apta para instalaciones fijas en cañería embutida o en bandeja. Disponible en negro, marrón, celeste, verde-amarillo y rojo para respetar el código de colores eléctrico argentino.\n\nIdeal para electricistas, obras nuevas, reformas y mantenimiento de consorcios. Consultá precio mayorista por WhatsApp.',
    specs: [
      { label: 'Sección', value: '2,5 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Norma', value: 'IRAM NM 247-3' }
    ],
    regularPrice: 86578,
    offerPrice: 76500,
    featured: true
  },
  {
    slug: 'cable-argenplas-4mm',
    name: 'Cable Argenplas 4 mm²',
    brand: 'Argenplas',
    category: 'cables',
    image: '/images/products/cable-argenplas-4mm.jpg',
    shortDesc: 'Cable Argenplas 4 mm² para circuitos de alto consumo: cocina, termotanque, lavadero.',
    description:
      'Cable Argenplas unipolar de 4 mm² con conductor de cobre electrolítico y aislación de PVC antillama. Diseñado para circuitos de alta demanda como cocinas eléctricas, termotanques, lavaderos, hornos, anafes vitrocerámicos y equipos de aire acondicionado fijo.\n\nSoporta hasta 25 A de corriente continua. Aislación 450/750 V, cumple norma IRAM NM 247-3 y reglamentación AEA 90364. Disponible en los colores del código eléctrico argentino. Stock permanente en rollo y por metro para electricistas y consorcios en CABA y AMBA.\n\nConsultá precio mayorista o por bobina cerrada vía WhatsApp.',
    specs: [
      { label: 'Sección', value: '4 mm²' },
      { label: 'Tensión nominal', value: '450/750 V' },
      { label: 'Norma', value: 'IRAM NM 247-3' }
    ],
    regularPrice: 138773,
    offerPrice: 117000
  },

  // TABLEROS
  {
    slug: 'termica-abb-1x16',
    name: 'Térmica ABB 1x16 A',
    brand: 'ABB',
    category: 'tableros',
    image: '/images/products/termica-abb-1x16.jpg',
    shortDesc: 'Interruptor termomagnético ABB unipolar 1x16 A curva C, serie S200.',
    description:
      'Llave termomagnética ABB modelo S201 unipolar de 16 A con curva de disparo C. Protección integral contra sobrecargas y cortocircuitos para circuitos de iluminación, tomacorrientes y aplicaciones generales en tableros domiciliarios y comerciales.\n\nMontaje sobre riel DIN estándar. Capacidad de ruptura de 6 kA, conforme a norma IEC 60898-1. Marca ABB, fabricante suizo-sueco líder mundial en protección eléctrica con presencia oficial en Argentina. Diseño compacto de 1 módulo DIN para optimizar espacio en el tablero principal.\n\nIdeal para nuevos tableros, refuerzo de instalaciones existentes y obras según reglamento AEA 90364. Stock permanente en Electricidad Ramallo, Núñez.',
    specs: [
      { label: 'Polos', value: '1' },
      { label: 'Corriente', value: '16 A' },
      { label: 'Curva', value: 'C' },
      { label: 'Capacidad de ruptura', value: '6 kA' }
    ],
    featured: true
  },
  {
    slug: 'disyuntor-abb-2x40',
    name: 'Disyuntor ABB 2x40 A',
    brand: 'ABB',
    category: 'tableros',
    image: '/images/products/disyuntor-abb-2x40.jpg',
    shortDesc: 'Disyuntor diferencial ABB bipolar 2x40 A · 30 mA · tipo AC.',
    description:
      'Interruptor diferencial ABB de 2 polos, corriente nominal 40 A y sensibilidad 30 mA tipo AC. Protección obligatoria contra contactos directos e indirectos según el reglamento AEA 90364 — esto es lo que evita que una persona reciba una descarga eléctrica al tocar un electrodoméstico con falla.\n\nMontaje sobre riel DIN, 2 módulos. Marca ABB con respaldo internacional y disponibilidad en Argentina. Compatible con tableros estándar de viviendas y locales comerciales.\n\nRecomendado para tablero principal o seccional, junto a térmicas individuales por circuito. Ideal para instalación inicial de obra, reforma de consorcios y actualizaciones para cumplir con la reglamentación eléctrica vigente en CABA.',
    specs: [
      { label: 'Polos', value: '2' },
      { label: 'Corriente', value: '40 A' },
      { label: 'Sensibilidad', value: '30 mA' },
      { label: 'Tipo', value: 'AC' }
    ],
    regularPrice: 75958,
    offerPrice: 63000,
    offer: true
  },
  {
    slug: 'termica-siemens-1x20',
    name: 'Térmica Siemens 1x20 A',
    brand: 'Siemens',
    category: 'tableros',
    image: '/images/products/termica-siemens-1x20.jpg',
    shortDesc: 'Térmica Siemens unipolar 1x20 A curva C · serie 5SL.',
    description:
      'Interruptor termomagnético Siemens línea 5SL, unipolar de 20 A con curva de disparo C. Protección contra sobrecargas y cortocircuitos para circuitos de mayor demanda como cocinas eléctricas, termotanques y aires acondicionados de baja potencia.\n\nDiseño compacto de 1 módulo DIN para máximo aprovechamiento del espacio en el tablero. Capacidad de ruptura 6 kA, cumple norma IEC 60898-1. Marca Siemens con respaldo y disponibilidad oficial en Argentina, ideal para profesionales que buscan calidad alemana a precio mayorista.\n\nPara tableros domiciliarios, oficinas y obras nuevas según reglamento AEA 90364.',
    specs: [
      { label: 'Polos', value: '1' },
      { label: 'Corriente', value: '20 A' },
      { label: 'Curva', value: 'C' }
    ]
  },
  {
    slug: 'disyuntor-siemens-2x25',
    name: 'Disyuntor Siemens 2x25 A',
    brand: 'Siemens',
    category: 'tableros',
    image: '/images/products/disyuntor-siemens-2x25.jpg',
    shortDesc: 'Disyuntor diferencial Siemens bipolar 2x25 A · 30 mA · serie 5SM.',
    description:
      'Interruptor diferencial Siemens línea 5SM, bipolar de 25 A con sensibilidad de 30 mA. Garantiza la protección obligatoria contra contactos directos e indirectos según el reglamento AEA 90364 para instalaciones eléctricas domiciliarias en CABA.\n\nMontaje sobre riel DIN, 2 módulos. Marca Siemens, una de las marcas más confiables del mercado argentino para tableros eléctricos. Apto para tablero principal o seccional, combinado con térmicas individuales por circuito.\n\nIdeal para obras nuevas, reformas integrales y consorcios que necesitan actualizar el tablero a la normativa vigente. Stock disponible en Electricidad Ramallo, Núñez.',
    specs: [
      { label: 'Polos', value: '2' },
      { label: 'Corriente', value: '25 A' },
      { label: 'Sensibilidad', value: '30 mA' }
    ]
  },

  // MATERIALES
  {
    slug: 'ficha-cambre-xxi',
    name: 'Ficha Cambre XXI',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/products/ficha-cambre-xxi.jpg',
    shortDesc: 'Módulo tomacorriente schuko 16 A Cambre Siglo XXI · blanco.',
    description:
      'Módulo de tomacorriente schuko universal (2P+T) Cambre línea Siglo XXI en color blanco. Acepta fichas con espigas redondas (sistema europeo) y planas (sistema argentino), por eso es ideal para electrodomésticos importados sin necesidad de adaptadores.\n\nCorriente nominal 10/16 A, tensión 250 V. Construcción en termoplástico de alta resistencia, contactos de bronce con tratamiento antióxido. Cumple norma IRAM 2071. Compatible con bastidores y placas Cambre Siglo XXI y XXII.\n\nIdeal para residencias, oficinas y locales que necesiten tomas universales. Stock permanente en Electricidad Ramallo. Combiná con la tapa Cambre XXI blanca para un acabado prolijo y moderno.',
    specs: [
      { label: 'Tipo', value: 'Schuko 2P+T' },
      { label: 'Corriente', value: '10/16 A' },
      { label: 'Línea', value: 'XXI' }
    ],
    featured: true
  },
  {
    slug: 'tapa-cambre-xxi-blanca',
    name: 'Tapa Cambre XXI Blanca',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/products/tapa-cambre-xxi-blanca.jpg',
    shortDesc: 'Tapa Cambre Siglo XXI · 2 módulos · blanco mate.',
    description:
      'Conjunto de tapa y bastidor Cambre línea Siglo XXI para alojar hasta 2 módulos (tomas, llaves, dimmers, USB). Color blanco mate con terminación premium y perfil reducido que combina con cualquier ambiente.\n\nFabricada en termoplástico de alta resistencia, sin pintura — el color es del material, por lo que no se descascara con el tiempo. Compatible con cajas estándar de 5x10 cm tipo "rectangular para módulos". El bastidor incluido permite combinar módulos schuko, llaves de luz, dimmers, tomas USB y tapas ciegas Cambre.\n\nIdeal para terminación de instalaciones eléctricas en residencias, oficinas y locales en CABA.',
    specs: [
      { label: 'Módulos', value: '2' },
      { label: 'Color', value: 'Blanco mate' },
      { label: 'Compatibilidad', value: 'Caja 5x10' }
    ]
  },

  // ILUMINACION
  {
    slug: 'lampara-philips-bajo-consumo-20w',
    name: 'Lámpara Philips Bajo Consumo 20W',
    brand: 'Philips',
    category: 'iluminacion',
    image: '/images/products/lampara-philips-bajo-consumo-20w.jpg',
    shortDesc: 'Lámpara Philips Essential 20 W luz cálida · E27 · bajo consumo.',
    description:
      'Lámpara Philips de bajo consumo de 20 W con casquillo E27, equivalente a una incandescente de 100 W pero con un consumo 80% menor. Luz cálida 2700 K, perfecta para living, dormitorios, comedores y todos los espacios donde se busca crear un ambiente acogedor.\n\nMarca Philips con garantía oficial en Argentina. Vida útil prolongada y encendido instantáneo. Aprovechá la calidad de iluminación profesional al mejor precio mayorista en Electricidad Ramallo, Núñez.\n\nIdeal para residencias, hoteles, locales gastronómicos y todo proyecto donde la calidad de luz importe. Consultá disponibilidad por caja o por unidad vía WhatsApp.',
    specs: [
      { label: 'Potencia', value: '20 W' },
      { label: 'Equivalencia', value: '100 W' },
      { label: 'Temperatura color', value: '2700 K (cálida)' },
      { label: 'Casquillo', value: 'E27' }
    ]
  },
  {
    slug: 'lampara-led-dicroica-7w',
    name: 'Lámpara LED Dicroica Philips 7W',
    brand: 'Philips',
    category: 'iluminacion',
    image: '/images/products/lampara-led-dicroica-7w.jpg',
    shortDesc: 'Dicroica LED Philips 7 W · GU10 · luz fría 6500 K.',
    description:
      'Dicroica LED Philips de 7 W con casquillo GU10, equivalente a una halógena de 50 W con un ahorro energético del 86%. Luz fría 6500 K ideal para baños, cocinas, locales comerciales, vidrieras y espacios de trabajo donde se busca máxima visibilidad.\n\nÁngulo de apertura 36° a 110° según modelo, flujo luminoso de ~575 lm. Construcción en aluminio + policarbonato con disipador integrado para vida útil prolongada (hasta 15.000 horas). Marca Philips con garantía oficial en Argentina, una de las referencias mundiales en iluminación LED.\n\nIdeal para spots embutidos, rieles, focos direccionables y reemplazo directo de dicroicas halógenas viejas. Stock permanente en Electricidad Ramallo, Núñez.',
    specs: [
      { label: 'Potencia', value: '7 W' },
      { label: 'Equivalencia', value: '50 W halógena' },
      { label: 'Temperatura color', value: '6500 K (fría)' },
      { label: 'Casquillo', value: 'GU10' }
    ],
    offer: true,
    featured: true
  }
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getOffers(): Product[] {
  return products.filter((p) => p.offer);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.featured);
}
