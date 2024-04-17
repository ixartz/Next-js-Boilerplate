/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { useMemo } from 'react';

interface IPantipRealtimeData {
  data: {
    title: string;
    from: string;
    image: string;
    comment: number;
    vote: number;
  }[];
}

export default function PantipRealtime({ data }: IPantipRealtimeData) {
  const listWithImage = useMemo(
    () => data.filter((item) => item.image),
    [data],
  );
  const listWithoutImage = useMemo(
    () => data.filter((item) => !item.image),
    [data],
  );
  return (
    <div className="mb-10 p-4">
      <div className="relative mb-16 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
          <caption className="bg-white p-5 text-left text-lg font-semibold text-gray-900 rtl:text-right ">
            Pantip Realtime
            <p className="mt-1 text-sm font-normal text-gray-500">
              กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที
            </p>
          </caption>
          <tbody>
            {listWithoutImage.map((item) => (
              <tr
                key={`${item.title}_${item.from}`}
                className="border-b bg-white "
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.from}</td>
                <td className="px-6 py-4">{item.comment}</td>
                <td className="px-6 py-4">{item.vote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Repeat this block for each item in your grid */}
        {listWithImage.map((item) => (
          <a
            key={`${item.title}-${item.comment}-${item.vote}`}
            href="#"
            className="flex flex-col items-center rounded-xl border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row "
          >
            <img
              className="h-96 w-full rounded-t-lg object-cover md:hidden  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={item.image}
              alt="pantip-realtime"
            />
            <div className="h-96 w-full max-md:hidden md:relative md:h-full md:w-48 md:flex-none">
              <img
                className="absolute inset-0 size-full rounded-t-lg object-cover md:rounded-none md:rounded-s-lg"
                src={item.image}
                alt="pantip-realtime"
              />
            </div>
            <div className="flex w-full flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {item.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">{item.from}</p>
              <div className="mb-3 flex items-center font-normal text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <p className="ml-2">{item.comment}</p>
              </div>
              <div className="mb-3 flex items-center font-normal text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <p className="ml-2">{item.vote}</p>
              </div>
            </div>
          </a>
        ))}
        {/* End of repeated block */}
      </div>
    </div>
  );
}
