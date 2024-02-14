import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Geeks of Kolachi',
  description: 'Nextjs 14 Boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
