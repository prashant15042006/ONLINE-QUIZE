import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  // Fix multi-lockfile workspace warning for Vercel/Render deploys
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
