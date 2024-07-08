/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akhilthati.github.io",
      },
    ],
  }
};

module.exports = nextConfig;
