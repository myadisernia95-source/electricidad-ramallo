import { Callout, ProductInline } from '@/components/guides/GuideUI';
import { Link } from '@/i18n/navigation';
import type { GuideMetadata } from './types';

export const metadata: GuideMetadata = {
  slug: '7-formas-reducir-factura-luz',
  title: '7 formas de reducir la factura de luz en casa (sin gastar una fortuna)',
  excerpt:
    'Con tarifas en suba, bajar el consumo eléctrico es una necesidad. 7 cambios simples — desde LED hasta dimmers — que reducen tu factura sin gran inversión.',
  metaDescription:
    'Cómo reducir la factura de luz en casa: 7 tips simples para ahorrar electricidad sin obra ni inversión grande. LED, standby, tableros, temporizadores y dimmers.',
  category: 'general',
  published: '2026-06-04',
  readTimeMin: 5,
  relatedProducts: ['lampara-led-dicroica-7w', 'lampara-philips-bajo-consumo-20w'],
  targetKeywords: [
    'reducir factura de luz',
    'ahorrar electricidad casa',
    'bajar consumo eléctrico',
    'cómo ahorrar luz en casa',
    'consejos ahorro energético hogar',
    'tips ahorro energía'
  ],
  icon: '💰'
};

export default function Guide() {
  return (
    <>
      <p className="lead">
        Con las tarifas eléctricas en constante suba, reducir el consumo en el hogar dejó de
        ser una opción y se convirtió en una <strong>necesidad</strong>. La buena noticia: no
        hace falta una gran inversión para notarlo en la boleta. Con algunos cambios de hábito
        y los materiales correctos, podés bajar tu consumo eléctrico de forma significativa.
      </p>

      <h2>1. Reemplazá tus lámparas por LED</h2>
      <p>
        Es el cambio con <strong>mayor impacto inmediato</strong>. Una lámpara LED consume
        hasta un <strong>80 % menos</strong> que una incandescente y dura entre 15 y 25 veces
        más. Si todavía tenés lámparas halógenas o de bajo consumo viejas, este es el primer
        paso.
      </p>

      <ProductInline slug="lampara-led-dicroica-7w" />
      <ProductInline slug="lampara-philips-bajo-consumo-20w" />

      <h2>2. Apagá los artefactos en "standby"</h2>
      <p>
        El televisor, el microondas, el cargador del celular enchufado sin usar… todos consumen
        energía aunque estén "apagados". Este <strong>consumo fantasma</strong> puede
        representar hasta un 10 % de tu factura mensual.
      </p>
      <p>
        Desenchufar lo que no usás, o usar una zapatilla con interruptor, hace la diferencia.
      </p>

      <Callout tone="tip" title="El gasto invisible">
        Una familia con 5 cargadores enchufados sin uso, una TV en standby y un microondas
        encendido las 24 hs puede estar pagando entre $1.000 y $3.000 mensuales solo en consumo
        fantasma — sin enchufar nada nuevo.
      </Callout>

      <h2>3. Revisá el estado de tu instalación eléctrica</h2>
      <p>
        Una instalación vieja o en mal estado genera <strong>pérdidas de energía
        invisibles</strong>. Cables deteriorados, conexiones flojas o tableros desactualizados
        pueden hacer que tu medidor gire más de lo que debería.
      </p>
      <p>
        Si tu casa tiene más de 15 años sin revisión eléctrica, vale la pena que un
        electricista matriculado la inspeccione. Y si el tablero no tiene disyuntor diferencial
        o las térmicas no corresponden al consumo real, actualizarlo no solo mejora la
        seguridad — también reduce las pérdidas.
      </p>

      <Callout tone="info" title="Para profundizar">
        Si querés entender qué necesita un tablero para cumplir la reglamentación AEA 90364,
        tenemos una guía paso a paso:{' '}
        <Link
          href="/guias/como-armar-tablero-electrico-domiciliario"
          className="text-brand underline"
        >
          Cómo armar un tablero eléctrico domiciliario
        </Link>
        .
      </Callout>

      <h2>4. Usá termostatos y temporizadores</h2>
      <p>
        Controlar cuándo y cuánto tiempo funcionan tus equipos de calefacción, aire
        acondicionado o calefón eléctrico puede reducir hasta un <strong>20 % el consumo</strong>{' '}
        de esos artefactos.
      </p>
      <p>
        Hoy existen temporizadores simples que se colocan directo en el tomacorriente sin
        necesidad de obra. Ideal para terminar con el clásico "me olvidé el calefón encendido
        toda la noche".
      </p>

      <h2>5. Aprovechá la luz natural y aislá bien</h2>
      <p>
        Antes de encender una luz, abrí la persiana. Antes de poner el aire, fijate si hay
        corrientes de aire por puertas o ventanas mal selladas.{' '}
        <strong>La eficiencia energética empieza por no desperdiciar lo que ya tenés</strong>.
      </p>

      <h2>6. Elegí electrodomésticos con etiqueta de eficiencia A o A+</h2>
      <p>
        Cuando tengas que renovar un equipo, mirá la <strong>etiqueta energética</strong>. Un
        aire acondicionado o una heladera con alta eficiencia puede consumir hasta un 40 %
        menos que uno de categoría inferior.
      </p>
      <p>
        La diferencia de precio entre un electrodoméstico A+ y uno B se recupera en uno o dos
        años solo con el ahorro en la boleta de luz.
      </p>

      <h2>7. Instalá llaves de luz con dimmer</h2>
      <p>
        Los <strong>dimmers</strong> (reguladores de intensidad) permiten usar solo la luz que
        necesitás en cada momento — un comedor a la noche no necesita el 100 % de la
        iluminación. Son fáciles de instalar y compatibles con la mayoría de las lámparas LED
        actuales que vienen marcadas como "regulables" en el envase.
      </p>

      <Callout tone="tip" title="¿Cuánto se ahorra realmente?">
        Aplicando los 7 tips juntos, una familia tipo en CABA puede reducir su factura entre un{' '}
        <strong>25 % y un 40 %</strong> en pocos meses, sin sacrificar confort. La mayor parte
        del ahorro viene de los tips 1, 2 y 4.
      </Callout>

      <h2>¿Querés hacer cambios en tu instalación?</h2>
      <p>
        En <strong>Electricidad Ramallo</strong> (Ramallo 2339, Núñez) encontrás todos los
        materiales para arrancar: lámparas LED Philips, dicroicas, zapatillas con interruptor,
        temporizadores, dimmers y todo lo necesario para actualizar el tablero.
      </p>
      <p>
        Consultanos por{' '}
        <a
          href="https://wa.me/5491136030603?text=Hola,%20quer%C3%ADa%20consultar%20por%20materiales%20para%20bajar%20mi%20consumo%20el%C3%A9ctrico"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline"
        >
          WhatsApp al +54 9 11 3603-0603
        </a>{' '}
        de lunes a viernes de 9 a 17 hs, o pasá por el local.
      </p>
    </>
  );
}
