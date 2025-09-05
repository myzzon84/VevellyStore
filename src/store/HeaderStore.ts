import { create } from 'zustand';
import api from '../api/axios';
import { CategoriesType } from '../components/Header/Header';

type Store = {
	searchVisible: boolean;
	setSearchVisible: (bool: boolean) => void;
	isOpenCall: boolean;
	setIsOpenCall: (bool: boolean) => void;
};

export const headerStore = create<Store>()(set => ({
	searchVisible: false,
	setSearchVisible: bool => {
		set({ searchVisible: bool });
	},
	isOpenCall: false,
	setIsOpenCall: bool => set({ isOpenCall: bool }),
	
}));
