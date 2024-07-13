const fs = require('fs')
const path = require('path')

// Get all files in a directory
const getFilesRecursively = (directory) => {
  let files = []
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file)
    if (fs.lstatSync(fullPath).isDirectory()) {
      files = [...files, ...getFilesRecursively(fullPath)]
    } else {
      files.push(fullPath)
    }
  })
  return files
}

module.exports = {
  siteUrl: process.env.SITE_URL || '',
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const pagesDir = path.join(__dirname, 'src', 'app') //** ensure this directory is correct */
    const files = getFilesRecursively(pagesDir)

    const paths = files
      .filter(
        (file) =>
          file.endsWith('.js') ||
          file.endsWith('.jsx') ||
          file.endsWith('.ts') ||
          file.endsWith('.tsx')
      ) // Adjust based on file types used for pages
      .map((file) => {
        const relativePath = path.relative(pagesDir, file)
        const route =
          '/' +
          relativePath.replace(/\.(js|jsx|ts|tsx)$/, '').replace(/\/index$/, '')
        return {
          loc: route,
          changefreq: 'daily',
          priority: 0.7,
        }
      })

    return paths
  },
}
// /** need to include blog in separate sitemap?
// need to be able to prioritise certain pages
// and include/exclude pages
// https://www.npmjs.com/package/next-sitemap */
