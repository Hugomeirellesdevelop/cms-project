
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '82.29.60.183',
        port: '3001',
        pathname: '/posts/image/**',
      },
    ],
  }
};

export default nextConfig;
