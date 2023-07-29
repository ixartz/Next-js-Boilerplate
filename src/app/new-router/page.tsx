import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Router',
  description:
    'Incrementally migrate your existing application from pages to app',
};

export default function Page() {
  return <h1>Hello, Home page!</h1>;
}
