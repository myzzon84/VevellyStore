import { create } from 'zustand';
import api from '../api/axios';
import { CategoriesType } from '../components/Header/Header';

type Store = {
	searchVisible: boolean;
	setSearchVisible: (bool: boolean) => void;
	isOpenCall: boolean;
	setIsOpenCall: (bool: boolean) => void;
	categories: CategoriesType[];
	getCategories: () => void;
};

export const headerStore = create<Store>()(set => ({
	searchVisible: false,
	setSearchVisible: bool => {
		set({ searchVisible: bool });
		console.log('setSearchVisible');
	},
	isOpenCall: false,
	setIsOpenCall: bool => set({ isOpenCall: bool }),
	categories: [],
	getCategories: () => {
		api
			.get('categories/')
			.then(res => {
				console.log(res.data);
				set({ categories: res.data });
				sessionStorage.setItem('categories', JSON.stringify(res.data));
			})
			.catch(err => console.log(err));
	},
}));
