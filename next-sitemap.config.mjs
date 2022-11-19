// /** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
  sitemapSize: 1000,
  // optional
  robotsTxtOptions: {
    // additionalSitemaps: [
    //   'https://example.com/my-custom-sitemap-1.xml',
    //   'https://example.com/my-custom-sitemap-2.xml',
    //   'https://example.com/my-custom-sitemap-3.xml',
    // ],
  },
};

export default config;
