import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "media.giphy.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
