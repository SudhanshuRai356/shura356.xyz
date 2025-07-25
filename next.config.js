/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
