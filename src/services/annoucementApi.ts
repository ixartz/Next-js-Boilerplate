import { createApi } from '@reduxjs/toolkit/query/react';

import fetchClient from '@/utils/fetchClient';

import type { PantipResponse } from './constant';

export interface PantipAnnouncementData {
  announce_id: number;
  category_name: string;
  type: string;
  display_message: string;
  created_time: string;
}

export interface PantipHighlightData {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
}

interface GetAnnouncementsQuery {
  room: string;
  limit: number;
}

export const announcementApi = createApi({
  reducerPath: 'announcementApi',
  baseQuery: fetchClient,
  endpoints: (builder) => ({
    getAnnouncements: builder.query<
      PantipAnnouncementData[],
      GetAnnouncementsQuery
    >({
      query: ({ room, limit }: GetAnnouncementsQuery) => ({
        url: `/forum-service/forum/get_announce?room=${room}&limit=${limit}`,
        method: 'GET',
      }),
      transformResponse: (response: PantipResponse<PantipAnnouncementData>) =>
        response.data,
    }),
    getHighlight: builder.query<PantipHighlightData[], void>({
      query: () => ({
        url: '/forum-service/home/get_highlight',
        method: 'GET',
      }),
      transformResponse: (response: PantipResponse<PantipHighlightData>) =>
        response.data,
    }),
  }),
});

export const { useGetAnnouncementsQuery, useGetHighlightQuery } =
  announcementApi;
