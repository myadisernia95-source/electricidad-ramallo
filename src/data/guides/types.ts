import type { ComponentType } from 'react';
import type { CategorySlug } from '@/data/categories';

export type GuideCategory = CategorySlug | 'general';

export type GuideMetadata = {
  slug: string;
  title: string;
  excerpt: string;
  /** Open Graph / Twitter share description; defaults to excerpt if absent. */
  metaDescription?: string;
  category: GuideCategory;
  /** ISO date string YYYY-MM-DD */
  published: string;
  updated?: string;
  /** Estimated read time in minutes. */
  readTimeMin: number;
  /** Slug of products that this guide mentions / recommends. */
  relatedProducts?: string[];
  /** SEO keywords this guide targets. */
  targetKeywords?: string[];
  /** Optional emoji "hero" icon shown in cards. */
  icon?: string;
};

export type Guide = {
  metadata: GuideMetadata;
  default: ComponentType;
};
