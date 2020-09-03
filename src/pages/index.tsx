import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => (
  <Main
    meta={(
      <Meta
        title="Next.js Boilerplate Presentation"
        description="Next js Boilerplate is the perfect starer code for your project. Build your React application with Next.js framework."
      />
    )}
  >
    <a href="https://github.com/ixartz/Next-js-Boilerplate">
      <img
        src={`${process.env.baseUrl}/assets/images/nextjs-starter-banner.png`}
        alt="Nextjs starter banner"
      />
    </a>
    <h1 className="font-bold text-2xl">Boilerplate code for your Nextjs project</h1>
    <p>
      <span role="img" aria-label="rocket">
        🚀
      </span>
      {' '}
      Next.js Boilerplate is a starter code for your Next js project by putting developer experience
      first .
      {' '}
      <span role="img" aria-label="zap">
        ⚡️
      </span>
      {' '}
      Made with
      {' '}
      <a href="https://nextjs.org" rel="nofollow">
        Next.js
      </a>
      ,
      {' '}
      <a href="https://eslint.org" rel="nofollow">
        ESLint
      </a>
      ,
      {' '}
      <a href="https://prettier.io" rel="nofollow">
        Prettier
      </a>
      ,
      {' '}
      <a href="https://postcss.org" rel="nofollow">
        PostCSS
      </a>
      ,
      {' '}
      <a href="https://tailwindcss.com" rel="nofollow">
        Tailwind CSS
      </a>
      .
    </p>
    <h2 className="font-semibold text-lg">Next js Boilerplate Features</h2>
    <p>Developer experience first:</p>
    <ul>
      <li>
        <span role="img" aria-label="fire">
          🔥
        </span>
        {' '}
        <a href="https://nextjs.org" rel="nofollow">
          Next.js
        </a>
        {' '}
        for Static Site Generator
      </li>
      <li>
        <span role="img" aria-label="art">
          🎨
        </span>
        {' '}
        Integrate with
        {' '}
        <a href="https://tailwindcss.com" rel="nofollow">
          Tailwind CSS
        </a>
      </li>
      <li>
        <span role="img" aria-label="nail_care">
          💅
        </span>
        {' '}
        <a href="https://postcss.org" rel="nofollow">
          PostCSS
        </a>
        {' '}
        for processing
        {' '}
        <a href="https://tailwindcss.com" rel="nofollow">
          Tailwind CSS
        </a>
      </li>
      <li>
        <span role="img" aria-label="tada">
          🎉
        </span>
        {' '}
        Type checking Typescript
      </li>
      <li>
        <span role="img" aria-label="pencil2">
          ✏️
        </span>
        {' '}
        Linter with
        {' '}
        <a href="https://eslint.org" rel="nofollow">
          ESLint
        </a>
      </li>
      <li>
        <span role="img" aria-label="hammer_and_wrench">
          🛠
        </span>
        {' '}
        Code Formatter with
        {' '}
        <a href="https://prettier.io" rel="nofollow">
          Prettier
        </a>
      </li>
      <li>
        <span role="img" aria-label="fox_face">
          🦊
        </span>
        {' '}
        SEO metadata,
        {' '}
        <a
          href="https://developers.google.com/search/docs/guides/intro-structured-data"
          rel="nofollow"
        >
          JSON-LD
        </a>
        {' '}
        and
        {' '}
        <a href="https://ogp.me/" rel="nofollow">
          Open Graph
        </a>
        {' '}
        tags with
        {' '}
        <a href="https://github.com/garmeeh/next-seo">Next SEO</a>
      </li>
      <li>
        <span role="img" aria-label="rainbow">
          🌈
        </span>
        {' '}
        Include a FREE minimalist theme
      </li>
      <li>
        <span role="img" aria-label="hundred">
          💯
        </span>
        {' '}
        Maximize lighthouse score
      </li>
    </ul>
    <p>Built-in feature from Next.js:</p>
    <ul>
      <li>
        <span role="img" aria-label="coffee">
          ☕
        </span>
        {' '}
        Minify HTML &amp; CSS
      </li>
      <li>
        <span role="img" aria-label="dash">
          💨
        </span>
        {' '}
        Live reload
      </li>
      <li>
        <span role="img" aria-label="white_check_mark">
          ✅
        </span>
        {' '}
        Cache busting
      </li>
    </ul>
    <h2 className="font-semibold text-lg">Our Stater code Philosophy</h2>
    <ul>
      <li>Minimal code</li>
      <li>SEO-friendly</li>
      <li>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        {' '}
        Production-ready
      </li>
    </ul>
    <p>
      Check our GitHub project for more information about
      {' '}
      <a href="https://github.com/ixartz/Next-js-Boilerplate">Nextjs Boilerplate</a>
      .
    </p>
  </Main>
);

export default Index;
