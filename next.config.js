const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

// Match MDX or MD files for mdx
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

module.exports = withBundleAnalyzer(
  withMDX({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
      baseUrl: baseUrl,
    },
    // Have Next.js handle 'md'/'mdx' files in the pages directory as pages:
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = { fs: "empty" };
      }
      return config;
    },
    images: {
      // loader: "cloudinary",
      // path: "https://res.cloudinary.com/samstephenson",
      domains: ["res.cloudinary.com"],
    },
  })
);
