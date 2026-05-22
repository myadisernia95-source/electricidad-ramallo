import type { CartItem } from '@/components/cart/CartProvider';
import { products, type Product } from '@/data/products';
import { formatARS } from '@/lib/format';

export type DeliveryMode = 'pickup' | 'shipping';

export type CartFormData = {
  customerName?: string;
  deliveryMode: DeliveryMode;
  shippingAddress?: string;
  notes?: string;
};

export type CartLine = {
  product: Product;
  qty: number;
  unitPrice?: number; // undefined if "consultar precio"
  lineTotal?: number; // undefined if any unit price is missing
};

export type CartSummary = {
  lines: CartLine[];
  subtotal: number;
  itemsWithoutPriceCount: number;
};

/** Resolves cart items to full lines with computed totals. */
export function buildCartSummary(items: CartItem[]): CartSummary {
  const lines: CartLine[] = items.flatMap((i) => {
    const product = products.find((p) => p.slug === i.slug);
    if (!product) return [];
    // Prefer offer price; fall back to regular price
    const unitPrice = product.offerPrice ?? product.regularPrice;
    const lineTotal = unitPrice != null ? unitPrice * i.qty : undefined;
    const line: CartLine = { product, qty: i.qty, unitPrice, lineTotal };
    return [line];
  });

  const subtotal = lines.reduce((s, l) => s + (l.lineTotal ?? 0), 0);
  const itemsWithoutPriceCount = lines.filter((l) => l.lineTotal == null).length;
  return { lines, subtotal, itemsWithoutPriceCount };
}

/** Builds the WhatsApp message text for an order. */
export function buildOrderMessage(summary: CartSummary, form: CartFormData): string {
  const { lines, subtotal, itemsWithoutPriceCount } = summary;
  const out: string[] = [];

  out.push('🛒 *NUEVO PEDIDO* — Electricidad Ramallo');
  out.push('');

  if (form.customerName?.trim()) {
    out.push(`👤 *Cliente:* ${form.customerName.trim()}`);
  }

  if (form.deliveryMode === 'shipping') {
    const addr = form.shippingAddress?.trim();
    out.push(`🚚 *Entrega:* Envío a domicilio${addr ? ' · ' + addr : ' (consultar zona)'}`);
  } else {
    out.push('🏪 *Entrega:* Retiro en local (Ramallo 2339, Núñez)');
  }

  out.push('');
  out.push('📦 *Productos solicitados:*');
  out.push('');

  for (const line of lines) {
    const brandSuffix = line.product.brand ? ` (${line.product.brand})` : '';
    out.push(`▸ ${line.product.name}${brandSuffix}`);
    if (line.unitPrice != null && line.lineTotal != null) {
      out.push(`   ${line.qty} × ${formatARS(line.unitPrice)}  =  *${formatARS(line.lineTotal)}*`);
    } else {
      out.push(`   ${line.qty} × (consultar precio)  =  *a confirmar*`);
    }
    out.push('');
  }

  out.push('────────────────────────────');
  if (subtotal > 0) {
    out.push(`💰 *SUBTOTAL ESTIMADO:* ${formatARS(subtotal)}`);
  } else {
    out.push('💰 *SUBTOTAL:* a confirmar por WhatsApp');
  }
  if (itemsWithoutPriceCount > 0) {
    const word = itemsWithoutPriceCount === 1 ? 'ítem' : 'ítems';
    out.push(`ℹ️ ${itemsWithoutPriceCount} ${word} con precio a confirmar`);
  }

  if (form.notes?.trim()) {
    out.push('');
    out.push(`📝 *Observaciones:* ${form.notes.trim()}`);
  }

  out.push('');
  out.push('¡Gracias!');

  return out.join('\n');
}
