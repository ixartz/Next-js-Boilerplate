import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Sidebar from './Sidebar';

export default function Header() {
  const router = useRouter();
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const menuItems = [
    {
      title: 'Dataset',
      url: '#',
    },
    { title: 'Metadata', url: '#' },
    { title: 'OPD', url: '#' },
    { title: 'Grup Data', url: '#' },
    {
      title: 'Fitur Lainnya',
      url: '#',
      subItems: [
        { title: 'Visualisasi', url: '#' },
        { title: 'Infografis', url: '#' },
        { title: 'Videografis', url: '#' },
        { title: 'Peta Sebaran', url: '#' },
      ],
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);

  const handleMenuItemHover = (index: number | null) => {
    setActiveMenuItem(index);
  };

  const handleSubMenuItemHover = () => {
    setActiveMenuItem(null);
  };

  return (
    <header
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`trasition fixed z-50 my-0 w-full bg-white/50 backdrop-blur-lg duration-500 ease-in-out${
        animateHeader && 'shadow-xl'
      }`}
    >
      <div className="mx-auto ">
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`flex max-w-screen-xl py-10 ${
            animateHeader && 'py-5'
          } trasition mx-auto items-center justify-between px-16 duration-500 ease-in-out`}
        >
          <Link className="hover:border-none" href="/">
            <img
              src={`${router.basePath}/assets/images/logo-satudata.png`}
              alt="header logo"
              className="w-[150px]"
            />
          </Link>
          <nav className="hidden md:block ">
            <ul className="flex items-center justify-start">
              {menuItems?.map((item, index) => (
                <li
                  key={item?.title}
                  onMouseEnter={() => handleMenuItemHover(index)}
                  onMouseLeave={() => handleMenuItemHover(null)}
                  className="relative"
                >
                  <Link
                    className="border-b-2 border-transparent px-2 py-6 leading-[22px] text-[#46383c] hover:border-[#fa65b1] hover:text-[#fa65b1] md:px-3 lg:px-6"
                    href={item?.url}
                  >
                    {item?.title}
                  </Link>
                  {item.subItems && (
                    <div
                      onMouseEnter={() => handleMenuItemHover(index)}
                      onMouseLeave={() => handleSubMenuItemHover()}
                      className={`absolute left-0 top-full z-10 mt-2 rounded-lg bg-white shadow-lg ${
                        activeMenuItem === index && 'opacity-100'
                      } ${
                        activeMenuItem !== index &&
                        'pointer-events-none opacity-0'
                      }`}
                    >
                      <ul className="py-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              className="block w-[170px] px-6 py-2 text-gray-800 hover:border-[#fa65b1] hover:bg-gray-100"
                              href={subItem.url}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <a
                href="#"
                className="inline-block rounded-xl border-2 border-[#fa65b1] bg-white px-6 py-2  text-[#fa65b1] transition duration-200 ease-in-out hover:border-white hover:bg-[#fa65b1] hover:text-white"
              >
                Masuk
              </a>
            </ul>
          </nav>

          <nav className="block md:hidden xl:hidden">
            <Sidebar />
          </nav>
        </div>
      </div>
    </header>
  );
}
