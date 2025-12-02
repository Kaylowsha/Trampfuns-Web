import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Trampfuns-Web',
  assetPrefix: '/Trampfuns-Web/',
};

export default nextConfig;
