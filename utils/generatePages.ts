import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import path from "path";

// Join folder name to root path
const contentDirectory = (folderName) => path.join(process.cwd(), folderName);

// Select only items with a file extension. Ignore files beginning with '.'
const filteredToFiles = (array) =>
  array.filter((item) => item.includes(".") && !item.startsWith("."));

export function getSortedPageData(folderName) {
  // Get file names under /[folderName]
  const fileNames = filteredToFiles(
    fs.readdirSync(contentDirectory(folderName)),
  );

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md", ".mdx" or 'index' from file name to get id
    const id = fileName
      .replace("/index", "")
      .replace(/\.mdx$/, "")
      .replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(contentDirectory(folderName), fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPageIds(folderName) {
  const fileNames = filteredToFiles(
    fs.readdirSync(contentDirectory(folderName)),
  );
  return fileNames.map((fileName) => ({
    params: {
      id: fileName
        .replace("/index", "")
        .replace(/\.mdx$/, "")
        .replace(/\.md$/, ""),
    },
  }));
}

export async function getPageData(id, folderName) {
  // Add file extension back on (converts all MD to MDX)
  const fullPath = path.join(contentDirectory(folderName), `${id}.mdx`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  const mdxSource = await renderToString(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    id,
    mdxSource,
    data,
  };
}
