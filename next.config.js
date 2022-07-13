/* eslint-disable n/global-require */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

const plugins = [withMDX]

const nextConfig = {
  experimental: { esmExternals: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  generateBuildId: async () => {
    const revision = require('child_process')
      .execSync('git rev-parse HEAD')
      .toString()
      .trim()
      .substring(0, 5)
    return revision
  },
}

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)
