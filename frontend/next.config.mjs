/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/strapi/:path*',
        destination: `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
