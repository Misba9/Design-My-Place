/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // {
      //   source: '/design-1',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/design-2',
      //   destination: '/',
      //   permanent: true,
      // },
      {
        source: '/locations/delhi-ncr',
        destination: '/locations/delhi',
        permanent: true,
      },
      {
        source: '/process',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/favicon.ico',
        destination: '/logo.png',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
