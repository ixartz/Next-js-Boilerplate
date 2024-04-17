/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */

'use client';

import type { IPantipData } from '../page';

export default function Highlight({ data }: { data: IPantipData[] }) {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex flex-wrap">
        {data.map((item: IPantipData, index: number) => (
          <div
            key={`${index}_${item.title}`}
            className="w-full cursor-pointer p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.link}
                alt={`highlght_${item.title}`}
                style={{ width: '100%', height: '100%', maxHeight: 200 }}
              />
            </div>
            <div className="p-4 text-sm">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
