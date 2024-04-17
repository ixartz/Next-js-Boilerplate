'use client';

import Image from 'next/legacy/image';
import React from 'react';
import { BsChatRightDots } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import {
  FaBell,
  FaCalendar,
  FaSignInAlt,
  FaStar,
  FaUserCircle,
} from 'react-icons/fa';
import { FaPeopleRoof } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';

import { useGetAnnouncementsQuery } from '@/services/annoucementApi';
import { useSearchQuery } from '@/services/searchApi';
import debounce from '@/utils/debounce';
import useScreenSize from '@/utils/screenSize';

import DropDownMenu from './partials/DropDownMenu';
import Spinner from './partials/Spinner';

export default function Navbar() {
  const screenSize = useScreenSize();

  const { data: announcements, isFetching: isLoadingAnnouncements } =
    useGetAnnouncementsQuery({ room: 'homepage', limit: 5 });

  const [search, setSearch] = React.useState('');
  const { data, isLoading } = useSearchQuery(search);

  const debouncedSearch = debounce((value: string) => {
    setSearch(value);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const menus = [
    {
      name: 'ตั้งกระทู้',
      link: 'https://pantip.com/login',
      icon: <BsChatRightDots className="size-4 md:size-8" />,
    },
    {
      name: 'คอมมูนิตี้',
      link: 'https://pantip.com/login',
      icon: <FaPeopleRoof className="size-4 md:size-8" />,
    },
  ];

  const dropdowns = [
    {
      render: (
        <div className="flex items-center gap-2">
          <FaUserCircle className="size-6" />
          <p>โปรไฟล์</p>
        </div>
      ),
      link: '#',
    },
    {
      render: (
        <div className="flex items-center gap-2">
          <FaStar className="size-6" />
          <p>แลกพ้อยต์</p>
        </div>
      ),
      link: '#',
    },
    {
      render: (
        <div className="flex items-center gap-2">
          <FaCalendar className="size-6" />
          <p>กิจกรรมพันทิป</p>
        </div>
      ),
      link: '#',
    },
    {
      render: (
        <div className="flex items-center gap-2">
          <FaSignInAlt className="size-6" />
          <p>เข้าสู่ระบบ</p>
        </div>
      ),
      link: '#',
    },
  ];

  if (screenSize === 'sm' || screenSize === 'xs') {
    menus.forEach((_) => menus.pop());
    dropdowns.unshift({
      render: (
        <div className="flex items-center gap-2">
          <FaPeopleRoof className="size-6" />
          <p>คอมมูนิตี้</p>
        </div>
      ),
      link: 'https://pantip.com/login',
    });
    dropdowns.unshift({
      render: (
        <div className="flex items-center gap-2">
          <BsChatRightDots className="size-6" />
          <p>ตั้งกระทู้</p>
        </div>
      ),
      link: 'https://pantip.com/login',
    });
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-primary-800 px-8 py-5 shadow-md">
      {/* Left side */}
      <div className="relative my-auto flex size-12 cursor-pointer items-center md:hidden">
        <Image
          src="/assets/pantip.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Pantip Logo"
        />
      </div>
      <div className="relative my-auto hidden cursor-pointer items-center md:flex">
        <Image
          src="/assets/pantip_desktop.png"
          alt="Pantip Logo"
          width={500}
          height={120}
        />
      </div>
      {/* Middle */}
      <div className="relative flex items-center rounded-full border border-primary-50 py-4 md:border-2 md:shadow-sm">
        <input
          type="text"
          className={twMerge(
            'w-60 grow bg-transparent pl-5 text-sm text-primary-50 outline-none transition-all duration-500 ease-out placeholder:text-primary-300 md:w-[21rem] md:text-lg md:focus:w-[30rem]',
            search && 'md:w-[30rem]',
          )}
          placeholder="ค้นหาบน Pantip"
          onChange={handleSearch}
        />
        {isLoading ? (
          <div className="cursor-pointer rounded-full bg-primary-500 p-2 text-primary-50 md:mx-2 md:inline-flex">
            <Spinner />
          </div>
        ) : (
          <CiSearch className="hidden size-10 cursor-pointer rounded-full bg-primary-500 p-2 text-primary-50 md:mx-2 md:inline-flex" />
        )}
        {data && search && (
          <div className="absolute left-4 top-14 z-[999] w-full rounded-md bg-primary-800 opacity-90 shadow-md md:w-[30rem]">
            {data.map((item) => (
              <div key={item.id} className="border-b border-primary-700 p-2">
                <a
                  href={item.url}
                  className="flex items-center gap-2 text-sm text-primary-50 hover:text-primary-300"
                >
                  <img
                    src={
                      item.avatar ||
                      `https://ptcdn.info/mobile/icon_room/pt-forum-${item.slug}.svg`
                    }
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                  <p className="text-primary-50">{item.title}</p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Right side */}
      <div className="flex items-center gap-2 pr-4 md:gap-6">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="hidden cursor-pointer items-center gap-2 text-primary-50 hover:text-primary-300 md:flex md:text-lg md:hover:text-primary-300"
          >
            {menu.icon}
            <a href={menu.link} className="text-xs md:text-base">
              {menu.name}
            </a>
          </div>
        ))}
        <DropDownMenu
          menus={announcements?.map((announce) => ({
            render: (
              <div className="flex items-center gap-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: announce.display_message,
                  }}
                />
              </div>
            ),
            link: '#',
          }))}
          render={
            <div className="relative flex items-center">
              <FaBell className="size-6" />
              {isLoadingAnnouncements && (
                <div className="absolute right-0 top-0">
                  <Spinner />
                </div>
              )}
              <div className="absolute bottom-3 left-4 rounded-full bg-red-500 px-1 text-xs text-white">
                {announcements?.length}
              </div>
            </div>
          }
        />
        <DropDownMenu
          menus={dropdowns}
          render={
            <div className="flex items-center">
              <FaUserCircle className="size-6" />
            </div>
          }
        />
      </div>
    </div>
  );
}
