/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ["files.cinerama.uz","image.tmdb.org"],
    },
  };

module.exports = nextConfig

