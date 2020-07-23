import React, { ReactNode } from 'react';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">Guru</div>
          <div className="font-semibold text-xl">Next.js Boilerplate</div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">Home</li>
            <li className="mr-6">About</li>
            <li className="mr-6">GitHub</li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8">
        Made with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by Ixartz
      </div>
    </div>
  </div>
);

export { Main };
