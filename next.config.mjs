import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// HTTP security headers applied to every response.
// These defend against clickjacking, MIME sniffing, MITM downgrades, leaky
// referrers and unauthorised browser feature access. They cost ~0 ms and
// require no application changes — they're applied at the edge by Vercel.
const securityHeaders = [
  // Force HTTPS for 1 year (no preload yet — easier to roll back if needed).
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  },
  // Prevent the site from being embedded in iframes (clickjacking defence).
  // SAMEORIGIN lets our own pages embed (Google Maps in /contacto) without
  // breaking. To forbid even our own embeds, switch to DENY.
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Stop browsers from guessing content types (defeats some XSS attacks).
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Don't leak the full URL to third parties when users click outbound links.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable browser features we don't use. Lets the user know we'll never
  // request their camera/mic/location/etc.
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=()'
  },
  // Disable client-side DNS prefetch hints leaking visitor patterns.
  { key: 'X-DNS-Prefetch-Control', value: 'off' }
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false, // Don't advertise that we're running Next.js
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'images.pexels.com' }
    ]
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  }
};

export default withNextIntl(nextConfig);
