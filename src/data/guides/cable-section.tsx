import { Callout, ProductInline, Table } from '@/components/guides/GuideUI';
import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from './types';

export const metadata: GuideMetadata = {
  slug: 'que-seccion-de-cable-usar',
  title: 'Qué sección de cable usar: 1,5, 2,5 o 4 mm² según el consumo',
  excerpt:
    'Guía clara para elegir entre cable de 1,5 mm², 2,5 mm² y 4 mm² según el circuito (iluminación, tomas o equipos de alto consumo). Tabla de amperaje y norma IRAM.',
  metaDescription:
    'Cómo elegir entre cable Argenplas 1,5, 2,5 y 4 mm² según consumo y tipo de circuito. Tabla de amperaje, norma IRAM y código de colores AEA 90364.',
  category: 'cables',
  published: '2026-05-19',
  readTimeMin: 6,
  relatedProducts: ['cable-argenplas-1-5mm', 'cable-argenplas-2-5mm', 'cable-argenplas-4mm'],
  targetKeywords: [
    'qué cable usar tomacorriente',
    'sección de cable por consumo',
    'cable 2.5 mm para tomas',
    'cable 4 mm cocina termotanque',
    'cable Argenplas 1.5 mm'
  ],
  icon: '🔌'
};

export default function Guide() {
  return (
    <>
      <p className="lead">
        Una de las preguntas que más nos hacen en el mostrador es esta:{' '}
        <strong>“¿qué sección de cable necesito?”</strong>. La respuesta corta: depende del
        consumo del circuito. En esta guía te explicamos cuándo usar cable de 1,5 mm², 2,5 mm² o
        4 mm², con una tabla práctica de amperaje y ejemplos reales para una instalación
        domiciliaria.
      </p>

      <h2>Antes de elegir: ¿qué dice la norma?</h2>
      <p>
        En Argentina, las instalaciones eléctricas se rigen por la{' '}
        <strong>reglamentación AEA 90364</strong> y los cables deben cumplir la{' '}
        <strong>norma IRAM NM 247-3</strong> (cables unipolares de PVC). La sección mínima por
        tipo de circuito está estandarizada — no es opcional, es lo que va a pedir la inspección
        eléctrica.
      </p>

      <h2>Tabla rápida: sección por tipo de circuito</h2>
      <Table
        caption="Sección mínima de cable según AEA 90364"
        headers={['Circuito', 'Sección', 'Corriente máx.', 'Protección típica']}
        rows={[
          ['Iluminación', '1,5 mm²', 'hasta 10 A', 'Térmica 1×10 A'],
          ['Tomacorrientes de uso general (TUG)', '2,5 mm²', 'hasta 20 A', 'Térmica 1×16 o 1×20 A'],
          ['Tomas de uso especial (TUE) — cocina, lavarropas, termotanque', '4 mm²', 'hasta 25 A', 'Térmica 1×25 A'],
          ['Equipos de alto consumo (aire acondicionado, horno eléctrico)', '4 a 6 mm²', '25-32 A', 'Térmica 1×25 o 1×32 A']
        ]}
      />

      <Callout tone="tip" title="Regla de oro">
        Si tenés dudas entre dos secciones, siempre conviene <strong>la más grande</strong>. Un
        cable sobredimensionado calienta menos, pierde menos energía y tiene más vida útil. La
        diferencia de precio es mínima frente al costo de una reinstalación.
      </Callout>

      <h2>Cable de 1,5 mm²: solo iluminación</h2>
      <p>
        El cable unipolar Argenplas de 1,5 mm² es el más fino que se usa en una instalación
        domiciliaria. Está pensado <strong>exclusivamente para circuitos de iluminación</strong>:
        plafones, dicroicas LED, lámparas colgantes y apliques de pared.
      </p>
      <p>
        Soporta hasta 10 A de corriente continua. Eso te permite alimentar fácilmente entre 10 y
        20 puntos de luz LED por circuito, que es lo normal en una vivienda de 2-3 ambientes.
      </p>

      <ProductInline slug="cable-argenplas-1-5mm" />

      <Callout tone="warning" title="Nunca lo uses para tomas">
        Un error muy común es usar cable de 1,5 mm² en circuitos de tomacorrientes para
        “ahorrar”. Lo único que se ahorra es el riesgo a tu propio recablado: el cable se
        recalienta, deteriora la aislación con el tiempo y puede provocar un incendio. Para tomas,
        siempre 2,5 mm² como mínimo.
      </Callout>

      <h2>Cable de 2,5 mm²: el más vendido del rubro</h2>
      <p>
        El Argenplas de 2,5 mm² es el caballo de batalla de cualquier instalación eléctrica
        domiciliaria. Lo usás para <strong>todos los circuitos de tomacorrientes de uso
        general</strong> (TUG): living, dormitorios, oficinas, comedor.
      </p>
      <p>
        Soporta hasta 20 A. En la práctica, eso significa que podés enchufar TV, computadora,
        cargadores, ventiladores y pequeños electrodomésticos sin problema. Es el cable que más
        vendemos a electricistas matriculados y constructoras en CABA.
      </p>

      <ProductInline slug="cable-argenplas-2-5mm" />

      <h2>Cable de 4 mm²: para circuitos exigentes</h2>
      <p>
        El cable de 4 mm² está reservado para los circuitos que consumen mucha corriente de manera
        sostenida: <strong>cocinas eléctricas, termotanques, lavarropas, lavavajillas y
        aires acondicionados fijos</strong>. Soporta hasta 25 A.
      </p>
      <p>
        Si vas a instalar un anafe de inducción o un horno eléctrico moderno, el 4 mm² es el
        mínimo recomendado. No mezcles este circuito con tomas comunes: el TUE (toma de uso
        especial) debe tener su propio cable y su propia térmica.
      </p>

      <ProductInline slug="cable-argenplas-4mm" />

      <h2>Código de colores: el mismo en todas las secciones</h2>
      <p>El código de colores del cableado argentino está definido por norma:</p>
      <ul>
        <li><strong>Marrón, negro o gris:</strong> fase (vivo)</li>
        <li><strong>Celeste claro:</strong> neutro</li>
        <li><strong>Verde-amarillo:</strong> tierra (protección)</li>
        <li><strong>Rojo:</strong> retorno (entre llave y luminaria, opcional)</li>
      </ul>
      <p>
        En Electricidad Ramallo tenemos los rollos Argenplas en todos los colores del código.
        Consultanos por WhatsApp si necesitás varios al mismo tiempo — armamos precio por bobina.
      </p>

      <Callout tone="info" title="¿Cuántos metros vas a necesitar?">
        Una regla práctica: para una vivienda de 60 m² calculá unos <strong>200 metros</strong>{' '}
        de cable repartidos entre las tres secciones (más de la mitad va a ser 2,5 mm²).
        Sumá un 10-15% extra para empalmes, errores de medición y reservas.
      </Callout>

      <h2>Próximo paso: protegé cada circuito</h2>
      <p>
        Una vez que tenés claro qué sección usar, el siguiente paso es proteger cada circuito con
        su térmica y un disyuntor general. Esto es{' '}
        <strong>obligatorio para que la instalación sea segura y para pasar la inspección</strong>.
        Te lo explicamos en detalle acá:
      </p>
      <p>
        →{' '}
        <Link
          href="/guias/termica-vs-disyuntor"
          className="text-brand font-semibold underline hover:text-brand-dark"
        >
          Térmica vs Disyuntor: cuál usar y por qué necesitás ambos
        </Link>
      </p>
    </>
  );
}
