import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/hesam-portfolio",
  assetPrefix: "/hesam-portfolio/",
};

export default nextConfig;
