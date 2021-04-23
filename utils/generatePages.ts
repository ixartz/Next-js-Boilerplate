import fs from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";

import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

// Join folder name to root path
const contentDirectory = folderName => path.join(process.cwd(), folderName);

// Select only items with a file extension. Ignore files beginning with '.'
const filteredToFiles = array =>
  array.filter(item => item.includes(".") && !item.startsWith("."));

export function getSortedPageData(folderName) {
  // Get file names under /[folderName]
  const fileNames = filteredToFiles(
    fs.readdirSync(contentDirectory(folderName))
  );

  const allPostsData = fileNames.map(fileName => {
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
    fs.readdirSync(contentDirectory(folderName))
  );
  return fileNames.map(fileName => ({
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
    // components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  // console.log("MDXSource");
  // console.dir(mdxSource);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark().use(html).process(content);
  // const contentHtml = processedContent.toString();

  // REPLACE THESE
  // const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  // const source = fs.readFileSync(postFilePath);

  // Combine the data with the id and contentHtml
  // return {
  //   id,
  //   contentHtml,
  //   ...data,
  // };
  return {
    id,
    mdxSource,
    data,
  };
}
