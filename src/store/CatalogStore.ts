import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import api from '../api/axios';
import { CategoriesType } from '../components/Header/Header';

type Store = {
	loading: boolean;
	categories: CategoriesType[];
	getCategories: () => void;
};

export const catalogStore = create<Store>()(
	persist(
		set => ({
			loading: true,
			categories: [],
			getCategories: () => {
				api
					.get('categories/',{headers:{'Accept-Language': 'ua'}})
					.then(res => {
						console.log(res.data);
						console.log(res.headers);
						set({ categories: res.data });
						set({loading: false});
					})
					.catch(err => {
						console.log(err);
						set({loading: false});
					});
			},
		}),
		{
			name: 'categories',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
