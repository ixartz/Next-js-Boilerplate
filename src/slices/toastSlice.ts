import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import type { ToastProps } from '@/components/partials/Toast';

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    toasts: [] as ToastProps[],
  },
  reducers: {
    showToast: (state, action: PayloadAction<ToastProps>) => {
      state.toasts.push({ ...action.payload, id: uuidv4() });
    },
  },
  selectors: {
    getToasts: (state) => state.toasts,
  },
});

export const { showToast } = toastSlice.actions;
export const { getToasts } = toastSlice.selectors;
