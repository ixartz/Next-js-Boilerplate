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
      Moving to the App Router may be the first time using React features that
      Next.js builds on top of such as Server Components, Suspense, and more.
      When combined with new Next.js features such as special files and layouts,
      migration means new concepts, mental models, and behavioral changes to
      learn.
    </p>
    <p>
      We recommend reducing the combined complexity of these updates by breaking
      down your migration into smaller steps. The app directory is intentionally
      designed to work simultaneously with the pages directory to allow for
      incremental page-by-page migration.{' '}
      <Link href="https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app">
        Learn more.
      </Link>
    </p>
  </Main>
);

export default NewRouter;
