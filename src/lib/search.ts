import { products, type Product } from '@/data/products';

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .replace(/[^a-z0-9\s]/g, ' ') // strip punctuation
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(s: string): string[] {
  return normalize(s).split(' ').filter(Boolean);
}

function bigrams(s: string): Set<string> {
  const padded = ` ${s} `;
  const set = new Set<string>();
  for (let i = 0; i < padded.length - 1; i++) set.add(padded.substr(i, 2));
  return set;
}

/** Dice coefficient: 0..1 — similitud por bigramas. */
function diceSimilarity(a: string, b: string): number {
  if (!a || !b) return 0;
  if (a === b) return 1;
  const ba = bigrams(a);
  const bb = bigrams(b);
  let common = 0;
  bb.forEach((bg) => {
    if (ba.has(bg)) common++;
  });
  return (2 * common) / (ba.size + bb.size);
}

function scoreProduct(product: Product, query: string): number {
  const q = normalize(query);
  if (!q) return 0;

  const haystack = normalize(
    `${product.name} ${product.brand} ${product.shortDesc} ${product.description}`
  );

  // 1. Substring exact match → top score
  if (haystack.includes(q)) return 1000 + q.length;

  // 2. All query tokens present somewhere → high score
  const qTokens = tokenize(q);
  const tokensInHaystack = qTokens.filter((t) => haystack.includes(t));
  if (tokensInHaystack.length === qTokens.length) {
    return 500 + tokensInHaystack.length * 10;
  }

  // 3. Some tokens present → medium score
  if (tokensInHaystack.length > 0) {
    return tokensInHaystack.length * 80;
  }

  // 4. Fuzzy fallback: Dice similarity vs. product name + brand
  const target = normalize(`${product.name} ${product.brand}`);
  const sim = diceSimilarity(target, q);
  return Math.round(sim * 100); // 0..100
}

export type SearchResult = {
  product: Product;
  score: number;
  /** Si fue match exacto/por palabra (true) o sólo fuzzy/aproximado (false). */
  exact: boolean;
};

export function searchProducts(query: string, limit = 24): SearchResult[] {
  if (!query || !query.trim()) return [];
  const results: SearchResult[] = products
    .map((p) => {
      const score = scoreProduct(p, query);
      return { product: p, score, exact: score >= 500 };
    })
    .filter((r) => r.score > 15) // umbral para descartar ruido
    .sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}
