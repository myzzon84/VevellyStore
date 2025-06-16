import {create} from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

type Store = {
    loading: boolean,
    setLoading: (bool: boolean) => void,
    newProducts: [],
    setNewProducts: (arr: []) => void,
    bestsellerProducts: [],
    setBestsellersProducts: (arr: []) => void,
}

export const homePageStore = create<Store>()((set) => ({
    loading: false,
    setLoading: (bool: boolean) => set({loading: bool}),
    newProducts: [],
    setNewProducts: (arr: []) => set({newProducts: arr}),
    bestsellerProducts: [],
    setBestsellersProducts: (arr: []) => set({bestsellerProducts: arr}),
}))

if (import.meta.env.MODE === 'development') {
  mountStoreDevtool('Store', homePageStore);
}