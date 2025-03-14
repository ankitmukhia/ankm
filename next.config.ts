import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

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
