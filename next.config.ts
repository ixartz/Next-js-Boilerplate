import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import "./src/libs/Env";

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  serverExternalPackages: ["@electric-sql/pglite"],
};

// Initialize the Next-Intl plugin
const nextConfig = createNextIntlPlugin("./src/libs/i18n.ts")(baseConfig);
export default nextConfig;
