import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" },
      { hostname: "api.dicebear.com" },
    ],
  },
};

export default nextConfig;
