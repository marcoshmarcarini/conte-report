/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/auth/facebook',
        destination: '/api/auth',
        permanent: false,
      },
      {
        source: '/auth/facebook/callback',
        destination: '/api/facebook',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
