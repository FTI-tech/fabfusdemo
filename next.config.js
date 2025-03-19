/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "source.unsplash.com", 
      "encrypted-tbn0.gstatic.com", 
      "images.pexels.com",
      "cdn.shopify.com",
      "i.pinimg.com",
      "www.baltana.com",
      "i.pinimg.com",
      "www.baltana.com",
      "your-image-source.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images8.alphacoders.com",
      },
    ],
  },
}

module.exports = nextConfig
