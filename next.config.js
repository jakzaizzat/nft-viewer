/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['looksrare.mo.cloudinary.net'],
  }
}

module.exports = nextConfig
