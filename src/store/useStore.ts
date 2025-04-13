import type { PersistStorage, StorageValue } from 'zustand/middleware';
import { del, get, set } from 'idb-keyval';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Custom storage with IndexedDB
const storage: PersistStorage<State> = {
  getItem: async (name: string): Promise<StorageValue<State> | null> => {
    const value = await get(name);
    return value || null;
  },
  setItem: async (name: string, value: StorageValue<State>): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

type State = {
  number: number;
};

type Actions = {
  setNumber: (value: number) => void;
  getNumber: () => number;
};

export const useStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      number: 0,
      setNumber: value => set({ number: value }),
      getNumber: () => get().number,
    }),
    {
      name: 'number-storage',
      storage,
    },
  ),
);
