/* eslint-disable react/no-danger */
import { Fragment } from 'react';

import type { IPantipData } from '../page';

export default function Announce({ data }: { data: IPantipData[] }) {
  return (
    <div className="p-4">
      <div className="mt-1 w-full rounded-xl border border-gray-200 bg-white shadow">
        <div className=" divide-x divide-current rounded-lg  text-sm font-medium text-gray-900 sm:flex rtl:divide-x-reverse ">
          <div id="faq-tab" className="inline-block w-full rounded-se-xl p-4 ">
            <p className="text-lg">Announce</p>
          </div>
        </div>
        <div
          id="content"
          className="border-t border-gray-200 p-4 dark:border-gray-200"
        >
          <ul>
            {data.map((item: IPantipData, index: number) => (
              <Fragment key={item.title}>
                <li className="py-2 text-sm">
                  <a href={item.link} aria-label={item.title}>
                    <div dangerouslySetInnerHTML={{ __html: item.title }} />
                  </a>
                </li>
                {index !== data.length - 1 && (
                  <li className="border-b border-gray-300" />
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
