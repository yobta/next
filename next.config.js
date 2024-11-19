/** @type {import('next').NextConfig} */
const childProcess = require('child_process')
/* eslint-disable import/order */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
    remarkPlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

let revision
try {
  revision = childProcess
    .execSync('git rev-parse HEAD')
    .toString()
    .trim()
    .substring(0, 5)
} catch {
  revision = (
    process.env.VERCEL_GIT_COMMIT_SHA || 'fallback_revision'
  ).substring(0, 5)
}

const plugins = [withMDX]

const nextConfig = {
  env: {
    NEXT_PUBLIC_REVISION: revision,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: { esmExternals: true, mdxRs: true },
  generateBuildId: async () => revision,
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
        source: '/(.*)',
      },
    ]
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)
