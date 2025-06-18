import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import api from '../api/axios';
import { SwaggerCartItemType } from '../components/CardSlider';

type Store = {
	loading: boolean;
	setLoading: (bool: boolean) => void;
	allProducts: [];
	getAllProducts: () => void;
	productImages: string[];
	setProductImages: (arr: string[]) => void;
	selectedProduct: SwaggerCartItemType | null;
	setSelectedProduct: (id: number) => void;
};

export const homePageStore = create<Store>()(set => ({
	selectedProduct: null,
	setSelectedProduct: id => {
		api.get(`product/${id}`).then(data => {
			console.log(data.data);
			set({ selectedProduct: data.data });
		});
	},
	loading: false,
	setLoading: bool => set({ loading: bool }),
	allProducts: [],
	productImages: [],
	setProductImages: arr => {
		set({ productImages: arr });
	},
	getAllProducts: () => {
		set({ loading: true });
		api
			.get('all-products/')
			.then(res => {
				let result = res.data.results;
				console.log(result);
				set({ allProducts: result });
				set({ loading: false });
			})
			.catch(err => {
				set({ loading: false });
				console.log(err);
			});
	},
}));

if (import.meta.env.MODE === 'development') {
	mountStoreDevtool('Store', homePageStore);
}
