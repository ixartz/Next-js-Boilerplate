import { getTranslations } from 'next-intl/server';

import { Sponsors } from '@/components/Sponsors';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      <p>
        Explore our GitHub project for more information about{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://github.com/ixartz/Next-js-Boilerplate"
        >
          Next.js Boilerplate
        </a>
        .
      </p>
      <p>
        Our sponsors&apos; exceptional support has made this project possible.
        Their services integrate seamlessly with the boilerplate, and we
        recommend trying them out.
      </p>
      <h2 className="mt-5 text-2xl font-bold">Sponsors</h2>
      <Sponsors />
      <h2 className="mt-5 text-2xl font-bold">
        Boilerplate Code for Your Next.js Project with Tailwind CSS
      </h2>
      <p className="text-base">
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        Next.js Boilerplate is a developer-friendly starter code for Next.js
        projects, built with Tailwind CSS, and TypeScript.{' '}
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        Made with developer experience first: Next.js, TypeScript, ESLint,
        Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode,
        PostCSS, Tailwind CSS, Authentication with{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://clerk.com?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=nextjs-boilerplate"
          target="_blank"
        >
          Clerk
        </a>
        , Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://turso.tech/?utm_source=nextjsstarterbp"
          target="_blank"
        >
          Turso
        </a>
        , Error Monitoring with{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://sentry.io/for/nextjs/?utm_source=github&amp;utm_medium=paid-community&amp;utm_campaign=general-fy25q1-nextjs&amp;utm_content=github-banner-nextjsboilerplate-logo"
          target="_blank"
        >
          Sentry
        </a>
        , Logging with Pino.js and Log Management with{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://betterstack.com/?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=next-js-boilerplate"
          target="_blank"
        >
          Better Stack
        </a>
        , Monitoring as Code with{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://www.checklyhq.com/?utm_source=github&amp;utm_medium=sponsorship&amp;utm_campaign=next-js-boilerplate"
          target="_blank"
        >
          Checkly
        </a>
        , Storybook, Multi-language (i18n), One-Click Deploy on{' '}
        <a
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          href="https://www.netlify.com"
          target="_blank"
        >
          Netlify
        </a>
        , and more.
      </p>
    </>
  );
}
