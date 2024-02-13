/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev',
          },
          {
            protocol:"https",
            hostname:"i.ibb.co"
          }
        ],
      },
};

export default nextConfig;
