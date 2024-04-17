'use client';

import {
  configureStore,
  isRejectedWithValue,
  type Middleware,
  type MiddlewareAPI,
} from '@reduxjs/toolkit';

import { announcementApi } from '@/services/annoucementApi';
import { roomApi } from '@/services/roomApi';
import { searchApi } from '@/services/searchApi';
import { topicApi } from '@/services/topicApi';
import { showToast, toastSlice } from '@/slices/toastSlice';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    const { dispatch } = api;
    if (isRejectedWithValue(action)) {
      dispatch(
        showToast({
          message: action.error.message,
          severity: 'error',
          position: 'top-center',
        }),
      );
    }

    return next(action);
  };

const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [announcementApi.reducerPath]: announcementApi.reducer,
    [topicApi.reducerPath]: topicApi.reducer,
    toast: toastSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(searchApi.middleware)
      .concat(roomApi.middleware)
      .concat(announcementApi.middleware)
      .concat(topicApi.middleware)
      .concat(rtkQueryErrorLogger),
});

export default store;
