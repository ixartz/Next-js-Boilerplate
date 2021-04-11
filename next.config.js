const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
});

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });
//
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx'],
// });

// module.exports = {
//   // https://github.com/vercel/next.js/issues/21079
//   // Remove the workaround the issue is fixed
//   images: {
//     loader: 'imgix',
//     path: '',
//   },
// };
