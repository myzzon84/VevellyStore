import { create } from 'zustand';

type Store = {
    currentSize: number;
    setCurrentSize: (num: number) => void;
}

export const productCardPageStore = create<Store>()(set => ({
    currentSize: 0,
    setCurrentSize: (num) => set({currentSize: num}),
}));