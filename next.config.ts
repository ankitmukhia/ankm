import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

// `https://huggingfacefw-blogpost-fineweb-v1.static.hf.space/dist/assets/images/fineweb-recipe.png`

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

export default withContentlayer(nextConfig);
