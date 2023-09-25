import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Footer from 'app/Footer';
import Header from 'app/Header';

import '../src/styles/global.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'LinkaX',
  description: 'LinkaX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} bg-gray-50 font-sans`}>
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            <NextTopLoader shadow={false} showSpinner={false} />
            <Header />
            <div className='h-full'>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
