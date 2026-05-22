const ARS = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0
});

export function formatARS(amount: number): string {
  return ARS.format(amount).replace(/ /g, ' ');
}

export function discountPercent(regular: number, offer: number): number {
  if (regular <= 0 || offer <= 0 || offer >= regular) return 0;
  return Math.round(((regular - offer) / regular) * 100);
}
