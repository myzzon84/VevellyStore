import { create } from 'zustand';

type Store = {
    lang: 'ua' | 'en';
    setLang: (lang: 'ua' | 'en') => void;
}

export const translateStore = create<Store>()(set =>({
    lang: 'en',
    setLang: (lang) => set({lang})
}))