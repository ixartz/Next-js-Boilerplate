import { createApi } from '@reduxjs/toolkit/query/react';

import fetchClient from '@/utils/fetchClient';

interface NextTopicRequest {
  limit: number;
  ignoreList: string[];
  nextId?: number;
}

export const topicApi = createApi({
  reducerPath: 'topicApi',
  baseQuery: fetchClient,
  endpoints: (builder) => ({
    getNextTopic: builder.query<NextTopicResponse, NextTopicRequest>({
      query: ({ limit, ignoreList, nextId }) => {
        return {
          url: `forum-service/home/get_suggest_topic_popular`,
          method: 'POST',
          body: {
            type: 'room',
            limit,
            ignoreList,
            // next_id: nextId || 1,
            // rankingTime: 1713362400,
          },
        };
      },
    }),
  }),
});

export const { useGetNextTopicQuery } = topicApi;

interface NextTopicResponse {
  success: boolean;
  data: Room[];
  next_id: number;
  has_next: boolean;
  ranking_time: number;
}

interface Room {
  room_id: number;
  room_name_th: string;
  room_name_en: string;
  type: string;
  topics: Topic[];
}

export interface Topic {
  topic_id: number;
  topic_type: number;
  title: string;
  thumbnail_url?: string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: Author;
  created_time: string;
  tags: Tag[];
  category: string;
}

interface Author {
  id: number;
  name: string;
  avatar: Avatar;
  slug: string;
}

interface Avatar {
  original?: string;
  large: string;
  medium: string;
  small: string;
}

interface Tag {
  name: string;
  slug: string;
}
