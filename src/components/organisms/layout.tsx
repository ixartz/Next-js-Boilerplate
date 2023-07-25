import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="py-14 md:py-[100px]">{children}</div>;
};

export default Layout;
