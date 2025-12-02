import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu repositorio se llama algo diferente a "usuario.github.io",
  // descomenta y ajusta la siguiente línea:
  // basePath: '/nombre-de-tu-repo',
  // assetPrefix: '/nombre-de-tu-repo/',
};

export default nextConfig;
