import nextMdx from '@next/mdx'
import type { NextConfig } from 'next'
import childProcess from 'node:child_process'

/** @type {import('next').NextConfig} */

const withMDX = nextMdx({
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

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_REVISION: revision,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: { esmExternals: true, mdxRs: true },
  generateBuildId: async () => revision,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  poweredByHeader: false,
  reactStrictMode: true,
}

const configWithPlugins = (): NextConfig =>
  plugins.reduce<NextConfig>((acc, next) => next(acc), nextConfig)

export default configWithPlugins
