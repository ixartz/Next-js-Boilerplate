import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const StoreItem = () => {
  const router = useRouter();

  return (
    <div className="flex h-72 translate-y-0 flex-col rounded bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300">
      <div className="h-12 w-full bg-gradient-to-b from-gray-500 via-gray-500 to-gray-200"></div>
      <div className="flex flex-row">
        <img
          className="mx-3 flex w-40  -translate-y-16 items-center"
          src={`${router.basePath}/assets/images/store_item.png`}
        />
        <div className="flex w-52 flex-col">
          <span className="text-md text-pink-600">Brand Logo T-Shirt</span>
          <span className="mb-3 text-sm text-black">by Lucky Packer</span>
          <span className="text-md text-pink-600">£15.00</span>
          <span className="text-sm text-black">
            Lorem ipsum dolor met lorem ipsum dolor met ipsum dolor met
          </span>
        </div>
      </div>

      <div className="mx-5 flex flex-row items-center justify-between border-t-2 border-gray-400 pt-3 pb-2">
        <span className=" text-sm text-black">Linked by 300</span>
        <Link
          className="text-md items-center rounded border-2 border border-teal-700 bg-gradient-to-t from-teal-600 to-teal-500 px-10 text-center text-white hover:border-2 hover:border-teal-400"
          href="#"
        >
          BUY
        </Link>
      </div>
    </div>
  );
};

export { StoreItem };
