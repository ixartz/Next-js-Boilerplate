/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/peta', // mau diganti jadi apa ?
        destination: '/peta/Index', // path lama ?
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/dashboard', // jika ada yang akses ini
  //       destination: '/', // lempar kesini
  //       permanent: true,
  //     },
  //   ];
  // },
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
};

module.exports = nextConfig;
