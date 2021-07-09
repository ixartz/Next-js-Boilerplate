import { Navbar, Footer } from '@components/common';

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main className="fit container mx-auto py-16 px-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
