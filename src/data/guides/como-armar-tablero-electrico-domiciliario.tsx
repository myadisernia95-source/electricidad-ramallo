import { Callout, ProductInline, Table } from '@/components/guides/GuideUI';
import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from './types';

export const metadata: GuideMetadata = {
  slug: 'como-armar-tablero-electrico-domiciliario',
  title: 'Cómo armar un tablero eléctrico domiciliario paso a paso (con lista de materiales)',
  excerpt:
    'Guía completa para armar el tablero principal de una vivienda según reglamentación AEA 90364. Componentes, orden de montaje, lista de materiales y errores comunes a evitar.',
  metaDescription:
    'Cómo armar un tablero eléctrico domiciliario seguro: disyuntor diferencial, térmicas, riel DIN, cables. Reglamento AEA 90364. Lista de materiales con marcas ABB y Siemens.',
  category: 'tableros',
  published: '2026-05-19',
  readTimeMin: 9,
  relatedProducts: [
    'termica-abb-1x16',
    'disyuntor-abb-2x40',
    'termica-siemens-1x20',
    'cable-argenplas-1-5mm',
    'cable-argenplas-2-5mm',
    'cable-argenplas-4mm'
  ],
  targetKeywords: [
    'cómo armar tablero eléctrico',
    'tablero principal vivienda',
    'lista materiales tablero domiciliario',
    'AEA 90364 tablero'
  ],
  icon: '📐'
};

