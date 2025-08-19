/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com'
    ],
  },
  env: {
    CUSTOM_KEY: 'campus-marketplace',
  },
}

module.exports = nextConfig
