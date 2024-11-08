const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/' : '', // Root-relative path for production
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