export default function Guide() {
  return (
    <>
      <p className="lead">
        Armar el tablero eléctrico es uno de los pasos más importantes de una obra. Hecho bien,
        la casa funciona segura por décadas. Hecho mal, es la principal causa de incendios de
        origen eléctrico. Esta guía te muestra <strong>cómo armar un tablero domiciliario
        típico</strong> según la reglamentación argentina vigente — con la lista exacta de
        materiales que vas a necesitar.
      </p>

      <Callout tone="warning" title="Trabajo para profesional">
        Esta guía es informativa. La instalación final debe hacerla un{' '}
        <strong>electricista matriculado</strong>, especialmente para pasar la inspección del
        ENRE o la distribuidora. Si te animás a entender qué te están instalando, es un buen
        punto de partida.
      </Callout>

      <h2>Componentes obligatorios</h2>
      <p>
        Un tablero domiciliario moderno tiene 4 tipos de componentes, montados sobre un{' '}
        <strong>riel DIN</strong> dentro de una caja con tapa transparente o ciega:
      </p>

      <Table
        headers={['Componente', 'Función', 'Cantidad típica']}
        rows={[
          ['Interruptor principal', 'Corta toda la electricidad de la casa.', '1 (bipolar 40 A)'],
          ['Disyuntor diferencial', 'Protege a las personas contra descargas.', '1 (bipolar 40 A · 30 mA)'],
          ['Térmicas (termomagnéticas)', 'Protege cada circuito contra cortos y sobrecargas.', '4-8 según cantidad de circuitos'],
          ['Borneras de neutro y tierra', 'Centralizan los cables de neutro y tierra.', '1 de cada']
        ]}
        caption="Componentes mínimos según AEA 90364"
      />

      <h2>Orden de montaje en el riel DIN</h2>
      <p>De izquierda a derecha (o de arriba abajo en tableros verticales):</p>
      <ol>
        <li>
          <strong>Llave principal</strong> bipolar 40 A. Es el “corta general” — todo lo demás
          depende de ella.
        </li>
        <li>
          <strong>Disyuntor diferencial</strong> bipolar 40 A con sensibilidad 30 mA tipo AC.
          Va a continuación de la llave principal y antes de las térmicas.
        </li>
        <li>
          <strong>Térmicas</strong> unipolares (1×10 A, 1×16 A, 1×20 A, 1×25 A según
          circuito). Una por cada salida.
        </li>
      </ol>

      <ProductInline slug="disyuntor-abb-2x40" />

      <h2>Circuitos típicos de una vivienda</h2>
      <p>
        El reglamento AEA recomienda separar la instalación en circuitos independientes según
        el uso, para que un problema en uno no afecte al resto:
      </p>
      <ul>
        <li><strong>Iluminación general</strong> (1 o 2 circuitos): 1×10 A + cable 1,5 mm²</li>
        <li><strong>Tomacorrientes de uso general</strong> (1 o 2 circuitos): 1×16 o 1×20 A + cable 2,5 mm²</li>
        <li><strong>Cocina/horno eléctrico</strong> (TUE): 1×25 A + cable 4 mm²</li>
        <li><strong>Lavadero/termotanque</strong> (TUE): 1×20 A + cable 2,5 o 4 mm²</li>
        <li><strong>Aire acondicionado</strong> (opcional, TUE): 1×20 o 1×25 A + cable 2,5/4 mm² propio</li>
      </ul>

      <h2>Lista de materiales para una casa de 2-3 ambientes</h2>
      <Table
        headers={['Material', 'Cantidad', 'Producto sugerido']}
        rows={[
          ['Caja para tablero DIN (10-12 módulos)', '1', 'Caja Genrod o Roker'],
          ['Llave principal bipolar 40 A',          '1', 'Térmica 2×40 A · ABB o Siemens'],
          ['Disyuntor diferencial 2×40 A · 30 mA',  '1', <span key="d">Disyuntor ABB 2×40 A — <Link href="/producto/disyuntor-abb-2x40" className="text-brand underline">ver</Link></span>],
          ['Térmica 1×10 A · iluminación',          '2', 'ABB S201 o Siemens 5SL'],
          ['Térmica 1×16 A · tomas',                '2', <span key="t16">Térmica ABB 1×16 A — <Link href="/producto/termica-abb-1x16" className="text-brand underline">ver</Link></span>],
          ['Térmica 1×20 A · termotanque',          '1', <span key="t20">Térmica Siemens 1×20 A — <Link href="/producto/termica-siemens-1x20" className="text-brand underline">ver</Link></span>],
          ['Térmica 1×25 A · cocina',               '1', 'ABB S201 25 A o equivalente'],
          ['Cable 1,5 mm² (iluminación)',           '~50 m', <span key="c15">Argenplas 1,5 mm² — <Link href="/producto/cable-argenplas-1-5mm" className="text-brand underline">ver</Link></span>],
          ['Cable 2,5 mm² (tomas)',                 '~100 m', <span key="c25">Argenplas 2,5 mm² — <Link href="/producto/cable-argenplas-2-5mm" className="text-brand underline">ver</Link></span>],
          ['Cable 4 mm² (cocina/termotanque)',      '~30 m', <span key="c4">Argenplas 4 mm² — <Link href="/producto/cable-argenplas-4mm" className="text-brand underline">ver</Link></span>],
          ['Bornera de neutro + bornera de tierra', '1+1', 'cualquier marca compatible DIN'],
          ['Cable verde-amarillo 4 mm² (tierra)',   '~10 m', 'Argenplas']
        ]}
      />

      <Callout tone="tip" title="Pedinos el combo completo">
        Si vas a armar un tablero entero, pasanos la lista por WhatsApp y te armamos un pedido
        unificado con descuento mayorista. Tenemos todas las marcas: ABB, Siemens, Argenplas y
        accesorios. Envíos a CABA y AMBA.
      </Callout>

      <h2>Errores comunes que pasan en obra</h2>
      <ul>
        <li>
          <strong>No instalar disyuntor diferencial.</strong> Es obligatorio. Sin él, ningún
          electricista matriculado te firma la instalación.
        </li>
        <li>
          <strong>Usar cable de menos sección que la térmica.</strong> Por ejemplo, térmica de
          20 A con cable de 1,5 mm². La térmica te avisa que hay sobrecarga, pero el cable ya
          se está cocinando antes de que dispare. Consultá la guía de{' '}
          <Link href="/guias/que-seccion-de-cable-usar" className="text-brand underline">
            sección de cable
          </Link>{' '}
          si tenés dudas.
        </li>
        <li>
          <strong>Mezclar tomas con iluminación en el mismo circuito.</strong> Si salta esa
          térmica, te quedás sin luz para diagnosticar el problema. Mantenelos siempre separados.
        </li>
        <li>
          <strong>Olvidar la puesta a tierra.</strong> Cada toma debe tener cable verde-amarillo
          conectado a la jabalina del edificio o de la vereda.
        </li>
      </ul>

      <h2>Próximos pasos</h2>
      <p>
        Una vez armado el tablero, el siguiente paso es la <strong>instalación de tomas y
        llaves</strong> en cada ambiente. Para eso recomendamos la línea Cambre Siglo XXI por
        su buena terminación y compatibilidad con cualquier caja estándar:
      </p>
      <ul>
        <li>
          <Link href="/producto/ficha-cambre-xxi" className="text-brand underline">
            Módulo tomacorriente Schuko Cambre XXI
          </Link>{' '}
          — universal, acepta fichas argentinas y europeas
        </li>
        <li>
          <Link href="/producto/tapa-cambre-xxi-blanca" className="text-brand underline">
            Tapa Cambre XXI Blanca
          </Link>{' '}
          — terminación limpia para 2 módulos
        </li>
      </ul>
    </>
  );
}
