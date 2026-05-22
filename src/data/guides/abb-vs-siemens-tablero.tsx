import { Callout, ProductInline, Table } from '@/components/guides/GuideUI';
import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from './types';

export const metadata: GuideMetadata = {
  slug: 'abb-vs-siemens-tablero',
  title: 'ABB vs Siemens: cuál elegir para tu tablero eléctrico domiciliario',
  excerpt:
    'Comparación lado a lado entre ABB serie S200 y Siemens 5SL/5SM para tableros residenciales en Argentina: calidad, disponibilidad, precio y compatibilidad.',
  metaDescription:
    'Comparativa ABB vs Siemens para tablero eléctrico domiciliario: térmicas y disyuntores. Calidad, disponibilidad, capacidad de ruptura y precio en Argentina.',
  category: 'tableros',
  published: '2026-05-19',
  readTimeMin: 6,
  relatedProducts: [
    'termica-abb-1x16',
    'disyuntor-abb-2x40',
    'termica-siemens-1x20',
    'disyuntor-siemens-2x25'
  ],
  targetKeywords: [
    'ABB vs Siemens tablero',
    'mejor marca térmica disyuntor',
    'ABB S200 Siemens 5SL',
    'comparativa protecciones eléctricas'
  ],
  icon: '⚖️'
};

export default function Guide() {
  return (
    <>
      <p className="lead">
        ABB y Siemens son las dos marcas de referencia para protecciones eléctricas
        domiciliarias en Argentina. Ambas tienen presencia oficial, calidad equivalente y
        cumplen las mismas normas. La pregunta no es <em>cuál es mejor</em> — es{' '}
        <strong>cuál te conviene a vos en tu obra</strong>. Acá te lo desglosamos.
      </p>

      <h2>Resumen ejecutivo</h2>
      <Table
        headers={['', 'ABB', 'Siemens']}
        rows={[
          ['Origen', 'Suiza-Suecia',  'Alemania'],
          ['Serie domiciliaria', 'S200 (térmicas) · F200 (disyuntores)', '5SL (térmicas) · 5SM (disyuntores)'],
          ['Capacidad de ruptura típica', '6 kA',  '6 kA'],
          ['Capacidad de ruptura premium', '10 kA (S200M)', '10 kA (5SY)'],
          ['Cumple norma', 'IEC 60898-1',  'IEC 60898-1'],
          ['Riel DIN', '35 mm estándar',  '35 mm estándar'],
          ['Garantía', '24 meses',  '24 meses']
        ]}
        caption="Comparativa técnica básica"
      />

      <Callout tone="info" title="La diferencia técnica es mínima">
        Para una instalación domiciliaria típica las dos marcas son intercambiables. La{' '}
        <strong>capacidad de ruptura de 6 kA</strong> es suficiente para cualquier vivienda
        conectada a la red urbana de CABA y AMBA. Si tu instalación es industrial o cerca de un
        transformador, recién ahí conviene pasar a 10 kA.
      </Callout>

      <h2>ABB: cuando priorizás disponibilidad y modularidad</h2>
      <p>
        ABB tiene la red de distribución más amplia en Argentina. Si necesitás reponer una
        térmica rápido — porque te falló una a las 9 de la noche un sábado — ABB la conseguís
        casi siempre. Eso es valor real cuando estás en obra y no podés frenar.
      </p>
      <p>
        Otra ventaja: la línea S200 tiene un{' '}
        <strong>diseño modular ultracompacto</strong> que ahorra espacio en tableros saturados.
        Útil cuando estás actualizando un tablero viejo sin cambiar la caja.
      </p>

      <ProductInline slug="termica-abb-1x16" />
      <ProductInline slug="disyuntor-abb-2x40" />

      <h2>Siemens: cuando priorizás precisión y vida útil</h2>
      <p>
        Siemens es la marca preferida por muchos electricistas industriales por la{' '}
        <strong>precisión de disparo</strong> de sus dispositivos y por la robustez mecánica
        de la palanca (vida útil de hasta 10.000 maniobras). Si vas a actualizar el tablero
        cada 25-30 años, eso importa.
      </p>
      <p>
        En precio están a la par de ABB en el segmento doméstico (línea 5SL). En premium
        residencial (5SY) Siemens suele estar un 5-10% por encima, pero la diferencia se justifica
        si querés la mejor capacidad de ruptura disponible.
      </p>

      <ProductInline slug="termica-siemens-1x20" />
      <ProductInline slug="disyuntor-siemens-2x25" />

      <h2>¿Se pueden mezclar marcas en el mismo tablero?</h2>
      <p>
        <strong>Sí, técnicamente sí.</strong> Todas las protecciones para riel DIN son
        intercambiables en términos físicos y eléctricos. Podrías tener un disyuntor ABB con
        térmicas Siemens y funciona perfecto.
      </p>
      <p>
        Pero estéticamente queda mejor mantener una sola marca: el color y el tipo de palanca
        son distintos y se nota en un tablero abierto. Si vas a hacer la obra desde cero,
        elegí una y mantenela.
      </p>

      <Callout tone="tip" title="Nuestra recomendación">
        Si no tenés preferencia, vamos con ABB para vivienda estándar: la red de distribución
        argentina es más densa, conseguís repuestos rápido, y la línea S200 cubre el 95% de los
        casos. Reservá Siemens para instalaciones premium, comercios con tableros grandes o
        donde el electricista la pida explícitamente.
      </Callout>

      <h2>¿Y otras marcas como Schneider o Bticino?</h2>
      <p>
        Schneider (Acti9) es otra opción válida pero su red en Argentina es menor. Bticino tiene
        protecciones de calidad pero apuntan más al mercado de tableros premium con
        cosmética cuidada (linea Living/Light).
      </p>
      <p>
        Para una instalación domiciliaria con buen costo-beneficio y disponibilidad de repuestos,
        ABB y Siemens son las dos opciones que más recomendamos.
      </p>

      <Callout tone="info" title="¿Querés cotizarlo?">
        Pasanos la lista de protecciones por WhatsApp y te armamos el presupuesto con ABB,
        Siemens o un mix — vos elegís. Tenemos stock permanente de las series más usadas en
        Argentina.
      </Callout>

      <h2>Más sobre protecciones</h2>
      <p>
        Si todavía no tenés clara la diferencia entre térmica y disyuntor, leé primero:
      </p>
      <p>
        →{' '}
        <Link
          href="/guias/termica-vs-disyuntor"
          className="text-brand font-semibold underline hover:text-brand-dark"
        >
          Térmica vs Disyuntor: cuál usar en cada circuito
        </Link>
      </p>
    </>
  );
}
