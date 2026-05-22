import { Callout, ProductInline, Table } from '@/components/guides/GuideUI';
import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from './types';

export const metadata: GuideMetadata = {
  slug: 'termica-vs-disyuntor',
  title: 'Térmica vs Disyuntor: cuál usar en cada circuito (y por qué necesitás ambos)',
  excerpt:
    'La diferencia entre térmica (interruptor termomagnético) y disyuntor (interruptor diferencial) explicada simple, con ejemplos prácticos y la combinación correcta para tu tablero.',
  metaDescription:
    'Diferencia entre térmica y disyuntor: protección y cuándo usar cada uno. Ejemplos para tableros domiciliarios con ABB y Siemens. Reglamento AEA 90364.',
  category: 'tableros',
  published: '2026-05-19',
  readTimeMin: 7,
  relatedProducts: [
    'termica-abb-1x16',
    'disyuntor-abb-2x40',
    'termica-siemens-1x20',
    'disyuntor-siemens-2x25'
  ],
  targetKeywords: [
    'diferencia térmica y disyuntor',
    'qué hace un disyuntor diferencial',
    'cuándo salta la térmica',
    'interruptor termomagnético'
  ],
  icon: '⚡'
};

export default function Guide() {
  return (
    <>
      <p className="lead">
        Térmica y disyuntor son las <strong>dos protecciones obligatorias</strong> de cualquier
        instalación eléctrica moderna en Argentina. No hacen lo mismo: cada una te protege de un
        peligro distinto. En esta guía te explicamos qué hace cada una, cuándo salta, y por qué
        necesitás las dos en tu tablero.
      </p>

      <h2>Resumen en una frase</h2>
      <ul>
        <li><strong>Térmica:</strong> protege a la <em>instalación</em> (los cables) de sobrecargas y cortocircuitos.</li>
        <li><strong>Disyuntor diferencial:</strong> protege a las <em>personas</em> de descargas eléctricas.</li>
      </ul>
      <p>
        Por eso necesitás ambos: uno cuida tu casa, el otro cuida a quien la habita.
      </p>

      <h2>La térmica (interruptor termomagnético)</h2>
      <p>
        La térmica es el dispositivo que “salta” cuando hay un <strong>cortocircuito</strong>{' '}
        (dos cables que se tocan) o una <strong>sobrecarga</strong> (demasiados aparatos
        conectados al mismo circuito). Cuando eso pasa, la térmica corta la corriente para que
        los cables no se quemen.
      </p>
      <p>
        Hay una térmica <strong>por cada circuito</strong> de tu casa: una para iluminación,
        una para tomas del living, una para la cocina, etc. La corriente nominal de la térmica
        debe estar acorde al cable del circuito:
      </p>
      <Table
        headers={['Circuito', 'Sección de cable', 'Térmica recomendada']}
        rows={[
          ['Iluminación',       '1,5 mm²', '1×10 A · curva C'],
          ['Tomas generales',   '2,5 mm²', '1×16 A o 1×20 A · curva C'],
          ['Cocina/termotanque','4 mm²',   '1×25 A · curva C']
        ]}
      />

      <ProductInline slug="termica-abb-1x16" />

      <Callout tone="tip" title="¿Qué significa “curva C”?">
        La curva determina cuánto tarda la térmica en disparar ante un pico de corriente.
        La <strong>curva C</strong> es la estándar domiciliaria: aguanta picos cortos (como
        el arranque de un motor de heladera) sin disparar, pero corta ante una falla real.
        Hay curvas B (más sensible) y D (más permisiva, para motores grandes).
      </Callout>

      <h2>El disyuntor diferencial</h2>
      <p>
        El disyuntor diferencial es el que te <strong>salva la vida</strong>. Detecta
        microfugas de corriente — del orden de los 30 miliamperes (0,03 A) — y corta en menos
        de 40 milisegundos. Eso es lo que evita que mueras electrocutado si tocás un
        electrodoméstico con la carcasa con corriente.
      </p>
      <p>
        A diferencia de la térmica, hay <strong>un solo disyuntor general</strong> que
        protege todos los circuitos del tablero. Va instalado al principio, justo después del
        interruptor principal.
      </p>

      <ProductInline slug="disyuntor-abb-2x40" />

      <Callout tone="danger" title="Es obligatorio">
        Desde la reglamentación AEA 90364, el disyuntor diferencial es{' '}
        <strong>obligatorio en toda instalación nueva o renovada</strong> en Argentina. Si tu
        casa tiene más de 20 años y nunca lo actualizaste, probablemente no lo tengas — y eso
        es un riesgo serio. Cualquier electricista matriculado puede sumarlo en pocas horas.
      </Callout>

      <h2>Cómo se conectan en el tablero</h2>
      <p>El orden correcto en un tablero domiciliario típico es:</p>
      <ol>
        <li><strong>Llave principal</strong> (interruptor general)</li>
        <li><strong>Disyuntor diferencial</strong> (uno solo, para toda la casa)</li>
        <li>
          <strong>Térmicas individuales</strong> (una por circuito):
          iluminación, tomas, cocina, termotanque, aire acondicionado
        </li>
      </ol>
      <p>
        Si salta el disyuntor general, todo se apaga: hay una fuga a tierra en alguna parte de
        la casa. Si salta solo una térmica, sabés que el problema está en ese circuito
        específico.
      </p>

      <h2>¿Cuándo salta y cómo se vuelve a activar?</h2>
      <ul>
        <li>
          <strong>Salta la térmica:</strong> desconectá los aparatos del circuito afectado
          (probablemente había demasiado consumo) y volvé a subirla. Si vuelve a saltar
          de inmediato, hay un cortocircuito o un aparato con falla — no la fuerces, llamá a un
          electricista.
        </li>
        <li>
          <strong>Salta el disyuntor:</strong> hay una fuga de corriente. Apagá todos los
          interruptores derivados, subí el disyuntor y andá probando uno por uno cuál vuelve a
          dispararlo. Ese circuito es el que tiene el problema.
        </li>
      </ul>

      <h2>ABB o Siemens: ¿cuál elegir?</h2>
      <p>
        Las dos marcas son referencia mundial en protección eléctrica. En la práctica son
        equivalentes en calidad — la decisión suele venir por compatibilidad con el tablero
        existente o por preferencia del electricista que hace la obra.
      </p>
      <p>
        →{' '}
        <Link
          href="/guias/abb-vs-siemens-tablero"
          className="text-brand font-semibold underline hover:text-brand-dark"
        >
          ABB vs Siemens: comparación lado a lado para tablero domiciliario
        </Link>
      </p>

      <Callout tone="info" title="¿Necesitás armar un tablero desde cero?">
        Si estás encarando una obra nueva o una renovación integral, tenemos una guía completa
        con la combinación exacta de protecciones, secciones de cable y orden de montaje:
        <p className="mt-3">
          <Link
            href="/guias/como-armar-tablero-electrico-domiciliario"
            className="text-brand font-semibold underline hover:text-brand-dark"
          >
            Cómo armar un tablero eléctrico domiciliario paso a paso →
          </Link>
        </p>
      </Callout>
    </>
  );
}
