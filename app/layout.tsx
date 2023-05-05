import Footer from 'app/Footer';
import Header from 'app/Header';

import { Roboto } from '@next/font/google';

import { AppConfig } from 'src/config/AppConfig';

import '../src/styles/global.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-raleway',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body className={`${roboto.variable} bg-gray-50 font-sans`}>
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            <Header />
            <div className='h-full'>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
