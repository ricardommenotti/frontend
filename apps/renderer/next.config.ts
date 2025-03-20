import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@acme/ui"],
  sassOptions: {
    includePaths: ["./src"],
  },
};

export default nextConfig;
