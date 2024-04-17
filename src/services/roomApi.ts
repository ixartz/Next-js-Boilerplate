import { createApi } from '@reduxjs/toolkit/query/react';

import fetchClient from '@/utils/fetchClient';

import type { PantipResponse } from './constant';

export interface PantipRoomData {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
}

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: fetchClient,
  endpoints: (builder) => ({
    getRecommendRooms: builder.query<PantipRoomData[], string>({
      query: () => ({
        url: `/forum-service/home/get_room_recommend?tracking_code={a}&`,
        method: 'GET',
      }),
      transformResponse: (response: PantipResponse<PantipRoomData>) =>
        response.data,
    }),
  }),
});

export const { useGetRecommendRoomsQuery } = roomApi;
