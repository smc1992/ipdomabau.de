/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  output: 'standalone', // For Docker deployment
};

module.exports = nextConfig;
