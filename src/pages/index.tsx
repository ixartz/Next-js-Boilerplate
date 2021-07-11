import Image from 'next/image';

import { Meta, Layout } from '@components/common';

const Index = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="prose mx-auto prose-sm sm:prose lg:prose-lg xl:prose-xl prose-primary sm:prose-primary">
        <a href="https://github.com/ixartz/Next-js-Boilerplate">
          <Image
            src="https://source.unsplash.com/random/800x600"
            width="800"
            height="600"
            alt="test"
          />
        </a>
        <h1>Boilerplate code for your Nextjs project with Tailwind CSS</h1>
        <p>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Next.js Boilerplate is a starter code for your Next js project by
          putting developer experience first .{' '}
          <span role="img" aria-label="zap">
            ⚡️
          </span>{' '}
          Made with Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged,
          VSCode, Netlify, PostCSS, Tailwind CSS.
        </p>
        <h2>Next js Boilerplate Features</h2>
        <p>Developer experience first:</p>
        <ul>
          <li>
            <span role="img" aria-label="fire">
              🔥
            </span>{' '}
            <a href="https://nextjs.org" rel="nofollow">
              Next.js
            </a>{' '}
            for Static Site Generator
          </li>
          <li>
            <span role="img" aria-label="art">
              🎨
            </span>{' '}
            Integrate with{' '}
            <a href="https://tailwindcss.com" rel="nofollow">
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role="img" aria-label="nail_care">
              💅
            </span>{' '}
            PostCSS for processing Tailwind CSS
          </li>
          <li>
            <span role="img" aria-label="tada">
              🎉
            </span>{' '}
            Type checking Typescript
          </li>
          <li>
            <span role="img" aria-label="pencil2">
              ✏️
            </span>{' '}
            Linter with{' '}
            <a href="https://eslint.org" rel="nofollow">
              ESLint
            </a>
          </li>
          <li>
            <span role="img" aria-label="hammer_and_wrench">
              🛠
            </span>{' '}
            Code Formatter with{' '}
            <a href="https://prettier.io" rel="nofollow">
              Prettier
            </a>
          </li>
          <li>
            <span role="img" aria-label="fox_face">
              🦊
            </span>{' '}
            Husky for Git Hooks
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🚫
            </span>{' '}
            Lint-staged for running linters on Git staged files
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🗂
            </span>{' '}
            VSCode configuration: Debug, Settings, Tasks and extension for
            PostCSS, ESLint, Prettier, TypeScript
          </li>
          <li>
            <span role="img" aria-label="robot">
              🤖
            </span>{' '}
            SEO metadata, JSON-LD and Open Graph tags with Next SEO
          </li>
          <li>
            <span role="img" aria-label="robot">
              ⚙️
            </span>{' '}
            <a
              href="https://www.npmjs.com/package/@next/bundle-analyzer"
              rel="nofollow"
            >
              Bundler Analyzer
            </a>
          </li>
          <li>
            <span role="img" aria-label="rainbow">
              🌈
            </span>{' '}
            Include a FREE minimalist theme
          </li>
          <li>
            <span role="img" aria-label="hundred">
              💯
            </span>{' '}
            Maximize lighthouse score
          </li>
        </ul>
        <p>Built-in feature from Next.js:</p>
        <ul>
          <li>
            <span role="img" aria-label="coffee">
              ☕
            </span>{' '}
            Minify HTML &amp; CSS
          </li>
          <li>
            <span role="img" aria-label="dash">
              💨
            </span>{' '}
            Live reload
          </li>
          <li>
            <span role="img" aria-label="white_check_mark">
              ✅
            </span>{' '}
            Cache busting
          </li>
        </ul>
        <h2>Our Stater code Philosophy</h2>
        <ul>
          <li>Minimal code</li>
          <li>SEO-friendly</li>
          <li>
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            Production-ready
          </li>
        </ul>
        <p>
          Check our GitHub project for more information about{' '}
          <a href="https://github.com/ixartz/Next-js-Boilerplate">
            Nextjs Boilerplate
          </a>
          . You can also browse our{' '}
          <a href="https://creativedesignsguru.com/category/nextjs/">
            Premium NextJS Templates
          </a>{' '}
          on our website to support this project.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
