import { Roboto } from '@next/font/google';

import Header from 'src/app/Header';

import '../styles/global.css';

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
    <html lang='en'>
      <body className={`${roboto.variable} bg-gray-50 font-sans`}>
        <div className='flex min-h-screen flex-col justify-between'>
          <div className='container mx-auto px-5'>
            <Header />
            <div className='h-full'>{children}</div>
          </div>
          <div className='mx-auto my-10 mb-5 text-xs'>
            Copyright © {new Date().getFullYear()}
          </div>
        </div>
      </body>
    </html>
  );
}
