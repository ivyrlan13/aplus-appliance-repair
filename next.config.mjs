/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aplus-appliancerepair.com",
      },
    ],
  },
};

export default nextConfig;
