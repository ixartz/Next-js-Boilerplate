// @ts-nocheck
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { SortByDate } from '@utils/SortByDate';

const files = fs.readdirSync(path.join('./src/posts'));

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(
      path.join('./src/posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(SortByDate);
}
