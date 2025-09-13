import { create } from 'zustand';
import api from '../api/axios';
import { SwaggerCartItemType } from '../components/CardSlider';

type Store = {
	loading: boolean;
	setLoading: (bool: boolean) => void;
	allProducts: SwaggerCartItemType[];
	categoryProducts: SwaggerCartItemType[];
	getAllProducts: () => void;
	productImages: string[];
	setProductImages: (arr: string[]) => void;
	selectedProduct: SwaggerCartItemType | null;
	setSelectedProduct: (id: number) => void;
	getProductOfCategory: (categoryId: number) => Promise<SwaggerCartItemType[]>;
};

export const homePageStore = create<Store>()(set => ({
	selectedProduct: null,
	setSelectedProduct: id => {
		set({ selectedProduct: null });
		api.get(`product/${id}/`).then(data => {
			console.log(data.data);
			set({ selectedProduct: data.data });
		});
	},
	loading: false,
	setLoading: bool => set({ loading: bool }),
	allProducts: [],
	categoryProducts: [],
	productImages: [],
	setProductImages: arr => {
		set({ productImages: arr });
	},
	getAllProducts: () => {
		set({allProducts: []});
		set({ loading: true });
		api
			.get('all-products/?limit=20&offset=0', { headers: { 'Accept-Language': 'en' } })
			.then(res => {
				let result = res.data.results;
				set({ allProducts: result });
				set({ loading: false });
			})
			.catch(err => {
				set({ loading: false });
				console.log(err);
			});
	},
	getProductOfCategory: async categoryId => {
		set({ loading: true });
		set({allProducts: []});
		try {
			let response = await api.get(`all-products/?category=${categoryId}`);
			let result = await response.data.results;
			set({allProducts: result});
			set({ loading: false });
			return result;
		} catch (error) {
			set({ loading: false });
			console.log(error);
		}
	},
}));
