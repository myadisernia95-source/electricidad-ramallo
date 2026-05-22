export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491136030603';

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productInquiryMessage(productName: string): string {
  return `Hola Electricidad Ramallo, quería consultar por ${productName}. ¿Tienen stock y precio?`;
}
