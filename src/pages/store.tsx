import Link from 'next/link';
import React from 'react';

import { StoreItem } from '@/components/storeItem';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Store = () => {
  return (
    <Main meta={<Meta title="Store" description="store" />}>
      <div className="py-24">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="mt-2 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="fixed left-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto px-3 py-4">
            <h1 className="mx-5 text-2xl">CATAGORIES</h1>
            <ul className="mx-10 space-y-2">
              <li>
                <Link className="w-full text-teal-500" href="#">
                  Clothes
                </Link>
              </li>
              <li>
                <Link className="w-full text-teal-500" href="#">
                  Toys
                </Link>
              </li>
              <li>
                <Link className="w-full text-teal-500" href="#">
                  Posters
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="mx-5 flex items-center justify-between border-b-2 border-gray-400 pb-3">
            <span className="text-md">All items are</span>

            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="w-30 relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-1">
                  <svg
                    aria-hidden="true"
                    className="h-7 w-7 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className=" border-b-2 border-gray-300 p-2.5 pl-10 text-sm text-gray-900 focus:ring-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
              <button
                type="submit"
                className="ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div className="mt-2 p-5">
            <div className="mb-5 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <StoreItem></StoreItem>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Store;
