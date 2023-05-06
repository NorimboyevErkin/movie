/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ["files.cinerama.uz","https://image.tmdb.org"],
    },
  };

module.exports = nextConfig

