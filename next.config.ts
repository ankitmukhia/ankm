import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "huggingfacefw-blogpost-fineweb-v1.static.hf.space",
      },
    ],
  },
};

export default nextConfig;
