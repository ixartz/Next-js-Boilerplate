const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const baseUrl = "";

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
});

// Match MDX or MD files for mdx
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});
// Have Next.js handle 'md'/'mdx' files in the pages directory as pages:
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
