import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'v0.dev', pathname: '/placeholder.svg' },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  compiler:
    process.env.NODE_ENV === 'production' ? { removeConsole: true } : {},
  experimental: {
    reactCompiler: true, // 'annotation' to make it opt in https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler
  }
}

export default nextConfig
