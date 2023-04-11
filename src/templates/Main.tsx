import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import Header from '../components/header/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}
      <div className="mx-auto">
        <Header />
        <main className="content ms:px-0 w-full pt-[150px] text-xl md:px-24">
          {props.children}
        </main>
        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          Copyright © {new Date().getFullYear()} {AppConfig.title}- Dinas
          Komunikasi dan Informatika. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export { Main };
