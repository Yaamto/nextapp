/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // ajoutez ici tous les hôtes autorisés pour les images
  },
}

module.exports = nextConfig
