import { createApi } from '@reduxjs/toolkit/query/react';

import fetchClient from '@/utils/fetchClient';

import type { PantipResponse } from './constant';

export interface PantipSearchData {
  title: string;
  type: string;
  type_th: string;
  sub_type: any;
  avatar: string;
  slug: any;
  url: string;
  forum_tag: any;
  timestamp: any;
  id: string;
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchClient,
  endpoints: (builder) => ({
    search: builder.query<PantipSearchData[], string>({
      query: (search) => ({
        url: '/search-service/search/query',
        method: 'POST',
        body: {
          keyword: search,
          limit: 5,
          type: 'all',
        },
      }),
      transformResponse: (response: PantipResponse<PantipSearchData>) =>
        response.data,
    }),
  }),
});

export const { useSearchQuery } = searchApi;
