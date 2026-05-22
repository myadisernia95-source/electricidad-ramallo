'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type CartItem = { slug: string; qty: number };

type CartState = {
  items: CartItem[];
  isHydrated: boolean;
  totalCount: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = 'er.cart.v1';

function loadFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x) => x && typeof x.slug === 'string' && typeof x.qty === 'number' && x.qty > 0)
      .map((x) => ({ slug: String(x.slug), qty: Math.max(1, Math.min(999, Math.floor(x.qty))) }));
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore quota errors */
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate on mount (avoid SSR/CSR mismatch)
  useEffect(() => {
    setItems(loadFromStorage());
    setIsHydrated(true);
  }, []);

  // Persist on every change (after hydration)
  useEffect(() => {
    if (isHydrated) saveToStorage(items);
  }, [items, isHydrated]);

  // Sync across tabs / windows
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setItems(loadFromStorage());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const add = useCallback((slug: string, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === slug ? { ...i, qty: Math.min(999, i.qty + qty) } : i
        );
      }
      return [...prev, { slug, qty: Math.max(1, Math.min(999, qty)) }];
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.slug !== slug);
      return prev.map((i) =>
        i.slug === slug ? { ...i, qty: Math.min(999, Math.floor(qty)) } : i
      );
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totalCount = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);

  const value = useMemo<CartState>(
    () => ({ items, isHydrated, totalCount, add, setQty, remove, clear }),
    [items, isHydrated, totalCount, add, setQty, remove, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
