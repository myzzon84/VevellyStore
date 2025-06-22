import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { bool } from 'yup';

type Store = {
    searchVisible: boolean,
    setSearchVisible: (bool: boolean) => void;
}

export const headerStore = create<Store>()(set => ({
    searchVisible: false,
    setSearchVisible: (bool) => set({searchVisible: bool}),
}))