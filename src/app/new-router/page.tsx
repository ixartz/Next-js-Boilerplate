import type { Metadata } from 'next';
import Link from 'next/link';

import { Main } from '@/templates/Main';

export const metadata: Metadata = {
  title: 'New Router',
  description:
    'Incrementally migrate your existing application from pages to app',
};

const NewRouter = () => (
  <Main>
    <p>
      Shifting to the App Router introduces React features, like Server
      Components and Suspense. Alongside new Next.js elements like special files
      and layouts, the migration involves embracing fresh concepts, adjusting
      mental models, and adapting behavior. To ease the complexity, we advise
      breaking the migration into smaller steps. The app directory is
      thoughtfully designed to enable incremental, page-by-page migration from
      the pages directory.
      <Link href="https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app">
        Learn more.
      </Link>
    </p>
  </Main>
);

export default NewRouter;
