import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import api from '../api/axios';
import { CategoriesType } from '../components/Header/Header';

type Store = {
	categories: CategoriesType[];
	getCategories: () => void;
};

export const catalogStore = create<Store>()(
	persist(
		set => ({
			categories: [],
			getCategories: () => {
				api
					.get('categories/',{headers:{'Accept-Language': 'ua'}})
					.then(res => {
						console.log(res.data);
						console.log(res.headers);
						set({ categories: res.data });
					})
					.catch(err => console.log(err));
			},
		}),
		{
			name: 'categories',
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
