import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "magnuslens.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
