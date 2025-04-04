/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.tradingview.com'],
  },
}

module.exports = nextConfig 