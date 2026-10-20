import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    // Fix: Turbopack panics on non-ASCII (Japanese) characters in the absolute
    // path. Setting an explicit root forces Turbopack to use a safe relative
    // reference instead of computing one from the OS path.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
