import { create } from 'zustand';

type Store = {
    searchVisible: boolean,
    setSearchVisible: (bool: boolean) => void;
}

export const headerStore = create<Store>()(set => ({
    searchVisible: false,
    setSearchVisible: (bool) => set({searchVisible: bool}),
}))