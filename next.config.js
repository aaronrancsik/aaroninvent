// @ts-check

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: isProd ? '/aaroninvent/' : '',
  images: {
    unoptimized: true,
  },
  basePath: '/ghtest',
}

module.exports = nextConfig
