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
  /** Unidad de venta visible al cliente (ej: "metro", "rollo", "unidad"). Por defecto "unidad". */
  unit?: 'unidad' | 'metro' | 'rollo' | 'caja';
  /** Precio "tachado" / sin descuento, en pesos argentinos (sin centavos). */
  regularPrice?: number;
  /** Precio promocional, en pesos argentinos. Si está presente, marca el producto como en oferta. */
  offerPrice?: number;
  /** Marca manual para mostrar en sección "Ofertas" aunque no haya precio. */
  offer?: boolean;
  featured?: boolean;
  /** Código interno del fabricante / depósito (no se muestra al cliente). */
  internalCode?: string;
};

export const products: Product[] = [
  // ==========================================================================
  // CABLES & CONDUCCIONES
  // ==========================================================================
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
    regularPrice: 55823,
    offerPrice: 53032,
    featured: true,
    internalCode: 'C4-UNI0015'
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
    regularPrice: 90077,
    offerPrice: 85573,
    featured: true,
    internalCode: 'C4-UNI0025'
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
    regularPrice: 144381,
    offerPrice: 137162,
    internalCode: 'C4-UNI0040'
  },
  {
    slug: 'cable-taller-tpr-3x1mm',
    name: 'Cable Tipo Taller TPR 3x1,00 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-taller-tpr-3x1mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable tipo taller TPR 3x1 mm² · venta por metro · uso flexible.',
    description:
      'Cable tipo taller TPR (Tetra Polychlorohexane Rubber) de 3x1 mm². Diseño flexible con cubierta de goma resistente, ideal para alargues, herramientas portátiles, electrodomésticos y conexiones móviles en obra o taller.\n\nVenta por metro. Cumple normas IRAM. Stock permanente en Electricidad Ramallo, Núñez.',
    specs: [
      { label: 'Conformación', value: '3 conductores' },
      { label: 'Sección', value: '1,00 mm²' },
      { label: 'Tipo', value: 'TPR (taller)' }
    ],
    regularPrice: 1465,
    offerPrice: 1392,
    internalCode: 'C4-TPR3100'
  },
  {
    slug: 'cable-taller-tpr-3x1-5mm',
    name: 'Cable Tipo Taller TPR 3x1,50 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-taller-tpr-3x1-5mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable tipo taller TPR 3x1,50 mm² · venta por metro · uso flexible.',
    description:
      'Cable tipo taller TPR de 3x1,50 mm². Sección intermedia ideal para alargues robustos, herramientas eléctricas de mediana potencia y conexiones flexibles que necesitan más capacidad de corriente que el 3x1.\n\nVenta por metro. Cubierta de goma resistente al desgaste. Stock permanente.',
    specs: [
      { label: 'Conformación', value: '3 conductores' },
      { label: 'Sección', value: '1,50 mm²' },
      { label: 'Tipo', value: 'TPR (taller)' }
    ],
    regularPrice: 2237,
    offerPrice: 2125,
    internalCode: 'C4-TPR3150'
  },
  {
    slug: 'cable-taller-tpr-3x2-5mm',
    name: 'Cable Tipo Taller TPR 3x2,50 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-taller-tpr-3x2-5mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable tipo taller TPR 3x2,50 mm² · venta por metro · alta exigencia.',
    description:
      'Cable tipo taller TPR de 3x2,50 mm². Sección reforzada para uso con herramientas pesadas, máquinas industriales, alargues de obra y conexiones móviles de alto consumo.\n\nVenta por metro. Cubierta de goma resistente. Stock permanente para profesionales en CABA y AMBA.',
    specs: [
      { label: 'Conformación', value: '3 conductores' },
      { label: 'Sección', value: '2,50 mm²' },
      { label: 'Tipo', value: 'TPR (taller)' }
    ],
    regularPrice: 3616,
    offerPrice: 3435,
    internalCode: 'C4-TPR3250'
  },
  {
    slug: 'cable-subterraneo-2x1-5mm',
    name: 'Cable Subterráneo 2x1,50 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-2x1-5mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 2x1,50 mm² · venta por metro · para instalación enterrada.',
    description:
      'Cable subterráneo 2x1,50 mm² con aislación reforzada para enterrar directamente o pasar en cañería bajo tierra. Apto para conexiones exteriores, iluminación de jardín, postes, y derivaciones de tablero seccional.\n\nCumple normas IRAM. Venta por metro. Stock permanente.',
    specs: [
      { label: 'Conformación', value: '2 conductores' },
      { label: 'Sección', value: '1,50 mm²' },
      { label: 'Uso', value: 'Subterráneo' }
    ],
    regularPrice: 2000,
    offerPrice: 1900,
    internalCode: 'C4-SUB0020150'
  },
  {
    slug: 'cable-subterraneo-2x2-5mm',
    name: 'Cable Subterráneo 2x2,50 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-2x2-5mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 2x2,50 mm² · venta por metro · para instalación enterrada.',
    description:
      'Cable subterráneo 2x2,50 mm² para enterrar o cañería subterránea. Sección intermedia para circuitos de uso mediano, ideal para postes de iluminación, portones automáticos y conexiones de bombas o equipos exteriores.\n\nCumple normas IRAM. Venta por metro.',
    specs: [
      { label: 'Conformación', value: '2 conductores' },
      { label: 'Sección', value: '2,50 mm²' },
      { label: 'Uso', value: 'Subterráneo' }
    ],
    regularPrice: 2791,
    offerPrice: 2651,
    internalCode: 'C4-SUB0020250'
  },
  {
    slug: 'cable-subterraneo-3x1-5mm',
    name: 'Cable Subterráneo 3x1,50 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-3x1-5mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 3x1,50 mm² · venta por metro · incluye tierra.',
    description:
      'Cable subterráneo 3x1,50 mm² (fase + neutro + tierra) para instalaciones enterradas que requieren puesta a tierra. Ideal para iluminación exterior con jabalina, motores chicos en patio o jardín y derivaciones para galpones.\n\nCumple normas IRAM. Venta por metro.',
    specs: [
      { label: 'Conformación', value: '3 conductores' },
      { label: 'Sección', value: '1,50 mm²' },
      { label: 'Uso', value: 'Subterráneo' }
    ],
    regularPrice: 2671,
    offerPrice: 2537,
    internalCode: 'C4-SUB0030150'
  },
  {
    slug: 'cable-subterraneo-3x2-5mm',
    name: 'Cable Subterráneo 3x2,50 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-3x2-5mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 3x2,50 mm² · venta por metro · incluye tierra.',
    description:
      'Cable subterráneo 3x2,50 mm² con conductor de tierra. Sección recomendada para tomas exteriores enterrados, bombas de agua, portones eléctricos y derivaciones a galpones o casillas.\n\nCumple normas IRAM. Venta por metro.',
    specs: [
      { label: 'Conformación', value: '3 conductores' },
      { label: 'Sección', value: '2,50 mm²' },
      { label: 'Uso', value: 'Subterráneo' }
    ],
    regularPrice: 3984,
    offerPrice: 3785,
    internalCode: 'C4-SUB0030250'
  },
  {
    slug: 'cable-subterraneo-3x4mm',
    name: 'Cable Subterráneo 3x4,00 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-3x4mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 3x4 mm² · venta por metro · alta corriente con tierra.',
    description:
      'Cable subterráneo 3x4 mm² (fase + neutro + tierra) para circuitos enterrados de alta demanda. Ideal para alimentar tableros secundarios en quinchos, talleres separados de la vivienda y motores trifásicos chicos.\n\nCumple normas IRAM. Venta por metro.',
    specs: [
      { label: 'Conformación', value: '3 conductores' },
      { label: 'Sección', value: '4,00 mm²' },
      { label: 'Uso', value: 'Subterráneo' }
    ],
    regularPrice: 5883,
    offerPrice: 5589,
    internalCode: 'C4-SUB0030400'
  },
  {
    slug: 'cable-subterraneo-4x4mm',
    name: 'Cable Subterráneo 4x4,00 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-4x4mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 4x4 mm² · venta por metro · trifásico.',
    description:
      'Cable subterráneo 4x4 mm² (3 fases + neutro o 3 fases + tierra) para alimentación trifásica enterrada. Ideal para tableros principales de comercios, galpones industriales y motores trifásicos.\n\nCumple normas IRAM. Venta por metro.',
    specs: [
      { label: 'Conformación', value: '4 conductores' },
      { label: 'Sección', value: '4,00 mm²' },
      { label: 'Uso', value: 'Subterráneo trifásico' }
    ],
    regularPrice: 7558,
    offerPrice: 7180,
    internalCode: 'C4-SUB0040400'
  },
  {
    slug: 'cable-subterraneo-4x6mm',
    name: 'Cable Subterráneo 4x6,00 mm²',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/cable-subterraneo-4x6mm.jpg',
    unit: 'metro',
    shortDesc: 'Cable subterráneo 4x6 mm² · venta por metro · trifásico reforzado.',
    description:
      'Cable subterráneo 4x6 mm² para instalaciones trifásicas de alta corriente. Recomendado para alimentación de tableros generales en obra mediana, galpones industriales y conexiones de empresa.\n\nCumple normas IRAM. Venta por metro.',
    specs: [
      { label: 'Conformación', value: '4 conductores' },
      { label: 'Sección', value: '6,00 mm²' },
      { label: 'Uso', value: 'Subterráneo trifásico' }
    ],
    regularPrice: 10726,
    offerPrice: 10190,
    internalCode: 'C4-SUB0040600'
  },
  {
    slug: 'bandeja-portacable-10cm',
    name: 'Bandeja Portacable 10 cm',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/bandeja-portacable-10cm.jpg',
    shortDesc: 'Bandeja portacable de 10 cm de ancho para conducción ordenada.',
    description:
      'Bandeja portacable de 10 cm de ancho para tendido prolijo de cables en obra, sótanos, galpones y oficinas. Permite agrupar varios cables en una conducción organizada, accesible para mantenimiento y ampliaciones futuras.\n\nLargo estándar 3 metros por unidad. Tratamiento anticorrosivo. Stock permanente en Electricidad Ramallo.',
    specs: [
      { label: 'Ancho', value: '10 cm' },
      { label: 'Largo', value: '3 m' }
    ],
    regularPrice: 16905,
    offerPrice: 16060
  },
  {
    slug: 'bandeja-portacable-15cm',
    name: 'Bandeja Portacable 15 cm',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/bandeja-portacable-15cm.jpg',
    shortDesc: 'Bandeja portacable de 15 cm de ancho · uso medio.',
    description:
      'Bandeja portacable de 15 cm de ancho para tendido de cables en instalaciones medianas. Apta para múltiples ramales y conducciones de oficinas, comercios y obras nuevas.\n\nLargo estándar 3 metros por unidad. Tratamiento anticorrosivo.',
    specs: [
      { label: 'Ancho', value: '15 cm' },
      { label: 'Largo', value: '3 m' }
    ],
    regularPrice: 19175,
    offerPrice: 18216
  },
  {
    slug: 'bandeja-portacable-20cm',
    name: 'Bandeja Portacable 20 cm',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/bandeja-portacable-20cm.jpg',
    shortDesc: 'Bandeja portacable de 20 cm de ancho · uso industrial.',
    description:
      'Bandeja portacable de 20 cm para instalaciones industriales o de gran porte. Acepta gran cantidad de cables de potencia y datos en una sola conducción ordenada.\n\nLargo estándar 3 metros. Tratamiento anticorrosivo.',
    specs: [
      { label: 'Ancho', value: '20 cm' },
      { label: 'Largo', value: '3 m' }
    ],
    regularPrice: 22700,
    offerPrice: 21565
  },
  {
    slug: 'bandeja-portacable-30cm',
    name: 'Bandeja Portacable 30 cm',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/products/bandeja-portacable-30cm.jpg',
    shortDesc: 'Bandeja portacable de 30 cm de ancho · uso industrial pesado.',
    description:
      'Bandeja portacable de 30 cm de ancho para instalaciones industriales pesadas, datacenters y galpones donde se requiere alta capacidad de conducción.\n\nLargo estándar 3 metros. Tratamiento anticorrosivo. Stock por encargo.',
    specs: [
      { label: 'Ancho', value: '30 cm' },
      { label: 'Largo', value: '3 m' }
    ],
    regularPrice: 29600,
    offerPrice: 28120
  },
  {
    slug: 'union-bandeja-portacable',
    name: 'Unión de Bandeja Portacable',
    brand: 'Genérico',
    category: 'cables',
    image: '/images/categories/cables.jpg',
    shortDesc: 'Accesorio de unión entre tramos de bandeja portacable.',
    description:
      'Accesorio metálico de unión entre dos tramos de bandeja portacable. Incluye tornillería. Compatible con bandejas de 10, 15, 20 y 30 cm.\n\nEsencial para continuar el tendido sin discontinuidades estructurales. Stock permanente.',
    specs: [
      { label: 'Compatibilidad', value: '10 a 30 cm' }
    ],
    regularPrice: 44500,
    offerPrice: 42275
  },
  {
    slug: 'cano-roker-spesado-20mm',
    name: 'Caño Doblado en Frío Roker S/Pesado 20 mm',
    brand: 'Roker',
    category: 'cables',
    image: '/images/products/cano-roker-spesado-20mm.jpg',
    shortDesc: 'Caño semipesado Roker 20 mm doblado en frío para instalaciones embutidas.',
    description:
      'Caño doblado en frío marca Roker, línea semipesado (S/Pesado), diámetro 20 mm. Ideal para instalaciones eléctricas embutidas en pared o losa según norma IRAM.\n\nLargo estándar 3 metros. Stock permanente en Electricidad Ramallo, Núñez. Precio bajo consulta — escribinos por WhatsApp.',
    internalCode: 'ROKER-CRX20'
  },
  {
    slug: 'cano-roker-spesado-25mm',
    name: 'Caño Doblado en Frío Roker S/Pesado 25 mm',
    brand: 'Roker',
    category: 'cables',
    image: '/images/products/cano-roker-spesado-25mm.jpg',
    shortDesc: 'Caño semipesado Roker 25 mm doblado en frío para instalaciones embutidas.',
    description:
      'Caño doblado en frío marca Roker, línea semipesado (S/Pesado), diámetro 25 mm. Sección mayor para tramos con varios cables o derivaciones múltiples en instalaciones embutidas.\n\nLargo estándar 3 metros. Stock permanente. Precio bajo consulta vía WhatsApp.',
    internalCode: 'ROKER-CRX25'
  },

  // ==========================================================================
  // TABLEROS & DISYUNTORES
  // ==========================================================================
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
    regularPrice: 11464,
    offerPrice: 10891,
    featured: true
  },
  {
    slug: 'termica-abb-2x16',
    name: 'Térmica ABB 2x16 A',
    brand: 'ABB',
    category: 'tableros',
    image: '/images/products/termica-abb-2x16.jpg',
    shortDesc: 'Termomagnética ABB bipolar 2x16 A curva C, serie S200.',
    description:
      'Llave termomagnética ABB serie S200, bipolar 2x16 A con curva C. Protege simultáneamente fase y neutro contra sobrecargas y cortocircuitos. Recomendada para circuitos de tomas o iluminación donde se desea cortar ambos conductores en caso de falla.\n\nMontaje sobre riel DIN, 2 módulos. Capacidad de ruptura 6 kA, norma IEC 60898-1. Marca ABB con respaldo oficial en Argentina.',
    specs: [
      { label: 'Polos', value: '2' },
      { label: 'Corriente', value: '16 A' },
      { label: 'Curva', value: 'C' },
      { label: 'Capacidad de ruptura', value: '6 kA' }
    ],
    regularPrice: 17000,
    offerPrice: 16000
  },
  {
    slug: 'disyuntor-abb-2x40',
    name: 'Disyuntor ABB 2x40 A 30 mA',
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
    offerPrice: 72160,
    offer: true
  },
  {
    slug: 'disyuntor-abb-4x40',
    name: 'Disyuntor ABB 4x40 A',
    brand: 'ABB',
    category: 'tableros',
    image: '/images/products/disyuntor-abb-4x40.jpg',
    shortDesc: 'Disyuntor diferencial ABB tetrapolar 4x40 A · trifásico.',
    description:
      'Interruptor diferencial ABB de 4 polos, corriente nominal 40 A. Protección diferencial para instalaciones trifásicas (3 fases + neutro). Indicado para tableros generales de comercios, galpones, talleres y oficinas con alimentación trifásica.\n\nMontaje sobre riel DIN, 4 módulos. Marca ABB con respaldo oficial en Argentina y disponibilidad permanente.',
    specs: [
      { label: 'Polos', value: '4' },
      { label: 'Corriente', value: '40 A' },
      { label: 'Aplicación', value: 'Trifásico' }
    ],
    regularPrice: 99000,
    offerPrice: 94050
  },
  {
    slug: 'termica-siemens-1x20',
    name: 'Térmica Bipolar Siemens 2x10 / 2x16 / 2x20 / 2x25 A',
    brand: 'Siemens',
    category: 'tableros',
    image: '/images/products/termica-siemens-1x20.jpg',
    shortDesc: 'Térmica bipolar Siemens · 4 amperajes disponibles · mismo precio.',
    description:
      'Interruptor termomagnético Siemens bipolar disponible en 4 valores de corriente: 10 A, 16 A, 20 A y 25 A. Todos los modelos al mismo precio — al hacer el pedido por WhatsApp aclará qué amperaje necesitás.\n\nCurva de disparo C, protección contra sobrecargas y cortocircuitos en ambos polos (fase y neutro). Capacidad de ruptura 6 kA, montaje sobre riel DIN (2 módulos). Marca Siemens con respaldo y disponibilidad oficial en Argentina.\n\nIdeal para circuitos de tomacorrientes generales (2x16/20), termotanques (2x20), cocinas (2x25) o iluminación reforzada (2x10) en tableros domiciliarios e industriales según reglamento AEA 90364.',
    specs: [
      { label: 'Polos', value: '2' },
      { label: 'Corriente', value: '10 / 16 / 20 / 25 A (elegí al consultar)' },
      { label: 'Curva', value: 'C' },
      { label: 'Serie', value: 'Siemens 5SL' }
    ],
    regularPrice: 27160,
    offerPrice: 25802
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
    ],
    regularPrice: 109646,
    offerPrice: 104164
  },
  {
    slug: 'disyuntor-siemens-2x40',
    name: 'Disyuntor Siemens 2x40 A',
    brand: 'Siemens',
    category: 'tableros',
    image: '/images/products/disyuntor-siemens-2x40.jpg',
    shortDesc: 'Disyuntor diferencial Siemens bipolar 2x40 A · 30 mA · serie 5SM.',
    description:
      'Interruptor diferencial Siemens 5SM, bipolar de 40 A con sensibilidad de 30 mA. Protección diferencial general para tableros domiciliarios y comerciales con consumo medio-alto. Cumple reglamento AEA 90364.\n\nMontaje sobre riel DIN, 2 módulos. Marca Siemens con respaldo oficial en Argentina.',
    specs: [
      { label: 'Polos', value: '2' },
      { label: 'Corriente', value: '40 A' },
      { label: 'Sensibilidad', value: '30 mA' }
    ],
    regularPrice: 123179,
    offerPrice: 117020
  },

  // ==========================================================================
  // MATERIALES ELÉCTRICOS
  // ==========================================================================
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
    regularPrice: 1904,
    offerPrice: 1809,
    featured: true
  },
  {
    slug: 'modulo-cambre-xxi-combinado',
    name: 'Módulo Cambre XXI Combinado',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/categories/materiales.jpg',
    shortDesc: 'Módulo combinado Cambre Siglo XXI (M6901) — llave de 2 vías.',
    description:
      'Módulo combinado Cambre línea Siglo XXI. Llave de 2 vías (también llamada conmutador o "combinada") que permite controlar un mismo punto de luz desde dos lugares distintos — típico para luces de escalera, pasillos largos o dormitorios con interruptor a la entrada y otro junto a la cama.\n\nCorriente nominal 10 A, tensión 250 V. Compatible con bastidores y tapas Cambre Siglo XXI y XXII. Stock permanente en Electricidad Ramallo.',
    specs: [
      { label: 'Tipo', value: 'Combinador / 2 vías' },
      { label: 'Corriente', value: '10 A' },
      { label: 'Línea', value: 'XXI' }
    ],
    regularPrice: 2057,
    offerPrice: 1954,
    internalCode: 'M6901'
  },
  {
    slug: 'modulo-cambre-xxi-toma-2pt',
    name: 'Módulo Cambre XXI Toma 2P+T',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/products/modulo-cambre-xxi-toma-2pt.jpg',
    shortDesc: 'Módulo toma 2P+T Cambre Siglo XXI (M6909) — con tierra.',
    description:
      'Módulo de tomacorriente 2P+T (fase + neutro + tierra) Cambre línea Siglo XXI. Toma estándar argentino con tres patitas planas, cumple norma IRAM 2071.\n\nCorriente nominal 10/16 A, tensión 250 V. Compatible con bastidores y tapas Cambre Siglo XXI y XXII. Construcción en termoplástico resistente.',
    specs: [
      { label: 'Tipo', value: 'Toma 2P+T (estándar argentino)' },
      { label: 'Corriente', value: '10/16 A' },
      { label: 'Línea', value: 'XXI' }
    ],
    regularPrice: 2552,
    offerPrice: 2424,
    internalCode: 'M6909'
  },
  {
    slug: 'modulo-cambre-xxi-toma-2pt-doble',
    name: 'Módulo Cambre XXI Toma 2P+T Doble',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/products/modulo-cambre-xxi-toma-2pt-doble.jpg',
    shortDesc: 'Módulo toma 2P+T doble Cambre Siglo XXI (M6999) — dos tomas en un módulo.',
    description:
      'Módulo doble de tomacorriente 2P+T Cambre línea Siglo XXI: dos tomas con tierra integradas en un solo módulo, ideal cuando necesitás más conexiones y querés ahorrar espacio en el bastidor.\n\nCorriente nominal 10/16 A por toma, tensión 250 V. Cumple norma IRAM 2071. Compatible con bastidores y tapas Cambre Siglo XXI y XXII. Stock permanente en Electricidad Ramallo, Núñez.',
    specs: [
      { label: 'Tipo', value: 'Toma doble 2P+T' },
      { label: 'Corriente', value: '10/16 A por toma' },
      { label: 'Línea', value: 'XXI' }
    ],
    regularPrice: 7177,
    offerPrice: 6818,
    internalCode: 'M6999'
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
    ],
    regularPrice: 729,
    offerPrice: 693,
    internalCode: 'CAMBRE-T001'
  },
  {
    slug: 'tapa-cambre-xxii-blanca',
    name: 'Tapa Cambre XXII Blanca',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/products/tapa-cambre-xxii-blanca.jpg',
    shortDesc: 'Tapa Cambre Siglo XXII · blanca · diseño premium.',
    description:
      'Tapa Cambre línea Siglo XXII en color blanco. Evolución estética de la línea XXI con perfiles más finos, terminación premium y mejor integración visual en ambientes modernos. Compatible con módulos Cambre Siglo XXI y XXII.\n\nFabricada en termoplástico de alta calidad. Ideal para residencias, hoteles, oficinas y locales gastronómicos donde el detalle de terminación importa.',
    specs: [
      { label: 'Línea', value: 'XXII' },
      { label: 'Color', value: 'Blanco' }
    ],
    regularPrice: 2121,
    offerPrice: 2015,
    internalCode: 'CAMBRE-T002'
  },
  {
    slug: 'tapa-cambre-xxii-negra',
    name: 'Tapa Cambre XXII Negra',
    brand: 'Cambre',
    category: 'materiales',
    image: '/images/products/tapa-cambre-xxii-negra.jpg',
    shortDesc: 'Tapa Cambre Siglo XXII · negra · diseño industrial.',
    description:
      'Tapa Cambre línea Siglo XXII en color negro. Acabado mate negro para proyectos de diseño industrial, lofts, oficinas modernas y locales con paleta oscura. Compatible con módulos Cambre Siglo XXI y XXII.\n\nFabricada en termoplástico de alta calidad. El color es del material, por lo que no se descascara con el tiempo.',
    specs: [
      { label: 'Línea', value: 'XXII' },
      { label: 'Color', value: 'Negro' }
    ],
    regularPrice: 2474,
    offerPrice: 2350,
    internalCode: 'CAMBRE-T004'
  },
  {
    slug: 'caja-rectangular',
    name: 'Caja Rectangular',
    brand: 'Genérico',
    category: 'materiales',
    image: '/images/categories/materiales.jpg',
    shortDesc: 'Caja rectangular embutida para módulos eléctricos.',
    description:
      'Caja rectangular embutida estándar para alojar módulos eléctricos (tomas, llaves, dimmers). Medida 5x10 cm. Compatible con tapas Cambre Siglo XXI y XXII y otras líneas estándar del mercado argentino.\n\nFabricada en chapa galvanizada o plástico ABS según disponibilidad. Stock permanente.',
    specs: [
      { label: 'Medida', value: '5x10 cm' },
      { label: 'Tipo', value: 'Embutida rectangular' }
    ],
    regularPrice: 360,
    offerPrice: 342
  },

  // ==========================================================================
  // ILUMINACIÓN
  // ==========================================================================
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
  },
  {
    slug: 'ojo-de-buey',
    name: 'Ojo de Buey',
    brand: 'Genérico',
    category: 'iluminacion',
    image: '/images/products/ojo-de-buey.jpg',
    shortDesc: 'Ojo de buey para iluminación embutida en cielorraso.',
    description:
      'Artefacto tipo "ojo de buey" para iluminación embutida en cielorrasos de yeso o durlock. Diseño circular fijo, ideal para distribuir iluminación general en oficinas, locales y pasillos. Compatible con lámparas dicroicas GU10 o LED equivalentes.\n\nDiseño limpio que se integra estéticamente con el cielorraso. Stock permanente.',
    specs: [
      { label: 'Tipo', value: 'Embutido circular fijo' },
      { label: 'Compatibilidad', value: 'GU10 / E27 según modelo' }
    ],
    regularPrice: 6500,
    offerPrice: 6175
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
