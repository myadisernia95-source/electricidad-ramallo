import { Callout, ProductInline, Table } from '@/components/guides/GuideUI';
import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from './types';

export const metadata: GuideMetadata = {
  slug: 'lumenes-por-ambiente-guia-iluminacion-led',
  title: 'Cuántos lúmenes necesitás por ambiente: guía práctica de iluminación LED',
  excerpt:
    'Tabla de lúmenes recomendados por ambiente y metro cuadrado, equivalencia entre incandescente, bajo consumo y LED, y guía para elegir luz cálida o fría.',
  metaDescription:
    'Cuántos lúmenes por ambiente y por m² necesitás. Equivalencia W incandescente → W LED. Cuándo usar luz cálida vs fría. Lámparas Philips.',
  category: 'iluminacion',
  published: '2026-05-19',
  readTimeMin: 5,
  relatedProducts: ['lampara-philips-bajo-consumo-20w', 'lampara-led-dicroica-7w'],
  targetKeywords: [
    'cuántos lúmenes por ambiente',
    'equivalencia W incandescente LED',
    'luz cálida o fría',
    'lúmenes por metro cuadrado'
  ],
  icon: '💡'
};

export default function Guide() {
  return (
    <>
      <p className="lead">
        Cuando dejamos las lámparas incandescentes atrás, también dejamos atrás la referencia de
        “focos de 60W” o “de 100W”. Hoy la unidad correcta para medir cuánta luz da una lámpara
        son los <strong>lúmenes</strong>. En esta guía te explicamos cuántos lúmenes necesitás
        por ambiente, la equivalencia entre tecnologías y cómo elegir luz cálida o fría.
      </p>

      <h2>Lúmenes vs Watts: la confusión clásica</h2>
      <p>
        Los <strong>watts (W)</strong> miden cuánta energía consume una lámpara — no cuánta luz
        da. Los <strong>lúmenes (lm)</strong> miden la cantidad de luz visible que emite. Con
        las tecnologías nuevas (LED) podés tener mucha luz con muy pocos watts.
      </p>

      <Table
        caption="Equivalencia aproximada entre tecnologías"
        headers={['Incandescente', 'Bajo consumo (CFL)', 'LED', 'Lúmenes']}
        rows={[
          ['40 W',  '9-11 W',  '4-5 W',  '~450 lm'],
          ['60 W',  '13-15 W', '7-9 W',  '~800 lm'],
          ['75 W',  '18-20 W', '10-12 W','~1.100 lm'],
          ['100 W', '20-23 W', '12-15 W','~1.600 lm'],
          ['150 W', '32-40 W', '20-24 W','~2.600 lm']
        ]}
      />

      <Callout tone="tip" title="La regla práctica">
        Para LED, dividí los watts incandescentes que usabas antes por <strong>8 a 10</strong>.
        Una bombilla de 60W incandescente equivale a una LED de ~7W, con luz casi idéntica pero
        ahorrando un 85% en consumo.
      </Callout>

      <ProductInline slug="lampara-philips-bajo-consumo-20w" />

      <h2>Lúmenes recomendados por ambiente</h2>
      <p>
        El nivel de iluminación necesario depende del uso del ambiente. Más actividad o tareas
        de precisión → más lúmenes por metro cuadrado.
      </p>
      <Table
        caption="Lúmenes recomendados por m²"
        headers={['Ambiente', 'Lúmenes / m²', 'Total típico (10 m²)']}
        rows={[
          ['Dormitorio',           '100-150 lm/m²', '1.000-1.500 lm'],
          ['Living/comedor',       '150-300 lm/m²', '1.500-3.000 lm'],
          ['Cocina (general)',     '300-400 lm/m²', '3.000-4.000 lm'],
          ['Cocina (mesada)',      '500-800 lm/m²', 'foco directo extra'],
          ['Baño',                 '200-300 lm/m²', '2.000-3.000 lm'],
          ['Oficina/estudio',      '400-500 lm/m²', '4.000-5.000 lm'],
          ['Garage/depósito',      '100-200 lm/m²', '1.000-2.000 lm']
        ]}
      />

      <Callout tone="info" title="Sumar capas">
        En living y dormitorio rara vez se llega al objetivo con una sola lámpara central.
        Combiná <strong>luz general</strong> (plafón) + <strong>luz puntual</strong> (veladores,
        apliques de pared). Es más confortable y consume menos.
      </Callout>

      <h2>Luz cálida vs fría: cuándo usar cada una</h2>
      <p>La temperatura de color se mide en grados Kelvin (K):</p>
      <Table
        headers={['Temperatura', 'Nombre', 'Sensación', 'Ideal para']}
        rows={[
          ['2700 K', 'Cálida', 'Amarillenta, relajante',         'Dormitorios, livings, comedores, hoteles'],
          ['3000 K', 'Cálida neutra', 'Amarillo suave',          'Pasillos, espacios sociales'],
          ['4000 K', 'Neutra', 'Blanco puro',                    'Oficinas, baños, garages'],
          ['6000-6500 K', 'Fría / Daylight', 'Azulada, despierta','Cocinas, talleres, locales comerciales']
        ]}
      />

      <ProductInline slug="lampara-led-dicroica-7w" />

      <h2>Casquillos: qué van a usar tus artefactos</h2>
      <p>Tres tipos cubren el 90% de los casos:</p>
      <ul>
        <li>
          <strong>E27 (rosca gorda):</strong> el más común. Plafones, veladores, lámparas
          colgantes, apliques.
        </li>
        <li>
          <strong>E14 (rosca fina):</strong> apliques pequeños, lámparas decorativas, algunos
          electrodomésticos (microondas, heladeras).
        </li>
        <li>
          <strong>GU10:</strong> dicroicas LED para spots embutidos en cielorraso, rieles, focos
          direccionables.
        </li>
      </ul>

      <h2>Ejemplo: armado de una vivienda tipo</h2>
      <p>Para un departamento de 2 ambientes (40 m² aprox):</p>
      <ul>
        <li>
          <strong>Living/comedor (15 m²):</strong> 1 plafón central con LED 12 W luz cálida +
          2 dicroicas GU10 7W para acentos
        </li>
        <li>
          <strong>Dormitorio (10 m²):</strong> 1 plafón central con LED 9 W luz cálida +
          2 veladores con LED 5 W
        </li>
        <li>
          <strong>Cocina (8 m²):</strong> 4 dicroicas LED 7 W luz fría + 1 toma para luz bajo
          mueble
        </li>
        <li>
          <strong>Baño (4 m²):</strong> 1 plafón LED 12 W luz neutra + 2 dicroicas sobre espejo
        </li>
      </ul>
      <p>
        Total LED: ~10 lámparas. Consumo total: ~80 W. La misma iluminación con bombillas
        incandescentes consumiría más de 800 W.
      </p>

      <Callout tone="tip" title="Armemos el pedido">
        Si querés iluminar una vivienda o local entero, pasanos los metros y uso de cada
        ambiente por WhatsApp y te armamos la lista exacta con marca Philips. Tenemos
        stock permanente de LEDs y dicroicas, y precio mayorista por caja.
      </Callout>
    </>
  );
}
