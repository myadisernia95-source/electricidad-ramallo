export type CategorySlug = 'iluminacion' | 'cables' | 'tableros' | 'materiales';

export const categories: { slug: CategorySlug; image: string; icon: string }[] = [
  { slug: 'iluminacion', image: '/images/categories/iluminacion.jpg', icon: '💡' },
  { slug: 'cables',      image: '/images/categories/cables.jpg',      icon: '🔌' },
  { slug: 'tableros',    image: '/images/categories/tableros.jpg',    icon: '⚡' },
  { slug: 'materiales',  image: '/images/categories/materiales.jpg',  icon: '🔧' }
];
