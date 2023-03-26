

const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: isProd ? 'aaroninvent' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
