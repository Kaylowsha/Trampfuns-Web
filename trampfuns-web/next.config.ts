import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Trampfuns-Web' : '',
  assetPrefix: isProd ? '/Trampfuns-Web/' : '',
};

export default nextConfig;
